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
 * `InstanceAssociationOutputLocation` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies an Amazon S3 bucket where you want to store the results of this association request.
 *
 * For the minimal permissions required to enable Amazon S3 output for an association, see [Creating associations](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html) in the _Systems Manager User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html}
 **/
export interface SSMAssociationInstanceAssociationOutputLocation {
  /**
   * `S3OutputLocation` is a property of the [InstanceAssociationOutputLocation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-instanceassociationoutputlocation.html) property that specifies an Amazon S3 bucket where you want to store the results of this request.
   *
   * _Required_: No
   *
   * _Type_: [S3OutputLocation](aws-properties-ssm-association-s3outputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Location?: SSMAssociationS3OutputLocation;
}

/**
 * `Target` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies the targets for an SSM document in Systems Manager. You can target all instances in an AWS account by specifying the `InstanceIds` key with a value of `*`. To view a JSON and a YAML example that targets all instances, see "Create an association for all managed instances in an AWS account" on the Examples page.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-target.html}
 **/
export interface SSMAssociationTarget {
  /**
   * User-defined criteria that maps to `Key`. For example, if you specified `tag:ServerRole`, you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer`.
   *
   * Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * User-defined criteria for sending commands that target managed nodes that meet the criteria.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `163`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.:/=-@]*$|resource-groups:ResourceTypeFilters|resource-groups:Name`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * `S3OutputLocation` is a property of the [AWS::SSM::Association](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html) resource that specifies an Amazon S3 bucket where you want to store the results of this association request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-association-s3outputlocation.html}
 **/
export interface SSMAssociationS3OutputLocation {
  /**
   * The S3 bucket subfolder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputS3KeyPrefix?: Value<string>;
  /**
   * The AWS Region of the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputS3Region?: Value<string>;
  /**
   * The name of the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputS3BucketName?: Value<string>;
}
export interface SSMAssociationProperties {
  /**
   * Specify a descriptive name for the association.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociationName?: Value<string>;
  /**
   * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that Change Calendar is open. For more information, see [AWS Systems Manager Change Calendar](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CalendarNames?: List<Value<string>>;
  /**
   * A cron expression that specifies a schedule when the association runs. The schedule runs in Coordinated Universal Time (UTC).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
  /**
   * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set `MaxError` to 10%, then the system stops sending the request when the sixth error is received.
   *
   * Executions that are already running an association when `MaxErrors` is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set `MaxConcurrency` to 1 so that executions proceed one at a time.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `7`
   *
   * _Pattern_: `^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxErrors?: Value<string>;
  /**
   * The parameters for the runtime configuration of the document.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * The ID of the instance that the SSM document is associated with. You must specify the `InstanceId` or `Targets` property.
   *
   * `InstanceId` has been deprecated. To specify an instance ID for an association, use the `Targets` parameter. If you use the parameter `InstanceId`, you cannot use the parameters `AssociationName`, `DocumentVersion`, `MaxErrors`, `MaxConcurrency`, `OutputLocation`, or `ScheduleExpression`. To use these parameters, you must use the `Targets` parameter.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Pattern_: `(^i-(w{8}|w{17})$)|(^mi-w{17}$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceId?: Value<string>;
  /**
   * The number of seconds the service should wait for the association status to show "Success" before proceeding with the stack execution. If the association status doesn't show "Success" after the specified number of seconds, then stack creation fails.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitForSuccessTimeoutSeconds?: Value<number>;
  /**
   * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time.
   *
   * If a new managed node starts and attempts to run an association while Systems Manager is running `MaxConcurrency` associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for `MaxConcurrency`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `7`
   *
   * _Pattern_: `^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrency?: Value<string>;
  /**
   * The severity level that is assigned to the association.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CRITICAL | HIGH | LOW | MEDIUM | UNSPECIFIED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComplianceSeverity?: Value<string>;
  /**
   * The targets for the association. You must specify the `InstanceId` or `Targets` property. You can target all instances in an AWS account by specifying the `InstanceIds` key with a value of `*`. To view a JSON and a YAML example that targets all instances, see "Create an association for all managed instances in an AWS account" on the Examples page.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [Target](aws-properties-ssm-association-target.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets?: List<SSMAssociationTarget>;
  /**
   * The mode for generating association compliance. You can specify `AUTO` or `MANUAL`. In `AUTO` mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is `COMPLIANT`. If the association execution doesn't run successfully, the association is `NON-COMPLIANT`.
   *
   * In `MANUAL` mode, you must specify the `AssociationId` as a parameter for the PutComplianceItems API action. In this case, compliance data is not managed by State Manager. It is managed by your direct call to the PutComplianceItems API action.
   *
   * By default, all associations use `AUTO` mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTO | MANUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SyncCompliance?: Value<string>;
  /**
   * An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
   *
   * _Required_: No
   *
   * _Type_: [InstanceAssociationOutputLocation](aws-properties-ssm-association-instanceassociationoutputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputLocation?: SSMAssociationInstanceAssociationOutputLocation;
  /**
   * Number of days to wait after the scheduled day to run an association.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleOffset?: Value<number>;
  /**
   * The name of the SSM document that contains the configuration information for the instance. You can specify `Command` or `Automation` documents. The documents can be AWS-predefined documents, documents you created, or a document that is shared with you from another account. For SSM documents that are shared with you from other AWS accounts, you must specify the complete SSM document ARN, in the following format:
   *
   * `arn:partition:ssm:region:account-id:document/document-name`
   *
   * For example: `arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document`
   *
   * For AWS-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, `AWS-ApplyPatchBaseline` or `My-Document`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.:/]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter is not supported for rate expressions.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyOnlyAtCronInterval?: Value<boolean>;
  /**
   * The version of the SSM document to associate with the target.
   *
   * Note the following important information.
   */
  DocumentVersion?: Value<string>;
  /**
   * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a capability of AWS Systems Manager.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomationTargetParameterName?: Value<string>;
}

/**
 * The `AWS::SSM::Association` resource creates a State Manager association for your managed instances. A State Manager association defines the state that you want to maintain on your instances. For example, an association can specify that anti-virus software must be installed and running on your instances, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS Resource Groups or an AWS Auto Scaling Group, State Manager applies the configuration when new instances are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software is not installed, then State Manager installs it. If the software is installed, but the service is not running, then the association might instruct State Manager to start the service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-association.html}
 */
export interface SSMAssociationResource {
  Type: 'AWS::SSM::Association';
  Properties: SSMAssociationProperties;
}
