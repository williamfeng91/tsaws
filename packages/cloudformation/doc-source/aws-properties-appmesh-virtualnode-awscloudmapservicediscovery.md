# AWS::AppMesh::VirtualNode AwsCloudMapServiceDiscovery<a name="aws-properties-appmesh-virtualnode-awscloudmapservicediscovery"></a>

An object that represents the AWS Cloud Map service discovery information for your virtual node\.

**Note**  
AWS Cloud Map is not available in the eu\-south\-1 Region\.

## Syntax<a name="aws-properties-appmesh-virtualnode-awscloudmapservicediscovery-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-awscloudmapservicediscovery-syntax.json"></a>

```
{
  "[Attributes](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-attributes)" : [ AwsCloudMapInstanceAttribute, ... ],
  "[IpPreference](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-ippreference)" : String,
  "[NamespaceName](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-namespacename)" : String,
  "[ServiceName](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-servicename)" : String
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-awscloudmapservicediscovery-syntax.yaml"></a>

```
  [Attributes](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-attributes):
    - AwsCloudMapInstanceAttribute
  [IpPreference](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-ippreference): String
  [NamespaceName](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-namespacename): String
  [ServiceName](#cfn-appmesh-virtualnode-awscloudmapservicediscovery-servicename): String
```

## Properties<a name="aws-properties-appmesh-virtualnode-awscloudmapservicediscovery-properties"></a>

`Attributes` <a name="cfn-appmesh-virtualnode-awscloudmapservicediscovery-attributes"></a>
A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance\. Only instances that match all of the specified key/value pairs will be returned\.  
_Required_: No  
_Type_: List of [AwsCloudMapInstanceAttribute](aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IpPreference` <a name="cfn-appmesh-virtualnode-awscloudmapservicediscovery-ippreference"></a>
The preferred IP version that this virtual node uses\. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node\.  
_Required_: No  
_Type_: String  
_Allowed values_: `IPv4_ONLY | IPv4_PREFERRED | IPv6_ONLY | IPv6_PREFERRED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NamespaceName` <a name="cfn-appmesh-virtualnode-awscloudmapservicediscovery-namespacename"></a>
The HTTP name of the AWS Cloud Map namespace to use\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceName` <a name="cfn-appmesh-virtualnode-awscloudmapservicediscovery-servicename"></a>
The name of the AWS Cloud Map service to use\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)