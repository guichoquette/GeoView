/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable block-scoped-var, no-var, vars-on-top, no-param-reassign */
import axios from 'axios';

import ImageLayer from 'ol/layer/Image';
import Static, { Options as SourceOptions } from 'ol/source/ImageStatic';
import { Options as ImageOptions } from 'ol/layer/BaseImage';
import { Coordinate } from 'ol/coordinate';
import { Pixel } from 'ol/pixel';

import { Cast, TypeJsonObject } from '../../../../core/types/global-types';
import { AbstractGeoViewLayer, CONST_LAYER_TYPES, TypeLegend } from '../abstract-geoview-layers';
import { AbstractGeoViewRaster, TypeBaseRasterLayer } from './abstract-geoview-raster';
import {
  TypeLayerEntryConfig,
  TypeGeoviewLayerConfig,
  TypeListOfLayerEntryConfig,
  layerEntryIsGroupLayer,
  TypeImageStaticLayerEntryConfig,
} from '../../../map/map-schema-types';
import { codedValueType, rangeDomainType, TypeArrayOfFeatureInfoEntries } from '../../../../api/events/payloads/get-feature-info-payload';
import { getLocalizedValue } from '../../../../core/utils/utilities';
import { api } from '../../../../app';
import { Layer } from '../../layer';

export interface TypeImageStaticLayerConfig extends Omit<TypeGeoviewLayerConfig, 'listOfLayerEntryConfig'> {
  geoviewLayerType: 'imageStatic';
  listOfLayerEntryConfig: TypeImageStaticLayerEntryConfig[];
}

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeGeoviewLayerConfig as a TypeImageStaticLayerConfig if the geoviewLayerType attribute of the
 * verifyIfLayer parameter is ImageStatic. The type ascention applies only to the true block of the if clause that use this function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const layerConfigIsImageStatic = (verifyIfLayer: TypeGeoviewLayerConfig): verifyIfLayer is TypeImageStaticLayerConfig => {
  return verifyIfLayer?.geoviewLayerType === CONST_LAYER_TYPES.IMAGE_STATIC;
};

/** *****************************************************************************************************************************
 * type guard function that redefines an AbstractGeoViewLayer as a ImageStatic if the type attribute of the verifyIfGeoViewLayer
 * parameter is ImageStatic. The type ascention applies only to the true block of the if clause that use this function.
 *
 * @param {AbstractGeoViewLayer} verifyIfGeoViewLayer Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewLayerIsImageStatic = (verifyIfGeoViewLayer: AbstractGeoViewLayer): verifyIfGeoViewLayer is ImageStatic => {
  return verifyIfGeoViewLayer?.type === CONST_LAYER_TYPES.IMAGE_STATIC;
};

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeLayerEntryConfig as a TypeImageStaticLayerEntryConfig if the geoviewLayerType attribute of the
 * verifyIfGeoViewEntry.geoviewRootLayer attribute is ImageStatic. The type ascention applies only to the true block of
 * the if clause that use this function.
 *
 * @param {TypeLayerEntryConfig} verifyIfGeoViewEntry Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewEntryIsImageStatic = (
  verifyIfGeoViewEntry: TypeLayerEntryConfig
): verifyIfGeoViewEntry is TypeImageStaticLayerEntryConfig => {
  return verifyIfGeoViewEntry?.geoviewRootLayer?.geoviewLayerType === CONST_LAYER_TYPES.IMAGE_STATIC;
};

// ******************************************************************************************************************************
// ******************************************************************************************************************************
/** *****************************************************************************************************************************
 * A class to add image static layer.
 *
 * @exports
 * @class ImageStatic
 */
// ******************************************************************************************************************************
export class ImageStatic extends AbstractGeoViewRaster {
  /** ***************************************************************************************************************************
   * Initialize layer
   *
   * @param {string} mapId the id of the map
   * @param {TypeImageStaticLayerConfig} layerConfig the layer configuration
   */
  constructor(mapId: string, layerConfig: TypeImageStaticLayerConfig) {
    super(CONST_LAYER_TYPES.IMAGE_STATIC, layerConfig, mapId);
  }

