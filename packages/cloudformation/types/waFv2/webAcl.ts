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
 * Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction`.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customrequesthandling.html}
 **/
export interface WAFv2WebACLCustomRequestHandling {
  /**
   * The HTTP headers to insert into the request. Duplicate header names are not allowed.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CustomHTTPHeader](aws-properties-wafv2-webacl-customhttpheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsertHeaders: List<WAFv2WebACLCustomHTTPHeader>;
}

/**
 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html}
 **/
export interface WAFv2WebACLTextTransformation {
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
 * Specifies that AWS WAF should allow the request and optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html}
 **/
export interface WAFv2WebACLAllowAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-webacl-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}

/**
 * In a [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md), this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the `WebACL`. The default action must be a terminating action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html}
 **/
export interface WAFv2WebACLDefaultAction {
  /**
   * Specifies that AWS WAF should block requests by default.
   *
   * _Required_: No
   *
   * _Type_: [BlockAction](aws-properties-wafv2-webacl-blockaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Block?: WAFv2WebACLBlockAction;
  /**
   * Specifies that AWS WAF should allow requests by default.
   *
   * _Required_: No
   *
   * _Type_: [AllowAction](aws-properties-wafv2-webacl-allowaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Allow?: WAFv2WebACLAllowAction;
}

/**
 * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html}
 **/
export interface WAFv2WebACLByteMatchStatement {
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
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
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
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
}

/**
 * Configures inspection of the response body. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet`.
 *
 * **Note**
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html}
 **/
