/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The configuration for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) bucket prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is `ENABLED` if you choose to deliver internet measurements to S3 logs, and `DISABLED` otherwise.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-s3config.html}
 **/
export interface InternetMonitorMonitorS3Config {
  /**
   * The Amazon S3 bucket name for internet measurements publishing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName?: Value<string>;
  /**
   * The status of publishing Internet Monitor internet measurements to an Amazon S3 bucket. The delivery status is `ENABLED` if you choose to deliver internet measurements to an S3 bucket, and `DISABLED` otherwise.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogDeliveryStatus?: Value<string>;
  /**
   * An optional Amazon S3 bucket prefix for internet measurements publishing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketPrefix?: Value<string>;
}

/**
 * The internet measurements for Amazon CloudWatch Internet Monitor published to another location, such as an Amazon S3 bucket. Measurements are automatically published to Amazon CloudWatch Logs for the top 500 city-networks (by traffic volume).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.html}
 **/
export interface InternetMonitorMonitorInternetMeasurementsLogDelivery {
  /**
   * The configuration information for publishing Amazon CloudWatch Internet Monitor internet measurements to Amazon S3. The configuration includes the bucket name and (optionally) bucket prefix for the S3 bucket to store the measurements, and the delivery status. The delivery status is `ENABLED` if you choose to deliver internet measurements to an S3 bucket, and `DISABLED` otherwise.
   *
   * _Required_: No
   *
   * _Type_: [S3Config](aws-properties-internetmonitor-monitor-s3config.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Config?: InternetMonitorMonitorS3Config;
}
export interface InternetMonitorMonitorProperties {
  /**
   * The status of a monitor. The accepted values that you can specify for `Status` are `ACTIVE` and `INACTIVE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The resources to add to a monitor, which you provide as a set of Amazon Resource Names (ARNs).
   *
   * You can add a combination of Virtual Private Clouds (VPCs) and Amazon CloudFront distributions, or you can add WorkSpaces directories. You can't add all three types of resources.
   *
   * If you add only VPC resources, at least one VPC must have an Internet Gateway attached to it, to make sure that it has internet connectivity.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcesToAdd?: List<Value<string>>;
  /**
   * Publish internet measurements for a monitor for all city-networks (up to the 500,000 service limit) to another location, such as an Amazon S3 bucket. Measurements are also published to Amazon CloudWatch Logs for the first 500 (by traffic volume) city-networks (client locations and ASNs, typically internet service providers or ISPs).
   *
   * _Required_: No
   *
   * _Type_: [InternetMeasurementsLogDelivery](aws-properties-internetmonitor-monitor-internetmeasurementslogdelivery.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InternetMeasurementsLogDelivery?: InternetMonitorMonitorInternetMeasurementsLogDelivery;
  /**
   * The name of the monitor. A monitor name can contain only alphanumeric characters, dashes (-), periods (.), and underscores (_).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitorName: Value<string>;
  /**
   * The resources to remove from a monitor. Provide the resources as a set of Amazon Resource Names (ARNs).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcesToRemove?: List<Value<string>>;
  /**
   * The resources that have been added for the monitor, listed by their Amazon Resource Names (ARNs).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resources?: List<Value<string>>;
  /**
   * The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the ASN, typically an internet service provider, that clients access the resources through.
   *
   * The city-network maximum that you choose sets a cap on the total that _can_ be included when Internet Monitor monitors traffic with your monitor. You only pay for the number of city-networks that are actually monitored, not this maximum limit, and you can change the maximum at any time, by updating your monitor.
   *
   * For more information, see [ Choosing a city-network maximum value](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html) in _Using Amazon CloudWatch Internet Monitor_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCityNetworksToMonitor?: Value<number>;
  /**
   * The tags for a monitor, listed as a set of _key:value_ pairs.
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
 * The `AWS::InternetMonitor::Monitor` resource contains information about how you create a monitor in Amazon CloudWatch Internet Monitor. A monitor in Internet Monitor provides visibility into performance and availability between your applications hosted on AWS and your end users, using a traffic profile that it creates based on the application resources that you add: Virtual Private Clouds (VPCs), Amazon CloudFront distributions, or WorkSpaces directories.
 *
 * Internet Monitor also alerts you to internet issues that impact your application in the city-networks (locations and ASNs, typically internet service providers or ISPs) where your end users use it. With Internet Monitor, you can quickly pinpoint the locations and ASNs that are affected, so that you can address the issue.
 *
 * For more information, see [ Using Amazon CloudWatch Internet Monitor](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html) in the _Amazon CloudWatch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-internetmonitor-monitor.html}
 */
export interface InternetMonitorMonitorResource {
  Type: 'AWS::InternetMonitor::Monitor';
  Properties: InternetMonitorMonitorProperties;
}
