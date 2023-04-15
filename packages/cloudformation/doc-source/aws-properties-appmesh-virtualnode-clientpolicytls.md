# AWS::AppMesh::VirtualNode ClientPolicyTls<a name="aws-properties-appmesh-virtualnode-clientpolicytls"></a>

A reference to an object that represents a Transport Layer Security \(TLS\) client policy\.

## Syntax<a name="aws-properties-appmesh-virtualnode-clientpolicytls-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-clientpolicytls-syntax.json"></a>

```
{
  "[Certificate](#cfn-appmesh-virtualnode-clientpolicytls-certificate)" : ClientTlsCertificate,
  "[Enforce](#cfn-appmesh-virtualnode-clientpolicytls-enforce)" : Boolean,
  "[Ports](#cfn-appmesh-virtualnode-clientpolicytls-ports)" : [ Integer, ... ],
  "[Validation](#cfn-appmesh-virtualnode-clientpolicytls-validation)" : TlsValidationContext
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-clientpolicytls-syntax.yaml"></a>

```
  [Certificate](#cfn-appmesh-virtualnode-clientpolicytls-certificate):
    ClientTlsCertificate
  [Enforce](#cfn-appmesh-virtualnode-clientpolicytls-enforce): Boolean
  [Ports](#cfn-appmesh-virtualnode-clientpolicytls-ports):
    - Integer
  [Validation](#cfn-appmesh-virtualnode-clientpolicytls-validation):
    TlsValidationContext
```

## Properties<a name="aws-properties-appmesh-virtualnode-clientpolicytls-properties"></a>

`Certificate` <a name="cfn-appmesh-virtualnode-clientpolicytls-certificate"></a>
A reference to an object that represents a client's TLS certificate\.  
_Required_: No  
_Type_: [ClientTlsCertificate](aws-properties-appmesh-virtualnode-clienttlscertificate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enforce` <a name="cfn-appmesh-virtualnode-clientpolicytls-enforce"></a>
Whether the policy is enforced\. The default is `True`, if a value isn't specified\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ports` <a name="cfn-appmesh-virtualnode-clientpolicytls-ports"></a>
One or more ports that the policy is enforced for\.  
_Required_: No  
_Type_: List of Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Validation` <a name="cfn-appmesh-virtualnode-clientpolicytls-validation"></a>
A reference to an object that represents a TLS validation context\.  
_Required_: Yes  
_Type_: [TlsValidationContext](aws-properties-appmesh-virtualnode-tlsvalidationcontext.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
