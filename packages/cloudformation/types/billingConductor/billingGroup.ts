/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The preferences and settings that will be used to compute the AWS charges for a billing group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-computationpreference.html}
 **/
export interface BillingConductorBillingGroupComputationPreference {
  /**
   * The Amazon Resource Name (ARN) of the pricing plan used to compute the AWS charges for a billing group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PricingPlanArn: Value<string>;
}

/**
 * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-billinggroup-accountgrouping.html}
 **/
export interface BillingConductorBillingGroupAccountGrouping {
  /**
   * The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinkedAccountIds: List<Value<string>>;
}
export interface BillingConductorBillingGroupProperties {
  /**
   * The description of the billing group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The account ID that serves as the main account in a billing group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrimaryAccountId: Value<string>;
  /**
   * The preferences and settings that will be used to compute the AWS charges for a billing group.
   *
   * _Required_: Yes
   *
   * _Type_: [ComputationPreference](aws-properties-billingconductor-billinggroup-computationpreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputationPreference: BillingConductorBillingGroupComputationPreference;
  /**
   * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated family.
   *
   * _Required_: Yes
   *
   * _Type_: [AccountGrouping](aws-properties-billingconductor-billinggroup-accountgrouping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountGrouping: BillingConductorBillingGroupAccountGrouping;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The billing group's name.
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
 * Creates a billing group that resembles a consolidated billing family that AWS charges, based off of the predefined pricing plan computation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html}
 */
export interface BillingConductorBillingGroupResource {
  Type: 'AWS::BillingConductor::BillingGroup';
  Properties: BillingConductorBillingGroupProperties;
}
