# AWS::Redshift::EndpointAccess<a name="aws-resource-redshift-endpointaccess"></a>

Creates a Redshift\-managed VPC endpoint\.

## Syntax<a name="aws-resource-redshift-endpointaccess-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-redshift-endpointaccess-syntax.json"></a>

```
{
  "Type" : "AWS::Redshift::EndpointAccess",
  "Properties" : {
      "[ClusterIdentifier](#cfn-redshift-endpointaccess-clusteridentifier)" : String,
      "[EndpointName](#cfn-redshift-endpointaccess-endpointname)" : String,
      "[ResourceOwner](#cfn-redshift-endpointaccess-resourceowner)" : String,
      "[SubnetGroupName](#cfn-redshift-endpointaccess-subnetgroupname)" : String,
      "[VpcSecurityGroupIds](#cfn-redshift-endpointaccess-vpcsecuritygroupids)" : [ String, ... ]
    }
}
```

### YAML<a name="aws-resource-redshift-endpointaccess-syntax.yaml"></a>

```
Type: AWS::Redshift::EndpointAccess
Properties:
  [ClusterIdentifier](#cfn-redshift-endpointaccess-clusteridentifier): String
  [EndpointName](#cfn-redshift-endpointaccess-endpointname): String
  [ResourceOwner](#cfn-redshift-endpointaccess-resourceowner): String
  [SubnetGroupName](#cfn-redshift-endpointaccess-subnetgroupname): String
  [VpcSecurityGroupIds](#cfn-redshift-endpointaccess-vpcsecuritygroupids):
    - String
```

## Properties<a name="aws-resource-redshift-endpointaccess-properties"></a>

`ClusterIdentifier` <a name="cfn-redshift-endpointaccess-clusteridentifier"></a>
The cluster identifier of the cluster associated with the endpoint\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `2147483647`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EndpointName` <a name="cfn-redshift-endpointaccess-endpointname"></a>
The name of the endpoint\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `2147483647`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ResourceOwner` <a name="cfn-redshift-endpointaccess-resourceowner"></a>
The AWS account ID of the owner of the cluster\.  
_Required_: No  
_Type_: String  
_Maximum_: `2147483647`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SubnetGroupName` <a name="cfn-redshift-endpointaccess-subnetgroupname"></a>
The subnet group name where Amazon Redshift chooses to deploy the endpoint\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `2147483647`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VpcSecurityGroupIds` <a name="cfn-redshift-endpointaccess-vpcsecuritygroupids"></a>
The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-redshift-endpointaccess-return-values"></a>

### Ref<a name="aws-resource-redshift-endpointaccess-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource name\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-redshift-endpointaccess-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-redshift-endpointaccess-return-values-fn--getatt-fn--getatt"></a>

`Address` <a name="Address-fn::getatt"></a>
The DNS address of the endpoint\.

`EndpointCreateTime` <a name="EndpointCreateTime-fn::getatt"></a>
The time \(UTC\) that the endpoint was created\.

`EndpointStatus` <a name="EndpointStatus-fn::getatt"></a>
The status of the endpoint\.

`Port` <a name="Port-fn::getatt"></a>
The port number on which the cluster accepts incoming connections\.

`VpcEndpoint` <a name="VpcEndpoint-fn::getatt"></a>
The connection endpoint for connecting to an Amazon Redshift cluster through the proxy\.

`VpcEndpoint.NetworkInterfaces` <a name="VpcEndpoint.NetworkInterfaces-fn::getatt"></a>
Property description not available\.

`VpcEndpoint.VpcEndpointId` <a name="VpcEndpoint.VpcEndpointId-fn::getatt"></a>
The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy\.

`VpcEndpoint.VpcId` <a name="VpcEndpoint.VpcId-fn::getatt"></a>
The VPC identifier that the endpoint is associated\.

`VpcSecurityGroups` <a name="VpcSecurityGroups-fn::getatt"></a>
The security groups associated with the endpoint\.
