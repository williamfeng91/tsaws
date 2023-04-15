# AWS::QuickSight::Analysis PanelTitleOptions<a name="aws-properties-quicksight-analysis-paneltitleoptions"></a>

The options that determine the title styles for each small multiples panel\.

## Syntax<a name="aws-properties-quicksight-analysis-paneltitleoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-paneltitleoptions-syntax.json"></a>

```
{
  "[FontConfiguration](#cfn-quicksight-analysis-paneltitleoptions-fontconfiguration)" : FontConfiguration,
  "[HorizontalTextAlignment](#cfn-quicksight-analysis-paneltitleoptions-horizontaltextalignment)" : String,
  "[Visibility](#cfn-quicksight-analysis-paneltitleoptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-paneltitleoptions-syntax.yaml"></a>

```
  [FontConfiguration](#cfn-quicksight-analysis-paneltitleoptions-fontconfiguration):
    FontConfiguration
  [HorizontalTextAlignment](#cfn-quicksight-analysis-paneltitleoptions-horizontaltextalignment): String
  [Visibility](#cfn-quicksight-analysis-paneltitleoptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-paneltitleoptions-properties"></a>

`FontConfiguration` <a name="cfn-quicksight-analysis-paneltitleoptions-fontconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HorizontalTextAlignment` <a name="cfn-quicksight-analysis-paneltitleoptions-horizontaltextalignment"></a>
Sets the horizontal text alignment of the title within each panel\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTO | CENTER | LEFT | RIGHT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-paneltitleoptions-visibility"></a>
Determines whether or not panel titles are displayed\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
