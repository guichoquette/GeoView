import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MaterialReactTable,
  type MRT_ColumnDef as MRTColumnDef,
  MRT_ToggleDensePaddingButton as MRTToggleDensePaddingButton,
  MRT_ShowHideColumnsButton as MRTShowHideColumnsButton,
  MRT_ToggleFiltersButton as MRTToggleFiltersButton,
  MRT_FullScreenToggleButton as MRTFullScreenToggleButton,
  type MRT_SortingState as MRTSortingState,
  type MRT_Virtualizer as MRTVirtualizer,
} from 'material-react-table';
import { Extent } from 'ol/extent';
import { Geometry } from 'ol/geom';
import { darken } from '@mui/material';
import { Box, IconButton, ZoomInSearchIcon } from '@/ui';
import ExportButton from './export-button';
import JSONExportButton from './json-export-button';

interface FeatureInfo {
  featureInfoKey: string;
  featureInfoValue: string | number;
  fieldType: string;
}

export interface Features {
  geometry: Geometry;
  extent?: Extent;
  featureKey?: FeatureInfo;
  featureIcon?: FeatureInfo;
  featureActions?: FeatureInfo;
  rows: Record<string, string>;
}

export interface MapDataTableData {
  features: Features[];
  fieldAliases: Record<string, string>;
}

export interface ColumnsType {
  ICON: string;
  ZOOM: string;
  [key: string]: string;
}

interface MapDataTableProps {
  data: MapDataTableData;
  layerId: string;
}

/**
 * Build Data table from map.
 * @param {MapDataTableProps} data map data which will be used to build data table.
 * @param {string} layerId id of the layer
 *
 * @return {ReactElement} Data table as react element.
 */

function MapDataTable({ data, layerId }: MapDataTableProps) {
  const { t } = useTranslation<string>();

  // optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef = useRef<MRTVirtualizer<HTMLDivElement, HTMLTableRowElement>>(null);

  const [sorting, setSorting] = useState<MRTSortingState>([]);

  useEffect(() => {
    // scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);

  /**
   * Build material react data table column header.
   *
   * @param {object} data.fieldAliases object values transformed into required key value property of material react data table
   */
  const columns = useMemo<MRTColumnDef<ColumnsType>[]>(() => {
    return Object.values({ icon: t('dataTable.icon'), zoom: t('dataTable.zoom'), ...data.fieldAliases }).map((fieldAlias) => {
      return {
        accessorKey: fieldAlias,
        header: fieldAlias,
        ...([t('dataTable.icon'), t('dataTable.zoom')].includes(fieldAlias) && { size: 100 }),
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Build Rows for datatable
   *
   * @param {Features} features list of objects transform into rows.
   */
  const rows = useMemo(() => {
    return data.features.map((feature) => {
      return {
        ICON: 'Image',
        ZOOM: (
          <IconButton>
            <ZoomInSearchIcon />
          </IconButton>
        ),
        ...feature.rows,
      };
    }) as unknown as ColumnsType[];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ padding: '1rem 0' }}>
      <MaterialReactTable
        columns={columns}
        data={rows}
        enableGlobalFilter={false}
        enableRowSelection
        initialState={{
          columnPinning: { left: [t('dataTable.icon'), t('dataTable.zoom')] },
          density: 'compact',
          pagination: { pageSize: 10, pageIndex: 0 },
        }}
        renderToolbarInternalActions={({ table }) => (
          <Box>
            <MRTToggleFiltersButton table={table} />
            <MRTShowHideColumnsButton table={table} />
            <MRTToggleDensePaddingButton table={table} />
            <MRTFullScreenToggleButton table={table} />
            <ExportButton rows={rows} columns={columns}>
              <JSONExportButton features={data.features} layerId={layerId} />
            </ExportButton>
          </Box>
        )}
        enableBottomToolbar={false}
        enableColumnResizing
        enableColumnVirtualization
        enableGlobalFilterModes
        enablePagination={false}
        enablePinning
        enableRowVirtualization
        muiTableContainerProps={{ sx: { maxHeight: '600px' } }}
        onSortingChange={setSorting}
        state={{ sorting }}
        rowVirtualizerInstanceRef={rowVirtualizerInstanceRef}
        rowVirtualizerProps={{ overscan: 5 }}
        columnVirtualizerProps={{ overscan: 2 }}
        muiTableBodyProps={{
          sx: (theme) => ({
            // stripe style of table
            '& tr:nth-of-type(odd)': {
              backgroundColor: darken(theme.palette.background.default, 0.1),
            },
            '& tr:hover > td': {
              backgroundColor: '#00ffff14',
            },
            '& td': {
              backgroundColor: 'inherit',
            },
          }),
        }}
      />
    </Box>
  );
}

export default MapDataTable;
