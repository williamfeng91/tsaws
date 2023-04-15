# AWS::QuickSight::Template DataSetConfiguration<a name="aws-properties-quicksight-template-datasetconfiguration"></a>

Dataset configuration\.

## Syntax<a name="aws-properties-quicksight-template-datasetconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-datasetconfiguration-syntax.json"></a>

```
{
  "[ColumnGroupSchemaList](#cfn-quicksight-template-datasetconfiguration-columngroupschemalist)" : [ ColumnGroupSchema, ... ],
  "[DataSetSchema](#cfn-quicksight-template-datasetconfiguration-datasetschema)" : DataSetSchema,
  "[Placeholder](#cfn-quicksight-template-datasetconfiguration-placeholder)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-datasetconfiguration-syntax.yaml"></a>

```
  [ColumnGroupSchemaList](#cfn-quicksight-template-datasetconfiguration-columngroupschemalist):
    - ColumnGroupSchema
  [DataSetSchema](#cfn-quicksight-template-datasetconfiguration-datasetschema):
    DataSetSchema
  [Placeholder](#cfn-quicksight-template-datasetconfiguration-placeholder): String
```

## Properties<a name="aws-properties-quicksight-template-datasetconfiguration-properties"></a>

`ColumnGroupSchemaList` <a name="cfn-quicksight-template-datasetconfiguration-columngroupschemalist"></a>
A structure containing the list of column group schemas\.  
_Required_: No  
_Type_: List of [ColumnGroupSchema](aws-properties-quicksight-template-columngroupschema.md)  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetSchema` <a name="cfn-quicksight-template-datasetconfiguration-datasetschema"></a>
Dataset schema\.  
_Required_: No  
_Type_: [DataSetSchema](aws-properties-quicksight-template-datasetschema.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Placeholder` <a name="cfn-quicksight-template-datasetconfiguration-placeholder"></a>
Placeholder\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
