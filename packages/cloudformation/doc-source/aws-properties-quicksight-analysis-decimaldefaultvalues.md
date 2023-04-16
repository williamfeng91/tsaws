# AWS::QuickSight::Analysis DecimalDefaultValues<a name="aws-properties-quicksight-analysis-decimaldefaultvalues"></a>

The default values of the `DecimalParameterDeclaration`\.

## Syntax<a name="aws-properties-quicksight-analysis-decimaldefaultvalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-decimaldefaultvalues-syntax.json"></a>

```
{
  "[DynamicValue](#cfn-quicksight-analysis-decimaldefaultvalues-dynamicvalue)" : DynamicDefaultValue,
  "[StaticValues](#cfn-quicksight-analysis-decimaldefaultvalues-staticvalues)" : [ Double, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-decimaldefaultvalues-syntax.yaml"></a>

```
  [DynamicValue](#cfn-quicksight-analysis-decimaldefaultvalues-dynamicvalue):
    DynamicDefaultValue
  [StaticValues](#cfn-quicksight-analysis-decimaldefaultvalues-staticvalues):
    - Double
```

## Properties<a name="aws-properties-quicksight-analysis-decimaldefaultvalues-properties"></a>

`DynamicValue` <a name="cfn-quicksight-analysis-decimaldefaultvalues-dynamicvalue"></a>
The dynamic value of the `DecimalDefaultValues`\. Different defaults are displayed according to users, groups, and values mapping\.  
_Required_: No  
_Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValues` <a name="cfn-quicksight-analysis-decimaldefaultvalues-staticvalues"></a>
The static values of the `DecimalDefaultValues`\.  
_Required_: No  
_Type_: List of Double  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
