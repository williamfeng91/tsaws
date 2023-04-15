# AWS::KinesisAnalyticsV2::Application ZeppelinApplicationConfiguration<a name="aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration"></a>

The configuration of a Kinesis Data Analytics Studio notebook\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-syntax.json"></a>

```
{
  "[CatalogConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-catalogconfiguration)" : CatalogConfiguration,
  "[CustomArtifactsConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-customartifactsconfiguration)" : [ CustomArtifactConfiguration, ... ],
  "[DeployAsApplicationConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-deployasapplicationconfiguration)" : DeployAsApplicationConfiguration,
  "[MonitoringConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-monitoringconfiguration)" : ZeppelinMonitoringConfiguration
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-syntax.yaml"></a>

```
  [CatalogConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-catalogconfiguration):
    CatalogConfiguration
  [CustomArtifactsConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-customartifactsconfiguration):
    - CustomArtifactConfiguration
  [DeployAsApplicationConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-deployasapplicationconfiguration):
    DeployAsApplicationConfiguration
  [MonitoringConfiguration](#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-monitoringconfiguration):
    ZeppelinMonitoringConfiguration
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-properties"></a>

`CatalogConfiguration` <a name="cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-catalogconfiguration"></a>
The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook\.  
_Required_: No  
_Type_: [CatalogConfiguration](aws-properties-kinesisanalyticsv2-application-catalogconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomArtifactsConfiguration` <a name="cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-customartifactsconfiguration"></a>
A list of `CustomArtifactConfiguration` objects\.  
_Required_: No  
_Type_: List of [CustomArtifactConfiguration](aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeployAsApplicationConfiguration` <a name="cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-deployasapplicationconfiguration"></a>
The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state\.  
_Required_: No  
_Type_: [DeployAsApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MonitoringConfiguration` <a name="cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-monitoringconfiguration"></a>
The monitoring configuration of a Kinesis Data Analytics Studio notebook\.  
_Required_: No  
_Type_: [ZeppelinMonitoringConfiguration](aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
