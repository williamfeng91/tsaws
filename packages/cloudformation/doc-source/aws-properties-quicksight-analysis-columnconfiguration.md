# AWS::QuickSight::Analysis ColumnConfiguration<a name="aws-properties-quicksight-analysis-columnconfiguration"></a>

The general configuration of a column\.

## Syntax<a name="aws-properties-quicksight-analysis-columnconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-columnconfiguration-syntax.json"></a>

```
{
  "[ColorsConfiguration](#cfn-quicksight-analysis-columnconfiguration-colorsconfiguration)" : ColorsConfiguration,
  "[Column](#cfn-quicksight-analysis-columnconfiguration-column)" : ColumnIdentifier,
  "[FormatConfiguration](#cfn-quicksight-analysis-columnconfiguration-formatconfiguration)" : FormatConfiguration,
  "[Role](#cfn-quicksight-analysis-columnconfiguration-role)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-columnconfiguration-syntax.yaml"></a>

```
  [ColorsConfiguration](#cfn-quicksight-analysis-columnconfiguration-colorsconfiguration):
    ColorsConfiguration
  [Column](#cfn-quicksight-analysis-columnconfiguration-column):
    ColumnIdentifier
  [FormatConfiguration](#cfn-quicksight-analysis-columnconfiguration-formatconfiguration):
    FormatConfiguration
  [Role](#cfn-quicksight-analysis-columnconfiguration-role): String
```

## Properties<a name="aws-properties-quicksight-analysis-columnconfiguration-properties"></a>

`ColorsConfiguration` <a name="cfn-quicksight-analysis-columnconfiguration-colorsconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [ColorsConfiguration](aws-properties-quicksight-analysis-colorsconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-columnconfiguration-column"></a>
The column\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-analysis-columnconfiguration-formatconfiguration"></a>
The format configuration of a column\.  
_Required_: No  
_Type_: [FormatConfiguration](aws-properties-quicksight-analysis-formatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Role` <a name="cfn-quicksight-analysis-columnconfiguration-role"></a>
The role of the column\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DIMENSION | MEASURE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
