# AWS::ApiGateway::Deployment StageDescription<a name="aws-properties-apigateway-deployment-stagedescription"></a>

`StageDescription` is a property of the [AWS::ApiGateway::Deployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html) resource that configures a deployment stage\.

## Syntax<a name="aws-properties-apigateway-deployment-stagedescription-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-apigateway-deployment-stagedescription-syntax.json"></a>

```
{
  "[AccessLogSetting](#cfn-apigateway-deployment-stagedescription-accesslogsetting)" : AccessLogSetting,
  "[CacheClusterEnabled](#cfn-apigateway-deployment-stagedescription-cacheclusterenabled)" : Boolean,
  "[CacheClusterSize](#cfn-apigateway-deployment-stagedescription-cacheclustersize)" : String,
  "[CacheDataEncrypted](#cfn-apigateway-deployment-stagedescription-cachedataencrypted)" : Boolean,
  "[CacheTtlInSeconds](#cfn-apigateway-deployment-stagedescription-cachettlinseconds)" : Integer,
  "[CachingEnabled](#cfn-apigateway-deployment-stagedescription-cachingenabled)" : Boolean,
  "[CanarySetting](#cfn-apigateway-deployment-stagedescription-canarysetting)" : CanarySetting,
  "[ClientCertificateId](#cfn-apigateway-deployment-stagedescription-clientcertificateid)" : String,
  "[DataTraceEnabled](#cfn-apigateway-deployment-stagedescription-datatraceenabled)" : Boolean,
  "[Description](#cfn-apigateway-deployment-stagedescription-description)" : String,
  "[DocumentationVersion](#cfn-apigateway-deployment-stagedescription-documentationversion)" : String,
  "[LoggingLevel](#cfn-apigateway-deployment-stagedescription-logginglevel)" : String,
  "[MethodSettings](#cfn-apigateway-deployment-stagedescription-methodsettings)" : [ MethodSetting, ... ],
  "[MetricsEnabled](#cfn-apigateway-deployment-stagedescription-metricsenabled)" : Boolean,
  "[Tags](#cfn-apigateway-deployment-stagedescription-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
  "[ThrottlingBurstLimit](#cfn-apigateway-deployment-stagedescription-throttlingburstlimit)" : Integer,
  "[ThrottlingRateLimit](#cfn-apigateway-deployment-stagedescription-throttlingratelimit)" : Double,
  "[TracingEnabled](#cfn-apigateway-deployment-stagedescription-tracingenabled)" : Boolean,
  "[Variables](#cfn-apigateway-deployment-stagedescription-variables)" : {Key : Value, ...}
}
```

### YAML<a name="aws-properties-apigateway-deployment-stagedescription-syntax.yaml"></a>

```
  [AccessLogSetting](#cfn-apigateway-deployment-stagedescription-accesslogsetting):
    AccessLogSetting
  [CacheClusterEnabled](#cfn-apigateway-deployment-stagedescription-cacheclusterenabled): Boolean
  [CacheClusterSize](#cfn-apigateway-deployment-stagedescription-cacheclustersize): String
  [CacheDataEncrypted](#cfn-apigateway-deployment-stagedescription-cachedataencrypted): Boolean
  [CacheTtlInSeconds](#cfn-apigateway-deployment-stagedescription-cachettlinseconds): Integer
  [CachingEnabled](#cfn-apigateway-deployment-stagedescription-cachingenabled): Boolean
  [CanarySetting](#cfn-apigateway-deployment-stagedescription-canarysetting):
    CanarySetting
  [ClientCertificateId](#cfn-apigateway-deployment-stagedescription-clientcertificateid): String
  [DataTraceEnabled](#cfn-apigateway-deployment-stagedescription-datatraceenabled): Boolean
  [Description](#cfn-apigateway-deployment-stagedescription-description): String
  [DocumentationVersion](#cfn-apigateway-deployment-stagedescription-documentationversion): String
  [LoggingLevel](#cfn-apigateway-deployment-stagedescription-logginglevel): String
  [MethodSettings](#cfn-apigateway-deployment-stagedescription-methodsettings):
    - MethodSetting
  [MetricsEnabled](#cfn-apigateway-deployment-stagedescription-metricsenabled): Boolean
  [Tags](#cfn-apigateway-deployment-stagedescription-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [ThrottlingBurstLimit](#cfn-apigateway-deployment-stagedescription-throttlingburstlimit): Integer
  [ThrottlingRateLimit](#cfn-apigateway-deployment-stagedescription-throttlingratelimit): Double
  [TracingEnabled](#cfn-apigateway-deployment-stagedescription-tracingenabled): Boolean
  [Variables](#cfn-apigateway-deployment-stagedescription-variables):
    Key : Value
```

