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
 * Code signing configuration [policies](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies) specify the validation failure action for signature mismatch or expiry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html}
 **/
export interface LambdaCodeSigningConfigCodeSigningPolicies {
  /**
   * Code signing configuration policy for deployment validation failure. If you set the policy to `Enforce`, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to `Warn`, Lambda allows the deployment and creates a CloudWatch log.
   *
   * Default value: `Warn`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Enforce | Warn`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UntrustedArtifactOnDeployment: Value<string>;
}

/**
 * List of signing profiles that can sign a code package.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html}
 **/
export interface LambdaCodeSigningConfigAllowedPublishers {
  /**
   * The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigningProfileVersionArns: List<Value<string>>;
}
export interface LambdaCodeSigningConfigProperties {
  /**
   * Code signing configuration description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * List of allowed publishers.
   *
   * _Required_: Yes
   *
   * _Type_: [AllowedPublishers](aws-properties-lambda-codesigningconfig-allowedpublishers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
  /**
   * The code signing policy controls the validation failure action for signature mismatch or expiry.
   *
   * _Required_: No
   *
   * _Type_: [CodeSigningPolicies](aws-properties-lambda-codesigningconfig-codesigningpolicies.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeSigningPolicies?: LambdaCodeSigningConfigCodeSigningPolicies;
}

/**
 * Details about a [Code signing configuration](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html}
 */
export interface LambdaCodeSigningConfigResource {
  Type: 'AWS::Lambda::CodeSigningConfig';
  Properties: LambdaCodeSigningConfigProperties;
}
