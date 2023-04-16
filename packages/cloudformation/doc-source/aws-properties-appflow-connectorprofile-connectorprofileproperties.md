# AWS::AppFlow::ConnectorProfile ConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties"></a>

The connector\-specific profile properties required by each connector\.

## Syntax<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties-syntax.json"></a>

```
{
  "[CustomConnector](#cfn-appflow-connectorprofile-connectorprofileproperties-customconnector)" : CustomConnectorProfileProperties,
  "[Datadog](#cfn-appflow-connectorprofile-connectorprofileproperties-datadog)" : DatadogConnectorProfileProperties,
  "[Dynatrace](#cfn-appflow-connectorprofile-connectorprofileproperties-dynatrace)" : DynatraceConnectorProfileProperties,
  "[InforNexus](#cfn-appflow-connectorprofile-connectorprofileproperties-infornexus)" : InforNexusConnectorProfileProperties,
  "[Marketo](#cfn-appflow-connectorprofile-connectorprofileproperties-marketo)" : MarketoConnectorProfileProperties,
  "[Pardot](#cfn-appflow-connectorprofile-connectorprofileproperties-pardot)" : PardotConnectorProfileProperties,
  "[Redshift](#cfn-appflow-connectorprofile-connectorprofileproperties-redshift)" : RedshiftConnectorProfileProperties,
  "[Salesforce](#cfn-appflow-connectorprofile-connectorprofileproperties-salesforce)" : SalesforceConnectorProfileProperties,
  "[SAPOData](#cfn-appflow-connectorprofile-connectorprofileproperties-sapodata)" : SAPODataConnectorProfileProperties,
  "[ServiceNow](#cfn-appflow-connectorprofile-connectorprofileproperties-servicenow)" : ServiceNowConnectorProfileProperties,
  "[Slack](#cfn-appflow-connectorprofile-connectorprofileproperties-slack)" : SlackConnectorProfileProperties,
  "[Snowflake](#cfn-appflow-connectorprofile-connectorprofileproperties-snowflake)" : SnowflakeConnectorProfileProperties,
  "[Veeva](#cfn-appflow-connectorprofile-connectorprofileproperties-veeva)" : VeevaConnectorProfileProperties,
  "[Zendesk](#cfn-appflow-connectorprofile-connectorprofileproperties-zendesk)" : ZendeskConnectorProfileProperties
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties-syntax.yaml"></a>

```
  [CustomConnector](#cfn-appflow-connectorprofile-connectorprofileproperties-customconnector):
    CustomConnectorProfileProperties
  [Datadog](#cfn-appflow-connectorprofile-connectorprofileproperties-datadog):
    DatadogConnectorProfileProperties
  [Dynatrace](#cfn-appflow-connectorprofile-connectorprofileproperties-dynatrace):
    DynatraceConnectorProfileProperties
  [InforNexus](#cfn-appflow-connectorprofile-connectorprofileproperties-infornexus):
    InforNexusConnectorProfileProperties
  [Marketo](#cfn-appflow-connectorprofile-connectorprofileproperties-marketo):
    MarketoConnectorProfileProperties
  [Pardot](#cfn-appflow-connectorprofile-connectorprofileproperties-pardot):
    PardotConnectorProfileProperties
  [Redshift](#cfn-appflow-connectorprofile-connectorprofileproperties-redshift):
    RedshiftConnectorProfileProperties
  [Salesforce](#cfn-appflow-connectorprofile-connectorprofileproperties-salesforce):
    SalesforceConnectorProfileProperties
  [SAPOData](#cfn-appflow-connectorprofile-connectorprofileproperties-sapodata):
    SAPODataConnectorProfileProperties
  [ServiceNow](#cfn-appflow-connectorprofile-connectorprofileproperties-servicenow):
    ServiceNowConnectorProfileProperties
  [Slack](#cfn-appflow-connectorprofile-connectorprofileproperties-slack):
    SlackConnectorProfileProperties
  [Snowflake](#cfn-appflow-connectorprofile-connectorprofileproperties-snowflake):
    SnowflakeConnectorProfileProperties
  [Veeva](#cfn-appflow-connectorprofile-connectorprofileproperties-veeva):
    VeevaConnectorProfileProperties
  [Zendesk](#cfn-appflow-connectorprofile-connectorprofileproperties-zendesk):
    ZendeskConnectorProfileProperties
```

## Properties<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties-properties"></a>

`CustomConnector` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-customconnector"></a>
The properties required by the custom connector\.  
_Required_: No  
_Type_: [CustomConnectorProfileProperties](aws-properties-appflow-connectorprofile-customconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Datadog` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-datadog"></a>
The connector\-specific properties required by Datadog\.  
_Required_: No  
_Type_: [DatadogConnectorProfileProperties](aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Dynatrace` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-dynatrace"></a>
The connector\-specific properties required by Dynatrace\.  
_Required_: No  
_Type_: [DynatraceConnectorProfileProperties](aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InforNexus` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-infornexus"></a>
The connector\-specific properties required by Infor Nexus\.  
_Required_: No  
_Type_: [InforNexusConnectorProfileProperties](aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Marketo` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-marketo"></a>
The connector\-specific properties required by Marketo\.  
_Required_: No  
_Type_: [MarketoConnectorProfileProperties](aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Pardot` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-pardot"></a>
The connector\-specific properties required by Salesforce Pardot\.  
_Required_: No  
_Type_: [PardotConnectorProfileProperties](aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Redshift` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-redshift"></a>
The connector\-specific properties required by Amazon Redshift\.  
_Required_: No  
_Type_: [RedshiftConnectorProfileProperties](aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Salesforce` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-salesforce"></a>
The connector\-specific properties required by Salesforce\.  
_Required_: No  
_Type_: [SalesforceConnectorProfileProperties](aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SAPOData` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-sapodata"></a>
The connector\-specific profile properties required when using SAPOData\.  
_Required_: No  
_Type_: [SAPODataConnectorProfileProperties](aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceNow` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-servicenow"></a>
The connector\-specific properties required by serviceNow\.  
_Required_: No  
_Type_: [ServiceNowConnectorProfileProperties](aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Slack` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-slack"></a>
The connector\-specific properties required by Slack\.  
_Required_: No  
_Type_: [SlackConnectorProfileProperties](aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Snowflake` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-snowflake"></a>
The connector\-specific properties required by Snowflake\.  
_Required_: No  
_Type_: [SnowflakeConnectorProfileProperties](aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Veeva` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-veeva"></a>
The connector\-specific properties required by Veeva\.  
_Required_: No  
_Type_: [VeevaConnectorProfileProperties](aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Zendesk` <a name="cfn-appflow-connectorprofile-connectorprofileproperties-zendesk"></a>
The connector\-specific properties required by Zendesk\.  
_Required_: No  
_Type_: [ZendeskConnectorProfileProperties](aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-connectorprofileproperties--seealso"></a>

- [ConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
