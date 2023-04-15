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
 * Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuple.html}
 **/
export interface WAFRegionalSqlInjectionMatchSetSqlInjectionMatchTuple {
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
   * _Type_: [FieldToMatch](aws-properties-wafregional-sqlinjectionmatchset-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFRegionalSqlInjectionMatchSetFieldToMatch;
}

/**
 * The part of a web request that you want AWS WAF to inspect, such as a specific header or a query string.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sqlinjectionmatchset-fieldtomatch.html}
 **/
export interface WAFRegionalSqlInjectionMatchSetFieldToMatch {
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
   * _Required_: Conditional
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
export interface WAFRegionalSqlInjectionMatchSetProperties {
  /**
   * Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.
   *
   * _Required_: No
   *
   * _Type_: List of [SqlInjectionMatchTuple](aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuple.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlInjectionMatchTuples?: List<WAFRegionalSqlInjectionMatchSetSqlInjectionMatchTuple>;
  /**
   * The name, if any, of the `SqlInjectionMatchSet`.
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
 * A complex type that contains `SqlInjectionMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a `SqlInjectionMatchSet` contains more than one `SqlInjectionMatchTuple` object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sqlinjectionmatchset.html}
 */
export interface WAFRegionalSqlInjectionMatchSetResource {
  Type: 'AWS::WAFRegional::SqlInjectionMatchSet';
  Properties: WAFRegionalSqlInjectionMatchSetProperties;
}
