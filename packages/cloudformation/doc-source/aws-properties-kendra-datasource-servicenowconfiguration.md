# AWS::Kendra::DataSource ServiceNowConfiguration<a name="aws-properties-kendra-datasource-servicenowconfiguration"></a>

Provides the configuration information to connect to ServiceNow as your data source\.

## Syntax<a name="aws-properties-kendra-datasource-servicenowconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-servicenowconfiguration-syntax.json"></a>

```
{
  "[AuthenticationType](#cfn-kendra-datasource-servicenowconfiguration-authenticationtype)" : String,
  "[HostUrl](#cfn-kendra-datasource-servicenowconfiguration-hosturl)" : String,
  "[KnowledgeArticleConfiguration](#cfn-kendra-datasource-servicenowconfiguration-knowledgearticleconfiguration)" : ServiceNowKnowledgeArticleConfiguration,
  "[SecretArn](#cfn-kendra-datasource-servicenowconfiguration-secretarn)" : String,
  "[ServiceCatalogConfiguration](#cfn-kendra-datasource-servicenowconfiguration-servicecatalogconfiguration)" : ServiceNowServiceCatalogConfiguration,
  "[ServiceNowBuildVersion](#cfn-kendra-datasource-servicenowconfiguration-servicenowbuildversion)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-servicenowconfiguration-syntax.yaml"></a>

```
  [AuthenticationType](#cfn-kendra-datasource-servicenowconfiguration-authenticationtype): String
  [HostUrl](#cfn-kendra-datasource-servicenowconfiguration-hosturl): String
  [KnowledgeArticleConfiguration](#cfn-kendra-datasource-servicenowconfiguration-knowledgearticleconfiguration):
    ServiceNowKnowledgeArticleConfiguration
  [SecretArn](#cfn-kendra-datasource-servicenowconfiguration-secretarn): String
  [ServiceCatalogConfiguration](#cfn-kendra-datasource-servicenowconfiguration-servicecatalogconfiguration):
    ServiceNowServiceCatalogConfiguration
  [ServiceNowBuildVersion](#cfn-kendra-datasource-servicenowconfiguration-servicenowbuildversion): String
```

## Properties<a name="aws-properties-kendra-datasource-servicenowconfiguration-properties"></a>

`AuthenticationType` <a name="cfn-kendra-datasource-servicenowconfiguration-authenticationtype"></a>
The type of authentication used to connect to the ServiceNow instance\. If you choose `HTTP_BASIC`, Amazon Kendra is authenticated using the user name and password provided in the AWS Secrets Manager secret in the `SecretArn` field\. If you choose `OAUTH2`, Amazon Kendra is authenticated using the credentials of client ID, client secret, user name and password\.  
When you use `OAUTH2` authentication, you must generate a token and a client secret using the ServiceNow console\. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html)\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HTTP_BASIC | OAUTH2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HostUrl` <a name="cfn-kendra-datasource-servicenowconfiguration-hosturl"></a>
The ServiceNow instance that the data source connects to\. The host endpoint should look like the following: _\{instance\}\.service\-now\.com\._  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^(?!(^(https?|ftp|file):\/\/))[a-z0-9-]+(\.service-now\.com)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KnowledgeArticleConfiguration` <a name="cfn-kendra-datasource-servicenowconfiguration-knowledgearticleconfiguration"></a>
Configuration information for crawling knowledge articles in the ServiceNow site\.  
_Required_: No  
_Type_: [ServiceNowKnowledgeArticleConfiguration](aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecretArn` <a name="cfn-kendra-datasource-servicenowconfiguration-secretarn"></a>
The Amazon Resource Name \(ARN\) of the AWS Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance\. You can also provide OAuth authentication credentials of user name, password, client ID, and client secret\. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html)\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1284`  
_Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceCatalogConfiguration` <a name="cfn-kendra-datasource-servicenowconfiguration-servicecatalogconfiguration"></a>
Configuration information for crawling service catalogs in the ServiceNow site\.  
_Required_: No  
_Type_: [ServiceNowServiceCatalogConfiguration](aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceNowBuildVersion` <a name="cfn-kendra-datasource-servicenowconfiguration-servicenowbuildversion"></a>
The identifier of the release that the ServiceNow host is running\. If the host is not running the `LONDON` release, use `OTHERS`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `LONDON | OTHERS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
