# AWS::AppStream::Fleet VpcConfig<a name="aws-properties-appstream-fleet-vpcconfig"></a>

The VPC configuration information for the fleet\.

## Syntax<a name="aws-properties-appstream-fleet-vpcconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appstream-fleet-vpcconfig-syntax.json"></a>

```
{
  "[SecurityGroupIds](#cfn-appstream-fleet-vpcconfig-securitygroupids)" : [ String, ... ],
  "[SubnetIds](#cfn-appstream-fleet-vpcconfig-subnetids)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-appstream-fleet-vpcconfig-syntax.yaml"></a>

```
  [SecurityGroupIds](#cfn-appstream-fleet-vpcconfig-securitygroupids):
    - String
  [SubnetIds](#cfn-appstream-fleet-vpcconfig-subnetids):
    - String
```

## Properties<a name="aws-properties-appstream-fleet-vpcconfig-properties"></a>

`SecurityGroupIds` <a name="cfn-appstream-fleet-vpcconfig-securitygroupids"></a>
The identifiers of the security groups for the fleet\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `5`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetIds` <a name="cfn-appstream-fleet-vpcconfig-subnetids"></a>
The identifiers of the subnets to which a network interface is attached from the fleet instance\. Fleet instances can use one or two subnets\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
