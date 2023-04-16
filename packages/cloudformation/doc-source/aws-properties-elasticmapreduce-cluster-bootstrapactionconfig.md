# AWS::EMR::Cluster BootstrapActionConfig<a name="aws-properties-elasticmapreduce-cluster-bootstrapactionconfig"></a>

`BootstrapActionConfig` is a property of `AWS::EMR::Cluster` that can be used to run bootstrap actions on EMR clusters\. You can use a bootstrap action to install software and configure EC2 instances for all cluster nodes before EMR installs and configures open\-source big data applications on cluster instances\. For more information, see [Create Bootstrap Actions to Install Additional Software](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-bootstrap.html) in the _Amazon EMR Management Guide_\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-bootstrapactionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-bootstrapactionconfig-syntax.json"></a>

```
{
  "[Name](#cfn-elasticmapreduce-cluster-bootstrapactionconfig-name)" : String,
  "[ScriptBootstrapAction](#cfn-elasticmapreduce-cluster-bootstrapactionconfig-scriptbootstrapaction)" : ScriptBootstrapActionConfig
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-bootstrapactionconfig-syntax.yaml"></a>

```
  [Name](#cfn-elasticmapreduce-cluster-bootstrapactionconfig-name): String
  [ScriptBootstrapAction](#cfn-elasticmapreduce-cluster-bootstrapactionconfig-scriptbootstrapaction):
    ScriptBootstrapActionConfig
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-bootstrapactionconfig-properties"></a>

`Name` <a name="cfn-elasticmapreduce-cluster-bootstrapactionconfig-name"></a>
The name of the bootstrap action\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScriptBootstrapAction` <a name="cfn-elasticmapreduce-cluster-bootstrapactionconfig-scriptbootstrapaction"></a>
The script run by the bootstrap action\.  
_Required_: Yes  
_Type_: [ScriptBootstrapActionConfig](aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
