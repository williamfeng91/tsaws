# AWS::EC2::NetworkInsightsAccessScope AccessScopePathRequest<a name="aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest"></a>

Describes a path\.

## Syntax<a name="aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest-syntax.json"></a>

```
{
  "[Destination](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-destination)" : PathStatementRequest,
  "[Source](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-source)" : PathStatementRequest,
  "[ThroughResources](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-throughresources)" : [ ThroughResourcesStatementRequest, ... ]
}
```

### YAML<a name="aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest-syntax.yaml"></a>

```
  [Destination](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-destination):
    PathStatementRequest
  [Source](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-source):
    PathStatementRequest
  [ThroughResources](#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-throughresources):
    - ThroughResourcesStatementRequest
```

## Properties<a name="aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest-properties"></a>

`Destination` <a name="cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-destination"></a>
The destination\.  
_Required_: No  
_Type_: [PathStatementRequest](aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Source` <a name="cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-source"></a>
The source\.  
_Required_: No  
_Type_: [PathStatementRequest](aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ThroughResources` <a name="cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-throughresources"></a>
The through resources\.  
_Required_: No  
_Type_: List of [ThroughResourcesStatementRequest](aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
