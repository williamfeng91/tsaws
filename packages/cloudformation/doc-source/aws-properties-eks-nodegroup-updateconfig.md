# AWS::EKS::Nodegroup UpdateConfig<a name="aws-properties-eks-nodegroup-updateconfig"></a>

The update configuration for the node group\.

## Syntax<a name="aws-properties-eks-nodegroup-updateconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-eks-nodegroup-updateconfig-syntax.json"></a>

```
{
  "[MaxUnavailable](#cfn-eks-nodegroup-updateconfig-maxunavailable)" : Double,
  "[MaxUnavailablePercentage](#cfn-eks-nodegroup-updateconfig-maxunavailablepercentage)" : Double
}
```

### YAML<a name="aws-properties-eks-nodegroup-updateconfig-syntax.yaml"></a>

```
  [MaxUnavailable](#cfn-eks-nodegroup-updateconfig-maxunavailable): Double
  [MaxUnavailablePercentage](#cfn-eks-nodegroup-updateconfig-maxunavailablepercentage): Double
```

## Properties<a name="aws-properties-eks-nodegroup-updateconfig-properties"></a>

`MaxUnavailable` <a name="cfn-eks-nodegroup-updateconfig-maxunavailable"></a>
The maximum number of nodes unavailable at once during a version update\. Nodes will be updated in parallel\. This value or `maxUnavailablePercentage` is required to have a value\.The maximum number is 100\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaxUnavailablePercentage` <a name="cfn-eks-nodegroup-updateconfig-maxunavailablepercentage"></a>
The maximum percentage of nodes unavailable during a version update\. This percentage of nodes will be updated in parallel, up to 100 nodes at once\. This value or `maxUnavailable` is required to have a value\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
