# AWS::QuickSight::Template AnchorDateConfiguration<a name="aws-properties-quicksight-template-anchordateconfiguration"></a>

The date configuration of the filter\.

## Syntax<a name="aws-properties-quicksight-template-anchordateconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-anchordateconfiguration-syntax.json"></a>

```
{
  "[AnchorOption](#cfn-quicksight-template-anchordateconfiguration-anchoroption)" : String,
  "[ParameterName](#cfn-quicksight-template-anchordateconfiguration-parametername)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-anchordateconfiguration-syntax.yaml"></a>

```
  [AnchorOption](#cfn-quicksight-template-anchordateconfiguration-anchoroption): String
  [ParameterName](#cfn-quicksight-template-anchordateconfiguration-parametername): String
```

## Properties<a name="aws-properties-quicksight-template-anchordateconfiguration-properties"></a>

`AnchorOption` <a name="cfn-quicksight-template-anchordateconfiguration-anchoroption"></a>
The options for the date configuration\. Choose one of the options below:

- `NOW`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `NOW`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterName` <a name="cfn-quicksight-template-anchordateconfiguration-parametername"></a>
The name of the parameter that is used for the anchor date configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
