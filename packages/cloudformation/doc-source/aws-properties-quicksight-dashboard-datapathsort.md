# AWS::QuickSight::Dashboard DataPathSort<a name="aws-properties-quicksight-dashboard-datapathsort"></a>

Allows data paths to be sorted by a specific data value\.

## Syntax<a name="aws-properties-quicksight-dashboard-datapathsort-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datapathsort-syntax.json"></a>

```
{
  "[Direction](#cfn-quicksight-dashboard-datapathsort-direction)" : String,
  "[SortPaths](#cfn-quicksight-dashboard-datapathsort-sortpaths)" : [ DataPathValue, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datapathsort-syntax.yaml"></a>

```
  [Direction](#cfn-quicksight-dashboard-datapathsort-direction): String
  [SortPaths](#cfn-quicksight-dashboard-datapathsort-sortpaths):
    - DataPathValue
```

## Properties<a name="aws-properties-quicksight-dashboard-datapathsort-properties"></a>

`Direction` <a name="cfn-quicksight-dashboard-datapathsort-direction"></a>
Determines the sort direction\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ASC | DESC`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortPaths` <a name="cfn-quicksight-dashboard-datapathsort-sortpaths"></a>
The list of data paths that need to be sorted\.  
_Required_: Yes  
_Type_: List of [DataPathValue](aws-properties-quicksight-dashboard-datapathvalue.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
