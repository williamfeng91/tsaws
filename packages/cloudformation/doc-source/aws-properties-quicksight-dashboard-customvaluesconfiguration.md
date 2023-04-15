# AWS::QuickSight::Dashboard CustomValuesConfiguration<a name="aws-properties-quicksight-dashboard-customvaluesconfiguration"></a>

The configuration of custom values for the destination parameter in `DestinationParameterValueConfiguration`\.

## Syntax<a name="aws-properties-quicksight-dashboard-customvaluesconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-customvaluesconfiguration-syntax.json"></a>

```
{
  "[CustomValues](#cfn-quicksight-dashboard-customvaluesconfiguration-customvalues)" : CustomParameterValues,
  "[IncludeNullValue](#cfn-quicksight-dashboard-customvaluesconfiguration-includenullvalue)" : Boolean
}
```

### YAML<a name="aws-properties-quicksight-dashboard-customvaluesconfiguration-syntax.yaml"></a>

```
  [CustomValues](#cfn-quicksight-dashboard-customvaluesconfiguration-customvalues):
    CustomParameterValues
  [IncludeNullValue](#cfn-quicksight-dashboard-customvaluesconfiguration-includenullvalue): Boolean
```

## Properties<a name="aws-properties-quicksight-dashboard-customvaluesconfiguration-properties"></a>

`CustomValues` <a name="cfn-quicksight-dashboard-customvaluesconfiguration-customvalues"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [CustomParameterValues](aws-properties-quicksight-dashboard-customparametervalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeNullValue` <a name="cfn-quicksight-dashboard-customvaluesconfiguration-includenullvalue"></a>
Includes the null value in custom action parameter values\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)