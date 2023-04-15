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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Stack instances in some specific accounts and Regions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-stackinstances.html}
 **/
export interface CloudFormationStackSetStackInstances {
  /**
   * A list of stack set parameters whose values you want to override in the selected stack instances.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-cloudformation-stackset-parameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterOverrides?: List<CloudFormationStackSetParameter>;
  /**
   * The AWS `OrganizationalUnitIds` or `Accounts` for which to create stack instances in the specified Regions.
   *
   * _Required_: Yes
   *
   * _Type_: [DeploymentTargets](aws-properties-cloudformation-stackset-deploymenttargets.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentTargets: CloudFormationStackSetDeploymentTargets;
  /**
   * The names of one or more Regions where you want to create stack instances using the specified AWS accounts.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regions: List<Value<string>>;
}

/**
 * [`Service-managed` permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organizational unit (OU).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-autodeployment.html}
 **/
export interface CloudFormationStackSetAutoDeployment {
  /**
   * If set to `true`, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * If set to `true`, stack resources are retained when an account is removed from a target organization or OU. If set to `false`, stack resources are deleted. Specify only if `Enabled` is set to `True`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainStacksOnAccountRemoval?: Value<boolean>;
}

/**
 * The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-deploymenttargets.html}
 **/
export interface CloudFormationStackSetDeploymentTargets {
  /**
   * Limit deployment targets to individual accounts or include additional accounts with provided OUs.
   *
   * The following is a list of possible values for the `AccountFilterType` operation.
   *
   * This is the default value if `AccountFilterType` is not provided. This enables user to update an entire OU and individual accounts from a different OU in one request, which used to be two separate requests.
   */
  AccountFilterType?: Value<string>;
  /**
   * The names of one or more AWS accounts for which you want to deploy stack set updates.
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Accounts?: List<Value<string>>;
  /**
   * The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
   *
   * _Pattern_: `^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$`
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnitIds?: List<Value<string>>;
}

/**
 * The user-specified preferences for how AWS CloudFormation performs a stack set operation. For more information on maximum concurrent accounts and failure tolerance, see [Stack set operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-operationpreferences.html}
 **/
export interface CloudFormationStackSetOperationPreferences {
  /**
   * The maximum percentage of accounts in which to perform this operation at one time.
   *
   * When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.
   *
   * Note that this setting lets you specify the _maximum_ for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrentPercentage?: Value<number>;
  /**
   * The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.
   *
   * _Allowed values_: `SEQUENTIAL` | `PARALLEL`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PARALLEL | SEQUENTIAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionConcurrencyType?: Value<string>;
  /**
   * The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `FailureToleranceCount`. `MaxConcurrentCount` is at most one more than the `FailureToleranceCount`.
   *
   * Note that this setting lets you specify the _maximum_ for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrentCount?: Value<number>;
  /**
   * The percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region. If the operation is stopped in a Region, AWS CloudFormation doesn't attempt the operation in any subsequent Regions.
   *
   * When calculating the number of accounts based on the specified percentage, AWS CloudFormation rounds _down_ to the next whole number.
   *
   * Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureTolerancePercentage?: Value<number>;
  /**
   * The number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region. If the operation is stopped in a Region, AWS CloudFormation doesn't attempt the operation in any subsequent Regions.
   *
   * Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage` (but not both).
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureToleranceCount?: Value<number>;
  /**
   * The order of the Regions where you want to perform the stack operation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionOrder?: List<Value<string>>;
}

/**
 * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-managedexecution.html}
 **/
export interface CloudFormationStackSetManagedExecution {
  /**
   * When `true`, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
   *
   * If there are already running or queued operations, StackSets queues all incoming operations even if they are non-conflicting.
   *
   * You can't modify your stack set's execution configuration while there are running or queued operations for that stack set.
   *
   * When `false` (default), StackSets performs one operation at a time in request order.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Active?: Value<boolean>;
}

/**
 * The Parameter data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-stackset-parameter.html}
 **/
export interface CloudFormationStackSetParameter {
  /**
   * The input value associated with the parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue: Value<string>;
  /**
   * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that's specified in your template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterKey: Value<string>;
}
export interface CloudFormationStackSetProperties {
  /**
   * A description of the stack set.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The input parameters for the stack set template.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-cloudformation-stackset-parameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<CloudFormationStackSetParameter>;
  /**
   * A group of stack instances with parameters in some specific accounts and Regions.
   *
   * _Required_: No
   *
   * _Type_: List of [StackInstances](aws-properties-cloudformation-stackset-stackinstances.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackInstancesGroup?: List<CloudFormationStackSetStackInstances>;
  /**
   * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * You must include either `TemplateURL` or `TemplateBody` in a StackSet, but you can't use both. Dynamic references in the `TemplateBody` may not work correctly in all cases. It's recommended to pass templates containing dynamic references through `TemplateUrl` instead.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `51200`
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateBody?: Value<string>;
  /**
   * The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9-]{0,127}$`
   *
   * The `StackSetName` property is required.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackSetName: Value<string>;
  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for stack sets with self-managed permissions.
   */
  CallAs?: Value<string>;
  /**
   * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
   *
   * _Required_: No
   *
   * _Type_: [OperationPreferences](aws-properties-cloudformation-stackset-operationpreferences.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OperationPreferences?: CloudFormationStackSetOperationPreferences;
  /**
   * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's located in an Amazon S3 bucket.
   *
   * You must include either `TemplateURL` or `TemplateBody` in a StackSet, but you can't use both.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateURL?: Value<string>;
  /**
   * [`Service-managed` permissions] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU).
   *
   * _Required_: No
   *
   * _Type_: [AutoDeployment](aws-properties-cloudformation-stackset-autodeployment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoDeployment?: CloudFormationStackSetAutoDeployment;
  /**
   * The capabilities that are allowed in the stack set. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new AWS Identity and Access Management (IAM) users. For more information, see [Acknowledging IAM Resources in AWS CloudFormation Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Capabilities?: List<Value<string>>;
  /**
   * Describes how the IAM roles required for stack set operations are created.
   */
  PermissionModel: Value<string>;
  /**
   * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
   *
   * Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see [Prerequisites: Granting Permissions for Stack Set Operations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) in the _AWS CloudFormation User Guide_.
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdministrationRoleARN?: Value<string>;
  /**
   * The name of the IAM execution role to use to create the stack set. If you don't specify an execution role, AWS CloudFormation uses the `AWSCloudFormationStackSetExecutionRole` role for the stack set operation.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-zA-Z_0-9+=,.@-]+`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleName?: Value<string>;
  /**
   * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
   *
   * When active, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
   *
   * If there are already running or queued operations, StackSets queues all incoming operations even if they are non-conflicting.
   *
   * You can't modify your stack set's execution configuration while there are running or queued operations for that stack set.
   *
   * When inactive (default), StackSets performs one operation at a time in request order.
   *
   * _Required_: No
   *
   * _Type_: [ManagedExecution](aws-properties-cloudformation-stackset-managedexecution.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedExecution?: CloudFormationStackSetManagedExecution;
  /**
   * The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
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
 * The `AWS::CloudFormation::StackSet` enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html}
 */
export interface CloudFormationStackSetResource {
  Type: 'AWS::CloudFormation::StackSet';
  Properties: CloudFormationStackSetProperties;
}
