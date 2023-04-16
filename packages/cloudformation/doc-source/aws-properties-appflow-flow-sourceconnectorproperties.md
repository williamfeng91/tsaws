# AWS::AppFlow::Flow SourceConnectorProperties<a name="aws-properties-appflow-flow-sourceconnectorproperties"></a>

Specifies the information that is required to query a particular connector\.

## Syntax<a name="aws-properties-appflow-flow-sourceconnectorproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-sourceconnectorproperties-syntax.json"></a>

```
{
  "[Amplitude](#cfn-appflow-flow-sourceconnectorproperties-amplitude)" : AmplitudeSourceProperties,
  "[CustomConnector](#cfn-appflow-flow-sourceconnectorproperties-customconnector)" : CustomConnectorSourceProperties,
  "[Datadog](#cfn-appflow-flow-sourceconnectorproperties-datadog)" : DatadogSourceProperties,
  "[Dynatrace](#cfn-appflow-flow-sourceconnectorproperties-dynatrace)" : DynatraceSourceProperties,
  "[GoogleAnalytics](#cfn-appflow-flow-sourceconnectorproperties-googleanalytics)" : GoogleAnalyticsSourceProperties,
  "[InforNexus](#cfn-appflow-flow-sourceconnectorproperties-infornexus)" : InforNexusSourceProperties,
  "[Marketo](#cfn-appflow-flow-sourceconnectorproperties-marketo)" : MarketoSourceProperties,
  "[Pardot](#cfn-appflow-flow-sourceconnectorproperties-pardot)" : PardotSourceProperties,
  "[S3](#cfn-appflow-flow-sourceconnectorproperties-s3)" : S3SourceProperties,
  "[Salesforce](#cfn-appflow-flow-sourceconnectorproperties-salesforce)" : SalesforceSourceProperties,
  "[SAPOData](#cfn-appflow-flow-sourceconnectorproperties-sapodata)" : SAPODataSourceProperties,
  "[ServiceNow](#cfn-appflow-flow-sourceconnectorproperties-servicenow)" : ServiceNowSourceProperties,
  "[Singular](#cfn-appflow-flow-sourceconnectorproperties-singular)" : SingularSourceProperties,
  "[Slack](#cfn-appflow-flow-sourceconnectorproperties-slack)" : SlackSourceProperties,
  "[Trendmicro](#cfn-appflow-flow-sourceconnectorproperties-trendmicro)" : TrendmicroSourceProperties,
  "[Veeva](#cfn-appflow-flow-sourceconnectorproperties-veeva)" : VeevaSourceProperties,
  "[Zendesk](#cfn-appflow-flow-sourceconnectorproperties-zendesk)" : ZendeskSourceProperties
}
```

### YAML<a name="aws-properties-appflow-flow-sourceconnectorproperties-syntax.yaml"></a>

```
  [Amplitude](#cfn-appflow-flow-sourceconnectorproperties-amplitude):
    AmplitudeSourceProperties
  [CustomConnector](#cfn-appflow-flow-sourceconnectorproperties-customconnector):
    CustomConnectorSourceProperties
  [Datadog](#cfn-appflow-flow-sourceconnectorproperties-datadog):
    DatadogSourceProperties
  [Dynatrace](#cfn-appflow-flow-sourceconnectorproperties-dynatrace):
    DynatraceSourceProperties
  [GoogleAnalytics](#cfn-appflow-flow-sourceconnectorproperties-googleanalytics):
    GoogleAnalyticsSourceProperties
  [InforNexus](#cfn-appflow-flow-sourceconnectorproperties-infornexus):
    InforNexusSourceProperties
  [Marketo](#cfn-appflow-flow-sourceconnectorproperties-marketo):
    MarketoSourceProperties
  [Pardot](#cfn-appflow-flow-sourceconnectorproperties-pardot):
    PardotSourceProperties
  [S3](#cfn-appflow-flow-sourceconnectorproperties-s3):
    S3SourceProperties
  [Salesforce](#cfn-appflow-flow-sourceconnectorproperties-salesforce):
    SalesforceSourceProperties
  [SAPOData](#cfn-appflow-flow-sourceconnectorproperties-sapodata):
    SAPODataSourceProperties
  [ServiceNow](#cfn-appflow-flow-sourceconnectorproperties-servicenow):
    ServiceNowSourceProperties
  [Singular](#cfn-appflow-flow-sourceconnectorproperties-singular):
    SingularSourceProperties
  [Slack](#cfn-appflow-flow-sourceconnectorproperties-slack):
    SlackSourceProperties
  [Trendmicro](#cfn-appflow-flow-sourceconnectorproperties-trendmicro):
    TrendmicroSourceProperties
  [Veeva](#cfn-appflow-flow-sourceconnectorproperties-veeva):
    VeevaSourceProperties
  [Zendesk](#cfn-appflow-flow-sourceconnectorproperties-zendesk):
    ZendeskSourceProperties
```

