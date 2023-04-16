# AWS::QuickSight::Dashboard NumericalDimensionField<a name="aws-properties-quicksight-dashboard-numericaldimensionfield"></a>

The dimension type field with numerical type columns\.

## Syntax<a name="aws-properties-quicksight-dashboard-numericaldimensionfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-numericaldimensionfield-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-dashboard-numericaldimensionfield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-dashboard-numericaldimensionfield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-dashboard-numericaldimensionfield-formatconfiguration)" : NumberFormatConfiguration,
  "[HierarchyId](#cfn-quicksight-dashboard-numericaldimensionfield-hierarchyid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-numericaldimensionfield-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-dashboard-numericaldimensionfield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-dashboard-numericaldimensionfield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-dashboard-numericaldimensionfield-formatconfiguration):
    NumberFormatConfiguration
  [HierarchyId](#cfn-quicksight-dashboard-numericaldimensionfield-hierarchyid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-numericaldimensionfield-properties"></a>

`Column` <a name="cfn-quicksight-dashboard-numericaldimensionfield-column"></a>
The column that is used in the `NumericalDimensionField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-dashboard-numericaldimensionfield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-dashboard-numericaldimensionfield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HierarchyId` <a name="cfn-quicksight-dashboard-numericaldimensionfield-hierarchyid"></a>
The custom hierarchy ID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
