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
 * Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in [AWS::NetworkFirewall::LoggingConfiguration](aws-resource-networkfirewall-loggingconfiguration.md). You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.
 *
 * Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to `DROP` or `ALERT`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html}
 **/
export interface NetworkFirewallLoggingConfigurationLogDestinationConfig {
  /**
   * The type of log to send. Alert logs report traffic that matches a stateful rule with an action setting that sends an alert log message. Flow logs are standard network traffic flow logs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALERT | FLOW`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogType: Value<string>;
  /**
   * The named location for the logs, provided in a key:value mapping that is specific to the chosen destination type.
   */
  LogDestination: { [key: string]: Value<string> };
  /**
   * The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CloudWatchLogs | KinesisDataFirehose | S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogDestinationType: Value<string>;
}

/**
 * Defines how AWS Network Firewall performs logging for a [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html}
 **/
export interface NetworkFirewallLoggingConfigurationLoggingConfiguration {
  /**
   * Defines the logging destinations for the logs for a firewall. Network Firewall generates logs for stateful rule groups.
   *
   * _Required_: Yes
   *
   * _Type_: List of [LogDestinationConfig](aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogDestinationConfigs: List<NetworkFirewallLoggingConfigurationLogDestinationConfig>;
}
export interface NetworkFirewallLoggingConfigurationProperties {
  /**
   * The name of the firewall that the logging configuration is associated with. You can't change the firewall specification after you create the logging configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FirewallName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md) that the logging configuration is associated with. You can't change the firewall specification after you create the logging configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FirewallArn: Value<string>;
  /**
   * Defines how AWS Network Firewall performs logging for a [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md).
   *
   * _Required_: Yes
   *
   * _Type_: [LoggingConfiguration](aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingConfiguration: NetworkFirewallLoggingConfigurationLoggingConfiguration;
}

/**
 * Use the [AWS::NetworkFirewall::LoggingConfiguration](#aws-resource-networkfirewall-loggingconfiguration) to define the destinations and logging options for an [AWS::NetworkFirewall::Firewall](aws-resource-networkfirewall-firewall.md).
 *
 * You must change the logging configuration by changing one `LogDestinationConfig` setting at a time in your `LogDestinationConfigs`.
 *
 * You can make only one of the following changes to your [AWS::NetworkFirewall::LoggingConfiguration](#aws-resource-networkfirewall-loggingconfiguration) resource:
 *
 * You can't change the `LogDestinationType` or `LogType` in a `LogDestinationConfig`. To change these settings, delete the existing `LogDestinationConfig` object and create a new one, in two separate modifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html}
 */
export interface NetworkFirewallLoggingConfigurationResource {
  Type: 'AWS::NetworkFirewall::LoggingConfiguration';
  Properties: NetworkFirewallLoggingConfigurationProperties;
}