  /** ***************************************************************************************************************************
   * Extract the type of the specified field from the metadata. If the type can not be found, return 'string'.
   *
   * @param {string} fieldName field name for which we want to get the type.
   * @param {TypeLayerEntryConfig} layerConfig layer configuration.
   *
   * @returns {'string' | 'date' | 'number'} The type of the field.
   */
  protected getFieldType(fieldName: string, layerConfig: TypeLayerEntryConfig): 'string' | 'date' | 'number' {
    return 'string';
  }

  /** ***************************************************************************************************************************
   * Returns null. Image Static services don't have domains.
   *
   * @param {string} fieldName field name for which we want to get the domain.
   * @param {TypeLayerEntryConfig} layerConfig layer configuration.
   *
   * @returns {null | codedValueType | rangeDomainType} The domain of the field.
   */
  protected getFieldDomain(fieldName: string, layerConfig: TypeLayerEntryConfig): null | codedValueType | rangeDomainType {
    return null;
  }

  /** ***************************************************************************************************************************
   * This method reads the service metadata from the metadataAccessPath.
   *
   * @returns {Promise<void>} A promise that the execution is completed.
   */
  protected getServiceMetadata(): Promise<void> {
    const promisedExecution = new Promise<void>((resolve) => {
      // there is no metadata for static image layer type
      resolve();
    });
    return promisedExecution;
  }

