# AWS::KinesisAnalyticsV2::Application ApplicationConfiguration<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration"></a>

Specifies the creation parameters for a Kinesis Data Analytics application\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration-syntax.json"></a>

```
{
  "[ApplicationCodeConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationcodeconfiguration)" : ApplicationCodeConfiguration,
  "[ApplicationSnapshotConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsnapshotconfiguration)" : ApplicationSnapshotConfiguration,
  "[EnvironmentProperties](#cfn-kinesisanalyticsv2-application-applicationconfiguration-environmentproperties)" : EnvironmentProperties,
  "[FlinkApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-flinkapplicationconfiguration)" : FlinkApplicationConfiguration,
  "[SqlApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-sqlapplicationconfiguration)" : SqlApplicationConfiguration,
  "[VpcConfigurations](#cfn-kinesisanalyticsv2-application-applicationconfiguration-vpcconfigurations)" : [ VpcConfiguration, ... ],
  "[ZeppelinApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-zeppelinapplicationconfiguration)" : ZeppelinApplicationConfiguration
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration-syntax.yaml"></a>

```
  [ApplicationCodeConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationcodeconfiguration):
    ApplicationCodeConfiguration
  [ApplicationSnapshotConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsnapshotconfiguration):
    ApplicationSnapshotConfiguration
  [EnvironmentProperties](#cfn-kinesisanalyticsv2-application-applicationconfiguration-environmentproperties):
    EnvironmentProperties
  [FlinkApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-flinkapplicationconfiguration):
    FlinkApplicationConfiguration
  [SqlApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-sqlapplicationconfiguration):
    SqlApplicationConfiguration
  [VpcConfigurations](#cfn-kinesisanalyticsv2-application-applicationconfiguration-vpcconfigurations):
    - VpcConfiguration
  [ZeppelinApplicationConfiguration](#cfn-kinesisanalyticsv2-application-applicationconfiguration-zeppelinapplicationconfiguration):
    ZeppelinApplicationConfiguration
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration-properties"></a>

`ApplicationCodeConfiguration` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationcodeconfiguration"></a>
The code location and type parameters for a Flink\-based Kinesis Data Analytics application\.  
_Required_: Conditional  
_Type_: [ApplicationCodeConfiguration](aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApplicationSnapshotConfiguration` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsnapshotconfiguration"></a>
Describes whether snapshots are enabled for a Flink\-based Kinesis Data Analytics application\.  
_Required_: No  
_Type_: [ApplicationSnapshotConfiguration](aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnvironmentProperties` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-environmentproperties"></a>
Describes execution properties for a Flink\-based Kinesis Data Analytics application\.  
_Required_: No  
_Type_: [EnvironmentProperties](aws-properties-kinesisanalyticsv2-application-environmentproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FlinkApplicationConfiguration` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-flinkapplicationconfiguration"></a>
The creation and update parameters for a Flink\-based Kinesis Data Analytics application\.  
_Required_: No  
_Type_: [FlinkApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SqlApplicationConfiguration` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-sqlapplicationconfiguration"></a>
The creation and update parameters for a SQL\-based Kinesis Data Analytics application\.  
_Required_: No  
_Type_: [SqlApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcConfigurations` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-vpcconfigurations"></a>
The array of descriptions of VPC configurations available to the application\.  
_Required_: No  
_Type_: List of [VpcConfiguration](aws-properties-kinesisanalyticsv2-application-vpcconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ZeppelinApplicationConfiguration` <a name="cfn-kinesisanalyticsv2-application-applicationconfiguration-zeppelinapplicationconfiguration"></a>
The configuration parameters for a Kinesis Data Analytics Studio notebook\.  
_Required_: No  
_Type_: [ZeppelinApplicationConfiguration](aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-applicationconfiguration--seealso"></a>

- [ApplicationConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ApplicationConfiguration.html) in the _Amazon Kinesis Data Analytics API Reference_
