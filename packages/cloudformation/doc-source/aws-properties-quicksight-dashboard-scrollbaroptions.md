# AWS::QuickSight::Dashboard ScrollBarOptions<a name="aws-properties-quicksight-dashboard-scrollbaroptions"></a>

The visual display options for a data zoom scroll bar\.

## Syntax<a name="aws-properties-quicksight-dashboard-scrollbaroptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-scrollbaroptions-syntax.json"></a>

```
{
  "[Visibility](#cfn-quicksight-dashboard-scrollbaroptions-visibility)" : String,
  "[VisibleRange](#cfn-quicksight-dashboard-scrollbaroptions-visiblerange)" : VisibleRangeOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-scrollbaroptions-syntax.yaml"></a>

```
  [Visibility](#cfn-quicksight-dashboard-scrollbaroptions-visibility): String
  [VisibleRange](#cfn-quicksight-dashboard-scrollbaroptions-visiblerange):
    VisibleRangeOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-scrollbaroptions-properties"></a>

`Visibility` <a name="cfn-quicksight-dashboard-scrollbaroptions-visibility"></a>
The visibility of the data zoom scroll bar\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisibleRange` <a name="cfn-quicksight-dashboard-scrollbaroptions-visiblerange"></a>
The visibility range for the data zoom scroll bar\.  
_Required_: No  
_Type_: [VisibleRangeOptions](aws-properties-quicksight-dashboard-visiblerangeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
