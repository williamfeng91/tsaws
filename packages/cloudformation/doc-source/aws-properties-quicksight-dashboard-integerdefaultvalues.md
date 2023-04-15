# AWS::QuickSight::Dashboard IntegerDefaultValues<a name="aws-properties-quicksight-dashboard-integerdefaultvalues"></a>

The default values of the `IntegerParameterDeclaration`\.

## Syntax<a name="aws-properties-quicksight-dashboard-integerdefaultvalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-integerdefaultvalues-syntax.json"></a>

```
{
  "[DynamicValue](#cfn-quicksight-dashboard-integerdefaultvalues-dynamicvalue)" : DynamicDefaultValue,
  "[StaticValues](#cfn-quicksight-dashboard-integerdefaultvalues-staticvalues)" : [ Double, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-integerdefaultvalues-syntax.yaml"></a>

```
  [DynamicValue](#cfn-quicksight-dashboard-integerdefaultvalues-dynamicvalue):
    DynamicDefaultValue
  [StaticValues](#cfn-quicksight-dashboard-integerdefaultvalues-staticvalues):
    - Double
```

## Properties<a name="aws-properties-quicksight-dashboard-integerdefaultvalues-properties"></a>

`DynamicValue` <a name="cfn-quicksight-dashboard-integerdefaultvalues-dynamicvalue"></a>
The dynamic value of the `IntegerDefaultValues`\. Different defaults are displayed according to users, groups, and values mapping\.  
_Required_: No  
_Type_: [DynamicDefaultValue](aws-properties-quicksight-dashboard-dynamicdefaultvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValues` <a name="cfn-quicksight-dashboard-integerdefaultvalues-staticvalues"></a>
The static values of the `IntegerDefaultValues`\.  
_Required_: No  
_Type_: List of Double  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
