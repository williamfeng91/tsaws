# AWS::DynamoDB::Table Csv<a name="aws-properties-dynamodb-table-csv"></a>

The options for imported source files in CSV format\. The values are Delimiter and HeaderList\.

## Syntax<a name="aws-properties-dynamodb-table-csv-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-table-csv-syntax.json"></a>

```
{
  "[Delimiter](#cfn-dynamodb-table-csv-delimiter)" : String,
  "[HeaderList](#cfn-dynamodb-table-csv-headerlist)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-dynamodb-table-csv-syntax.yaml"></a>

```
  [Delimiter](#cfn-dynamodb-table-csv-delimiter): String
  [HeaderList](#cfn-dynamodb-table-csv-headerlist):
    - String
```

## Properties<a name="aws-properties-dynamodb-table-csv-properties"></a>

`Delimiter` <a name="cfn-dynamodb-table-csv-delimiter"></a>
The delimiter used for separating items in the CSV file being imported\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1`  
_Pattern_: `[,;:|\t ]`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`HeaderList` <a name="cfn-dynamodb-table-csv-headerlist"></a>
List of the headers used to specify a common header for all source CSV files being imported\. If this field is specified then the first line of each CSV file is treated as data instead of the header\. If this field is not specified the the first line of each CSV file is treated as the header\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `255`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)