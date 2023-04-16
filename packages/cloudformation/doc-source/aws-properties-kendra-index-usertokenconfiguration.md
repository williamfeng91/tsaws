# AWS::Kendra::Index UserTokenConfiguration<a name="aws-properties-kendra-index-usertokenconfiguration"></a>

Provides the configuration information for a token\.

## Syntax<a name="aws-properties-kendra-index-usertokenconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-index-usertokenconfiguration-syntax.json"></a>

```
{
  "[JsonTokenTypeConfiguration](#cfn-kendra-index-usertokenconfiguration-jsontokentypeconfiguration)" : JsonTokenTypeConfiguration,
  "[JwtTokenTypeConfiguration](#cfn-kendra-index-usertokenconfiguration-jwttokentypeconfiguration)" : JwtTokenTypeConfiguration
}
```

### YAML<a name="aws-properties-kendra-index-usertokenconfiguration-syntax.yaml"></a>

```
  [JsonTokenTypeConfiguration](#cfn-kendra-index-usertokenconfiguration-jsontokentypeconfiguration):
    JsonTokenTypeConfiguration
  [JwtTokenTypeConfiguration](#cfn-kendra-index-usertokenconfiguration-jwttokentypeconfiguration):
    JwtTokenTypeConfiguration
```

## Properties<a name="aws-properties-kendra-index-usertokenconfiguration-properties"></a>

`JsonTokenTypeConfiguration` <a name="cfn-kendra-index-usertokenconfiguration-jsontokentypeconfiguration"></a>
Information about the JSON token type configuration\.  
_Required_: No  
_Type_: [JsonTokenTypeConfiguration](aws-properties-kendra-index-jsontokentypeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`JwtTokenTypeConfiguration` <a name="cfn-kendra-index-usertokenconfiguration-jwttokentypeconfiguration"></a>
Information about the JWT token type configuration\.  
_Required_: No  
_Type_: [JwtTokenTypeConfiguration](aws-properties-kendra-index-jwttokentypeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
