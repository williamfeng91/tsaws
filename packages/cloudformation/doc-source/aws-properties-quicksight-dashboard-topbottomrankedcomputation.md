# AWS::QuickSight::Dashboard TopBottomRankedComputation<a name="aws-properties-quicksight-dashboard-topbottomrankedcomputation"></a>

The top ranked and bottom ranked computation configuration\.

## Syntax<a name="aws-properties-quicksight-dashboard-topbottomrankedcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-topbottomrankedcomputation-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-dashboard-topbottomrankedcomputation-category)" : DimensionField,
  "[ComputationId](#cfn-quicksight-dashboard-topbottomrankedcomputation-computationid)" : String,
  "[Name](#cfn-quicksight-dashboard-topbottomrankedcomputation-name)" : String,
  "[ResultSize](#cfn-quicksight-dashboard-topbottomrankedcomputation-resultsize)" : Double,
  "[Type](#cfn-quicksight-dashboard-topbottomrankedcomputation-type)" : String,
  "[Value](#cfn-quicksight-dashboard-topbottomrankedcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-dashboard-topbottomrankedcomputation-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-dashboard-topbottomrankedcomputation-category):
    DimensionField
  [ComputationId](#cfn-quicksight-dashboard-topbottomrankedcomputation-computationid): String
  [Name](#cfn-quicksight-dashboard-topbottomrankedcomputation-name): String
  [ResultSize](#cfn-quicksight-dashboard-topbottomrankedcomputation-resultsize): Double
  [Type](#cfn-quicksight-dashboard-topbottomrankedcomputation-type): String
  [Value](#cfn-quicksight-dashboard-topbottomrankedcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-dashboard-topbottomrankedcomputation-properties"></a>

`Category` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-category"></a>
The category field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComputationId` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResultSize` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-resultsize"></a>
The result size of a top and bottom ranked computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-type"></a>
The computation type\. Choose one of the following options:

- TOP: A top ranked computation\.
- BOTTOM: A bottom ranked computation\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `BOTTOM | TOP`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-dashboard-topbottomrankedcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