## Properties<a name="aws-properties-apigateway-deployment-stagedescription-properties"></a>

`AccessLogSetting` <a name="cfn-apigateway-deployment-stagedescription-accesslogsetting"></a>
Specifies settings for logging access in this stage\.  
_Required_: No  
_Type_: [AccessLogSetting](aws-properties-apigateway-deployment-accesslogsetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheClusterEnabled` <a name="cfn-apigateway-deployment-stagedescription-cacheclusterenabled"></a>
Specifies whether a cache cluster is enabled for the stage\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheClusterSize` <a name="cfn-apigateway-deployment-stagedescription-cacheclustersize"></a>
The size of the stage's cache cluster\. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the _API Gateway API Reference_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheDataEncrypted` <a name="cfn-apigateway-deployment-stagedescription-cachedataencrypted"></a>
Indicates whether the cached responses are encrypted\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CacheTtlInSeconds` <a name="cfn-apigateway-deployment-stagedescription-cachettlinseconds"></a>
The time\-to\-live \(TTL\) period, in seconds, that specifies how long API Gateway caches responses\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CachingEnabled` <a name="cfn-apigateway-deployment-stagedescription-cachingenabled"></a>
Indicates whether responses are cached and returned for requests\. You must enable a cache cluster on the stage to cache responses\. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the _API Gateway Developer Guide_\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CanarySetting` <a name="cfn-apigateway-deployment-stagedescription-canarysetting"></a>
Specifies settings for the canary deployment in this stage\.  
_Required_: No  
_Type_: [CanarySetting](aws-properties-apigateway-deployment-canarysetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClientCertificateId` <a name="cfn-apigateway-deployment-stagedescription-clientcertificateid"></a>
The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataTraceEnabled` <a name="cfn-apigateway-deployment-stagedescription-datatraceenabled"></a>
Indicates whether data trace logging is enabled for methods in the stage\. API Gateway pushes these logs to Amazon CloudWatch Logs\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-apigateway-deployment-stagedescription-description"></a>
A description of the purpose of the stage\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentationVersion` <a name="cfn-apigateway-deployment-stagedescription-documentationversion"></a>
The version identifier of the API documentation snapshot\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoggingLevel` <a name="cfn-apigateway-deployment-stagedescription-logginglevel"></a>
The logging level for this method\. For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the _Amazon API Gateway API Reference_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MethodSettings` <a name="cfn-apigateway-deployment-stagedescription-methodsettings"></a>
Configures settings for all of the stage's methods\.  
_Required_: No  
_Type_: List of [MethodSetting](aws-properties-apigateway-deployment-methodsetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricsEnabled` <a name="cfn-apigateway-deployment-stagedescription-metricsenabled"></a>
Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-apigateway-deployment-stagedescription-tags"></a>
An array of arbitrary tags \(key\-value pairs\) to associate with the stage\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThrottlingBurstLimit` <a name="cfn-apigateway-deployment-stagedescription-throttlingburstlimit"></a>
The target request burst rate limit\. This allows more requests through for a period of time than the target rate limit\. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the _API Gateway Developer Guide_\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThrottlingRateLimit` <a name="cfn-apigateway-deployment-stagedescription-throttlingratelimit"></a>
The target request steady\-state rate limit\. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the _API Gateway Developer Guide_\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TracingEnabled` <a name="cfn-apigateway-deployment-stagedescription-tracingenabled"></a>
Specifies whether active tracing with X\-ray is enabled for this stage\.  
For more information, see [Trace API Gateway API Execution with AWS X\-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the _API Gateway Developer Guide_\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Variables` <a name="cfn-apigateway-deployment-stagedescription-variables"></a>
A map that defines the stage variables\. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-apigateway-deployment-stagedescription--seealso"></a>

- [Stage](https://docs.aws.amazon.com/apigateway/latest/api/API_Stage.html) in the _Amazon API Gateway REST API Reference_
