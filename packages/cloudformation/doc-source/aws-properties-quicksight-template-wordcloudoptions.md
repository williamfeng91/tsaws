# AWS::QuickSight::Template WordCloudOptions<a name="aws-properties-quicksight-template-wordcloudoptions"></a>

The word cloud options for a word cloud visual\.

## Syntax<a name="aws-properties-quicksight-template-wordcloudoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-wordcloudoptions-syntax.json"></a>

```
{
  "[CloudLayout](#cfn-quicksight-template-wordcloudoptions-cloudlayout)" : String,
  "[MaximumStringLength](#cfn-quicksight-template-wordcloudoptions-maximumstringlength)" : Double,
  "[WordCasing](#cfn-quicksight-template-wordcloudoptions-wordcasing)" : String,
  "[WordOrientation](#cfn-quicksight-template-wordcloudoptions-wordorientation)" : String,
  "[WordPadding](#cfn-quicksight-template-wordcloudoptions-wordpadding)" : String,
  "[WordScaling](#cfn-quicksight-template-wordcloudoptions-wordscaling)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-wordcloudoptions-syntax.yaml"></a>

```
  [CloudLayout](#cfn-quicksight-template-wordcloudoptions-cloudlayout): String
  [MaximumStringLength](#cfn-quicksight-template-wordcloudoptions-maximumstringlength): Double
  [WordCasing](#cfn-quicksight-template-wordcloudoptions-wordcasing): String
  [WordOrientation](#cfn-quicksight-template-wordcloudoptions-wordorientation): String
  [WordPadding](#cfn-quicksight-template-wordcloudoptions-wordpadding): String
  [WordScaling](#cfn-quicksight-template-wordcloudoptions-wordscaling): String
```

## Properties<a name="aws-properties-quicksight-template-wordcloudoptions-properties"></a>

`CloudLayout` <a name="cfn-quicksight-template-wordcloudoptions-cloudlayout"></a>
The cloud layout options \(fluid, normal\) of a word cloud\.  
_Required_: No  
_Type_: String  
_Allowed values_: `FLUID | NORMAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumStringLength` <a name="cfn-quicksight-template-wordcloudoptions-maximumstringlength"></a>
The length limit of each word from 1\-100\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WordCasing` <a name="cfn-quicksight-template-wordcloudoptions-wordcasing"></a>
The word casing options \(lower_case, existing_case\) for the words in a word cloud\.  
_Required_: No  
_Type_: String  
_Allowed values_: `EXISTING_CASE | LOWER_CASE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WordOrientation` <a name="cfn-quicksight-template-wordcloudoptions-wordorientation"></a>
The word orientation options \(horizontal, horizontal_and_vertical\) for the words in a word cloud\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HORIZONTAL | HORIZONTAL_AND_VERTICAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WordPadding` <a name="cfn-quicksight-template-wordcloudoptions-wordpadding"></a>
The word padding options \(none, small, medium, large\) for the words in a word cloud\.  
_Required_: No  
_Type_: String  
_Allowed values_: `LARGE | MEDIUM | NONE | SMALL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WordScaling` <a name="cfn-quicksight-template-wordcloudoptions-wordscaling"></a>
The word scaling options \(emphasize, normal\) for the words in a word cloud\.  
_Required_: No  
_Type_: String  
_Allowed values_: `EMPHASIZE | NORMAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
