/**
 * Supported regions:
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface SESReceiptRuleSetProperties {
  /**
   * The name of the receipt rule set to reorder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuleSetName?: Value<string>;
}

/**
 * Creates an empty receipt rule set.
 *
 * For information about setting up receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules).
 *
 * You can execute this operation no more than once per second.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html}
 */
export interface SESReceiptRuleSetResource {
  Type: 'AWS::SES::ReceiptRuleSet';
  Properties: SESReceiptRuleSetProperties;
}
