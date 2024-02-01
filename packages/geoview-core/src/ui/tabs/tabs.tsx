import { SyntheticEvent, ReactNode, useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash/debounce';
import { Grid, Tab as MaterialTab, Tabs as MaterialTabs, TabsProps, TabProps, BoxProps, Box } from '@mui/material';
import { Select, TypeMenuItemProps } from '../select/select';

import { HtmlToReact } from '@/core/containers/html-to-react';
import { TabPanel } from './tab-panel';
import {
  useUIActiveFooterTabId,
  useUIActiveTrapGeoView,
  useUIStoreActions,
} from '@/core/stores/store-interface-and-intial-values/ui-state';
import { getSxClasses } from './tabs-style';
import { logger } from '@/core/utils/logger';
import { useGeoViewMapId } from '@/app';

/**
 * Type used for properties of each tab
 */
export type TypeTabs = {
  id: string;
  value: number;
  label: string;
  content?: JSX.Element | string;
  icon?: JSX.Element;
};

/**
 * Tabs ui properties
 */
/* eslint-disable react/require-default-props */
export interface TypeTabsProps {
  tabs: TypeTabs[];
  selectedTab?: number;
  boxProps?: BoxProps;
  tabsProps?: TabsProps;
  tabProps?: TabProps;
  rightButtons?: unknown;
  isCollapsed?: boolean;
  handleCollapse?: () => void | undefined;
  TabContentVisibilty?: string | undefined;
  onSelectedTabChanged?: (tab: TypeTabs) => void;
}

/**
 * Create a tabs ui
 *
 * @param {TypeTabsProps} props properties for the tabs ui
 * @returns {JSX.Element} returns the tabs ui
 */
export function Tabs(props: TypeTabsProps): JSX.Element {
  const { tabs, rightButtons, selectedTab, isCollapsed, handleCollapse, onSelectedTabChanged, TabContentVisibilty = 'inherit' } = props;
  const mapId = useGeoViewMapId();
  const mapElem = document.getElementById(`shell-${mapId}`);
  const { t } = useTranslation<string>();

  const sxClasses = getSxClasses();
  // internal state
  const [value, setValue] = useState(0);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  // reference to display tab panels on demand.
  const tabPanelRefs = useRef([tabs[0]]);
  // get store values and actions
  const activeTrapGeoView = useUIActiveTrapGeoView();
  const activeFooterTabId = useUIActiveFooterTabId();

  const { closeModal, openModal } = useUIStoreActions();

  /**
   * Update Tab panel when value change from tabs and dropdown.
   * @param {number} tabValue index of the tab or dropdown.
   */
  const updateTabPanel = (tabValue: number) => {
    // Update panel refs when tab value is changed.
    if (!tabPanelRefs.current[tabValue]) {
      tabPanelRefs.current[tabValue] = tabs[tabValue];
    }
    setValue(tabValue);
    // Callback
    onSelectedTabChanged?.(tabs[tabValue]);
  };

  /**
   * Handle a tab change
   * @param {number} newValue value of the new tab
   */
  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
    updateTabPanel(newValue);
  };

  /**
   * Handle a tab click
   * If the panel is collapsed when tab is clicked, expand the panel
   */
  const handleClick = (index: number) => {
    if (handleCollapse !== undefined && (isCollapsed || value === index)) handleCollapse();

    // WCAG - if keyboard navigation is on and the tabs gets expanded, set the trap store info to open, close otherwise
    if (activeTrapGeoView) openModal({ activeElementId: `panel-${index}`, callbackElementId: `tab-${index}` });
    else closeModal();
  };

  useEffect(() => {
    // Log
    logger.logTraceUseEffect('TABS - selectedTab', selectedTab, value);

    if (selectedTab && value !== selectedTab) setValue(selectedTab);
  }, [selectedTab, value]);

  useEffect(() => {
    // Log
    logger.logTraceUseEffect('TABS - Mouse Clicked On Map');
    //  open details tab when clicked on layer on
    if (activeFooterTabId === 'details') {
      const idx = tabs.findIndex((tab) => tab.id === activeFooterTabId);
      if (!tabPanelRefs.current[idx]) {
        tabPanelRefs.current[idx] = tabs[idx];
      }
      setValue(idx);
      // open tab panel if closed.
      if (handleCollapse && isCollapsed) handleCollapse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFooterTabId]);

  /**
   * Build mobile tab dropdown.
   */
  const mobileTabsDropdownValues: TypeMenuItemProps[] = useMemo(() => {
    return tabs.map((tab) => ({
      type: 'item',
      item: { value: tab.value, children: t(`${tab.label}`) },
    }));
  }, [tabs, t]);

  useEffect(() => {
    // show/hide mobile dropdown when screen size change.
    const resizeHandler = () => (document.body.offsetWidth < 768 ? setShowMobileDropdown(true) : setShowMobileDropdown(false));
    // update the showMobileDropdown state on page load.
    resizeHandler();

    const handleResizeDebounced = debounce(resizeHandler, 10);
    window.addEventListener('resize', handleResizeDebounced);
    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container sx={{ width: '100%', height: '100%' }}>
      <Grid container>
        <Grid item xs={7} sm={10} sx={{ background: 'white' }}>
          {!showMobileDropdown ? (
            <MaterialTabs
              // eslint-disable-next-line react/destructuring-assignment
              {...props.tabsProps}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              {tabs.map((tab, index) => {
                return (
                  <MaterialTab
                    label={t(tab.label)}
                    key={`${t(tab.label)}`}
                    icon={tab.icon}
                    iconPosition="start"
                    // eslint-disable-next-line react/destructuring-assignment
                    {...props.tabProps}
                    id={`tab-${index}`}
                    onClick={() => handleClick(index)}
                    sx={sxClasses.tab}
                  />
                );
              })}
            </MaterialTabs>
          ) : (
            <Box sx={sxClasses.mobileDropdown}>
              <Select
                labelId="provinceGeolocatorFiltersLabel"
                formControlProps={{ size: 'small' }}
                id="footerTabsDropdown"
                fullWidth
                inputLabel={{ id: 'footerTabsDropdownLabel' }}
                menuItems={mobileTabsDropdownValues}
                value={value}
                onChange={(e) => updateTabPanel(e.target.value as number)}
                MenuProps={{ container: mapElem }}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={5} sm={2} sx={sxClasses.rightIcons}>
          {rightButtons as ReactNode}
        </Grid>
      </Grid>
      <Grid
        id="tabPanel"
        item
        xs={12}
        sx={{
          ...sxClasses.panel,
          visibility: TabContentVisibilty,
        }}
      >
        {tabPanelRefs.current?.map((tab, index) => (
          <TabPanel value={value} index={index} key={tab.id}>
            {typeof tab?.content === 'string' ? <HtmlToReact htmlContent={(tab?.content as string) ?? ''} /> : tab.content}
          </TabPanel>
        ))}
      </Grid>
    </Grid>
  );
}
