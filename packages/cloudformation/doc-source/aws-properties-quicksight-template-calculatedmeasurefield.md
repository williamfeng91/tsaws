# AWS::QuickSight::Template CalculatedMeasureField<a name="aws-properties-quicksight-template-calculatedmeasurefield"></a>

The table calculation measure field for pivot tables\.

## Syntax<a name="aws-properties-quicksight-template-calculatedmeasurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-calculatedmeasurefield-syntax.json"></a>

```
{
  "[Expression](#cfn-quicksight-template-calculatedmeasurefield-expression)" : String,
  "[FieldId](#cfn-quicksight-template-calculatedmeasurefield-fieldid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-calculatedmeasurefield-syntax.yaml"></a>

```
  [Expression](#cfn-quicksight-template-calculatedmeasurefield-expression): String
  [FieldId](#cfn-quicksight-template-calculatedmeasurefield-fieldid): String
```

## Properties<a name="aws-properties-quicksight-template-calculatedmeasurefield-properties"></a>

`Expression` <a name="cfn-quicksight-template-calculatedmeasurefield-expression"></a>
The expression in the table calculation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-template-calculatedmeasurefield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
