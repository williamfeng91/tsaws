# AWS::AppFlow::Flow DestinationConnectorProperties<a name="aws-properties-appflow-flow-destinationconnectorproperties"></a>

This stores the information that is required to query a particular connector\.

## Syntax<a name="aws-properties-appflow-flow-destinationconnectorproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-destinationconnectorproperties-syntax.json"></a>

```
{
  "[CustomConnector](#cfn-appflow-flow-destinationconnectorproperties-customconnector)" : CustomConnectorDestinationProperties,
  "[EventBridge](#cfn-appflow-flow-destinationconnectorproperties-eventbridge)" : EventBridgeDestinationProperties,
  "[LookoutMetrics](#cfn-appflow-flow-destinationconnectorproperties-lookoutmetrics)" : LookoutMetricsDestinationProperties,
  "[Marketo](#cfn-appflow-flow-destinationconnectorproperties-marketo)" : MarketoDestinationProperties,
  "[Redshift](#cfn-appflow-flow-destinationconnectorproperties-redshift)" : RedshiftDestinationProperties,
  "[S3](#cfn-appflow-flow-destinationconnectorproperties-s3)" : S3DestinationProperties,
  "[Salesforce](#cfn-appflow-flow-destinationconnectorproperties-salesforce)" : SalesforceDestinationProperties,
  "[SAPOData](#cfn-appflow-flow-destinationconnectorproperties-sapodata)" : SAPODataDestinationProperties,
  "[Snowflake](#cfn-appflow-flow-destinationconnectorproperties-snowflake)" : SnowflakeDestinationProperties,
  "[Upsolver](#cfn-appflow-flow-destinationconnectorproperties-upsolver)" : UpsolverDestinationProperties,
  "[Zendesk](#cfn-appflow-flow-destinationconnectorproperties-zendesk)" : ZendeskDestinationProperties
}
```

### YAML<a name="aws-properties-appflow-flow-destinationconnectorproperties-syntax.yaml"></a>

```
  [CustomConnector](#cfn-appflow-flow-destinationconnectorproperties-customconnector):
    CustomConnectorDestinationProperties
  [EventBridge](#cfn-appflow-flow-destinationconnectorproperties-eventbridge):
    EventBridgeDestinationProperties
  [LookoutMetrics](#cfn-appflow-flow-destinationconnectorproperties-lookoutmetrics):
    LookoutMetricsDestinationProperties
  [Marketo](#cfn-appflow-flow-destinationconnectorproperties-marketo):
    MarketoDestinationProperties
  [Redshift](#cfn-appflow-flow-destinationconnectorproperties-redshift):
    RedshiftDestinationProperties
  [S3](#cfn-appflow-flow-destinationconnectorproperties-s3):
    S3DestinationProperties
  [Salesforce](#cfn-appflow-flow-destinationconnectorproperties-salesforce):
    SalesforceDestinationProperties
  [SAPOData](#cfn-appflow-flow-destinationconnectorproperties-sapodata):
    SAPODataDestinationProperties
  [Snowflake](#cfn-appflow-flow-destinationconnectorproperties-snowflake):
    SnowflakeDestinationProperties
  [Upsolver](#cfn-appflow-flow-destinationconnectorproperties-upsolver):
    UpsolverDestinationProperties
  [Zendesk](#cfn-appflow-flow-destinationconnectorproperties-zendesk):
    ZendeskDestinationProperties
```

## Properties<a name="aws-properties-appflow-flow-destinationconnectorproperties-properties"></a>

`CustomConnector` <a name="cfn-appflow-flow-destinationconnectorproperties-customconnector"></a>
The properties that are required to query the custom Connector\.  
_Required_: No  
_Type_: [CustomConnectorDestinationProperties](aws-properties-appflow-flow-customconnectordestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EventBridge` <a name="cfn-appflow-flow-destinationconnectorproperties-eventbridge"></a>
The properties required to query Amazon EventBridge\.  
_Required_: No  
_Type_: [EventBridgeDestinationProperties](aws-properties-appflow-flow-eventbridgedestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LookoutMetrics` <a name="cfn-appflow-flow-destinationconnectorproperties-lookoutmetrics"></a>
The properties required to query Amazon Lookout for Metrics\.  
_Required_: No  
_Type_: [LookoutMetricsDestinationProperties](aws-properties-appflow-flow-lookoutmetricsdestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Marketo` <a name="cfn-appflow-flow-destinationconnectorproperties-marketo"></a>
The properties required to query Marketo\.  
_Required_: No  
_Type_: [MarketoDestinationProperties](aws-properties-appflow-flow-marketodestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Redshift` <a name="cfn-appflow-flow-destinationconnectorproperties-redshift"></a>
The properties required to query Amazon Redshift\.  
_Required_: No  
_Type_: [RedshiftDestinationProperties](aws-properties-appflow-flow-redshiftdestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3` <a name="cfn-appflow-flow-destinationconnectorproperties-s3"></a>
The properties required to query Amazon S3\.  
_Required_: No  
_Type_: [S3DestinationProperties](aws-properties-appflow-flow-s3destinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Salesforce` <a name="cfn-appflow-flow-destinationconnectorproperties-salesforce"></a>
The properties required to query Salesforce\.  
_Required_: No  
_Type_: [SalesforceDestinationProperties](aws-properties-appflow-flow-salesforcedestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SAPOData` <a name="cfn-appflow-flow-destinationconnectorproperties-sapodata"></a>
The properties required to query SAPOData\.  
_Required_: No  
_Type_: [SAPODataDestinationProperties](aws-properties-appflow-flow-sapodatadestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Snowflake` <a name="cfn-appflow-flow-destinationconnectorproperties-snowflake"></a>
The properties required to query Snowflake\.  
_Required_: No  
_Type_: [SnowflakeDestinationProperties](aws-properties-appflow-flow-snowflakedestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Upsolver` <a name="cfn-appflow-flow-destinationconnectorproperties-upsolver"></a>
The properties required to query Upsolver\.  
_Required_: No  
_Type_: [UpsolverDestinationProperties](aws-properties-appflow-flow-upsolverdestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Zendesk` <a name="cfn-appflow-flow-destinationconnectorproperties-zendesk"></a>
The properties required to query Zendesk\.  
_Required_: No  
_Type_: [ZendeskDestinationProperties](aws-properties-appflow-flow-zendeskdestinationproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-destinationconnectorproperties--seealso"></a>

- [DestinationConnectorProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DestinationConnectorProperties.html) in the _Amazon AppFlow API Reference_\.
