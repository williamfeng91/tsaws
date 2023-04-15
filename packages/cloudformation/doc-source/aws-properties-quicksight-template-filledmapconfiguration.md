# AWS::QuickSight::Template FilledMapConfiguration<a name="aws-properties-quicksight-template-filledmapconfiguration"></a>

The configuration for a `FilledMapVisual`\.

## Syntax<a name="aws-properties-quicksight-template-filledmapconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filledmapconfiguration-syntax.json"></a>

```
{
  "[FieldWells](#cfn-quicksight-template-filledmapconfiguration-fieldwells)" : FilledMapFieldWells,
  "[Legend](#cfn-quicksight-template-filledmapconfiguration-legend)" : LegendOptions,
  "[MapStyleOptions](#cfn-quicksight-template-filledmapconfiguration-mapstyleoptions)" : GeospatialMapStyleOptions,
  "[SortConfiguration](#cfn-quicksight-template-filledmapconfiguration-sortconfiguration)" : FilledMapSortConfiguration,
  "[Tooltip](#cfn-quicksight-template-filledmapconfiguration-tooltip)" : TooltipOptions,
  "[WindowOptions](#cfn-quicksight-template-filledmapconfiguration-windowoptions)" : GeospatialWindowOptions
}
```

### YAML<a name="aws-properties-quicksight-template-filledmapconfiguration-syntax.yaml"></a>

```
  [FieldWells](#cfn-quicksight-template-filledmapconfiguration-fieldwells):
    FilledMapFieldWells
  [Legend](#cfn-quicksight-template-filledmapconfiguration-legend):
    LegendOptions
  [MapStyleOptions](#cfn-quicksight-template-filledmapconfiguration-mapstyleoptions):
    GeospatialMapStyleOptions
  [SortConfiguration](#cfn-quicksight-template-filledmapconfiguration-sortconfiguration):
    FilledMapSortConfiguration
  [Tooltip](#cfn-quicksight-template-filledmapconfiguration-tooltip):
    TooltipOptions
  [WindowOptions](#cfn-quicksight-template-filledmapconfiguration-windowoptions):
    GeospatialWindowOptions
```

## Properties<a name="aws-properties-quicksight-template-filledmapconfiguration-properties"></a>

`FieldWells` <a name="cfn-quicksight-template-filledmapconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [FilledMapFieldWells](aws-properties-quicksight-template-filledmapfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-template-filledmapconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-template-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MapStyleOptions` <a name="cfn-quicksight-template-filledmapconfiguration-mapstyleoptions"></a>
The map style options of the filled map visual\.  
_Required_: No  
_Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-template-geospatialmapstyleoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-template-filledmapconfiguration-sortconfiguration"></a>
The sort configuration of a `FilledMapVisual`\.  
_Required_: No  
_Type_: [FilledMapSortConfiguration](aws-properties-quicksight-template-filledmapsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-template-filledmapconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-template-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WindowOptions` <a name="cfn-quicksight-template-filledmapconfiguration-windowoptions"></a>
The window options of the filled map visual\.  
_Required_: No  
_Type_: [GeospatialWindowOptions](aws-properties-quicksight-template-geospatialwindowoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
