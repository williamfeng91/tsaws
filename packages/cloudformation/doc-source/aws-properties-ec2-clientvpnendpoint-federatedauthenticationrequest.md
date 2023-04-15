# AWS::EC2::ClientVpnEndpoint FederatedAuthenticationRequest<a name="aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest"></a>

The IAM SAML identity provider used for federated authentication\.

## Syntax<a name="aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest-syntax.json"></a>

```
{
  "[SAMLProviderArn](#cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-samlproviderarn)" : String,
  "[SelfServiceSAMLProviderArn](#cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-selfservicesamlproviderarn)" : String
}
```

### YAML<a name="aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest-syntax.yaml"></a>

```
  [SAMLProviderArn](#cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-samlproviderarn): String
  [SelfServiceSAMLProviderArn](#cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-selfservicesamlproviderarn): String
```

## Properties<a name="aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest-properties"></a>

`SAMLProviderArn` <a name="cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-samlproviderarn"></a>
The Amazon Resource Name \(ARN\) of the IAM SAML identity provider\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelfServiceSAMLProviderArn` <a name="cfn-ec2-clientvpnendpoint-federatedauthenticationrequest-selfservicesamlproviderarn"></a>
The Amazon Resource Name \(ARN\) of the IAM SAML identity provider for the self\-service portal\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
