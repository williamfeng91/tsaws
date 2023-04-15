# AWS::SageMaker::MonitoringSchedule MonitoringAppSpecification<a name="aws-properties-sagemaker-monitoringschedule-monitoringappspecification"></a>

Container image configuration object for the monitoring job\.

## Syntax<a name="aws-properties-sagemaker-monitoringschedule-monitoringappspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-monitoringschedule-monitoringappspecification-syntax.json"></a>

```
{
  "[ContainerArguments](#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerarguments)" : [ String, ... ],
  "[ContainerEntrypoint](#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerentrypoint)" : [ String, ... ],
  "[ImageUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-imageuri)" : String,
  "[PostAnalyticsProcessorSourceUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-postanalyticsprocessorsourceuri)" : String,
  "[RecordPreprocessorSourceUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-recordpreprocessorsourceuri)" : String
}
```

### YAML<a name="aws-properties-sagemaker-monitoringschedule-monitoringappspecification-syntax.yaml"></a>

```
  [ContainerArguments](#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerarguments):
    - String
  [ContainerEntrypoint](#cfn-sagemaker-monitoringschedule-monitoringappspecification-containerentrypoint):
    - String
  [ImageUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-imageuri): String
  [PostAnalyticsProcessorSourceUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-postanalyticsprocessorsourceuri): String
  [RecordPreprocessorSourceUri](#cfn-sagemaker-monitoringschedule-monitoringappspecification-recordpreprocessorsourceuri): String
```

## Properties<a name="aws-properties-sagemaker-monitoringschedule-monitoringappspecification-properties"></a>

`ContainerArguments` <a name="cfn-sagemaker-monitoringschedule-monitoringappspecification-containerarguments"></a>
An array of arguments for the container used to run the monitoring job\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContainerEntrypoint` <a name="cfn-sagemaker-monitoringschedule-monitoringappspecification-containerentrypoint"></a>
Specifies the entrypoint for a container used to run the monitoring job\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageUri` <a name="cfn-sagemaker-monitoringschedule-monitoringappspecification-imageuri"></a>
The container image to be run by the monitoring job\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `255`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PostAnalyticsProcessorSourceUri` <a name="cfn-sagemaker-monitoringschedule-monitoringappspecification-postanalyticsprocessorsourceuri"></a>
An Amazon S3 URI to a script that is called after analysis has been performed\. Applicable only for the built\-in \(first party\) containers\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecordPreprocessorSourceUri` <a name="cfn-sagemaker-monitoringschedule-monitoringappspecification-recordpreprocessorsourceuri"></a>
An Amazon S3 URI to a script that is called per row prior to running analysis\. It can base64 decode the payload and convert it into a flatted json so that the built\-in container can use the converted data\. Applicable only for the built\-in \(first party\) containers\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
