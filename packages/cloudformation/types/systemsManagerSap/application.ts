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
 * The credentials of your SAP application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-systemsmanagersap-application-credential.html}
 **/
export interface SystemsManagerSAPApplicationCredential {
  /**
   * The secret ID created in AWS Secrets Manager to store the credentials of the SAP application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecretId?: Value<string>;
  /**
   * The name of the SAP HANA database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName?: Value<string>;
  /**
   * The type of the application credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CredentialType?: Value<string>;
}
export interface SystemsManagerSAPApplicationProperties {
  /**
   * The Amazon EC2 instances on which your SAP application is running.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Instances?: List<Value<string>>;
  /**
   * The type of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `HANA`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationType: Value<string>;
  /**
   * The SAP instance number of the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[0-9]{2}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SapInstanceNumber?: Value<string>;
  /**
   * The ID of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[wd]{1,50}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationId: Value<string>;
  /**
   * The credentials of the SAP application.
   *
   * _Required_: No
   *
   * _Type_: List of [Credential](aws-properties-systemsmanagersap-application-credential.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Credentials?: List<SystemsManagerSAPApplicationCredential>;
  /**
   * The tags on the application.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The System ID of the application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[A-Z][A-Z0-9]{2}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Sid?: Value<string>;
}

/**
 * An SAP application registered with AWS Systems Manager for SAP.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html}
 */
export interface SystemsManagerSAPApplicationResource {
  Type: 'AWS::SystemsManagerSAP::Application';
  Properties: SystemsManagerSAPApplicationProperties;
}
