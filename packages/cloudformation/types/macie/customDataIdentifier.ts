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

export interface MacieCustomDataIdentifierProperties {
  /**
   * A custom description of the custom data identifier. The description can contain 1-512 characters.
   *
   * Avoid including sensitive data in the description. Users of the account might be able to see the description, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * An array of character sequences (_keywords_), one of which must precede and be in proximity (`MaximumMatchDistance`) of the regular expression (`Regex`) to match.
   *
   * The array can contain 1-50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Keywords?: List<Value<string>>;
  /**
   * The regular expression (_regex_) that defines the text pattern to match. The expression can contain 1-512 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Regex: Value<string>;
  /**
   * An array of character sequences (_ignore words_) to exclude from the results. If text matches the regular expression (`Regex`) but it contains a string in this array, Amazon Macie ignores the text and doesn't include it in the results.
   *
   * The array can contain 1-10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IgnoreWords?: List<Value<string>>;
  /**
   * A custom name for the custom data identifier. The name can contain 1-128 characters.
   *
   * Avoid including sensitive data in the name of a custom data identifier. Users of the account might be able to see the name, depending on the actions that they're allowed to perform in Amazon Macie.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The maximum number of characters that can exist between the end of at least one complete character sequence specified by the `Keywords` array and the end of text that matches the regular expression (`Regex`). If a complete keyword precedes all the text that matches the regular expression and the keyword is within the specified distance, Amazon Macie includes the result.
   *
   * The distance can be 1-300 characters. The default value is 50.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaximumMatchDistance?: Value<number>;
}

/**
 * The `AWS::Macie::CustomDataIdentifier` resource specifies a custom data identifier. A _custom data identifier_ is a set of custom criteria for Amazon Macie to use when it inspects data sources for sensitive data. The criteria consist of a regular expression (_regex_) that defines a text pattern to match and, optionally, character sequences and a proximity rule that refine the results. The character sequences can be:
 *
 * By using custom data identifiers, you can supplement the managed data identifiers that Macie provides and detect sensitive data that reflects your particular scenarios, intellectual property, or proprietary data. For more information, see [Building custom data identifiers](https://docs.aws.amazon.com/macie/latest/user/custom-data-identifiers.html) in the _Amazon Macie User Guide_.
 *
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::CustomDataIdentifier` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html}
 */
export interface MacieCustomDataIdentifierResource {
  Type: 'AWS::Macie::CustomDataIdentifier';
  Properties: MacieCustomDataIdentifierProperties;
}
