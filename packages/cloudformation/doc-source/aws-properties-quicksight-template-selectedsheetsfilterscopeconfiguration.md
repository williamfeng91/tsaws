# AWS::QuickSight::Template SelectedSheetsFilterScopeConfiguration<a name="aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration"></a>

The configuration for applying a filter to specific sheets or visuals\. You can apply this filter to multiple visuals that are on one sheet or to all visuals on a sheet\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration-syntax.json"></a>

```
{
  "[SheetVisualScopingConfigurations](#cfn-quicksight-template-selectedsheetsfilterscopeconfiguration-sheetvisualscopingconfigurations)" : [ SheetVisualScopingConfiguration, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration-syntax.yaml"></a>

```
  [SheetVisualScopingConfigurations](#cfn-quicksight-template-selectedsheetsfilterscopeconfiguration-sheetvisualscopingconfigurations):
    - SheetVisualScopingConfiguration
```

## Properties<a name="aws-properties-quicksight-template-selectedsheetsfilterscopeconfiguration-properties"></a>

`SheetVisualScopingConfigurations` <a name="cfn-quicksight-template-selectedsheetsfilterscopeconfiguration-sheetvisualscopingconfigurations"></a>
The sheet ID and visual IDs of the sheet and visuals that the filter is applied to\.  
_Required_: No  
_Type_: List of [SheetVisualScopingConfiguration](aws-properties-quicksight-template-sheetvisualscopingconfiguration.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)