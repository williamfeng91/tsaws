# AWS::EMR::Step KeyValue<a name="aws-properties-elasticmapreduce-step-keyvalue"></a>

`KeyValue` is a subproperty of the `HadoopJarStepConfig` property type\. `KeyValue` is used to pass parameters to a step\.

## Syntax<a name="aws-properties-elasticmapreduce-step-keyvalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-step-keyvalue-syntax.json"></a>

```
{
  "[Key](#cfn-elasticmapreduce-step-keyvalue-key)" : String,
  "[Value](#cfn-elasticmapreduce-step-keyvalue-value)" : String
}
```

### YAML<a name="aws-properties-elasticmapreduce-step-keyvalue-syntax.yaml"></a>

```
  [Key](#cfn-elasticmapreduce-step-keyvalue-key): String
  [Value](#cfn-elasticmapreduce-step-keyvalue-value): String
```

## Properties<a name="aws-properties-elasticmapreduce-step-keyvalue-properties"></a>

`Key` <a name="cfn-elasticmapreduce-step-keyvalue-key"></a>
The unique identifier of a key\-value pair\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10280`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Value` <a name="cfn-elasticmapreduce-step-keyvalue-value"></a>
The value part of the identified key\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10280`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
