/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * This structure contains much of the configuration data for the app monitor.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-appmonitorconfiguration.html}
 **/
export interface RUMAppMonitorAppMonitorConfiguration {
  /**
   * An array of structures that each define a destination that this app monitor will send extended metrics to.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDestination](aws-properties-rum-appmonitor-metricdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDestinations?: List<RUMAppMonitorMetricDestination>;
  /**
   * If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.
   *
   * You can't include both `ExcludedPages` and `IncludedPages` in the same app monitor.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedPages?: List<Value<string>>;
  /**
   * A list of URLs in your website or application to exclude from RUM data collection.
   *
   * You can't include both `ExcludedPages` and `IncludedPages` in the same app monitor.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedPages?: List<Value<string>>;
  /**
   * A list of pages in your application that are to be displayed with a "favorite" icon in the CloudWatch RUM console.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FavoritePages?: List<Value<string>>;
  /**
   * Specifies the portion of user sessions to use for CloudWatch RUM data collection. Choosing a higher portion gives you more data but also incurs more costs.
   *
   * The range for this value is 0 to 1 inclusive. Setting this to 1 means that 100% of user sessions are sampled, and setting it to 0.1 means that 10% of user sessions are sampled.
   *
   * If you omit this parameter, the default of 0.1 is used, and 10% of sessions will be sampled.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionSampleRate?: Value<number>;
  /**
   * If you set this to `true`, the CloudWatch RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the CloudWatch RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowCookies?: Value<boolean>;
  /**
   * An array that lists the types of telemetry data that this app monitor is to collect.
   */
  Telemetries?: List<Value<string>>;
  /**
   * The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to CloudWatch RUM.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityPoolId?: Value<string>;
  /**
   * The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to CloudWatch RUM.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GuestRoleArn?: Value<string>;
  /**
   * If you set this to `true`, CloudWatch RUM sends client-side traces to X-Ray for each sampled session. You can then see traces and segments from these user sessions in the RUM dashboard and the CloudWatch ServiceLens console. For more information, see [What is AWS X-Ray?](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableXRay?: Value<boolean>;
}

/**
 * Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment.
 *
 * For more information about extended metrics, see [ Extended metrics that you can send to CloudWatch and CloudWatch Evidently](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdestination.html}
 **/
export interface RUMAppMonitorMetricDestination {
  /**
   * Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: Value<string>;
  /**
   * This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
   *
   * This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRoleArn?: Value<string>;
  /**
   * An array of structures which define the metrics that you want to send.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDefinition](aws-properties-rum-appmonitor-metricdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDefinitions?: List<RUMAppMonitorMetricDefinition>;
  /**
   * Use this parameter only if `Destination` is `Evidently`. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationArn?: Value<string>;
}

/**
 * Specifies one custom metric or extended metric that you want the CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently.
 *
 * By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in [CloudWatch metrics that you can collect.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html)
 *
 * In addition to these default metrics, you can choose to send extended metrics or custom metrics or both.
 *
 * For information about syntax rules for specifying custom metrics and extended metrics, see [MetridDefinitionRequest](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_MetricDefinitionRequest.html) in the _CloudWatch RUM API Reference_.
 *
 * The maximum number of metric definitions that one destination can contain is 2000.
 *
 * Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric.
 *
 * If some metric definitions that you specify are not valid, then the operation will not modify any metric definitions even if other metric definitions specified are valid.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-metricdefinition.html}
 **/
export interface RUMAppMonitorMetricDefinition {
  /**
   * The pattern that defines the metric. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
   *
   * If the metrics destination is `CloudWatch` and the event also matches a value in `DimensionKeys`, then the metric is published with the specified dimensions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventPattern?: Value<string>;
  /**
   * The field within the event object that the metric value is sourced from.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueKey?: Value<string>;
  /**
   * Use this field only if you are sending this metric to CloudWatch. It defines the CloudWatch metric unit that this metric is measured in.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnitLabel?: Value<string>;
  /**
   * This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. The value of this field is used only if the metric destination is `CloudWatch`. If the metric destination is `Evidently`, the value of `DimensionKeys` is ignored.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionKeys?: { [key: string]: Value<string> };
  /**
   * If you are creating a custom metric instead of an extended metrics, use this parameter to define the metric namespace for that custom metric. Do not specify this parameter if you are creating an extended metric.
   *
   * You can't use any string that starts with `AWS/` for your namespace.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace?: Value<string>;
  /**
   * The name of the metric that is defined in this structure.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * This structure specifies whether this app monitor allows the web client to define and send custom events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rum-appmonitor-customevents.html}
 **/
export interface RUMAppMonitorCustomEvents {
  /**
   * Set this to `ENABLED` to allow the web client to send custom events for this app monitor.
   *
   * Valid values are `ENABLED` and `DISABLED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
}
export interface RUMAppMonitorProperties {
  /**
   * Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`.
   *
   * _Required_: No
   *
   * _Type_: [CustomEvents](aws-properties-rum-appmonitor-customevents.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEvents?: RUMAppMonitorCustomEvents;
  /**
   * Data collected by CloudWatch RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether CloudWatch RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.
   *
   * If you omit this parameter, the default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CwLogEnabled?: Value<boolean>;
  /**
   * The top-level internet domain name for which your application has administrative authority. This parameter is required.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domain: Value<string>;
  /**
   * A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include `AppMonitorConfiguration`, you must set up your own authorization method. For more information, see [Authorize your application to send data to AWS](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-get-started-authorization.html).
   *
   * If you omit this argument, the sample rate used for CloudWatch RUM is set to 10% of the user sessions.
   *
   * _Required_: No
   *
   * _Type_: [AppMonitorConfiguration](aws-properties-rum-appmonitor-appmonitorconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppMonitorConfiguration?: RUMAppMonitorAppMonitorConfiguration;
  /**
   * Assigns one or more tags (key-value pairs) to the app monitor.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with an app monitor.
   *
   * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A name for the app monitor. This parameter is required.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a CloudWatch RUM app monitor, which you can use to collect telemetry data from your application and send it to CloudWatch RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior.
 *
 * After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see [How do I find a code snippet that I've already generated?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html)
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html}
 */
export interface RUMAppMonitorResource {
  Type: 'AWS::RUM::AppMonitor';
  Properties: RUMAppMonitorProperties;
}
