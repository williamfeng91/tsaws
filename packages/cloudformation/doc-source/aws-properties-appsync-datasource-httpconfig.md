# AWS::AppSync::DataSource HttpConfig<a name="aws-properties-appsync-datasource-httpconfig"></a>

Use the `HttpConfig` property type to specify `HttpConfig` for an AWS AppSync data source\.

`HttpConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) resource\.

## Syntax<a name="aws-properties-appsync-datasource-httpconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appsync-datasource-httpconfig-syntax.json"></a>

```
{
  "[AuthorizationConfig](#cfn-appsync-datasource-httpconfig-authorizationconfig)" : AuthorizationConfig,
  "[Endpoint](#cfn-appsync-datasource-httpconfig-endpoint)" : String
}
```

### YAML<a name="aws-properties-appsync-datasource-httpconfig-syntax.yaml"></a>

```
  [AuthorizationConfig](#cfn-appsync-datasource-httpconfig-authorizationconfig):
    AuthorizationConfig
  [Endpoint](#cfn-appsync-datasource-httpconfig-endpoint): String
```

## Properties<a name="aws-properties-appsync-datasource-httpconfig-properties"></a>

`AuthorizationConfig` <a name="cfn-appsync-datasource-httpconfig-authorizationconfig"></a>
The authorization configuration\.  
_Required_: No  
_Type_: [AuthorizationConfig](aws-properties-appsync-datasource-authorizationconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Endpoint` <a name="cfn-appsync-datasource-httpconfig-endpoint"></a>
The endpoint\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
