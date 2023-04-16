# AWS::CloudFront::ContinuousDeploymentPolicy TrafficConfig<a name="aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig"></a>

The traffic configuration of your continuous deployment\.

## Syntax<a name="aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig-syntax.json"></a>

```
{
  "[SingleHeaderConfig](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleheaderconfig)" : SingleHeaderConfig,
  "[SingleWeightConfig](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleweightconfig)" : SingleWeightConfig,
  "[Type](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-type)" : String
}
```

### YAML<a name="aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig-syntax.yaml"></a>

```
  [SingleHeaderConfig](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleheaderconfig):
    SingleHeaderConfig
  [SingleWeightConfig](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleweightconfig):
    SingleWeightConfig
  [Type](#cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-type): String
```

## Properties<a name="aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig-properties"></a>

`SingleHeaderConfig` <a name="cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleheaderconfig"></a>
Determines which HTTP requests are sent to the staging distribution\.  
_Required_: No  
_Type_: [SingleHeaderConfig](aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SingleWeightConfig` <a name="cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-singleweightconfig"></a>
Contains the percentage of traffic to send to the staging distribution\.  
_Required_: No  
_Type_: [SingleWeightConfig](aws-properties-cloudfront-continuousdeploymentpolicy-singleweightconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-cloudfront-continuousdeploymentpolicy-trafficconfig-type"></a>
The type of traffic configuration\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `SingleHeader | SingleWeight`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
