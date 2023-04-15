# AWS::Kendra::DataSource DataSourceVpcConfiguration<a name="aws-properties-kendra-datasource-datasourcevpcconfiguration"></a>

Provides the configuration information to connect to an Amazon VPC\.

## Syntax<a name="aws-properties-kendra-datasource-datasourcevpcconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-datasourcevpcconfiguration-syntax.json"></a>

```
{
  "[SecurityGroupIds](#cfn-kendra-datasource-datasourcevpcconfiguration-securitygroupids)" : [ String, ... ],
  "[SubnetIds](#cfn-kendra-datasource-datasourcevpcconfiguration-subnetids)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-kendra-datasource-datasourcevpcconfiguration-syntax.yaml"></a>

```
  [SecurityGroupIds](#cfn-kendra-datasource-datasourcevpcconfiguration-securitygroupids):
    - String
  [SubnetIds](#cfn-kendra-datasource-datasourcevpcconfiguration-subnetids):
    - String
```

## Properties<a name="aws-properties-kendra-datasource-datasourcevpcconfiguration-properties"></a>

`SecurityGroupIds` <a name="cfn-kendra-datasource-datasourcevpcconfiguration-securitygroupids"></a>
A list of identifiers of security groups within your Amazon VPC\. The security groups should enable Amazon Kendra to connect to the data source\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetIds` <a name="cfn-kendra-datasource-datasourcevpcconfiguration-subnetids"></a>
A list of identifiers for subnets within your Amazon VPC\. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `6`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
