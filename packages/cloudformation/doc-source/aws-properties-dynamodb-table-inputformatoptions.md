# AWS::DynamoDB::Table InputFormatOptions<a name="aws-properties-dynamodb-table-inputformatoptions"></a>

The format options for the data that was imported into the target table\. There is one value, CsvOption\.

## Syntax<a name="aws-properties-dynamodb-table-inputformatoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-table-inputformatoptions-syntax.json"></a>

```
{
  "[Csv](#cfn-dynamodb-table-inputformatoptions-csv)" : Csv
}
```

### YAML<a name="aws-properties-dynamodb-table-inputformatoptions-syntax.yaml"></a>

```
  [Csv](#cfn-dynamodb-table-inputformatoptions-csv):
    Csv
```

## Properties<a name="aws-properties-dynamodb-table-inputformatoptions-properties"></a>

`Csv` <a name="cfn-dynamodb-table-inputformatoptions-csv"></a>
The options for imported source files in CSV format\. The values are Delimiter and HeaderList\.  
_Required_: No  
_Type_: [Csv](aws-properties-dynamodb-table-csv.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
