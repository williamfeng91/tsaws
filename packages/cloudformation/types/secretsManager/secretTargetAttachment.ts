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

export interface SecretsManagerSecretTargetAttachmentProperties {
  /**
   * The ARN or name of the secret. To reference a secret also created in this template, use the see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function with the secret's logical ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretId: Value<string>;
  /**
   * A string that defines the type of service or database associated with the secret. This value instructs Secrets Manager how to update the secret with the details of the service or database. This value must be one of the following:
   */
  TargetType: Value<string>;
  /**
   * The ID of the database or cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetId: Value<string>;
}

/**
 * The `AWS::SecretsManager::SecretTargetAttachment` resource completes the final link between a Secrets Manager secret and the associated database by adding the database connection information to the secret JSON. If you want to turn on automatic rotation for a database credential secret, the secret must contain the database connection information. For more information, see [JSON structure of Secrets Manager database credential secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html).
 *
 * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html}
 */
export interface SecretsManagerSecretTargetAttachmentResource {
  Type: 'AWS::SecretsManager::SecretTargetAttachment';
  Properties: SecretsManagerSecretTargetAttachmentProperties;
}
