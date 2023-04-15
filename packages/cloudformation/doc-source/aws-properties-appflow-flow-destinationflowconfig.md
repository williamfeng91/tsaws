# AWS::AppFlow::Flow DestinationFlowConfig<a name="aws-properties-appflow-flow-destinationflowconfig"></a>

Contains information about the configuration of destination connectors present in the flow\.

## Syntax<a name="aws-properties-appflow-flow-destinationflowconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-destinationflowconfig-syntax.json"></a>

```
{
  "[ApiVersion](#cfn-appflow-flow-destinationflowconfig-apiversion)" : String,
  "[ConnectorProfileName](#cfn-appflow-flow-destinationflowconfig-connectorprofilename)" : String,
  "[ConnectorType](#cfn-appflow-flow-destinationflowconfig-connectortype)" : String,
  "[DestinationConnectorProperties](#cfn-appflow-flow-destinationflowconfig-destinationconnectorproperties)" : DestinationConnectorProperties
}
```

### YAML<a name="aws-properties-appflow-flow-destinationflowconfig-syntax.yaml"></a>

```
  [ApiVersion](#cfn-appflow-flow-destinationflowconfig-apiversion): String
  [ConnectorProfileName](#cfn-appflow-flow-destinationflowconfig-connectorprofilename): String
  [ConnectorType](#cfn-appflow-flow-destinationflowconfig-connectortype): String
  [DestinationConnectorProperties](#cfn-appflow-flow-destinationflowconfig-destinationconnectorproperties):
    DestinationConnectorProperties
```

## Properties<a name="aws-properties-appflow-flow-destinationflowconfig-properties"></a>

`ApiVersion` <a name="cfn-appflow-flow-destinationflowconfig-apiversion"></a>
The API version that the destination connector uses\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorProfileName` <a name="cfn-appflow-flow-destinationflowconfig-connectorprofilename"></a>
The name of the connector profile\. This name must be unique for each connector profile in the AWS account\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `[\w/!@#+=.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorType` <a name="cfn-appflow-flow-destinationflowconfig-connectortype"></a>
The type of destination connector, such as Sales force, Amazon S3, and so on\.  
_Allowed Values_: `EventBridge | Redshift | S3 | Salesforce | Snowflake`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationConnectorProperties` <a name="cfn-appflow-flow-destinationflowconfig-destinationconnectorproperties"></a>
This stores the information that is required to query a particular connector\.  
_Required_: Yes  
_Type_: [DestinationConnectorProperties](aws-properties-appflow-flow-destinationconnectorproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-destinationflowconfig--seealso"></a>

- [DestinationConnectorProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DestinationConnectorProperties.html) in the _Amazon AppFlow API Reference_\.