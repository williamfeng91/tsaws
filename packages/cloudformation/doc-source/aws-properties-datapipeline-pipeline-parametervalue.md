# AWS::DataPipeline::Pipeline ParameterValue<a name="aws-properties-datapipeline-pipeline-parametervalue"></a>

A value or list of parameter values\.

## Syntax<a name="aws-properties-datapipeline-pipeline-parametervalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-datapipeline-pipeline-parametervalue-syntax.json"></a>

```
{
  "[Id](#cfn-datapipeline-pipeline-parametervalue-id)" : String,
  "[StringValue](#cfn-datapipeline-pipeline-parametervalue-stringvalue)" : String
}
```

### YAML<a name="aws-properties-datapipeline-pipeline-parametervalue-syntax.yaml"></a>

```
  [Id](#cfn-datapipeline-pipeline-parametervalue-id): String
  [StringValue](#cfn-datapipeline-pipeline-parametervalue-stringvalue):
    String
```

## Properties<a name="aws-properties-datapipeline-pipeline-parametervalue-properties"></a>

`Id` <a name="cfn-datapipeline-pipeline-parametervalue-id"></a>
The ID of the parameter value\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringValue` <a name="cfn-datapipeline-pipeline-parametervalue-stringvalue"></a>
The field value, expressed as a String\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10240`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