export interface WAFv2WebACLResponseInspectionBodyContains {
  /**
   * Strings in the body of the response that indicate a successful login attempt. To be counted as a successful login, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   *
   * JSON example: `"SuccessStrings": [ "Login successful", "Welcome to our site!" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessStrings: List<Value<string>>;
  /**
   * Strings in the body of the response that indicate a failed login attempt. To be counted as a failed login, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   *
   * JSON example: `"FailureStrings": [ "Login failed" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureStrings: List<Value<string>>;
}

/**
 * A logical rule statement used to combine other rule statements with OR logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `OrStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-orstatement.html}
 **/
export interface WAFv2WebACLOrStatement {
  /**
   * The statements to combine with OR logic. You can use any statements that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statements: List<WAFv2WebACLStatement>;
}

/**
 * A single label container. This is used as an element of a label array in `RuleLabels` inside a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-label.html}
 **/
export interface WAFv2WebACLLabel {
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
 * The filter to use to identify the subset of cookies to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
 *
 * Example JSON: `"MatchPattern": { "IncludedCookies": {"KeyToInclude1", "KeyToInclude2", "KeyToInclude3"} }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html}
 **/
export interface WAFv2WebACLCookieMatchPattern {
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
 * A custom header for custom request and response handling. This is used in [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) and [CustomRequestHandling](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html#cfn-wafv2-webacl-allowaction-customrequesthandling).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html}
 **/
export interface WAFv2WebACLCustomHTTPHeader {
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
 * Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change.
 *
 * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html}
 **/
export interface WAFv2WebACLRuleActionOverride {
  /**
   * The override action to use, in place of the configured action of the rule in the rule group.
   *
   * _Required_: Yes
   *
   * _Type_: [RuleAction](aws-properties-wafv2-webacl-ruleaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionToUse: WAFv2WebACLRuleAction;
  /**
   * The name of the rule to override.
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
 * Specifies that AWS WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html}
 **/
export interface WAFv2WebACLBlockAction {
  /**
   * Defines a custom response for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomResponse](aws-properties-wafv2-webacl-customresponse.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomResponse?: WAFv2WebACLCustomResponse;
}

/**
 * A rule statement used to run the rules that are defined in a [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md). To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
 *
 * You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You can only use a rule group reference statement at the top level inside a web ACL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html}
 **/
export interface WAFv2WebACLRuleGroupReferenceStatement {
  /**
   * Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   *
   * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   *
   * _Required_: No
   *
   * _Type_: List of [RuleActionOverride](aws-properties-wafv2-webacl-ruleactionoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleActionOverrides?: List<WAFv2WebACLRuleActionOverride>;
  /**
   * The Amazon Resource Name (ARN) of the entity.
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
   * Rules in the referenced rule group whose actions are set to `Count`.
   *
   * Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
   *
   * _Required_: No
   *
   * _Type_: List of [ExcludedRule](aws-properties-wafv2-webacl-excludedrule.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedRules?: List<WAFv2WebACLExcludedRule>;
}

/**
 * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
 *
 * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html}
 **/
export interface WAFv2WebACLLabelMatchStatement {
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
 * A logical rule statement used to combine other rule statements with AND logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `AndStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-andstatement.html}
 **/
export interface WAFv2WebACLAndStatement {
  /**
   * The statements to combine with AND logic. You can use any statements that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statements: List<WAFv2WebACLStatement>;
}

/**
 * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
 *
 * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you could use a size constraint statement to block requests that have a request body greater than 8192 bytes.
 *
 * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html}
 **/
export interface WAFv2WebACLSizeConstraintStatement {
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
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
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
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html}
 **/
export interface WAFv2WebACLGeoMatchStatement {
  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: No
   *
   * _Type_: [ForwardedIPConfiguration](aws-properties-wafv2-webacl-forwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedIPConfig?: WAFv2WebACLForwardedIPConfiguration;
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
 * Configures inspection of the response status code. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet`.
 *
 * **Note**
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html}
 **/
export interface WAFv2WebACLResponseInspectionStatusCode {
  /**
   * Status codes in the response that indicate a successful login attempt. To be counted as a successful login, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   *
   * JSON example: `"SuccessCodes": [ 200, 201 ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of Integer
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessCodes: List<Value<number>>;
  /**
   * Status codes in the response that indicate a failed login attempt. To be counted as a failed login, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   *
   * JSON example: `"FailureCodes": [ 400, 404 ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of Integer
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureCodes: List<Value<number>>;
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
 *
 * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html}
 **/
export interface WAFv2WebACLJsonBody {
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
   * _Type_: [JsonMatchPattern](aws-properties-wafv2-webacl-jsonmatchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2WebACLJsonMatchPattern;
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
 * A rule statement used to search web request components for a match against a single regular expression.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html}
 **/
export interface WAFv2WebACLRegexMatchStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
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
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
}

/**
 * Configures inspection of the response header. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet`.
 *
 * **Note**
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html}
 **/
export interface WAFv2WebACLResponseInspectionHeader {
  /**
   * Values in the response header with the specified name that indicate a successful login attempt. To be counted as a successful login, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"SuccessValues": [ "LoginPassed", "Successful login" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessValues: List<Value<string>>;
  /**
   * Values in the response header with the specified name that indicate a failed login attempt. To be counted as a failed login, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"FailureValues": [ "LoginFailed", "Failed login" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureValues: List<Value<string>>;
  /**
   * The name of the header to match against. The name must be an exact match, including case.
   *
   * JSON example: `"Name": [ "LoginResult" ]`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Specifies how AWS WAF should handle `Challenge` evaluations. This is available at the web ACL level and in each rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeconfig.html}
 **/
export interface WAFv2WebACLChallengeConfig {
  /**
   * Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
   *
   * _Required_: No
   *
   * _Type_: [ImmunityTimeProperty](aws-properties-wafv2-webacl-immunitytimeproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImmunityTimeProperty?: WAFv2WebACLImmunityTimeProperty;
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to the block action.
 *
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html}
 **/
export interface WAFv2WebACLCustomResponse {
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
   * _Type_: List of [CustomHTTPHeader](aws-properties-wafv2-webacl-customhttpheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseHeaders?: List<WAFv2WebACLCustomHTTPHeader>;
}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 *
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singleheader.html}
 **/
export interface WAFv2WebACLSingleHeader {
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
 * Inspect one query argument in the web request, identified by name, for example _UserName_ or _SalesRegion_. The name isn't case sensitive.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 *
 * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singlequeryargument.html}
 **/
export interface WAFv2WebACLSingleQueryArgument {
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
 * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
 *
 * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaaction.html}
 **/
export interface WAFv2WebACLCaptchaAction {
  /**
   * Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-webacl-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}

/**
 * A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement.
 *
 * You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. It can only be referenced as a top-level statement within a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html}
 **/
export interface WAFv2WebACLManagedRuleGroupStatement {
  /**
   * The name of the managed rule group vendor. You use this, along with the rule group name, to identify the rule group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VendorName: Value<string>;
  /**
   * The version of the managed rule group to use. If you specify this, the version setting is fixed until you change it. If you don't specify this, AWS WAF uses the vendor's default version, and then keeps the version at the vendor's default when the vendor updates the managed rule group settings.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[w#:.-/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   *
   * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   *
   * _Required_: No
   *
   * _Type_: List of [RuleActionOverride](aws-properties-wafv2-webacl-ruleactionoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleActionOverrides?: List<WAFv2WebACLRuleActionOverride>;
  /**
   * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
   *
   * Use the `AWSManagedRulesATPRuleSet` configuration object for the account takeover prevention managed rule group, to provide information such as the sign-in page of your application and the type of content to accept or reject from the client.
   *
   * Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
   *
   * _Required_: No
   *
   * _Type_: List of [ManagedRuleGroupConfig](aws-properties-wafv2-webacl-managedrulegroupconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedRuleGroupConfigs?: List<WAFv2WebACLManagedRuleGroupConfig>;
  /**
   * Rules in the referenced rule group whose actions are set to `Count`.
   *
   * Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
   *
   * _Required_: No
   *
   * _Type_: List of [ExcludedRule](aws-properties-wafv2-webacl-excludedrule.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludedRules?: List<WAFv2WebACLExcludedRule>;
  /**
   * The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
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
  /**
   * An optional nested statement that narrows the scope of the web requests that are evaluated by the managed rule group. Requests are only evaluated by the rule group if they match the scope-down statement. You can use any nestable [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   *
   * _Required_: No
   *
   * _Type_: [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeDownStatement?: WAFv2WebACLStatement;
}

/**
 * The identifier of the username or password field, used in the `ManagedRuleGroupConfig` settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldidentifier.html}
 **/
export interface WAFv2WebACLFieldIdentifier {
  /**
   * The name of the username or password field, used in the `ManagedRuleGroupConfig` settings.
   *
   * When the `PayloadType` is `JSON`, the identifier must be in JSON pointer syntax. For example `/form/username`. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   *
   * When the `PayloadType` is `FORM_ENCODED`, use the HTML form names. For example, `username`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Identifier: Value<string>;
}

/**
 * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html}
 **/
export interface WAFv2WebACLXssMatchStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
}

/**
 * Details for your use of the account takeover prevention managed rule group, `AWSManagedRulesATPRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html}
 **/
export interface WAFv2WebACLAWSManagedRulesATPRuleSet {
  /**
   * The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates.
   *
   * The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that submit too many failed login attempts in a short amount of time.
   *
   * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
   *
   * _Required_: No
   *
   * _Type_: [ResponseInspection](aws-properties-wafv2-webacl-responseinspection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseInspection?: WAFv2WebACLResponseInspection;
  /**
   * The path of the login endpoint for your application. For example, for the URL `https://example.com/web/login`, you would provide the path `/web/login`.
   *
   * The rule group inspects only HTTP `POST` requests to your specified login endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoginPath: Value<string>;
  /**
   * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
   *
   * _Required_: No
   *
   * _Type_: [RequestInspection](aws-properties-wafv2-webacl-requestinspection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequestInspection?: WAFv2WebACLRequestInspection;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html}
 **/
export interface WAFv2WebACLForwardedIPConfiguration {
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
 * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](aws-resource-wafv2-regexpatternset.md) that specifies the expressions that you want to detect, then use that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
 *
 * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html}
 **/
export interface WAFv2WebACLRegexPatternSetReferenceStatement {
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
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
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 *
 * **Note**
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 *
 * This configuration is used only for [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement). For [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ratebasedstatement), use [ForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig) instead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html}
 **/
export interface WAFv2WebACLIPSetForwardedIPConfiguration {
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
 * The response body to use in a custom response to a web request. This is referenced by key from [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) `CustomResponseBodyKey`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html}
 **/
export interface WAFv2WebACLCustomResponseBody {
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
 * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html}
 **/
export interface WAFv2WebACLStatement {
  /**
   * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
   *
   * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you could use a size constraint statement to block requests that have a request body greater than 8192 bytes.
   *
   * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   *
   * _Required_: No
   *
   * _Type_: [SizeConstraintStatement](aws-properties-wafv2-webacl-sizeconstraintstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeConstraintStatement?: WAFv2WebACLSizeConstraintStatement;
  /**
   * A logical rule statement used to combine other rule statements with AND logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `AndStatement`.
   *
   * _Required_: No
   *
   * _Type_: [AndStatement](aws-properties-wafv2-webacl-andstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AndStatement?: WAFv2WebACLAndStatement;
  /**
   * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
   *
   * _Required_: No
   *
   * _Type_: [XssMatchStatement](aws-properties-wafv2-webacl-xssmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XssMatchStatement?: WAFv2WebACLXssMatchStatement;
  /**
   * A logical rule statement used to negate the results of another rule statement. You provide one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `NotStatement`.
   *
   * _Required_: No
   *
   * _Type_: [NotStatement](aws-properties-wafv2-webacl-notstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotStatement?: WAFv2WebACLNotStatement;
  /**
   * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
   *
   * _Required_: No
   *
   * _Type_: [ByteMatchStatement](aws-properties-wafv2-webacl-bytematchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ByteMatchStatement?: WAFv2WebACLByteMatchStatement;
  /**
   * A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.
   *
   * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF.
   *
   * When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.
   *
   * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:
   */
  RateBasedStatement?: WAFv2WebACLRateBasedStatement;
  /**
   * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
   */
  GeoMatchStatement?: WAFv2WebACLGeoMatchStatement;
  /**
   * A rule statement used to run the rules that are defined in a [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md). To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
   *
   * You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You can only use a rule group reference statement at the top level inside a web ACL.
   *
   * _Required_: No
   *
   * _Type_: [RuleGroupReferenceStatement](aws-properties-wafv2-webacl-rulegroupreferencestatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleGroupReferenceStatement?: WAFv2WebACLRuleGroupReferenceStatement;
  /**
   * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
   *
   * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
   *
   * _Required_: No
   *
   * _Type_: [LabelMatchStatement](aws-properties-wafv2-webacl-labelmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LabelMatchStatement?: WAFv2WebACLLabelMatchStatement;
  /**
   * A rule statement used to search web request components for a match against a single regular expression.
   *
   * _Required_: No
   *
   * _Type_: [RegexMatchStatement](aws-properties-wafv2-webacl-regexmatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexMatchStatement?: WAFv2WebACLRegexMatchStatement;
  /**
   * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
   *
   * _Required_: No
   *
   * _Type_: [SqliMatchStatement](aws-properties-wafv2-webacl-sqlimatchstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqliMatchStatement?: WAFv2WebACLSqliMatchStatement;
  /**
   * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](aws-resource-wafv2-regexpatternset.md) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
   *
   * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   *
   * _Required_: No
   *
   * _Type_: [RegexPatternSetReferenceStatement](aws-properties-wafv2-webacl-regexpatternsetreferencestatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexPatternSetReferenceStatement?: WAFv2WebACLRegexPatternSetReferenceStatement;
  /**
   * A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
   *
   * _Required_: No
   *
   * _Type_: [OrStatement](aws-properties-wafv2-webacl-orstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrStatement?: WAFv2WebACLOrStatement;
  /**
   * A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement.
   *
   * You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. It can only be referenced as a top-level statement within a rule.
   *
   * _Required_: No
   *
   * _Type_: [ManagedRuleGroupStatement](aws-properties-wafv2-webacl-managedrulegroupstatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedRuleGroupStatement?: WAFv2WebACLManagedRuleGroupStatement;
  /**
   * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](aws-resource-wafv2-ipset.md) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
   *
   * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   *
   * _Required_: No
   *
   * _Type_: [IPSetReferenceStatement](aws-properties-wafv2-webacl-ipsetreferencestatement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetReferenceStatement?: WAFv2WebACLIPSetReferenceStatement;
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-immunitytimeproperty.html}
 **/
export interface WAFv2WebACLImmunityTimeProperty {
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
 * Specifies that AWS WAF should run a `Challenge` check against the request to verify that the request is coming from a legitimate client session:
 *
 * You can configure the expiration time in the `ChallengeConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 *
 * This action option is available for rules. It isn't available for web ACL default actions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeaction.html}
 **/
export interface WAFv2WebACLChallengeAction {
  /**
   * Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-webacl-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}

/**
 * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) option `JsonBody`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html}
 **/
export interface WAFv2WebACLJsonMatchPattern {
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
 * Specifies that AWS WAF should count the request. Optionally defines additional custom handling for the request.
 *
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html}
 **/
export interface WAFv2WebACLCountAction {
  /**
   * Defines custom handling for the web request.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CustomRequestHandling](aws-properties-wafv2-webacl-customrequesthandling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRequestHandling?: WAFv2WebACLCustomRequestHandling;
}

/**
 * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaconfig.html}
 **/
export interface WAFv2WebACLCaptchaConfig {
  /**
   * Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
   *
   * _Required_: No
   *
   * _Type_: [ImmunityTimeProperty](aws-properties-wafv2-webacl-immunitytimeproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImmunityTimeProperty?: WAFv2WebACLImmunityTimeProperty;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html}
 **/
export interface WAFv2WebACLFieldToMatch {
  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   *
   * Only the first 8 KB (8192 bytes) of the request body are forwarded to AWS WAF for inspection by the underlying host service. For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
   *
   * _Required_: No
   *
   * _Type_: [JsonBody](aws-properties-wafv2-webacl-jsonbody.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonBody?: WAFv2WebACLJsonBody;
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
   * _Type_: [SingleQueryArgument](aws-properties-wafv2-webacl-singlequeryargument.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleQueryArgument?: WAFv2WebACLSingleQueryArgument;
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
   * _Type_: [Headers](aws-properties-wafv2-webacl-headers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: WAFv2WebACLHeaders;
  /**
   * Inspect the request cookies. You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
   *
   * Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   *
   * _Required_: No
   *
   * _Type_: [Cookies](aws-properties-wafv2-webacl-cookies.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cookies?: WAFv2WebACLCookies;
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
   * _Type_: [Body](aws-properties-wafv2-webacl-body.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: WAFv2WebACLBody;
  /**
   * Inspect a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   *
   * Example JSON: `"SingleHeader": { "Name": "haystack" }`
   *
   * Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
   *
   * _Required_: No
   *
   * _Type_: [SingleHeader](aws-properties-wafv2-webacl-singleheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleHeader?: WAFv2WebACLSingleHeader;
}

/**
 * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html}
 **/
export interface WAFv2WebACLSqliMatchStatement {
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
   * _Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextTransformations: List<WAFv2WebACLTextTransformation>;
  /**
   * The part of the web request that you want AWS WAF to inspect.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFv2WebACLFieldToMatch;
}

/**
 * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
 *
 * Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html}
 **/
export interface WAFv2WebACLManagedRuleGroupConfig {
  /**
   * Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet` `RequestInspection`.
   *
   * _Required_: No
   *
   * _Type_: [FieldIdentifier](aws-properties-wafv2-webacl-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsernameField?: WAFv2WebACLFieldIdentifier;
  /**
   * Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoginPath?: Value<string>;
  /**
   * Additional configuration for using the account takeover prevention (ATP) managed rule group, `AWSManagedRulesATPRuleSet`. Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to login requests.
   *
   * This configuration replaces the individual configuration fields in `ManagedRuleGroupConfig` and provides additional feature configuration.
   *
   * For information about using the ATP managed rule group, see [AWS WAF Fraud Control account takeover prevention (ATP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html) and [AWS WAF Fraud Control account takeover prevention (ATP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [AWSManagedRulesATPRuleSet](aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AWSManagedRulesATPRuleSet?: WAFv2WebACLAWSManagedRulesATPRuleSet;
  /**
   * Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. For information about using the Bot Control managed rule group, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) and [AWS WAF Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [AWSManagedRulesBotControlRuleSet](aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AWSManagedRulesBotControlRuleSet?: WAFv2WebACLAWSManagedRulesBotControlRuleSet;
  /**
   * Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet` `RequestInspection`.
   *
   * _Required_: No
   *
   * _Type_: [FieldIdentifier](aws-properties-wafv2-webacl-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PasswordField?: WAFv2WebACLFieldIdentifier;
  /**
   * Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet` `RequestInspection`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FORM_ENCODED | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadType?: Value<string>;
}

/**
 * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
 *
 * This is part of the `AWSManagedRulesATPRuleSet` configuration in `ManagedRuleGroupConfig`.
 *
 * In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html}
 **/
export interface WAFv2WebACLRequestInspection {
  /**
   * Details about your login page username field.
   *
   * How you specify this depends on the payload type.
   */
  UsernameField: WAFv2WebACLFieldIdentifier;
  /**
   * Details about your login page password field.
   *
   * How you specify this depends on the payload type.
   */
  PasswordField: WAFv2WebACLFieldIdentifier;
  /**
   * The payload type for your login endpoint, either JSON or form encoded.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FORM_ENCODED | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadType: Value<string>;
}

/**
 * The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html}
 **/
export interface WAFv2WebACLRuleAction {
  /**
   * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
   */
  Captcha?: WAFv2WebACLCaptchaAction;
  /**
   * Instructs AWS WAF to block the web request.
   *
   * _Required_: No
   *
   * _Type_: [BlockAction](aws-properties-wafv2-webacl-blockaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Block?: WAFv2WebACLBlockAction;
  /**
   * Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [CountAction](aws-properties-wafv2-webacl-countaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: WAFv2WebACLCountAction;
  /**
   * Instructs AWS WAF to allow the web request.
   *
   * _Required_: No
   *
   * _Type_: [AllowAction](aws-properties-wafv2-webacl-allowaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Allow?: WAFv2WebACLAllowAction;
  /**
   * Instructs AWS WAF to run a `Challenge` check against the web request.
   *
   * _Required_: No
   *
   * _Type_: [ChallengeAction](aws-properties-wafv2-webacl-challengeaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Challenge?: WAFv2WebACLChallengeAction;
}

/**
 * Inspect the body of the web request. The body immediately follows the request headers.
 *
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch) specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-body.html}
 **/
export interface WAFv2WebACLBody {
  /**
   * What AWS WAF should do if the body is larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of the body of a web request when the body exceeds 8 KB (8192 bytes). Only the first 8 KB of the request body are forwarded to AWS WAF by the underlying host service.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling?: Value<string>;
}

/**
 * A logical rule statement used to negate the results of another rule statement. You provide one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `NotStatement`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html}
 **/
export interface WAFv2WebACLNotStatement {
  /**
   * The statement to negate. You can use any statement that can be nested.
   *
   * _Required_: Yes
   *
   * _Type_: [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statement: WAFv2WebACLStatement;
}

/**
 * The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates.
 *
 * The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that submit too many failed login attempts in a short amount of time.
 *
 * **Note**
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * This is part of the `AWSManagedRulesATPRuleSet` configuration in `ManagedRuleGroupConfig`.
 *
 * Enable login response inspection by configuring exactly one component of the response to inspect. You can't configure more than one. If you don't configure any of the response inspection options, response inspection is disabled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html}
 **/
export interface WAFv2WebACLResponseInspection {
  /**
   * Configures inspection of the response header.
   *
   * _Required_: No
   *
   * _Type_: [ResponseInspectionHeader](aws-properties-wafv2-webacl-responseinspectionheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header?: WAFv2WebACLResponseInspectionHeader;
  /**
   * Configures inspection of the response body. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body.
   *
   * _Required_: No
   *
   * _Type_: [ResponseInspectionBodyContains](aws-properties-wafv2-webacl-responseinspectionbodycontains.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodyContains?: WAFv2WebACLResponseInspectionBodyContains;
  /**
   * Configures inspection of the response JSON. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON.
   *
   * _Required_: No
   *
   * _Type_: [ResponseInspectionJson](aws-properties-wafv2-webacl-responseinspectionjson.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Json?: WAFv2WebACLResponseInspectionJson;
  /**
   * Configures inspection of the response status code.
   *
   * _Required_: No
   *
   * _Type_: [ResponseInspectionStatusCode](aws-properties-wafv2-webacl-responseinspectionstatuscode.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode?: WAFv2WebACLResponseInspectionStatusCode;
}

/**
 * The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
 *
 * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
 *
 * **Note**
 *
 * This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html}
 **/
export interface WAFv2WebACLOverrideAction {
  /**
   * Override the rule group evaluation result to count only.
   *
   * This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: { [key: string]: any };
  /**
   * Don't override the rule group evaluation result. This is the most common setting.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  None?: { [key: string]: any };
}

/**
 * Configures inspection of the response JSON. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet`.
 *
 * **Note**
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html}
 **/
export interface WAFv2WebACLResponseInspectionJson {
  /**
   * The identifier for the value to match against in the JSON. The identifier must be an exact match, including case.
   *
   * JSON example: `"Identifier": [ "/login/success" ]`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Identifier: Value<string>;
  /**
   * Values for the specified identifier in the response JSON that indicate a successful login attempt. To be counted as a successful login, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"SuccessValues": [ "True", "Succeeded" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessValues: List<Value<string>>;
  /**
   * Values for the specified identifier in the response JSON that indicate a failed login attempt. To be counted as a failed login, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   *
   * JSON example: `"FailureValues": [ "False", "Failed" ]`
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureValues: List<Value<string>>;
}

/**
 * Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
 *
 * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html}
 **/
export interface WAFv2WebACLHeaders {
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
   * _Type_: [HeaderMatchPattern](aws-properties-wafv2-webacl-headermatchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2WebACLHeaderMatchPattern;
  /**
   * What AWS WAF should do if the headers of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling: Value<string>;
}

/**
 * A single rule, which you can use in a [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md) or [AWS::WAFv2::RuleGroup](aws-resource-wafv2-rulegroup.md) to identify web requests that you want to allow, block, or count. Each rule includes one top-level [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-statement) that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html}
 **/
export interface WAFv2WebACLRule {
  /**
   * The action that AWS WAF should take on a web request when it matches the rule's statement. Settings at the web ACL level can override the rule action setting.
   *
   * This is used only for rules whose statements don't reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   *
   * You must set either this `Action` setting or the rule's `OverrideAction`, but not both:
   */
  Action?: WAFv2WebACLRuleAction;
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
   * _Type_: [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statement: WAFv2WebACLStatement;
  /**
   * Specifies how AWS WAF should handle `Challenge` evaluations. If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [ChallengeConfig](aws-properties-wafv2-webacl-challengeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChallengeConfig?: WAFv2WebACLChallengeConfig;
  /**
   * The override action to apply to the rules in a rule group, instead of the individual rule action settings. This is used only for rules whose statements reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   *
   * Set the override action to none to leave the rule group rule actions in effect. Set it to count to only count matches, regardless of the rule action settings.
   *
   * You must set either this `OverrideAction` setting or the `Action` setting, but not both:
   */
  OverrideAction?: WAFv2WebACLOverrideAction;
  /**
   * Labels to apply to web requests that match the rule match statement. AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   *
   * Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement`.
   *
   * For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
   */
  RuleLabels?: List<WAFv2WebACLLabel>;
  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * _Required_: Yes
   *
   * _Type_: [VisibilityConfig](aws-properties-wafv2-webacl-visibilityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityConfig: WAFv2WebACLVisibilityConfig;
  /**
   * Specifies how AWS WAF should handle `CAPTCHA` evaluations. If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
   *
   * _Required_: No
   *
   * _Type_: [CaptchaConfig](aws-properties-wafv2-webacl-captchaconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptchaConfig?: WAFv2WebACLCaptchaConfig;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html}
 **/
export interface WAFv2WebACLRateBasedStatement {
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
   * _Type_: [ForwardedIPConfiguration](aws-properties-wafv2-webacl-forwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForwardedIPConfig?: WAFv2WebACLForwardedIPConfiguration;
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
   * An optional nested statement that narrows the scope of the web requests that are evaluated by the rate-based statement. Requests are only tracked by the rate-based statement if they match the scope-down statement. You can use any nestable `Statement` in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   *
   * _Required_: No
   *
   * _Type_: [Statement](aws-properties-wafv2-webacl-statement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeDownStatement?: WAFv2WebACLStatement;
}

/**
 * The filter to use to identify the subset of headers to inspect in a web request.
 *
 * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
 *
 * Example JSON: `"MatchPattern": { "ExcludedHeaders": {"KeyToExclude1", "KeyToExclude2"} }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html}
 **/
export interface WAFv2WebACLHeaderMatchPattern {
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
 * Specifies a single rule in a rule group whose action you want to override to `Count`.
 *
 * **Note**
 *
 * Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-excludedrule.html}
 **/
export interface WAFv2WebACLExcludedRule {
  /**
   * The name of the rule whose action you want to override to `Count`.
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
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html}
 **/
export interface WAFv2WebACLVisibilityConfig {
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
 * Details for your use of the Bot Control managed rule group, used in `ManagedRuleGroupConfig`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html}
 **/
export interface WAFv2WebACLAWSManagedRulesBotControlRuleSet {
  /**
   * The inspection level to use for the Bot Control rule group. The common level is the least expensive. The targeted level includes all common level rules and adds rules with more advanced inspection criteria. For details, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InspectionLevel: Value<string>;
}

/**
 * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](aws-resource-wafv2-ipset.md) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
 *
 * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html}
 **/
export interface WAFv2WebACLIPSetReferenceStatement {
  /**
   * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   *
   * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
   *
   * _Required_: No
   *
   * _Type_: [IPSetForwardedIPConfiguration](aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetForwardedIPConfig?: WAFv2WebACLIPSetForwardedIPConfiguration;
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
 * Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
 *
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 *
 * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html}
 **/
export interface WAFv2WebACLCookies {
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
   * _Type_: [CookieMatchPattern](aws-properties-wafv2-webacl-cookiematchpattern.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPattern: WAFv2WebACLCookieMatchPattern;
  /**
   * What AWS WAF should do if the cookies of the request are larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF.
   *
   * The options for oversize handling are the following:
   */
  OversizeHandling: Value<string>;
}
export interface WAFv2WebACLProperties {
  /**
   * Specifies the domains that AWS WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenDomains?: List<Value<string>>;
  /**
   * A description of the web ACL that helps with identification.
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
   * The action to perform if none of the `Rules` contained in the `WebACL` match.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultAction](aws-properties-wafv2-webacl-defaultaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAction: WAFv2WebACLDefaultAction;
  /**
   * Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service. Valid Values are `CLOUDFRONT` and `REGIONAL`.
   *
   * For `CLOUDFRONT`, you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1`.
   *
   * For information about how to define the association of the web ACL with your resource, see [AWS::WAFv2::WebACLAssociation](aws-resource-wafv2-webaclassociation.md).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Scope: Value<string>;
  /**
   * A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
   *
   * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _ AWS WAF Developer Guide_.
   *
   * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _ AWS WAF Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Map of [CustomResponseBody](aws-properties-wafv2-webacl-customresponsebody.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomResponseBodies?: { [key: string]: WAFv2WebACLCustomResponseBody };
  /**
   * Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. If you don't specify this, AWS WAF uses its default settings for `ChallengeConfig`.
   *
   * _Required_: No
   *
   * _Type_: [ChallengeConfig](aws-properties-wafv2-webacl-challengeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChallengeConfig?: WAFv2WebACLChallengeConfig;
  /**
   * The rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
   *
   * _Required_: No
   *
   * _Type_: List of [Rule](aws-properties-wafv2-webacl-rule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules?: List<WAFv2WebACLRule>;
  /**
   * Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *
   * _Required_: Yes
   *
   * _Type_: [VisibilityConfig](aws-properties-wafv2-webacl-visibilityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VisibilityConfig: WAFv2WebACLVisibilityConfig;
  /**
   * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig`.
   *
   * _Required_: No
   *
   * _Type_: [CaptchaConfig](aws-properties-wafv2-webacl-captchaconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptchaConfig?: WAFv2WebACLCaptchaConfig;
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
   * The name of the web ACL. You cannot change the name of a web ACL after you create it.
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
 * Use an [AWS::WAFv2::WebACL](#aws-resource-wafv2-webacl) to define a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you specify a default action to take (allow, block) for any request that doesn't match any of the rules. The rules in a web ACL can contain rule statements that you define explicitly and rule statements that reference rule groups and managed rule groups. You can associate a web ACL with one or more AWS resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AWS AppSync GraphQL API , an Amazon Cognito user pool, or an AWS App Runner service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html}
 */
export interface WAFv2WebACLResource {
  Type: 'AWS::WAFv2::WebACL';
  Properties: WAFv2WebACLProperties;
}
