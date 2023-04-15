# AWS::AppMesh::VirtualGateway VirtualGatewayTlsValidationContextTrust<a name="aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust"></a>

An object that represents a Transport Layer Security \(TLS\) validation context trust\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-syntax.json"></a>

```
{
  "[ACM](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-acm)" : VirtualGatewayTlsValidationContextAcmTrust,
  "[File](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-file)" : VirtualGatewayTlsValidationContextFileTrust,
  "[SDS](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-sds)" : VirtualGatewayTlsValidationContextSdsTrust
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-syntax.yaml"></a>

```
  [ACM](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-acm):
    VirtualGatewayTlsValidationContextAcmTrust
  [File](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-file):
    VirtualGatewayTlsValidationContextFileTrust
  [SDS](#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-sds):
    VirtualGatewayTlsValidationContextSdsTrust
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-properties"></a>

`ACM` <a name="cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-acm"></a>
A reference to an object that represents a Transport Layer Security \(TLS\) validation context trust for an AWS Certificate Manager certificate\.  
_Required_: No  
_Type_: [VirtualGatewayTlsValidationContextAcmTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`File` <a name="cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-file"></a>
An object that represents a Transport Layer Security \(TLS\) validation context trust for a local file\.  
_Required_: No  
_Type_: [VirtualGatewayTlsValidationContextFileTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SDS` <a name="cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-sds"></a>
A reference to an object that represents a virtual gateway's Transport Layer Security \(TLS\) Secret Discovery Service validation context trust\.  
_Required_: No  
_Type_: [VirtualGatewayTlsValidationContextSdsTrust](aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
