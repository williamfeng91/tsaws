# AWS::BillingConductor::CustomLineItem CustomLineItemChargeDetails<a name="aws-properties-billingconductor-customlineitem-customlineitemchargedetails"></a>

The charge details of a custom line item\. It should contain only one of `Flat` or `Percentage`\.

## Syntax<a name="aws-properties-billingconductor-customlineitem-customlineitemchargedetails-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-billingconductor-customlineitem-customlineitemchargedetails-syntax.json"></a>

```
{
  "[Flat](#cfn-billingconductor-customlineitem-customlineitemchargedetails-flat)" : CustomLineItemFlatChargeDetails,
  "[Percentage](#cfn-billingconductor-customlineitem-customlineitemchargedetails-percentage)" : CustomLineItemPercentageChargeDetails,
  "[Type](#cfn-billingconductor-customlineitem-customlineitemchargedetails-type)" : String
}
```

### YAML<a name="aws-properties-billingconductor-customlineitem-customlineitemchargedetails-syntax.yaml"></a>

```
  [Flat](#cfn-billingconductor-customlineitem-customlineitemchargedetails-flat):
    CustomLineItemFlatChargeDetails
  [Percentage](#cfn-billingconductor-customlineitem-customlineitemchargedetails-percentage):
    CustomLineItemPercentageChargeDetails
  [Type](#cfn-billingconductor-customlineitem-customlineitemchargedetails-type): String
```

## Properties<a name="aws-properties-billingconductor-customlineitem-customlineitemchargedetails-properties"></a>

`Flat` <a name="cfn-billingconductor-customlineitem-customlineitemchargedetails-flat"></a>
A `CustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item\.  
_Required_: No  
_Type_: [CustomLineItemFlatChargeDetails](aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Percentage` <a name="cfn-billingconductor-customlineitem-customlineitemchargedetails-percentage"></a>
A `CustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item\.  
_Required_: No  
_Type_: [CustomLineItemPercentageChargeDetails](aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-billingconductor-customlineitem-customlineitemchargedetails-type"></a>
The type of the custom line item that indicates whether the charge is a fee or credit\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
