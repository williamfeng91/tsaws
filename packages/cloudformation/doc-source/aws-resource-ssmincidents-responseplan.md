# AWS::SSMIncidents::ResponsePlan<a name="aws-resource-ssmincidents-responseplan"></a>

The `AWS::SSMIncidents::ResponsePlan` resource specifies the details of the response plan that are used when creating an incident\.

## Syntax<a name="aws-resource-ssmincidents-responseplan-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ssmincidents-responseplan-syntax.json"></a>

```
{
  "Type" : "AWS::SSMIncidents::ResponsePlan",
  "Properties" : {
      "[Actions](#cfn-ssmincidents-responseplan-actions)" : [ Action, ... ],
      "[ChatChannel](#cfn-ssmincidents-responseplan-chatchannel)" : ChatChannel,
      "[DisplayName](#cfn-ssmincidents-responseplan-displayname)" : String,
      "[Engagements](#cfn-ssmincidents-responseplan-engagements)" : [ String, ... ],
      "[IncidentTemplate](#cfn-ssmincidents-responseplan-incidenttemplate)" : IncidentTemplate,
      "[Integrations](#cfn-ssmincidents-responseplan-integrations)" : [ Integration, ... ],
      "[Name](#cfn-ssmincidents-responseplan-name)" : String,
      "[Tags](#cfn-ssmincidents-responseplan-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-ssmincidents-responseplan-syntax.yaml"></a>

```
Type: AWS::SSMIncidents::ResponsePlan
Properties:
  [Actions](#cfn-ssmincidents-responseplan-actions):
    - Action
  [ChatChannel](#cfn-ssmincidents-responseplan-chatchannel):
    ChatChannel
  [DisplayName](#cfn-ssmincidents-responseplan-displayname): String
  [Engagements](#cfn-ssmincidents-responseplan-engagements):
    - String
  [IncidentTemplate](#cfn-ssmincidents-responseplan-incidenttemplate):
    IncidentTemplate
  [Integrations](#cfn-ssmincidents-responseplan-integrations):
    - Integration
  [Name](#cfn-ssmincidents-responseplan-name): String
  [Tags](#cfn-ssmincidents-responseplan-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-ssmincidents-responseplan-properties"></a>

`Actions` <a name="cfn-ssmincidents-responseplan-actions"></a>
The actions that the response plan starts at the beginning of an incident\.  
_Required_: No  
_Type_: List of [Action](aws-properties-ssmincidents-responseplan-action.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChatChannel` <a name="cfn-ssmincidents-responseplan-chatchannel"></a>
The AWS Chatbot chat channel used for collaboration during an incident\.  
_Required_: No  
_Type_: [ChatChannel](aws-properties-ssmincidents-responseplan-chatchannel.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayName` <a name="cfn-ssmincidents-responseplan-displayname"></a>
The human readable name of the response plan\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Engagements` <a name="cfn-ssmincidents-responseplan-engagements"></a>
The Amazon Resource Name \(ARN\) for the contacts and escalation plans that the response plan engages during an incident\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `5`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncidentTemplate` <a name="cfn-ssmincidents-responseplan-incidenttemplate"></a>
Details used to create an incident when using this response plan\.  
_Required_: Yes  
_Type_: [IncidentTemplate](aws-properties-ssmincidents-responseplan-incidenttemplate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Integrations` <a name="cfn-ssmincidents-responseplan-integrations"></a>
Information about third\-party services integrated into the response plan\.  
_Required_: No  
_Type_: List of [Integration](aws-properties-ssmincidents-responseplan-integration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssmincidents-responseplan-name"></a>
The name of the response plan\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `200`  
_Pattern_: `^[a-zA-Z0-9-_]*$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-ssmincidents-responseplan-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
