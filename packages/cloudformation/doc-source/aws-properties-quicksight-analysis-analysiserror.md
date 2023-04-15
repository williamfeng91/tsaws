# AWS::QuickSight::Analysis AnalysisError<a name="aws-properties-quicksight-analysis-analysiserror"></a>

Analysis error\.

## Syntax<a name="aws-properties-quicksight-analysis-analysiserror-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-analysiserror-syntax.json"></a>

```
{
  "[Message](#cfn-quicksight-analysis-analysiserror-message)" : String,
  "[Type](#cfn-quicksight-analysis-analysiserror-type)" : String,
  "[ViolatedEntities](#cfn-quicksight-analysis-analysiserror-violatedentities)" : [ Entity, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-analysiserror-syntax.yaml"></a>

```
  [Message](#cfn-quicksight-analysis-analysiserror-message): String
  [Type](#cfn-quicksight-analysis-analysiserror-type): String
  [ViolatedEntities](#cfn-quicksight-analysis-analysiserror-violatedentities):
    - Entity
```

## Properties<a name="aws-properties-quicksight-analysis-analysiserror-properties"></a>

`Message` <a name="cfn-quicksight-analysis-analysiserror-message"></a>
The message associated with the analysis error\.  
_Required_: No  
_Type_: String  
_Pattern_: `.*\S.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-analysiserror-type"></a>
The type of the analysis error\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ACCESS_DENIED | COLUMN_GEOGRAPHIC_ROLE_MISMATCH | COLUMN_REPLACEMENT_MISSING | COLUMN_TYPE_MISMATCH | DATA_SET_NOT_FOUND | INTERNAL_FAILURE | PARAMETER_NOT_FOUND | PARAMETER_TYPE_INVALID | PARAMETER_VALUE_INCOMPATIBLE | SOURCE_NOT_FOUND`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ViolatedEntities` <a name="cfn-quicksight-analysis-analysiserror-violatedentities"></a>
Lists the violated entities that caused the analysis error  
_Required_: No  
_Type_: List of [Entity](aws-properties-quicksight-analysis-entity.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)