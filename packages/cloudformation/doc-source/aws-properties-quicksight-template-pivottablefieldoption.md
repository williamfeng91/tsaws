# AWS::QuickSight::Template PivotTableFieldOption<a name="aws-properties-quicksight-template-pivottablefieldoption"></a>

The selected field options for the pivot table field options\.

## Syntax<a name="aws-properties-quicksight-template-pivottablefieldoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-pivottablefieldoption-syntax.json"></a>

```
{
  "[CustomLabel](#cfn-quicksight-template-pivottablefieldoption-customlabel)" : String,
  "[FieldId](#cfn-quicksight-template-pivottablefieldoption-fieldid)" : String,
  "[Visibility](#cfn-quicksight-template-pivottablefieldoption-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-pivottablefieldoption-syntax.yaml"></a>

```
  [CustomLabel](#cfn-quicksight-template-pivottablefieldoption-customlabel): String
  [FieldId](#cfn-quicksight-template-pivottablefieldoption-fieldid): String
  [Visibility](#cfn-quicksight-template-pivottablefieldoption-visibility): String
```

## Properties<a name="aws-properties-quicksight-template-pivottablefieldoption-properties"></a>

`CustomLabel` <a name="cfn-quicksight-template-pivottablefieldoption-customlabel"></a>
The custom label of the pivot table field\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-template-pivottablefieldoption-fieldid"></a>
The field ID of the pivot table field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-template-pivottablefieldoption-visibility"></a>
The visibility of the pivot table field\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
