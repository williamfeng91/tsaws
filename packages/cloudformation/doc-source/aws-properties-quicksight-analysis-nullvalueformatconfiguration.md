# AWS::QuickSight::Analysis NullValueFormatConfiguration<a name="aws-properties-quicksight-analysis-nullvalueformatconfiguration"></a>

The options that determine the null value format configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-nullvalueformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-nullvalueformatconfiguration-syntax.json"></a>

```
{
  "[NullString](#cfn-quicksight-analysis-nullvalueformatconfiguration-nullstring)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-nullvalueformatconfiguration-syntax.yaml"></a>

```
  [NullString](#cfn-quicksight-analysis-nullvalueformatconfiguration-nullstring):
    String
```

## Properties<a name="aws-properties-quicksight-analysis-nullvalueformatconfiguration-properties"></a>

`NullString` <a name="cfn-quicksight-analysis-nullvalueformatconfiguration-nullstring"></a>
Determines the null string of null values\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
