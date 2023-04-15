# AWS::Events::Endpoint ReplicationConfig<a name="aws-properties-events-endpoint-replicationconfig"></a>

Endpoints can replicate all events to the secondary Region\.

## Syntax<a name="aws-properties-events-endpoint-replicationconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-endpoint-replicationconfig-syntax.json"></a>

```
{
  "[State](#cfn-events-endpoint-replicationconfig-state)" : String
}
```

### YAML<a name="aws-properties-events-endpoint-replicationconfig-syntax.yaml"></a>

```
  [State](#cfn-events-endpoint-replicationconfig-state): String
```

## Properties<a name="aws-properties-events-endpoint-replicationconfig-properties"></a>

`State` <a name="cfn-events-endpoint-replicationconfig-state"></a>
The state of event replication\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
