# AWS::Connect::Instance<a name="aws-resource-connect-instance"></a>

_This is a preview release for Amazon Connect\. It is subject to change\._

Initiates an Amazon Connect instance with all the supported channels enabled\. It does not attach any storage, such as Amazon Simple Storage Service \(Amazon S3\) or Amazon Kinesis\.

Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days\. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances\. You must wait 30 days before you can restart creating and deleting instances in your account\.

## Syntax<a name="aws-resource-connect-instance-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-connect-instance-syntax.json"></a>

```
{
  "Type" : "AWS::Connect::Instance",
  "Properties" : {
      "[Attributes](#cfn-connect-instance-attributes)" : Attributes,
      "[DirectoryId](#cfn-connect-instance-directoryid)" : String,
      "[IdentityManagementType](#cfn-connect-instance-identitymanagementtype)" : String,
      "[InstanceAlias](#cfn-connect-instance-instancealias)" : String
    }
}
```

### YAML<a name="aws-resource-connect-instance-syntax.yaml"></a>

```
Type: AWS::Connect::Instance
Properties:
  [Attributes](#cfn-connect-instance-attributes):
    Attributes
  [DirectoryId](#cfn-connect-instance-directoryid): String
  [IdentityManagementType](#cfn-connect-instance-identitymanagementtype): String
  [InstanceAlias](#cfn-connect-instance-instancealias): String
```

## Properties<a name="aws-resource-connect-instance-properties"></a>

`Attributes` <a name="cfn-connect-instance-attributes"></a>
A toggle for an individual feature at the instance level\.  
_Required_: Yes  
_Type_: [Attributes](aws-properties-connect-instance-attributes.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DirectoryId` <a name="cfn-connect-instance-directoryid"></a>
The identifier for the directory\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`IdentityManagementType` <a name="cfn-connect-instance-identitymanagementtype"></a>
The identity management type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CONNECT_MANAGED | EXISTING_DIRECTORY | SAML`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`InstanceAlias` <a name="cfn-connect-instance-instancealias"></a>
The alias of instance\. `InstanceAlias` is only required when `IdentityManagementType` is `CONNECT_MANAGED` or `SAML`\. `InstanceAlias` is not required when `IdentityManagementType` is `EXISTING_DIRECTORY`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `45`  
_Pattern_: `^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-connect-instance-return-values"></a>

### Ref<a name="aws-resource-connect-instance-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ID of the Amazon Connect instance\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-connect-instance-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-connect-instance-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the instance\.

`CreatedTime` <a name="CreatedTime-fn::getatt"></a>
When the instance was created\.

`Id` <a name="Id-fn::getatt"></a>
The identifier of the Amazon Connect instance\. You can find the instanceId in the ARN of the instance\.

`InstanceStatus` <a name="InstanceStatus-fn::getatt"></a>
The state of the instance\.

`ServiceRole` <a name="ServiceRole-fn::getatt"></a>
The service role of the instance\.
