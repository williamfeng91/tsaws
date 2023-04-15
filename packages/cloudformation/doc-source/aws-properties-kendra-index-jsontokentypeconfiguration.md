# AWS::Kendra::Index JsonTokenTypeConfiguration<a name="aws-properties-kendra-index-jsontokentypeconfiguration"></a>

Provides the configuration information for the JSON token type\.

## Syntax<a name="aws-properties-kendra-index-jsontokentypeconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-index-jsontokentypeconfiguration-syntax.json"></a>

```
{
  "[GroupAttributeField](#cfn-kendra-index-jsontokentypeconfiguration-groupattributefield)" : String,
  "[UserNameAttributeField](#cfn-kendra-index-jsontokentypeconfiguration-usernameattributefield)" : String
}
```

### YAML<a name="aws-properties-kendra-index-jsontokentypeconfiguration-syntax.yaml"></a>

```
  [GroupAttributeField](#cfn-kendra-index-jsontokentypeconfiguration-groupattributefield): String
  [UserNameAttributeField](#cfn-kendra-index-jsontokentypeconfiguration-usernameattributefield): String
```

## Properties<a name="aws-properties-kendra-index-jsontokentypeconfiguration-properties"></a>

`GroupAttributeField` <a name="cfn-kendra-index-jsontokentypeconfiguration-groupattributefield"></a>
The group attribute field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserNameAttributeField` <a name="cfn-kendra-index-jsontokentypeconfiguration-usernameattributefield"></a>
The user name attribute field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
