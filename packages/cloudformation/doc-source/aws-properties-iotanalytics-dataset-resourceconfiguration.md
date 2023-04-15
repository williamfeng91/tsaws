# AWS::IoTAnalytics::Dataset ResourceConfiguration<a name="aws-properties-iotanalytics-dataset-resourceconfiguration"></a>

The configuration of the resource used to execute the `containerAction`\.

## Syntax<a name="aws-properties-iotanalytics-dataset-resourceconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-resourceconfiguration-syntax.json"></a>

```
{
  "[ComputeType](#cfn-iotanalytics-dataset-resourceconfiguration-computetype)" : String,
  "[VolumeSizeInGB](#cfn-iotanalytics-dataset-resourceconfiguration-volumesizeingb)" : Integer
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-resourceconfiguration-syntax.yaml"></a>

```
  [ComputeType](#cfn-iotanalytics-dataset-resourceconfiguration-computetype): String
  [VolumeSizeInGB](#cfn-iotanalytics-dataset-resourceconfiguration-volumesizeingb): Integer
```

## Properties<a name="aws-properties-iotanalytics-dataset-resourceconfiguration-properties"></a>

`ComputeType` <a name="cfn-iotanalytics-dataset-resourceconfiguration-computetype"></a>
The type of the compute resource used to execute the `containerAction`\. Possible values are: `ACU_1` \(vCPU=4, memory=16 GiB\) or `ACU_2` \(vCPU=8, memory=32 GiB\)\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ACU_1 | ACU_2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VolumeSizeInGB` <a name="cfn-iotanalytics-dataset-resourceconfiguration-volumesizeingb"></a>
The size, in GB, of the persistent storage available to the resource instance used to execute the `containerAction` \(min: 1, max: 50\)\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
