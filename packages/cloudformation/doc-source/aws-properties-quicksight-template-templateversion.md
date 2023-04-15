# AWS::QuickSight::Template TemplateVersion<a name="aws-properties-quicksight-template-templateversion"></a>

A version of a template\.

## Syntax<a name="aws-properties-quicksight-template-templateversion-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-templateversion-syntax.json"></a>

```
{
  "[CreatedTime](#cfn-quicksight-template-templateversion-createdtime)" : String,
  "[DataSetConfigurations](#cfn-quicksight-template-templateversion-datasetconfigurations)" : [ DataSetConfiguration, ... ],
  "[Description](#cfn-quicksight-template-templateversion-description)" : String,
  "[Errors](#cfn-quicksight-template-templateversion-errors)" : [ TemplateError, ... ],
  "[Sheets](#cfn-quicksight-template-templateversion-sheets)" : [ Sheet, ... ],
  "[SourceEntityArn](#cfn-quicksight-template-templateversion-sourceentityarn)" : String,
  "[Status](#cfn-quicksight-template-templateversion-status)" : String,
  "[ThemeArn](#cfn-quicksight-template-templateversion-themearn)" : String,
  "[VersionNumber](#cfn-quicksight-template-templateversion-versionnumber)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-templateversion-syntax.yaml"></a>

```
  [CreatedTime](#cfn-quicksight-template-templateversion-createdtime): String
  [DataSetConfigurations](#cfn-quicksight-template-templateversion-datasetconfigurations):
    - DataSetConfiguration
  [Description](#cfn-quicksight-template-templateversion-description): String
  [Errors](#cfn-quicksight-template-templateversion-errors):
    - TemplateError
  [Sheets](#cfn-quicksight-template-templateversion-sheets):
    - Sheet
  [SourceEntityArn](#cfn-quicksight-template-templateversion-sourceentityarn): String
  [Status](#cfn-quicksight-template-templateversion-status): String
  [ThemeArn](#cfn-quicksight-template-templateversion-themearn): String
  [VersionNumber](#cfn-quicksight-template-templateversion-versionnumber): Double
```

## Properties<a name="aws-properties-quicksight-template-templateversion-properties"></a>

`CreatedTime` <a name="cfn-quicksight-template-templateversion-createdtime"></a>
The time that this template version was created\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetConfigurations` <a name="cfn-quicksight-template-templateversion-datasetconfigurations"></a>
Schema of the dataset identified by the placeholder\. Any dashboard created from this template should be bound to new datasets matching the same schema described through this API operation\.  
_Required_: No  
_Type_: List of [DataSetConfiguration](aws-properties-quicksight-template-datasetconfiguration.md)  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-quicksight-template-templateversion-description"></a>
The description of the template\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Errors` <a name="cfn-quicksight-template-templateversion-errors"></a>
Errors associated with this template version\.  
_Required_: No  
_Type_: List of [TemplateError](aws-properties-quicksight-template-templateerror.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sheets` <a name="cfn-quicksight-template-templateversion-sheets"></a>
A list of the associated sheets with the unique identifier and name of each sheet\.  
_Required_: No  
_Type_: List of [Sheet](aws-properties-quicksight-template-sheet.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceEntityArn` <a name="cfn-quicksight-template-templateversion-sourceentityarn"></a>
The Amazon Resource Name \(ARN\) of an analysis or template that was used to create this template\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-template-templateversion-status"></a>
The status that is associated with the template\.

- `CREATION_IN_PROGRESS`
- `CREATION_SUCCESSFUL`
- `CREATION_FAILED`
- `UPDATE_IN_PROGRESS`
- `UPDATE_SUCCESSFUL`
- `UPDATE_FAILED`
- `DELETED`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `CREATION_FAILED | CREATION_IN_PROGRESS | CREATION_SUCCESSFUL | DELETED | UPDATE_FAILED | UPDATE_IN_PROGRESS | UPDATE_SUCCESSFUL`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThemeArn` <a name="cfn-quicksight-template-templateversion-themearn"></a>
The ARN of the theme associated with this version of the template\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VersionNumber` <a name="cfn-quicksight-template-templateversion-versionnumber"></a>
The version number of the template version\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
