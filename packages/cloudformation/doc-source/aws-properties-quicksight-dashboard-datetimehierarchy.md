# AWS::QuickSight::Dashboard DateTimeHierarchy<a name="aws-properties-quicksight-dashboard-datetimehierarchy"></a>

The option that determines the hierarchy of any `DateTime` fields\.

## Syntax<a name="aws-properties-quicksight-dashboard-datetimehierarchy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datetimehierarchy-syntax.json"></a>

```
{
  "[DrillDownFilters](#cfn-quicksight-dashboard-datetimehierarchy-drilldownfilters)" : [ DrillDownFilter, ... ],
  "[HierarchyId](#cfn-quicksight-dashboard-datetimehierarchy-hierarchyid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datetimehierarchy-syntax.yaml"></a>

```
  [DrillDownFilters](#cfn-quicksight-dashboard-datetimehierarchy-drilldownfilters):
    - DrillDownFilter
  [HierarchyId](#cfn-quicksight-dashboard-datetimehierarchy-hierarchyid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-datetimehierarchy-properties"></a>

`DrillDownFilters` <a name="cfn-quicksight-dashboard-datetimehierarchy-drilldownfilters"></a>
The option that determines the drill down filters for the `DateTime` hierarchy\.  
_Required_: No  
_Type_: List of [DrillDownFilter](aws-properties-quicksight-dashboard-drilldownfilter.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HierarchyId` <a name="cfn-quicksight-dashboard-datetimehierarchy-hierarchyid"></a>
The hierarchy ID of the `DateTime` hierarchy\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
