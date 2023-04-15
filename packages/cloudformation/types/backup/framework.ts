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
 * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html}
 **/
export interface BackupFrameworkFrameworkControl {
  /**
   * The name of a control. This name is between 1 and 256 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlName: Value<string>;
  /**
   * A list of `ParameterName` and `ParameterValue` pairs.
   *
   * _Required_: No
   *
   * _Type_: List of [ControlInputParameter](aws-properties-backup-framework-controlinputparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlInputParameters?: List<BackupFrameworkControlInputParameter>;
  /**
   * The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. For more information, see [`ControlScope`.](aws-backup/latest/devguide/API_ControlScope.html)
   *
   * _Required_: No
   *
   * _Type_: [ControlScope](aws-properties-backup-framework-controlscope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlScope?: BackupFrameworkControlScope;
}

/**
 * A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
 *
 * **Note**
 *
 * To set a control scope that includes all of a particular resource, leave the `ControlScope` empty or do not pass it when calling `CreateFramework`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlscope.html}
 **/
export interface BackupFrameworkControlScope {
  /**
   * Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComplianceResourceTypes?: List<Value<string>>;
  /**
   * The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag value is optional, but it cannot be an empty string. The structure to assign a tag is: `[{"Key":"string","Value":"string"}]`.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The ID of the only AWS resource that you want your control scope to contain.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComplianceResourceIds?: List<Value<string>>;
}

/**
 * A list of parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least `daily` and the retention period is at least `1 year`". The first parameter is `daily`. The second parameter is `1 year`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html}
 **/
export interface BackupFrameworkControlInputParameter {
  /**
   * The value of parameter, for example, `hourly`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue: Value<string>;
  /**
   * The name of a parameter, for example, `BackupPlanFrequency`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName: Value<string>;
}
export interface BackupFrameworkProperties {
  /**
   * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FrameworkControl](aws-properties-backup-framework-frameworkcontrol.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameworkControls: List<BackupFrameworkFrameworkControl>;
  /**
   * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z][_a-zA-Z0-9]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FrameworkName?: Value<string>;
  /**
   * A list of tags with which to tag your framework.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameworkTags?: List<ResourceTag>;
  /**
   * An optional description of the framework with a maximum 1,024 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameworkDescription?: Value<string>;
}

/**
 * Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/bam-cfn-integration.html#bam-cfn-frameworks-template).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html}
 */
export interface BackupFrameworkResource {
  Type: 'AWS::Backup::Framework';
  Properties: BackupFrameworkProperties;
}
