# AWS::QuickSight::Analysis ReferenceLineStyleConfiguration<a name="aws-properties-quicksight-analysis-referencelinestyleconfiguration"></a>

The style configuration of the reference line\.

## Syntax<a name="aws-properties-quicksight-analysis-referencelinestyleconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-referencelinestyleconfiguration-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-analysis-referencelinestyleconfiguration-color)" : String,
  "[Pattern](#cfn-quicksight-analysis-referencelinestyleconfiguration-pattern)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-referencelinestyleconfiguration-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-analysis-referencelinestyleconfiguration-color): String
  [Pattern](#cfn-quicksight-analysis-referencelinestyleconfiguration-pattern): String
```

## Properties<a name="aws-properties-quicksight-analysis-referencelinestyleconfiguration-properties"></a>

`Color` <a name="cfn-quicksight-analysis-referencelinestyleconfiguration-color"></a>
The hex color of the reference line\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Pattern` <a name="cfn-quicksight-analysis-referencelinestyleconfiguration-pattern"></a>
The pattern type of the line style\. Choose one of the following options:

- `SOLID`
- `DASHED`
- `DOTTED`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `DASHED | DOTTED | SOLID`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
