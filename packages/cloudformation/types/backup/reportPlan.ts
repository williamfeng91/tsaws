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
 * Contains detailed information about a report setting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportsetting.html}
 **/
export interface BackupReportPlanReportSetting {
  /**
   * The Amazon Resource Names (ARNs) of the frameworks a report covers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameworkArns?: List<Value<string>>;
  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportTemplate: Value<string>;
  /**
   * These are the Organizational Units to be included in the report.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationUnits?: List<Value<string>>;
  /**
   * These are the Regions to be included in the report.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regions?: List<Value<string>>;
  /**
   * These are the accounts to be included in the report.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Accounts?: List<Value<string>>;
}

/**
 * Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-reportplan-reportdeliverychannel.html}
 **/
export interface BackupReportPlanReportDeliveryChannel {
  /**
   * The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/`prefix`/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3KeyPrefix?: Value<string>;
  /**
   * A list of the format of your reports: `CSV`, `JSON`, or both. If not specified, the default format is `CSV`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Formats?: List<Value<string>>;
  /**
   * The unique name of the S3 bucket that receives your reports.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketName: Value<string>;
}
export interface BackupReportPlanProperties {
  /**
   * Identifies the report template for the report. Reports are built using a report template. The report templates are:
   *
   * `RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`
   *
   * If the report template is `RESOURCE_COMPLIANCE_REPORT` or `CONTROL_COMPLIANCE_REPORT`, this API resource also describes the report coverage by AWS Regions and frameworks.
   *
   * _Required_: Yes
   *
   * _Type_: [ReportSetting](aws-properties-backup-reportplan-reportsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportSetting: BackupReportPlanReportSetting;
  /**
   * An optional description of the report plan with a maximum 1,024 characters.
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
  ReportPlanDescription?: Value<string>;
  /**
   * The unique name of the report plan. This name is between 1 and 256 characters starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
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
  ReportPlanName?: Value<string>;
  /**
   * Contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
   *
   * _Required_: Yes
   *
   * _Type_: [ReportDeliveryChannel](aws-properties-backup-reportplan-reportdeliverychannel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
  /**
   * A list of tags to tag your report plan.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportPlanTags?: List<ResourceTag>;
}

/**
 * Creates a report plan. A report plan is a document that contains information about the contents of the report and where AWS Backup will deliver it.
 *
 * If you call `CreateReportPlan` with a plan that already exists, you receive an `AlreadyExistsException` exception.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-reportplan.html}
 */
export interface BackupReportPlanResource {
  Type: 'AWS::Backup::ReportPlan';
  Properties: BackupReportPlanProperties;
}
