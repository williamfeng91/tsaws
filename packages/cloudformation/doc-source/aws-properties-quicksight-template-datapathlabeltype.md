# AWS::QuickSight::Template DataPathLabelType<a name="aws-properties-quicksight-template-datapathlabeltype"></a>

The option that specifies individual data values for labels\.

## Syntax<a name="aws-properties-quicksight-template-datapathlabeltype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-datapathlabeltype-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-template-datapathlabeltype-fieldid)" : String,
  "[FieldValue](#cfn-quicksight-template-datapathlabeltype-fieldvalue)" : String,
  "[Visibility](#cfn-quicksight-template-datapathlabeltype-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-datapathlabeltype-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-template-datapathlabeltype-fieldid): String
  [FieldValue](#cfn-quicksight-template-datapathlabeltype-fieldvalue): String
  [Visibility](#cfn-quicksight-template-datapathlabeltype-visibility): String
```

## Properties<a name="aws-properties-quicksight-template-datapathlabeltype-properties"></a>

`FieldId` <a name="cfn-quicksight-template-datapathlabeltype-fieldid"></a>
The field ID of the field that the data label needs to be applied to\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldValue` <a name="cfn-quicksight-template-datapathlabeltype-fieldvalue"></a>
The actual value of the field that is labeled\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-template-datapathlabeltype-visibility"></a>
The visibility of the data label\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
