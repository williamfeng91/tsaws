/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * UpdateWirelessGatewayTaskCreate object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html}
 **/
export interface IoTWirelessTaskDefinitionUpdateWirelessGatewayTaskCreate {
  /**
   * The properties that relate to the LoRaWAN wireless gateway.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANUpdateGatewayTaskCreate](aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoRaWAN?: IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskCreate;
  /**
   * The link to the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateDataSource?: Value<string>;
  /**
   * The IAM role used to read data from the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateDataRole?: Value<string>;
}

/**
 * LoRaWANUpdateGatewayTaskEntry object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html}
 **/
export interface IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskEntry {
  /**
   * The firmware version to update the gateway to.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
  /**
   * The version of the gateways that should receive the update.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
}

/**
 * LoRaWANGatewayVersion object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html}
 **/
export interface IoTWirelessTaskDefinitionLoRaWANGatewayVersion {
  /**
   * The basic station version of the wireless gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Station?: Value<string>;
  /**
   * The model number of the wireless gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Model?: Value<string>;
  /**
   * The version of the wireless gateway firmware.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PackageVersion?: Value<string>;
}

/**
 * The signature used to verify the update firmware.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html}
 **/
export interface IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskCreate {
  /**
   * The signature used to verify the update firmware.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateSignature?: Value<string>;
  /**
   * The CRC of the signature private key to check.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigKeyCrc?: Value<number>;
  /**
   * The firmware version to update the gateway to.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
  /**
   * The version of the gateways that should receive the update.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANGatewayVersion](aws-properties-iotwireless-taskdefinition-lorawangatewayversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentVersion?: IoTWirelessTaskDefinitionLoRaWANGatewayVersion;
}
export interface IoTWirelessTaskDefinitionProperties {
  /**
   * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If `false`, the task must me created by calling `CreateWirelessGatewayTask`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoCreateTasks: Value<boolean>;
  LoRaWANUpdateGatewayTaskEntry?: IoTWirelessTaskDefinitionLoRaWANUpdateGatewayTaskEntry;
  /**
   * Information about the gateways to update.
   *
   * _Required_: No
   *
   * _Type_: [UpdateWirelessGatewayTaskCreate](aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Update?: IoTWirelessTaskDefinitionUpdateWirelessGatewayTaskCreate;
  TaskDefinitionType?: Value<string>;
  /**
   * The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
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
  /**
   * The name of the new resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a gateway task definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html}
 */
export interface IoTWirelessTaskDefinitionResource {
  Type: 'AWS::IoTWireless::TaskDefinition';
  Properties: IoTWirelessTaskDefinitionProperties;
}
