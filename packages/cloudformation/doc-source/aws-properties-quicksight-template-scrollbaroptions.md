# AWS::QuickSight::Template ScrollBarOptions<a name="aws-properties-quicksight-template-scrollbaroptions"></a>

The visual display options for a data zoom scroll bar\.

## Syntax<a name="aws-properties-quicksight-template-scrollbaroptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-scrollbaroptions-syntax.json"></a>

```
{
  "[Visibility](#cfn-quicksight-template-scrollbaroptions-visibility)" : String,
  "[VisibleRange](#cfn-quicksight-template-scrollbaroptions-visiblerange)" : VisibleRangeOptions
}
```

### YAML<a name="aws-properties-quicksight-template-scrollbaroptions-syntax.yaml"></a>

```
  [Visibility](#cfn-quicksight-template-scrollbaroptions-visibility): String
  [VisibleRange](#cfn-quicksight-template-scrollbaroptions-visiblerange):
    VisibleRangeOptions
```

## Properties<a name="aws-properties-quicksight-template-scrollbaroptions-properties"></a>

`Visibility` <a name="cfn-quicksight-template-scrollbaroptions-visibility"></a>
The visibility of the data zoom scroll bar\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisibleRange` <a name="cfn-quicksight-template-scrollbaroptions-visiblerange"></a>
The visibility range for the data zoom scroll bar\.  
_Required_: No  
_Type_: [VisibleRangeOptions](aws-properties-quicksight-template-visiblerangeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
