# AWS::Cognito::IdentityPool PushSync<a name="aws-properties-cognito-identitypool-pushsync"></a>

`PushSync` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that defines the configuration options to be applied to an Amazon Cognito identity pool\.

## Syntax<a name="aws-properties-cognito-identitypool-pushsync-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-identitypool-pushsync-syntax.json"></a>

```
{
  "[ApplicationArns](#cfn-cognito-identitypool-pushsync-applicationarns)" : [ String, ... ],
  "[RoleArn](#cfn-cognito-identitypool-pushsync-rolearn)" : String
}
```

### YAML<a name="aws-properties-cognito-identitypool-pushsync-syntax.yaml"></a>

```
  [ApplicationArns](#cfn-cognito-identitypool-pushsync-applicationarns):
    - String
  [RoleArn](#cfn-cognito-identitypool-pushsync-rolearn): String
```

## Properties<a name="aws-properties-cognito-identitypool-pushsync-properties"></a>

`ApplicationArns` <a name="cfn-cognito-identitypool-pushsync-applicationarns"></a>
The ARNs of the Amazon SNS platform applications that could be used by clients\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-cognito-identitypool-pushsync-rolearn"></a>
An IAM role configured to allow Amazon Cognito to call Amazon SNS on behalf of the developer\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
