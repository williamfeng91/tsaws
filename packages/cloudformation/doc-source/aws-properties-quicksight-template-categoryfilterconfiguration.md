# AWS::QuickSight::Template CategoryFilterConfiguration<a name="aws-properties-quicksight-template-categoryfilterconfiguration"></a>

The configuration for a `CategoryFilter`\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-categoryfilterconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-categoryfilterconfiguration-syntax.json"></a>

```
{
  "[CustomFilterConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-customfilterconfiguration)" : CustomFilterConfiguration,
  "[CustomFilterListConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-customfilterlistconfiguration)" : CustomFilterListConfiguration,
  "[FilterListConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-filterlistconfiguration)" : FilterListConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-categoryfilterconfiguration-syntax.yaml"></a>

```
  [CustomFilterConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-customfilterconfiguration):
    CustomFilterConfiguration
  [CustomFilterListConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-customfilterlistconfiguration):
    CustomFilterListConfiguration
  [FilterListConfiguration](#cfn-quicksight-template-categoryfilterconfiguration-filterlistconfiguration):
    FilterListConfiguration
```

## Properties<a name="aws-properties-quicksight-template-categoryfilterconfiguration-properties"></a>

`CustomFilterConfiguration` <a name="cfn-quicksight-template-categoryfilterconfiguration-customfilterconfiguration"></a>
A custom filter that filters based on a single value\. This filter can be partially matched\.  
_Required_: No  
_Type_: [CustomFilterConfiguration](aws-properties-quicksight-template-customfilterconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomFilterListConfiguration` <a name="cfn-quicksight-template-categoryfilterconfiguration-customfilterlistconfiguration"></a>
A list of custom filter values\. In the Amazon QuickSight console, this filter type is called a custom filter list\.  
_Required_: No  
_Type_: [CustomFilterListConfiguration](aws-properties-quicksight-template-customfilterlistconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterListConfiguration` <a name="cfn-quicksight-template-categoryfilterconfiguration-filterlistconfiguration"></a>
A list of filter configurations\. In the Amazon QuickSight console, this filter type is called a filter list\.  
_Required_: No  
_Type_: [FilterListConfiguration](aws-properties-quicksight-template-filterlistconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
