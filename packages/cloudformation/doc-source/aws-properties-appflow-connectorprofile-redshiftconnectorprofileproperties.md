# AWS::AppFlow::ConnectorProfile RedshiftConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties"></a>

The connector\-specific profile properties when using Amazon Redshift\.

## Syntax<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties-syntax.json"></a>

```
{
  "[BucketName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketname)" : String,
  "[BucketPrefix](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketprefix)" : String,
  "[ClusterIdentifier](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-clusteridentifier)" : String,
  "[DataApiRoleArn](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-dataapirolearn)" : String,
  "[DatabaseName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databasename)" : String,
  "[DatabaseUrl](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databaseurl)" : String,
  "[IsRedshiftServerless](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-isredshiftserverless)" : Boolean,
  "[RoleArn](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-rolearn)" : String,
  "[WorkgroupName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-workgroupname)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties-syntax.yaml"></a>

```
  [BucketName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketname): String
  [BucketPrefix](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketprefix): String
  [ClusterIdentifier](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-clusteridentifier): String
  [DataApiRoleArn](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-dataapirolearn): String
  [DatabaseName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databasename): String
  [DatabaseUrl](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databaseurl): String
  [IsRedshiftServerless](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-isredshiftserverless): Boolean
  [RoleArn](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-rolearn): String
  [WorkgroupName](#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-workgroupname): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties-properties"></a>

`BucketName` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketname"></a>
A name for the associated Amazon S3 bucket\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketprefix"></a>
The object key for the destination bucket in which Amazon AppFlow places the files\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClusterIdentifier` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-clusteridentifier"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataApiRoleArn` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-dataapirolearn"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseName` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databasename"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseUrl` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databaseurl"></a>
The JDBC URL of the Amazon Redshift cluster\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IsRedshiftServerless` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-isredshiftserverless"></a>
Property description not available\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-rolearn"></a>
The Amazon Resource Name \(ARN\) of IAM role that grants Amazon Redshift read\-only access to Amazon S3\. For more information, and for the polices that you attach to this role, see [Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3)\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `arn:aws:iam:.*:[0-9]+:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WorkgroupName` <a name="cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-workgroupname"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties--seealso"></a>

- [RedshiftConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RedshiftConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
