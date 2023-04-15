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
 * The `AWS::ApplicationInsights::Application LogPattern` property type specifies an object that defines the log patterns that belong to a `LogPatternSet`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpattern.html}
 **/
export interface ApplicationInsightsApplicationLogPattern {
  /**
   * A regular expression that defines the log pattern. A log pattern can contain up to 50 characters, and it cannot be empty.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[Ss]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pattern: Value<string>;
  /**
   * The rank of the log pattern.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rank: Value<number>;
  /**
   * The name of the log pattern. A log pattern name can contain up to 50 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[a-zA-Z0-9.-_]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatternName: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application LogPatternSet` property type specifies the log pattern set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-logpatternset.html}
 **/
export interface ApplicationInsightsApplicationLogPatternSet {
  /**
   * The name of the log pattern. A log pattern name can contain up to 30 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `[a-zA-Z0-9.-_]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatternSetName: Value<string>;
  /**
   * A list of objects that define the log patterns that belong to `LogPatternSet`.
   *
   * _Required_: Yes
   *
   * _Type_: List of [LogPattern](aws-properties-applicationinsights-application-logpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPatterns: List<ApplicationInsightsApplicationLogPattern>;
}

/**
 * The `AWS::ApplicationInsights::Application Alarm` property type defines a CloudWatch alarm to be monitored for the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarm.html}
 **/
export interface ApplicationInsightsApplicationAlarm {
  /**
   * The name of the CloudWatch alarm to be monitored for the component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmName: Value<string>;
  /**
   * Indicates the degree of outage when the alarm goes off.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Severity?: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application HAClusterPrometheusExporter` property type defines the HA cluster Prometheus Exporter settings. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-haclusterprometheusexporter.html}
 **/
export interface ApplicationInsightsApplicationHAClusterPrometheusExporter {
  /**
   * The target port to which Prometheus sends metrics. If not specified, the default port 9668 is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrometheusPort?: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application WindowsEvent` property type specifies a Windows Event to monitor for the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-windowsevent.html}
 **/
export interface ApplicationInsightsApplicationWindowsEvent {
  /**
   * The levels of event to log. You must specify each level to log. Possible values include `INFORMATION`, `WARNING`, `ERROR`, `CRITICAL`, and `VERBOSE`. This field is required for each type of Windows Event to log.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventLevels: List<Value<string>>;
  /**
   * The CloudWatch log group name to be associated with the monitored log.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName: Value<string>;
  /**
   * The type of Windows Events to log, equivalent to the Windows Event log channel name. For example, System, Security, CustomEventName, and so on. This field is required for each type of Windows event to log.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventName: Value<string>;
  /**
   * The log pattern set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatternSet?: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application ComponentConfiguration` property type defines the configuration settings of the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentconfiguration.html}
 **/
export interface ApplicationInsightsApplicationComponentConfiguration {
  /**
   * Sub-component configurations of the component.
   *
   * _Required_: No
   *
   * _Type_: List of [SubComponentTypeConfiguration](aws-properties-applicationinsights-application-subcomponenttypeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubComponentTypeConfigurations?: List<ApplicationInsightsApplicationSubComponentTypeConfiguration>;
  /**
   * The configuration settings.
   *
   * _Required_: No
   *
   * _Type_: [ConfigurationDetails](aws-properties-applicationinsights-application-configurationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationDetails?: ApplicationInsightsApplicationConfigurationDetails;
}

/**
 * The `AWS::ApplicationInsights::Application CustomComponent` property type describes a custom component by grouping similar standalone instances to monitor.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-customcomponent.html}
 **/
export interface ApplicationInsightsApplicationCustomComponent {
  /**
   * The list of resource ARNs that belong to the component.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceList: List<Value<string>>;
  /**
   * The name of the component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[dw-_.+]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentName: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application JMXPrometheusExporter` property type defines the JMXPrometheus Exporter configuration. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-jmxprometheusexporter.html}
 **/
export interface ApplicationInsightsApplicationJMXPrometheusExporter {
  /**
   * The target port to send Prometheus metrics to. If not specified, the default port `9404` is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrometheusPort?: Value<string>;
  /**
   * The complete JMX URL to connect to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JMXURL?: Value<string>;
  /**
   * The host and port to connect to through remote JMX. Only one of `jmxURL` and `hostPort` can be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostPort?: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application HANAPrometheusExporter` property type defines the HANA DB Prometheus Exporter settings. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-hanaprometheusexporter.html}
 **/
export interface ApplicationInsightsApplicationHANAPrometheusExporter {
  /**
   * The HANA database port by which the exporter will query HANA metrics.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HANAPort: Value<string>;
  /**
   * The target port to which Prometheus sends metrics. If not specified, the default port 9668 is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrometheusPort?: Value<string>;
  /**
   * The AWS Secrets Manager secret that stores HANA monitoring user credentials. The HANA Prometheus exporter uses these credentials to connect to the database and query HANA metrics.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HANASecretName: Value<string>;
  /**
   * The three-character SAP system ID (SID) of the SAP HANA system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HANASID: Value<string>;
  /**
   * Designates whether you agree to install the HANA DB client.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AgreeToInstallHANADBClient: Value<boolean>;
}

/**
 * The `AWS::ApplicationInsights::Application SubComponentTypeConfiguration` property type specifies the sub-component configurations for a component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponenttypeconfiguration.html}
 **/
export interface ApplicationInsightsApplicationSubComponentTypeConfiguration {
  /**
   * The sub-component type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubComponentType: Value<string>;
  /**
   * The configuration settings of the sub-components.
   *
   * _Required_: Yes
   *
   * _Type_: [SubComponentConfigurationDetails](aws-properties-applicationinsights-application-subcomponentconfigurationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubComponentConfigurationDetails: ApplicationInsightsApplicationSubComponentConfigurationDetails;
}

/**
 * The `AWS::ApplicationInsights::Application SubComponentConfigurationDetails` property type specifies the configuration settings of the sub-components.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-subcomponentconfigurationdetails.html}
 **/
export interface ApplicationInsightsApplicationSubComponentConfigurationDetails {
  /**
   * A list of Windows Events to monitor for the component. Only Amazon EC2 instances running on Windows can use `WindowsEvents`.
   *
   * _Required_: No
   *
   * _Type_: List of [WindowsEvent](aws-properties-applicationinsights-application-windowsevent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowsEvents?: List<ApplicationInsightsApplicationWindowsEvent>;
  /**
   * A list of metrics to monitor for the component. All component types can use `AlarmMetrics`.
   *
   * _Required_: No
   *
   * _Type_: List of [AlarmMetric](aws-properties-applicationinsights-application-alarmmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmMetrics?: List<ApplicationInsightsApplicationAlarmMetric>;
  /**
   * A list of logs to monitor for the component. Only Amazon EC2 instances can use `Logs`.
   *
   * _Required_: No
   *
   * _Type_: List of [Log](aws-properties-applicationinsights-application-log.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logs?: List<ApplicationInsightsApplicationLog>;
}

/**
 * The `AWS::ApplicationInsights::Application ComponentMonitoringSetting` property type defines the monitoring setting of the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-componentmonitoringsetting.html}
 **/
export interface ApplicationInsightsApplicationComponentMonitoringSetting {
  /**
   * Customized monitoring settings. Required if CUSTOM mode is configured in `ComponentConfigurationMode`.
   *
   * _Required_: No
   *
   * _Type_: [ComponentConfiguration](aws-properties-applicationinsights-application-componentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomComponentConfiguration?: ApplicationInsightsApplicationComponentConfiguration;
  /**
   * The tier of the application component. Supported tiers include `DOT_NET_CORE`, `DOT_NET_WORKER`, `DOT_NET_WEB`, `SQL_SERVER`, `SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP`, `SQL_SERVER_FAILOVER_CLUSTER_INSTANCE`, `MYSQL`, `POSTGRESQL`, `JAVA_JMX`, `ORACLE`, `SAP_HANA_MULTI_NODE`, `SAP_HANA_SINGLE_NODE`, `SAP_HANA_HIGH_AVAILABILITY`, `SHAREPOINT`. `ACTIVE_DIRECTORY`, and `DEFAULT`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tier: Value<string>;
  /**
   * Component monitoring can be configured in one of the following three modes:
   */
  ComponentConfigurationMode: Value<string>;
  /**
   * Customized overwrite monitoring settings. Required if CUSTOM mode is configured in `ComponentConfigurationMode`.
   *
   * _Required_: No
   *
   * _Type_: [ComponentConfiguration](aws-properties-applicationinsights-application-componentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultOverwriteComponentConfiguration?: ApplicationInsightsApplicationComponentConfiguration;
  /**
   * The name of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentName?: Value<string>;
  /**
   * The ARN of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentARN?: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application AlarmMetric` property type defines a metric to monitor for the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-alarmmetric.html}
 **/
export interface ApplicationInsightsApplicationAlarmMetric {
  /**
   * The name of the metric to be monitored for the component. For metrics supported by Application Insights, see [Logs and metrics supported by Amazon CloudWatch Application Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/appinsights-logs-and-metrics.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmMetricName: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application ConfigurationDetails` property type specifies the configuration settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-configurationdetails.html}
 **/
export interface ApplicationInsightsApplicationConfigurationDetails {
  /**
   * A list of Windows Events to monitor for the component. Only Amazon EC2 instances running on Windows can use `WindowsEvents`.
   *
   * _Required_: No
   *
   * _Type_: List of [WindowsEvent](aws-properties-applicationinsights-application-windowsevent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowsEvents?: List<ApplicationInsightsApplicationWindowsEvent>;
  /**
   * A list of metrics to monitor for the component. All component types can use `AlarmMetrics`.
   *
   * _Required_: No
   *
   * _Type_: List of [AlarmMetric](aws-properties-applicationinsights-application-alarmmetric.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmMetrics?: List<ApplicationInsightsApplicationAlarmMetric>;
  /**
   * A list of alarms to monitor for the component. All component types can use `Alarm`.
   *
   * _Required_: No
   *
   * _Type_: List of [Alarm](aws-properties-applicationinsights-application-alarm.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alarms?: List<ApplicationInsightsApplicationAlarm>;
  /**
   * The HA cluster Prometheus Exporter settings.
   *
   * _Required_: No
   *
   * _Type_: [HAClusterPrometheusExporter](aws-properties-applicationinsights-application-haclusterprometheusexporter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HAClusterPrometheusExporter?: ApplicationInsightsApplicationHAClusterPrometheusExporter;
  /**
   * The HANA DB Prometheus Exporter settings.
   *
   * _Required_: No
   *
   * _Type_: [HANAPrometheusExporter](aws-properties-applicationinsights-application-hanaprometheusexporter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HANAPrometheusExporter?: ApplicationInsightsApplicationHANAPrometheusExporter;
  /**
   * A list of logs to monitor for the component. Only Amazon EC2 instances can use `Logs`.
   *
   * _Required_: No
   *
   * _Type_: List of [Log](aws-properties-applicationinsights-application-log.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logs?: List<ApplicationInsightsApplicationLog>;
  /**
   * A list of Java metrics to monitor for the component.
   *
   * _Required_: No
   *
   * _Type_: [JMXPrometheusExporter](aws-properties-applicationinsights-application-jmxprometheusexporter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JMXPrometheusExporter?: ApplicationInsightsApplicationJMXPrometheusExporter;
}

/**
 * The `AWS::ApplicationInsights::Application Log` property type specifies a log to monitor for the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationinsights-application-log.html}
 **/
export interface ApplicationInsightsApplicationLog {
  /**
   * The log type decides the log patterns against which Application Insights analyzes the log. The log type is selected from the following: `SQL_SERVER`, `MYSQL`, `MYSQL_SLOW_QUERY`, `POSTGRESQL`, `ORACLE_ALERT`, `ORACLE_LISTENER`, `IIS`, `APPLICATION`, `WINDOWS_EVENTS`, `WINDOWS_EVENTS_ACTIVE_DIRECTORY`, `WINDOWS_EVENTS_DNS `, `WINDOWS_EVENTS_IIS `, `WINDOWS_EVENTS_SHAREPOINT`, `SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP`, `SQL_SERVER_FAILOVER_CLUSTER_INSTANCE`, `STEP_FUNCTION`, `API_GATEWAY_ACCESS`, `API_GATEWAY_EXECUTION`, `SAP_HANA_LOGS`, `SAP_HANA_TRACE`, `SAP_HANA_HIGH_AVAILABILITY`, and `DEFAULT`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogType: Value<string>;
  /**
   * The type of encoding of the logs to be monitored. The specified encoding should be included in the list of CloudWatch agent supported encodings. If not provided, CloudWatch Application Insights uses the default encoding type for the log type:
   */
  Encoding?: Value<string>;
  /**
   * The CloudWatch log group name to be associated with the monitored log.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName?: Value<string>;
  /**
   * The path of the logs to be monitored. The log path must be an absolute Windows or Linux system file path. For more information, see [CloudWatch Agent Configuration File: Logs Section](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Logssection).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPath?: Value<string>;
  /**
   * The log pattern set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatternSet?: Value<string>;
}
export interface ApplicationInsightsApplicationProperties {
  /**
   * If set to `true`, the application components will be configured with the monitoring configuration recommended by Application Insights.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoConfigurationEnabled?: Value<boolean>;
  /**
   * The SNS topic provided to Application Insights that is associated with the created OpsItems to receive SNS notifications for opsItem updates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `300`
   *
   * _Pattern_: `^arn:aws(-w+)*:[wd-]+:([wd-]*)?:[wd_-]*([:/].+)*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpsItemSNSTopicArn?: Value<string>;
  /**
   * Indicates whether Application Insights will create OpsItems for any problem that is detected by Application Insights for an application.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpsCenterEnabled?: Value<boolean>;
  /**
   * Describes a custom component by grouping similar standalone instances to monitor.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomComponent](aws-properties-applicationinsights-application-customcomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomComponents?: List<ApplicationInsightsApplicationCustomComponent>;
  /**
   * The log pattern sets.
   *
   * _Required_: No
   *
   * _Type_: List of [LogPatternSet](aws-properties-applicationinsights-application-logpatternset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPatternSets?: List<ApplicationInsightsApplicationLogPatternSet>;
  /**
   * Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCOUNT_BASED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupingType?: Value<string>;
  /**
   * The monitoring settings of the components.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentMonitoringSetting](aws-properties-applicationinsights-application-componentmonitoringsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentMonitoringSettings?: List<ApplicationInsightsApplicationComponentMonitoringSetting>;
  /**
   * Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as `instance terminated`, `failed deployment`, and others.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CWEMonitorEnabled?: Value<boolean>;
  /**
   * An array of `Tags`.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the resource group used for the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9.-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceGroupName: Value<string>;
}

/**
 * The `AWS::ApplicationInsights::Application` resource adds an application that is created from a resource group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html}
 */
export interface ApplicationInsightsApplicationResource {
  Type: 'AWS::ApplicationInsights::Application';
  Properties: ApplicationInsightsApplicationProperties;
}
