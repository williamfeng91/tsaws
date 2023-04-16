# AWS::QuickSight::Dashboard HistogramBinOptions<a name="aws-properties-quicksight-dashboard-histogrambinoptions"></a>

The options that determine the presentation of histogram bins\.

## Syntax<a name="aws-properties-quicksight-dashboard-histogrambinoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-histogrambinoptions-syntax.json"></a>

```
{
  "[BinCount](#cfn-quicksight-dashboard-histogrambinoptions-bincount)" : BinCountOptions,
  "[BinWidth](#cfn-quicksight-dashboard-histogrambinoptions-binwidth)" : BinWidthOptions,
  "[SelectedBinType](#cfn-quicksight-dashboard-histogrambinoptions-selectedbintype)" : String,
  "[StartValue](#cfn-quicksight-dashboard-histogrambinoptions-startvalue)" : Double
}
```

### YAML<a name="aws-properties-quicksight-dashboard-histogrambinoptions-syntax.yaml"></a>

```
  [BinCount](#cfn-quicksight-dashboard-histogrambinoptions-bincount):
    BinCountOptions
  [BinWidth](#cfn-quicksight-dashboard-histogrambinoptions-binwidth):
    BinWidthOptions
  [SelectedBinType](#cfn-quicksight-dashboard-histogrambinoptions-selectedbintype): String
  [StartValue](#cfn-quicksight-dashboard-histogrambinoptions-startvalue): Double
```

## Properties<a name="aws-properties-quicksight-dashboard-histogrambinoptions-properties"></a>

`BinCount` <a name="cfn-quicksight-dashboard-histogrambinoptions-bincount"></a>
The options that determine the bin count of a histogram\.  
_Required_: No  
_Type_: [BinCountOptions](aws-properties-quicksight-dashboard-bincountoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BinWidth` <a name="cfn-quicksight-dashboard-histogrambinoptions-binwidth"></a>
The options that determine the bin width of a histogram\.  
_Required_: No  
_Type_: [BinWidthOptions](aws-properties-quicksight-dashboard-binwidthoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedBinType` <a name="cfn-quicksight-dashboard-histogrambinoptions-selectedbintype"></a>
The options that determine the selected bin type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BIN_COUNT | BIN_WIDTH`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartValue` <a name="cfn-quicksight-dashboard-histogrambinoptions-startvalue"></a>
The options that determine the bin start value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
