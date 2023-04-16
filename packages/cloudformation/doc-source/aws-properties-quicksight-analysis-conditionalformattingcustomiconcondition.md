# AWS::QuickSight::Analysis ConditionalFormattingCustomIconCondition<a name="aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition"></a>

Determines the custom condition for an icon set\.

## Syntax<a name="aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-color)" : String,
  "[DisplayConfiguration](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-displayconfiguration)" : ConditionalFormattingIconDisplayConfiguration,
  "[Expression](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-expression)" : String,
  "[IconOptions](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-iconoptions)" : ConditionalFormattingCustomIconOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-color): String
  [DisplayConfiguration](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-displayconfiguration):
    ConditionalFormattingIconDisplayConfiguration
  [Expression](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-expression): String
  [IconOptions](#cfn-quicksight-analysis-conditionalformattingcustomiconcondition-iconoptions):
    ConditionalFormattingCustomIconOptions
```

## Properties<a name="aws-properties-quicksight-analysis-conditionalformattingcustomiconcondition-properties"></a>

`Color` <a name="cfn-quicksight-analysis-conditionalformattingcustomiconcondition-color"></a>
Determines the color of the icon\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayConfiguration` <a name="cfn-quicksight-analysis-conditionalformattingcustomiconcondition-displayconfiguration"></a>
Determines the icon display configuration\.  
_Required_: No  
_Type_: [ConditionalFormattingIconDisplayConfiguration](aws-properties-quicksight-analysis-conditionalformattingicondisplayconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-analysis-conditionalformattingcustomiconcondition-expression"></a>
The expression that determines the condition of the icon set\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IconOptions` <a name="cfn-quicksight-analysis-conditionalformattingcustomiconcondition-iconoptions"></a>
Custom icon options for an icon set\.  
_Required_: Yes  
_Type_: [ConditionalFormattingCustomIconOptions](aws-properties-quicksight-analysis-conditionalformattingcustomiconoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
