import { PayloadBaseClass, payloadIsLayerSetChangeLayerStatus } from '@/api/events/payloads';
import { LayerApi } from '@/app';
import { FeatureInfoEventProcessor } from '@/api/event-processors/event-processor-children/feature-info-event-processor';
import { logger } from '@/core/utils/logger';
import { getLocalizedValue } from '@/core/utils/utilities';
import { TypeLayerStatus } from '@/geo/map/map-schema-types';
import { CONST_LAYER_TYPES } from '@/geo/layer/geoview-layers/abstract-geoview-layers';

import { LayerSet, QueryType, TypeLayerData } from './layer-set';

export type TypeAllFeatureInfoResultSetEntry = {
  layerName?: string;
  layerStatus: TypeLayerStatus;
  data: TypeLayerData;
};

export type TypeAllFeatureInfoResultSet = {
  [layerPath: string]: TypeAllFeatureInfoResultSetEntry;
};

type TypeAllFeatureInfoLayerSetInstance = { [mapId: string]: AllFeatureInfoLayerSet };

/** ***************************************************************************************************************************
 * A class containing a set of layers associated with a TypeLayerData object, which will receive the result of a
 * "get  all feature info" request made on a specific layer of the map. The query is made for one layer at a time.
 *
 * @class AllFeatureInfoLayerSet
 */
export class AllFeatureInfoLayerSet extends LayerSet {
  /** Private static variable to keep the single instance that can be created by this class for a mapId (see singleton design pattern) */
  private static allFeatureInfoLayerSetInstance: TypeAllFeatureInfoLayerSetInstance = {};

  /** An object containing the result sets indexed using the layer path */
  declare resultSet: TypeAllFeatureInfoResultSet;

  /** ***************************************************************************************************************************
   * The class constructor that instanciate a set of layer.
   *
   * @param {LayerApi} layerApi The layer Api to work with.
   * @param {string} mapId The map identifier the layer set belongs to.
   *
   */
  private constructor(layerApi: LayerApi, mapId: string) {
    super(layerApi, mapId, `${mapId}/all/FeatureInfoLayerSet`, {});
    this.setRegistrationConditionFunction();
    this.setUserRegistrationInitFunction();
  }

  /* **************************************************************************************************************************
   * This function determines whether a layer can be registered or not.
   */
  setRegistrationConditionFunction() {
    this.registrationConditionFunction = (layerPath: string): boolean => {
      // Log
      logger.logTraceCore('ALL-FEATURE-INFO-LAYER-SET setRegistrationConditionFunction', layerPath, Object.keys(this.resultSet));

      const geoviewLayerConfig = this.layerApi.geoviewLayer(layerPath);
      // TODO: Make a util function for this check
      if (
        [
          CONST_LAYER_TYPES.ESRI_IMAGE,
          CONST_LAYER_TYPES.IMAGE_STATIC,
          CONST_LAYER_TYPES.XYZ_TILES,
          CONST_LAYER_TYPES.VECTOR_TILES,
          CONST_LAYER_TYPES.WMS,
        ].includes(geoviewLayerConfig.type)
      )
        return false;

      const layerConfig = this.layerApi.registeredLayers[layerPath];
      const queryable = layerConfig?.source?.featureInfo?.queryable;
      return !!queryable;
    };
  }

