# AWS::QuickSight::Template FieldBasedTooltip<a name="aws-properties-quicksight-template-fieldbasedtooltip"></a>

The setup for the detailed tooltip\.

## Syntax<a name="aws-properties-quicksight-template-fieldbasedtooltip-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-fieldbasedtooltip-syntax.json"></a>

```
{
  "[AggregationVisibility](#cfn-quicksight-template-fieldbasedtooltip-aggregationvisibility)" : String,
  "[TooltipFields](#cfn-quicksight-template-fieldbasedtooltip-tooltipfields)" : [ TooltipItem, ... ],
  "[TooltipTitleType](#cfn-quicksight-template-fieldbasedtooltip-tooltiptitletype)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-fieldbasedtooltip-syntax.yaml"></a>

```
  [AggregationVisibility](#cfn-quicksight-template-fieldbasedtooltip-aggregationvisibility): String
  [TooltipFields](#cfn-quicksight-template-fieldbasedtooltip-tooltipfields):
    - TooltipItem
  [TooltipTitleType](#cfn-quicksight-template-fieldbasedtooltip-tooltiptitletype): String
```

## Properties<a name="aws-properties-quicksight-template-fieldbasedtooltip-properties"></a>

`AggregationVisibility` <a name="cfn-quicksight-template-fieldbasedtooltip-aggregationvisibility"></a>
The visibility of `Show aggregations`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipFields` <a name="cfn-quicksight-template-fieldbasedtooltip-tooltipfields"></a>
The fields configuration in the tooltip\.  
_Required_: No  
_Type_: List of [TooltipItem](aws-properties-quicksight-template-tooltipitem.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipTitleType` <a name="cfn-quicksight-template-fieldbasedtooltip-tooltiptitletype"></a>
The type for the >tooltip title\. Choose one of the following options:

- `NONE`: Doesn't use the primary value as the title\.
- `PRIMARY_VALUE`: Uses primary value as the title\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `NONE | PRIMARY_VALUE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
