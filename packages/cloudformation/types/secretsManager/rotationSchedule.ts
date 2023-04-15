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

/**
 * The rotation schedule and window. We recommend you use `ScheduleExpression` to set a cron or rate expression for the schedule and `Duration` to set the length of the rotation window.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-rotationrules.html}
 **/
export interface SecretsManagerRotationScheduleRotationRules {
  /**
   * A `cron()` or `rate()` expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone. Secrets Manager rotates your secret any time during a rotation window.
   *
   * Secrets Manager `rate()` expressions represent the interval in hours or days that you want to rotate your secret, for example `rate(12 hours)` or `rate(10 days)`. You can rotate a secret as often as every four hours. If you use a `rate()` expression, the rotation window starts at midnight. For a rate in hours, the default rotation window closes after one hour. For a rate in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
   *
   * You can use a `cron()` expression to create a rotation schedule that is more detailed than a rotation interval. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the _Secrets Manager Users Guide_. For a cron expression that represents a schedule in hours, the default rotation window closes after one hour. For a cron expression that represents a schedule in days, the default rotation window closes at the end of the day. You can set the `Duration` to change the rotation window. The rotation window must not extend into the next UTC day or into the next rotation window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
  /**
   * The length of the rotation window in hours, for example `3h` for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the `ScheduleExpression`. If you don't specify a `Duration`, for a `ScheduleExpression` in hours, the window automatically closes after one hour. For a `ScheduleExpression` in days, the window automatically closes at the end of the UTC day. For more information, including examples, see [Schedule expressions in Secrets Manager rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_schedule.html) in the _Secrets Manager Users Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Duration?: Value<string>;
  /**
   * The number of days between automatic scheduled rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.
   *
   * In `DescribeSecret` and `ListSecrets`, this value is calculated from the rotation schedule after every successful rotation. In `RotateSecret`, you can set the rotation schedule in `RotationRules` with `AutomaticallyAfterDays` or `ScheduleExpression`, but not both.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticallyAfterDays?: Value<number>;
}

/**
 * Creates a new Lambda rotation function based on one of the [ Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html).
 *
 * You must specify `Transform: AWS::SecretsManager-2020-07-23` at the beginning of the CloudFormation template.
 *
 * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.html}
 **/
export interface SecretsManagerRotationScheduleHostedRotationLambda {
  /**
   * The Python runtime version associated with the Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime?: Value<string>;
  /**
   * The rotation template to base the rotation function on, one of the following:
   */
  RotationType: Value<string>;
  /**
   * The name of the Lambda rotation function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotationLambdaName?: Value<string>;
  /**
   * The ARN of the KMS key that Secrets Manager uses to encrypt the secret. If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If `aws/secretsmanager` doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The ARN of the secret that contains superuser credentials, if you use the [ Alternating users rotation strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users). CloudFormation grants the execution role for the Lambda rotation function `GetSecretValue` permission to the secret in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html).
   *
   * You must create the superuser secret before you can set this property.
   *
   * You must also include the superuser secret ARN as a key in the JSON of the rotating secret so that the Lambda rotation function can find it. CloudFormation does not hardcode secret ARNs in the Lambda rotation function, so you can use the function to rotate multiple secrets. For more information, see [JSON structure of Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html).
   *
   * You can specify `MasterSecretArn` or `SuperuserSecretArn` but not both. They represent the same superuser secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterSecretArn?: Value<string>;
  /**
   * A comma-separated list of security group IDs applied to the target database.
   *
   * The templates applies the same security groups as on the Lambda rotation function that is created as part of this stack.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds?: Value<string>;
  /**
   * A string of the characters that you don't want in the password.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeCharacters?: Value<string>;
  /**
   * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the [alternating users strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key `aws/secretsmanager`. CloudFormation grants the execution role for the Lambda rotation function `Decrypt`, `DescribeKey`, and `GenerateDataKey` permission to the key in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html).
   *
   * You can specify `MasterSecretKmsKeyArn` or `SuperuserSecretKmsKeyArn` but not both. They represent the same superuser secret KMS key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterSecretKmsKeyArn?: Value<string>;
  /**
   * The ARN of the secret that contains superuser credentials, if you use the [ Alternating users rotation strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users). CloudFormation grants the execution role for the Lambda rotation function `GetSecretValue` permission to the secret in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html).
   *
   * You must create the superuser secret before you can set this property.
   *
   * You must also include the superuser secret ARN as a key in the JSON of the rotating secret so that the Lambda rotation function can find it. CloudFormation does not hardcode secret ARNs in the Lambda rotation function, so you can use the function to rotate multiple secrets. For more information, see [JSON structure of Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html).
   *
   * You can specify `MasterSecretArn` or `SuperuserSecretArn` but not both. They represent the same superuser secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuperuserSecretArn?: Value<string>;
  /**
   * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the [alternating users strategy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users) and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key `aws/secretsmanager`. CloudFormation grants the execution role for the Lambda rotation function `Decrypt`, `DescribeKey`, and `GenerateDataKey` permission to the key in this property. For more information, see [Lambda rotation function execution role permissions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html).
   *
   * You can specify `MasterSecretKmsKeyArn` or `SuperuserSecretKmsKeyArn` but not both. They represent the same superuser secret KMS key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuperuserSecretKmsKeyArn?: Value<string>;
  /**
   * A comma separated list of VPC subnet IDs of the target database network. The Lambda rotation function is in the same subnet group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSubnetIds?: Value<string>;
}
export interface SecretsManagerRotationScheduleProperties {
  /**
   * The ARN or name of the secret to rotate.
   *
   * To reference a secret also created in this template, use the [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function with the secret's logical ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecretId: Value<string>;
  /**
   * Creates a new Lambda rotation function based on one of the [ Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html). To use a rotation function that already exists, specify `RotationLambdaARN` instead.
   *
   * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
   *
   * _Required_: No
   *
   * _Type_: [HostedRotationLambda](aws-properties-secretsmanager-rotationschedule-hostedrotationlambda.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedRotationLambda?: SecretsManagerRotationScheduleHostedRotationLambda;
  /**
   * The ARN of an existing Lambda rotation function. To specify a rotation function that is also defined in this template, use the [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html) function.
   *
   * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
   *
   * To create a new rotation function based on one of the [ Secrets Manager rotation function templates](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html), specify `HostedRotationLambda` instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotationLambdaARN?: Value<string>;
  /**
   * A structure that defines the rotation configuration for this secret.
   *
   * _Required_: No
   *
   * _Type_: [RotationRules](aws-properties-secretsmanager-rotationschedule-rotationrules.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotationRules?: SecretsManagerRotationScheduleRotationRules;
  /**
   * Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in `RotationRules`.
   *
   * If you don't immediately rotate the secret, Secrets Manager tests the rotation configuration by running the [`testSecret` step](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. The test creates an `AWSPENDING` version of the secret and then removes it.
   *
   * If you don't specify this value, then by default, Secrets Manager rotates the secret immediately.
   *
   * Rotation is an asynchronous process. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RotateImmediatelyOnUpdate?: Value<boolean>;
}

/**
 * Sets the rotation schedule and Lambda rotation function for a secret. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html).
 *
 * For Amazon RDS master user credentials, see [AWS::RDS::DBCluster MasterUserSecret](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html).
 *
 * For the rotation function, you have two options:
 *
 * For database secrets, if you define both the secret and the database or service in the AWS CloudFormation template, then you need to define the [AWS::SecretsManager::SecretTargetAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-secrettargetattachment.html) resource to populate the secret with the connection details of the database or service before you attempt to configure rotation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-rotationschedule.html}
 */
export interface SecretsManagerRotationScheduleResource {
  Type: 'AWS::SecretsManager::RotationSchedule';
  Properties: SecretsManagerRotationScheduleProperties;
}
