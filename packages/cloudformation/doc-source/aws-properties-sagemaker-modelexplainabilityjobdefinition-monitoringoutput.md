# AWS::SageMaker::ModelExplainabilityJobDefinition MonitoringOutput<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput"></a>

The output object for a monitoring job\.

## Syntax<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-syntax.json"></a>

```
{
  "[S3Output](#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-s3output)" : S3Output
}
```

### YAML<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-syntax.yaml"></a>

```
  [S3Output](#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-s3output):
    S3Output
```

## Properties<a name="aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-properties"></a>

`S3Output` <a name="cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-s3output"></a>
The Amazon S3 storage location where the results of a monitoring job are saved\.  
_Required_: Yes  
_Type_: [S3Output](aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
