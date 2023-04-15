/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
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
 * The `AWSAccount` property type specifies the wrapper of the AWS account details, such as account ID, email address, and so on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsaccount.html}
 **/
export interface AuditManagerAssessmentAWSAccount {
  /**
   * The identifier for the AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Id?: Value<string>;
  /**
   * The email address that's associated with the AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `320`
   *
   * _Pattern_: `^.*@.*$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  EmailAddress?: Value<string>;
  /**
   * The name of the AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `^[u0020-u007E]+$`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `Delegation` property type specifies the assignment of a control set to a delegate for review.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-delegation.html}
 **/
export interface AuditManagerAssessmentDelegation {
  /**
   * The status of the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COMPLETE | IN_PROGRESS | UNDER_REVIEW`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The comment that's related to the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `350`
   *
   * _Pattern_: `^[wWsS]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The user or role that created the delegation.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z0-9-_()[]s]+$`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedBy?: Value<string>;
  /**
   * The type of customer persona.
   *
   * In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`.
   *
   * In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`.
   *
   * In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleType?: Value<string>;
  /**
   * The identifier for the assessment that's associated with the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `36`
   *
   * _Maximum_: `36`
   *
   * _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssessmentId?: Value<string>;
  /**
   * Specifies when the delegation was created.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreationTime?: Value<number>;
  /**
   * Specifies when the delegation was last updated.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastUpdated?: Value<number>;
  /**
   * The unique identifier for the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `36`
   *
   * _Maximum_: `36`
   *
   * _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
  /**
   * The name of the assessment that's associated with the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Pattern_: `^[^]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssessmentName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:.*:iam:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The identifier for the control set that's associated with the delegation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Pattern_: `^[wWsS]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlSetId?: Value<string>;
}

/**
 * The `Role` property type specifies the wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name (ARN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-role.html}
 **/
export interface AuditManagerAssessmentRole {
  /**
   * The type of customer persona.
   *
   * In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`.
   *
   * In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`.
   *
   * In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:.*:iam:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The `AssessmentReportsDestination` property type specifies the location in which AWS Audit Manager saves assessment reports for the given assessment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-assessmentreportsdestination.html}
 **/
export interface AuditManagerAssessmentAssessmentReportsDestination {
  /**
   * The destination of the assessment report.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(S|s)3://[a-zA-Z0-9-.()'*_!/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: Value<string>;
  /**
   * The destination type, such as Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationType?: Value<string>;
}

/**
 * The `AWSService` property type specifies an AWS service such as Amazon S3, AWS CloudTrail, and so on.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-awsservice.html}
 **/
export interface AuditManagerAssessmentAWSService {
  /**
   * The name of the AWS service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^[a-zA-Z0-9-s().]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName?: Value<string>;
}

/**
 * The `Scope` property type specifies the wrapper that contains the AWS accounts and services that are in scope for the assessment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-auditmanager-assessment-scope.html}
 **/
export interface AuditManagerAssessmentScope {
  /**
   * The AWS accounts that are included in the scope of the assessment.
   *
   * _Required_: No
   *
   * _Type_: List of [AWSAccount](aws-properties-auditmanager-assessment-awsaccount.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsAccounts?: List<AuditManagerAssessmentAWSAccount>;
  /**
   * The AWS services that are included in the scope of the assessment.
   *
   * _Required_: No
   *
   * _Type_: List of [AWSService](aws-properties-auditmanager-assessment-awsservice.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsServices?: List<AuditManagerAssessmentAWSService>;
}
export interface AuditManagerAssessmentProperties {
  /**
   * The overall status of the assessment.
   *
   * When you create a new assessment, the initial `Status` value is always `ACTIVE`. When you create an assessment, even if you specify the value as `INACTIVE`, the value overrides to `ACTIVE`.
   *
   * After you create an assessment, you can change the value of the `Status` property at any time. For example, when you want to stop collecting evidence for your assessment, you can change the assessment status to `INACTIVE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTIVE | INACTIVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The destination that evidence reports are stored in for the assessment.
   *
   * _Required_: No
   *
   * _Type_: [AssessmentReportsDestination](aws-properties-auditmanager-assessment-assessmentreportsdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssessmentReportsDestination?: AuditManagerAssessmentAssessmentReportsDestination;
  /**
   * The delegations that are associated with the assessment.
   *
   * _Required_: No
   *
   * _Type_: List of [Delegation](aws-properties-auditmanager-assessment-delegation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delegations?: List<AuditManagerAssessmentDelegation>;
  /**
   * The description of the assessment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^[wWsS]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The wrapper of AWS accounts and services that are in scope for the assessment.
   *
   * _Required_: No
   *
   * _Type_: [Scope](aws-properties-auditmanager-assessment-scope.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: AuditManagerAssessmentScope;
  /**
   * The AWS account that's associated with the assessment.
   *
   * _Required_: No
   *
   * _Type_: [AWSAccount](aws-properties-auditmanager-assessment-awsaccount.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AwsAccount?: AuditManagerAssessmentAWSAccount;
  /**
   * The roles that are associated with the assessment.
   *
   * _Required_: No
   *
   * _Type_: List of [Role](aws-properties-auditmanager-assessment-role.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Roles?: List<AuditManagerAssessmentRole>;
  /**
   * The unique identifier for the framework.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `36`
   *
   * _Maximum_: `36`
   *
   * _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FrameworkId?: Value<string>;
  /**
   * The tags that are associated with the assessment.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the assessment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Pattern_: `^[^]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::AuditManager::Assessment` resource is an Audit Manager resource type that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html}
 */
export interface AuditManagerAssessmentResource {
  Type: 'AWS::AuditManager::Assessment';
  Properties: AuditManagerAssessmentProperties;
}
