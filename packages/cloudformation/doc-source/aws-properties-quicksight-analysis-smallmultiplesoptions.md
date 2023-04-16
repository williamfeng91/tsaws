# AWS::QuickSight::Analysis SmallMultiplesOptions<a name="aws-properties-quicksight-analysis-smallmultiplesoptions"></a>

Options that determine the layout and display options of a chart's small multiples\.

## Syntax<a name="aws-properties-quicksight-analysis-smallmultiplesoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-smallmultiplesoptions-syntax.json"></a>

```
{
  "[MaxVisibleColumns](#cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblecolumns)" : Double,
  "[MaxVisibleRows](#cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblerows)" : Double,
  "[PanelConfiguration](#cfn-quicksight-analysis-smallmultiplesoptions-panelconfiguration)" : PanelConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-smallmultiplesoptions-syntax.yaml"></a>

```
  [MaxVisibleColumns](#cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblecolumns): Double
  [MaxVisibleRows](#cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblerows): Double
  [PanelConfiguration](#cfn-quicksight-analysis-smallmultiplesoptions-panelconfiguration):
    PanelConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-smallmultiplesoptions-properties"></a>

`MaxVisibleColumns` <a name="cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblecolumns"></a>
Sets the maximum number of visible columns to display in the grid of small multiples panels\.  
The default is `Auto`, which automatically adjusts the columns in the grid to fit the overall layout and size of the given chart\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaxVisibleRows` <a name="cfn-quicksight-analysis-smallmultiplesoptions-maxvisiblerows"></a>
Sets the maximum number of visible rows to display in the grid of small multiples panels\.  
The default value is `Auto`, which automatically adjusts the rows in the grid to fit the overall layout and size of the given chart\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PanelConfiguration` <a name="cfn-quicksight-analysis-smallmultiplesoptions-panelconfiguration"></a>
Configures the display options for each small multiples panel\.  
_Required_: No  
_Type_: [PanelConfiguration](aws-properties-quicksight-analysis-panelconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
