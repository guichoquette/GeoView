// #region LAYER TREE CONFIG TYPE GUARDS

import { AbstractGeoviewLayerConfig } from '@config/types/classes/geoview-config/abstract-geoview-layer-config';
import { EsriDynamicLayerConfig } from '@config/types/classes/geoview-config/raster-config/esri-dynamic-config';
import { ConfigBaseClass } from '@config/types/classes/sub-layer-config/config-base-class';
import { GroupLayerEntryConfig } from '@config/types/classes/sub-layer-config/group-layer-entry-config';
import { EsriDynamicLayerEntryConfig } from '@config/types/classes/sub-layer-config/raster-leaf/esri-dynamic-layer-entry-config';
import { CV_CONST_LAYER_TYPES } from '@config/types/config-constants';
import { TypeJsonObject } from '@config/types/config-types';
import {
  TypeBaseVectorGeometryConfig,
  TypeIconSymbolVectorConfig,
  TypeLineStringVectorConfig,
  TypePolygonVectorConfig,
  TypeSimpleSymbolVectorConfig,
} from './map-schema-types';

/**
 * Type guard function that redefines a ConfigBaseClass as a GroupLayerEntryConfig if the entryType attribute of the verifyIfLayer
 * parameter is CV_CONST_SUB_LAYER_TYPES.GROUP. The type assertion applies only to the true block of the if clause that use this
 * function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const layerEntryIsGroupLayer = (verifyIfLayer: ConfigBaseClass | TypeJsonObject): verifyIfLayer is GroupLayerEntryConfig => {
  return verifyIfLayer?.isLayerGroup as boolean;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a VectorLayerEntryConfig if the entryType attribute of
 * the verifyIfLayer parameter is 'vector'. The type assertion applies only to the true block of the if clause that use this
 * function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsVector = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is VectorLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_SUB_LAYER_TYPES.VECTOR;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a VectorTileEntryConfig if the entryType attribute of the
 * verifyIfLayer parameter is 'vector' and the object has a style attribute. The type assertion applies only to the true block
 * of the if clause that use this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsVectorTile = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is VectorTilesLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_SUB_LAYER_TYPES.VECTOR_TILE;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a TileLayerEntryConfig if the entryType attribute of the verifyIfLayer
 * parameter is 'raster-tile'. The type assertion applies only to the true block of the if clause that use this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsRasterTile = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is TileLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_SUB_LAYER_TYPES.RASTER_TILE;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a OgcWmsLayerEntryConfig if the entryType attribute of the
 * verifyIfLayer parameter is CV_CONST_LAYER_TYPES.WMS. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsOgcWms = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is OgcWmsLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_LAYER_TYPES.WMS;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a EsriDynamicLayerEntryConfig if the entryType attribute of
 * the verifyIfLayer parameter is CV_CONST_LAYER_TYPES.WMS. The type assertion applies only to the true block of the if clause that
 * use this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const layerEntryIsEsriDynamic = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is EsriDynamicLayerEntryConfig => {
  return verifyIfLayer?.geoviewLayerType === CV_CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/**
 * type guard function that redefines a ConfigBaseClass as a EsriImageLayerEntryConfig if the entryType attribute of the
 * verifyIfLayer parameter is CV_CONST_LAYER_TYPES.WMS. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsEsriImage = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is EsriImageLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_LAYER_TYPES.ESRI_IMAGE;
};

/**
 * Type guard function that redefines a ConfigBaseClass as a ImageStaticLayerEntryConfig if the entryType attribute of
 * the verifyIfLayer parameter is CV_CONST_LAYER_TYPES.WMS. The type assertion applies only to the true block of the if clause that
 * use this function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerEntryIsImageStatic = (verifyIfLayer: ConfigBaseClass): verifyIfLayer is ImageStaticLayerEntryConfig => {
  return verifyIfLayer?.entryType === CV_CONST_LAYER_TYPES.IMAGE_STATIC;
};

// #region GEOVIEW CONFIG TYPE GUARDS
/**
 * Type guard function that redefines an AbstractGeoviewLayerConfig as a GeocoreConfig if the entryType attribute of the
 * verifyIfLay parameter is CV_CONST_LAYER_TYPES.GEOCORE. The type assertion applies only to the true block of the if clause that use this
 * function.
 *
 * @param {ConfigBaseClass} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
// GV: We must decide how we want to process geocore layers. We need to specify how the viewer handles geocores. Do we want them to be
// GV: specified at the highest level (GeoviewLayerType) or further down the layer tree (layerEntryConfig)?
// GV: If specified at the highest level, all layerEntryConfig are geocore and you can't mix IDs in the tree that return different
// GV: types, like EsriDynamic and GeoJSON.
// GV: If specified at the lowest level, it is possible to put a geocore entry in the tree with entries of a particular type, as
// GV: long as all the resulting types are the same.
// GV: The simplest implementation is the second. By specifying geocore layers at tree level, all you need to do is give a layerId
// GV: and a geocoreId, and the validator will fetch the layer definition to fill in the field value at leaf level in the tree.
// GV: The presence of a value in the geocoreId property indicates the origin of the layer.
export const mapConfigLayerEntryIsGeoCore = (verifyIfLayer: AbstractGeoviewLayerConfig): verifyIfLayer is GeocoreConfig => {
  return verifyIfLayer.geoviewLayerType === CV_CONST_LAYER_TYPES.GEOCORE;
};

/**
 * Type guard function that redefines a TypeGeoviewLayerConfig as a TypeEsriDynamicLayerConfig if the geoviewLayerType attribute
 * of the verifyIfLayer parameter is ESRI_DYNAMIC. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const geoviewConfigIsEsriDynamic = (verifyIfLayer: AbstractGeoviewLayerConfig): verifyIfLayer is EsriDynamicLayerConfig => {
  return verifyIfLayer?.geoviewLayerType === CV_CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/**
 * type guard function that redefines a CsvLayerEntryConfig as a TypeCSVLayerConfig if the geoviewLayerType attribute of the
 * verifyIfLayer parameter is CSV. The type assertion applies only to the true block of the if clause that use this
 * function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 * /
export const layerConfigIsCSV = (verifyIfLayer: AbstractGeoviewLayerConfig): verifyIfLayer is CsvLayerConfig => {
  return verifyIfLayer?.geoviewLayerType === CV_CONST_LAYER_TYPES.CSV;
}; */

