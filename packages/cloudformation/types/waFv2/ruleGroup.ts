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
 * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) option `JsonBody`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html}
 **/
export interface WAFv2RuleGroupJsonMatchPattern {
  /**
   * Match all of the elements. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
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
   * Match only the specified include paths. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
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
 * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html}
 **/
export interface WAFv2RuleGroupXssMatchStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to `Block`.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html}
 **/
export interface WAFv2RuleGroupCustomResponse {
  /**
   * The HTTP status code to return to the client.
   *
   * For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `200`
   *
   * _Maximum_: `599`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseCode: Value<number>;
  /**
   * References the response body that you want AWS WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md) or [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md) where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[w-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomResponseBodyKey?: Value<string>;
  /**
   * The HTTP headers to use in the response. Duplicate header names are not allowed.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomHTTPHeader](aws-properties-wafv2-rulegroup-customhttpheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseHeaders?: List<WAFv2RuleGroupCustomHTTPHeader>;
}

/**
 * Specifies how AWS WAF should handle `Challenge` evaluations. This is available at the web ACL level and in each rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeconfig.html}
 **/
export interface WAFv2RuleGroupChallengeConfig {
  /**
   * Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
   *
   * _Required_: No
   *
   * _Type_: [ImmunityTimeProperty](aws-properties-wafv2-rulegroup-immunitytimeproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImmunityTimeProperty?: WAFv2RuleGroupImmunityTimeProperty;
}

/**
 * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
 *
 * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html}
 **/
export interface WAFv2RuleGroupLabelMatchStatement {
  /**
   * Specify whether you want to match using the label name or just the namespace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `LABEL | NAMESPACE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope: Value<string>;
  /**
   * The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:
   */
  Key: Value<string>;
}

/**
 * The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html}
 **/
export interface WAFv2RuleGroupRuleAction {
  /**
   * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
   */
  Captcha?: WAFv2RuleGroupCaptchaAction;
  /**
   * Instructs AWS WAF to block the web request.
   *
   * _Required_: No
   *
   * _Type_: [BlockAction](aws-properties-wafv2-rulegroup-blockaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Block?: WAFv2RuleGroupBlockAction;
  /**
   * Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [CountAction](aws-properties-wafv2-rulegroup-countaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: WAFv2RuleGroupCountAction;
  /**
   * Instructs AWS WAF to allow the web request.
   *
   * _Required_: No
   *
   * _Type_: [AllowAction](aws-properties-wafv2-rulegroup-allowaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Allow?: WAFv2RuleGroupAllowAction;
  /**
   * Instructs AWS WAF to run a `Challenge` check against the web request.
   *
   * _Required_: No
   *
   * _Type_: [ChallengeAction](aws-properties-wafv2-rulegroup-challengeaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Challenge?: WAFv2RuleGroupChallengeAction;
}

/**
 * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html}
 **/
export interface WAFv2RuleGroupStatement {
  /**
   * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
   *
   * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you could use a size constraint statement to block requests that have a request body greater than 8192 bytes.
   *
   * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   *
   * _Required_: No
   *
   * _Type_: [SizeConstraintStatement](aws-properties-wafv2-rulegroup-sizeconstraintstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeConstraintStatement?: WAFv2RuleGroupSizeConstraintStatement;
  /**
   * A logical rule statement used to combine other rule statements with AND logic. You provide more than one `Statement` within the `AndStatement`.
   *
   * _Required_: No
   *
   * _Type_: [AndStatement](aws-properties-wafv2-rulegroup-andstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AndStatement?: WAFv2RuleGroupAndStatement;
  /**
   * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
   *
   * _Required_: No
   *
   * _Type_: [XssMatchStatement](aws-properties-wafv2-rulegroup-xssmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XssMatchStatement?: WAFv2RuleGroupXssMatchStatement;
  /**
   * A logical rule statement used to negate the results of another rule statement. You provide one `Statement` within the `NotStatement`.
   *
   * _Required_: No
   *
   * _Type_: [NotStatement](aws-properties-wafv2-rulegroup-notstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotStatement?: WAFv2RuleGroupNotStatement;
  /**
   * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
   *
   * _Required_: No
   *
   * _Type_: [ByteMatchStatement](aws-properties-wafv2-rulegroup-bytematchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ByteMatchStatement?: WAFv2RuleGroupByteMatchStatement;
  /**
   * A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.
   *
   * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF.
   *
   * When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.
   *
   * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:
   */
  RateBasedStatement?: WAFv2RuleGroupRateBasedStatement;
  /**
   * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
   */
  GeoMatchStatement?: WAFv2RuleGroupGeoMatchStatement;
  /**
   * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
   *
   * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
   *
   * _Required_: No
   *
   * _Type_: [LabelMatchStatement](aws-properties-wafv2-rulegroup-labelmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelMatchStatement?: WAFv2RuleGroupLabelMatchStatement;
  /**
   * A rule statement used to search web request components for a match against a single regular expression.
   *
   * _Required_: No
   *
   * _Type_: [RegexMatchStatement](aws-properties-wafv2-rulegroup-regexmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexMatchStatement?: WAFv2RuleGroupRegexMatchStatement;
  /**
   * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
   *
   * _Required_: No
   *
   * _Type_: [SqliMatchStatement](aws-properties-wafv2-rulegroup-sqlimatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqliMatchStatement?: WAFv2RuleGroupSqliMatchStatement;
  /**
   * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](aws-resource-wafv2-regexpatternset.md) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
   *
   * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   *
   * _Required_: No
   *
   * _Type_: [RegexPatternSetReferenceStatement](aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexPatternSetReferenceStatement?: WAFv2RuleGroupRegexPatternSetReferenceStatement;
  /**
   * A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
   *
   * _Required_: No
   *
   * _Type_: [OrStatement](aws-properties-wafv2-rulegroup-orstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrStatement?: WAFv2RuleGroupOrStatement;
  /**
   * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](aws-resource-wafv2-ipset.md) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
   *
   * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   *
   * _Required_: No
   *
   * _Type_: [IPSetReferenceStatement](aws-properties-wafv2-rulegroup-ipsetreferencestatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetReferenceStatement?: WAFv2RuleGroupIPSetReferenceStatement;
}

/**
 * Specifies that AWS WAF should run a `Challenge` check against the request to verify that the request is coming from a legitimate client session:
 *
 * You can configure the expiration time in the `ChallengeConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeaction.html}
 **/
export interface WAFv2RuleGroupChallengeAction {
  /**
   * Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-rulegroup-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}

/**
 * A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.
 *
 * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF.
 *
 * When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.
 *
 * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:
 *
 * In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet the criteria of both of the nested statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet the criteria of both of the nested statements are not counted towards the rate limit and are not affected by this rule.
 *
 * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement`. You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html}
 **/
export interface WAFv2RuleGroupRateBasedStatement {
  /**
   * Setting that indicates how to aggregate the request counts. The options are the following:
   */
  AggregateKeyType: Value<string>;
  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * This is required if `AggregateKeyType` is set to `FORWARDED_IP`.
   *
   * _Required_: No
   *
   * _Type_: [ForwardedIPConfiguration](aws-properties-wafv2-rulegroup-forwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedIPConfig?: WAFv2RuleGroupForwardedIPConfiguration;
  /**
   * The limit on requests per 5-minute period for a single originating IP address. If the statement includes a `ScopeDownStatement`, this limit is applied only to the requests that match the statement.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Limit: Value<number>;
  /**
   * An optional nested statement that narrows the scope of the web requests that are evaluated by the rate-based statement. Requests are only tracked by the rate-based statement if they match the scope-down statement. You can use any nestable statement in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   *
   * _Required_: No
   *
   * _Type_: [Statement](aws-properties-wafv2-rulegroup-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeDownStatement?: WAFv2RuleGroupStatement;
}

/**
 * The filter to use to identify the subset of headers to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
 *
 * Example JSON: `"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html}
 **/
export interface WAFv2RuleGroupHeaderMatchPattern {
  /**
   * Inspect all headers.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  All?: { [key: string]: any };
  /**
   * Inspect only the headers that have a key that matches one of the strings specified here.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `199`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedHeaders?: List<Value<string>>;
  /**
   * Inspect only the headers whose keys don't match any of the strings specified here.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `199`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedHeaders?: List<Value<string>>;
}

/**
 * A logical rule statement used to combine other rule statements with AND logic. You provide more than one `Statement` within the `AndStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-andstatement.html}
 **/
export interface WAFv2RuleGroupAndStatement {
  /**
   * The statements to combine with AND logic. You can use any statements that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Statement](aws-properties-wafv2-rulegroup-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statements: List<WAFv2RuleGroupStatement>;
}

/**
 * Specifies that AWS WAF should allow the request and optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-allowaction.html}
 **/
export interface WAFv2RuleGroupAllowAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-rulegroup-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}

/**
 * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html}
 **/
export interface WAFv2RuleGroupByteMatchStatement {
  /**
   * String to search for in a web request component, base64-encoded. If you don't want to encode the string, specify the unencoded value in `SearchString` instead.
   *
   * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchStringBase64?: Value<string>;
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The area within the portion of the web request that you want AWS WAF to search for `SearchString`. Valid values include the following:
   *
   * **CONTAINS**
   *
   * The specified part of the web request must include the value of `SearchString`, but the location doesn't matter.
   *
   * **CONTAINS_WORD**
   *
   * The specified part of the web request must include the value of `SearchString`, and `SearchString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `SearchString` must be a word, which means that both of the following are true:
   */
  PositionalConstraint: Value<string>;
  /**
   * A string value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in `FieldToMatch`. The maximum length of the value is 200 bytes. For alphabetic characters A-Z and a-z, the value is case sensitive.
   *
   * Don't encode this string. Provide the value that you want AWS WAF to search for. AWS CloudFormation automatically base64 encodes the value for you.
   *
   * For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent`. If you want to search the `User-Agent` header for the value `BadBot`, you provide the string `BadBot` in the value of `SearchString`.
   *
   * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchString?: Value<string>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}

/**
 * Inspect one query argument in the web request, identified by name, for example _UserName_ or _SalesRegion_. The name isn't case sensitive.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singlequeryargument.html}
 **/
export interface WAFv2RuleGroupSingleQueryArgument {
  /**
   * The name of the query argument to inspect.
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
 * The filter to use to identify the subset of cookies to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
 *
 * Example JSON: `"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html}
 **/
export interface WAFv2RuleGroupCookieMatchPattern {
  /**
   * Inspect all cookies.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  All?: { [key: string]: any };
  /**
   * Inspect only the cookies that have a key that matches one of the strings specified here.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `199`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedCookies?: List<Value<string>>;
  /**
   * Inspect only the cookies whose keys don't match any of the strings specified here.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `199`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedCookies?: List<Value<string>>;
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
 *
 * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html}
 **/
export interface WAFv2RuleGroupJsonBody {
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
   * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
   *
   * _Required_: Yes
   *
   * _Type_: [JsonMatchPattern](aws-properties-wafv2-rulegroup-jsonmatchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2RuleGroupJsonMatchPattern;
  /**
   * What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:
   */
  InvalidFallbackBehavior?: Value<string>;
  /**
   * What AWS WAF should do if the body is larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of the body of a web request when the body exceeds 8 KB (8192 bytes). Only the first 8 KB of the request body are forwarded to AWS WAF by the underlying host service.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling?: Value<string>;
}

/**
 * The response body to use in a custom response to a web request. This is referenced by key from [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) `CustomResponseBodyKey`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html}
 **/
export interface WAFv2RuleGroupCustomResponseBody {
  /**
   * The type of content in the payload that you are defining in the `Content` string.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `APPLICATION_JSON | TEXT_HTML | TEXT_PLAIN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType: Value<string>;
  /**
   * The payload of the custom response.
   *
   * You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the `ContentType` setting.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10240`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: Value<string>;
}

/**
 * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
 *
 * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaaction.html}
 **/
export interface WAFv2RuleGroupCaptchaAction {
  /**
   * Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-rulegroup-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 *
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singleheader.html}
 **/
export interface WAFv2RuleGroupSingleHeader {
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
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 *
 * **Note**
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 *
 * This configuration is used for [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ratebasedstatement). For [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement), use [IPSetForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html#cfn-wafv2-rulegroup-ipsetreferencestatement-ipsetforwardedipconfig) instead.
 *
 * AWS WAF only evaluates the first IP address found in the specified HTTP header.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html}
 **/
export interface WAFv2RuleGroupForwardedIPConfiguration {
  /**
   * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * You can specify the following fallback behaviors:
   */
  FallbackBehavior: Value<string>;
  /**
   * The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderName: Value<string>;
}

/**
 * A custom header for custom request and response handling. This is used in `CustomResponse` and `CustomRequestHandling`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html}
 **/
export interface WAFv2RuleGroupCustomHTTPHeader {
  /**
   * The value of the custom header.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The name of the custom header.
   *
   * For custom request header insertion, when AWS WAF inserts the header into the request, it prefixes this name `x-amzn-waf-`, to avoid confusion with the headers that are already in the request. For example, for the header name `sample`, AWS WAF inserts the header `x-amzn-waf-sample`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[a-zA-Z0-9._$-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Specifies that AWS WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-blockaction.html}
 **/
export interface WAFv2RuleGroupBlockAction {
  /**
   * Defines a custom response for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomResponse](aws-properties-wafv2-rulegroup-customresponse.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomResponse?: WAFv2RuleGroupCustomResponse;
}

/**
 * List of labels used by one or more of the rules of a [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md). This summary object is used for the following rule group lists:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelsummary.html}
 **/
export interface WAFv2RuleGroupLabelSummary {
  /**
   * An individual label specification.
   *
   * _Required_: No
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
  Name?: Value<string>;
}

/**
 * The part of the web request that you want AWS WAF to inspect. Include the single `FieldToMatch` type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in `FieldToMatch` for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.
 *
 * Example JSON for a `QueryString` field to match:
 *
 * ` "FieldToMatch": { "QueryString": {} }`
 *
 * Example JSON for a `Method` field to match specification:
 *
 * ` "FieldToMatch": { "Method": { "Name": "DELETE" } }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html}
 **/
export interface WAFv2RuleGroupFieldToMatch {
  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   *
   * Only the first 8 KB (8192 bytes) of the request body are forwarded to AWS WAF for inspection by the underlying host service. For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
   *
   * _Required_: No
   *
   * _Type_: [JsonBody](aws-properties-wafv2-rulegroup-jsonbody.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonBody?: WAFv2RuleGroupJsonBody;
  /**
   * Inspect all query arguments.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllQueryArguments?: { [key: string]: any };
  /**
   * Inspect a single query argument. Provide the name of the query argument to inspect, such as _UserName_ or _SalesRegion_. The name can be up to 30 characters long and isn't case sensitive.
   *
   * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
   *
   * _Required_: No
   *
   * _Type_: [SingleQueryArgument](aws-properties-wafv2-rulegroup-singlequeryargument.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleQueryArgument?: WAFv2RuleGroupSingleQueryArgument;
  /**
   * Inspect the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UriPath?: { [key: string]: any };
  /**
   * Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryString?: { [key: string]: any };
  /**
   * Inspect the request headers. You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that AWS WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. AWS WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
   *
   * _Required_: No
   *
   * _Type_: [Headers](aws-properties-wafv2-rulegroup-headers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: WAFv2RuleGroupHeaders;
  /**
   * Inspect the request cookies. You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   *
   * _Required_: No
   *
   * _Type_: [Cookies](aws-properties-wafv2-rulegroup-cookies.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cookies?: WAFv2RuleGroupCookies;
  /**
   * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Method?: { [key: string]: any };
  /**
   * Inspect the request body as plain text. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   *
   * Only the first 8 KB (8192 bytes) of the request body are forwarded to AWS WAF for inspection by the underlying host service. For information about how to handle oversized request bodies, see the `Body` object configuration.
   *
   * _Required_: No
   *
   * _Type_: [Body](aws-properties-wafv2-rulegroup-body.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: WAFv2RuleGroupBody;
  /**
   * Inspect a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   *
   * Example JSON: `"SingleHeader": { "Name": "haystack" }`
   *
   * Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
   *
   * _Required_: No
   *
   * _Type_: [SingleHeader](aws-properties-wafv2-rulegroup-singleheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleHeader?: WAFv2RuleGroupSingleHeader;
}

/**
 * Specifies that AWS WAF should count the request. Optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-countaction.html}
 **/
export interface WAFv2RuleGroupCountAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-rulegroup-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2RuleGroupCustomRequestHandling;
}

/**
 * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](aws-resource-wafv2-ipset.md) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
 *
 * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html}
 **/
export interface WAFv2RuleGroupIPSetReferenceStatement {
  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: No
   *
   * _Type_: [IPSetForwardedIPConfiguration](aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetForwardedIPConfig?: WAFv2RuleGroupIPSetForwardedIPConfiguration;
  /**
   * The Amazon Resource Name (ARN) of the [AWS::WAFv2::IPSet](aws-resource-wafv2-ipset.md) that this statement references.
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * Specifies how AWS WAF should handle `CAPTCHA` evaluations. This is available at the web ACL level and in each rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaconfig.html}
 **/
export interface WAFv2RuleGroupCaptchaConfig {
  /**
   * Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
   *
   * _Required_: No
   *
   * _Type_: [ImmunityTimeProperty](aws-properties-wafv2-rulegroup-immunitytimeproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImmunityTimeProperty?: WAFv2RuleGroupImmunityTimeProperty;
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-immunitytimeproperty.html}
 **/
export interface WAFv2RuleGroupImmunityTimeProperty {
  /**
   * The amount of time, in seconds, that a `CAPTCHA` or challenge timestamp is considered valid by AWS WAF. The default setting is 300.
   *
   * For the Challenge action, the minimum setting is 300.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImmunityTime: Value<number>;
}

/**
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html}
 **/
export interface WAFv2RuleGroupVisibilityConfig {
  /**
   * A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for AWS WAF, for example `All` and `Default_Action`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[w#:.-/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * A boolean indicating whether AWS WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the AWS WAF console.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampledRequestsEnabled: Value<boolean>;
  /**
   * A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see [AWS WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchMetricsEnabled: Value<boolean>;
}

/**
 * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
 *
 * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
 *
 * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
 *
 * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
 *
 * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html}
 **/
export interface WAFv2RuleGroupGeoMatchStatement {
  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: No
   *
   * _Type_: [ForwardedIPConfiguration](aws-properties-wafv2-rulegroup-forwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedIPConfig?: WAFv2RuleGroupForwardedIPConfiguration;
  /**
   * An array of two-character country codes that you want to match against, for example, `[ "US", "CN" ]`, from the alpha-2 country ISO codes of the ISO 3166 international standard.
   *
   * When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CountryCodes?: List<Value<string>>;
}

/**
 * Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction`.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customrequesthandling.html}
 **/
export interface WAFv2RuleGroupCustomRequestHandling {
  /**
   * The HTTP headers to insert into the request. Duplicate header names are not allowed.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CustomHTTPHeader](aws-properties-wafv2-rulegroup-customhttpheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsertHeaders: List<WAFv2RuleGroupCustomHTTPHeader>;
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 *
 * **Note**
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 *
 * This configuration is used only for [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement). For [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ratebasedstatement), use [ForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig) instead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html}
 **/
export interface WAFv2RuleGroupIPSetForwardedIPConfiguration {
  /**
   * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * You can specify the following fallback behaviors:
   */
  FallbackBehavior: Value<string>;
  /**
   * The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderName: Value<string>;
  /**
   * The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
   *
   * The options for this setting are the following:
   */
  Position: Value<string>;
}

/**
 * A rule statement used to search web request components for a match against a single regular expression.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html}
 **/
export interface WAFv2RuleGroupRegexMatchStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The string representing the regular expression.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexString: Value<string>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}

/**
 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html}
 **/
export interface WAFv2RuleGroupTextTransformation {
  /**
   * You can specify the following transformation types:
   *
   * **BASE64_DECODE** - Decode a `Base64`-encoded string.
   *
   * **BASE64_DECODE_EXT** - Decode a `Base64`-encoded string, but use a forgiving implementation that ignores characters that aren't valid.
   *
   * **CMD_LINE** - Command-line transformations. These are helpful in reducing effectiveness of attackers who inject an operating system command-line command and use unusual formatting to disguise some or all of the command.
   */
  Type: Value<string>;
  /**
   * Sets the relative processing order for multiple transformations that are defined for a rule statement. AWS WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
}

/**
 * Inspect the body of the web request. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-body.html}
 **/
export interface WAFv2RuleGroupBody {
  /**
   * What AWS WAF should do if the body is larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of the body of a web request when the body exceeds 8 KB (8192 bytes). Only the first 8 KB of the request body are forwarded to AWS WAF by the underlying host service.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling?: Value<string>;
}

/**
 * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](aws-resource-wafv2-regexpatternset.md) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
 *
 * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html}
 **/
export interface WAFv2RuleGroupRegexPatternSetReferenceStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The Amazon Resource Name (ARN) of the [AWS::WAFv2::RegexPatternSet](aws-resource-wafv2-regexpatternset.md) that this statement references.
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}

/**
 * A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-orstatement.html}
 **/
export interface WAFv2RuleGroupOrStatement {
  /**
   * The statements to combine with OR logic. You can use any statements that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Statement](aws-properties-wafv2-rulegroup-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statements: List<WAFv2RuleGroupStatement>;
}

/**
 * A single rule, which you can use in a [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md) or [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md) to identify web requests that you want to allow, block, or count. Each rule includes one top-level [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-statement) that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html}
 **/
export interface WAFv2RuleGroupRule {
  /**
   * The action that AWS WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *
   * _Required_: No
   *
   * _Type_: [RuleAction](aws-properties-wafv2-rulegroup-ruleaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action?: WAFv2RuleGroupRuleAction;
  /**
   * If you define more than one `Rule` in a `WebACL`, AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority`. AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
  /**
   * The AWS WAF processing statement for the rule, for example [ByteMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-bytematchstatement) or [SizeConstraintStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-sizeconstraintstatement).
   *
   * _Required_: Yes
   *
   * _Type_: [Statement](aws-properties-wafv2-rulegroup-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statement: WAFv2RuleGroupStatement;
  /**
   * Specifies how AWS WAF should handle `Challenge` evaluations. If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [ChallengeConfig](aws-properties-wafv2-rulegroup-challengeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChallengeConfig?: WAFv2RuleGroupChallengeConfig;
  /**
   * Labels to apply to web requests that match the rule match statement. AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   *
   * Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement`.
   *
   * For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
   */
  RuleLabels?: List<WAFv2RuleGroupLabel>;
  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * _Required_: Yes
   *
   * _Type_: [VisibilityConfig](aws-properties-wafv2-rulegroup-visibilityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityConfig: WAFv2RuleGroupVisibilityConfig;
  /**
   * Specifies how AWS WAF should handle `CAPTCHA` evaluations. If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [CaptchaConfig](aws-properties-wafv2-rulegroup-captchaconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptchaConfig?: WAFv2RuleGroupCaptchaConfig;
  /**
   * The name of the rule. You can't change the name of a `Rule` after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[w-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
 *
 * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html}
 **/
export interface WAFv2RuleGroupHeaders {
  /**
   * The parts of the headers to match with the rule inspection criteria. If you specify `All`, AWS WAF inspects both keys and values.
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
   * The filter to use to identify the subset of headers to inspect in a web request.
   *
   * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
   *
   * Example JSON: `"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }`
   *
   * _Required_: Yes
   *
   * _Type_: [HeaderMatchPattern](aws-properties-wafv2-rulegroup-headermatchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2RuleGroupHeaderMatchPattern;
  /**
   * What AWS WAF should do if the headers of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling: Value<string>;
}

/**
 * A single label container. This is used as an element of a label array in `RuleLabels` inside a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-label.html}
 **/
export interface WAFv2RuleGroupLabel {
  /**
   * The label string.
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
  Name: Value<string>;
}

/**
 * Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html}
 **/
export interface WAFv2RuleGroupCookies {
  /**
   * The parts of the cookies to inspect with the rule inspection criteria. If you specify `All`, AWS WAF inspects both keys and values.
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
   * The filter to use to identify the subset of cookies to inspect in a web request.
   *
   * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
   *
   * Example JSON: `"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }`
   *
   * _Required_: Yes
   *
   * _Type_: [CookieMatchPattern](aws-properties-wafv2-rulegroup-cookiematchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2RuleGroupCookieMatchPattern;
  /**
   * What AWS WAF should do if the cookies of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling: Value<string>;
}

/**
 * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html}
 **/
export interface WAFv2RuleGroupSqliMatchStatement {
  /**
   * The sensitivity that you want AWS WAF to use to inspect for SQL injection attacks.
   *
   * `HIGH` detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see [Testing and tuning](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html) in the _ AWS WAF Developer Guide_.
   *
   * `LOW` is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives.
   *
   * Default: `LOW`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HIGH | LOW`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SensitivityLevel?: Value<string>;
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}

/**
 * A logical rule statement used to negate the results of another rule statement. You provide one `Statement` within the `NotStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-notstatement.html}
 **/
export interface WAFv2RuleGroupNotStatement {
  /**
   * The statement to negate. You can use any statement that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: [Statement](aws-properties-wafv2-rulegroup-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statement: WAFv2RuleGroupStatement;
}

/**
 * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
 *
 * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you could use a size constraint statement to block requests that have a request body greater than 8192 bytes.
 *
 * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html}
 **/
export interface WAFv2RuleGroupSizeConstraintStatement {
  /**
   * The operator to use to compare the request part to the size setting.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EQ | GE | GT | LE | LT | NE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonOperator: Value<string>;
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-rulegroup-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2RuleGroupTextTransformation>;
  /**
   * The size, in byte, to compare to the request part, after any transformations.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size: Value<number>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-rulegroup-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2RuleGroupFieldToMatch;
}
export interface WAFv2RuleGroupProperties {
  /**
   * A description of the rule group that helps with identification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[w+=:#@/-,.][w+=:#@/-,.s]+[w+=:#@/-,.]$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service. Valid Values are `CLOUDFRONT` and `REGIONAL`.
   *
   * For `CLOUDFRONT`, you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Scope: Value<string>;
  /**
   * The web ACL capacity units (WCUs) required for this rule group.
   *
   * When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, AWS WAF enforces this limit.
   *
   * AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Capacity: Value<number>;
  /**
   * The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the `RuleLabels` for a `Rule`.
   *
   * _Required_: No
   *
   * _Type_: List of [LabelSummary](aws-properties-wafv2-rulegroup-labelsummary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailableLabels?: List<WAFv2RuleGroupLabelSummary>;
  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Map of [CustomResponseBody](aws-properties-wafv2-rulegroup-customresponsebody.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomResponseBodies?: { [key: string]: WAFv2RuleGroupCustomResponseBody };
  /**
   * The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a `LabelMatchStatement` specification, in the [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) definition of a rule.
   *
   * _Required_: No
   *
   * _Type_: List of [LabelSummary](aws-properties-wafv2-rulegroup-labelsummary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConsumedLabels?: List<WAFv2RuleGroupLabelSummary>;
  /**
   * The rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
   *
   * _Required_: No
   *
   * _Type_: List of [Rule](aws-properties-wafv2-rulegroup-rule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules?: List<WAFv2RuleGroupRule>;
  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * _Required_: Yes
   *
   * _Type_: [VisibilityConfig](aws-properties-wafv2-rulegroup-visibilityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityConfig: WAFv2RuleGroupVisibilityConfig;
  /**
   * Key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
   *
   * To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation, you can only add tags to AWS WAF resources during resource creation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the rule group. You cannot change the name of a rule group after you create it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[w-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * **Note**
 *
 * This is the latest version of **AWS WAF**, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * Use an [AWS::WAFv2::RuleGroup](#aws-resource-wafv2-rulegroup) to define a collection of rules for inspecting and controlling web requests. You use a rule group in an [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md) by providing its Amazon Resource Name (ARN) to the rule statement `RuleGroupReferenceStatement`, when you add rules to the web ACL.
 *
 * When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html}
 */
export interface WAFv2RuleGroupResource {
  Type: 'AWS::WAFv2::RuleGroup';
  Properties: WAFv2RuleGroupProperties;
}
