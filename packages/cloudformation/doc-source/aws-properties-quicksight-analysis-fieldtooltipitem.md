# AWS::QuickSight::Analysis FieldTooltipItem<a name="aws-properties-quicksight-analysis-fieldtooltipitem"></a>

The tooltip item for the fields\.

## Syntax<a name="aws-properties-quicksight-analysis-fieldtooltipitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-fieldtooltipitem-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-analysis-fieldtooltipitem-fieldid)" : String,
  "[Label](#cfn-quicksight-analysis-fieldtooltipitem-label)" : String,
  "[Visibility](#cfn-quicksight-analysis-fieldtooltipitem-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-fieldtooltipitem-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-analysis-fieldtooltipitem-fieldid): String
  [Label](#cfn-quicksight-analysis-fieldtooltipitem-label): String
  [Visibility](#cfn-quicksight-analysis-fieldtooltipitem-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-fieldtooltipitem-properties"></a>

`FieldId` <a name="cfn-quicksight-analysis-fieldtooltipitem-fieldid"></a>
The unique ID of the field that is targeted by the tooltip\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Label` <a name="cfn-quicksight-analysis-fieldtooltipitem-label"></a>
The label of the tooltip item\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-fieldtooltipitem-visibility"></a>
The visibility of the tooltip item\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)