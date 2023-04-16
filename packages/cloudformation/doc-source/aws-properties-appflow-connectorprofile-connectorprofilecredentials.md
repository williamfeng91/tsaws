# AWS::AppFlow::ConnectorProfile ConnectorProfileCredentials<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials"></a>

The connector\-specific credentials required by a connector\.

## Syntax<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials-syntax.json"></a>

```
{
  "[Amplitude](#cfn-appflow-connectorprofile-connectorprofilecredentials-amplitude)" : AmplitudeConnectorProfileCredentials,
  "[CustomConnector](#cfn-appflow-connectorprofile-connectorprofilecredentials-customconnector)" : CustomConnectorProfileCredentials,
  "[Datadog](#cfn-appflow-connectorprofile-connectorprofilecredentials-datadog)" : DatadogConnectorProfileCredentials,
  "[Dynatrace](#cfn-appflow-connectorprofile-connectorprofilecredentials-dynatrace)" : DynatraceConnectorProfileCredentials,
  "[GoogleAnalytics](#cfn-appflow-connectorprofile-connectorprofilecredentials-googleanalytics)" : GoogleAnalyticsConnectorProfileCredentials,
  "[InforNexus](#cfn-appflow-connectorprofile-connectorprofilecredentials-infornexus)" : InforNexusConnectorProfileCredentials,
  "[Marketo](#cfn-appflow-connectorprofile-connectorprofilecredentials-marketo)" : MarketoConnectorProfileCredentials,
  "[Pardot](#cfn-appflow-connectorprofile-connectorprofilecredentials-pardot)" : PardotConnectorProfileCredentials,
  "[Redshift](#cfn-appflow-connectorprofile-connectorprofilecredentials-redshift)" : RedshiftConnectorProfileCredentials,
  "[Salesforce](#cfn-appflow-connectorprofile-connectorprofilecredentials-salesforce)" : SalesforceConnectorProfileCredentials,
  "[SAPOData](#cfn-appflow-connectorprofile-connectorprofilecredentials-sapodata)" : SAPODataConnectorProfileCredentials,
  "[ServiceNow](#cfn-appflow-connectorprofile-connectorprofilecredentials-servicenow)" : ServiceNowConnectorProfileCredentials,
  "[Singular](#cfn-appflow-connectorprofile-connectorprofilecredentials-singular)" : SingularConnectorProfileCredentials,
  "[Slack](#cfn-appflow-connectorprofile-connectorprofilecredentials-slack)" : SlackConnectorProfileCredentials,
  "[Snowflake](#cfn-appflow-connectorprofile-connectorprofilecredentials-snowflake)" : SnowflakeConnectorProfileCredentials,
  "[Trendmicro](#cfn-appflow-connectorprofile-connectorprofilecredentials-trendmicro)" : TrendmicroConnectorProfileCredentials,
  "[Veeva](#cfn-appflow-connectorprofile-connectorprofilecredentials-veeva)" : VeevaConnectorProfileCredentials,
  "[Zendesk](#cfn-appflow-connectorprofile-connectorprofilecredentials-zendesk)" : ZendeskConnectorProfileCredentials
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials-syntax.yaml"></a>

```
  [Amplitude](#cfn-appflow-connectorprofile-connectorprofilecredentials-amplitude):
    AmplitudeConnectorProfileCredentials
  [CustomConnector](#cfn-appflow-connectorprofile-connectorprofilecredentials-customconnector):
    CustomConnectorProfileCredentials
  [Datadog](#cfn-appflow-connectorprofile-connectorprofilecredentials-datadog):
    DatadogConnectorProfileCredentials
  [Dynatrace](#cfn-appflow-connectorprofile-connectorprofilecredentials-dynatrace):
    DynatraceConnectorProfileCredentials
  [GoogleAnalytics](#cfn-appflow-connectorprofile-connectorprofilecredentials-googleanalytics):
    GoogleAnalyticsConnectorProfileCredentials
  [InforNexus](#cfn-appflow-connectorprofile-connectorprofilecredentials-infornexus):
    InforNexusConnectorProfileCredentials
  [Marketo](#cfn-appflow-connectorprofile-connectorprofilecredentials-marketo):
    MarketoConnectorProfileCredentials
  [Pardot](#cfn-appflow-connectorprofile-connectorprofilecredentials-pardot):
    PardotConnectorProfileCredentials
  [Redshift](#cfn-appflow-connectorprofile-connectorprofilecredentials-redshift):
    RedshiftConnectorProfileCredentials
  [Salesforce](#cfn-appflow-connectorprofile-connectorprofilecredentials-salesforce):
    SalesforceConnectorProfileCredentials
  [SAPOData](#cfn-appflow-connectorprofile-connectorprofilecredentials-sapodata):
    SAPODataConnectorProfileCredentials
  [ServiceNow](#cfn-appflow-connectorprofile-connectorprofilecredentials-servicenow):
    ServiceNowConnectorProfileCredentials
  [Singular](#cfn-appflow-connectorprofile-connectorprofilecredentials-singular):
    SingularConnectorProfileCredentials
  [Slack](#cfn-appflow-connectorprofile-connectorprofilecredentials-slack):
    SlackConnectorProfileCredentials
  [Snowflake](#cfn-appflow-connectorprofile-connectorprofilecredentials-snowflake):
    SnowflakeConnectorProfileCredentials
  [Trendmicro](#cfn-appflow-connectorprofile-connectorprofilecredentials-trendmicro):
    TrendmicroConnectorProfileCredentials
  [Veeva](#cfn-appflow-connectorprofile-connectorprofilecredentials-veeva):
    VeevaConnectorProfileCredentials
  [Zendesk](#cfn-appflow-connectorprofile-connectorprofilecredentials-zendesk):
    ZendeskConnectorProfileCredentials
```

## Properties<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials-properties"></a>

`Amplitude` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-amplitude"></a>
The connector\-specific credentials required when using Amplitude\.  
_Required_: No  
_Type_: [AmplitudeConnectorProfileCredentials](aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomConnector` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-customconnector"></a>
The connector\-specific profile credentials that are required when using the custom connector\.  
_Required_: No  
_Type_: [CustomConnectorProfileCredentials](aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Datadog` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-datadog"></a>
The connector\-specific credentials required when using Datadog\.  
_Required_: No  
_Type_: [DatadogConnectorProfileCredentials](aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Dynatrace` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-dynatrace"></a>
The connector\-specific credentials required when using Dynatrace\.  
_Required_: No  
_Type_: [DynatraceConnectorProfileCredentials](aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GoogleAnalytics` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-googleanalytics"></a>
The connector\-specific credentials required when using Google Analytics\.  
_Required_: No  
_Type_: [GoogleAnalyticsConnectorProfileCredentials](aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InforNexus` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-infornexus"></a>
The connector\-specific credentials required when using Infor Nexus\.  
_Required_: No  
_Type_: [InforNexusConnectorProfileCredentials](aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Marketo` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-marketo"></a>
The connector\-specific credentials required when using Marketo\.  
_Required_: No  
_Type_: [MarketoConnectorProfileCredentials](aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Pardot` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-pardot"></a>
The connector\-specific credentials required when using Salesforce Pardot\.  
_Required_: No  
_Type_: [PardotConnectorProfileCredentials](aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Redshift` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-redshift"></a>
The connector\-specific credentials required when using Amazon Redshift\.  
_Required_: No  
_Type_: [RedshiftConnectorProfileCredentials](aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Salesforce` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-salesforce"></a>
The connector\-specific credentials required when using Salesforce\.  
_Required_: No  
_Type_: [SalesforceConnectorProfileCredentials](aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SAPOData` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-sapodata"></a>
The connector\-specific profile credentials required when using SAPOData\.  
_Required_: No  
_Type_: [SAPODataConnectorProfileCredentials](aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceNow` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-servicenow"></a>
The connector\-specific credentials required when using ServiceNow\.  
_Required_: No  
_Type_: [ServiceNowConnectorProfileCredentials](aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Singular` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-singular"></a>
The connector\-specific credentials required when using Singular\.  
_Required_: No  
_Type_: [SingularConnectorProfileCredentials](aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Slack` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-slack"></a>
The connector\-specific credentials required when using Slack\.  
_Required_: No  
_Type_: [SlackConnectorProfileCredentials](aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Snowflake` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-snowflake"></a>
The connector\-specific credentials required when using Snowflake\.  
_Required_: No  
_Type_: [SnowflakeConnectorProfileCredentials](aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Trendmicro` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-trendmicro"></a>
The connector\-specific credentials required when using Trend Micro\.  
_Required_: No  
_Type_: [TrendmicroConnectorProfileCredentials](aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Veeva` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-veeva"></a>
The connector\-specific credentials required when using Veeva\.  
_Required_: No  
_Type_: [VeevaConnectorProfileCredentials](aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Zendesk` <a name="cfn-appflow-connectorprofile-connectorprofilecredentials-zendesk"></a>
The connector\-specific credentials required when using Zendesk\.  
_Required_: No  
_Type_: [ZendeskConnectorProfileCredentials](aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-connectorprofilecredentials--seealso"></a>

- [ConnectorProfileCredentials](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfileCredentials.html) in the _Amazon AppFlow API Reference_\.
