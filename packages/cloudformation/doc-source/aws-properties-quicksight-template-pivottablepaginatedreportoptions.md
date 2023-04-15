# AWS::QuickSight::Template PivotTablePaginatedReportOptions<a name="aws-properties-quicksight-template-pivottablepaginatedreportoptions"></a>

The paginated report options for a pivot table visual\.

## Syntax<a name="aws-properties-quicksight-template-pivottablepaginatedreportoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-pivottablepaginatedreportoptions-syntax.json"></a>

```
{
  "[OverflowColumnHeaderVisibility](#cfn-quicksight-template-pivottablepaginatedreportoptions-overflowcolumnheadervisibility)" : String,
  "[VerticalOverflowVisibility](#cfn-quicksight-template-pivottablepaginatedreportoptions-verticaloverflowvisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-pivottablepaginatedreportoptions-syntax.yaml"></a>

```
  [OverflowColumnHeaderVisibility](#cfn-quicksight-template-pivottablepaginatedreportoptions-overflowcolumnheadervisibility): String
  [VerticalOverflowVisibility](#cfn-quicksight-template-pivottablepaginatedreportoptions-verticaloverflowvisibility): String
```

## Properties<a name="aws-properties-quicksight-template-pivottablepaginatedreportoptions-properties"></a>

`OverflowColumnHeaderVisibility` <a name="cfn-quicksight-template-pivottablepaginatedreportoptions-overflowcolumnheadervisibility"></a>
The visibility of the repeating header rows on each page\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VerticalOverflowVisibility` <a name="cfn-quicksight-template-pivottablepaginatedreportoptions-verticaloverflowvisibility"></a>
The visibility of the printing table overflow across pages\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
