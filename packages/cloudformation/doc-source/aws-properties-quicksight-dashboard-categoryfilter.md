# AWS::QuickSight::Dashboard CategoryFilter<a name="aws-properties-quicksight-dashboard-categoryfilter"></a>

A `CategoryFilter` filters text values\.

For more information, see [Adding text filters](https://docs.aws.amazon.com/quicksight/latest/user/add-a-text-filter-data-prep.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-dashboard-categoryfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-categoryfilter-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-dashboard-categoryfilter-column)" : ColumnIdentifier,
  "[Configuration](#cfn-quicksight-dashboard-categoryfilter-configuration)" : CategoryFilterConfiguration,
  "[FilterId](#cfn-quicksight-dashboard-categoryfilter-filterid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-categoryfilter-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-dashboard-categoryfilter-column):
    ColumnIdentifier
  [Configuration](#cfn-quicksight-dashboard-categoryfilter-configuration):
    CategoryFilterConfiguration
  [FilterId](#cfn-quicksight-dashboard-categoryfilter-filterid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-categoryfilter-properties"></a>

`Column` <a name="cfn-quicksight-dashboard-categoryfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Configuration` <a name="cfn-quicksight-dashboard-categoryfilter-configuration"></a>
The configuration for a `CategoryFilter`\.  
_Required_: Yes  
_Type_: [CategoryFilterConfiguration](aws-properties-quicksight-dashboard-categoryfilterconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterId` <a name="cfn-quicksight-dashboard-categoryfilter-filterid"></a>
An identifier that uniquely identifies a filter within a dashboard, analysis, or template\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
