# AWS::EMR::Cluster HadoopJarStepConfig<a name="aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig"></a>

The `HadoopJarStepConfig` property type specifies a job flow step consisting of a JAR file whose main function will be executed\. The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig-syntax.json"></a>

```
{
  "[Args](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-args)" : [ String, ... ],
  "[Jar](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-jar)" : String,
  "[MainClass](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-mainclass)" : String,
  "[StepProperties](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-stepproperties)" : [ KeyValue, ... ]
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig-syntax.yaml"></a>

```
  [Args](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-args):
    - String
  [Jar](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-jar): String
  [MainClass](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-mainclass): String
  [StepProperties](#cfn-elasticmapreduce-cluster-hadoopjarstepconfig-stepproperties):
    - KeyValue
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-hadoopjarstepconfig-properties"></a>

`Args` <a name="cfn-elasticmapreduce-cluster-hadoopjarstepconfig-args"></a>
A list of command line arguments passed to the JAR file's main function when executed\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Jar` <a name="cfn-elasticmapreduce-cluster-hadoopjarstepconfig-jar"></a>
A path to a JAR file run during the step\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10280`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MainClass` <a name="cfn-elasticmapreduce-cluster-hadoopjarstepconfig-mainclass"></a>
The name of the main class in the specified Java file\. If not specified, the JAR file should specify a Main\-Class in its manifest file\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10280`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StepProperties` <a name="cfn-elasticmapreduce-cluster-hadoopjarstepconfig-stepproperties"></a>
A list of Java properties that are set when the step runs\. You can use these properties to pass key\-value pairs to your main function\.  
_Required_: No  
_Type_: List of [KeyValue](aws-properties-elasticmapreduce-cluster-keyvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
