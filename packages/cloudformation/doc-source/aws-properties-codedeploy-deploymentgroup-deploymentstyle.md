# AWS::CodeDeploy::DeploymentGroup DeploymentStyle<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle"></a>

Information about the type of deployment, either in\-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer\.

## Syntax<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle-syntax.json"></a>

```
{
  "[DeploymentOption](#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymentoption)" : String,
  "[DeploymentType](#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymenttype)" : String
}
```

### YAML<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle-syntax.yaml"></a>

```
  [DeploymentOption](#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymentoption): String
  [DeploymentType](#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymenttype): String
```

## Properties<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle-properties"></a>

`DeploymentOption` <a name="cfn-codedeploy-deploymentgroup-deploymentstyle-deploymentoption"></a>
Indicates whether to route deployment traffic behind a load balancer\.  
 An Amazon EC2 Application Load Balancer or Network Load Balancer is required for an Amazon ECS deployment\.
_Required_: No  
_Type_: String  
_Allowed values_: `WITH_TRAFFIC_CONTROL | WITHOUT_TRAFFIC_CONTROL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeploymentType` <a name="cfn-codedeploy-deploymentgroup-deploymentstyle-deploymenttype"></a>
Indicates whether to run an in\-place or blue/green deployment\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BLUE_GREEN | IN_PLACE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-codedeploy-deploymentgroup-deploymentstyle--seealso"></a>

- [EC2TagFilter](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_EC2TagFilter.html) in the _AWS CodeDeploy API Reference_\.
