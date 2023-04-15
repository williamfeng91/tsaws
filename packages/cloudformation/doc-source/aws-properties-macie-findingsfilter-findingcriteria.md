# AWS::Macie::FindingsFilter FindingCriteria<a name="aws-properties-macie-findingsfilter-findingcriteria"></a>

Specifies, as a map, one or more property\-based conditions that filter the results of a query for findings\. For more information, see [Filtering findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_\.

## Syntax<a name="aws-properties-macie-findingsfilter-findingcriteria-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-macie-findingsfilter-findingcriteria-syntax.json"></a>

```
{
  "[Criterion](#cfn-macie-findingsfilter-findingcriteria-criterion)" : {Key : Value, ...}
}
```

### YAML<a name="aws-properties-macie-findingsfilter-findingcriteria-syntax.yaml"></a>

```
  [Criterion](#cfn-macie-findingsfilter-findingcriteria-criterion):
    Key : Value
```

## Properties<a name="aws-properties-macie-findingsfilter-findingcriteria-properties"></a>

`Criterion` <a name="cfn-macie-findingsfilter-findingcriteria-criterion"></a>
Specifies a condition that defines the property, operator, and one or more values to use to filter the results\.  
_Required_: No  
_Type_: Map of [CriterionAdditionalProperties](aws-properties-macie-findingsfilter-criterionadditionalproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)