/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Sidewalk-related information about a wireless device import task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html}
 **/
export interface IoTWirelessWirelessDeviceImportTaskSidewalk {
  /**
   * The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role?: Value<string>;
  /**
   * The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SidewalkManufacturingSn?: Value<string>;
  /**
   * The CSV file contained in an S3 bucket that's used for adding devices to an import task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceCreationFile?: Value<string>;
  /**
   * List of Sidewalk devices that are added to the import task.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceCreationFileList?: List<Value<string>>;
}
export interface IoTWirelessWirelessDeviceImportTaskProperties {
  /**
   * The name of the destination that describes the IoT rule to route messages from the Sidewalk devices in the import task to other applications.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationName: Value<string>;
  /**
   * The Sidewalk-related information of the wireless device import task.
   *
   * _Required_: Yes
   *
   * _Type_: [Sidewalk](aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sidewalk: IoTWirelessWirelessDeviceImportTaskSidewalk;
  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Information about an import task for wireless devices. When creating the resource, either create a single wireless device import task using the Sidewalk manufacturing serial number (SMSN) of the wireless device, or create an import task for multiple devices by specifying both the `DeviceCreationFile` and the `Role`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html}
 */
export interface IoTWirelessWirelessDeviceImportTaskResource {
  Type: 'AWS::IoTWireless::WirelessDeviceImportTask';
  Properties: IoTWirelessWirelessDeviceImportTaskProperties;
}
