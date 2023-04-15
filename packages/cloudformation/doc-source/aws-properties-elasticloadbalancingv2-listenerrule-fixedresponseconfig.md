# AWS::ElasticLoadBalancingV2::ListenerRule FixedResponseConfig<a name="aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig"></a>

Specifies information required when returning a custom HTTP response\.

## Syntax<a name="aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig-syntax.json"></a>

```
{
  "[ContentType](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-contenttype)" : String,
  "[MessageBody](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-messagebody)" : String,
  "[StatusCode](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-statuscode)" : String
}
```

### YAML<a name="aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig-syntax.yaml"></a>

```
  [ContentType](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-contenttype): String
  [MessageBody](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-messagebody): String
  [StatusCode](#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-statuscode): String
```

## Properties<a name="aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig-properties"></a>

`ContentType` <a name="cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-contenttype"></a>
The content type\.  
Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `32`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MessageBody` <a name="cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-messagebody"></a>
The message\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StatusCode` <a name="cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-statuscode"></a>
The HTTP response code \(2XX, 4XX, or 5XX\)\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `^(2|4|5)\d\d$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
