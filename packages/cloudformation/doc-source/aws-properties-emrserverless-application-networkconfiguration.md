# AWS::EMRServerless::Application NetworkConfiguration<a name="aws-properties-emrserverless-application-networkconfiguration"></a>

The network configuration for customer VPC connectivity\.

## Syntax<a name="aws-properties-emrserverless-application-networkconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-emrserverless-application-networkconfiguration-syntax.json"></a>

```
{
  "[SecurityGroupIds](#cfn-emrserverless-application-networkconfiguration-securitygroupids)" : [ String, ... ],
  "[SubnetIds](#cfn-emrserverless-application-networkconfiguration-subnetids)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-emrserverless-application-networkconfiguration-syntax.yaml"></a>

```
  [SecurityGroupIds](#cfn-emrserverless-application-networkconfiguration-securitygroupids):
    - String
  [SubnetIds](#cfn-emrserverless-application-networkconfiguration-subnetids):
    - String
```

## Properties<a name="aws-properties-emrserverless-application-networkconfiguration-properties"></a>

`SecurityGroupIds` <a name="cfn-emrserverless-application-networkconfiguration-securitygroupids"></a>
The array of security group Ids for customer VPC connectivity\.  
_Minimum_: 1  
_Maximum_: 32  
_Pattern_: `^[-0-9a-zA-Z]+`  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetIds` <a name="cfn-emrserverless-application-networkconfiguration-subnetids"></a>
The array of subnet Ids for customer VPC connectivity\.  
_Minimum_: 1  
_Maximum_: 32  
_Pattern_: `^[-0-9a-zA-Z]+`  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
