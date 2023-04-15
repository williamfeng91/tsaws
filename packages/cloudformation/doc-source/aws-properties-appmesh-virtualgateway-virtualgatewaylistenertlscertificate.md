# AWS::AppMesh::VirtualGateway VirtualGatewayListenerTlsCertificate<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate"></a>

An object that represents a listener's Transport Layer Security \(TLS\) certificate\.

## Syntax<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-syntax.json"></a>

```
{
  "[ACM](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-acm)" : VirtualGatewayListenerTlsAcmCertificate,
  "[File](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-file)" : VirtualGatewayListenerTlsFileCertificate,
  "[SDS](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-sds)" : VirtualGatewayListenerTlsSdsCertificate
}
```

### YAML<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-syntax.yaml"></a>

```
  [ACM](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-acm):
    VirtualGatewayListenerTlsAcmCertificate
  [File](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-file):
    VirtualGatewayListenerTlsFileCertificate
  [SDS](#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-sds):
    VirtualGatewayListenerTlsSdsCertificate
```

## Properties<a name="aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-properties"></a>

`ACM` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-acm"></a>
A reference to an object that represents an AWS Certificate Manager certificate\.  
_Required_: No  
_Type_: [VirtualGatewayListenerTlsAcmCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`File` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-file"></a>
A reference to an object that represents a local file certificate\.  
_Required_: No  
_Type_: [VirtualGatewayListenerTlsFileCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SDS` <a name="cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-sds"></a>
A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate\.  
_Required_: No  
_Type_: [VirtualGatewayListenerTlsSdsCertificate](aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
