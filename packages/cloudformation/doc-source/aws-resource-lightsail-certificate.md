# AWS::Lightsail::Certificate<a name="aws-resource-lightsail-certificate"></a>

The `AWS::Lightsail::Certificate` resource specifies an SSL/TLS certificate that you can use with a content delivery network \(CDN\) distribution and a container service\.

**Note**  
For information about certificates that you can use with a load balancer, see [AWS::Lightsail::LoadBalancerTlsCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html)\.

## Syntax<a name="aws-resource-lightsail-certificate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-lightsail-certificate-syntax.json"></a>

```
{
  "Type" : "AWS::Lightsail::Certificate",
  "Properties" : {
      "[CertificateName](#cfn-lightsail-certificate-certificatename)" : String,
      "[DomainName](#cfn-lightsail-certificate-domainname)" : String,
      "[SubjectAlternativeNames](#cfn-lightsail-certificate-subjectalternativenames)" : [ String, ... ],
      "[Tags](#cfn-lightsail-certificate-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-lightsail-certificate-syntax.yaml"></a>

```
Type: AWS::Lightsail::Certificate
Properties:
  [CertificateName](#cfn-lightsail-certificate-certificatename): String
  [DomainName](#cfn-lightsail-certificate-domainname): String
  [SubjectAlternativeNames](#cfn-lightsail-certificate-subjectalternativenames):
    - String
  [Tags](#cfn-lightsail-certificate-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-lightsail-certificate-properties"></a>

`CertificateName` <a name="cfn-lightsail-certificate-certificatename"></a>
The name of the certificate\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DomainName` <a name="cfn-lightsail-certificate-domainname"></a>
The domain name of the certificate\.  
_Required_: Yes  
_Type_: String  
_Update requires_: Updates are not supported\.

`SubjectAlternativeNames` <a name="cfn-lightsail-certificate-subjectalternativenames"></a>
An array of strings that specify the alternate domains \(such as `example.org`\) and subdomains \(such as `blog.example.com`\) of the certificate\.  
_Required_: No  
_Type_: List of String  
_Update requires_: Updates are not supported\.

`Tags` <a name="cfn-lightsail-certificate-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_\.  
The `Value` of `Tags` is optional for Lightsail resources\.
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-lightsail-certificate-return-values"></a>

### Ref<a name="aws-resource-lightsail-certificate-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns a unique identifier for this resource\.

### Fn::GetAtt<a name="aws-resource-lightsail-certificate-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-lightsail-certificate-return-values-fn--getatt-fn--getatt"></a>

`CertificateArn` <a name="CertificateArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the certificate\.

`Status` <a name="Status-fn::getatt"></a>
The validation status of the certificate\.
