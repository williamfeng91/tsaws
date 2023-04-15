# AWS::QuickSight::Template NumericSeparatorConfiguration<a name="aws-properties-quicksight-template-numericseparatorconfiguration"></a>

The options that determine the numeric separator configuration\.

## Syntax<a name="aws-properties-quicksight-template-numericseparatorconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-numericseparatorconfiguration-syntax.json"></a>

```
{
  "[DecimalSeparator](#cfn-quicksight-template-numericseparatorconfiguration-decimalseparator)" : String,
  "[ThousandsSeparator](#cfn-quicksight-template-numericseparatorconfiguration-thousandsseparator)" : ThousandSeparatorOptions
}
```

### YAML<a name="aws-properties-quicksight-template-numericseparatorconfiguration-syntax.yaml"></a>

```
  [DecimalSeparator](#cfn-quicksight-template-numericseparatorconfiguration-decimalseparator): String
  [ThousandsSeparator](#cfn-quicksight-template-numericseparatorconfiguration-thousandsseparator):
    ThousandSeparatorOptions
```

## Properties<a name="aws-properties-quicksight-template-numericseparatorconfiguration-properties"></a>

`DecimalSeparator` <a name="cfn-quicksight-template-numericseparatorconfiguration-decimalseparator"></a>
Determines the decimal separator\.  
_Required_: No  
_Type_: String  
_Allowed values_: `COMMA | DOT | SPACE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThousandsSeparator` <a name="cfn-quicksight-template-numericseparatorconfiguration-thousandsseparator"></a>
The options that determine the thousands separator configuration\.  
_Required_: No  
_Type_: [ThousandSeparatorOptions](aws-properties-quicksight-template-thousandseparatoroptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
