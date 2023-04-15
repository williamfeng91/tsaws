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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The configuration of the audit notification target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html}
 **/
export interface IoTAccountAuditConfigurationAuditNotificationTargetConfigurations {
  /**
   * The `Sns` notification target.
   *
   * _Required_: No
   *
   * _Type_: [AuditNotificationTarget](aws-properties-iot-accountauditconfiguration-auditnotificationtarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sns?: IoTAccountAuditConfigurationAuditNotificationTarget;
}

/**
 * Information about the targets to which audit notifications are sent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html}
 **/
export interface IoTAccountAuditConfigurationAuditNotificationTarget {
  /**
   * The ARN of the target (SNS topic) to which audit notifications are sent.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetArn?: Value<string>;
  /**
   * True if notifications to the target are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The ARN of the role that grants permission to send notifications to the target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The types of audit checks that can be performed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html}
 **/
export interface IoTAccountAuditConfigurationAuditCheckConfigurations {
  /**
   * Checks if the temporary credentials provided by AWS IoT role aliases are overly permissive.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotRoleAliasOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if multiple concurrent connections use the same X.509 certificate to authenticate with AWS IoT.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceCertificateSharedCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if multiple devices connect using the same client ID.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConflictingClientIdsCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntermediateCaRevokedForActiveDeviceCertificatesCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if a role alias has access to services that haven't been used for the AWS IoT device in the last year.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotRoleAliasAllowsAccessToUnusedServicesCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if a revoked CA certificate is still active.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RevokedCaCertificateStillActiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if AWS IoT logs are disabled.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingDisabledCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if policy attached to an unauthenticated Amazon Cognito identity pool role is too permissive.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnauthenticatedCognitoRoleOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks the permissiveness of an authenticated Amazon Cognito identity pool role. For this check, AWS IoT Device Defender audits all Amazon Cognito identity pools that have been used to connect to the AWS IoT message broker during the 31 days before the audit is performed.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticatedCognitoRoleOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if a CA certificate is expiring. This check applies to CA certificates expiring within 30 days or that have expired.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaCertificateExpiringCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if a device certificate is expiring. This check applies to device certificates expiring within 30 days or that have expired.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceCertificateExpiringCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IoTPolicyPotentialMisConfigurationCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks the permissiveness of a policy attached to an authenticated Amazon Cognito identity pool role.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotPolicyOverlyPermissiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks if a revoked device certificate is still active.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RevokedDeviceCertificateStillActiveCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks the quality of the device certificate key. The quality checks if the key is in a valid format, not expired, signed by a registered certificate authority, and if the key meets a minimum required size.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceCertificateKeyQualityCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
  /**
   * Checks the quality of the CA certificate key. The quality checks if the key is in a valid format, not expired, and if the key meets a minimum required size. This check applies to CA certificates that are `ACTIVE` or `PENDING_TRANSFER`.
   *
   * _Required_: No
   *
   * _Type_: [AuditCheckConfiguration](aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaCertificateKeyQualityCheck?: IoTAccountAuditConfigurationAuditCheckConfiguration;
}

/**
 * Which audit checks are enabled and disabled for this account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html}
 **/
export interface IoTAccountAuditConfigurationAuditCheckConfiguration {
  /**
   * True if this audit check is enabled for this account.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}
export interface IoTAccountAuditConfigurationProperties {
  /**
   * The ID of the account. You can use the expression `!Sub "${AWS::AccountId}"` to use your account ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccountId: Value<string>;
  /**
   * Specifies which audit checks are enabled and disabled for this account.
   *
   * Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted. To disable a check, set the value of the `Enabled:` key to `false`.
   *
   * If an enabled check is removed from the template, it will also be disabled.
   *
   * You can't disable a check if it's used by any scheduled audit. You must delete the check from the scheduled audit or delete the scheduled audit itself to disable the check.
   *
   * For more information on avialbe auidt checks see [AWS::IoT::AccountAuditConfiguration AuditCheckConfigurations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html)
   *
   * _Required_: Yes
   *
   * _Type_: [AuditCheckConfigurations](aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuditCheckConfigurations: IoTAccountAuditConfigurationAuditCheckConfigurations;
  /**
   * Information about the targets to which audit notifications are sent.
   *
   * _Required_: No
   *
   * _Type_: [AuditNotificationTargetConfigurations](aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuditNotificationTargetConfigurations?: IoTAccountAuditConfigurationAuditNotificationTargetConfigurations;
  /**
   * The Amazon Resource Name (ARN) of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Use the `AWS::IoT::AccountAuditConfiguration` resource to configure or reconfigure the Device Defender audit settings for your account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. For API reference, see [UpdateAccountAuditConfiguration](https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html) and for detailed information on all available audit checks, see [Audit checks](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit-checks.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html}
 */
export interface IoTAccountAuditConfigurationResource {
  Type: 'AWS::IoT::AccountAuditConfiguration';
  Properties: IoTAccountAuditConfigurationProperties;
}
