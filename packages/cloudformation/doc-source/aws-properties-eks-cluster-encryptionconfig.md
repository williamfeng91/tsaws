# AWS::EKS::Cluster EncryptionConfig<a name="aws-properties-eks-cluster-encryptionconfig"></a>

The encryption configuration for the cluster\.

## Syntax<a name="aws-properties-eks-cluster-encryptionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-eks-cluster-encryptionconfig-syntax.json"></a>

```
{
  "[Provider](#cfn-eks-cluster-encryptionconfig-provider)" : Provider,
  "[Resources](#cfn-eks-cluster-encryptionconfig-resources)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-eks-cluster-encryptionconfig-syntax.yaml"></a>

```
  [Provider](#cfn-eks-cluster-encryptionconfig-provider):
    Provider
  [Resources](#cfn-eks-cluster-encryptionconfig-resources):
    - String
```

## Properties<a name="aws-properties-eks-cluster-encryptionconfig-properties"></a>

`Provider` <a name="cfn-eks-cluster-encryptionconfig-provider"></a>
The encryption provider for the cluster\.  
_Required_: No  
_Type_: [Provider](aws-properties-eks-cluster-provider.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Resources` <a name="cfn-eks-cluster-encryptionconfig-resources"></a>
Specifies the resources to be encrypted\. The only supported value is "secrets"\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