/**
 * type guard function that redefines a TypeBaseVectorGeometryConfig as a TypeLineStringVectorConfig if the type attribute of the
 * verifyIfConfig parameter is 'lineString'. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {TypeBaseVectorGeometryConfig} verifyIfConfig Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const isLineStringVectorConfig = (verifyIfConfig: TypeBaseVectorGeometryConfig): verifyIfConfig is TypeLineStringVectorConfig => {
  return verifyIfConfig?.type === 'lineString';
};

/**
 * type guard function that redefines a TypeBaseVectorGeometryConfig as a TypePolygonVectorConfig if the type attribute of the
 * verifyIfConfig parameter is 'filledPolygon'. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {TypeBaseVectorGeometryConfig} verifyIfConfig Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const isFilledPolygonVectorConfig = (verifyIfConfig: TypeBaseVectorGeometryConfig): verifyIfConfig is TypePolygonVectorConfig => {
  return verifyIfConfig?.type === 'filledPolygon';
};

/**
 * type guard function that redefines a TypeBaseVectorGeometryConfig as a TypeSimpleSymbolVectorConfig if the type attribute of the
 * verifyIfConfig parameter is 'simpleSymbol'. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {TypeBaseVectorGeometryConfig} verifyIfConfig Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const isSimpleSymbolVectorConfig = (
  verifyIfConfig: TypeBaseVectorGeometryConfig
): verifyIfConfig is TypeSimpleSymbolVectorConfig => {
  return verifyIfConfig?.type === 'simpleSymbol';
};

/**
 * type guard function that redefines a TypeBaseVectorGeometryConfig as a TypeIconSymbolVectorConfig if the type attribute of the
 * verifyIfConfig parameter is 'iconSymbol'. The type assertion applies only to the true block of the if clause that use
 * this function.
 *
 * @param {TypeBaseVectorGeometryConfig} verifyIfConfig Polymorphic object to test in order to determine if the type assertion is valid.
 *
 * @returns {boolean} true if the type assertion is valid.
 */
export const isIconSymbolVectorConfig = (verifyIfConfig: TypeBaseVectorGeometryConfig): verifyIfConfig is TypeIconSymbolVectorConfig => {
  return verifyIfConfig?.type === 'iconSymbol';
};
