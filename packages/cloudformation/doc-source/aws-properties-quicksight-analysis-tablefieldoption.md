# AWS::QuickSight::Analysis TableFieldOption<a name="aws-properties-quicksight-analysis-tablefieldoption"></a>

The options for a table field\.

## Syntax<a name="aws-properties-quicksight-analysis-tablefieldoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-tablefieldoption-syntax.json"></a>

```
{
  "[CustomLabel](#cfn-quicksight-analysis-tablefieldoption-customlabel)" : String,
  "[FieldId](#cfn-quicksight-analysis-tablefieldoption-fieldid)" : String,
  "[URLStyling](#cfn-quicksight-analysis-tablefieldoption-urlstyling)" : TableFieldURLConfiguration,
  "[Visibility](#cfn-quicksight-analysis-tablefieldoption-visibility)" : String,
  "[Width](#cfn-quicksight-analysis-tablefieldoption-width)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-tablefieldoption-syntax.yaml"></a>

```
  [CustomLabel](#cfn-quicksight-analysis-tablefieldoption-customlabel): String
  [FieldId](#cfn-quicksight-analysis-tablefieldoption-fieldid): String
  [URLStyling](#cfn-quicksight-analysis-tablefieldoption-urlstyling):
    TableFieldURLConfiguration
  [Visibility](#cfn-quicksight-analysis-tablefieldoption-visibility): String
  [Width](#cfn-quicksight-analysis-tablefieldoption-width): String
```

## Properties<a name="aws-properties-quicksight-analysis-tablefieldoption-properties"></a>

`CustomLabel` <a name="cfn-quicksight-analysis-tablefieldoption-customlabel"></a>
The custom label for a table field\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-tablefieldoption-fieldid"></a>
The field ID for a table field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`URLStyling` <a name="cfn-quicksight-analysis-tablefieldoption-urlstyling"></a>
The URL configuration for a table field\.  
_Required_: No  
_Type_: [TableFieldURLConfiguration](aws-properties-quicksight-analysis-tablefieldurlconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-tablefieldoption-visibility"></a>
The visibility of a table field\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Width` <a name="cfn-quicksight-analysis-tablefieldoption-width"></a>
The width for a table field\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
