# AWS::CustomerProfiles::Integration SourceConnectorProperties<a name="aws-properties-customerprofiles-integration-sourceconnectorproperties"></a>

Specifies the information that is required to query a particular Amazon AppFlow connector\. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3\.

## Syntax<a name="aws-properties-customerprofiles-integration-sourceconnectorproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-customerprofiles-integration-sourceconnectorproperties-syntax.json"></a>

```
{
  "[Marketo](#cfn-customerprofiles-integration-sourceconnectorproperties-marketo)" : MarketoSourceProperties,
  "[S3](#cfn-customerprofiles-integration-sourceconnectorproperties-s3)" : S3SourceProperties,
  "[Salesforce](#cfn-customerprofiles-integration-sourceconnectorproperties-salesforce)" : SalesforceSourceProperties,
  "[ServiceNow](#cfn-customerprofiles-integration-sourceconnectorproperties-servicenow)" : ServiceNowSourceProperties,
  "[Zendesk](#cfn-customerprofiles-integration-sourceconnectorproperties-zendesk)" : ZendeskSourceProperties
}
```

### YAML<a name="aws-properties-customerprofiles-integration-sourceconnectorproperties-syntax.yaml"></a>

```
  [Marketo](#cfn-customerprofiles-integration-sourceconnectorproperties-marketo):
    MarketoSourceProperties
  [S3](#cfn-customerprofiles-integration-sourceconnectorproperties-s3):
    S3SourceProperties
  [Salesforce](#cfn-customerprofiles-integration-sourceconnectorproperties-salesforce):
    SalesforceSourceProperties
  [ServiceNow](#cfn-customerprofiles-integration-sourceconnectorproperties-servicenow):
    ServiceNowSourceProperties
  [Zendesk](#cfn-customerprofiles-integration-sourceconnectorproperties-zendesk):
    ZendeskSourceProperties
```

## Properties<a name="aws-properties-customerprofiles-integration-sourceconnectorproperties-properties"></a>

`Marketo` <a name="cfn-customerprofiles-integration-sourceconnectorproperties-marketo"></a>
The properties that are applied when Marketo is being used as a source\.  
_Required_: No  
_Type_: [MarketoSourceProperties](aws-properties-customerprofiles-integration-marketosourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3` <a name="cfn-customerprofiles-integration-sourceconnectorproperties-s3"></a>
The properties that are applied when Amazon S3 is being used as the flow source\.  
_Required_: No  
_Type_: [S3SourceProperties](aws-properties-customerprofiles-integration-s3sourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Salesforce` <a name="cfn-customerprofiles-integration-sourceconnectorproperties-salesforce"></a>
The properties that are applied when Salesforce is being used as a source\.  
_Required_: No  
_Type_: [SalesforceSourceProperties](aws-properties-customerprofiles-integration-salesforcesourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceNow` <a name="cfn-customerprofiles-integration-sourceconnectorproperties-servicenow"></a>
The properties that are applied when ServiceNow is being used as a source\.  
_Required_: No  
_Type_: [ServiceNowSourceProperties](aws-properties-customerprofiles-integration-servicenowsourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Zendesk` <a name="cfn-customerprofiles-integration-sourceconnectorproperties-zendesk"></a>
The properties that are applied when using Zendesk as a flow source\.  
_Required_: No  
_Type_: [ZendeskSourceProperties](aws-properties-customerprofiles-integration-zendesksourceproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
