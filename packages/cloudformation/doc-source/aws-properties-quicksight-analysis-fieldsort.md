# AWS::QuickSight::Analysis FieldSort<a name="aws-properties-quicksight-analysis-fieldsort"></a>

The sort configuration for a field in a field well\.

## Syntax<a name="aws-properties-quicksight-analysis-fieldsort-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-fieldsort-syntax.json"></a>

```
{
  "[Direction](#cfn-quicksight-analysis-fieldsort-direction)" : String,
  "[FieldId](#cfn-quicksight-analysis-fieldsort-fieldid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-fieldsort-syntax.yaml"></a>

```
  [Direction](#cfn-quicksight-analysis-fieldsort-direction): String
  [FieldId](#cfn-quicksight-analysis-fieldsort-fieldid): String
```

## Properties<a name="aws-properties-quicksight-analysis-fieldsort-properties"></a>

`Direction` <a name="cfn-quicksight-analysis-fieldsort-direction"></a>
The sort direction\. Choose one of the following options:

- `ASC`: Ascending
- `DESC`: Descending
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ASC | DESC`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-fieldsort-fieldid"></a>
The sort configuration target field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)