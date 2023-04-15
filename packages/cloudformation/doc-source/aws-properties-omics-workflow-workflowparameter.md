# AWS::Omics::Workflow WorkflowParameter<a name="aws-properties-omics-workflow-workflowparameter"></a>

A workflow parameter\.

## Syntax<a name="aws-properties-omics-workflow-workflowparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-omics-workflow-workflowparameter-syntax.json"></a>

```
{
  "[Description](#cfn-omics-workflow-workflowparameter-description)" : String,
  "[Optional](#cfn-omics-workflow-workflowparameter-optional)" : Boolean
}
```

### YAML<a name="aws-properties-omics-workflow-workflowparameter-syntax.yaml"></a>

```
  [Description](#cfn-omics-workflow-workflowparameter-description): String
  [Optional](#cfn-omics-workflow-workflowparameter-optional): Boolean
```

## Properties<a name="aws-properties-omics-workflow-workflowparameter-properties"></a>

`Description` <a name="cfn-omics-workflow-workflowparameter-description"></a>
The parameter's description\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Optional` <a name="cfn-omics-workflow-workflowparameter-optional"></a>
Whether the parameter is optional\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
