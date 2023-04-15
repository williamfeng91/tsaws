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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch.html}
 **/
export interface WAFSqlInjectionMatchSetFieldToMatch {
  Data?: Value<string>;
  Type: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples.html}
 **/
export interface WAFSqlInjectionMatchSetSqlInjectionMatchTuple {
  FieldToMatch: WAFSqlInjectionMatchSetFieldToMatch;
  TextTransformation: Value<string>;
}
export interface WAFSqlInjectionMatchSetProperties {
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
  /**
   * Specifies the parts of web requests that you want to inspect for snippets of malicious SQL code.
   *
   * _Required_: No
   *
   * _Type_: List of [SqlInjectionMatchTuple](aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlInjectionMatchTuples?: List<WAFSqlInjectionMatchSetSqlInjectionMatchTuple>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A complex type that contains `SqlInjectionMatchTuple` objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a `SqlInjectionMatchSet` contains more than one `SqlInjectionMatchTuple` object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sqlinjectionmatchset.html}
 */
export interface WAFSqlInjectionMatchSetResource {
  Type: 'AWS::WAF::SqlInjectionMatchSet';
  Properties: WAFSqlInjectionMatchSetProperties;
}
