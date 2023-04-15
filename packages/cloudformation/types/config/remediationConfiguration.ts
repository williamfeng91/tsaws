/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
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

/**
 * AWS Systems Manager (SSM) specific remediation controls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-ssmcontrols.html}
 **/
export interface ConfigRemediationConfigurationSsmControls {
  /**
   * The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%. For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorPercentage?: Value<number>;
  /**
   * The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConcurrentExecutionRatePercentage?: Value<number>;
}

/**
 * An ExecutionControls object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-executioncontrols.html}
 **/
export interface ConfigRemediationConfigurationExecutionControls {
  /**
   * A SsmControls object.
   *
   * _Required_: No
   *
   * _Type_: [SsmControls](aws-properties-config-remediationconfiguration-ssmcontrols.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SsmControls?: ConfigRemediationConfigurationSsmControls;
}

/**
 * The dynamic value of the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-resourcevalue.html}
 **/
export interface ConfigRemediationConfigurationResourceValue {
  /**
   * The value is a resource ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `RESOURCE_ID`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-remediationparametervalue.html}
 **/
export interface ConfigRemediationConfigurationRemediationParameterValue {
  /**
   * The value is dynamic and changes at run-time.
   *
   * _Required_: No
   *
   * _Type_: [ResourceValue](aws-properties-config-remediationconfiguration-resourcevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceValue?: ConfigRemediationConfigurationResourceValue;
  /**
   * The value is static and does not change at run-time.
   *
   * _Required_: No
   *
   * _Type_: [StaticValue](aws-properties-config-remediationconfiguration-staticvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticValue?: ConfigRemediationConfigurationStaticValue;
}

/**
 * The static value of the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-remediationconfiguration-staticvalue.html}
 **/
export interface ConfigRemediationConfigurationStaticValue {
  /**
   * A list of values. For example, the ARN of the assumed role.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}
export interface ConfigRemediationConfigurationProperties {
  /**
   * Version of the target. For example, version of the SSM document.
   *
   * If you make backward incompatible changes to the SSM document, you must call PutRemediationConfiguration API again to ensure the remediations can run.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetVersion?: Value<string>;
  /**
   * An ExecutionControls object.
   *
   * _Required_: No
   *
   * _Type_: [ExecutionControls](aws-properties-config-remediationconfiguration-executioncontrols.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionControls?: ConfigRemediationConfigurationExecutionControls;
  /**
   * An object of the RemediationParameterValue. For more information, see [RemediationParameterValue](https://docs.aws.amazon.com/config/latest/APIReference/API_RemediationParameterValue.html).
   *
   * The type is a map of strings to RemediationParameterValue.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * The type of the target. Target executes remediation. For example, SSM document.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SSM_DOCUMENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetType: Value<string>;
  /**
   * The name of the AWS Config rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigRuleName: Value<string>;
  /**
   * The type of a resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: Value<string>;
  /**
   * Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds.
   *
   * For example, if you specify RetryAttemptSeconds as 50 seconds and MaximumAutomaticAttempts as 5, AWS Config will run auto-remediations 5 times within 50 seconds before throwing an exception.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryAttemptSeconds?: Value<number>;
  /**
   * The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
   *
   * For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds, AWS Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `25`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumAutomaticAttempts?: Value<number>;
  /**
   * Target ID is the name of the SSM document.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetId: Value<string>;
  /**
   * The remediation is triggered automatically.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Automatic?: Value<boolean>;
}

/**
 * An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-remediationconfiguration.html}
 */
export interface ConfigRemediationConfigurationResource {
  Type: 'AWS::Config::RemediationConfiguration';
  Properties: ConfigRemediationConfigurationProperties;
}
