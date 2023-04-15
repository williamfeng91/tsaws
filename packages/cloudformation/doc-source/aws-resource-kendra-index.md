# AWS::Kendra::Index<a name="aws-resource-kendra-index"></a>

Creates an Amazon Kendra index

Once the index is active you can add documents to your index using the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation or using one of the supported data sources\.

## Syntax<a name="aws-resource-kendra-index-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-kendra-index-syntax.json"></a>

```
{
  "Type" : "AWS::Kendra::Index",
  "Properties" : {
      "[CapacityUnits](#cfn-kendra-index-capacityunits)" : CapacityUnitsConfiguration,
      "[Description](#cfn-kendra-index-description)" : String,
      "[DocumentMetadataConfigurations](#cfn-kendra-index-documentmetadataconfigurations)" : [ DocumentMetadataConfiguration, ... ],
      "[Edition](#cfn-kendra-index-edition)" : String,
      "[Name](#cfn-kendra-index-name)" : String,
      "[RoleArn](#cfn-kendra-index-rolearn)" : String,
      "[ServerSideEncryptionConfiguration](#cfn-kendra-index-serversideencryptionconfiguration)" : ServerSideEncryptionConfiguration,
      "[Tags](#cfn-kendra-index-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[UserContextPolicy](#cfn-kendra-index-usercontextpolicy)" : String,
      "[UserTokenConfigurations](#cfn-kendra-index-usertokenconfigurations)" : [ UserTokenConfiguration, ... ]
    }
}
```

### YAML<a name="aws-resource-kendra-index-syntax.yaml"></a>

```
Type: AWS::Kendra::Index
Properties:
  [CapacityUnits](#cfn-kendra-index-capacityunits):
    CapacityUnitsConfiguration
  [Description](#cfn-kendra-index-description): String
  [DocumentMetadataConfigurations](#cfn-kendra-index-documentmetadataconfigurations):
    - DocumentMetadataConfiguration
  [Edition](#cfn-kendra-index-edition): String
  [Name](#cfn-kendra-index-name): String
  [RoleArn](#cfn-kendra-index-rolearn): String
  [ServerSideEncryptionConfiguration](#cfn-kendra-index-serversideencryptionconfiguration):
    ServerSideEncryptionConfiguration
  [Tags](#cfn-kendra-index-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [UserContextPolicy](#cfn-kendra-index-usercontextpolicy): String
  [UserTokenConfigurations](#cfn-kendra-index-usertokenconfigurations):
    - UserTokenConfiguration
```

## Properties<a name="aws-resource-kendra-index-properties"></a>

`CapacityUnits` <a name="cfn-kendra-index-capacityunits"></a>
Property description not available\.  
_Required_: No  
_Type_: [CapacityUnitsConfiguration](aws-properties-kendra-index-capacityunitsconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-kendra-index-description"></a>
A description for the index\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentMetadataConfigurations` <a name="cfn-kendra-index-documentmetadataconfigurations"></a>
Specifies the properties of an index field\. You can add either a custom or a built\-in field\. You can add and remove built\-in fields at any time\. When a built\-in field is removed it's configuration reverts to the default for the field\. Custom fields can't be removed from an index after they are added\.  
_Required_: No  
_Type_: List of [DocumentMetadataConfiguration](aws-properties-kendra-index-documentmetadataconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Edition` <a name="cfn-kendra-index-edition"></a>
Indicates whether the index is a Enterprise Edition index or a Developer Edition index\. Valid values are `DEVELOPER_EDITION` and `ENTERPRISE_EDITION`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DEVELOPER_EDITION | ENTERPRISE_EDITION`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-kendra-index-name"></a>
The name of the index\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1000`  
_Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_-]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-kendra-index-rolearn"></a>
An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics\. This is also the role used when you use the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation to index documents from an Amazon S3 bucket\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServerSideEncryptionConfiguration` <a name="cfn-kendra-index-serversideencryptionconfiguration"></a>
The identifier of the AWS KMS customer managed key \(CMK\) to use to encrypt data indexed by Amazon Kendra\. Amazon Kendra doesn't support asymmetric CMKs\.  
_Required_: No  
_Type_: [ServerSideEncryptionConfiguration](aws-properties-kendra-index-serversideencryptionconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-kendra-index-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserContextPolicy` <a name="cfn-kendra-index-usercontextpolicy"></a>
The user context policy\.  
ATTRIBUTE_FILTER

- All indexed content is searchable and displayable for all users\. If you want to filter search results on user context, you can use the attribute filters of `_user_id` and `_group_ids` or you can provide user and group information in `UserContext`\.
  USER_TOKEN
- Enables token\-based user access control to filter search results on user context\. All documents with no access control and all documents accessible to the user will be searchable and displayable\.
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserTokenConfigurations` <a name="cfn-kendra-index-usertokenconfigurations"></a>
Defines the type of user token used for the index\.  
_Required_: No  
_Type_: List of [UserTokenConfiguration](aws-properties-kendra-index-usertokenconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-kendra-index-return-values"></a>

### Ref<a name="aws-resource-kendra-index-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the index ID\. For example:

`{"Ref": "index-id"}`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-kendra-index-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-kendra-index-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the index\. For example: `arn:aws:kendra:us-west-2:111122223333:index/0123456789abcdef`\.

`Id` <a name="Id-fn::getatt"></a>
The identifier for the index\. For example: `f4aeaa10-8056-4b2c-a343-522ca0f41234`\.
