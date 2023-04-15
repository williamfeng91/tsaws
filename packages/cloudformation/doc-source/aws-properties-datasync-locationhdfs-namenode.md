# AWS::DataSync::LocationHDFS NameNode<a name="aws-properties-datasync-locationhdfs-namenode"></a>

The NameNode of the Hadoop Distributed File System \(HDFS\)\. The NameNode manages the file system's namespace and performs operations such as opening, closing, and renaming files and directories\. The NameNode also contains the information to map blocks of data to the DataNodes\.

## Syntax<a name="aws-properties-datasync-locationhdfs-namenode-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-datasync-locationhdfs-namenode-syntax.json"></a>

```
{
  "[Hostname](#cfn-datasync-locationhdfs-namenode-hostname)" : String,
  "[Port](#cfn-datasync-locationhdfs-namenode-port)" : Integer
}
```

### YAML<a name="aws-properties-datasync-locationhdfs-namenode-syntax.yaml"></a>

```
  [Hostname](#cfn-datasync-locationhdfs-namenode-hostname): String
  [Port](#cfn-datasync-locationhdfs-namenode-port): Integer
```

## Properties<a name="aws-properties-datasync-locationhdfs-namenode-properties"></a>

`Hostname` <a name="cfn-datasync-locationhdfs-namenode-hostname"></a>
The hostname of the NameNode in the HDFS cluster\. This value is the IP address or Domain Name Service \(DNS\) name of the NameNode\. An agent that's installed on\-premises uses this hostname to communicate with the NameNode in the network\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-datasync-locationhdfs-namenode-port"></a>
The port that the NameNode uses to listen to client requests\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `65536`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
