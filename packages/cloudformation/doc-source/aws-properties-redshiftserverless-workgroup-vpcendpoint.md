# AWS::RedshiftServerless::Workgroup VpcEndpoint<a name="aws-properties-redshiftserverless-workgroup-vpcendpoint"></a>

The connection endpoint for connecting to Amazon Redshift Serverless through the proxy\.

## Syntax<a name="aws-properties-redshiftserverless-workgroup-vpcendpoint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-redshiftserverless-workgroup-vpcendpoint-syntax.json"></a>

```
{
  "[NetworkInterfaces](#cfn-redshiftserverless-workgroup-vpcendpoint-networkinterfaces)" : [ NetworkInterface, ... ],
  "[VpcEndpointId](#cfn-redshiftserverless-workgroup-vpcendpoint-vpcendpointid)" : String,
  "[VpcId](#cfn-redshiftserverless-workgroup-vpcendpoint-vpcid)" : String
}
```

### YAML<a name="aws-properties-redshiftserverless-workgroup-vpcendpoint-syntax.yaml"></a>

```
  [NetworkInterfaces](#cfn-redshiftserverless-workgroup-vpcendpoint-networkinterfaces):
    - NetworkInterface
  [VpcEndpointId](#cfn-redshiftserverless-workgroup-vpcendpoint-vpcendpointid): String
  [VpcId](#cfn-redshiftserverless-workgroup-vpcendpoint-vpcid): String
```

## Properties<a name="aws-properties-redshiftserverless-workgroup-vpcendpoint-properties"></a>

`NetworkInterfaces` <a name="cfn-redshiftserverless-workgroup-vpcendpoint-networkinterfaces"></a>
One or more network interfaces of the endpoint\. Also known as an interface endpoint\.  
_Required_: No  
_Type_: List of [NetworkInterface](aws-properties-redshiftserverless-workgroup-networkinterface.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcEndpointId` <a name="cfn-redshiftserverless-workgroup-vpcendpoint-vpcendpointid"></a>
The connection endpoint ID for connecting to Amazon Redshift Serverless\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcId` <a name="cfn-redshiftserverless-workgroup-vpcendpoint-vpcid"></a>
The VPC identifier that the endpoint is associated with\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
