# AWS::EC2::ClientVpnEndpoint ClientAuthenticationRequest<a name="aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest"></a>

Describes the authentication method to be used by a Client VPN endpoint\. For more information, see [Authentication](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication) in the _ AWS Client VPN Administrator Guide_\.

## Syntax<a name="aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest-syntax.json"></a>

```
{
  "[ActiveDirectory](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-activedirectory)" : DirectoryServiceAuthenticationRequest,
  "[FederatedAuthentication](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-federatedauthentication)" : FederatedAuthenticationRequest,
  "[MutualAuthentication](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-mutualauthentication)" : CertificateAuthenticationRequest,
  "[Type](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-type)" : String
}
```

### YAML<a name="aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest-syntax.yaml"></a>

```
  [ActiveDirectory](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-activedirectory):
    DirectoryServiceAuthenticationRequest
  [FederatedAuthentication](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-federatedauthentication):
    FederatedAuthenticationRequest
  [MutualAuthentication](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-mutualauthentication):
    CertificateAuthenticationRequest
  [Type](#cfn-ec2-clientvpnendpoint-clientauthenticationrequest-type): String
```

## Properties<a name="aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest-properties"></a>

`ActiveDirectory` <a name="cfn-ec2-clientvpnendpoint-clientauthenticationrequest-activedirectory"></a>
Information about the Active Directory to be used, if applicable\. You must provide this information if **Type** is `directory-service-authentication`\.  
_Required_: No  
_Type_: [DirectoryServiceAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-directoryserviceauthenticationrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FederatedAuthentication` <a name="cfn-ec2-clientvpnendpoint-clientauthenticationrequest-federatedauthentication"></a>
Information about the IAM SAML identity provider, if applicable\.  
_Required_: No  
_Type_: [FederatedAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MutualAuthentication` <a name="cfn-ec2-clientvpnendpoint-clientauthenticationrequest-mutualauthentication"></a>
Information about the authentication certificates to be used, if applicable\. You must provide this information if **Type** is `certificate-authentication`\.  
_Required_: No  
_Type_: [CertificateAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-certificateauthenticationrequest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-ec2-clientvpnendpoint-clientauthenticationrequest-type"></a>
The type of client authentication to be used\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `certificate-authentication | directory-service-authentication | federated-authentication`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
