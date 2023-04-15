# AWS::QuickSight::Analysis TopBottomMoversComputation<a name="aws-properties-quicksight-analysis-topbottommoverscomputation"></a>

The top movers and bottom movers computation setup\.

## Syntax<a name="aws-properties-quicksight-analysis-topbottommoverscomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-topbottommoverscomputation-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-analysis-topbottommoverscomputation-category)" : DimensionField,
  "[ComputationId](#cfn-quicksight-analysis-topbottommoverscomputation-computationid)" : String,
  "[MoverSize](#cfn-quicksight-analysis-topbottommoverscomputation-moversize)" : Double,
  "[Name](#cfn-quicksight-analysis-topbottommoverscomputation-name)" : String,
  "[SortOrder](#cfn-quicksight-analysis-topbottommoverscomputation-sortorder)" : String,
  "[Time](#cfn-quicksight-analysis-topbottommoverscomputation-time)" : DimensionField,
  "[Type](#cfn-quicksight-analysis-topbottommoverscomputation-type)" : String,
  "[Value](#cfn-quicksight-analysis-topbottommoverscomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-analysis-topbottommoverscomputation-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-analysis-topbottommoverscomputation-category):
    DimensionField
  [ComputationId](#cfn-quicksight-analysis-topbottommoverscomputation-computationid): String
  [MoverSize](#cfn-quicksight-analysis-topbottommoverscomputation-moversize): Double
  [Name](#cfn-quicksight-analysis-topbottommoverscomputation-name): String
  [SortOrder](#cfn-quicksight-analysis-topbottommoverscomputation-sortorder): String
  [Time](#cfn-quicksight-analysis-topbottommoverscomputation-time):
    DimensionField
  [Type](#cfn-quicksight-analysis-topbottommoverscomputation-type): String
  [Value](#cfn-quicksight-analysis-topbottommoverscomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-topbottommoverscomputation-properties"></a>

`Category` <a name="cfn-quicksight-analysis-topbottommoverscomputation-category"></a>
The category field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComputationId` <a name="cfn-quicksight-analysis-topbottommoverscomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MoverSize` <a name="cfn-quicksight-analysis-topbottommoverscomputation-moversize"></a>
The mover size setup of the top and bottom movers computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-topbottommoverscomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortOrder` <a name="cfn-quicksight-analysis-topbottommoverscomputation-sortorder"></a>
The sort order setup of the top and bottom movers computation\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ABSOLUTE_DIFFERENCE | PERCENT_DIFFERENCE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Time` <a name="cfn-quicksight-analysis-topbottommoverscomputation-time"></a>
The time field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-topbottommoverscomputation-type"></a>
The computation type\. Choose from the following options:

- TOP: Top movers computation\.
- BOTTOM: Bottom movers computation\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `BOTTOM | TOP`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-topbottommoverscomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
