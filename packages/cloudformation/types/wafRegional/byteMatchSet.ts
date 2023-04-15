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
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-bytematchtuple.html}
 **/
export interface WAFRegionalByteMatchSetByteMatchTuple {
  /**
   * The value that you want AWS WAF to search for. AWS WAF searches for the specified string in the part of web requests that you specified in `FieldToMatch`. The maximum length of the value is 50 bytes.
   *
   * You must specify this property or the `TargetStringBase64` property.
   *
   * Valid values depend on the values that you specified for `FieldToMatch`:
   */
  TargetString?: Value<string>;
  /**
   * The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to AWS WAF without encoding it.
   *
   * You must specify this property or the `TargetString` property.
   *
   * AWS WAF searches for this value in a specific part of web requests, which you define in the `FieldToMatch` property.
   *
   * Valid values depend on the Type value in the `FieldToMatch` property. For example, for a `METHOD` type, you must specify HTTP methods such as `DELETE, GET, HEAD, OPTIONS, PATCH, POST`, and `PUT`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetStringBase64?: Value<string>;
  /**
   * Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search. Valid values include the following:
   *
   * **CONTAINS**
   *
   * The specified part of the web request must include the value of `TargetString`, but the location doesn't matter.
   *
   * **CONTAINS_WORD**
   *
   * The specified part of the web request must include the value of `TargetString`, and `TargetString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `TargetString` must be a word, which means one of the following:
   */
  PositionalConstraint: Value<string>;
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   *
   * You can only specify a single type of TextTransformation.
   *
   * **CMD_LINE**
   *
   * When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   */
  TextTransformation: Value<string>;
  /**
   * The part of a web request that you want AWS WAF to inspect, such as a specific header or a query string.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldToMatch](aws-properties-wafregional-bytematchset-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFRegionalByteMatchSetFieldToMatch;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Specifies where in a web request to look for `TargetString`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-bytematchset-fieldtomatch.html}
 **/
export interface WAFRegionalByteMatchSetFieldToMatch {
  /**
   * The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:
   */
  Type: Value<string>;
  /**
   * When the value of `Type` is `HEADER`, enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer`. The name of the header is not case sensitive.
   *
   * When the value of `Type` is `SINGLE_QUERY_ARG`, enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion`. The parameter name is not case sensitive.
   *
   * If the value of `Type` is any other value, omit `Data`.
   *
   * _Required_: No
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
  Data?: Value<string>;
}
export interface WAFRegionalByteMatchSetProperties {
  /**
   * Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
   *
   * _Required_: No
   *
   * _Type_: List of [ByteMatchTuple](aws-properties-wafregional-bytematchset-bytematchtuple.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ByteMatchTuples?: List<WAFRegionalByteMatchSetByteMatchTuple>;
  /**
   * A friendly name or description of the `ByteMatchSet`. You can't change `Name` after you create a `ByteMatchSet`.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * The `AWS::WAFRegional::ByteMatchSet` resource creates an AWS WAF `ByteMatchSet` that identifies a part of a web request that you want to inspect.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-bytematchset.html}
 */
export interface WAFRegionalByteMatchSetResource {
  Type: 'AWS::WAFRegional::ByteMatchSet';
  Properties: WAFRegionalByteMatchSetProperties;
}
