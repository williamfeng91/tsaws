# AWS::QuickSight::Dashboard ConditionalFormattingIcon<a name="aws-properties-quicksight-dashboard-conditionalformattingicon"></a>

The formatting configuration for the icon\.

## Syntax<a name="aws-properties-quicksight-dashboard-conditionalformattingicon-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-conditionalformattingicon-syntax.json"></a>

```
{
  "[CustomCondition](#cfn-quicksight-dashboard-conditionalformattingicon-customcondition)" : ConditionalFormattingCustomIconCondition,
  "[IconSet](#cfn-quicksight-dashboard-conditionalformattingicon-iconset)" : ConditionalFormattingIconSet
}
```

### YAML<a name="aws-properties-quicksight-dashboard-conditionalformattingicon-syntax.yaml"></a>

```
  [CustomCondition](#cfn-quicksight-dashboard-conditionalformattingicon-customcondition):
    ConditionalFormattingCustomIconCondition
  [IconSet](#cfn-quicksight-dashboard-conditionalformattingicon-iconset):
    ConditionalFormattingIconSet
```

## Properties<a name="aws-properties-quicksight-dashboard-conditionalformattingicon-properties"></a>

`CustomCondition` <a name="cfn-quicksight-dashboard-conditionalformattingicon-customcondition"></a>
Determines the custom condition for an icon set\.  
_Required_: No  
_Type_: [ConditionalFormattingCustomIconCondition](aws-properties-quicksight-dashboard-conditionalformattingcustomiconcondition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IconSet` <a name="cfn-quicksight-dashboard-conditionalformattingicon-iconset"></a>
Formatting configuration for icon set\.  
_Required_: No  
_Type_: [ConditionalFormattingIconSet](aws-properties-quicksight-dashboard-conditionalformattingiconset.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
