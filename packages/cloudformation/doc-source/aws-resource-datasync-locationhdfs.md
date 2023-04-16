# AWS::DataSync::LocationHDFS<a name="aws-resource-datasync-locationhdfs"></a>

The `AWS::DataSync::LocationHDFS` resource specifies an endpoint for a Hadoop Distributed File System \(HDFS\)\.

## Syntax<a name="aws-resource-datasync-locationhdfs-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-datasync-locationhdfs-syntax.json"></a>

```
{
  "Type" : "AWS::DataSync::LocationHDFS",
  "Properties" : {
      "[AgentArns](#cfn-datasync-locationhdfs-agentarns)" : [ String, ... ],
      "[AuthenticationType](#cfn-datasync-locationhdfs-authenticationtype)" : String,
      "[BlockSize](#cfn-datasync-locationhdfs-blocksize)" : Integer,
      "[KerberosKeytab](#cfn-datasync-locationhdfs-kerberoskeytab)" : String,
      "[KerberosKrb5Conf](#cfn-datasync-locationhdfs-kerberoskrb5conf)" : String,
      "[KerberosPrincipal](#cfn-datasync-locationhdfs-kerberosprincipal)" : String,
      "[KmsKeyProviderUri](#cfn-datasync-locationhdfs-kmskeyprovideruri)" : String,
      "[NameNodes](#cfn-datasync-locationhdfs-namenodes)" : [ NameNode, ... ],
      "[QopConfiguration](#cfn-datasync-locationhdfs-qopconfiguration)" : QopConfiguration,
      "[ReplicationFactor](#cfn-datasync-locationhdfs-replicationfactor)" : Integer,
      "[SimpleUser](#cfn-datasync-locationhdfs-simpleuser)" : String,
      "[Subdirectory](#cfn-datasync-locationhdfs-subdirectory)" : String,
      "[Tags](#cfn-datasync-locationhdfs-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-datasync-locationhdfs-syntax.yaml"></a>

```
Type: AWS::DataSync::LocationHDFS
Properties:
  [AgentArns](#cfn-datasync-locationhdfs-agentarns):
    - String
  [AuthenticationType](#cfn-datasync-locationhdfs-authenticationtype): String
  [BlockSize](#cfn-datasync-locationhdfs-blocksize): Integer
  [KerberosKeytab](#cfn-datasync-locationhdfs-kerberoskeytab): String
  [KerberosKrb5Conf](#cfn-datasync-locationhdfs-kerberoskrb5conf): String
  [KerberosPrincipal](#cfn-datasync-locationhdfs-kerberosprincipal): String
  [KmsKeyProviderUri](#cfn-datasync-locationhdfs-kmskeyprovideruri): String
  [NameNodes](#cfn-datasync-locationhdfs-namenodes):
    - NameNode
  [QopConfiguration](#cfn-datasync-locationhdfs-qopconfiguration):
    QopConfiguration
  [ReplicationFactor](#cfn-datasync-locationhdfs-replicationfactor): Integer
  [SimpleUser](#cfn-datasync-locationhdfs-simpleuser): String
  [Subdirectory](#cfn-datasync-locationhdfs-subdirectory): String
  [Tags](#cfn-datasync-locationhdfs-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-datasync-locationhdfs-properties"></a>

`AgentArns` <a name="cfn-datasync-locationhdfs-agentarns"></a>
The Amazon Resource Names \(ARNs\) of the agents that are used to connect to the HDFS cluster\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `4`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuthenticationType` <a name="cfn-datasync-locationhdfs-authenticationtype"></a>
Property description not available\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BlockSize` <a name="cfn-datasync-locationhdfs-blocksize"></a>
The size of data blocks to write into the HDFS cluster\. The block size must be a multiple of 512 bytes\. The default block size is 128 mebibytes \(MiB\)\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1048576`  
_Maximum_: `1073741824`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KerberosKeytab` <a name="cfn-datasync-locationhdfs-kerberoskeytab"></a>
The Kerberos key table \(keytab\) that contains mappings between the defined Kerberos principal and the encrypted keys\. Provide the base64\-encoded file text\. If `KERBEROS` is specified for `AuthType`, this value is required\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KerberosKrb5Conf` <a name="cfn-datasync-locationhdfs-kerberoskrb5conf"></a>
The `krb5.conf` file that contains the Kerberos configuration information\. You can load the `krb5.conf` by providing a string of the file's contents or an Amazon S3 presigned URL of the file\. If`KERBEROS` is specified for `AuthType`, this value is required\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KerberosPrincipal` <a name="cfn-datasync-locationhdfs-kerberosprincipal"></a>
The Kerberos principal with access to the files and folders on the HDFS cluster\.  
If `KERBEROS` is specified for `AuthenticationType`, this parameter is required\.
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^.+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKeyProviderUri` <a name="cfn-datasync-locationhdfs-kmskeyprovideruri"></a>
The URI of the HDFS cluster's Key Management Server \(KMS\)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^kms:\/\/http[s]?@(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])(;(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9]))*:[0-9]{1,5}\/kms$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NameNodes` <a name="cfn-datasync-locationhdfs-namenodes"></a>
The NameNode that manages the HDFS namespace\. The NameNode performs operations such as opening, closing, and renaming files and directories\. The NameNode contains the information to map blocks of data to the DataNodes\. You can use only one NameNode\.  
_Required_: Yes  
_Type_: List of [NameNode](aws-properties-datasync-locationhdfs-namenode.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QopConfiguration` <a name="cfn-datasync-locationhdfs-qopconfiguration"></a>
The Quality of Protection \(QOP\) configuration specifies the Remote Procedure Call \(RPC\) and data transfer protection settings configured on the Hadoop Distributed File System \(HDFS\) cluster\. If `QopConfiguration` isn't specified, `RpcProtection` and `DataTransferProtection` default to `PRIVACY`\. If you set `RpcProtection` or `DataTransferProtection`, the other parameter assumes the same value\.  
_Required_: No  
_Type_: [QopConfiguration](aws-properties-datasync-locationhdfs-qopconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReplicationFactor` <a name="cfn-datasync-locationhdfs-replicationfactor"></a>
The number of DataNodes to replicate the data to when writing to the HDFS cluster\. By default, data is replicated to three DataNodes\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SimpleUser` <a name="cfn-datasync-locationhdfs-simpleuser"></a>
The user name used to identify the client on the host operating system\.  
If `SIMPLE` is specified for `AuthenticationType`, this parameter is required\.
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^[_.A-Za-z0-9][-_.A-Za-z0-9]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subdirectory` <a name="cfn-datasync-locationhdfs-subdirectory"></a>
A subdirectory in the HDFS cluster\. This subdirectory is used to read data from or write data to the HDFS cluster\. If the subdirectory isn't specified, it will default to `/`\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Pattern_: `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-datasync-locationhdfs-tags"></a>
The key\-value pair that represents the tag that you want to add to the location\. The value can be an empty string\. We recommend using tags to name your resources\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-datasync-locationhdfs-return-values"></a>

### Ref<a name="aws-resource-datasync-locationhdfs-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the location resource ARN\. For example:

`arn:aws:datasync:us-east-2:111222333444:location/loc-07db7abfc326c50s3`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-datasync-locationhdfs-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-datasync-locationhdfs-return-values-fn--getatt-fn--getatt"></a>

`LocationArn` <a name="LocationArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the HDFS cluster location to describe\.

`LocationUri` <a name="LocationUri-fn::getatt"></a>
The URI of the HDFS cluster location\.
