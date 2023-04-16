# AWS::QuickSight::Template BinWidthOptions<a name="aws-properties-quicksight-template-binwidthoptions"></a>

The options that determine the bin width of a histogram\.

## Syntax<a name="aws-properties-quicksight-template-binwidthoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-binwidthoptions-syntax.json"></a>

```
{
  "[BinCountLimit](#cfn-quicksight-template-binwidthoptions-bincountlimit)" : Double,
  "[Value](#cfn-quicksight-template-binwidthoptions-value)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-binwidthoptions-syntax.yaml"></a>

```
  [BinCountLimit](#cfn-quicksight-template-binwidthoptions-bincountlimit): Double
  [Value](#cfn-quicksight-template-binwidthoptions-value): Double
```

## Properties<a name="aws-properties-quicksight-template-binwidthoptions-properties"></a>

`BinCountLimit` <a name="cfn-quicksight-template-binwidthoptions-bincountlimit"></a>
The options that determine the bin count limit\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-template-binwidthoptions-value"></a>
The options that determine the bin width value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
