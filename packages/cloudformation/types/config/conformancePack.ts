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

/**
 * This API allows you to create a conformance pack template with an AWS Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the `DocumentName` in the [PutConformancePack API](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html). You can also provide the `DocumentVersion`.
 *
 * The `TemplateSSMDocumentDetails` object contains the name of the SSM document and the version of the SSM document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-templatessmdocumentdetails.html}
 **/
export interface ConfigConformancePackTemplateSSMDocumentDetails {
  /**
   * The version of the SSM document to use to create a conformance pack. By default, AWS Config uses the latest version.
   *
   * This field is optional.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentVersion?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack. If you use the document name, AWS Config checks only your account and AWS Region for the SSM document. If you want to use an SSM document from another Region or account, you must provide the ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.:/]{3,200}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentName?: Value<string>;
}

/**
 * Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-conformancepack-conformancepackinputparameter.html}
 **/
export interface ConfigConformancePackConformancePackInputParameter {
  /**
   * Another part of the key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue: Value<string>;
  /**
   * One part of a key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterName: Value<string>;
}
export interface ConfigConformancePackProperties {
  /**
   * A list of ConformancePackInputParameter objects.
   *
   * _Required_: No
   *
   * _Type_: List of [ConformancePackInputParameter](aws-properties-config-conformancepack-conformancepackinputparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConformancePackInputParameters?: List<ConfigConformancePackConformancePackInputParameter>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [TemplateSSMDocumentDetails](aws-properties-config-conformancepack-templatessmdocumentdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateSSMDocumentDetails?: ConfigConformancePackTemplateSSMDocumentDetails;
  /**
   * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryS3Bucket?: Value<string>;
  /**
   * Name of the conformance pack you want to create.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConformancePackName: Value<string>;
  /**
   * The prefix for the Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryS3KeyPrefix?: Value<string>;
  /**
   * A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * You can only use a YAML template with two resource types: config rule (`AWS::Config::ConfigRule`) and a remediation action (`AWS::Config::RemediationConfiguration`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateBody?: Value<string>;
  /**
   * Location of file containing the template body (s3://bucketname/prefix). The uri must point to the conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket.
   *
   * You must have access to read Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateS3Uri?: Value<string>;
}

/**
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region. ConformancePack creates a service linked role in your account. The service linked role is created only when the role does not exist in your account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-conformancepack.html}
 */
export interface ConfigConformancePackResource {
  Type: 'AWS::Config::ConformancePack';
  Properties: ConfigConformancePackProperties;
}
