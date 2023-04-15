# AWS::SageMaker::ModelQualityJobDefinition ModelQualityAppSpecification<a name="aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification"></a>

Container image configuration object for the monitoring job\.

## Syntax<a name="aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification-syntax.json"></a>

```
{
  "[ContainerArguments](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerarguments)" : [ String, ... ],
  "[ContainerEntrypoint](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerentrypoint)" : [ String, ... ],
  "[Environment](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-environment)" : {Key : Value, ...},
  "[ImageUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-imageuri)" : String,
  "[PostAnalyticsProcessorSourceUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-postanalyticsprocessorsourceuri)" : String,
  "[ProblemType](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-problemtype)" : String,
  "[RecordPreprocessorSourceUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-recordpreprocessorsourceuri)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification-syntax.yaml"></a>

```
  [ContainerArguments](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerarguments):
    - String
  [ContainerEntrypoint](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerentrypoint):
    - String
  [Environment](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-environment):
    Key : Value
  [ImageUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-imageuri): String
  [PostAnalyticsProcessorSourceUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-postanalyticsprocessorsourceuri): String
  [ProblemType](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-problemtype): String
  [RecordPreprocessorSourceUri](#cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-recordpreprocessorsourceuri): String
```

## Properties<a name="aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification-properties"></a>

`ContainerArguments` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerarguments"></a>
An array of arguments for the container used to run the monitoring job\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ContainerEntrypoint` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-containerentrypoint"></a>
Specifies the entrypoint for a container that the monitoring job runs\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Environment` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-environment"></a>
Sets the environment variables in the container that the monitoring job runs\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ImageUri` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-imageuri"></a>
The address of the container image that the monitoring job runs\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`PostAnalyticsProcessorSourceUri` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-postanalyticsprocessorsourceuri"></a>
An Amazon S3 URI to a script that is called after analysis has been performed\. Applicable only for the built\-in \(first party\) containers\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProblemType` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-problemtype"></a>
The machine learning problem type of the model that the monitoring job monitors\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BinaryClassification | MulticlassClassification | Regression`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RecordPreprocessorSourceUri` <a name="cfn-sagemaker-modelqualityjobdefinition-modelqualityappspecification-recordpreprocessorsourceuri"></a>
An Amazon S3 URI to a script that is called per row prior to running analysis\. It can base64 decode the payload and convert it into a flatted json so that the built\-in container can use the converted data\. Applicable only for the built\-in \(first party\) containers\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
