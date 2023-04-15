# AWS::EMR::Cluster ScriptBootstrapActionConfig<a name="aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig"></a>

`ScriptBootstrapActionConfig` is a subproperty of the `BootstrapActionConfig` property type\. `ScriptBootstrapActionConfig` specifies the arguments and location of the bootstrap script for EMR to run on all cluster nodes before it installs open\-source big data applications on them\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig-syntax.json"></a>

```
{
  "[Args](#cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-args)" : [ String, ... ],
  "[Path](#cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-path)" : String
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig-syntax.yaml"></a>

```
  [Args](#cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-args):
    - String
  [Path](#cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-path): String
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-scriptbootstrapactionconfig-properties"></a>

`Args` <a name="cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-args"></a>
A list of command line arguments to pass to the bootstrap action script\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Path` <a name="cfn-elasticmapreduce-cluster-scriptbootstrapactionconfig-path"></a>
Location in Amazon S3 of the script to run during a bootstrap action\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10280`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
