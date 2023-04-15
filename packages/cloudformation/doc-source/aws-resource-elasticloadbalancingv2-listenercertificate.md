# AWS::ElasticLoadBalancingV2::ListenerCertificate<a name="aws-resource-elasticloadbalancingv2-listenercertificate"></a>

Specifies an SSL server certificate to add to the certificate list for an HTTPS or TLS listener\.

## Syntax<a name="aws-resource-elasticloadbalancingv2-listenercertificate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-elasticloadbalancingv2-listenercertificate-syntax.json"></a>

```
{
  "Type" : "AWS::ElasticLoadBalancingV2::ListenerCertificate",
  "Properties" : {
      "[Certificates](#cfn-elasticloadbalancingv2-listenercertificate-certificates)" : [ Certificate, ... ],
      "[ListenerArn](#cfn-elasticloadbalancingv2-listenercertificate-listenerarn)" : String
    }
}
```

### YAML<a name="aws-resource-elasticloadbalancingv2-listenercertificate-syntax.yaml"></a>

```
Type: AWS::ElasticLoadBalancingV2::ListenerCertificate
Properties:
  [Certificates](#cfn-elasticloadbalancingv2-listenercertificate-certificates):
    - Certificate
  [ListenerArn](#cfn-elasticloadbalancingv2-listenercertificate-listenerarn): String
```

## Properties<a name="aws-resource-elasticloadbalancingv2-listenercertificate-properties"></a>

`Certificates` <a name="cfn-elasticloadbalancingv2-listenercertificate-certificates"></a>
The certificate\. You can specify one certificate per resource\.  
_Required_: Yes  
_Type_: List of [Certificate](aws-properties-elasticloadbalancingv2-listener-certificates.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ListenerArn` <a name="cfn-elasticloadbalancingv2-listenercertificate-listenerarn"></a>
The Amazon Resource Name \(ARN\) of the listener\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## See also<a name="aws-resource-elasticloadbalancingv2-listenercertificate--seealso"></a>

- [AddListenerCertificates](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html) in the _Elastic Load Balancing API Reference \(version 2015\-12\-01\)_
- [SSL Certificates](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates) in the _User Guide for Application Load Balancers_
- [Server certificates](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificates) in the _User Guide for Network Load Balancers_
