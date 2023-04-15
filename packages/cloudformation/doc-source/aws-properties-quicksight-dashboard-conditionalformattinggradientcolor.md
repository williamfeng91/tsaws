# AWS::QuickSight::Dashboard ConditionalFormattingGradientColor<a name="aws-properties-quicksight-dashboard-conditionalformattinggradientcolor"></a>

Formatting configuration for gradient color\.

## Syntax<a name="aws-properties-quicksight-dashboard-conditionalformattinggradientcolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-conditionalformattinggradientcolor-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-dashboard-conditionalformattinggradientcolor-color)" : GradientColor,
  "[Expression](#cfn-quicksight-dashboard-conditionalformattinggradientcolor-expression)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-conditionalformattinggradientcolor-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-dashboard-conditionalformattinggradientcolor-color):
    GradientColor
  [Expression](#cfn-quicksight-dashboard-conditionalformattinggradientcolor-expression): String
```

## Properties<a name="aws-properties-quicksight-dashboard-conditionalformattinggradientcolor-properties"></a>

`Color` <a name="cfn-quicksight-dashboard-conditionalformattinggradientcolor-color"></a>
Determines the color\.  
_Required_: Yes  
_Type_: [GradientColor](aws-properties-quicksight-dashboard-gradientcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-dashboard-conditionalformattinggradientcolor-expression"></a>
The expression that determines the formatting configuration for gradient color\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
