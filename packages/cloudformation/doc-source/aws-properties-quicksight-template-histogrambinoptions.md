# AWS::QuickSight::Template HistogramBinOptions<a name="aws-properties-quicksight-template-histogrambinoptions"></a>

The options that determine the presentation of histogram bins\.

## Syntax<a name="aws-properties-quicksight-template-histogrambinoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-histogrambinoptions-syntax.json"></a>

```
{
  "[BinCount](#cfn-quicksight-template-histogrambinoptions-bincount)" : BinCountOptions,
  "[BinWidth](#cfn-quicksight-template-histogrambinoptions-binwidth)" : BinWidthOptions,
  "[SelectedBinType](#cfn-quicksight-template-histogrambinoptions-selectedbintype)" : String,
  "[StartValue](#cfn-quicksight-template-histogrambinoptions-startvalue)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-histogrambinoptions-syntax.yaml"></a>

```
  [BinCount](#cfn-quicksight-template-histogrambinoptions-bincount):
    BinCountOptions
  [BinWidth](#cfn-quicksight-template-histogrambinoptions-binwidth):
    BinWidthOptions
  [SelectedBinType](#cfn-quicksight-template-histogrambinoptions-selectedbintype): String
  [StartValue](#cfn-quicksight-template-histogrambinoptions-startvalue): Double
```

## Properties<a name="aws-properties-quicksight-template-histogrambinoptions-properties"></a>

`BinCount` <a name="cfn-quicksight-template-histogrambinoptions-bincount"></a>
The options that determine the bin count of a histogram\.  
_Required_: No  
_Type_: [BinCountOptions](aws-properties-quicksight-template-bincountoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BinWidth` <a name="cfn-quicksight-template-histogrambinoptions-binwidth"></a>
The options that determine the bin width of a histogram\.  
_Required_: No  
_Type_: [BinWidthOptions](aws-properties-quicksight-template-binwidthoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedBinType` <a name="cfn-quicksight-template-histogrambinoptions-selectedbintype"></a>
The options that determine the selected bin type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BIN_COUNT | BIN_WIDTH`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartValue` <a name="cfn-quicksight-template-histogrambinoptions-startvalue"></a>
The options that determine the bin start value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
