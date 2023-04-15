# AWS::AppFlow::ConnectorProfile<a name="aws-resource-appflow-connectorprofile"></a>

The `AWS::AppFlow::ConnectorProfile` resource is an Amazon AppFlow resource type that specifies the configuration profile for an instance of a connector\. This includes the provided name, credentials ARN, connection\-mode, and so on\. The fields that are common to all types of connector profiles are explicitly specified under the `Properties` field\. The rest of the connector\-specific properties are specified under `Properties/ConnectorProfileConfig`\.

**Note**  
If you want to use AWS CloudFormation to create a connector profile for connectors that implement OAuth \(such as Salesforce, Slack, Zendesk, and Google Analytics\), you must fetch the access and refresh tokens\. You can do this by implementing your own UI for OAuth, or by retrieving the tokens from elsewhere\. Alternatively, you can use the Amazon AppFlow console to create the connector profile, and then use that connector profile in the flow creation CloudFormation template\.

## Syntax<a name="aws-resource-appflow-connectorprofile-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-appflow-connectorprofile-syntax.json"></a>

```
{
  "Type" : "AWS::AppFlow::ConnectorProfile",
  "Properties" : {
      "[ConnectionMode](#cfn-appflow-connectorprofile-connectionmode)" : String,
      "[ConnectorLabel](#cfn-appflow-connectorprofile-connectorlabel)" : String,
      "[ConnectorProfileConfig](#cfn-appflow-connectorprofile-connectorprofileconfig)" : ConnectorProfileConfig,
      "[ConnectorProfileName](#cfn-appflow-connectorprofile-connectorprofilename)" : String,
      "[ConnectorType](#cfn-appflow-connectorprofile-connectortype)" : String,
      "[KMSArn](#cfn-appflow-connectorprofile-kmsarn)" : String
    }
}
```

### YAML<a name="aws-resource-appflow-connectorprofile-syntax.yaml"></a>

```
Type: AWS::AppFlow::ConnectorProfile
Properties:
  [ConnectionMode](#cfn-appflow-connectorprofile-connectionmode): String
  [ConnectorLabel](#cfn-appflow-connectorprofile-connectorlabel): String
  [ConnectorProfileConfig](#cfn-appflow-connectorprofile-connectorprofileconfig):
    ConnectorProfileConfig
  [ConnectorProfileName](#cfn-appflow-connectorprofile-connectorprofilename): String
  [ConnectorType](#cfn-appflow-connectorprofile-connectortype): String
  [KMSArn](#cfn-appflow-connectorprofile-kmsarn): String
```

## Properties<a name="aws-resource-appflow-connectorprofile-properties"></a>

`ConnectionMode` <a name="cfn-appflow-connectorprofile-connectionmode"></a>
Indicates the connection mode and if it is public or private\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Private | Public`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorLabel` <a name="cfn-appflow-connectorprofile-connectorlabel"></a>
The label for the connector profile being created\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9][\w!@#.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorProfileConfig` <a name="cfn-appflow-connectorprofile-connectorprofileconfig"></a>
Defines the connector\-specific configuration and credentials\.  
_Required_: No  
_Type_: [ConnectorProfileConfig](aws-properties-appflow-connectorprofile-connectorprofileconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectorProfileName` <a name="cfn-appflow-connectorprofile-connectorprofilename"></a>
The name of the connector profile\. The name is unique for each `ConnectorProfile` in the AWS account\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `[\w/!@#+=.-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ConnectorType` <a name="cfn-appflow-connectorprofile-connectortype"></a>
The type of connector, such as Salesforce, Amplitude, and so on\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Amplitude | CustomConnector | CustomerProfiles | Datadog | Dynatrace | EventBridge | Googleanalytics | Honeycode | Infornexus | LookoutMetrics | Marketo | Pardot | Redshift | S3 | Salesforce | SAPOData | Servicenow | Singular | Slack | Snowflake | Trendmicro | Upsolver | Veeva | Zendesk`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KMSArn` <a name="cfn-appflow-connectorprofile-kmsarn"></a>
The ARN \(Amazon Resource Name\) of the Key Management Service \(KMS\) key you provide for encryption\. This is required if you do not want to use the Amazon AppFlow\-managed KMS key\. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow\-managed KMS key\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:aws:kms:.*:[0-9]+:.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-appflow-connectorprofile-return-values"></a>

### Ref<a name="aws-resource-appflow-connectorprofile-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the connector profile name\. For example:

`{ "Ref": "myConnectorProfile" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-appflow-connectorprofile-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-appflow-connectorprofile-return-values-fn--getatt-fn--getatt"></a>

`ConnectorProfileArn` <a name="ConnectorProfileArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the connector profile\.

`CredentialsArn` <a name="CredentialsArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the connector profile credentials\.

## See also<a name="aws-resource-appflow-connectorprofile--seealso"></a>

- [CreateConnectorProfile](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html) in the _Amazon AppFlow API Reference_\.
- [DescribeConnectorProfiles](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html) in the _Amazon AppFlow API Reference_\.
- [DeleteConnectorProfile](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteConnectorProfile.html) in the _Amazon AppFlow API Reference_\.
- [UpdateConnectorProfile](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html) in the _Amazon AppFlow API Reference_\.