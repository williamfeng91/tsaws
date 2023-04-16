# AWS::QuickSight::Dashboard DateDimensionField<a name="aws-properties-quicksight-dashboard-datedimensionfield"></a>

The dimension type field with date type columns\.

## Syntax<a name="aws-properties-quicksight-dashboard-datedimensionfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datedimensionfield-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-dashboard-datedimensionfield-column)" : ColumnIdentifier,
  "[DateGranularity](#cfn-quicksight-dashboard-datedimensionfield-dategranularity)" : String,
  "[FieldId](#cfn-quicksight-dashboard-datedimensionfield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-dashboard-datedimensionfield-formatconfiguration)" : DateTimeFormatConfiguration,
  "[HierarchyId](#cfn-quicksight-dashboard-datedimensionfield-hierarchyid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datedimensionfield-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-dashboard-datedimensionfield-column):
    ColumnIdentifier
  [DateGranularity](#cfn-quicksight-dashboard-datedimensionfield-dategranularity): String
  [FieldId](#cfn-quicksight-dashboard-datedimensionfield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-dashboard-datedimensionfield-formatconfiguration):
    DateTimeFormatConfiguration
  [HierarchyId](#cfn-quicksight-dashboard-datedimensionfield-hierarchyid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-datedimensionfield-properties"></a>

`Column` <a name="cfn-quicksight-dashboard-datedimensionfield-column"></a>
The column that is used in the `DateDimensionField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DateGranularity` <a name="cfn-quicksight-dashboard-datedimensionfield-dategranularity"></a>
The date granularity of the `DateDimensionField`\. Choose one of the following options:

- `YEAR`
- `QUARTER`
- `MONTH`
- `WEEK`
- `DAY`
- `HOUR`
- `MINUTE`
- `SECOND`
- `MILLISECOND`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-dashboard-datedimensionfield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-dashboard-datedimensionfield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-dashboard-datetimeformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HierarchyId` <a name="cfn-quicksight-dashboard-datedimensionfield-hierarchyid"></a>
The custom hierarchy ID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
