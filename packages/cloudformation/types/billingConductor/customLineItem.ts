/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html}
 **/
export interface BillingConductorCustomLineItemCustomLineItemFlatChargeDetails {
  /**
   * The custom line item's fixed charge value in USD.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChargeValue: Value<number>;
}

/**
 * A representation of the charge details associated with a percentage custom line item.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html}
 **/
export interface BillingConductorCustomLineItemCustomLineItemPercentageChargeDetails {
  /**
   * A list of resource ARNs to associate to the percentage custom line item.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChildAssociatedResources?: List<Value<string>>;
  /**
   * The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PercentageValue: Value<number>;
}

/**
 * The billing period range in which the custom line item request will be applied.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-billingperiodrange.html}
 **/
export interface BillingConductorCustomLineItemBillingPeriodRange {
  /**
   * The exclusive end billing period that defines a billing period range where a custom line is applied.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExclusiveEndBillingPeriod?: Value<string>;
  /**
   * The inclusive start billing period that defines a billing period range where a custom line is applied.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InclusiveStartBillingPeriod?: Value<string>;
}

/**
 * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html}
 **/
export interface BillingConductorCustomLineItemCustomLineItemChargeDetails {
  /**
   * The type of the custom line item that indicates whether the charge is a fee or credit.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * A `CustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item.
   *
   * _Required_: No
   *
   * _Type_: [CustomLineItemPercentageChargeDetails](aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Percentage?: BillingConductorCustomLineItemCustomLineItemPercentageChargeDetails;
  /**
   * A `CustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item.
   *
   * _Required_: No
   *
   * _Type_: [CustomLineItemFlatChargeDetails](aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Flat?: BillingConductorCustomLineItemCustomLineItemFlatChargeDetails;
}
export interface BillingConductorCustomLineItemProperties {
  /**
   * A time range for which the custom line item is effective.
   *
   * _Required_: No
   *
   * _Type_: [BillingPeriodRange](aws-properties-billingconductor-customlineitem-billingperiodrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BillingPeriodRange?: BillingConductorCustomLineItemBillingPeriodRange;
  /**
   * The custom line item's description. This is shown on the Bills page in association with the charge value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BillingGroupArn: Value<string>;
  /**
   * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
   *
   * _Required_: No
   *
   * _Type_: [CustomLineItemChargeDetails](aws-properties-billingconductor-customlineitem-customlineitemchargedetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomLineItemChargeDetails?: BillingConductorCustomLineItemCustomLineItemChargeDetails;
  /**
   * A map that contains tag keys and tag values that are attached to a custom line item.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The custom line item's name.
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
 * Creates a custom line item that can be used to create a one-time or recurring, fixed or percentage-based charge that you can apply to a single billing group. You can apply custom line items to the current or previous billing period. You can create either a fee or a discount custom line item.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html}
 */
export interface BillingConductorCustomLineItemResource {
  Type: 'AWS::BillingConductor::CustomLineItem';
  Properties: BillingConductorCustomLineItemProperties;
}
