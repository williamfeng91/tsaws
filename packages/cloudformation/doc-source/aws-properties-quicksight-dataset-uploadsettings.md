# AWS::QuickSight::DataSet UploadSettings<a name="aws-properties-quicksight-dataset-uploadsettings"></a>

Information about the format for a source file or files\.

## Syntax<a name="aws-properties-quicksight-dataset-uploadsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-uploadsettings-syntax.json"></a>

```
{
  "[ContainsHeader](#cfn-quicksight-dataset-uploadsettings-containsheader)" : Boolean,
  "[Delimiter](#cfn-quicksight-dataset-uploadsettings-delimiter)" : String,
  "[Format](#cfn-quicksight-dataset-uploadsettings-format)" : String,
  "[StartFromRow](#cfn-quicksight-dataset-uploadsettings-startfromrow)" : Double,
  "[TextQualifier](#cfn-quicksight-dataset-uploadsettings-textqualifier)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-uploadsettings-syntax.yaml"></a>

```
  [ContainsHeader](#cfn-quicksight-dataset-uploadsettings-containsheader): Boolean
  [Delimiter](#cfn-quicksight-dataset-uploadsettings-delimiter): String
  [Format](#cfn-quicksight-dataset-uploadsettings-format): String
  [StartFromRow](#cfn-quicksight-dataset-uploadsettings-startfromrow): Double
  [TextQualifier](#cfn-quicksight-dataset-uploadsettings-textqualifier): String
```

## Properties<a name="aws-properties-quicksight-dataset-uploadsettings-properties"></a>

`ContainsHeader` <a name="cfn-quicksight-dataset-uploadsettings-containsheader"></a>
Whether the file has a header row, or the files each have a header row\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Delimiter` <a name="cfn-quicksight-dataset-uploadsettings-delimiter"></a>
The delimiter between values in the file\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Format` <a name="cfn-quicksight-dataset-uploadsettings-format"></a>
File format\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CLF | CSV | ELF | JSON | TSV | XLSX`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartFromRow` <a name="cfn-quicksight-dataset-uploadsettings-startfromrow"></a>
A row number to start reading data from\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextQualifier` <a name="cfn-quicksight-dataset-uploadsettings-textqualifier"></a>
Text qualifier\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DOUBLE_QUOTE | SINGLE_QUOTE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
