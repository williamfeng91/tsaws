# AWS::QuickSight::Analysis RollingDateConfiguration<a name="aws-properties-quicksight-analysis-rollingdateconfiguration"></a>

The rolling date configuration of a date time filter\.

## Syntax<a name="aws-properties-quicksight-analysis-rollingdateconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-rollingdateconfiguration-syntax.json"></a>

```
{
  "[DataSetIdentifier](#cfn-quicksight-analysis-rollingdateconfiguration-datasetidentifier)" : String,
  "[Expression](#cfn-quicksight-analysis-rollingdateconfiguration-expression)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-rollingdateconfiguration-syntax.yaml"></a>

```
  [DataSetIdentifier](#cfn-quicksight-analysis-rollingdateconfiguration-datasetidentifier): String
  [Expression](#cfn-quicksight-analysis-rollingdateconfiguration-expression): String
```

## Properties<a name="aws-properties-quicksight-analysis-rollingdateconfiguration-properties"></a>

`DataSetIdentifier` <a name="cfn-quicksight-analysis-rollingdateconfiguration-datasetidentifier"></a>
The data set that is used in the rolling date configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-analysis-rollingdateconfiguration-expression"></a>
The expression of the rolling date configuration\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)