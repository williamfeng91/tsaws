# AWS::Lightsail::Container PublicEndpoint<a name="aws-properties-lightsail-container-publicendpoint"></a>

`PublicEndpoint` is a property of the [ContainerServiceDeployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html) property\. It describes describes the settings of the public endpoint of a container on a container service\.

## Syntax<a name="aws-properties-lightsail-container-publicendpoint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lightsail-container-publicendpoint-syntax.json"></a>

```
{
  "[ContainerName](#cfn-lightsail-container-publicendpoint-containername)" : String,
  "[ContainerPort](#cfn-lightsail-container-publicendpoint-containerport)" : Integer,
  "[HealthCheckConfig](#cfn-lightsail-container-publicendpoint-healthcheckconfig)" : HealthCheckConfig
}
```

### YAML<a name="aws-properties-lightsail-container-publicendpoint-syntax.yaml"></a>

```
  [ContainerName](#cfn-lightsail-container-publicendpoint-containername): String
  [ContainerPort](#cfn-lightsail-container-publicendpoint-containerport): Integer
  [HealthCheckConfig](#cfn-lightsail-container-publicendpoint-healthcheckconfig):
    HealthCheckConfig
```

## Properties<a name="aws-properties-lightsail-container-publicendpoint-properties"></a>

`ContainerName` <a name="cfn-lightsail-container-publicendpoint-containername"></a>
The name of the container entry of the deployment that the endpoint configuration applies to\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContainerPort` <a name="cfn-lightsail-container-publicendpoint-containerport"></a>
The port of the specified container to which traffic is forwarded to\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HealthCheckConfig` <a name="cfn-lightsail-container-publicendpoint-healthcheckconfig"></a>
An object that describes the health check configuration of the container\.  
_Required_: No  
_Type_: [HealthCheckConfig](aws-properties-lightsail-container-healthcheckconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
