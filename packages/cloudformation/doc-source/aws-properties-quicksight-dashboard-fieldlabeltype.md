# AWS::QuickSight::Dashboard FieldLabelType<a name="aws-properties-quicksight-dashboard-fieldlabeltype"></a>

The field label type\.

## Syntax<a name="aws-properties-quicksight-dashboard-fieldlabeltype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-fieldlabeltype-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-dashboard-fieldlabeltype-fieldid)" : String,
  "[Visibility](#cfn-quicksight-dashboard-fieldlabeltype-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-fieldlabeltype-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-dashboard-fieldlabeltype-fieldid): String
  [Visibility](#cfn-quicksight-dashboard-fieldlabeltype-visibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-fieldlabeltype-properties"></a>

`FieldId` <a name="cfn-quicksight-dashboard-fieldlabeltype-fieldid"></a>
Indicates the field that is targeted by the field label\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-dashboard-fieldlabeltype-visibility"></a>
The visibility of the field label\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)