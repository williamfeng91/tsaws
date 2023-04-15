# AWS::Cognito::UserPoolDomain CustomDomainConfigType<a name="aws-properties-cognito-userpooldomain-customdomainconfigtype"></a>

The configuration for a custom domain that hosts the sign\-up and sign\-in webpages for your application\.

## Syntax<a name="aws-properties-cognito-userpooldomain-customdomainconfigtype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpooldomain-customdomainconfigtype-syntax.json"></a>

```
{
  "[CertificateArn](#cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn)" : String
}
```

### YAML<a name="aws-properties-cognito-userpooldomain-customdomainconfigtype-syntax.yaml"></a>

```
  [CertificateArn](#cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn): String
```

## Properties<a name="aws-properties-cognito-userpooldomain-customdomainconfigtype-properties"></a>

`CertificateArn` <a name="cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn"></a>
The Amazon Resource Name \(ARN\) of an AWS Certificate Manager SSL certificate\. You use this certificate for the subdomain of your custom domain\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
