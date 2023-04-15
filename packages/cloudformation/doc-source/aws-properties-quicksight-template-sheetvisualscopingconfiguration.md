# AWS::QuickSight::Template SheetVisualScopingConfiguration<a name="aws-properties-quicksight-template-sheetvisualscopingconfiguration"></a>

The filter that is applied to the options\.

## Syntax<a name="aws-properties-quicksight-template-sheetvisualscopingconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-sheetvisualscopingconfiguration-syntax.json"></a>

```
{
  "[Scope](#cfn-quicksight-template-sheetvisualscopingconfiguration-scope)" : String,
  "[SheetId](#cfn-quicksight-template-sheetvisualscopingconfiguration-sheetid)" : String,
  "[VisualIds](#cfn-quicksight-template-sheetvisualscopingconfiguration-visualids)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-sheetvisualscopingconfiguration-syntax.yaml"></a>

```
  [Scope](#cfn-quicksight-template-sheetvisualscopingconfiguration-scope): String
  [SheetId](#cfn-quicksight-template-sheetvisualscopingconfiguration-sheetid): String
  [VisualIds](#cfn-quicksight-template-sheetvisualscopingconfiguration-visualids):
    - String
```

## Properties<a name="aws-properties-quicksight-template-sheetvisualscopingconfiguration-properties"></a>

`Scope` <a name="cfn-quicksight-template-sheetvisualscopingconfiguration-scope"></a>
The scope of the applied entities\. Choose one of the following options:

- `ALL_VISUALS`
- `SELECTED_VISUALS`
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_VISUALS | SELECTED_VISUALS`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetId` <a name="cfn-quicksight-template-sheetvisualscopingconfiguration-sheetid"></a>
The selected sheet that the filter is applied to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualIds` <a name="cfn-quicksight-template-sheetvisualscopingconfiguration-visualids"></a>
The selected visuals that the filter is applied to\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
