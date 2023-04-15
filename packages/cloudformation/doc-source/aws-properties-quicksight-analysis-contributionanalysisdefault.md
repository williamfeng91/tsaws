# AWS::QuickSight::Analysis ContributionAnalysisDefault<a name="aws-properties-quicksight-analysis-contributionanalysisdefault"></a>

The contribution analysis visual display for a line, pie, or bar chart\.

## Syntax<a name="aws-properties-quicksight-analysis-contributionanalysisdefault-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-contributionanalysisdefault-syntax.json"></a>

```
{
  "[ContributorDimensions](#cfn-quicksight-analysis-contributionanalysisdefault-contributordimensions)" : [ ColumnIdentifier, ... ],
  "[MeasureFieldId](#cfn-quicksight-analysis-contributionanalysisdefault-measurefieldid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-contributionanalysisdefault-syntax.yaml"></a>

```
  [ContributorDimensions](#cfn-quicksight-analysis-contributionanalysisdefault-contributordimensions):
    - ColumnIdentifier
  [MeasureFieldId](#cfn-quicksight-analysis-contributionanalysisdefault-measurefieldid): String
```

## Properties<a name="aws-properties-quicksight-analysis-contributionanalysisdefault-properties"></a>

`ContributorDimensions` <a name="cfn-quicksight-analysis-contributionanalysisdefault-contributordimensions"></a>
The dimensions columns that are used in the contribution analysis, usually a list of `ColumnIdentifiers`\.  
_Required_: Yes  
_Type_: List of [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Maximum_: `4`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MeasureFieldId` <a name="cfn-quicksight-analysis-contributionanalysisdefault-measurefieldid"></a>
The measure field that is used in the contribution analysis\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
