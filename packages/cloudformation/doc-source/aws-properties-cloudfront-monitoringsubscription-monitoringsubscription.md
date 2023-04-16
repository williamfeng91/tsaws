# AWS::CloudFront::MonitoringSubscription MonitoringSubscription<a name="aws-properties-cloudfront-monitoringsubscription-monitoringsubscription"></a>

A monitoring subscription\. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution\.

## Syntax<a name="aws-properties-cloudfront-monitoringsubscription-monitoringsubscription-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-monitoringsubscription-monitoringsubscription-syntax.json"></a>

```
{
  "[RealtimeMetricsSubscriptionConfig](#cfn-cloudfront-monitoringsubscription-monitoringsubscription-realtimemetricssubscriptionconfig)" : RealtimeMetricsSubscriptionConfig
}
```

### YAML<a name="aws-properties-cloudfront-monitoringsubscription-monitoringsubscription-syntax.yaml"></a>

```
  [RealtimeMetricsSubscriptionConfig](#cfn-cloudfront-monitoringsubscription-monitoringsubscription-realtimemetricssubscriptionconfig):
    RealtimeMetricsSubscriptionConfig
```

## Properties<a name="aws-properties-cloudfront-monitoringsubscription-monitoringsubscription-properties"></a>

`RealtimeMetricsSubscriptionConfig` <a name="cfn-cloudfront-monitoringsubscription-monitoringsubscription-realtimemetricssubscriptionconfig"></a>
A subscription configuration for additional CloudWatch metrics\.  
_Required_: No  
_Type_: [RealtimeMetricsSubscriptionConfig](aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
