# AWS::QuickSight::Template ItemsLimitConfiguration<a name="aws-properties-quicksight-template-itemslimitconfiguration"></a>

The limit configuration of the visual display for an axis\.

## Syntax<a name="aws-properties-quicksight-template-itemslimitconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-itemslimitconfiguration-syntax.json"></a>

```
{
  "[ItemsLimit](#cfn-quicksight-template-itemslimitconfiguration-itemslimit)" : Double,
  "[OtherCategories](#cfn-quicksight-template-itemslimitconfiguration-othercategories)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-itemslimitconfiguration-syntax.yaml"></a>

```
  [ItemsLimit](#cfn-quicksight-template-itemslimitconfiguration-itemslimit): Double
  [OtherCategories](#cfn-quicksight-template-itemslimitconfiguration-othercategories): String
```

## Properties<a name="aws-properties-quicksight-template-itemslimitconfiguration-properties"></a>

`ItemsLimit` <a name="cfn-quicksight-template-itemslimitconfiguration-itemslimit"></a>
The limit on how many items of a field are showed in the chart\. For example, the number of slices that are displayed in a pie chart\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OtherCategories` <a name="cfn-quicksight-template-itemslimitconfiguration-othercategories"></a>
The `Show other` of an axis in the chart\. Choose one of the following options:

- `INCLUDE`
- `EXCLUDE`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `EXCLUDE | INCLUDE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)