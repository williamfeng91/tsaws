# AWS::QuickSight::Analysis Sheet<a name="aws-properties-quicksight-analysis-sheet"></a>

A _sheet_, which is an object that contains a set of visuals that are viewed together on one page in Amazon QuickSight\. Every analysis and dashboard contains at least one sheet\. Each sheet contains at least one visualization widget, for example a chart, pivot table, or narrative insight\. Sheets can be associated with other components, such as controls, filters, and so on\.

## Syntax<a name="aws-properties-quicksight-analysis-sheet-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-sheet-syntax.json"></a>

```
{
  "[Name](#cfn-quicksight-analysis-sheet-name)" : String,
  "[SheetId](#cfn-quicksight-analysis-sheet-sheetid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-sheet-syntax.yaml"></a>

```
  [Name](#cfn-quicksight-analysis-sheet-name): String
  [SheetId](#cfn-quicksight-analysis-sheet-sheetid): String
```

## Properties<a name="aws-properties-quicksight-analysis-sheet-properties"></a>

`Name` <a name="cfn-quicksight-analysis-sheet-name"></a>
The name of a sheet\. This name is displayed on the sheet's tab in the Amazon QuickSight console\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetId` <a name="cfn-quicksight-analysis-sheet-sheetid"></a>
The unique identifier associated with a sheet\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)