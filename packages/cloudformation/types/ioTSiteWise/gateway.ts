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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrass.html}
 **/
export interface IoTSiteWiseGatewayGreengrass {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Greengrass group. For more information about how to find a group's ARN, see [ListGroups](https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html) and [GetGroup](https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html) in the _AWS IoT Greengrass API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupArn: Value<string>;
}

/**
 * Contains details for a gateway that runs on AWS IoT Greengrass V2. To create a gateway that runs on AWS IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your [Greengrass device role](https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html) must use the `AWSIoTSiteWiseEdgeAccess` policy. For more information, see [Using AWS IoT SiteWise at the edge](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html) in the _ AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-greengrassv2.html}
 **/
export interface IoTSiteWiseGatewayGreengrassV2 {
  /**
   * The name of the AWS IoT thing for your AWS IoT Greengrass V2 core device.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CoreDeviceThingName: Value<string>;
}

/**
 * Contains a summary of a gateway capability configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html}
 **/
export interface IoTSiteWiseGatewayGatewayCapabilitySummary {
  /**
   * The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:version`, where `version` is a number such as `1`.
   *
   * The maximum length is 512 characters with the pattern `^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapabilityNamespace: Value<string>;
  /**
   * The JSON document that defines the configuration for the gateway capability. For more information, see [Configuring data sources (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli) in the _AWS IoT SiteWise User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapabilityConfiguration?: Value<string>;
}

/**
 * Contains a gateway's platform information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotsitewise-gateway-gatewayplatform.html}
 **/
export interface IoTSiteWiseGatewayGatewayPlatform {
  /**
   * A gateway that runs on AWS IoT Greengrass V2.
   *
   * _Required_: No
   *
   * _Type_: [GreengrassV2](aws-properties-iotsitewise-gateway-greengrassv2.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GreengrassV2?: IoTSiteWiseGatewayGreengrassV2;
  /**
   * A gateway that runs on AWS IoT Greengrass.
   *
   * _Required_: No
   *
   * _Type_: [Greengrass](aws-properties-iotsitewise-gateway-greengrass.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Greengrass?: IoTSiteWiseGatewayGreengrass;
}
export interface IoTSiteWiseGatewayProperties {
  /**
   * A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use [DescribeGatewayCapabilityConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html).
   *
   * _Required_: No
   *
   * _Type_: List of [GatewayCapabilitySummary](aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GatewayCapabilitySummaries?: List<IoTSiteWiseGatewayGatewayCapabilitySummary>;
  /**
   * A unique, friendly name for the gateway.
   *
   * The maximum length is 256 characters with the pattern `[^u0000-u001Fu007F]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GatewayName: Value<string>;
  /**
   * The gateway's platform. You can only specify one platform in a gateway.
   *
   * _Required_: Yes
   *
   * _Type_: [GatewayPlatform](aws-properties-iotsitewise-gateway-gatewayplatform.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GatewayPlatform: IoTSiteWiseGatewayGatewayPlatform;
  /**
   * A list of key-value pairs that contain metadata for the gateway. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
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
 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the _AWS IoT SiteWise User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html}
 */
export interface IoTSiteWiseGatewayResource {
  Type: 'AWS::IoTSiteWise::Gateway';
  Properties: IoTSiteWiseGatewayProperties;
}
