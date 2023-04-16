# AWS::ElasticLoadBalancingV2::ListenerCertificate Certificate<a name="aws-properties-elasticloadbalancingv2-listener-certificates"></a>

Specifies an SSL server certificate for the certificate list of a secure listener\.

## Syntax<a name="aws-properties-elasticloadbalancingv2-listener-certificates-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticloadbalancingv2-listener-certificates-syntax.json"></a>

```
{
  "[CertificateArn](#cfn-elasticloadbalancingv2-listener-certificates-certificatearn)" : String
}
```

### YAML<a name="aws-properties-elasticloadbalancingv2-listener-certificates-syntax.yaml"></a>

```
  [CertificateArn](#cfn-elasticloadbalancingv2-listener-certificates-certificatearn): String
```

## Properties<a name="aws-properties-elasticloadbalancingv2-listener-certificates-properties"></a>

`CertificateArn` <a name="cfn-elasticloadbalancingv2-listener-certificates-certificatearn"></a>
The Amazon Resource Name \(ARN\) of the certificate\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