## Properties<a name="aws-properties-appflow-flow-sourceconnectorproperties-properties"></a>

`Amplitude` <a name="cfn-appflow-flow-sourceconnectorproperties-amplitude"></a>
Specifies the information that is required for querying Amplitude\.  
_Required_: No  
_Type_: [AmplitudeSourceProperties](aws-properties-appflow-flow-amplitudesourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomConnector` <a name="cfn-appflow-flow-sourceconnectorproperties-customconnector"></a>
The properties that are applied when the custom connector is being used as a source\.  
_Required_: No  
_Type_: [CustomConnectorSourceProperties](aws-properties-appflow-flow-customconnectorsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Datadog` <a name="cfn-appflow-flow-sourceconnectorproperties-datadog"></a>
Specifies the information that is required for querying Datadog\.  
_Required_: No  
_Type_: [DatadogSourceProperties](aws-properties-appflow-flow-datadogsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Dynatrace` <a name="cfn-appflow-flow-sourceconnectorproperties-dynatrace"></a>
Specifies the information that is required for querying Dynatrace\.  
_Required_: No  
_Type_: [DynatraceSourceProperties](aws-properties-appflow-flow-dynatracesourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GoogleAnalytics` <a name="cfn-appflow-flow-sourceconnectorproperties-googleanalytics"></a>
Specifies the information that is required for querying Google Analytics\.  
_Required_: No  
_Type_: [GoogleAnalyticsSourceProperties](aws-properties-appflow-flow-googleanalyticssourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InforNexus` <a name="cfn-appflow-flow-sourceconnectorproperties-infornexus"></a>
Specifies the information that is required for querying Infor Nexus\.  
_Required_: No  
_Type_: [InforNexusSourceProperties](aws-properties-appflow-flow-infornexussourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Marketo` <a name="cfn-appflow-flow-sourceconnectorproperties-marketo"></a>
Specifies the information that is required for querying Marketo\.  
_Required_: No  
_Type_: [MarketoSourceProperties](aws-properties-appflow-flow-marketosourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Pardot` <a name="cfn-appflow-flow-sourceconnectorproperties-pardot"></a>
Specifies the information that is required for querying Salesforce Pardot\.  
_Required_: No  
_Type_: [PardotSourceProperties](aws-properties-appflow-flow-pardotsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3` <a name="cfn-appflow-flow-sourceconnectorproperties-s3"></a>
Specifies the information that is required for querying Amazon S3\.  
_Required_: No  
_Type_: [S3SourceProperties](aws-properties-appflow-flow-s3sourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Salesforce` <a name="cfn-appflow-flow-sourceconnectorproperties-salesforce"></a>
Specifies the information that is required for querying Salesforce\.  
_Required_: No  
_Type_: [SalesforceSourceProperties](aws-properties-appflow-flow-salesforcesourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SAPOData` <a name="cfn-appflow-flow-sourceconnectorproperties-sapodata"></a>
The properties that are applied when using SAPOData as a flow source\.  
_Required_: No  
_Type_: [SAPODataSourceProperties](aws-properties-appflow-flow-sapodatasourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceNow` <a name="cfn-appflow-flow-sourceconnectorproperties-servicenow"></a>
Specifies the information that is required for querying ServiceNow\.  
_Required_: No  
_Type_: [ServiceNowSourceProperties](aws-properties-appflow-flow-servicenowsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Singular` <a name="cfn-appflow-flow-sourceconnectorproperties-singular"></a>
Specifies the information that is required for querying Singular\.  
_Required_: No  
_Type_: [SingularSourceProperties](aws-properties-appflow-flow-singularsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Slack` <a name="cfn-appflow-flow-sourceconnectorproperties-slack"></a>
Specifies the information that is required for querying Slack\.  
_Required_: No  
_Type_: [SlackSourceProperties](aws-properties-appflow-flow-slacksourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Trendmicro` <a name="cfn-appflow-flow-sourceconnectorproperties-trendmicro"></a>
Specifies the information that is required for querying Trend Micro\.  
_Required_: No  
_Type_: [TrendmicroSourceProperties](aws-properties-appflow-flow-trendmicrosourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Veeva` <a name="cfn-appflow-flow-sourceconnectorproperties-veeva"></a>
Specifies the information that is required for querying Veeva\.  
_Required_: No  
_Type_: [VeevaSourceProperties](aws-properties-appflow-flow-veevasourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Zendesk` <a name="cfn-appflow-flow-sourceconnectorproperties-zendesk"></a>
Specifies the information that is required for querying Zendesk\.  
_Required_: No  
_Type_: [ZendeskSourceProperties](aws-properties-appflow-flow-zendesksourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-sourceconnectorproperties--seealso"></a>

- [SourceConnectorProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SourceConnectorProperties.html) in the _Amazon AppFlow API Reference_\.
