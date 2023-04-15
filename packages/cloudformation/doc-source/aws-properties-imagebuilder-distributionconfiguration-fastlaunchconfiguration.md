# AWS::ImageBuilder::DistributionConfiguration FastLaunchConfiguration<a name="aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration"></a>

Define and configure faster launching for output Windows AMIs\.

## Syntax<a name="aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration-syntax.json"></a>

```
{
  "[AccountId](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-accountid)" : String,
  "[Enabled](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-enabled)" : Boolean,
  "[LaunchTemplate](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-launchtemplate)" : FastLaunchLaunchTemplateSpecification,
  "[MaxParallelLaunches](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-maxparallellaunches)" : Integer,
  "[SnapshotConfiguration](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-snapshotconfiguration)" : FastLaunchSnapshotConfiguration
}
```

### YAML<a name="aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration-syntax.yaml"></a>

```
  [AccountId](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-accountid): String
  [Enabled](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-enabled): Boolean
  [LaunchTemplate](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-launchtemplate):
    FastLaunchLaunchTemplateSpecification
  [MaxParallelLaunches](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-maxparallellaunches): Integer
  [SnapshotConfiguration](#cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-snapshotconfiguration):
    FastLaunchSnapshotConfiguration
```

## Properties<a name="aws-properties-imagebuilder-distributionconfiguration-fastlaunchconfiguration-properties"></a>

`AccountId` <a name="cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-accountid"></a>
The owner account ID for the fast\-launch enabled Windows AMI\.  
_Required_: No  
_Type_: String  
_Pattern_: `^[0-9]{12}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enabled` <a name="cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-enabled"></a>
A Boolean that represents the current state of faster launching for the Windows AMI\. Set to `true` to start using Windows faster launching, or `false` to stop using it\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchTemplate` <a name="cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-launchtemplate"></a>
The launch template that the fast\-launch enabled Windows AMI uses when it launches Windows instances to create pre\-provisioned snapshots\.  
_Required_: No  
_Type_: [FastLaunchLaunchTemplateSpecification](aws-properties-imagebuilder-distributionconfiguration-fastlaunchlaunchtemplatespecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaxParallelLaunches` <a name="cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-maxparallellaunches"></a>
The maximum number of parallel instances that are launched for creating resources\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `10000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SnapshotConfiguration` <a name="cfn-imagebuilder-distributionconfiguration-fastlaunchconfiguration-snapshotconfiguration"></a>
Configuration settings for managing the number of snapshots that are created from pre\-provisioned instances for the Windows AMI when faster launching is enabled\.  
_Required_: No  
_Type_: [FastLaunchSnapshotConfiguration](aws-properties-imagebuilder-distributionconfiguration-fastlaunchsnapshotconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
