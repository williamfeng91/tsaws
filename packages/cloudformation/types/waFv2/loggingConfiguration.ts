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
 * A single logging filter, used in `LoggingFilter`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html}
 **/
export interface WAFv2LoggingConfigurationFilter {
  /**
   * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MEETS_ALL | MEETS_ANY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Requirement: Value<string>;
  /**
   * How to handle logs that satisfy the filter's conditions and requirement.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DROP | KEEP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Behavior: Value<string>;
  /**
   * Match conditions for the filter.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Condition](aws-properties-wafv2-loggingconfiguration-condition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Conditions: List<WAFv2LoggingConfigurationCondition>;
}

/**
 * The parts of the request that you want to keep out of the logs. This is used in the logging configuration `RedactedFields` specification.
 *
 * Example JSON for a `QueryString` field to match:
 *
 * ` "FieldToMatch": { "QueryString": {} }`
 *
 * Example JSON for a `Method` field to match specification:
 *
 * ` "FieldToMatch": { "Method": { "Name": "DELETE" } }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html}
 **/
export interface WAFv2LoggingConfigurationFieldToMatch {
  /**
   * Redact the request body JSON.
   *
   * _Required_: No
   *
   * _Type_: [JsonBody](aws-properties-wafv2-loggingconfiguration-jsonbody.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonBody?: WAFv2LoggingConfigurationJsonBody;
  /**
   * Redact the query string. This is the part of a URL that appears after a `?` character, if any.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryString?: { [key: string]: any };
  /**
   * Redact the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UriPath?: { [key: string]: any };
  /**
   * Redact the indicated HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Method?: { [key: string]: any };
  /**
   * Redact a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   *
   * Example JSON: `"SingleHeader": { "Name": "haystack" }`
   *
   * _Required_: No
   *
   * _Type_: [SingleHeader](aws-properties-wafv2-loggingconfiguration-singleheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleHeader?: WAFv2LoggingConfigurationSingleHeader;
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
 *
 * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html}
 **/
export interface WAFv2LoggingConfigurationJsonBody {
  /**
   * The parts of the JSON to match against using the `MatchPattern`. If you specify `All`, AWS WAF matches against keys and values.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALL | KEY | VALUE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchScope: Value<string>;
  /**
   * What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:
   */
  InvalidFallbackBehavior?: Value<string>;
  /**
   * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
   *
   * _Required_: Yes
   *
   * _Type_: [MatchPattern](aws-properties-wafv2-loggingconfiguration-matchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2LoggingConfigurationMatchPattern;
}

/**
 * A single match condition for a log filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html}
 **/
export interface WAFv2LoggingConfigurationCondition {
  /**
   * A single label name condition. This is the fully qualified label name that a log record must contain in order to meet the condition. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   *
   * _Required_: No
   *
   * _Type_: [LabelNameCondition](aws-properties-wafv2-loggingconfiguration-labelnamecondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelNameCondition?: WAFv2LoggingConfigurationLabelNameCondition;
  /**
   * A single action condition. This is the action setting that a log record must contain in order to meet the condition.
   *
   * _Required_: No
   *
   * _Type_: [ActionCondition](aws-properties-wafv2-loggingconfiguration-actioncondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionCondition?: WAFv2LoggingConfigurationActionCondition;
}

/**
 * A single label name condition for a condition in a logging filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-labelnamecondition.html}
 **/
export interface WAFv2LoggingConfigurationLabelNameCondition {
  /**
   * The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^[0-9A-Za-z_-:]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelName: Value<string>;
}

/**
 * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-matchpattern.html}
 **/
export interface WAFv2LoggingConfigurationMatchPattern {
  /**
   * Match all of the elements.
   *
   * You must specify either this setting or the `IncludedPaths` setting, but not both.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  All?: { [key: string]: any };
  /**
   * Match only the specified include paths.
   *
   * Provide the include paths using JSON Pointer syntax. For example, `"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]`. For information about this syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   * You must specify either this setting or the `All` setting, but not both.
   *
   * Don't use this option to include all paths. Instead, use the `All` setting.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedPaths?: List<Value<string>>;
}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 *
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-singleheader.html}
 **/
export interface WAFv2LoggingConfigurationSingleHeader {
  /**
   * The name of the query header to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A single action condition for a condition in a logging filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-actioncondition.html}
 **/
export interface WAFv2LoggingConfigurationActionCondition {
  /**
   * The action setting that a log record must contain in order to meet the condition. This is the action that AWS WAF applied to the web request.
   *
   * For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action. The value `EXCLUDED_AS_COUNT` matches on excluded rules and also on rules that have a rule action override of Count.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALLOW | BLOCK | CAPTCHA | CHALLENGE | COUNT | EXCLUDED_AS_COUNT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
}

/**
 * Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's `LoggingConfiguration`.
 *
 * You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-loggingfilter.html}
 **/
export interface WAFv2LoggingConfigurationLoggingFilter {
  /**
   * The filters that you want to apply to the logs.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Filter](aws-properties-wafv2-loggingconfiguration-filter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters: List<WAFv2LoggingConfigurationFilter>;
  /**
   * Default handling for logs that don't match any of the specified filtering conditions.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DROP | KEEP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultBehavior: Value<string>;
}
export interface WAFv2LoggingConfigurationProperties {
  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with `LogDestinationConfigs`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceArn: Value<string>;
  /**
   * The logging destination configuration that you want to associate with the web ACL.
   *
   * You can associate one logging destination to a web ACL.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogDestinationConfigs: List<Value<string>>;
  /**
   * The parts of the request that you want to keep out of the logs. For example, if you redact the `SingleHeader` field, the `HEADER` field in the logs will be `REDACTED`.
   *
   * You can specify only the following fields for redaction: `UriPath`, `QueryString`, `SingleHeader`, `Method`, and `JsonBody`.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldToMatch](aws-properties-wafv2-loggingconfiguration-fieldtomatch.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedactedFields?: List<WAFv2LoggingConfigurationFieldToMatch>;
  /**
   * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
   *
   * _Required_: No
   *
   * _Type_: [LoggingFilter](aws-properties-wafv2-loggingconfiguration-loggingfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingFilter?: WAFv2LoggingConfigurationLoggingFilter;
}

/**
 * Defines an association between logging destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records.
 *
 * **Note**
 *
 * You can define one logging destination per web ACL.
 *
 * You can access information about the traffic that AWS WAF inspects using the following steps:
 *
 * When you successfully enable logging using a `PutLoggingConfiguration` request, AWS WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, AWS WAF creates a resource policy on the log group. For an Amazon S3 bucket, AWS WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, AWS WAF creates a service-linked role.
 *
 * For additional information about web ACL logging, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the _ AWS WAF Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html}
 */
export interface WAFv2LoggingConfigurationResource {
  Type: 'AWS::WAFv2::LoggingConfiguration';
  Properties: WAFv2LoggingConfigurationProperties;
}
