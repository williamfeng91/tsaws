# AWS::QuickSight::Analysis KPIConfiguration<a name="aws-properties-quicksight-analysis-kpiconfiguration"></a>

The configuration of a KPI visual\.

## Syntax<a name="aws-properties-quicksight-analysis-kpiconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-kpiconfiguration-syntax.json"></a>

```
{
  "[FieldWells](#cfn-quicksight-analysis-kpiconfiguration-fieldwells)" : KPIFieldWells,
  "[KPIOptions](#cfn-quicksight-analysis-kpiconfiguration-kpioptions)" : KPIOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-kpiconfiguration-sortconfiguration)" : KPISortConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-kpiconfiguration-syntax.yaml"></a>

```
  [FieldWells](#cfn-quicksight-analysis-kpiconfiguration-fieldwells):
    KPIFieldWells
  [KPIOptions](#cfn-quicksight-analysis-kpiconfiguration-kpioptions):
    KPIOptions
  [SortConfiguration](#cfn-quicksight-analysis-kpiconfiguration-sortconfiguration):
    KPISortConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-kpiconfiguration-properties"></a>

`FieldWells` <a name="cfn-quicksight-analysis-kpiconfiguration-fieldwells"></a>
The field well configuration of a KPI visual\.  
_Required_: No  
_Type_: [KPIFieldWells](aws-properties-quicksight-analysis-kpifieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KPIOptions` <a name="cfn-quicksight-analysis-kpiconfiguration-kpioptions"></a>
The options that determine the presentation of a KPI visual\.  
_Required_: No  
_Type_: [KPIOptions](aws-properties-quicksight-analysis-kpioptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-kpiconfiguration-sortconfiguration"></a>
The sort configuration of a KPI visual\.  
_Required_: No  
_Type_: [KPISortConfiguration](aws-properties-quicksight-analysis-kpisortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
