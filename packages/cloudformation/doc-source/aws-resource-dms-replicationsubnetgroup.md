# AWS::DMS::ReplicationSubnetGroup<a name="aws-resource-dms-replicationsubnetgroup"></a>

The `AWS::DMS::ReplicationSubnetGroup` resource creates an AWS DMS replication subnet group\. Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region\.

**Note**  
Resource creation fails if the `dms-vpc-role` AWS Identity and Access Management \(IAM\) role doesn't already exist\. For more information, see [ Creating the IAM Roles to Use With the AWS CLI and AWS DMS API](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.APIRole.html) in the _AWS Database Migration Service User Guide_\.

## Syntax<a name="aws-resource-dms-replicationsubnetgroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-dms-replicationsubnetgroup-syntax.json"></a>

```
{
  "Type" : "AWS::DMS::ReplicationSubnetGroup",
  "Properties" : {
      "[ReplicationSubnetGroupDescription](#cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription)" : String,
      "[ReplicationSubnetGroupIdentifier](#cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier)" : String,
      "[SubnetIds](#cfn-dms-replicationsubnetgroup-subnetids)" : [ String, ... ],
      "[Tags](#cfn-dms-replicationsubnetgroup-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-dms-replicationsubnetgroup-syntax.yaml"></a>

```
Type: AWS::DMS::ReplicationSubnetGroup
Properties:
  [ReplicationSubnetGroupDescription](#cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription): String
  [ReplicationSubnetGroupIdentifier](#cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier): String
  [SubnetIds](#cfn-dms-replicationsubnetgroup-subnetids):
    - String
  [Tags](#cfn-dms-replicationsubnetgroup-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-dms-replicationsubnetgroup-properties"></a>

`ReplicationSubnetGroupDescription` <a name="cfn-dms-replicationsubnetgroup-replicationsubnetgroupdescription"></a>
The description for the subnet group\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReplicationSubnetGroupIdentifier` <a name="cfn-dms-replicationsubnetgroup-replicationsubnetgroupidentifier"></a>
The identifier for the replication subnet group\. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the identifier\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SubnetIds` <a name="cfn-dms-replicationsubnetgroup-subnetids"></a>
One or more subnet IDs to be assigned to the subnet group\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-dms-replicationsubnetgroup-tags"></a>
One or more tags to be assigned to the subnet group\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-dms-replicationsubnetgroup-return-values"></a>

### Ref<a name="aws-resource-dms-replicationsubnetgroup-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the name of the replication subnet group, such as `mystack-myrepsubnetgroup-0a12bc456789de0fg`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-dms-replicationsubnetgroup--examples"></a>

### <a name="aws-resource-dms-replicationsubnetgroup--examples--"></a>

#### JSON<a name="aws-resource-dms-replicationsubnetgroup--examples----json"></a>

```
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Resources": {
        "myReplicationSubnetGroup": {
            "Type": "AWS::DMS::ReplicationSubnetGroup",
            "Properties": {
                "ReplicationSubnetGroupIdentifier": "identifier",
                "ReplicationSubnetGroupDescription": "description",
                "SubnetIds": [
                    "subnet-7b5b4112",
                    "subnet-7b5b4115"
                ],
                "Tags": [
                    {
                        "Key": "String",
                        "Value": "String"
                    }
                ]
            }
        }
    }
}
```

#### YAML<a name="aws-resource-dms-replicationsubnetgroup--examples----yaml"></a>

```
AWSTemplateFormatVersion: 2010-09-09
Resources:
  myReplicationSubnetGroup:
    Properties:
      ReplicationSubnetGroupDescription: description
      ReplicationSubnetGroupIdentifier: identifier
      SubnetIds:
        - subnet-7b5b4112
        - subnet-7b5b4115
      Tags:
        -
          Key: String
          Value: String
    Type: "AWS::DMS::ReplicationSubnetGroup"
```

## See also<a name="aws-resource-dms-replicationsubnetgroup--seealso"></a>

- [ CreateReplicationSubnetGroup](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html) in the _AWS Database Migration Service API Reference_
- [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html)
