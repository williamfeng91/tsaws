/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface GreengrassGroupVersionProperties {
  /**
   * The ARN of the logger definition version that contains the loggers you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoggerDefinitionVersionArn?: Value<string>;
  /**
   * The ARN of the device definition version that contains the devices you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceDefinitionVersionArn?: Value<string>;
  /**
   * The ARN of the function definition version that contains the functions you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionDefinitionVersionArn?: Value<string>;
  /**
   * The ARN of the core definition version that contains the core you want to deploy with the group version. Currently, the core definition version can contain only one core.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CoreDefinitionVersionArn?: Value<string>;
  /**
   * The ARN of the resource definition version that contains the resources you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceDefinitionVersionArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the connector definition version that contains the connectors you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorDefinitionVersionArn?: Value<string>;
  /**
   * The ARN of the subscription definition version that contains the subscriptions you want to deploy with the group version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubscriptionDefinitionVersionArn?: Value<string>;
  /**
   * The ID of the group associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupId: Value<string>;
}

/**
 * The `AWS::Greengrass::GroupVersion` resource represents a group version in AWS IoT Greengrass. A group version references a core definition version, device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 *
 * **Note**
 *
 * To create a group version, you must specify the ID of the group that you want to associate with the version. For information about creating a group, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html}
 */
export interface GreengrassGroupVersionResource {
  Type: 'AWS::Greengrass::GroupVersion';
  Properties: GreengrassGroupVersionProperties;
}
