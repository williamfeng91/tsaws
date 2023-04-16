# AWS::QuickSight::Analysis DateTimeDefaultValues<a name="aws-properties-quicksight-analysis-datetimedefaultvalues"></a>

The default values of the `DateTimeParameterDeclaration`\.

## Syntax<a name="aws-properties-quicksight-analysis-datetimedefaultvalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-datetimedefaultvalues-syntax.json"></a>

```
{
  "[DynamicValue](#cfn-quicksight-analysis-datetimedefaultvalues-dynamicvalue)" : DynamicDefaultValue,
  "[RollingDate](#cfn-quicksight-analysis-datetimedefaultvalues-rollingdate)" : RollingDateConfiguration,
  "[StaticValues](#cfn-quicksight-analysis-datetimedefaultvalues-staticvalues)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-datetimedefaultvalues-syntax.yaml"></a>

```
  [DynamicValue](#cfn-quicksight-analysis-datetimedefaultvalues-dynamicvalue):
    DynamicDefaultValue
  [RollingDate](#cfn-quicksight-analysis-datetimedefaultvalues-rollingdate):
    RollingDateConfiguration
  [StaticValues](#cfn-quicksight-analysis-datetimedefaultvalues-staticvalues):
    - String
```

## Properties<a name="aws-properties-quicksight-analysis-datetimedefaultvalues-properties"></a>

`DynamicValue` <a name="cfn-quicksight-analysis-datetimedefaultvalues-dynamicvalue"></a>
The dynamic value of the `DataTimeDefaultValues`\. Different defaults are displayed according to users, groups, and values mapping\.  
_Required_: No  
_Type_: [DynamicDefaultValue](aws-properties-quicksight-analysis-dynamicdefaultvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RollingDate` <a name="cfn-quicksight-analysis-datetimedefaultvalues-rollingdate"></a>
The rolling date of the `DataTimeDefaultValues`\. The date is determined from the dataset based on input expression\.  
_Required_: No  
_Type_: [RollingDateConfiguration](aws-properties-quicksight-analysis-rollingdateconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValues` <a name="cfn-quicksight-analysis-datetimedefaultvalues-staticvalues"></a>
The static values of the `DataTimeDefaultValues`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
