/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface ConnectIntegrationAssociationProperties {
  /**
   * ARN of the integration being associated with the instance.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IntegrationArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceId: Value<string>;
  /**
   * Specifies the integration type to be associated with the instance.
   *
   * _Allowed Values_: `LEX_BOT` | `LAMBDA_FUNCTION`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IntegrationType: Value<string>;
}

/**
 * Specifies the association of an AWS resource such as Lex bot (both v1 and v2) and Lambda function with an Amazon Connect instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html}
 */
export interface ConnectIntegrationAssociationResource {
  Type: 'AWS::Connect::IntegrationAssociation';
  Properties: ConnectIntegrationAssociationProperties;
}
