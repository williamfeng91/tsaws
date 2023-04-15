# AWS::QuickSight::Template FilterGroup<a name="aws-properties-quicksight-template-filtergroup"></a>

A grouping of individual filters\. Filter groups are applied to the same group of visuals\.

For more information, see [Adding filter conditions \(group filters\) with AND and OR operators](https://docs.aws.amazon.com/quicksight/latest/user/add-a-compound-filter.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-filtergroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filtergroup-syntax.json"></a>

```
{
  "[CrossDataset](#cfn-quicksight-template-filtergroup-crossdataset)" : String,
  "[FilterGroupId](#cfn-quicksight-template-filtergroup-filtergroupid)" : String,
  "[Filters](#cfn-quicksight-template-filtergroup-filters)" : [ Filter, ... ],
  "[ScopeConfiguration](#cfn-quicksight-template-filtergroup-scopeconfiguration)" : FilterScopeConfiguration,
  "[Status](#cfn-quicksight-template-filtergroup-status)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-filtergroup-syntax.yaml"></a>

```
  [CrossDataset](#cfn-quicksight-template-filtergroup-crossdataset): String
  [FilterGroupId](#cfn-quicksight-template-filtergroup-filtergroupid): String
  [Filters](#cfn-quicksight-template-filtergroup-filters):
    - Filter
  [ScopeConfiguration](#cfn-quicksight-template-filtergroup-scopeconfiguration):
    FilterScopeConfiguration
  [Status](#cfn-quicksight-template-filtergroup-status): String
```

## Properties<a name="aws-properties-quicksight-template-filtergroup-properties"></a>

`CrossDataset` <a name="cfn-quicksight-template-filtergroup-crossdataset"></a>
The filter new feature which can apply filter group to all data sets\. Choose one of the following options:

- `ALL_DATASETS`
- `SINGLE_DATASET`
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_DATASETS | SINGLE_DATASET`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterGroupId` <a name="cfn-quicksight-template-filtergroup-filtergroupid"></a>
The value that uniquely identifies a `FilterGroup` within a dashboard, template, or analysis\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Filters` <a name="cfn-quicksight-template-filtergroup-filters"></a>
The list of filters that are present in a `FilterGroup`\.  
_Required_: Yes  
_Type_: List of [Filter](aws-properties-quicksight-template-filter.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScopeConfiguration` <a name="cfn-quicksight-template-filtergroup-scopeconfiguration"></a>
The configuration that specifies what scope to apply to a `FilterGroup`\.  
This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.  
_Required_: Yes  
_Type_: [FilterScopeConfiguration](aws-properties-quicksight-template-filterscopeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-template-filtergroup-status"></a>
The status of the `FilterGroup`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
