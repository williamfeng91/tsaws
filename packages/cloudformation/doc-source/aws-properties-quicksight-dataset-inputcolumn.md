# AWS::QuickSight::DataSet InputColumn<a name="aws-properties-quicksight-dataset-inputcolumn"></a>

Metadata for a column that is used as the input of a transform operation\.

## Syntax<a name="aws-properties-quicksight-dataset-inputcolumn-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-inputcolumn-syntax.json"></a>

```
{
  "[Name](#cfn-quicksight-dataset-inputcolumn-name)" : String,
  "[Type](#cfn-quicksight-dataset-inputcolumn-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-inputcolumn-syntax.yaml"></a>

```
  [Name](#cfn-quicksight-dataset-inputcolumn-name): String
  [Type](#cfn-quicksight-dataset-inputcolumn-type): String
```

## Properties<a name="aws-properties-quicksight-dataset-inputcolumn-properties"></a>

`Name` <a name="cfn-quicksight-dataset-inputcolumn-name"></a>
The name of this column in the underlying data source\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-dataset-inputcolumn-type"></a>
The data type of the column\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BIT | BOOLEAN | DATETIME | DECIMAL | INTEGER | JSON | STRING`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
