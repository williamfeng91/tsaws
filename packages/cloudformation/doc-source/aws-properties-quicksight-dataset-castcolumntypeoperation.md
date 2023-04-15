# AWS::QuickSight::DataSet CastColumnTypeOperation<a name="aws-properties-quicksight-dataset-castcolumntypeoperation"></a>

A transform operation that casts a column to a different type\.

## Syntax<a name="aws-properties-quicksight-dataset-castcolumntypeoperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-castcolumntypeoperation-syntax.json"></a>

```
{
  "[ColumnName](#cfn-quicksight-dataset-castcolumntypeoperation-columnname)" : String,
  "[Format](#cfn-quicksight-dataset-castcolumntypeoperation-format)" : String,
  "[NewColumnType](#cfn-quicksight-dataset-castcolumntypeoperation-newcolumntype)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-castcolumntypeoperation-syntax.yaml"></a>

```
  [ColumnName](#cfn-quicksight-dataset-castcolumntypeoperation-columnname): String
  [Format](#cfn-quicksight-dataset-castcolumntypeoperation-format): String
  [NewColumnType](#cfn-quicksight-dataset-castcolumntypeoperation-newcolumntype): String
```

## Properties<a name="aws-properties-quicksight-dataset-castcolumntypeoperation-properties"></a>

`ColumnName` <a name="cfn-quicksight-dataset-castcolumntypeoperation-columnname"></a>
Column name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Format` <a name="cfn-quicksight-dataset-castcolumntypeoperation-format"></a>
When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format\.  
_Required_: No  
_Type_: String  
_Maximum_: `32`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NewColumnType` <a name="cfn-quicksight-dataset-castcolumntypeoperation-newcolumntype"></a>
New column data type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DATETIME | DECIMAL | INTEGER | STRING`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
