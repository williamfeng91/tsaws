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
 * The part of a web request that you want AWS WAF to inspect, such as a specific header or a query string.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sizeconstraintset-fieldtomatch.html}
 **/
export interface WAFRegionalSizeConstraintSetFieldToMatch {
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

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Specifies a constraint on the size of a part of the web request. AWS WAF uses the `Size`, `ComparisonOperator`, and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-sizeconstraintset-sizeconstraint.html}
 **/
export interface WAFRegionalSizeConstraintSetSizeConstraint {
  /**
   * The type of comparison you want AWS WAF to perform. AWS WAF uses this in combination with the provided `Size` and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
   *
   * **EQ**: Used to test if the `Size` is equal to the size of the `FieldToMatch`
   *
   * **NE**: Used to test if the `Size` is not equal to the size of the `FieldToMatch`
   *
   * **LE**: Used to test if the `Size` is less than or equal to the size of the `FieldToMatch`
   *
   * **LT**: Used to test if the `Size` is strictly less than the size of the `FieldToMatch`
   *
   * **GE**: Used to test if the `Size` is greater than or equal to the size of the `FieldToMatch`
   *
   * **GT**: Used to test if the `Size` is strictly greater than the size of the `FieldToMatch`
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
   * The size in bytes that you want AWS WAF to compare against the size of the specified `FieldToMatch`. AWS WAF uses this in combination with `ComparisonOperator` and `FieldToMatch` to build an expression in the form of "`Size` `ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
   *
   * Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).
   *
   * If you specify `URI` for the value of `Type`, the / in the URI path that you specify counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size: Value<number>;
  /**
   * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting a request for a match.
   *
   * You can only specify a single type of TextTransformation.
   *
   * Note that if you choose `BODY` for the value of `Type`, you must choose `NONE` for `TextTransformation` because the API Gateway API or Application Load Balancer forward only the first 8192 bytes for inspection.
   *
   * **NONE**
   *
   * Specify `NONE` if you don't want to perform any text transformations.
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
   * _Type_: [FieldToMatch](aws-properties-wafregional-sizeconstraintset-fieldtomatch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldToMatch: WAFRegionalSizeConstraintSetFieldToMatch;
}
export interface WAFRegionalSizeConstraintSetProperties {
  /**
   * The size constraint and the part of the web request to check.
   *
   * _Required_: No
   *
   * _Type_: List of [SizeConstraint](aws-properties-wafregional-sizeconstraintset-sizeconstraint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeConstraints?: List<WAFRegionalSizeConstraintSetSizeConstraint>;
  /**
   * The name, if any, of the `SizeConstraintSet`.
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
 * A complex type that contains `SizeConstraint` objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a `SizeConstraintSet` contains more than one `SizeConstraint` object, a request only needs to match one constraint to be considered a match.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-sizeconstraintset.html}
 */
export interface WAFRegionalSizeConstraintSetResource {
  Type: 'AWS::WAFRegional::SizeConstraintSet';
  Properties: WAFRegionalSizeConstraintSetProperties;
}
