# AWS::QuickSight::Template ColumnConfiguration<a name="aws-properties-quicksight-template-columnconfiguration"></a>

The general configuration of a column\.

## Syntax<a name="aws-properties-quicksight-template-columnconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-columnconfiguration-syntax.json"></a>

```
{
  "[ColorsConfiguration](#cfn-quicksight-template-columnconfiguration-colorsconfiguration)" : ColorsConfiguration,
  "[Column](#cfn-quicksight-template-columnconfiguration-column)" : ColumnIdentifier,
  "[FormatConfiguration](#cfn-quicksight-template-columnconfiguration-formatconfiguration)" : FormatConfiguration,
  "[Role](#cfn-quicksight-template-columnconfiguration-role)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-columnconfiguration-syntax.yaml"></a>

```
  [ColorsConfiguration](#cfn-quicksight-template-columnconfiguration-colorsconfiguration):
    ColorsConfiguration
  [Column](#cfn-quicksight-template-columnconfiguration-column):
    ColumnIdentifier
  [FormatConfiguration](#cfn-quicksight-template-columnconfiguration-formatconfiguration):
    FormatConfiguration
  [Role](#cfn-quicksight-template-columnconfiguration-role): String
```

## Properties<a name="aws-properties-quicksight-template-columnconfiguration-properties"></a>

`ColorsConfiguration` <a name="cfn-quicksight-template-columnconfiguration-colorsconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [ColorsConfiguration](aws-properties-quicksight-template-colorsconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-template-columnconfiguration-column"></a>
The column\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-template-columnconfiguration-formatconfiguration"></a>
The format configuration of a column\.  
_Required_: No  
_Type_: [FormatConfiguration](aws-properties-quicksight-template-formatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Role` <a name="cfn-quicksight-template-columnconfiguration-role"></a>
The role of the column\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DIMENSION | MEASURE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
