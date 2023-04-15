# AWS::AppFlow::ConnectorProfile PardotConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties"></a>

The connector\-specific profile properties required when using Salesforce Pardot\.

## Syntax<a name="aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties-syntax.json"></a>

```
{
  "[BusinessUnitId](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-businessunitid)" : String,
  "[InstanceUrl](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-instanceurl)" : String,
  "[IsSandboxEnvironment](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-issandboxenvironment)" : Boolean
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties-syntax.yaml"></a>

```
  [BusinessUnitId](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-businessunitid): String
  [InstanceUrl](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-instanceurl): String
  [IsSandboxEnvironment](#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-issandboxenvironment): Boolean
```

## Properties<a name="aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties-properties"></a>

`BusinessUnitId` <a name="cfn-appflow-connectorprofile-pardotconnectorprofileproperties-businessunitid"></a>
The business unit id of Salesforce Pardot instance\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `18`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InstanceUrl` <a name="cfn-appflow-connectorprofile-pardotconnectorprofileproperties-instanceurl"></a>
The location of the Salesforce Pardot resource\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IsSandboxEnvironment` <a name="cfn-appflow-connectorprofile-pardotconnectorprofileproperties-issandboxenvironment"></a>
Indicates whether the connector profile applies to a sandbox or production environment\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)