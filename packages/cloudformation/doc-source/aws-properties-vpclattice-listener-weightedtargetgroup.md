# AWS::VpcLattice::Listener WeightedTargetGroup<a name="aws-properties-vpclattice-listener-weightedtargetgroup"></a>

Describes the weight of a target group\.

## Syntax<a name="aws-properties-vpclattice-listener-weightedtargetgroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-vpclattice-listener-weightedtargetgroup-syntax.json"></a>

```
{
  "[TargetGroupIdentifier](#cfn-vpclattice-listener-weightedtargetgroup-targetgroupidentifier)" : String,
  "[Weight](#cfn-vpclattice-listener-weightedtargetgroup-weight)" : Integer
}
```

### YAML<a name="aws-properties-vpclattice-listener-weightedtargetgroup-syntax.yaml"></a>

```
  [TargetGroupIdentifier](#cfn-vpclattice-listener-weightedtargetgroup-targetgroupidentifier): String
  [Weight](#cfn-vpclattice-listener-weightedtargetgroup-weight): Integer
```

## Properties<a name="aws-properties-vpclattice-listener-weightedtargetgroup-properties"></a>

`TargetGroupIdentifier` <a name="cfn-vpclattice-listener-weightedtargetgroup-targetgroupidentifier"></a>
The ID of the target group\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Weight` <a name="cfn-vpclattice-listener-weightedtargetgroup-weight"></a>
Only required if you specify multiple target groups for a forward action\. The "weight" determines how requests are distributed to the target group\. For example, if you specify two target groups, each with a weight of 10, each target group receives half the requests\. If you specify two target groups, one with a weight of 10 and the other with a weight of 20, the target group with a weight of 20 receives twice as many requests as the other target group\. If there's only one target group specified, then the default value is 100\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
