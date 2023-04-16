# AWS::QuickSight::Template DataSetReference<a name="aws-properties-quicksight-template-datasetreference"></a>

Dataset reference\.

## Syntax<a name="aws-properties-quicksight-template-datasetreference-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-datasetreference-syntax.json"></a>

```
{
  "[DataSetArn](#cfn-quicksight-template-datasetreference-datasetarn)" : String,
  "[DataSetPlaceholder](#cfn-quicksight-template-datasetreference-datasetplaceholder)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-datasetreference-syntax.yaml"></a>

```
  [DataSetArn](#cfn-quicksight-template-datasetreference-datasetarn): String
  [DataSetPlaceholder](#cfn-quicksight-template-datasetreference-datasetplaceholder): String
```

## Properties<a name="aws-properties-quicksight-template-datasetreference-properties"></a>

`DataSetArn` <a name="cfn-quicksight-template-datasetreference-datasetarn"></a>
Dataset Amazon Resource Name \(ARN\)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetPlaceholder` <a name="cfn-quicksight-template-datasetreference-datasetplaceholder"></a>
Dataset placeholder\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `.*\S.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
