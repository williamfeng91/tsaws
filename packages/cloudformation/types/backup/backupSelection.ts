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
 * Specifies an object that contains an array of triplets made up of a condition type (such as `STRINGEQUALS`), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionresourcetype.html}
 **/
export interface BackupBackupSelectionConditionResourceType {
  /**
   * The value in a key-value pair. For example, in `"Department": "accounting"`, `"accounting"` is the value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionValue: Value<string>;
  /**
   * The key in a key-value pair. For example, in `"Department": "accounting"`, `"Department"` is the key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionKey: Value<string>;
  /**
   * An operation, such as `STRINGEQUALS`, that is applied to a key-value pair used to filter resources in a selection.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionType: Value<string>;
}

/**
 * Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditions.html}
 **/
export interface BackupBackupSelectionConditions {
  /**
   * Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."
   *
   * _Required_: No
   *
   * _Type_: List of [ConditionParameter](aws-properties-backup-backupselection-conditionparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StringEquals?: List<BackupBackupSelectionConditionParameter>;
  /**
   * Filters the values of your tagged resources for non-matching tag values with the use of a wildcard character (*) anywhere in the string.
   *
   * _Required_: No
   *
   * _Type_: List of [ConditionParameter](aws-properties-backup-backupselection-conditionparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StringNotLike?: List<BackupBackupSelectionConditionParameter>;
  /**
   * Filters the values of your tagged resources for matching tag values with the use of a wildcard character (*) anywhere in the string. For example, "prod*" or "*rod*" matches the tag value "production".
   *
   * _Required_: No
   *
   * _Type_: List of [ConditionParameter](aws-properties-backup-backupselection-conditionparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StringLike?: List<BackupBackupSelectionConditionParameter>;
  /**
   * Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."
   *
   * _Required_: No
   *
   * _Type_: List of [ConditionParameter](aws-properties-backup-backupselection-conditionparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StringNotEquals?: List<BackupBackupSelectionConditionParameter>;
}

/**
 * Specifies an object containing properties used to assign a set of resources to a backup plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-backupselectionresourcetype.html}
 **/
export interface BackupBackupSelectionBackupSelectionResourceType {
  /**
   * A list of conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },`. Condition operators are case sensitive.
   *
   * `ListOfTags` differs from `Conditions` as follows:
   */
  ListOfTags?: List<BackupBackupSelectionConditionResourceType>;
  /**
   * A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.
   *
   * If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotResources?: List<Value<string>>;
  /**
   * The display name of a resource selection document.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SelectionName: Value<string>;
  /**
   * The ARN of the IAM role that AWS Backup uses to authenticate when backing up the target resource; for example, `arn:aws:iam::123456789012:role/S3Access`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IamRoleArn: Value<string>;
  /**
   * An array of strings that contain Amazon Resource Names (ARNs) of resources to assign to a backup plan.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resources?: List<Value<string>>;
  /**
   * A list of conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },`. Condition operators are case sensitive.
   *
   * `Conditions` differs from `ListOfTags` as follows:
   */
  Conditions?: BackupBackupSelectionConditions;
}

/**
 * Includes information about tags you define to assign tagged resources to a backup plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupselection-conditionparameter.html}
 **/
export interface BackupBackupSelectionConditionParameter {
  /**
   * The value in a key-value pair. For example, in the tag `Department: Accounting`, `Accounting` is the value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionValue?: Value<string>;
  /**
   * The key in a key-value pair. For example, in the tag `Department: Accounting`, `Department` is the key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConditionKey?: Value<string>;
}
export interface BackupBackupSelectionProperties {
  /**
   * Specifies the body of a request to assign a set of resources to a backup plan.
   *
   * It includes an array of resources, an optional array of patterns to exclude resources, an optional role to provide access to the AWS service the resource belongs to, and an optional array of tags used to identify a set of resources.
   *
   * _Required_: Yes
   *
   * _Type_: [BackupSelectionResourceType](aws-properties-backup-backupselection-backupselectionresourcetype.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BackupSelection: BackupBackupSelectionBackupSelectionResourceType;
  /**
   * Uniquely identifies a backup plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BackupPlanId: Value<string>;
}

/**
 * Specifies a set of resources to assign to a backup plan.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html}
 */
export interface BackupBackupSelectionResource {
  Type: 'AWS::Backup::BackupSelection';
  Properties: BackupBackupSelectionProperties;
}
