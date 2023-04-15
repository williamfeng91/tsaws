# AWS::QuickSight::Dashboard DataLabelOptions<a name="aws-properties-quicksight-dashboard-datalabeloptions"></a>

The options that determine the presentation of the data labels\.

## Syntax<a name="aws-properties-quicksight-dashboard-datalabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datalabeloptions-syntax.json"></a>

```
{
  "[CategoryLabelVisibility](#cfn-quicksight-dashboard-datalabeloptions-categorylabelvisibility)" : String,
  "[DataLabelTypes](#cfn-quicksight-dashboard-datalabeloptions-datalabeltypes)" : [ DataLabelType, ... ],
  "[LabelColor](#cfn-quicksight-dashboard-datalabeloptions-labelcolor)" : String,
  "[LabelContent](#cfn-quicksight-dashboard-datalabeloptions-labelcontent)" : String,
  "[LabelFontConfiguration](#cfn-quicksight-dashboard-datalabeloptions-labelfontconfiguration)" : FontConfiguration,
  "[MeasureLabelVisibility](#cfn-quicksight-dashboard-datalabeloptions-measurelabelvisibility)" : String,
  "[Overlap](#cfn-quicksight-dashboard-datalabeloptions-overlap)" : String,
  "[Position](#cfn-quicksight-dashboard-datalabeloptions-position)" : String,
  "[Visibility](#cfn-quicksight-dashboard-datalabeloptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datalabeloptions-syntax.yaml"></a>

```
  [CategoryLabelVisibility](#cfn-quicksight-dashboard-datalabeloptions-categorylabelvisibility): String
  [DataLabelTypes](#cfn-quicksight-dashboard-datalabeloptions-datalabeltypes):
    - DataLabelType
  [LabelColor](#cfn-quicksight-dashboard-datalabeloptions-labelcolor): String
  [LabelContent](#cfn-quicksight-dashboard-datalabeloptions-labelcontent): String
  [LabelFontConfiguration](#cfn-quicksight-dashboard-datalabeloptions-labelfontconfiguration):
    FontConfiguration
  [MeasureLabelVisibility](#cfn-quicksight-dashboard-datalabeloptions-measurelabelvisibility): String
  [Overlap](#cfn-quicksight-dashboard-datalabeloptions-overlap): String
  [Position](#cfn-quicksight-dashboard-datalabeloptions-position): String
  [Visibility](#cfn-quicksight-dashboard-datalabeloptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-datalabeloptions-properties"></a>

`CategoryLabelVisibility` <a name="cfn-quicksight-dashboard-datalabeloptions-categorylabelvisibility"></a>
Determines the visibility of the category field labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLabelTypes` <a name="cfn-quicksight-dashboard-datalabeloptions-datalabeltypes"></a>
The option that determines the data label type\.  
_Required_: No  
_Type_: List of [DataLabelType](aws-properties-quicksight-dashboard-datalabeltype.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LabelColor` <a name="cfn-quicksight-dashboard-datalabeloptions-labelcolor"></a>
Determines the color of the data labels\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LabelContent` <a name="cfn-quicksight-dashboard-datalabeloptions-labelcontent"></a>
Determines the content of the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `PERCENT | VALUE | VALUE_AND_PERCENT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LabelFontConfiguration` <a name="cfn-quicksight-dashboard-datalabeloptions-labelfontconfiguration"></a>
Determines the font configuration of the data labels\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MeasureLabelVisibility` <a name="cfn-quicksight-dashboard-datalabeloptions-measurelabelvisibility"></a>
Determines the visibility of the measure field labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Overlap` <a name="cfn-quicksight-dashboard-datalabeloptions-overlap"></a>
Determines whether overlap is enabled or disabled for the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLE_OVERLAP | ENABLE_OVERLAP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Position` <a name="cfn-quicksight-dashboard-datalabeloptions-position"></a>
Determines the position of the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BOTTOM | INSIDE | LEFT | OUTSIDE | RIGHT | TOP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-dashboard-datalabeloptions-visibility"></a>
Determines the visibility of the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