  /** ***************************************************************************************************************************
   * Get the legend image of a layer.
   *
   * @param {TypeImageStaticLayerEntryConfig} layerConfig layer configuration.
   *
   * @returns {blob} image blob
   */
  private getLegendImage(layerConfig: TypeImageStaticLayerEntryConfig): Promise<string | ArrayBuffer | null> {
    const promisedImage = new Promise<string | ArrayBuffer | null>((resolve) => {
      const readImage = (blob: Blob): Promise<string | ArrayBuffer | null> =>
        // eslint-disable-next-line @typescript-eslint/no-shadow
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(blob);
        });

      let legendUrl: string | undefined = getLocalizedValue(layerConfig.source.dataAccessPath, this.mapId);

      if (legendUrl) {
        legendUrl = legendUrl.toLowerCase().startsWith('http:') ? `https${legendUrl.slice(4)}` : legendUrl;

        axios
          .get<TypeJsonObject>(legendUrl, { responseType: 'blob', withCredentials: false })
          .then((response) => {
            resolve(readImage(Cast<Blob>(response.data)));
          })
          .catch((error) => resolve(null));
      } else resolve(null);
    });
    return promisedImage;
  }

  /** ***************************************************************************************************************************
   * Return the legend of the layer. When layerPathOrConfig is undefined, the activeLayer of the class is used. This routine
   * return null when the layerPath specified is not found or when the layerPathOrConfig is undefined and the active layer
   * is null or the selected layerConfig is undefined or null.
   *
   * @param {string | TypeLayerEntryConfig | null} layerPathOrConfig Optional layer path or configuration.
   *
   * @returns {Promise<TypeLegend | null>} The legend of the layer.
   */
  getLegend(layerPathOrConfig: string | TypeLayerEntryConfig | null = this.activeLayer): Promise<TypeLegend | null> {
    const promisedLegend = new Promise<TypeLegend | null>((resolve) => {
      const layerConfig = Cast<TypeImageStaticLayerEntryConfig | undefined | null>(
        typeof layerPathOrConfig === 'string' ? this.getLayerConfig(layerPathOrConfig) : layerPathOrConfig
      );
      if (!layerConfig) resolve(null);

      this.getLegendImage(layerConfig!).then((legendImage) => {
        if (!legendImage)
          resolve({
            type: this.type,
            layerPath: Layer.getLayerPath(layerConfig!),
            layerName: layerConfig!.layerName,
            legend: null,
          });
        else {
          api
            .map(this.mapId)
            .geoviewRenderer.loadImage(legendImage as string)
            .then((image) => {
              if (image) {
                const drawingCanvas = document.createElement('canvas');
                drawingCanvas.width = image.width;
                drawingCanvas.height = image.height;
                const drawingContext = drawingCanvas.getContext('2d')!;
                drawingContext.drawImage(image, 0, 0);
                const legend: TypeLegend = {
                  type: this.type,
                  layerPath: Layer.getLayerPath(layerConfig!),
                  layerName: layerConfig!.layerName,
                  legend: drawingCanvas,
                };
                resolve(legend);
              } else
                resolve({
                  type: this.type,
                  layerPath: Layer.getLayerPath(layerConfig!),
                  layerName: layerConfig!.layerName,
                  legend: null,
                });
            });
        }
      });
    });
    return promisedLegend;
  }

  /** ***************************************************************************************************************************
   * This method recursively validates the layer configuration entries by filtering and reporting invalid layers. If needed,
   * extra configuration may be done here.
   *
   * @param {TypeListOfLayerEntryConfig} listOfLayerEntryConfig The list of layer entries configuration to validate.
   *
   * @returns {TypeListOfLayerEntryConfig} A new list of layer entries configuration with deleted error layers.
   */
  protected validateListOfLayerEntryConfig(listOfLayerEntryConfig: TypeListOfLayerEntryConfig): TypeListOfLayerEntryConfig {
    return listOfLayerEntryConfig.filter((layerEntryConfig: TypeLayerEntryConfig) => {
      if (api.map(this.mapId).layer.isRegistered(layerEntryConfig)) {
        this.layerLoadError.push({
          layer: Layer.getLayerPath(layerEntryConfig),
          consoleMessage: `Duplicate layerPath (mapId:  ${this.mapId}, layerPath: ${Layer.getLayerPath(layerEntryConfig)})`,
        });
        return false;
      }

      if (layerEntryIsGroupLayer(layerEntryConfig)) {
        layerEntryConfig.listOfLayerEntryConfig = this.validateListOfLayerEntryConfig(layerEntryConfig.listOfLayerEntryConfig!);
        if (layerEntryConfig.listOfLayerEntryConfig.length) {
          api.map(this.mapId).layer.registerLayerConfig(layerEntryConfig);
          return true;
        }
        this.layerLoadError.push({
          layer: Layer.getLayerPath(layerEntryConfig),
          consoleMessage: `Empty layer group (mapId:  ${this.mapId}, layerPath: ${Layer.getLayerPath(layerEntryConfig)})`,
        });
        return false;
      }

      // When no metadata are provided, all layers are considered valid.
      if (!this.metadata) {
        api.map(this.mapId).layer.registerLayerConfig(layerEntryConfig);
        return true;
      }

      // Note that Image Static metadata as we defined it does not contains metadata layer group. If you need geojson layer group,
      // you can define them in the configuration section.
      if (Array.isArray(this.metadata?.listOfLayerEntryConfig)) {
        const metadataLayerList = Cast<TypeLayerEntryConfig[]>(this.metadata?.listOfLayerEntryConfig);
        for (var i = 0; i < metadataLayerList.length; i++) if (metadataLayerList[i].layerId === layerEntryConfig.layerId) break;
        if (i === metadataLayerList.length) {
          this.layerLoadError.push({
            layer: Layer.getLayerPath(layerEntryConfig),
            consoleMessage: `GeoJSON layer not found (mapId:  ${this.mapId}, layerPath: ${Layer.getLayerPath(layerEntryConfig)})`,
          });
          return false;
        }
        api.map(this.mapId).layer.registerLayerConfig(layerEntryConfig);
        return true;
      }
      this.layerLoadError.push({
        layer: Layer.getLayerPath(layerEntryConfig),
        consoleMessage: `Invalid GeoJSON metadata (listOfLayerEntryConfig) prevent loading of layer (mapId:  ${
          this.mapId
        }, layerPath: ${Layer.getLayerPath(layerEntryConfig)})`,
      });
      return false;
    });
  }

  /** ****************************************************************************************************************************
   * This method creates a GeoView Image Static layer using the definition provided in the layerEntryConfig parameter.
   *
   * @param {TypeImageStaticLayerEntryConfig} layerEntryConfig Information needed to create the GeoView layer.
   *
   * @returns {TypeBaseRasterLayer} The GeoView raster layer that has been created.
   */
  processOneLayerEntry(layerEntryConfig: TypeImageStaticLayerEntryConfig): Promise<TypeBaseRasterLayer | null> {
    const promisedVectorLayer = new Promise<TypeBaseRasterLayer | null>((resolve) => {
      const sourceOptions: SourceOptions = {
        url: getLocalizedValue(layerEntryConfig.source.dataAccessPath, this.mapId) || '',
      };
      if (layerEntryConfig.source.crossOrigin) {
        sourceOptions.crossOrigin = layerEntryConfig.source.crossOrigin;
      } else {
        sourceOptions.crossOrigin = 'Anonymous';
      }

      if (layerEntryConfig.source.projection) {
        sourceOptions.projection = `EPSG:${layerEntryConfig.source.projection}`;
      } else throw new Error('Parameter projection is not define in source element of layerEntryConfig.');

      if (layerEntryConfig.source.extent) {
        sourceOptions.imageExtent = layerEntryConfig.source.extent;
      } else throw new Error('Parameter extent is not define in source element of layerEntryConfig.');

      const staticImageOptions: ImageOptions<Static> = { source: new Static(sourceOptions) };
      // layerEntryConfig.initialSettings cannot be undefined because config-validation set it to {} if it is undefined.
      if (layerEntryConfig.initialSettings?.extent !== undefined) staticImageOptions.extent = layerEntryConfig.initialSettings?.extent;
      if (layerEntryConfig.initialSettings?.maxZoom !== undefined) staticImageOptions.maxZoom = layerEntryConfig.initialSettings?.maxZoom;
      if (layerEntryConfig.initialSettings?.minZoom !== undefined) staticImageOptions.minZoom = layerEntryConfig.initialSettings?.minZoom;
      if (layerEntryConfig.initialSettings?.opacity !== undefined) staticImageOptions.opacity = layerEntryConfig.initialSettings?.opacity;
      if (layerEntryConfig.initialSettings?.visible !== undefined) staticImageOptions.visible = layerEntryConfig.initialSettings?.visible;

      layerEntryConfig.gvLayer = new ImageLayer(staticImageOptions);
      resolve(layerEntryConfig.gvLayer);
    });
    return promisedVectorLayer;
  }

  /** ***************************************************************************************************************************
   * This method is used to process the layer's metadata. It will fill the empty fields of the layer's configuration (renderer,
   * initial settings, fields and aliases).
   *
   * @param {TypeVectorLayerEntryConfig} layerEntryConfig The layer entry configuration to process.
   *
   * @returns {Promise<void>} A promise that the layer configuration has its metadata processed.
   */
  protected processLayerMetadata(layerEntryConfig: TypeImageStaticLayerEntryConfig): Promise<void> {
    const promisedExecution = new Promise<void>((resolve) => {
      // there is no metadata for static image layer type
      resolve();
    });
    return promisedExecution;
  }

  /** ***************************************************************************************************************************
   * Image Static return null because these services do not support getFeatureInfo queries. When getFeatureInfo is supported this
   * method returns feature information for all the features around the provided Pixel.
   *
   * @param {Coordinate} location The pixel coordinate that will be used by the query.
   * @param {TypeImageStaticLayerEntryConfig} layerConfig The layer configuration.
   *
   * @returns {Promise<TypeArrayOfFeatureInfoEntries>} The feature info table.
   */
  protected getFeatureInfoAtPixel(location: Pixel, layerConfig: TypeImageStaticLayerEntryConfig): Promise<TypeArrayOfFeatureInfoEntries> {
    const promisedQueryResult = new Promise<TypeArrayOfFeatureInfoEntries>((resolve) => {
      resolve([]);
    });
    return promisedQueryResult;
  }

  /** ***************************************************************************************************************************
   * Image Static return null because these services do not support getFeatureInfo queries. When getFeatureInfo is supported this
   * method returns information for all the features around the provided coordinate.
   *
   * @param {Coordinate} location The coordinate that will be used by the query.
   * @param {TypeImageStaticLayerEntryConfig} layerConfig The layer configuration.
   *
   * @returns {Promise<TypeArrayOfFeatureInfoEntries>} The feature info table.
   */
  protected getFeatureInfoAtCoordinate(
    location: Coordinate,
    layerConfig: TypeImageStaticLayerEntryConfig
  ): Promise<TypeArrayOfFeatureInfoEntries> {
    const promisedQueryResult = new Promise<TypeArrayOfFeatureInfoEntries>((resolve) => {
      resolve([]);
    });
    return promisedQueryResult;
  }

  /** ***************************************************************************************************************************
   * Image Static return null because these services do not support getFeatureInfo queries. When getFeatureInfo is supported this
   * method returns feature information for all the features around the provided longitude latitude.
   *
   * @param {Coordinate} location The coordinate that will be used by the query.
   * @param {TypeImageStaticLayerEntryConfig} layerConfig The layer configuration.
   *
   * @returns {Promise<TypeArrayOfFeatureInfoEntries>} The feature info table.
   */
  protected getFeatureInfoAtLongLat(
    location: Coordinate,
    layerConfig: TypeImageStaticLayerEntryConfig
  ): Promise<TypeArrayOfFeatureInfoEntries> {
    const promisedQueryResult = new Promise<TypeArrayOfFeatureInfoEntries>((resolve) => {
      resolve([]);
    });
    return promisedQueryResult;
  }

  /** ***************************************************************************************************************************
   * Image Static return null because these services do not support getFeatureInfo queries. When getFeatureInfo is supported this
   * method returns feature information for all the features in the provided bounding box.
   *
   * @param {Coordinate} location The coordinate that will be used by the query.
   * @param {TypeImageStaticLayerEntryConfig} layerConfig The layer configuration.
   *
   * @returns {Promise<TypeArrayOfFeatureInfoEntries>} The feature info table.
   */
  protected getFeatureInfoUsingBBox(
    location: Coordinate[],
    layerConfig: TypeImageStaticLayerEntryConfig
  ): Promise<TypeArrayOfFeatureInfoEntries> {
    const promisedQueryResult = new Promise<TypeArrayOfFeatureInfoEntries>((resolve) => {
      resolve([]);
    });
    return promisedQueryResult;
  }

  /** ***************************************************************************************************************************
   * Image Static return null because these services do not support getFeatureInfo queries. When getFeatureInfo is supported this
   * method returns feature information for all the features in the provided polygon.
   *
   * @param {Coordinate} location The coordinate that will be used by the query.
   * @param {TypeImageStaticLayerEntryConfig} layerConfig The layer configuration.
   *
   * @returns {Promise<TypeArrayOfFeatureInfoEntries>} The feature info table.
   */
  protected getFeatureInfoUsingPolygon(
    location: Coordinate[],
    layerConfig: TypeImageStaticLayerEntryConfig
  ): Promise<TypeArrayOfFeatureInfoEntries> {
    const promisedQueryResult = new Promise<TypeArrayOfFeatureInfoEntries>((resolve) => {
      resolve([]);
    });
    return promisedQueryResult;
  }
}