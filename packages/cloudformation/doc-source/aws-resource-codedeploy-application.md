# AWS::CodeDeploy::Application<a name="aws-resource-codedeploy-application"></a>

The `AWS::CodeDeploy::Application` resource creates an AWS CodeDeploy application\. In CodeDeploy, an application is a name that functions as a container to ensure that the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment\. You can use the `AWS::CodeDeploy::DeploymentGroup` resource to associate the application with a CodeDeploy deployment group\. For more information, see [CodeDeploy Deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps.html) in the _AWS CodeDeploy User Guide_\.

## Syntax<a name="aws-resource-codedeploy-application-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-codedeploy-application-syntax.json"></a>

```
{
  "Type" : "AWS::CodeDeploy::Application",
  "Properties" : {
      "[ApplicationName](#cfn-codedeploy-application-applicationname)" : String,
      "[ComputePlatform](#cfn-codedeploy-application-computeplatform)" : String,
      "[Tags](#cfn-codedeploy-application-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-codedeploy-application-syntax.yaml"></a>

```
Type: AWS::CodeDeploy::Application
Properties:
  [ApplicationName](#cfn-codedeploy-application-applicationname): String
  [ComputePlatform](#cfn-codedeploy-application-computeplatform): String
  [Tags](#cfn-codedeploy-application-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-codedeploy-application-properties"></a>

`ApplicationName` <a name="cfn-codedeploy-application-applicationname"></a>
A name for the application\. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name\. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html)\.  
 Updates to `ApplicationName` are not supported\.
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ComputePlatform` <a name="cfn-codedeploy-application-computeplatform"></a>
The compute platform that CodeDeploy deploys the application to\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ECS | Lambda | Server`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-codedeploy-application-tags"></a>
The metadata that you apply to CodeDeploy applications to help you organize and categorize them\. Each tag consists of a key and an optional value, both of which you define\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-codedeploy-application-return-values"></a>

### Ref<a name="aws-resource-codedeploy-application-return-values-ref"></a>

When you pass the logical ID of an `AWS::CodeDeploy::Application` resource to the intrinsic `Ref` function, the function returns the application name, such as `myapplication-a123d0d1`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-codedeploy-application--examples"></a>

### Specify an application with a Lambda compute platform<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a__compute_platform"></a>

The following example specifies a CodeDeploy application with a Lambda compute platform\.

#### JSON<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a__compute_platform--json"></a>

```
"CodeDeployApplication": {
    "Type": "AWS::CodeDeploy::Application",
    "Properties": {
        "ComputePlatform": "Lambda"
    }
}
```

#### YAML<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a__compute_platform--yaml"></a>

```
CodeDeployApplication:
  Type: AWS::CodeDeploy::Application
  Properties:
    ComputePlatform: Lambda
```

### Specify an application with a Server compute platform<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a_Server_compute_platform"></a>

The following example creates a CodeDeploy application with a `Server` compute platform\.

#### JSON<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a_Server_compute_platform--json"></a>

```
"CodeDeployApplication": {
    "Type": "AWS::CodeDeploy::Application",
    "Properties": {
        "ComputePlatform": "Server"
    }
}
```

#### YAML<a name="aws-resource-codedeploy-application--examples--Specify_an_application_with_a_Server_compute_platform--yaml"></a>

```
CodeDeployApplication:
  Type: AWS::CodeDeploy::Application
  Properties:
    ComputePlatform: Server
```

## See also<a name="aws-resource-codedeploy-application--seealso"></a>

- For configuring your deployment and specifying your application revisions, see [ AWS::CodeDeploy::DeploymentConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html) and [ AWS::CodeDeploy::DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html)\.