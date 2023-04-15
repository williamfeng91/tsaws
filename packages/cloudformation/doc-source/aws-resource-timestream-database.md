# AWS::Timestream::Database<a name="aws-resource-timestream-database"></a>

Creates a new Timestream database\. If the AWS KMS key is not specified, the database will be encrypted with a Timestream managed AWS KMS key located in your account\. Refer to [AWS managed AWS KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) for more info\. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html)\. See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html) for details\.

## Syntax<a name="aws-resource-timestream-database-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-timestream-database-syntax.json"></a>

```
{
  "Type" : "AWS::Timestream::Database",
  "Properties" : {
      "[DatabaseName](#cfn-timestream-database-databasename)" : String,
      "[KmsKeyId](#cfn-timestream-database-kmskeyid)" : String,
      "[Tags](#cfn-timestream-database-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-timestream-database-syntax.yaml"></a>

```
Type: AWS::Timestream::Database
Properties:
  [DatabaseName](#cfn-timestream-database-databasename): String
  [KmsKeyId](#cfn-timestream-database-kmskeyid): String
  [Tags](#cfn-timestream-database-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-timestream-database-properties"></a>

`DatabaseName` <a name="cfn-timestream-database-databasename"></a>
The name of the Timestream database\.  
_Length Constraints_: Minimum length of 3 bytes\. Maximum length of 256 bytes\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKeyId` <a name="cfn-timestream-database-kmskeyid"></a>
The identifier of the AWS KMS key used to encrypt the data stored in the database\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-timestream-database-tags"></a>
The tags to add to the database\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-timestream-database-return-values"></a>

### Ref<a name="aws-resource-timestream-database-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the database name `DATABASE_NAME`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-timestream-database-return-values-fn--getatt"></a>

The `Fn::GetAtt` returns a value for the specified attribute of this type\. The following are the available attributes:

#### <a name="aws-resource-timestream-database-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The `arn` of the database\.
