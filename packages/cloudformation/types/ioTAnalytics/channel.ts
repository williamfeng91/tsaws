/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Used to store channel data in an S3 bucket that you manage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-customermanageds3.html}
 **/
export interface IoTAnalyticsChannelCustomerManagedS3 {
  /**
   * The name of the S3 bucket in which channel data is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9.-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The ARN of the role that grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * (Optional) The prefix used to create the keys of the channel data objects. Each object in an S3 bucket has a key that is its unique identifier within the bucket (each object in a bucket has exactly one key). The prefix must end with a forward slash (/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9!_.*'()/{}:-]*\/$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyPrefix?: Value<string>;
}

/**
 * How long, in days, message data is kept.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-retentionperiod.html}
 **/
export interface IoTAnalyticsChannelRetentionPeriod {
  /**
   * The number of days that message data is kept. The `unlimited` parameter must be false.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfDays?: Value<number>;
  /**
   * If true, message data is kept indefinitely.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unlimited?: Value<boolean>;
}

/**
 * Where channel data is stored. You may choose one of `serviceManagedS3`, `customerManagedS3` storage. If not specified, the default is `serviceManagedS3`. This can't be changed after creation of the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotanalytics-channel-channelstorage.html}
 **/
export interface IoTAnalyticsChannelChannelStorage {
  /**
   * Used to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the `retentionPeriod` parameter is ignored. You can't change the choice of S3 storage after the data store is created.
   *
   * _Required_: No
   *
   * _Type_: [CustomerManagedS3](aws-properties-iotanalytics-channel-customermanageds3.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerManagedS3?: IoTAnalyticsChannelCustomerManagedS3;
  /**
   * Used to store channel data in an S3 bucket managed by AWS IoT Analytics. You can't change the choice of S3 storage after the data store is created.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceManagedS3?: { [key: string]: any };
}
export interface IoTAnalyticsChannelProperties {
  /**
   * The name of the channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(^(?!_{2}))(^[a-zA-Z0-9_]+$)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ChannelName?: Value<string>;
  /**
   * Where channel data is stored.
   *
   * _Required_: No
   *
   * _Type_: [ChannelStorage](aws-properties-iotanalytics-channel-channelstorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelStorage?: IoTAnalyticsChannelChannelStorage;
  /**
   * How long, in days, message data is kept for the channel.
   *
   * _Required_: No
   *
   * _Type_: [RetentionPeriod](aws-properties-iotanalytics-channel-retentionperiod.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriod?: IoTAnalyticsChannelRetentionPeriod;
  /**
   * Metadata which can be used to manage the channel.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The AWS::IoTAnalytics::Channel resource collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline. For more information, see [ How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-channel.html}
 */
export interface IoTAnalyticsChannelResource {
  Type: 'AWS::IoTAnalytics::Channel';
  Properties: IoTAnalyticsChannelProperties;
}
