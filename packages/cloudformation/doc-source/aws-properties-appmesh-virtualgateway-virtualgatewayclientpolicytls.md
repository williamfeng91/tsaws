# AWS::AppMesh::VirtualGateway VirtualGatewayClientPolicyTls<a name="aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls"></a>

An object that represents a Transport Layer Security \(TLS\) client policy\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls-syntax.json"></a>

```
{
  "[Certificate](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-certificate)" : VirtualGatewayClientTlsCertificate,
  "[Enforce](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-enforce)" : Boolean,
  "[Ports](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-ports)" : [ Integer, ... ],
  "[Validation](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-validation)" : VirtualGatewayTlsValidationContext
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls-syntax.yaml"></a>

```
  [Certificate](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-certificate):
    VirtualGatewayClientTlsCertificate
  [Enforce](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-enforce): Boolean
  [Ports](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-ports):
    - Integer
  [Validation](#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-validation):
    VirtualGatewayTlsValidationContext
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls-properties"></a>

`Certificate` <a name="cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-certificate"></a>
A reference to an object that represents a virtual gateway's client's Transport Layer Security \(TLS\) certificate\.  
_Required_: No  
_Type_: [VirtualGatewayClientTlsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enforce` <a name="cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-enforce"></a>
Whether the policy is enforced\. The default is `True`, if a value isn't specified\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ports` <a name="cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-ports"></a>
One or more ports that the policy is enforced for\.  
_Required_: No  
_Type_: List of Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Validation` <a name="cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-validation"></a>
A reference to an object that represents a Transport Layer Security \(TLS\) validation context\.  
_Required_: Yes  
_Type_: [VirtualGatewayTlsValidationContext](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
