# AWS::QuickSight::Template SheetDefinition<a name="aws-properties-quicksight-template-sheetdefinition"></a>

A sheet is an object that contains a set of visuals that are viewed together on one page in a paginated report\. Every analysis and dashboard must contain at least one sheet\.

## Syntax<a name="aws-properties-quicksight-template-sheetdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-sheetdefinition-syntax.json"></a>

```
{
  "[ContentType](#cfn-quicksight-template-sheetdefinition-contenttype)" : String,
  "[Description](#cfn-quicksight-template-sheetdefinition-description)" : String,
  "[FilterControls](#cfn-quicksight-template-sheetdefinition-filtercontrols)" : [ FilterControl, ... ],
  "[Layouts](#cfn-quicksight-template-sheetdefinition-layouts)" : [ Layout, ... ],
  "[Name](#cfn-quicksight-template-sheetdefinition-name)" : String,
  "[ParameterControls](#cfn-quicksight-template-sheetdefinition-parametercontrols)" : [ ParameterControl, ... ],
  "[SheetControlLayouts](#cfn-quicksight-template-sheetdefinition-sheetcontrollayouts)" : [ SheetControlLayout, ... ],
  "[SheetId](#cfn-quicksight-template-sheetdefinition-sheetid)" : String,
  "[TextBoxes](#cfn-quicksight-template-sheetdefinition-textboxes)" : [ SheetTextBox, ... ],
  "[Title](#cfn-quicksight-template-sheetdefinition-title)" : String,
  "[Visuals](#cfn-quicksight-template-sheetdefinition-visuals)" : [ Visual, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-sheetdefinition-syntax.yaml"></a>

```
  [ContentType](#cfn-quicksight-template-sheetdefinition-contenttype): String
  [Description](#cfn-quicksight-template-sheetdefinition-description): String
  [FilterControls](#cfn-quicksight-template-sheetdefinition-filtercontrols):
    - FilterControl
  [Layouts](#cfn-quicksight-template-sheetdefinition-layouts):
    - Layout
  [Name](#cfn-quicksight-template-sheetdefinition-name): String
  [ParameterControls](#cfn-quicksight-template-sheetdefinition-parametercontrols):
    - ParameterControl
  [SheetControlLayouts](#cfn-quicksight-template-sheetdefinition-sheetcontrollayouts):
    - SheetControlLayout
  [SheetId](#cfn-quicksight-template-sheetdefinition-sheetid): String
  [TextBoxes](#cfn-quicksight-template-sheetdefinition-textboxes):
    - SheetTextBox
  [Title](#cfn-quicksight-template-sheetdefinition-title): String
  [Visuals](#cfn-quicksight-template-sheetdefinition-visuals):
    - Visual
```

## Properties<a name="aws-properties-quicksight-template-sheetdefinition-properties"></a>

`ContentType` <a name="cfn-quicksight-template-sheetdefinition-contenttype"></a>
The layout content type of the sheet\. Choose one of the following options:

- `PAGINATED`: Creates a sheet for a paginated report\.
- `INTERACTIVE`: Creates a sheet for an interactive dashboard\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `INTERACTIVE | PAGINATED`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-quicksight-template-sheetdefinition-description"></a>
A description of the sheet\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControls` <a name="cfn-quicksight-template-sheetdefinition-filtercontrols"></a>
The list of filter controls that are on a sheet\.  
For more information, see [Adding filter controls to analysis sheets](https://docs.aws.amazon.com/quicksight/latest/user/filter-controls.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [FilterControl](aws-properties-quicksight-template-filtercontrol.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Layouts` <a name="cfn-quicksight-template-sheetdefinition-layouts"></a>
Layouts define how the components of a sheet are arranged\.  
For more information, see [Types of layout](https://docs.aws.amazon.com/quicksight/latest/user/types-of-layout.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [Layout](aws-properties-quicksight-template-layout.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-template-sheetdefinition-name"></a>
The name of the sheet\. This name is displayed on the sheet's tab in the Amazon QuickSight console\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControls` <a name="cfn-quicksight-template-sheetdefinition-parametercontrols"></a>
The list of parameter controls that are on a sheet\.  
For more information, see [Using a Control with a Parameter in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-controls.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [ParameterControl](aws-properties-quicksight-template-parametercontrol.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetControlLayouts` <a name="cfn-quicksight-template-sheetdefinition-sheetcontrollayouts"></a>
The control layouts of the sheet\.  
_Required_: No  
_Type_: List of [SheetControlLayout](aws-properties-quicksight-template-sheetcontrollayout.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetId` <a name="cfn-quicksight-template-sheetdefinition-sheetid"></a>
The unique identifier of a sheet\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextBoxes` <a name="cfn-quicksight-template-sheetdefinition-textboxes"></a>
The text boxes that are on a sheet\.  
_Required_: No  
_Type_: List of [SheetTextBox](aws-properties-quicksight-template-sheettextbox.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-sheetdefinition-title"></a>
The title of the sheet\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visuals` <a name="cfn-quicksight-template-sheetdefinition-visuals"></a>
A list of the visuals that are on a sheet\. Visual placement is determined by the layout of the sheet\.  
_Required_: No  
_Type_: List of [Visual](aws-properties-quicksight-template-visual.md)  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
