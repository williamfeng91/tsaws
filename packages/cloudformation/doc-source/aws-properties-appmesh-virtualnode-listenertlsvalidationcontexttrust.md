# AWS::AppMesh::VirtualNode ListenerTlsValidationContextTrust<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust"></a>

An object that represents a listener's Transport Layer Security \(TLS\) validation context trust\.

## Syntax<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust-syntax.json"></a>

```
{
  "[File](#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-file)" : TlsValidationContextFileTrust,
  "[SDS](#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-sds)" : TlsValidationContextSdsTrust
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust-syntax.yaml"></a>

```
  [File](#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-file):
    TlsValidationContextFileTrust
  [SDS](#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-sds):
    TlsValidationContextSdsTrust
```

## Properties<a name="aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust-properties"></a>

`File` <a name="cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-file"></a>
An object that represents a Transport Layer Security \(TLS\) validation context trust for a local file\.  
_Required_: No  
_Type_: [TlsValidationContextFileTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SDS` <a name="cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-sds"></a>
A reference to an object that represents a listener's Transport Layer Security \(TLS\) Secret Discovery Service validation context trust\.  
_Required_: No  
_Type_: [TlsValidationContextSdsTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
