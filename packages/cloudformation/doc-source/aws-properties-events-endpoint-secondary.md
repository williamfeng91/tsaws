# AWS::Events::Endpoint Secondary<a name="aws-properties-events-endpoint-secondary"></a>

The secondary Region that processes events when failover is triggered or replication is enabled\.

## Syntax<a name="aws-properties-events-endpoint-secondary-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-endpoint-secondary-syntax.json"></a>

```
{
  "[Route](#cfn-events-endpoint-secondary-route)" : String
}
```

### YAML<a name="aws-properties-events-endpoint-secondary-syntax.yaml"></a>

```
  [Route](#cfn-events-endpoint-secondary-route): String
```

## Properties<a name="aws-properties-events-endpoint-secondary-properties"></a>

`Route` <a name="cfn-events-endpoint-secondary-route"></a>
Defines the secondary Region\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `9`  
_Maximum_: `20`  
_Pattern_: `^[\-a-z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
