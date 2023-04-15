# AWS::QuickSight::Dashboard GeospatialMapConfiguration<a name="aws-properties-quicksight-dashboard-geospatialmapconfiguration"></a>

The configuration of a `GeospatialMapVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-geospatialmapconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-geospatialmapconfiguration-syntax.json"></a>

```
{
  "[FieldWells](#cfn-quicksight-dashboard-geospatialmapconfiguration-fieldwells)" : GeospatialMapFieldWells,
  "[Legend](#cfn-quicksight-dashboard-geospatialmapconfiguration-legend)" : LegendOptions,
  "[MapStyleOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-mapstyleoptions)" : GeospatialMapStyleOptions,
  "[PointStyleOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-pointstyleoptions)" : GeospatialPointStyleOptions,
  "[Tooltip](#cfn-quicksight-dashboard-geospatialmapconfiguration-tooltip)" : TooltipOptions,
  "[VisualPalette](#cfn-quicksight-dashboard-geospatialmapconfiguration-visualpalette)" : VisualPalette,
  "[WindowOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-windowoptions)" : GeospatialWindowOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-geospatialmapconfiguration-syntax.yaml"></a>

```
  [FieldWells](#cfn-quicksight-dashboard-geospatialmapconfiguration-fieldwells):
    GeospatialMapFieldWells
  [Legend](#cfn-quicksight-dashboard-geospatialmapconfiguration-legend):
    LegendOptions
  [MapStyleOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-mapstyleoptions):
    GeospatialMapStyleOptions
  [PointStyleOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-pointstyleoptions):
    GeospatialPointStyleOptions
  [Tooltip](#cfn-quicksight-dashboard-geospatialmapconfiguration-tooltip):
    TooltipOptions
  [VisualPalette](#cfn-quicksight-dashboard-geospatialmapconfiguration-visualpalette):
    VisualPalette
  [WindowOptions](#cfn-quicksight-dashboard-geospatialmapconfiguration-windowoptions):
    GeospatialWindowOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-geospatialmapconfiguration-properties"></a>

`FieldWells` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [GeospatialMapFieldWells](aws-properties-quicksight-dashboard-geospatialmapfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Legend` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-legend"></a>
The legend display setup of the visual\.  
_Required_: No  
_Type_: [LegendOptions](aws-properties-quicksight-dashboard-legendoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MapStyleOptions` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-mapstyleoptions"></a>
The map style options of the geospatial map\.  
_Required_: No  
_Type_: [GeospatialMapStyleOptions](aws-properties-quicksight-dashboard-geospatialmapstyleoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PointStyleOptions` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-pointstyleoptions"></a>
The point style options of the geospatial map\.  
_Required_: No  
_Type_: [GeospatialPointStyleOptions](aws-properties-quicksight-dashboard-geospatialpointstyleoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tooltip` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-tooltip"></a>
The tooltip display setup of the visual\.  
_Required_: No  
_Type_: [TooltipOptions](aws-properties-quicksight-dashboard-tooltipoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPalette` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-visualpalette"></a>
Property description not available\.  
_Required_: No  
_Type_: [VisualPalette](aws-properties-quicksight-dashboard-visualpalette.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WindowOptions` <a name="cfn-quicksight-dashboard-geospatialmapconfiguration-windowoptions"></a>
The window options of the geospatial map\.  
_Required_: No  
_Type_: [GeospatialWindowOptions](aws-properties-quicksight-dashboard-geospatialwindowoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
