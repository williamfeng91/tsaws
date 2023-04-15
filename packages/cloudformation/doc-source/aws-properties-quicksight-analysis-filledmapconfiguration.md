# AWS::QuickSight::Analysis FilledMapConfiguration<a name="aws-properties-quicksight-analysis-filledmapconfiguration"></a>

The configuration for a `FilledMapVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-filledmapconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-filledmapconfiguration-syntax.json"></a>

```
{
  "[FieldWells](#cfn-quicksight-analysis-filledmapconfiguration-fieldwells)" : FilledMapFieldWells,
  "[Legend](#cfn-quicksight-analysis-filledmapconfiguration-legend)" : LegendOptions,
  "[MapStyleOptions](#cfn-quicksight-analysis-filledmapconfiguration-mapstyleoptions)" : GeospatialMapStyleOptions,
  "[SortConfiguration](#cfn-quicksight-analysis-filledmapconfiguration-sortconfiguration)" : FilledMapSortConfiguration,
  "[Tooltip](#cfn-quicksight-analysis-filledmapconfiguration-tooltip)" : TooltipOptions,
  "[WindowOptions](#cfn-quicksight-analysis-filledmapconfiguration-windowoptions)" : GeospatialWindowOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-filledmapconfiguration-syntax.yaml"></a>

```
  [FieldWells](#cfn-quicksight-analysis-filledmapconfiguration-fieldwells):
    FilledMapFieldWells
  [Legend](#cfn-quicksight-analysis-filledmapconfiguration-legend):
    LegendOptions
  [MapStyleOptions](#cfn-quicksight-analysis-filledmapconfiguration-mapstyleoptions):
    GeospatialMapStyleOptions
  [SortConfiguration](#cfn-quicksight-analysis-filledmapconfiguration-sortconfiguration):
    FilledMapSortConfiguration
  [Tooltip](#cfn-quicksight-analysis-filledmapconfiguration-tooltip):
    TooltipOptions
  [WindowOptions](#cfn-quicksight-analysis-filledmapconfiguration-windowoptions):
    GeospatialWindowOptions
```

## Properties<a name="aws-properties-quicksight-analysis-filledmapconfiguration-properties"></a>

`FieldWells` <a name="cfn-quicksight-analysis-filledmapconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [FilledMapFieldWells](aws-properties-quicksight-analysis-filledmapfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-analysis-filledmapconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-analysis-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MapStyleOptions` <a name="cfn-quicksight-analysis-filledmapconfiguration-mapstyleoptions"></a>
The map style options of the filled map visual\.  
_Required_: No  
_Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-analysis-geospatialmapstyleoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-filledmapconfiguration-sortconfiguration"></a>
The sort configuration of a `FilledMapVisual`\.  
_Required_: No  
_Type_: [FilledMapSortConfiguration](aws-properties-quicksight-analysis-filledmapsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-analysis-filledmapconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-analysis-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WindowOptions` <a name="cfn-quicksight-analysis-filledmapconfiguration-windowoptions"></a>
The window options of the filled map visual\.  
_Required_: No  
_Type_: [GeospatialWindowOptions](aws-properties-quicksight-analysis-geospatialwindowoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
