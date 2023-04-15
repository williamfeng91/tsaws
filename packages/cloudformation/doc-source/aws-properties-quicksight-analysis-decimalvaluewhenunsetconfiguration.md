# AWS::QuickSight::Analysis DecimalValueWhenUnsetConfiguration<a name="aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration"></a>

The configuration that defines the default value of a `Decimal` parameter when a value has not been set\.

## Syntax<a name="aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration-syntax.json"></a>

```
{
  "[CustomValue](#cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-customvalue)" : Double,
  "[ValueWhenUnsetOption](#cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-valuewhenunsetoption)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration-syntax.yaml"></a>

```
  [CustomValue](#cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-customvalue): Double
  [ValueWhenUnsetOption](#cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-valuewhenunsetoption): String
```

## Properties<a name="aws-properties-quicksight-analysis-decimalvaluewhenunsetconfiguration-properties"></a>

`CustomValue` <a name="cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-customvalue"></a>
A custom value that's used when the value of a parameter isn't set\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueWhenUnsetOption` <a name="cfn-quicksight-analysis-decimalvaluewhenunsetconfiguration-valuewhenunsetoption"></a>
The built\-in options for default values\. The value can be one of the following:

- `RECOMMENDED`: The recommended value\.
- `NULL`: The `NULL` value\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `NULL | RECOMMENDED_VALUE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
