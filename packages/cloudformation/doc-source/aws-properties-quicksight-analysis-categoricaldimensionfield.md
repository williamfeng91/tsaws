# AWS::QuickSight::Analysis CategoricalDimensionField<a name="aws-properties-quicksight-analysis-categoricaldimensionfield"></a>

The dimension type field with categorical type columns\.\.

## Syntax<a name="aws-properties-quicksight-analysis-categoricaldimensionfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-categoricaldimensionfield-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-analysis-categoricaldimensionfield-column)" : ColumnIdentifier,
  "[FieldId](#cfn-quicksight-analysis-categoricaldimensionfield-fieldid)" : String,
  "[FormatConfiguration](#cfn-quicksight-analysis-categoricaldimensionfield-formatconfiguration)" : StringFormatConfiguration,
  "[HierarchyId](#cfn-quicksight-analysis-categoricaldimensionfield-hierarchyid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-categoricaldimensionfield-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-analysis-categoricaldimensionfield-column):
    ColumnIdentifier
  [FieldId](#cfn-quicksight-analysis-categoricaldimensionfield-fieldid): String
  [FormatConfiguration](#cfn-quicksight-analysis-categoricaldimensionfield-formatconfiguration):
    StringFormatConfiguration
  [HierarchyId](#cfn-quicksight-analysis-categoricaldimensionfield-hierarchyid): String
```

## Properties<a name="aws-properties-quicksight-analysis-categoricaldimensionfield-properties"></a>

`Column` <a name="cfn-quicksight-analysis-categoricaldimensionfield-column"></a>
The column that is used in the `CategoricalDimensionField`\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldId` <a name="cfn-quicksight-analysis-categoricaldimensionfield-fieldid"></a>
The custom field ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FormatConfiguration` <a name="cfn-quicksight-analysis-categoricaldimensionfield-formatconfiguration"></a>
The format configuration of the field\.  
_Required_: No  
_Type_: [StringFormatConfiguration](aws-properties-quicksight-analysis-stringformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HierarchyId` <a name="cfn-quicksight-analysis-categoricaldimensionfield-hierarchyid"></a>
The custom hierarchy ID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
