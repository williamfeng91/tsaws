# AWS::QuickSight::Template ForecastComputation<a name="aws-properties-quicksight-template-forecastcomputation"></a>

The forecast computation configuration\.

## Syntax<a name="aws-properties-quicksight-template-forecastcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-forecastcomputation-syntax.json"></a>

```
{
  "[ComputationId](#cfn-quicksight-template-forecastcomputation-computationid)" : String,
  "[CustomSeasonalityValue](#cfn-quicksight-template-forecastcomputation-customseasonalityvalue)" : Double,
  "[LowerBoundary](#cfn-quicksight-template-forecastcomputation-lowerboundary)" : Double,
  "[Name](#cfn-quicksight-template-forecastcomputation-name)" : String,
  "[PeriodsBackward](#cfn-quicksight-template-forecastcomputation-periodsbackward)" : Double,
  "[PeriodsForward](#cfn-quicksight-template-forecastcomputation-periodsforward)" : Double,
  "[PredictionInterval](#cfn-quicksight-template-forecastcomputation-predictioninterval)" : Double,
  "[Seasonality](#cfn-quicksight-template-forecastcomputation-seasonality)" : String,
  "[Time](#cfn-quicksight-template-forecastcomputation-time)" : DimensionField,
  "[UpperBoundary](#cfn-quicksight-template-forecastcomputation-upperboundary)" : Double,
  "[Value](#cfn-quicksight-template-forecastcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-template-forecastcomputation-syntax.yaml"></a>

```
  [ComputationId](#cfn-quicksight-template-forecastcomputation-computationid): String
  [CustomSeasonalityValue](#cfn-quicksight-template-forecastcomputation-customseasonalityvalue): Double
  [LowerBoundary](#cfn-quicksight-template-forecastcomputation-lowerboundary): Double
  [Name](#cfn-quicksight-template-forecastcomputation-name): String
  [PeriodsBackward](#cfn-quicksight-template-forecastcomputation-periodsbackward): Double
  [PeriodsForward](#cfn-quicksight-template-forecastcomputation-periodsforward): Double
  [PredictionInterval](#cfn-quicksight-template-forecastcomputation-predictioninterval): Double
  [Seasonality](#cfn-quicksight-template-forecastcomputation-seasonality): String
  [Time](#cfn-quicksight-template-forecastcomputation-time):
    DimensionField
  [UpperBoundary](#cfn-quicksight-template-forecastcomputation-upperboundary): Double
  [Value](#cfn-quicksight-template-forecastcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-template-forecastcomputation-properties"></a>

`ComputationId` <a name="cfn-quicksight-template-forecastcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomSeasonalityValue` <a name="cfn-quicksight-template-forecastcomputation-customseasonalityvalue"></a>
The custom seasonality value setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `180`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LowerBoundary` <a name="cfn-quicksight-template-forecastcomputation-lowerboundary"></a>
The lower boundary setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-template-forecastcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodsBackward` <a name="cfn-quicksight-template-forecastcomputation-periodsbackward"></a>
The periods backward setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodsForward` <a name="cfn-quicksight-template-forecastcomputation-periodsforward"></a>
The periods forward setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PredictionInterval` <a name="cfn-quicksight-template-forecastcomputation-predictioninterval"></a>
The prediction interval setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `50`  
_Maximum_: `95`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Seasonality` <a name="cfn-quicksight-template-forecastcomputation-seasonality"></a>
The seasonality setup of a forecast computation\. Choose one of the following options:

- `AUTOMATIC`
- `CUSTOM`: Checks the custom seasonality value\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `AUTOMATIC | CUSTOM`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Time` <a name="cfn-quicksight-template-forecastcomputation-time"></a>
The time field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-template-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UpperBoundary` <a name="cfn-quicksight-template-forecastcomputation-upperboundary"></a>
The upper boundary setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-template-forecastcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
