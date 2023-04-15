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
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
 *
 * For more information, see [Targets](https://docs.aws.amazon.com/fis/latest/userguide/targets.html) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html}
 **/
export interface FISExperimentTemplateExperimentTemplateTarget {
  /**
   * The filters to apply to identify target resources using specific attributes.
   *
   * _Required_: No
   *
   * _Type_: List of [ExperimentTemplateTargetFilter](aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters?: List<FISExperimentTemplateExperimentTemplateTargetFilter>;
  /**
   * The parameters for the resource type.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: Value<string> };
  /**
   * The tags for the target resources.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTags?: { [key: string]: Value<string> };
  /**
   * The resource type. The resource type must be supported for the specified action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType: Value<string>;
  /**
   * The Amazon Resource Names (ARNs) of the resources.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceArns?: List<Value<string>>;
  /**
   * Scopes the identified resources to a specific count of the resources at random, or a percentage of the resources. All identified resources are included in the target.
   */
  SelectionMode: Value<string>;
}

/**
 * Specifies a filter used for the target resource input in an experiment template.
 *
 * For more information, see [Resource filters](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html}
 **/
export interface FISExperimentTemplateExperimentTemplateTargetFilter {
  /**
   * The attribute path for the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path: Value<string>;
  /**
   * The attribute values for the filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
}

/**
 * Specifies a stop condition for an experiment template.
 *
 * For more information, see [Stop conditions](https://docs.aws.amazon.com/fis/latest/userguide/stop-conditions.html) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html}
 **/
export interface FISExperimentTemplateExperimentTemplateStopCondition {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch alarm. This is required if the source is a CloudWatch alarm.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `[sS]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The source for the stop condition. Specify `aws:cloudwatch:alarm` if the stop condition is defined by a CloudWatch alarm. Specify `none` if there is no stop condition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: Value<string>;
}

/**
 * The `S3Configuration` property type specifies Property description not available. for an [AWS::FIS::ExperimentTemplate](aws-resource-fis-experimenttemplate.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-s3configuration.html}
 **/
export interface FISExperimentTemplateS3Configuration {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * The `CloudWatchLogsConfiguration` property type specifies Property description not available. for an [AWS::FIS::ExperimentTemplate](aws-resource-fis-experimenttemplate.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.html}
 **/
export interface FISExperimentTemplateCloudWatchLogsConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupArn: Value<string>;
}

/**
 * Specifies the configuration for experiment logging.
 *
 * For more information, see [Experiment logging](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html}
 **/
export interface FISExperimentTemplateExperimentTemplateLogConfiguration {
  /**
   * The configuration for experiment logging to Amazon S3. The following fields are supported:
   */
  S3Configuration?: FISExperimentTemplateS3Configuration;
  /**
   * The schema version. The supported value is 1.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogSchemaVersion: Value<number>;
  /**
   * The configuration for experiment logging to Amazon CloudWatch Logs. The supported field is `LogGroupArn`. For example:
   *
   * `{"LogGroupArn": "aws:arn:logs:region_name:account_id:log-group:log_group_name"}`
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsConfiguration](aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsConfiguration?: FISExperimentTemplateCloudWatchLogsConfiguration;
}

/**
 * Specifies an action for an experiment template.
 *
 * For more information, see [Actions](https://docs.aws.amazon.com/fis/latest/userguide/actions.html) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html}
 **/
export interface FISExperimentTemplateExperimentTemplateAction {
  /**
   * The ID of the action. The format of the action ID is: aws:_service-name_:_action-type_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionId: Value<string>;
  /**
   * A description for the action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[sS]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The parameters for the action, if applicable.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: Value<string> };
  /**
   * The targets for the action.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets?: { [key: string]: Value<string> };
  /**
   * The name of the action that must be completed before the current action starts. Omit this parameter to run the action at the start of the experiment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartAfter?: List<Value<string>>;
}
export interface FISExperimentTemplateProperties {
  /**
   * A description for the experiment template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[sS]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description: Value<string>;
  /**
   * The actions for the experiment.
   *
   * _Required_: No
   *
   * _Type_: Map of [ExperimentTemplateAction](aws-properties-fis-experimenttemplate-experimenttemplateaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: { [key: string]: FISExperimentTemplateExperimentTemplateAction };
  /**
   * The stop conditions.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ExperimentTemplateStopCondition](aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StopConditions: List<FISExperimentTemplateExperimentTemplateStopCondition>;
  /**
   * The targets for the experiment.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [ExperimentTemplateTarget](aws-properties-fis-experimenttemplate-experimenttemplatetarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets: { [key: string]: FISExperimentTemplateExperimentTemplateTarget };
  /**
   * The configuration for experiment logging.
   *
   * _Required_: No
   *
   * _Type_: [ExperimentTemplateLogConfiguration](aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogConfiguration?: FISExperimentTemplateExperimentTemplateLogConfiguration;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `[S]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The tags to apply to the experiment template.
   *
   * _Required_: Yes
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags: { [key: string]: Value<string> };
}

/**
 * Specifies an experiment template.
 *
 * An experiment template includes the following components:
 *
 * For more information, see [Experiment templates](https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html) in the _AWS Fault Injection Simulator User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html}
 */
export interface FISExperimentTemplateResource {
  Type: 'AWS::FIS::ExperimentTemplate';
  Properties: FISExperimentTemplateProperties;
}
