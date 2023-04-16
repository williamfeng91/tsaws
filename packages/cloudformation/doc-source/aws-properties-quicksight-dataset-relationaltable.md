# AWS::QuickSight::DataSet RelationalTable<a name="aws-properties-quicksight-dataset-relationaltable"></a>

A physical table type for relational data sources\.

## Syntax<a name="aws-properties-quicksight-dataset-relationaltable-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-relationaltable-syntax.json"></a>

```
{
  "[Catalog](#cfn-quicksight-dataset-relationaltable-catalog)" : String,
  "[DataSourceArn](#cfn-quicksight-dataset-relationaltable-datasourcearn)" : String,
  "[InputColumns](#cfn-quicksight-dataset-relationaltable-inputcolumns)" : [ InputColumn, ... ],
  "[Name](#cfn-quicksight-dataset-relationaltable-name)" : String,
  "[Schema](#cfn-quicksight-dataset-relationaltable-schema)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-relationaltable-syntax.yaml"></a>

```
  [Catalog](#cfn-quicksight-dataset-relationaltable-catalog): String
  [DataSourceArn](#cfn-quicksight-dataset-relationaltable-datasourcearn): String
  [InputColumns](#cfn-quicksight-dataset-relationaltable-inputcolumns):
    - InputColumn
  [Name](#cfn-quicksight-dataset-relationaltable-name): String
  [Schema](#cfn-quicksight-dataset-relationaltable-schema): String
```

## Properties<a name="aws-properties-quicksight-dataset-relationaltable-properties"></a>

`Catalog` <a name="cfn-quicksight-dataset-relationaltable-catalog"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSourceArn` <a name="cfn-quicksight-dataset-relationaltable-datasourcearn"></a>
The Amazon Resource Name \(ARN\) for the data source\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputColumns` <a name="cfn-quicksight-dataset-relationaltable-inputcolumns"></a>
The column schema of the table\.  
_Required_: Yes  
_Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dataset-relationaltable-name"></a>
The name of the relational table\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Schema` <a name="cfn-quicksight-dataset-relationaltable-schema"></a>
The schema name\. This name applies to certain relational database engines\.  
_Required_: No  
_Type_: String  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
