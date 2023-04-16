# AWS::QuickSight::Template DestinationParameterValueConfiguration<a name="aws-properties-quicksight-template-destinationparametervalueconfiguration"></a>

The configuration of destination parameter values\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-destinationparametervalueconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-destinationparametervalueconfiguration-syntax.json"></a>

```
{
  "[CustomValuesConfiguration](#cfn-quicksight-template-destinationparametervalueconfiguration-customvaluesconfiguration)" : CustomValuesConfiguration,
  "[SelectAllValueOptions](#cfn-quicksight-template-destinationparametervalueconfiguration-selectallvalueoptions)" : String,
  "[SourceField](#cfn-quicksight-template-destinationparametervalueconfiguration-sourcefield)" : String,
  "[SourceParameterName](#cfn-quicksight-template-destinationparametervalueconfiguration-sourceparametername)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-destinationparametervalueconfiguration-syntax.yaml"></a>

```
  [CustomValuesConfiguration](#cfn-quicksight-template-destinationparametervalueconfiguration-customvaluesconfiguration):
    CustomValuesConfiguration
  [SelectAllValueOptions](#cfn-quicksight-template-destinationparametervalueconfiguration-selectallvalueoptions): String
  [SourceField](#cfn-quicksight-template-destinationparametervalueconfiguration-sourcefield): String
  [SourceParameterName](#cfn-quicksight-template-destinationparametervalueconfiguration-sourceparametername): String
```

## Properties<a name="aws-properties-quicksight-template-destinationparametervalueconfiguration-properties"></a>

`CustomValuesConfiguration` <a name="cfn-quicksight-template-destinationparametervalueconfiguration-customvaluesconfiguration"></a>
The configuration of custom values for destination parameter in `DestinationParameterValueConfiguration`\.  
_Required_: No  
_Type_: [CustomValuesConfiguration](aws-properties-quicksight-template-customvaluesconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAllValueOptions` <a name="cfn-quicksight-template-destinationparametervalueconfiguration-selectallvalueoptions"></a>
The configuration that selects all options\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ALL_VALUES`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceField` <a name="cfn-quicksight-template-destinationparametervalueconfiguration-sourcefield"></a>
The source field ID of the destination parameter\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-template-destinationparametervalueconfiguration-sourceparametername"></a>
The source parameter name of the destination parameter\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
