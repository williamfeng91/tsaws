# AWS::AppMesh::VirtualNode TlsValidationContextTrust<a name="aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust"></a>

An object that represents a Transport Layer Security \(TLS\) validation context trust\.

## Syntax<a name="aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust-syntax.json"></a>

```
{
  "[ACM](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-acm)" : TlsValidationContextAcmTrust,
  "[File](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-file)" : TlsValidationContextFileTrust,
  "[SDS](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-sds)" : TlsValidationContextSdsTrust
}
```

### YAML<a name="aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust-syntax.yaml"></a>

```
  [ACM](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-acm):
    TlsValidationContextAcmTrust
  [File](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-file):
    TlsValidationContextFileTrust
  [SDS](#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-sds):
    TlsValidationContextSdsTrust
```

## Properties<a name="aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust-properties"></a>

`ACM` <a name="cfn-appmesh-virtualnode-tlsvalidationcontexttrust-acm"></a>
A reference to an object that represents a Transport Layer Security \(TLS\) validation context trust for an AWS Certificate Manager certificate\.  
_Required_: No  
_Type_: [TlsValidationContextAcmTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`File` <a name="cfn-appmesh-virtualnode-tlsvalidationcontexttrust-file"></a>
An object that represents a Transport Layer Security \(TLS\) validation context trust for a local file\.  
_Required_: No  
_Type_: [TlsValidationContextFileTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SDS` <a name="cfn-appmesh-virtualnode-tlsvalidationcontexttrust-sds"></a>
A reference to an object that represents a Transport Layer Security \(TLS\) Secret Discovery Service validation context trust\.  
_Required_: No  
_Type_: [TlsValidationContextSdsTrust](aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
