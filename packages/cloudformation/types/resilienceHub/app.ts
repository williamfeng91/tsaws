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
 * Defines a resource mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-resourcemapping.html}
 **/
export interface ResilienceHubAppResourceMapping {
  /**
   * Specifies the type of resource mapping.
   *
   * Valid Values: CfnStack | Resource | AppRegistryApp | ResourceGroup | Terraform
   *
   * AppRegistryApp
   *
   * The resource is mapped to another application. The name of the application is contained in the `appRegistryAppName` property.
   *
   * CfnStack
   *
   * The resource is mapped to a CloudFormation stack. The name of the CloudFormation stack is contained in the `logicalStackName` property.
   *
   * Resource
   *
   * The resource is mapped to another resource. The name of the resource is contained in the `resourceName` property.
   *
   * ResourceGroup
   *
   * The resource is mapped to a resource group. The name of the resource group is contained in the `resourceGroupName` property.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MappingType: Value<string>;
  /**
   * The name of the CloudFormation stack this resource is mapped to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogicalStackName?: Value<string>;
  /**
   * The name of the resource this resource is mapped to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceName?: Value<string>;
  /**
   * The short name of the Terraform source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerraformSourceName?: Value<string>;
  /**
   * The identifier of this resource.
   *
   * _Required_: Yes
   *
   * _Type_: [PhysicalResourceId](aws-properties-resiliencehub-app-physicalresourceid.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhysicalResourceId: ResilienceHubAppPhysicalResourceId;
}

/**
 * Defines a physical resource identifier.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resiliencehub-app-physicalresourceid.html}
 **/
export interface ResilienceHubAppPhysicalResourceId {
  /**
   * Specifies the type of physical resource identifier.
   *
   * Arn
   *
   * The resource identifier is an Amazon Resource Name (ARN) .
   *
   * Native
   *
   * The resource identifier is an AWS Resilience Hub-native identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The identifier of the physical resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Identifier: Value<string>;
  /**
   * The AWS Region that the physical resource is located in.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsRegion?: Value<string>;
  /**
   * The AWS account that owns the physical resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsAccountId?: Value<string>;
}
export interface ResilienceHubAppProperties {
  /**
   * The optional description for an app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A JSON string that provides information about your application structure. To learn more about the `appTemplateBody` template, see the sample template provided in the _Examples_ section.
   *
   * The `appTemplateBody` JSON string has the following structure:
   */
  AppTemplateBody: Value<string>;
  /**
   * Assessment execution schedule with 'Daily' or 'Disabled' values.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppAssessmentSchedule?: Value<string>;
  /**
   * An array of ResourceMapping objects.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ResourceMapping](aws-properties-resiliencehub-app-resourcemapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceMappings: List<ResilienceHubAppResourceMapping>;
  /**
   * The tags assigned to the resource. A tag is a label that you assign to an AWS resource. Each tag consists of a key/value pair.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name for the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resiliency policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResiliencyPolicyArn?: Value<string>;
}

/**
 * Creates an AWS Resilience Hub application. An AWS Resilience Hub application is a collection of AWS resources structured to prevent and recover AWS application disruptions. To describe a AWS Resilience Hub application, you provide an application name, resources from one or more–up to 20–AWS CloudFormation stacks, and an appropriate resiliency policy.
 *
 * After you create an AWS Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html}
 */
export interface ResilienceHubAppResource {
  Type: 'AWS::ResilienceHub::App';
  Properties: ResilienceHubAppProperties;
}
