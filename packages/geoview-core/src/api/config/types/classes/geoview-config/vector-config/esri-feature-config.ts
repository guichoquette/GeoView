import { CV_CONST_LAYER_TYPES } from '@config/types/config-constants';
import { AbstractGeoviewLayerConfig } from '@config/types/classes/geoview-config/abstract-geoview-layer-config';
import { EsriFeatureLayerEntryConfig } from '@config/types/classes/sub-layer-config/vector-leaf/esri-feature-layer-entry-config';
import { ConfigBaseClass } from '@config/types/classes/sub-layer-config/config-base-class';
import { GroupLayerEntryConfig } from '@config/types/classes/sub-layer-config/group-layer-entry-config';
import { AbstractBaseLayerEntryConfig } from '@config/types/classes/sub-layer-config/abstract-base-layer-entry-config';
import { TypeJsonObject, toJsonObject } from '@config/types/config-types';
import { TypeLayerInitialSettings } from '@config/types/map-schema-types';
import { MapFeaturesConfig } from '@config/types/classes/map-features-config';
import { logger } from '@/core/utils/logger';

export type TypeEsriFeatureLayerNode =
  | (ConfigBaseClass & GroupLayerEntryConfig)
  | (ConfigBaseClass & AbstractBaseLayerEntryConfig & EsriFeatureLayerEntryConfig);

export class EsriFeatureLayerConfig extends AbstractGeoviewLayerConfig {
  /** Type of GeoView layer. */
  geoviewLayerType = CV_CONST_LAYER_TYPES.ESRI_FEATURE;

  /** The layer entries to use from the GeoView layer. */
  declare listOfLayerEntryConfig: TypeEsriFeatureLayerNode[];

  /**
   * The class constructor.
   * @param {TypeJsonObject} layerConfig The layer configuration we want to instanciate.
   */
  constructor(layerConfig: TypeJsonObject, mapFeaturesConfig?: MapFeaturesConfig) {
    super(layerConfig, mapFeaturesConfig);
    this.validate(toJsonObject(this));
  }

  /**
   * @protected validate
   * Validate the object properties.
   *
   * @param {TypeJsonObject} layerConfig The layer configuration to validate.
   */
  validate(layerConfig: TypeJsonObject): void {
    super.validate(layerConfig);
    if (!this.metadataAccessPath)
      logger.logError(
        `Property metadataAccessPath is mandatory for GeoView layer ${this.geoviewLayerId} of type ${this.geoviewLayerType}.`
      );
  }

  /**
   * The method used to implement the class factory model that returns the instance of the class
   * based on the sub layer type needed.
   *
   * @param {TypeJsonObject} layerConfig The lsub ayer configuration.
   * @param {TypeLayerInitialSettings} initialSettings The initial settings inherited.
   * @param {AbstractGeoviewLayerConfig} geoviewInstance The GeoView instance that owns the sub layer.
   *
   * @returns {ConfigBaseClass | undefined} The sub layer instance or undefined if there is an error.
   */
  createLeafNode(
    layerConfig: TypeJsonObject,
    initialSettings: TypeLayerInitialSettings,
    geoviewConfig: AbstractGeoviewLayerConfig
  ): ConfigBaseClass {
    return new EsriFeatureLayerEntryConfig(layerConfig, initialSettings, geoviewConfig);
  }
}