# AWS::QuickSight::Template StringDefaultValues<a name="aws-properties-quicksight-template-stringdefaultvalues"></a>

The default values of the `StringParameterDeclaration`\.

## Syntax<a name="aws-properties-quicksight-template-stringdefaultvalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-stringdefaultvalues-syntax.json"></a>

```
{
  "[DynamicValue](#cfn-quicksight-template-stringdefaultvalues-dynamicvalue)" : DynamicDefaultValue,
  "[StaticValues](#cfn-quicksight-template-stringdefaultvalues-staticvalues)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-stringdefaultvalues-syntax.yaml"></a>

```
  [DynamicValue](#cfn-quicksight-template-stringdefaultvalues-dynamicvalue):
    DynamicDefaultValue
  [StaticValues](#cfn-quicksight-template-stringdefaultvalues-staticvalues):
    - String
```

## Properties<a name="aws-properties-quicksight-template-stringdefaultvalues-properties"></a>

`DynamicValue` <a name="cfn-quicksight-template-stringdefaultvalues-dynamicvalue"></a>
The dynamic value of the `StringDefaultValues`\. Different defaults displayed according to users, groups, and values mapping\.  
_Required_: No  
_Type_: [DynamicDefaultValue](aws-properties-quicksight-template-dynamicdefaultvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValues` <a name="cfn-quicksight-template-stringdefaultvalues-staticvalues"></a>
The static values of the `DecimalDefaultValues`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
