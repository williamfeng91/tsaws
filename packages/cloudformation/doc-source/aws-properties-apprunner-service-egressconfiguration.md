# AWS::AppRunner::Service EgressConfiguration<a name="aws-properties-apprunner-service-egressconfiguration"></a>

Describes configuration settings related to outbound network traffic of an AWS App Runner service\.

## Syntax<a name="aws-properties-apprunner-service-egressconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-apprunner-service-egressconfiguration-syntax.json"></a>

```
{
  "[EgressType](#cfn-apprunner-service-egressconfiguration-egresstype)" : String,
  "[VpcConnectorArn](#cfn-apprunner-service-egressconfiguration-vpcconnectorarn)" : String
}
```

### YAML<a name="aws-properties-apprunner-service-egressconfiguration-syntax.yaml"></a>

```
  [EgressType](#cfn-apprunner-service-egressconfiguration-egresstype): String
  [VpcConnectorArn](#cfn-apprunner-service-egressconfiguration-vpcconnectorarn): String
```

## Properties<a name="aws-properties-apprunner-service-egressconfiguration-properties"></a>

`EgressType` <a name="cfn-apprunner-service-egressconfiguration-egresstype"></a>
The type of egress configuration\.  
Set to `DEFAULT` for access to resources hosted on public networks\.  
Set to `VPC` to associate your service to a custom VPC specified by `VpcConnectorArn`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DEFAULT | VPC`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcConnectorArn` <a name="cfn-apprunner-service-egressconfiguration-vpcconnectorarn"></a>
The Amazon Resource Name \(ARN\) of the App Runner VPC connector that you want to associate with your App Runner service\. Only valid when `EgressType = VPC`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1011`  
_Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
