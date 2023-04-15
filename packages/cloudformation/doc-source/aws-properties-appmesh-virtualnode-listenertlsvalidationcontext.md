# AWS::AppMesh::VirtualNode ListenerTlsValidationContext<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontext"></a>

An object that represents a listener's Transport Layer Security \(TLS\) validation context\.

## Syntax<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontext-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontext-syntax.json"></a>

```
{
  "[SubjectAlternativeNames](#cfn-appmesh-virtualnode-listenertlsvalidationcontext-subjectalternativenames)" : SubjectAlternativeNames,
  "[Trust](#cfn-appmesh-virtualnode-listenertlsvalidationcontext-trust)" : ListenerTlsValidationContextTrust
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontext-syntax.yaml"></a>

```
  [SubjectAlternativeNames](#cfn-appmesh-virtualnode-listenertlsvalidationcontext-subjectalternativenames):
    SubjectAlternativeNames
  [Trust](#cfn-appmesh-virtualnode-listenertlsvalidationcontext-trust):
    ListenerTlsValidationContextTrust
```

## Properties<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontext-properties"></a>

`SubjectAlternativeNames` <a name="cfn-appmesh-virtualnode-listenertlsvalidationcontext-subjectalternativenames"></a>
A reference to an object that represents the SANs for a listener's Transport Layer Security \(TLS\) validation context\.  
_Required_: No  
_Type_: [SubjectAlternativeNames](aws-properties-appmesh-virtualnode-subjectalternativenames.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Trust` <a name="cfn-appmesh-virtualnode-listenertlsvalidationcontext-trust"></a>
A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security \(TLS\) certificate\.  
_Required_: Yes  
_Type_: [ListenerTlsValidationContextTrust](aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
