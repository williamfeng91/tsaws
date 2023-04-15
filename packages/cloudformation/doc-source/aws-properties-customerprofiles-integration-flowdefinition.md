# AWS::CustomerProfiles::Integration FlowDefinition<a name="aws-properties-customerprofiles-integration-flowdefinition"></a>

The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow\. Customer Profiles uses this information to create an AppFlow flow on behalf of customers\.

## Syntax<a name="aws-properties-customerprofiles-integration-flowdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-customerprofiles-integration-flowdefinition-syntax.json"></a>

```
{
  "[Description](#cfn-customerprofiles-integration-flowdefinition-description)" : String,
  "[FlowName](#cfn-customerprofiles-integration-flowdefinition-flowname)" : String,
  "[KmsArn](#cfn-customerprofiles-integration-flowdefinition-kmsarn)" : String,
  "[SourceFlowConfig](#cfn-customerprofiles-integration-flowdefinition-sourceflowconfig)" : SourceFlowConfig,
  "[Tasks](#cfn-customerprofiles-integration-flowdefinition-tasks)" : [ Task, ... ],
  "[TriggerConfig](#cfn-customerprofiles-integration-flowdefinition-triggerconfig)" : TriggerConfig
}
```

### YAML<a name="aws-properties-customerprofiles-integration-flowdefinition-syntax.yaml"></a>

```
  [Description](#cfn-customerprofiles-integration-flowdefinition-description): String
  [FlowName](#cfn-customerprofiles-integration-flowdefinition-flowname): String
  [KmsArn](#cfn-customerprofiles-integration-flowdefinition-kmsarn): String
  [SourceFlowConfig](#cfn-customerprofiles-integration-flowdefinition-sourceflowconfig):
    SourceFlowConfig
  [Tasks](#cfn-customerprofiles-integration-flowdefinition-tasks):
    - Task
  [TriggerConfig](#cfn-customerprofiles-integration-flowdefinition-triggerconfig):
    TriggerConfig
```

## Properties<a name="aws-properties-customerprofiles-integration-flowdefinition-properties"></a>

`Description` <a name="cfn-customerprofiles-integration-flowdefinition-description"></a>
A description of the flow you want to create\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `[\w!@#\-.?,\s]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FlowName` <a name="cfn-customerprofiles-integration-flowdefinition-flowname"></a>
The specified name of the flow\. Use underscores \(\_\) or hyphens \(\-\) only\. Spaces are not allowed\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9][\w!@#.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsArn` <a name="cfn-customerprofiles-integration-flowdefinition-kmsarn"></a>
The Amazon Resource Name \(ARN\) of the AWS Key Management Service \(KMS\) key you provide for encryption\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:aws:kms:.*:[0-9]+:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFlowConfig` <a name="cfn-customerprofiles-integration-flowdefinition-sourceflowconfig"></a>
The configuration that controls how Customer Profiles retrieves data from the source\.  
_Required_: Yes  
_Type_: [SourceFlowConfig](aws-properties-customerprofiles-integration-sourceflowconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tasks` <a name="cfn-customerprofiles-integration-flowdefinition-tasks"></a>
A list of tasks that Customer Profiles performs while transferring the data in the flow run\.  
_Required_: Yes  
_Type_: List of [Task](aws-properties-customerprofiles-integration-task.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TriggerConfig` <a name="cfn-customerprofiles-integration-flowdefinition-triggerconfig"></a>
The trigger settings that determine how and when the flow runs\.  
_Required_: Yes  
_Type_: [TriggerConfig](aws-properties-customerprofiles-integration-triggerconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
