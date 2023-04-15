# AWS::QuickSight::Template KPIConfiguration<a name="aws-properties-quicksight-template-kpiconfiguration"></a>

The configuration of a KPI visual\.

## Syntax<a name="aws-properties-quicksight-template-kpiconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-kpiconfiguration-syntax.json"></a>

```
{
  "[FieldWells](#cfn-quicksight-template-kpiconfiguration-fieldwells)" : KPIFieldWells,
  "[KPIOptions](#cfn-quicksight-template-kpiconfiguration-kpioptions)" : KPIOptions,
  "[SortConfiguration](#cfn-quicksight-template-kpiconfiguration-sortconfiguration)" : KPISortConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-kpiconfiguration-syntax.yaml"></a>

```
  [FieldWells](#cfn-quicksight-template-kpiconfiguration-fieldwells):
    KPIFieldWells
  [KPIOptions](#cfn-quicksight-template-kpiconfiguration-kpioptions):
    KPIOptions
  [SortConfiguration](#cfn-quicksight-template-kpiconfiguration-sortconfiguration):
    KPISortConfiguration
```

## Properties<a name="aws-properties-quicksight-template-kpiconfiguration-properties"></a>

`FieldWells` <a name="cfn-quicksight-template-kpiconfiguration-fieldwells"></a>
The field well configuration of a KPI visual\.  
_Required_: No  
_Type_: [KPIFieldWells](aws-properties-quicksight-template-kpifieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KPIOptions` <a name="cfn-quicksight-template-kpiconfiguration-kpioptions"></a>
The options that determine the presentation of a KPI visual\.  
_Required_: No  
_Type_: [KPIOptions](aws-properties-quicksight-template-kpioptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-template-kpiconfiguration-sortconfiguration"></a>
The sort configuration of a KPI visual\.  
_Required_: No  
_Type_: [KPISortConfiguration](aws-properties-quicksight-template-kpisortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