  /** ***************************************************************************************************************************
   * Define the initialization function that the registration process will use to create a new entry in the layer set for a
   * specific layer path.
   */
  setUserRegistrationInitFunction() {
    this.registrationUserInitialisation = (layerPath: string) => {
      // Log
      logger.logTraceCore('ALL-FEATURE-INFO-LAYER-SET setUserRegistrationInitFunction', layerPath, Object.keys(this.resultSet));

      const layerConfig = this.layerApi.registeredLayers[layerPath];
      this.resultSet[layerPath] = {
        layerName: getLocalizedValue(layerConfig.layerName, this.mapId) ?? '',
        layerStatus: layerConfig.layerStatus!,
        data: {
          layerName: getLocalizedValue(layerConfig.layerName, this.mapId) ?? '',
          layerStatus: layerConfig.layerStatus!,
          eventListenerEnabled: true,
          queryStatus: 'processed',
          features: [],
          layerPath,
        },
      };

      FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerPath, 'all-features', this.resultSet);
    };
  }

  /** ***************************************************************************************************************************
   * The listener that will handle the CHANGE_LAYER_STATUS event triggered on the map.This method is called by the parent class
   * LayerSet via the listener created by the setChangeLayerStatusListenerFunctions method.
   *
   * @param {PayloadBaseClass} payload The payload to process.
   */
  protected changeLayerStatusListenerFunctions(payload: PayloadBaseClass) {
    if (payloadIsLayerSetChangeLayerStatus(payload)) {
      // Log
      logger.logTraceCoreAPIEvent('ALL-FEATURE-INFO-LAYER-SET on EVENT_NAMES.LAYER_SET.CHANGE_LAYER_STATUS', this.mapId, payload);

      const { layerPath, layerStatus } = payload;
      // if layer's status flag exists and is different than the new one
      if (this.resultSet?.[layerPath]?.layerStatus && this.resultSet?.[layerPath]?.layerStatus !== layerStatus) {
        if (layerStatus === 'error') delete this.resultSet[layerPath];
        else {
          const layerConfig = this.layerApi.registeredLayers[layerPath];
          super.changeLayerStatusListenerFunctions(payload);
          if (this?.resultSet?.[layerPath]?.data) {
            this.resultSet[layerPath].data.layerStatus = layerStatus;
            FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerConfig.layerPath, 'all-features', this.resultSet);
          }
        }
      }
    }
  }

  /**
   * Helper function used to launch the query on a layer to get all of its feature information
   *
   * @param {string} layerPath The layerPath that will be queried.
   * @param {QueryType} queryType the query's type to perform
   */
  // TODO: (futur development) The queryType is a door opened to allow the triggering using a bounding box or a polygon.
  queryLayer(layerPath: string, queryType: QueryType = 'all'): void {
    // TODO: Refactor - Make this function async similar to featureInfoLayerSet.queryLayers()
    if (this.layerApi.registeredLayers[layerPath] && this.resultSet[layerPath]) {
      const { data } = this.resultSet[layerPath];
      const layerConfig = this.layerApi.registeredLayers[layerPath];

      // Query and event types of what we're doing
      const eventType = 'all-features';

      if (!this.resultSet[layerPath].data.eventListenerEnabled) return;

      if (layerConfig.layerStatus === 'loaded') {
        data.features = undefined;
        data.queryStatus = 'processing';

        // Process query on results data
        this.processQueryResultSetData(data, layerConfig, layerPath, queryType, layerPath).then((arrayOfRecords) => {
          // Keep the features retrieved
          data.features = arrayOfRecords;
          data.layerStatus = layerConfig.layerStatus!;

          // When property features is undefined, we are waiting for the query result.
          // when Array.isArray(features) is true, the features property contains the query result.
          // when property features is null, the query ended with an error.
          data.queryStatus = arrayOfRecords ? 'processed' : 'error';

          // Propagate to store
          FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerPath, eventType, this.resultSet);
        });
      } else {
        data.features = null;
        data.queryStatus = 'error';
      }

      // Propagate to the store
      FeatureInfoEventProcessor.propagateFeatureInfoToStore(this.mapId, layerPath, eventType, this.resultSet);
    } else logger.logError(`The queryLayer method cannot be used on an inexistant layer path (${layerPath})`);
  }

  /**
   * Helper function used to instanciate a FeatureInfoLayerSet object. This function
   * must be used in place of the "new FeatureInfoLayerSet" syntax.
   *
   * @param {LayerApi} layerApi The layer Api to work with.
   * @param {string} mapId The map identifier the layer set belongs to.
   *
   * @returns {FeatureInfoLayerSet} the FeatureInfoLayerSet object created
   */
  static get(layerApi: LayerApi, mapId: string): AllFeatureInfoLayerSet {
    if (!AllFeatureInfoLayerSet.allFeatureInfoLayerSetInstance[mapId])
      AllFeatureInfoLayerSet.allFeatureInfoLayerSetInstance[mapId] = new AllFeatureInfoLayerSet(layerApi, mapId);
    return AllFeatureInfoLayerSet.allFeatureInfoLayerSetInstance[mapId];
  }

  /**
   * Function used to delete a FeatureInfoLayerSet object associated to a mapId.
   *
   * @param {string} mapId The map identifier the layer set belongs to.
   */
  static delete(mapId: string) {
    if (AllFeatureInfoLayerSet.allFeatureInfoLayerSetInstance[mapId]) delete AllFeatureInfoLayerSet.allFeatureInfoLayerSetInstance[mapId];
  }
}
