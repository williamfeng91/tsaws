# AWS::AppFlow::Flow SourceFlowConfig<a name="aws-properties-appflow-flow-sourceflowconfig"></a>

Contains information about the configuration of the source connector used in the flow\.

## Syntax<a name="aws-properties-appflow-flow-sourceflowconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-sourceflowconfig-syntax.json"></a>

```
{
  "[ApiVersion](#cfn-appflow-flow-sourceflowconfig-apiversion)" : String,
  "[ConnectorProfileName](#cfn-appflow-flow-sourceflowconfig-connectorprofilename)" : String,
  "[ConnectorType](#cfn-appflow-flow-sourceflowconfig-connectortype)" : String,
  "[IncrementalPullConfig](#cfn-appflow-flow-sourceflowconfig-incrementalpullconfig)" : IncrementalPullConfig,
  "[SourceConnectorProperties](#cfn-appflow-flow-sourceflowconfig-sourceconnectorproperties)" : SourceConnectorProperties
}
```

### YAML<a name="aws-properties-appflow-flow-sourceflowconfig-syntax.yaml"></a>

```
  [ApiVersion](#cfn-appflow-flow-sourceflowconfig-apiversion): String
  [ConnectorProfileName](#cfn-appflow-flow-sourceflowconfig-connectorprofilename): String
  [ConnectorType](#cfn-appflow-flow-sourceflowconfig-connectortype): String
  [IncrementalPullConfig](#cfn-appflow-flow-sourceflowconfig-incrementalpullconfig):
    IncrementalPullConfig
  [SourceConnectorProperties](#cfn-appflow-flow-sourceflowconfig-sourceconnectorproperties):
    SourceConnectorProperties
```

## Properties<a name="aws-properties-appflow-flow-sourceflowconfig-properties"></a>

`ApiVersion` <a name="cfn-appflow-flow-sourceflowconfig-apiversion"></a>
The API version of the connector when it's used as a source in the flow\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorProfileName` <a name="cfn-appflow-flow-sourceflowconfig-connectorprofilename"></a>
The name of the connector profile\. This name must be unique for each connector profile in the AWS account\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `[\w/!@#+=.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorType` <a name="cfn-appflow-flow-sourceflowconfig-connectortype"></a>
The type of connector, such as Salesforce, Amplitude, and so on\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Amplitude | CustomConnector | CustomerProfiles | Datadog | Dynatrace | EventBridge | Googleanalytics | Honeycode | Infornexus | LookoutMetrics | Marketo | Pardot | Redshift | S3 | Salesforce | SAPOData | Servicenow | Singular | Slack | Snowflake | Trendmicro | Upsolver | Veeva | Zendesk`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncrementalPullConfig` <a name="cfn-appflow-flow-sourceflowconfig-incrementalpullconfig"></a>
Defines the configuration for a scheduled incremental data pull\. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull\.  
_Required_: No  
_Type_: [IncrementalPullConfig](aws-properties-appflow-flow-incrementalpullconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceConnectorProperties` <a name="cfn-appflow-flow-sourceflowconfig-sourceconnectorproperties"></a>
Specifies the information that is required to query a particular source connector\.  
_Required_: Yes  
_Type_: [SourceConnectorProperties](aws-properties-appflow-flow-sourceconnectorproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-sourceflowconfig--seealso"></a>

- [SourceFlowConfig](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SourceFlowConfig.html) in the _Amazon AppFlow API Reference_\.
