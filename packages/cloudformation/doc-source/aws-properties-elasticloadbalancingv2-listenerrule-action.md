# AWS::ElasticLoadBalancingV2::ListenerRule Action<a name="aws-properties-elasticloadbalancingv2-listenerrule-action"></a>

Specifies an action for a listener rule\.

## Syntax<a name="aws-properties-elasticloadbalancingv2-listenerrule-action-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticloadbalancingv2-listenerrule-action-syntax.json"></a>

```
{
  "[AuthenticateCognitoConfig](#cfn-elasticloadbalancingv2-listenerrule-action-authenticatecognitoconfig)" : AuthenticateCognitoConfig,
  "[AuthenticateOidcConfig](#cfn-elasticloadbalancingv2-listenerrule-action-authenticateoidcconfig)" : AuthenticateOidcConfig,
  "[FixedResponseConfig](#cfn-elasticloadbalancingv2-listenerrule-action-fixedresponseconfig)" : FixedResponseConfig,
  "[ForwardConfig](#cfn-elasticloadbalancingv2-listenerrule-action-forwardconfig)" : ForwardConfig,
  "[Order](#cfn-elasticloadbalancingv2-listenerrule-action-order)" : Integer,
  "[RedirectConfig](#cfn-elasticloadbalancingv2-listenerrule-action-redirectconfig)" : RedirectConfig,
  "[TargetGroupArn](#cfn-elasticloadbalancingv2-listenerrule-action-targetgrouparn)" : String,
  "[Type](#cfn-elasticloadbalancingv2-listenerrule-action-type)" : String
}
```

### YAML<a name="aws-properties-elasticloadbalancingv2-listenerrule-action-syntax.yaml"></a>

```
  [AuthenticateCognitoConfig](#cfn-elasticloadbalancingv2-listenerrule-action-authenticatecognitoconfig):
    AuthenticateCognitoConfig
  [AuthenticateOidcConfig](#cfn-elasticloadbalancingv2-listenerrule-action-authenticateoidcconfig):
    AuthenticateOidcConfig
  [FixedResponseConfig](#cfn-elasticloadbalancingv2-listenerrule-action-fixedresponseconfig):
    FixedResponseConfig
  [ForwardConfig](#cfn-elasticloadbalancingv2-listenerrule-action-forwardconfig):
    ForwardConfig
  [Order](#cfn-elasticloadbalancingv2-listenerrule-action-order): Integer
  [RedirectConfig](#cfn-elasticloadbalancingv2-listenerrule-action-redirectconfig):
    RedirectConfig
  [TargetGroupArn](#cfn-elasticloadbalancingv2-listenerrule-action-targetgrouparn): String
  [Type](#cfn-elasticloadbalancingv2-listenerrule-action-type): String
```

## Properties<a name="aws-properties-elasticloadbalancingv2-listenerrule-action-properties"></a>

`AuthenticateCognitoConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-action-authenticatecognitoconfig"></a>
\[HTTPS listeners\] Information for using Amazon Cognito to authenticate users\. Specify only when `Type` is `authenticate-cognito`\.  
_Required_: No  
_Type_: [AuthenticateCognitoConfig](aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AuthenticateOidcConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-action-authenticateoidcconfig"></a>
\[HTTPS listeners\] Information about an identity provider that is compliant with OpenID Connect \(OIDC\)\. Specify only when `Type` is `authenticate-oidc`\.  
_Required_: No  
_Type_: [AuthenticateOidcConfig](aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FixedResponseConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-action-fixedresponseconfig"></a>
\[Application Load Balancer\] Information for creating an action that returns a custom HTTP response\. Specify only when `Type` is `fixed-response`\.  
_Required_: No  
_Type_: [FixedResponseConfig](aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ForwardConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-action-forwardconfig"></a>
Information for creating an action that distributes requests among one or more target groups\. For Network Load Balancers, you can specify a single target group\. Specify only when `Type` is `forward`\. If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`\.  
_Required_: No  
_Type_: [ForwardConfig](aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Order` <a name="cfn-elasticloadbalancingv2-listenerrule-action-order"></a>
The order for the action\. This value is required for rules with multiple actions\. The action with the lowest value for order is performed first\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RedirectConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-action-redirectconfig"></a>
\[Application Load Balancer\] Information for creating a redirect action\. Specify only when `Type` is `redirect`\.  
_Required_: No  
_Type_: [RedirectConfig](aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetGroupArn` <a name="cfn-elasticloadbalancingv2-listenerrule-action-targetgrouparn"></a>
The Amazon Resource Name \(ARN\) of the target group\. Specify only when `Type` is `forward` and you want to route to a single target group\. To route to one or more target groups, use `ForwardConfig` instead\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-elasticloadbalancingv2-listenerrule-action-type"></a>
The type of action\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `authenticate-cognito | authenticate-oidc | fixed-response | forward | redirect`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
