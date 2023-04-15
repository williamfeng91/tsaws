/**
 * Supported regions:
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html}
 **/
export interface IoTFleetWiseCampaignConditionBasedCollectionScheme {
  /**
   * The minimum duration of time between two triggering events to collect data, in milliseconds.
   *
   * If a signal changes often, you might want to collect data at a slower rate.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinimumTriggerIntervalMs?: Value<number>;
  /**
   * The logical expression used to recognize what data to collect. For example, `$variable.Vehicle.OutsideAirTemperature >= 105.0`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Expression: Value<string>;
  /**
   * Whether to collect data for all triggering events (`ALWAYS`). Specify (`RISING_EDGE`), or specify only when the condition first evaluates to false. For example, triggering on "AirbagDeployed"; Users aren't interested on triggering when the airbag is already exploded; they only care about the change from not deployed => deployed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALWAYS | RISING_EDGE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TriggerMode?: Value<string>;
  /**
   * Specifies the version of the conditional expression language.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionLanguageVersion?: Value<number>;
}

/**
 * Information about a collection scheme that uses a time period to decide how often to collect data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html}
 **/
export interface IoTFleetWiseCampaignTimeBasedCollectionScheme {
  /**
   * The time period (in milliseconds) to decide how often to collect data. For example, if the time period is `60000`, the Edge Agent software collects data once every minute.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeriodMs: Value<number>;
}

/**
 * Specifies what data to collect and how often or when to collect it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-collectionscheme.html}
 **/
export interface IoTFleetWiseCampaignCollectionScheme {
  /**
   * Information about a collection scheme that uses a time period to decide how often to collect data.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedCollectionScheme](aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeBasedCollectionScheme?: IoTFleetWiseCampaignTimeBasedCollectionScheme;
  /**
   * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
   *
   * _Required_: No
   *
   * _Type_: [ConditionBasedCollectionScheme](aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionBasedCollectionScheme?: IoTFleetWiseCampaignConditionBasedCollectionScheme;
}

/**
 * Information about a signal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotfleetwise-campaign-signalinformation.html}
 **/
export interface IoTFleetWiseCampaignSignalInformation {
  /**
   * The maximum number of samples to collect.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSampleCount?: Value<number>;
  /**
   * The minimum duration of time (in milliseconds) between two triggering events to collect data.
   *
   * If a signal changes often, you might want to collect data at a slower rate.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumSamplingIntervalMs?: Value<number>;
  /**
   * The name of the signal.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `150`
   *
   * _Pattern_: `[w|*|-]+(.[w|*|-]+)*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface IoTFleetWiseCampaignProperties {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Compression?: Value<string>;
  /**
   * The description of the campaign.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `[^u0000-u001Fu007F]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Priority?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [SignalInformation](aws-properties-iotfleetwise-campaign-signalinformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SignalsToCollect?: List<IoTFleetWiseCampaignSignalInformation>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartTime?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExpiryTime?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpoolingMode?: Value<string>;
  /**
   * The ARN of the signal catalog associated with the campaign.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SignalCatalogArn: Value<string>;
  /**
   * The name of a campaign.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[a-zA-Zd-_:]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PostTriggerCollectionDuration?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataExtraDimensions?: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DiagnosticsMode?: Value<string>;
  /**
   * The ARN of a vehicle or fleet to which the campaign is deployed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetArn: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [CollectionScheme](aws-properties-iotfleetwise-campaign-collectionscheme.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CollectionScheme: IoTFleetWiseCampaignCollectionScheme;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates an orchestration of data collection rules. The AWS IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, AWS IoT FleetWise automatically deploys them to vehicles.
 *
 * For more information, see [Collect and transfer data with campaigns](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html) in the _AWS IoT FleetWise Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html}
 */
export interface IoTFleetWiseCampaignResource {
  Type: 'AWS::IoTFleetWise::Campaign';
  Properties: IoTFleetWiseCampaignProperties;
}
