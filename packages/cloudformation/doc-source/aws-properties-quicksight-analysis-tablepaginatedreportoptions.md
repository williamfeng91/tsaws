# AWS::QuickSight::Analysis TablePaginatedReportOptions<a name="aws-properties-quicksight-analysis-tablepaginatedreportoptions"></a>

The paginated report options for a table visual\.

## Syntax<a name="aws-properties-quicksight-analysis-tablepaginatedreportoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-tablepaginatedreportoptions-syntax.json"></a>

```
{
  "[OverflowColumnHeaderVisibility](#cfn-quicksight-analysis-tablepaginatedreportoptions-overflowcolumnheadervisibility)" : String,
  "[VerticalOverflowVisibility](#cfn-quicksight-analysis-tablepaginatedreportoptions-verticaloverflowvisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-tablepaginatedreportoptions-syntax.yaml"></a>

```
  [OverflowColumnHeaderVisibility](#cfn-quicksight-analysis-tablepaginatedreportoptions-overflowcolumnheadervisibility): String
  [VerticalOverflowVisibility](#cfn-quicksight-analysis-tablepaginatedreportoptions-verticaloverflowvisibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-tablepaginatedreportoptions-properties"></a>

`OverflowColumnHeaderVisibility` <a name="cfn-quicksight-analysis-tablepaginatedreportoptions-overflowcolumnheadervisibility"></a>
The visibility of repeating header rows on each page\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VerticalOverflowVisibility` <a name="cfn-quicksight-analysis-tablepaginatedreportoptions-verticaloverflowvisibility"></a>
The visibility of printing table overflow across pages\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)