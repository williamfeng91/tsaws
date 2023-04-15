# AWS::QuickSight::Dashboard TooltipOptions<a name="aws-properties-quicksight-dashboard-tooltipoptions"></a>

The display options for the visual tooltip\.

## Syntax<a name="aws-properties-quicksight-dashboard-tooltipoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tooltipoptions-syntax.json"></a>

```
{
  "[FieldBasedTooltip](#cfn-quicksight-dashboard-tooltipoptions-fieldbasedtooltip)" : FieldBasedTooltip,
  "[SelectedTooltipType](#cfn-quicksight-dashboard-tooltipoptions-selectedtooltiptype)" : String,
  "[TooltipVisibility](#cfn-quicksight-dashboard-tooltipoptions-tooltipvisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tooltipoptions-syntax.yaml"></a>

```
  [FieldBasedTooltip](#cfn-quicksight-dashboard-tooltipoptions-fieldbasedtooltip):
    FieldBasedTooltip
  [SelectedTooltipType](#cfn-quicksight-dashboard-tooltipoptions-selectedtooltiptype): String
  [TooltipVisibility](#cfn-quicksight-dashboard-tooltipoptions-tooltipvisibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-tooltipoptions-properties"></a>

`FieldBasedTooltip` <a name="cfn-quicksight-dashboard-tooltipoptions-fieldbasedtooltip"></a>
The setup for the detailed tooltip\. The tooltip setup is always saved\. The display type is decided based on the tooltip type\.  
_Required_: No  
_Type_: [FieldBasedTooltip](aws-properties-quicksight-dashboard-fieldbasedtooltip.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedTooltipType` <a name="cfn-quicksight-dashboard-tooltipoptions-selectedtooltiptype"></a>
The selected type for the tooltip\. Choose one of the following options:

- `BASIC`: A basic tooltip\.
- `DETAILED`: A detailed tooltip\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `BASIC | DETAILED`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TooltipVisibility` <a name="cfn-quicksight-dashboard-tooltipoptions-tooltipvisibility"></a>
Determines whether or not the tooltip is visible\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
