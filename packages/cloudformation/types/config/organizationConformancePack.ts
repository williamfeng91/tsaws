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
 * Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-organizationconformancepack-conformancepackinputparameter.html}
 **/
export interface ConfigOrganizationConformancePackConformancePackInputParameter {
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
export interface ConfigOrganizationConformancePackProperties {
  /**
   * A list of `ConformancePackInputParameter` objects.
   *
   * _Required_: No
   *
   * _Type_: List of [ConformancePackInputParameter](aws-properties-config-organizationconformancepack-conformancepackinputparameter.md)
   *
   * _Maximum_: `60`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConformancePackInputParameters?: List<ConfigOrganizationConformancePackConformancePackInputParameter>;
  /**
   * The name of the Amazon S3 bucket where AWS Config stores conformance pack templates.
   *
   * This field is optional.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryS3Bucket?: Value<string>;
  /**
   * A comma-separated list of accounts excluded from organization conformance pack.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedAccounts?: List<Value<string>>;
  /**
   * Any folder structure you want to add to an Amazon S3 bucket.
   *
   * This field is optional.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryS3KeyPrefix?: Value<string>;
  /**
   * A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateBody?: Value<string>;
  /**
   * The name you assign to an organization conformance pack.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z][-a-zA-Z0-9]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OrganizationConformancePackName: Value<string>;
  /**
   * Location of file containing the template body. The uri must point to the conformance pack template (max size: 300 KB).
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
 * OrganizationConformancePack deploys conformance packs across member accounts in an AWS Organizations. OrganizationConformancePack enables organization service access for `config-multiaccountsetup.amazonaws.com` through the `EnableAWSServiceAccess` action and creates a service linked role in the master account of your organization. The service linked role is created only when the role does not exist in the master account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-organizationconformancepack.html}
 */
export interface ConfigOrganizationConformancePackResource {
  Type: 'AWS::Config::OrganizationConformancePack';
  Properties: ConfigOrganizationConformancePackProperties;
}
