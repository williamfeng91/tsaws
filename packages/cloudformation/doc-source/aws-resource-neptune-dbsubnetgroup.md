# AWS::Neptune::DBSubnetGroup<a name="aws-resource-neptune-dbsubnetgroup"></a>

The `AWS::Neptune::DBSubnetGroup` type creates an Amazon Neptune DB subnet group\. Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region\.

## Syntax<a name="aws-resource-neptune-dbsubnetgroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-neptune-dbsubnetgroup-syntax.json"></a>

```
{
  "Type" : "AWS::Neptune::DBSubnetGroup",
  "Properties" : {
      "[DBSubnetGroupDescription](#cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription)" : String,
      "[DBSubnetGroupName](#cfn-neptune-dbsubnetgroup-dbsubnetgroupname)" : String,
      "[SubnetIds](#cfn-neptune-dbsubnetgroup-subnetids)" : [ String, ... ],
      "[Tags](#cfn-neptune-dbsubnetgroup-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-neptune-dbsubnetgroup-syntax.yaml"></a>

```
Type: AWS::Neptune::DBSubnetGroup
Properties:
  [DBSubnetGroupDescription](#cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription): String
  [DBSubnetGroupName](#cfn-neptune-dbsubnetgroup-dbsubnetgroupname): String
  [SubnetIds](#cfn-neptune-dbsubnetgroup-subnetids):
    - String
  [Tags](#cfn-neptune-dbsubnetgroup-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-neptune-dbsubnetgroup-properties"></a>

`DBSubnetGroupDescription` <a name="cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription"></a>
Provides the description of the DB subnet group\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DBSubnetGroupName` <a name="cfn-neptune-dbsubnetgroup-dbsubnetgroupname"></a>
The name of the DB subnet group\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SubnetIds` <a name="cfn-neptune-dbsubnetgroup-subnetids"></a>
The Amazon EC2 subnet IDs for the DB subnet group\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-neptune-dbsubnetgroup-tags"></a>
The tags that you want to attach to the DB subnet group\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-neptune-dbsubnetgroup-return-values"></a>

### Ref<a name="aws-resource-neptune-dbsubnetgroup-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource name\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
