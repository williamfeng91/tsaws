# AWS::QuickSight::Template DataBarsOptions<a name="aws-properties-quicksight-template-databarsoptions"></a>

The options for data bars\.

## Syntax<a name="aws-properties-quicksight-template-databarsoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-databarsoptions-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-template-databarsoptions-fieldid)" : String,
  "[NegativeColor](#cfn-quicksight-template-databarsoptions-negativecolor)" : String,
  "[PositiveColor](#cfn-quicksight-template-databarsoptions-positivecolor)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-databarsoptions-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-template-databarsoptions-fieldid): String
  [NegativeColor](#cfn-quicksight-template-databarsoptions-negativecolor): String
  [PositiveColor](#cfn-quicksight-template-databarsoptions-positivecolor): String
```

## Properties<a name="aws-properties-quicksight-template-databarsoptions-properties"></a>

`FieldId` <a name="cfn-quicksight-template-databarsoptions-fieldid"></a>
The field ID for the data bars options\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NegativeColor` <a name="cfn-quicksight-template-databarsoptions-negativecolor"></a>
The color of the negative data bar\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PositiveColor` <a name="cfn-quicksight-template-databarsoptions-positivecolor"></a>
The color of the positive data bar\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
