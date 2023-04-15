# AWS::QuickSight::Template TopBottomRankedComputation<a name="aws-properties-quicksight-template-topbottomrankedcomputation"></a>

The top ranked and bottom ranked computation configuration\.

## Syntax<a name="aws-properties-quicksight-template-topbottomrankedcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-topbottomrankedcomputation-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-template-topbottomrankedcomputation-category)" : DimensionField,
  "[ComputationId](#cfn-quicksight-template-topbottomrankedcomputation-computationid)" : String,
  "[Name](#cfn-quicksight-template-topbottomrankedcomputation-name)" : String,
  "[ResultSize](#cfn-quicksight-template-topbottomrankedcomputation-resultsize)" : Double,
  "[Type](#cfn-quicksight-template-topbottomrankedcomputation-type)" : String,
  "[Value](#cfn-quicksight-template-topbottomrankedcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-template-topbottomrankedcomputation-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-template-topbottomrankedcomputation-category):
    DimensionField
  [ComputationId](#cfn-quicksight-template-topbottomrankedcomputation-computationid): String
  [Name](#cfn-quicksight-template-topbottomrankedcomputation-name): String
  [ResultSize](#cfn-quicksight-template-topbottomrankedcomputation-resultsize): Double
  [Type](#cfn-quicksight-template-topbottomrankedcomputation-type): String
  [Value](#cfn-quicksight-template-topbottomrankedcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-template-topbottomrankedcomputation-properties"></a>

`Category` <a name="cfn-quicksight-template-topbottomrankedcomputation-category"></a>
The category field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComputationId` <a name="cfn-quicksight-template-topbottomrankedcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-template-topbottomrankedcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResultSize` <a name="cfn-quicksight-template-topbottomrankedcomputation-resultsize"></a>
The result size of a top and bottom ranked computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-template-topbottomrankedcomputation-type"></a>
The computation type\. Choose one of the following options:

- TOP: A top ranked computation\.
- BOTTOM: A bottom ranked computation\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `BOTTOM | TOP`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-template-topbottomrankedcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
