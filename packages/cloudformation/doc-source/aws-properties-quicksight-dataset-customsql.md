# AWS::QuickSight::DataSet CustomSql<a name="aws-properties-quicksight-dataset-customsql"></a>

A physical table type built from the results of the custom SQL query\.

## Syntax<a name="aws-properties-quicksight-dataset-customsql-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-customsql-syntax.json"></a>

```
{
  "[Columns](#cfn-quicksight-dataset-customsql-columns)" : [ InputColumn, ... ],
  "[DataSourceArn](#cfn-quicksight-dataset-customsql-datasourcearn)" : String,
  "[Name](#cfn-quicksight-dataset-customsql-name)" : String,
  "[SqlQuery](#cfn-quicksight-dataset-customsql-sqlquery)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-customsql-syntax.yaml"></a>

```
  [Columns](#cfn-quicksight-dataset-customsql-columns):
    - InputColumn
  [DataSourceArn](#cfn-quicksight-dataset-customsql-datasourcearn): String
  [Name](#cfn-quicksight-dataset-customsql-name): String
  [SqlQuery](#cfn-quicksight-dataset-customsql-sqlquery): String
```

## Properties<a name="aws-properties-quicksight-dataset-customsql-properties"></a>

`Columns` <a name="cfn-quicksight-dataset-customsql-columns"></a>
The column schema from the SQL query result set\.  
_Required_: Yes  
_Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSourceArn` <a name="cfn-quicksight-dataset-customsql-datasourcearn"></a>
The Amazon Resource Name \(ARN\) of the data source\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dataset-customsql-name"></a>
A display name for the SQL query result\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SqlQuery` <a name="cfn-quicksight-dataset-customsql-sqlquery"></a>
The SQL query\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `65536`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
