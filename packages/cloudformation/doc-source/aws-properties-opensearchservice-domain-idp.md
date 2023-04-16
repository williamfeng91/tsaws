# AWS::OpenSearchService::Domain Idp<a name="aws-properties-opensearchservice-domain-idp"></a>

The SAML Identity Provider's information\.

## Syntax<a name="aws-properties-opensearchservice-domain-idp-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-opensearchservice-domain-idp-syntax.json"></a>

```
{
  "[EntityId](#cfn-opensearchservice-domain-idp-entityid)" : String,
  "[MetadataContent](#cfn-opensearchservice-domain-idp-metadatacontent)" : String
}
```

### YAML<a name="aws-properties-opensearchservice-domain-idp-syntax.yaml"></a>

```
  [EntityId](#cfn-opensearchservice-domain-idp-entityid): String
  [MetadataContent](#cfn-opensearchservice-domain-idp-metadatacontent): String
```

## Properties<a name="aws-properties-opensearchservice-domain-idp-properties"></a>

`EntityId` <a name="cfn-opensearchservice-domain-idp-entityid"></a>
The unique entity ID of the application in the SAML identity provider\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `8`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetadataContent` <a name="cfn-opensearchservice-domain-idp-metadatacontent"></a>
The metadata of the SAML application, in XML format\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1048576`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
