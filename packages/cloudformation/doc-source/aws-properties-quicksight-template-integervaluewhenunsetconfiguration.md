# AWS::QuickSight::Template IntegerValueWhenUnsetConfiguration<a name="aws-properties-quicksight-template-integervaluewhenunsetconfiguration"></a>

A parameter declaration for the `Integer` data type\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-integervaluewhenunsetconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-integervaluewhenunsetconfiguration-syntax.json"></a>

```
{
  "[CustomValue](#cfn-quicksight-template-integervaluewhenunsetconfiguration-customvalue)" : Double,
  "[ValueWhenUnsetOption](#cfn-quicksight-template-integervaluewhenunsetconfiguration-valuewhenunsetoption)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-integervaluewhenunsetconfiguration-syntax.yaml"></a>

```
  [CustomValue](#cfn-quicksight-template-integervaluewhenunsetconfiguration-customvalue): Double
  [ValueWhenUnsetOption](#cfn-quicksight-template-integervaluewhenunsetconfiguration-valuewhenunsetoption): String
```

## Properties<a name="aws-properties-quicksight-template-integervaluewhenunsetconfiguration-properties"></a>

`CustomValue` <a name="cfn-quicksight-template-integervaluewhenunsetconfiguration-customvalue"></a>
A custom value that's used when the value of a parameter isn't set\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueWhenUnsetOption` <a name="cfn-quicksight-template-integervaluewhenunsetconfiguration-valuewhenunsetoption"></a>
The built\-in options for default values\. The value can be one of the following:

- `RECOMMENDED`: The recommended value\.
- `NULL`: The `NULL` value\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `NULL | RECOMMENDED_VALUE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
