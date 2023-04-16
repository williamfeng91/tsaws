# AWS::CodeDeploy::DeploymentGroup TagFilter<a name="aws-properties-codedeploy-deploymentgroup-tagfilter"></a>

`TagFilter` is a property type of the [AWS::CodeDeploy::DeploymentGroup ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource that specifies which on\-premises instances to associate with the deployment group\. To register on\-premise instances with AWS CodeDeploy, see [Configure Existing On\-Premises Instances by Using AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html) in the _AWS CodeDeploy User Guide_\.

For more information about using tags and tag groups to help manage your Amazon EC2 instances and on\-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the _AWS CodeDeploy User Guide_\.

## Syntax<a name="aws-properties-codedeploy-deploymentgroup-tagfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codedeploy-deploymentgroup-tagfilter-syntax.json"></a>

```
{
  "[Key](#cfn-codedeploy-deploymentgroup-tagfilter-key)" : String,
  "[Type](#cfn-codedeploy-deploymentgroup-tagfilter-type)" : String,
  "[Value](#cfn-codedeploy-deploymentgroup-tagfilter-value)" : String
}
```

### YAML<a name="aws-properties-codedeploy-deploymentgroup-tagfilter-syntax.yaml"></a>

```
  [Key](#cfn-codedeploy-deploymentgroup-tagfilter-key): String
  [Type](#cfn-codedeploy-deploymentgroup-tagfilter-type): String
  [Value](#cfn-codedeploy-deploymentgroup-tagfilter-value): String
```

## Properties<a name="aws-properties-codedeploy-deploymentgroup-tagfilter-properties"></a>

`Key` <a name="cfn-codedeploy-deploymentgroup-tagfilter-key"></a>
The on\-premises instance tag filter key\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-codedeploy-deploymentgroup-tagfilter-type"></a>
The on\-premises instance tag filter type:

- KEY_ONLY: Key only\.
- VALUE_ONLY: Value only\.
- KEY_AND_VALUE: Key and value\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `KEY_AND_VALUE | KEY_ONLY | VALUE_ONLY`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-codedeploy-deploymentgroup-tagfilter-value"></a>
The on\-premises instance tag filter value\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
