# AWS::IoTAnalytics::Dataset VersioningConfiguration<a name="aws-properties-iotanalytics-dataset-versioningconfiguration"></a>

Information about the versioning of dataset contents\.

## Syntax<a name="aws-properties-iotanalytics-dataset-versioningconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-versioningconfiguration-syntax.json"></a>

```
{
  "[MaxVersions](#cfn-iotanalytics-dataset-versioningconfiguration-maxversions)" : Integer,
  "[Unlimited](#cfn-iotanalytics-dataset-versioningconfiguration-unlimited)" : Boolean
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-versioningconfiguration-syntax.yaml"></a>

```
  [MaxVersions](#cfn-iotanalytics-dataset-versioningconfiguration-maxversions): Integer
  [Unlimited](#cfn-iotanalytics-dataset-versioningconfiguration-unlimited): Boolean
```

## Properties<a name="aws-properties-iotanalytics-dataset-versioningconfiguration-properties"></a>

`MaxVersions` <a name="cfn-iotanalytics-dataset-versioningconfiguration-maxversions"></a>
How many versions of dataset contents are kept\. The `unlimited` parameter must be `false`\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Unlimited` <a name="cfn-iotanalytics-dataset-versioningconfiguration-unlimited"></a>
If true, unlimited versions of dataset contents are kept\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
