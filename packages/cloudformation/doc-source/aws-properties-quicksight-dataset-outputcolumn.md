# AWS::QuickSight::DataSet OutputColumn<a name="aws-properties-quicksight-dataset-outputcolumn"></a>

Output column\.

## Syntax<a name="aws-properties-quicksight-dataset-outputcolumn-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-outputcolumn-syntax.json"></a>

```
{
  "[Description](#cfn-quicksight-dataset-outputcolumn-description)" : String,
  "[Name](#cfn-quicksight-dataset-outputcolumn-name)" : String,
  "[Type](#cfn-quicksight-dataset-outputcolumn-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-outputcolumn-syntax.yaml"></a>

```
  [Description](#cfn-quicksight-dataset-outputcolumn-description): String
  [Name](#cfn-quicksight-dataset-outputcolumn-name): String
  [Type](#cfn-quicksight-dataset-outputcolumn-type): String
```

## Properties<a name="aws-properties-quicksight-dataset-outputcolumn-properties"></a>

`Description` <a name="cfn-quicksight-dataset-outputcolumn-description"></a>
A description for a column\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dataset-outputcolumn-name"></a>
A display name for the dataset\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-dataset-outputcolumn-type"></a>
Type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DATETIME | DECIMAL | INTEGER | STRING`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
