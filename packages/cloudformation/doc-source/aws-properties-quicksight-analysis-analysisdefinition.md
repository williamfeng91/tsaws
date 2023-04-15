# AWS::QuickSight::Analysis AnalysisDefinition<a name="aws-properties-quicksight-analysis-analysisdefinition"></a>

The definition of an analysis\.

## Syntax<a name="aws-properties-quicksight-analysis-analysisdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-analysisdefinition-syntax.json"></a>

```
{
  "[AnalysisDefaults](#cfn-quicksight-analysis-analysisdefinition-analysisdefaults)" : AnalysisDefaults,
  "[CalculatedFields](#cfn-quicksight-analysis-analysisdefinition-calculatedfields)" : [ CalculatedField, ... ],
  "[ColumnConfigurations](#cfn-quicksight-analysis-analysisdefinition-columnconfigurations)" : [ ColumnConfiguration, ... ],
  "[DataSetIdentifierDeclarations](#cfn-quicksight-analysis-analysisdefinition-datasetidentifierdeclarations)" : [ DataSetIdentifierDeclaration, ... ],
  "[FilterGroups](#cfn-quicksight-analysis-analysisdefinition-filtergroups)" : [ FilterGroup, ... ],
  "[ParameterDeclarations](#cfn-quicksight-analysis-analysisdefinition-parameterdeclarations)" : [ ParameterDeclaration, ... ],
  "[Sheets](#cfn-quicksight-analysis-analysisdefinition-sheets)" : [ SheetDefinition, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-analysisdefinition-syntax.yaml"></a>

```
  [AnalysisDefaults](#cfn-quicksight-analysis-analysisdefinition-analysisdefaults):
    AnalysisDefaults
  [CalculatedFields](#cfn-quicksight-analysis-analysisdefinition-calculatedfields):
    - CalculatedField
  [ColumnConfigurations](#cfn-quicksight-analysis-analysisdefinition-columnconfigurations):
    - ColumnConfiguration
  [DataSetIdentifierDeclarations](#cfn-quicksight-analysis-analysisdefinition-datasetidentifierdeclarations):
    - DataSetIdentifierDeclaration
  [FilterGroups](#cfn-quicksight-analysis-analysisdefinition-filtergroups):
    - FilterGroup
  [ParameterDeclarations](#cfn-quicksight-analysis-analysisdefinition-parameterdeclarations):
    - ParameterDeclaration
  [Sheets](#cfn-quicksight-analysis-analysisdefinition-sheets):
    - SheetDefinition
```

## Properties<a name="aws-properties-quicksight-analysis-analysisdefinition-properties"></a>

`AnalysisDefaults` <a name="cfn-quicksight-analysis-analysisdefinition-analysisdefaults"></a>
Property description not available\.  
_Required_: No  
_Type_: [AnalysisDefaults](aws-properties-quicksight-analysis-analysisdefaults.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CalculatedFields` <a name="cfn-quicksight-analysis-analysisdefinition-calculatedfields"></a>
An array of calculated field definitions for the analysis\.  
_Required_: No  
_Type_: List of [CalculatedField](aws-properties-quicksight-analysis-calculatedfield.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnConfigurations` <a name="cfn-quicksight-analysis-analysisdefinition-columnconfigurations"></a>
An array of analysis\-level column configurations\. Column configurations can be used to set default formatting for a column to be used throughout an analysis\.  
_Required_: No  
_Type_: List of [ColumnConfiguration](aws-properties-quicksight-analysis-columnconfiguration.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetIdentifierDeclarations` <a name="cfn-quicksight-analysis-analysisdefinition-datasetidentifierdeclarations"></a>
An array of dataset identifier declarations\. This mapping allows the usage of dataset identifiers instead of dataset ARNs throughout analysis sub\-structures\.  
_Required_: Yes  
_Type_: List of [DataSetIdentifierDeclaration](aws-properties-quicksight-analysis-datasetidentifierdeclaration.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterGroups` <a name="cfn-quicksight-analysis-analysisdefinition-filtergroups"></a>
Filter definitions for an analysis\.  
For more information, see [Filtering Data in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/adding-a-filter.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [FilterGroup](aws-properties-quicksight-analysis-filtergroup.md)  
_Maximum_: `2000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterDeclarations` <a name="cfn-quicksight-analysis-analysisdefinition-parameterdeclarations"></a>
An array of parameter declarations for an analysis\.  
Parameters are named variables that can transfer a value for use by an action or an object\.  
For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the _Amazon QuickSight User Guide_\.  
_Required_: No  
_Type_: List of [ParameterDeclaration](aws-properties-quicksight-analysis-parameterdeclaration.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sheets` <a name="cfn-quicksight-analysis-analysisdefinition-sheets"></a>
An array of sheet definitions for an analysis\. Each `SheetDefinition` provides detailed information about a sheet within this analysis\.  
_Required_: No  
_Type_: List of [SheetDefinition](aws-properties-quicksight-analysis-sheetdefinition.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
