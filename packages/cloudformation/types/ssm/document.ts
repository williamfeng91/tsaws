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
 * Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-attachmentssource.html}
 **/
export interface SSMDocumentAttachmentsSource {
  /**
   * The value of a key-value pair that identifies the location of an attachment to a document. The format for **Value** depends on the type of key you specify.
   */
  Values?: List<Value<string>>;
  /**
   * The key of a key-value pair that identifies the location of an attachment to a document.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AttachmentReference | S3FileUrl | SourceUrl`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
  /**
   * The name of the document attachment file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * An SSM document required by the current document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-document-documentrequires.html}
 **/
export interface SSMDocumentDocumentRequires {
  /**
   * The document version required by the current document.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.:/]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}
export interface SSMDocumentProperties {
  /**
   * Specify the document format for the request. JSON is the default format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `JSON | TEXT | YAML`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentFormat?: Value<string>;
  /**
   * A list of SSM documents required by a document. This parameter is used exclusively by AWS AppConfig. When a user creates an AWS AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an `ApplicationConfiguration` document requires an `ApplicationConfigurationSchema` document for validation purposes. For more information, see [What is AWS AppConfig?](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _ AWS AppConfig User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [DocumentRequires](aws-properties-ssm-document-documentrequires.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Requires?: List<SSMDocumentDocumentRequires>;
  /**
   * The content for the new SSM document in JSON or YAML. For more information about the schemas for SSM document content, see [SSM document schema features and examples](https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html) in the _AWS Systems Manager User Guide_.
   *
   * This parameter also supports `String` data types.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: { [key: string]: any };
  /**
   * Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: `/AWS::EC2::Instance`. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see [AWS resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the _AWS CloudFormation User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `^/[w.-:/]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetType?: Value<string>;
  /**
   * The type of document to create.
   *
   * _Allowed Values_: `ApplicationConfigurationSchema` | `Automation` | `Automation.ChangeTemplate` | `Command` | `DeploymentStrategy` | `Package` | `Policy` | `Session`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DocumentType?: Value<string>;
  /**
   * An optional field specifying the version of the artifact you are creating with the document. For example, `Release12.1`. This value is unique across all versions of a document, and can't be changed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{1,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionName?: Value<string>;
  /**
   * If the document resource you specify in your template already exists, this parameter determines whether a new version of the existing document is created, or the existing document is replaced. `Replace` is the default method. If you specify `NewVersion` for the `UpdateMethod` parameter, and the `Name` of the document does not match an existing resource, a new document is created. When you specify `NewVersion`, the default version of the document is changed to the newly created version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateMethod?: Value<string>;
  /**
   * A list of key-value pairs that describe attachments to a version of a document.
   *
   * _Required_: No
   *
   * _Type_: List of [AttachmentsSource](aws-properties-ssm-document-attachmentssource.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attachments?: List<SSMDocumentAttachmentsSource>;
  /**
   * AWS CloudFormation resource tags to apply to the document. Use tags to help you identify and categorize resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A name for the SSM document.
   *
   * You can't use the following strings as document name prefixes. These are reserved by AWS for use as document name prefixes:
   */
  Name?: Value<string>;
}

/**
 * The `AWS::SSM::Document` resource creates a Systems Manager (SSM) document in AWS Systems Manager. This document defines the actions that Systems Manager performs on your AWS resources.
 *
 * **Note**
 *
 * This resource does not support CloudFormation drift detection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html}
 */
export interface SSMDocumentResource {
  Type: 'AWS::SSM::Document';
  Properties: SSMDocumentProperties;
}
