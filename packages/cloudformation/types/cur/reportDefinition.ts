/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface CURReportDefinitionProperties {
  /**
   * A list of manifests that you want AWS to create for this report.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalArtifacts?: List<Value<string>>;
  /**
   * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReportName: Value<string>;
  /**
   * The compression format that Amazon Web Services uses for the report.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Compression: Value<string>;
  /**
   * The format that Amazon Web Services saves the report in.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format: Value<string>;
  /**
   * Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months. These charges can include refunds, credits, or support fees.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshClosedReports: Value<boolean>;
  /**
   * The S3 bucket where Amazon Web Services delivers the report.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CREATE_NEW_REPORT | OVERWRITE_REPORT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReportVersioning: Value<string>;
  /**
   * The Region of the S3 bucket that Amazon Web Services delivers the report into.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Region: Value<string>;
  /**
   * The granularity of the line items in the report.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeUnit: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the billing view. You can get this value by using the billing view service public APIs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BillingViewArn?: Value<string>;
  /**
   * The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix can't include spaces.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Prefix: Value<string>;
  /**
   * A list of strings that indicate additional content that AWS includes in the report, such as individual resource IDs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AdditionalSchemaElements?: List<Value<string>>;
}

/**
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html}
 */
export interface CURReportDefinitionResource {
  Type: 'AWS::CUR::ReportDefinition';
  Properties: CURReportDefinitionProperties;
}
