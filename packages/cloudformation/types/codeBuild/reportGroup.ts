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
 * Information about the location where the run of a report is exported.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-reportexportconfig.html}
 **/
export interface CodeBuildReportGroupReportExportConfig {
  /**
   * A `S3ReportExportConfig` object that contains information about the S3 bucket where the run of a report is exported.
   *
   * _Required_: No
   *
   * _Type_: [S3ReportExportConfig](aws-properties-codebuild-reportgroup-s3reportexportconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Destination?: CodeBuildReportGroupS3ReportExportConfig;
  /**
   * The export configuration type. Valid values are:
   */
  ExportConfigType: Value<string>;
}

/**
 * Information about the S3 bucket where the raw data of a report are exported.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-reportgroup-s3reportexportconfig.html}
 **/
export interface CodeBuildReportGroupS3ReportExportConfig {
  /**
   * The path to the exported report's raw data results.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The name of the S3 bucket where the raw data of a report are exported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The type of build output artifact to create. Valid values include:
   */
  Packaging?: Value<string>;
  /**
   * The encryption key for the report's encrypted raw data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionKey?: Value<string>;
  /**
   * The AWS account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket that is owned by an account other than the account running the build.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketOwner?: Value<string>;
  /**
   * A boolean value that specifies if the results of a report are encrypted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionDisabled?: Value<boolean>;
}
export interface CodeBuildReportGroupProperties {
  /**
   * The type of the `ReportGroup`. This can be one of the following values:
   *
   * CODE_COVERAGE
   *
   * The report group contains code coverage reports.
   *
   * TEST
   *
   * The report group contains test reports.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CODE_COVERAGE | TEST`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Information about the destination where the raw data of this `ReportGroup` is exported.
   *
   * _Required_: Yes
   *
   * _Type_: [ReportExportConfig](aws-properties-codebuild-reportgroup-reportexportconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExportConfig: CodeBuildReportGroupReportExportConfig;
  /**
   * When deleting a report group, specifies if reports within the report group should be deleted.
   *
   * true
   *
   * Deletes any reports that belong to the report group before deleting the report group.
   *
   * false
   *
   * You must delete any reports in the report group. This is the default value. If you delete a report group that contains one or more reports, an exception is thrown.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteReports?: Value<boolean>;
  /**
   * A list of tag key and value pairs associated with this report group.
   *
   * These tags are available for use by AWS services that support AWS CodeBuild report group tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the `ReportGroup`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Represents a report group. A report group contains a collection of reports.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-reportgroup.html}
 */
export interface CodeBuildReportGroupResource {
  Type: 'AWS::CodeBuild::ReportGroup';
  Properties: CodeBuildReportGroupProperties;
}
