# AWS::EC2::NetworkAcl<a name="aws-resource-ec2-networkacl"></a>

Specifies a network ACL for your VPC\.

## Syntax<a name="aws-resource-ec2-networkacl-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ec2-networkacl-syntax.json"></a>

```
{
  "Type" : "AWS::EC2::NetworkAcl",
  "Properties" : {
      "[Tags](#cfn-ec2-networkacl-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[VpcId](#cfn-ec2-networkacl-vpcid)" : String
    }
}
```

### YAML<a name="aws-resource-ec2-networkacl-syntax.yaml"></a>

```
Type: AWS::EC2::NetworkAcl
Properties:
  [Tags](#cfn-ec2-networkacl-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [VpcId](#cfn-ec2-networkacl-vpcid): String
```

## Properties<a name="aws-resource-ec2-networkacl-properties"></a>

`Tags` <a name="cfn-ec2-networkacl-tags"></a>
The tags for the network ACL\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcId` <a name="cfn-ec2-networkacl-vpcid"></a>
The ID of the VPC for the network ACL\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-ec2-networkacl-return-values"></a>

### Ref<a name="aws-resource-ec2-networkacl-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource name\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-ec2-networkacl-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-ec2-networkacl-return-values-fn--getatt-fn--getatt"></a>

`Id` <a name="Id-fn::getatt"></a>
The ID of the network ACL\.

## Examples<a name="aws-resource-ec2-networkacl--examples"></a>

### Network ACL<a name="aws-resource-ec2-networkacl--examples--Network_ACL"></a>

The following example creates a Network ACL in a VPC\.

#### JSON<a name="aws-resource-ec2-networkacl--examples--Network_ACL--json"></a>

```
"myNetworkAcl" : {
   "Type" : "AWS::EC2::NetworkAcl",
   "Properties" : {
      "VpcId" : { "Ref" : "myVPC" },
      "Tags" : [ { "Key" : "stack", "Value" : "production" } ]
   }
}
```

#### YAML<a name="aws-resource-ec2-networkacl--examples--Network_ACL--yaml"></a>

```
   myNetworkAcl:
      Type: AWS::EC2::NetworkAcl
      Properties:
         VpcId:
           Ref: myVPC
         Tags:
         - Key: stack
           Value: production
```

## See also<a name="aws-resource-ec2-networkacl--seealso"></a>

- [CreateNetworkAcl](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateNetworkAcl.html) in the _Amazon EC2 API Reference_
- [Network ACLs](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html) in the _Amazon VPC User Guide_
