# AWS::QuickSight::Template TimeBasedForecastProperties<a name="aws-properties-quicksight-template-timebasedforecastproperties"></a>

The forecast properties setup of a forecast in the line chart\.

## Syntax<a name="aws-properties-quicksight-template-timebasedforecastproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-timebasedforecastproperties-syntax.json"></a>

```
{
  "[LowerBoundary](#cfn-quicksight-template-timebasedforecastproperties-lowerboundary)" : Double,
  "[PeriodsBackward](#cfn-quicksight-template-timebasedforecastproperties-periodsbackward)" : Double,
  "[PeriodsForward](#cfn-quicksight-template-timebasedforecastproperties-periodsforward)" : Double,
  "[PredictionInterval](#cfn-quicksight-template-timebasedforecastproperties-predictioninterval)" : Double,
  "[Seasonality](#cfn-quicksight-template-timebasedforecastproperties-seasonality)" : Double,
  "[UpperBoundary](#cfn-quicksight-template-timebasedforecastproperties-upperboundary)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-timebasedforecastproperties-syntax.yaml"></a>

```
  [LowerBoundary](#cfn-quicksight-template-timebasedforecastproperties-lowerboundary): Double
  [PeriodsBackward](#cfn-quicksight-template-timebasedforecastproperties-periodsbackward): Double
  [PeriodsForward](#cfn-quicksight-template-timebasedforecastproperties-periodsforward): Double
  [PredictionInterval](#cfn-quicksight-template-timebasedforecastproperties-predictioninterval): Double
  [Seasonality](#cfn-quicksight-template-timebasedforecastproperties-seasonality): Double
  [UpperBoundary](#cfn-quicksight-template-timebasedforecastproperties-upperboundary): Double
```

## Properties<a name="aws-properties-quicksight-template-timebasedforecastproperties-properties"></a>

`LowerBoundary` <a name="cfn-quicksight-template-timebasedforecastproperties-lowerboundary"></a>
The lower boundary setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodsBackward` <a name="cfn-quicksight-template-timebasedforecastproperties-periodsbackward"></a>
The periods backward setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodsForward` <a name="cfn-quicksight-template-timebasedforecastproperties-periodsforward"></a>
The periods forward setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PredictionInterval` <a name="cfn-quicksight-template-timebasedforecastproperties-predictioninterval"></a>
The prediction interval setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Minimum_: `50`  
_Maximum_: `95`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Seasonality` <a name="cfn-quicksight-template-timebasedforecastproperties-seasonality"></a>
The seasonality setup of a forecast computation\. Choose one of the following options:

- `NULL`: The input is set to `NULL`\.
- `NON_NULL`: The input is set to a custom value\.
  _Required_: No  
  _Type_: Double  
  _Minimum_: `1`  
  _Maximum_: `180`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UpperBoundary` <a name="cfn-quicksight-template-timebasedforecastproperties-upperboundary"></a>
The upper boundary setup of a forecast computation\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)