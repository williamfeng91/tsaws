# AWS::QuickSight::Dashboard DashboardVersionDefinition<a name="aws-properties-quicksight-dashboard-dashboardversiondefinition"></a>

The contents of a dashboard\.

## Syntax<a name="aws-properties-quicksight-dashboard-dashboardversiondefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-dashboardversiondefinition-syntax.json"></a>

```
{
  "[AnalysisDefaults](#cfn-quicksight-dashboard-dashboardversiondefinition-analysisdefaults)" : AnalysisDefaults,
  "[CalculatedFields](#cfn-quicksight-dashboard-dashboardversiondefinition-calculatedfields)" : [ CalculatedField, ... ],
  "[ColumnConfigurations](#cfn-quicksight-dashboard-dashboardversiondefinition-columnconfigurations)" : [ ColumnConfiguration, ... ],
  "[DataSetIdentifierDeclarations](#cfn-quicksight-dashboard-dashboardversiondefinition-datasetidentifierdeclarations)" : [ DataSetIdentifierDeclaration, ... ],
  "[FilterGroups](#cfn-quicksight-dashboard-dashboardversiondefinition-filtergroups)" : [ FilterGroup, ... ],
  "[ParameterDeclarations](#cfn-quicksight-dashboard-dashboardversiondefinition-parameterdeclarations)" : [ ParameterDeclaration, ... ],
  "[Sheets](#cfn-quicksight-dashboard-dashboardversiondefinition-sheets)" : [ SheetDefinition, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-dashboardversiondefinition-syntax.yaml"></a>

```
  [AnalysisDefaults](#cfn-quicksight-dashboard-dashboardversiondefinition-analysisdefaults):
    AnalysisDefaults
  [CalculatedFields](#cfn-quicksight-dashboard-dashboardversiondefinition-calculatedfields):
    - CalculatedField
  [ColumnConfigurations](#cfn-quicksight-dashboard-dashboardversiondefinition-columnconfigurations):
    - ColumnConfiguration
  [DataSetIdentifierDeclarations](#cfn-quicksight-dashboard-dashboardversiondefinition-datasetidentifierdeclarations):
    - DataSetIdentifierDeclaration
  [FilterGroups](#cfn-quicksight-dashboard-dashboardversiondefinition-filtergroups):
    - FilterGroup
  [ParameterDeclarations](#cfn-quicksight-dashboard-dashboardversiondefinition-parameterdeclarations):
    - ParameterDeclaration
  [Sheets](#cfn-quicksight-dashboard-dashboardversiondefinition-sheets):
    - SheetDefinition
```

## Properties<a name="aws-properties-quicksight-dashboard-dashboardversiondefinition-properties"></a>

`AnalysisDefaults` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-analysisdefaults"></a>
Property description not available\.  
_Required_: No  
_Type_: [AnalysisDefaults](aws-properties-quicksight-dashboard-analysisdefaults.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CalculatedFields` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-calculatedfields"></a>
An array of calculated field definitions for the dashboard\.  
_Required_: No  
_Type_: List of [CalculatedField](aws-properties-quicksight-dashboard-calculatedfield.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnConfigurations` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-columnconfigurations"></a>
An array of dashboard\-level column configurations\. Column configurations are used to set the default formatting for a column that is used throughout a dashboard\.  
_Required_: No  
_Type_: List of [ColumnConfiguration](aws-properties-quicksight-dashboard-columnconfiguration.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetIdentifierDeclarations` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-datasetidentifierdeclarations"></a>
An array of dataset identifier declarations\. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names \(ARNs\) throughout the dashboard's sub\-structures\.  
_Required_: Yes  
_Type_: List of [DataSetIdentifierDeclaration](aws-properties-quicksight-dashboard-datasetidentifierdeclaration.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterGroups` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-filtergroups"></a>
The filter definitions for a dashboard\.  
For more information, see [Filtering Data in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [FilterGroup](aws-properties-quicksight-dashboard-filtergroup.md)  
_Maximum_: `2000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterDeclarations` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-parameterdeclarations"></a>
The parameter declarations for a dashboard\. Parameters are named variables that can transfer a value for use by an action or an object\.  
For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [ParameterDeclaration](aws-properties-quicksight-dashboard-parameterdeclaration.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sheets` <a name="cfn-quicksight-dashboard-dashboardversiondefinition-sheets"></a>
An array of sheet definitions for a dashboard\.  
_Required_: No  
_Type_: List of [SheetDefinition](aws-properties-quicksight-dashboard-sheetdefinition.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
