# AWS::QuickSight::Template UnaggregatedField<a name="aws-properties-quicksight-template-unaggregatedfield"></a>

The unaggregated field for a table\.

## Syntax<a name="aws-properties-quicksight-template-unaggregatedfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-unaggregatedfield-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-template-unaggregatedfield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-template-unaggregatedfield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-template-unaggregatedfield-formatconfiguration)" : FormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-unaggregatedfield-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-template-unaggregatedfield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-template-unaggregatedfield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-template-unaggregatedfield-formatconfiguration):
    FormatConfiguration
```

## Properties<a name="aws-properties-quicksight-template-unaggregatedfield-properties"></a>

`Column` <a name="cfn-quicksight-template-unaggregatedfield-column"></a>
The column that is used in the `UnaggregatedField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-template-unaggregatedfield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-template-unaggregatedfield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [FormatConfiguration](aws-properties-quicksight-template-formatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
