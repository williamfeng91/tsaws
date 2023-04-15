# AWS::QuickSight::Template TextConditionalFormat<a name="aws-properties-quicksight-template-textconditionalformat"></a>

The conditional formatting for the text\.

## Syntax<a name="aws-properties-quicksight-template-textconditionalformat-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-textconditionalformat-syntax.json"></a>

```
{
  "[BackgroundColor](#cfn-quicksight-template-textconditionalformat-backgroundcolor)" : ConditionalFormattingColor,
  "[Icon](#cfn-quicksight-template-textconditionalformat-icon)" : ConditionalFormattingIcon,
  "[TextColor](#cfn-quicksight-template-textconditionalformat-textcolor)" : ConditionalFormattingColor
}
```

### YAML<a name="aws-properties-quicksight-template-textconditionalformat-syntax.yaml"></a>

```
  [BackgroundColor](#cfn-quicksight-template-textconditionalformat-backgroundcolor):
    ConditionalFormattingColor
  [Icon](#cfn-quicksight-template-textconditionalformat-icon):
    ConditionalFormattingIcon
  [TextColor](#cfn-quicksight-template-textconditionalformat-textcolor):
    ConditionalFormattingColor
```

## Properties<a name="aws-properties-quicksight-template-textconditionalformat-properties"></a>

`BackgroundColor` <a name="cfn-quicksight-template-textconditionalformat-backgroundcolor"></a>
The conditional formatting for the text background color\.  
_Required_: No  
_Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Icon` <a name="cfn-quicksight-template-textconditionalformat-icon"></a>
The conditional formatting for the icon\.  
_Required_: No  
_Type_: [ConditionalFormattingIcon](aws-properties-quicksight-template-conditionalformattingicon.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextColor` <a name="cfn-quicksight-template-textconditionalformat-textcolor"></a>
The conditional formatting for the text color\.  
_Required_: No  
_Type_: [ConditionalFormattingColor](aws-properties-quicksight-template-conditionalformattingcolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)