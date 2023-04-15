# AWS::QuickSight::Template RelativeDateTimeControlDisplayOptions<a name="aws-properties-quicksight-template-relativedatetimecontroldisplayoptions"></a>

The display options of a control\.

## Syntax<a name="aws-properties-quicksight-template-relativedatetimecontroldisplayoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-relativedatetimecontroldisplayoptions-syntax.json"></a>

```
{
  "[DateTimeFormat](#cfn-quicksight-template-relativedatetimecontroldisplayoptions-datetimeformat)" : String,
  "[TitleOptions](#cfn-quicksight-template-relativedatetimecontroldisplayoptions-titleoptions)" : LabelOptions
}
```

### YAML<a name="aws-properties-quicksight-template-relativedatetimecontroldisplayoptions-syntax.yaml"></a>

```
  [DateTimeFormat](#cfn-quicksight-template-relativedatetimecontroldisplayoptions-datetimeformat): String
  [TitleOptions](#cfn-quicksight-template-relativedatetimecontroldisplayoptions-titleoptions):
    LabelOptions
```

## Properties<a name="aws-properties-quicksight-template-relativedatetimecontroldisplayoptions-properties"></a>

`DateTimeFormat` <a name="cfn-quicksight-template-relativedatetimecontroldisplayoptions-datetimeformat"></a>
Customize how dates are formatted in controls\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TitleOptions` <a name="cfn-quicksight-template-relativedatetimecontroldisplayoptions-titleoptions"></a>
The options to configure the title visibility, name, and font size\.  
_Required_: No  
_Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
