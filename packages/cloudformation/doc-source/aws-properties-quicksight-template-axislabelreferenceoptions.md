# AWS::QuickSight::Template AxisLabelReferenceOptions<a name="aws-properties-quicksight-template-axislabelreferenceoptions"></a>

The reference that specifies where the axis label is applied to\.

## Syntax<a name="aws-properties-quicksight-template-axislabelreferenceoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-axislabelreferenceoptions-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-template-axislabelreferenceoptions-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-template-axislabelreferenceoptions-fieldid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-axislabelreferenceoptions-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-template-axislabelreferenceoptions-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-template-axislabelreferenceoptions-fieldid): String
```

## Properties<a name="aws-properties-quicksight-template-axislabelreferenceoptions-properties"></a>

`Column` <a name="cfn-quicksight-template-axislabelreferenceoptions-column"></a>
The column that the axis label is targeted to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-template-axislabelreferenceoptions-fieldid"></a>
The field that the axis label is targeted to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
