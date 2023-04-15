# AWS::QuickSight::Analysis CalculatedMeasureField<a name="aws-properties-quicksight-analysis-calculatedmeasurefield"></a>

The table calculation measure field for pivot tables\.

## Syntax<a name="aws-properties-quicksight-analysis-calculatedmeasurefield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-calculatedmeasurefield-syntax.json"></a>

```
{
  "[Expression](#cfn-quicksight-analysis-calculatedmeasurefield-expression)" : String,
  "[FieldId](#cfn-quicksight-analysis-calculatedmeasurefield-fieldid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-calculatedmeasurefield-syntax.yaml"></a>

```
  [Expression](#cfn-quicksight-analysis-calculatedmeasurefield-expression): String
  [FieldId](#cfn-quicksight-analysis-calculatedmeasurefield-fieldid): String
```

## Properties<a name="aws-properties-quicksight-analysis-calculatedmeasurefield-properties"></a>

`Expression` <a name="cfn-quicksight-analysis-calculatedmeasurefield-expression"></a>
The expression in the table calculation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-calculatedmeasurefield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
