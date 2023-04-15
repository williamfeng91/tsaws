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
import { ResourceTag } from '../../shared-types/resource';

/**
 * A group version in AWS IoT Greengrass, which references of a core definition version, device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 *
 * In an AWS CloudFormation template, `GroupVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-group-groupversion.html}
 **/
export interface GreengrassGroupGroupVersion {
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
}
export interface GreengrassGroupProperties {
  /**
   * The group version to include when the group is created. A group version references the Amazon Resource Name (ARN) of a core definition version, device definition version, subscription definition version, and other version types. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
   *
   * To associate a group version after the group is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html) resource and specify the ID of this group.
   *
   * _Required_: No
   *
   * _Type_: [GroupVersion](aws-properties-greengrass-group-groupversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassGroupGroupVersion;
  /**
   * The Amazon Resource Name (ARN) of the IAM role attached to the group. This role contains the permissions that Lambda functions and connectors use to interact with other AWS services.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * Application-specific metadata to attach to the group. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * AWS IoT Greengrass seamlessly extends AWS to edge devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. With AWS IoT Greengrass, connected devices can run AWS Lambda functions, execute predictions based on machine learning models, keep device data in sync, and communicate with other devices securely – even when not connected to the internet. For more information, see the [AWS IoT Greengrass Version 1 Developer Guide](https://docs.aws.amazon.com/greengrass/latest/developerguide/what-is-gg.html).
 *
 * **Note**
 *
 * For AWS Region support, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/latest/developerguide/cloudformation-support.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * The `AWS::Greengrass::Group` resource represents a group in AWS IoT Greengrass. In the AWS IoT Greengrass API, groups are used to organize your group versions.
 *
 * Groups can reference multiple group versions. All group versions must be associated with a group. A group version references a device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device.
 *
 * To deploy a group version, the group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 *
 * **Note**
 *
 * When you create a group, you can optionally include an initial group version. To associate a group version later, create a [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html) resource and specify the ID of this group.
 *
 * To change group components (such as devices, subscriptions, or functions), you must create new versions. This is because versions are immutable. For example, to add a function, you create a function definition version that contains the new function (and all other functions that you want to deploy). Then you create a group version that references the new function definition version (and all other version types that you want to deploy).
 *
 * **Deploying a Group Version**
 *
 * After you create the group version in your AWS CloudFormation template, you can deploy it using the [https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html](https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html) command in the AWS CLI or from the **Greengrass** node in the AWS IoT console. To deploy a group version, you must have a Greengrass service role associated with your AWS account. For more information, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/latest/developerguide/cloudformation-support.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html}
 */
export interface GreengrassGroupResource {
  Type: 'AWS::Greengrass::Group';
  Properties: GreengrassGroupProperties;
}
