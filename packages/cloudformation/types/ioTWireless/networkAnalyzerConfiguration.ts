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
 * Trace content for your wireless gateway and wireless device resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.html}
 **/
export interface IoTWirelessNetworkAnalyzerConfigurationTraceContent {
  /**
   * `FrameInfo` of your wireless device resources for the trace content. Use FrameInfo to debug the communication between your LoRaWAN end devices and the network server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WirelessDeviceFrameInfo?: Value<string>;
  /**
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
}
export interface IoTWirelessNetworkAnalyzerConfigurationProperties {
  /**
   * The description of the resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Trace content for your wireless gateway and wireless device resources.
   *
   * _Required_: No
   *
   * _Type_: [TraceContent](aws-properties-iotwireless-networkanalyzerconfiguration-tracecontent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TraceContent?: IoTWirelessNetworkAnalyzerConfigurationTraceContent;
  /**
   * Wireless gateway resources to add to the network analyzer configuration. Provide the `WirelessGatewayId` of the resource to add in the input array.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WirelessGateways?: List<Value<string>>;
  /**
   * Wireless device resources to add to the network analyzer configuration. Provide the `WirelessDeviceId` of the resource to add in the input array.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `250`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WirelessDevices?: List<Value<string>>;
  /**
   * The tags to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * Name of the network analyzer configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Network analyzer configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-networkanalyzerconfiguration.html}
 */
export interface IoTWirelessNetworkAnalyzerConfigurationResource {
  Type: 'AWS::IoTWireless::NetworkAnalyzerConfiguration';
  Properties: IoTWirelessNetworkAnalyzerConfigurationProperties;
}
