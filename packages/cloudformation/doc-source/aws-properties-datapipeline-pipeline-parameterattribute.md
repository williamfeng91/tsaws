# AWS::DataPipeline::Pipeline ParameterAttribute<a name="aws-properties-datapipeline-pipeline-parameterattribute"></a>

`Attribute` is a property of `ParameterObject` that defines the attributes of a parameter object as key\-value pairs\.

## Syntax<a name="aws-properties-datapipeline-pipeline-parameterattribute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-datapipeline-pipeline-parameterattribute-syntax.json"></a>

```
{
  "[Key](#cfn-datapipeline-pipeline-parameterattribute-key)" : String,
  "[StringValue](#cfn-datapipeline-pipeline-parameterattribute-stringvalue)" : String
}
```

### YAML<a name="aws-properties-datapipeline-pipeline-parameterattribute-syntax.yaml"></a>

```
  [Key](#cfn-datapipeline-pipeline-parameterattribute-key): String
  [StringValue](#cfn-datapipeline-pipeline-parameterattribute-stringvalue):
    String
```

## Properties<a name="aws-properties-datapipeline-pipeline-parameterattribute-properties"></a>

`Key` <a name="cfn-datapipeline-pipeline-parameterattribute-key"></a>
The field identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringValue` <a name="cfn-datapipeline-pipeline-parameterattribute-stringvalue"></a>
The field value, expressed as a String\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10240`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
