# AWS::MediaConnect::Flow FailoverConfig<a name="aws-properties-mediaconnect-flow-failoverconfig"></a>

The settings for source failover\.

## Syntax<a name="aws-properties-mediaconnect-flow-failoverconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-mediaconnect-flow-failoverconfig-syntax.json"></a>

```
{
  "[FailoverMode](#cfn-mediaconnect-flow-failoverconfig-failovermode)" : String,
  "[RecoveryWindow](#cfn-mediaconnect-flow-failoverconfig-recoverywindow)" : Integer,
  "[SourcePriority](#cfn-mediaconnect-flow-failoverconfig-sourcepriority)" : SourcePriority,
  "[State](#cfn-mediaconnect-flow-failoverconfig-state)" : String
}
```

### YAML<a name="aws-properties-mediaconnect-flow-failoverconfig-syntax.yaml"></a>

```
  [FailoverMode](#cfn-mediaconnect-flow-failoverconfig-failovermode): String
  [RecoveryWindow](#cfn-mediaconnect-flow-failoverconfig-recoverywindow): Integer
  [SourcePriority](#cfn-mediaconnect-flow-failoverconfig-sourcepriority):
    SourcePriority
  [State](#cfn-mediaconnect-flow-failoverconfig-state): String
```

## Properties<a name="aws-properties-mediaconnect-flow-failoverconfig-properties"></a>

`FailoverMode` <a name="cfn-mediaconnect-flow-failoverconfig-failovermode"></a>
The type of failover you choose for this flow\. MERGE combines the source streams into a single stream, allowing graceful recovery from any single\-source loss\. FAILOVER allows switching between different streams\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecoveryWindow` <a name="cfn-mediaconnect-flow-failoverconfig-recoverywindow"></a>
The size of the buffer \(delay\) that the service maintains\. A larger buffer means a longer delay in transmitting the stream, but more room for error correction\. A smaller buffer means a shorter delay, but less room for error correction\. You can choose a value from 100\-500 ms\. If you keep this field blank, the service uses the default value of 200 ms\. This setting only applies when Failover Mode is set to MERGE\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourcePriority` <a name="cfn-mediaconnect-flow-failoverconfig-sourcepriority"></a>
The priority you want to assign to a source\. You can have a primary stream and a backup stream or two equally prioritized streams\. This setting only applies when Failover Mode is set to FAILOVER\.  
_Required_: No  
_Type_: [SourcePriority](aws-properties-mediaconnect-flow-sourcepriority.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`State` <a name="cfn-mediaconnect-flow-failoverconfig-state"></a>
The state of source failover on the flow\. If the state is disabled, the flow can have only one source\. If the state is enabled, the flow can have one or two sources\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
