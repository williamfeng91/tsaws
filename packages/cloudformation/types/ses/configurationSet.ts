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
 * Settings for your VDM configuration as applicable to the Dashboard.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html}
 **/
export interface SESConfigurationSetDashboardOptions {
  /**
   * Specifies the status of your VDM engagement metrics collection. Can be one of the following:
   */
  EngagementMetrics: Value<string>;
}

/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html}
 **/
export interface SESConfigurationSetDeliveryOptions {
  /**
   * The name of the dedicated IP pool to associate with the configuration set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingPoolName?: Value<string>;
  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is `REQUIRE`, messages are only delivered if a TLS connection can be established. If the value is `OPTIONAL`, messages can be delivered in plain text if a TLS connection can't be established.
   *
   * Valid Values: `REQUIRE | OPTIONAL`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TlsPolicy?: Value<string>;
}

/**
 * Settings for your VDM configuration as applicable to the Guardian.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html}
 **/
export interface SESConfigurationSetGuardianOptions {
  /**
   * Specifies the status of your VDM optimized shared delivery. Can be one of the following:
   */
  OptimizedSharedDelivery: Value<string>;
}

/**
 * An object that contains information about the suppression list preferences for your account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html}
 **/
export interface SESConfigurationSetSuppressionOptions {
  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:
   */
  SuppressedReasons?: List<Value<string>>;
}

/**
 * The Virtual Deliverability Manager (VDM) options that apply to a configuration set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html}
 **/
export interface SESConfigurationSetVdmOptions {
  /**
   * Settings for your VDM configuration as applicable to the Dashboard.
   *
   * _Required_: No
   *
   * _Type_: [DashboardOptions](aws-properties-ses-configurationset-dashboardoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashboardOptions?: SESConfigurationSetDashboardOptions;
  /**
   * Settings for your VDM configuration as applicable to the Guardian.
   *
   * _Required_: No
   *
   * _Type_: [GuardianOptions](aws-properties-ses-configurationset-guardianoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GuardianOptions?: SESConfigurationSetGuardianOptions;
}

/**
 * Contains information about the reputation settings for a configuration set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html}
 **/
export interface SESConfigurationSetReputationOptions {
  /**
   * Describes whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.
   *
   * If the value is `true`, reputation metrics are published. If the value is `false`, reputation metrics are not published. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReputationMetricsEnabled?: Value<boolean>;
}

/**
 * A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
 *
 * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the _Amazon SES Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html}
 **/
export interface SESConfigurationSetTrackingOptions {
  /**
   * The custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRedirectDomain?: Value<string>;
}

/**
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html}
 **/
export interface SESConfigurationSetSendingOptions {
  /**
   * If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingEnabled?: Value<boolean>;
}
export interface SESConfigurationSetProperties {
  /**
   * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [SendingOptions](aws-properties-ses-configurationset-sendingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendingOptions?: SESConfigurationSetSendingOptions;
  /**
   * An object that contains information about the suppression list preferences for your account.
   *
   * _Required_: No
   *
   * _Type_: [SuppressionOptions](aws-properties-ses-configurationset-suppressionoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuppressionOptions?: SESConfigurationSetSuppressionOptions;
  /**
   * The name of the custom open and click tracking domain associated with the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [TrackingOptions](aws-properties-ses-configurationset-trackingoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrackingOptions?: SESConfigurationSetTrackingOptions;
  /**
   * An object that represents the reputation settings for the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [ReputationOptions](aws-properties-ses-configurationset-reputationoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReputationOptions?: SESConfigurationSetReputationOptions;
  /**
   * The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
   *
   * _Required_: No
   *
   * _Type_: [VdmOptions](aws-properties-ses-configurationset-vdmoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VdmOptions?: SESConfigurationSetVdmOptions;
  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
   *
   * _Required_: No
   *
   * _Type_: [DeliveryOptions](aws-properties-ses-configurationset-deliveryoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryOptions?: SESConfigurationSetDeliveryOptions;
  /**
   * The name of the configuration set. The name must meet the following requirements:
   */
  Name?: Value<string>;
}

/**
 * Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see [Using Amazon SES Configuration Sets](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/).
 *
 * **Note**
 *
 * **Required permissions:**
 *
 * To apply any of the resource options, you will need to have the corresponding AWS Identity and Access Management (IAM) SES API v2 permissions:
 *
 * `ses:GetConfigurationSet`
 *
 * (This permission is replacing the v1 _ses:DescribeConfigurationSet_ permission which will not work with these v2 resource options.)
 *
 * `ses:PutConfigurationSetDeliveryOptions`
 *
 * `ses:PutConfigurationSetReputationOptions`
 *
 * `ses:PutConfigurationSetSendingOptions`
 *
 * `ses:PutConfigurationSetSuppressionOptions`
 *
 * `ses:PutConfigurationSetTrackingOptions`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html}
 */
export interface SESConfigurationSetResource {
  Type: 'AWS::SES::ConfigurationSet';
  Properties: SESConfigurationSetProperties;
}
