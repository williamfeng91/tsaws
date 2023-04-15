# AWS::MSK::Cluster OpenMonitoring<a name="aws-properties-msk-cluster-openmonitoring"></a>

JMX and Node monitoring for the MSK cluster\.

## Syntax<a name="aws-properties-msk-cluster-openmonitoring-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-msk-cluster-openmonitoring-syntax.json"></a>

```
{
  "[Prometheus](#cfn-msk-cluster-openmonitoring-prometheus)" : Prometheus
}
```

### YAML<a name="aws-properties-msk-cluster-openmonitoring-syntax.yaml"></a>

```
  [Prometheus](#cfn-msk-cluster-openmonitoring-prometheus):
    Prometheus
```

## Properties<a name="aws-properties-msk-cluster-openmonitoring-properties"></a>

`Prometheus` <a name="cfn-msk-cluster-openmonitoring-prometheus"></a>
Prometheus exporter settings\.  
_Required_: Yes  
_Type_: [Prometheus](aws-properties-msk-cluster-prometheus.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
