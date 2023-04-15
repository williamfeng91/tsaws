# AWS::CustomerProfiles::Integration Task<a name="aws-properties-customerprofiles-integration-task"></a>

The `Task` property type specifies the class for modeling different type of tasks\. Task implementation varies based on the TaskType\.

## Syntax<a name="aws-properties-customerprofiles-integration-task-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-customerprofiles-integration-task-syntax.json"></a>

```
{
  "[ConnectorOperator](#cfn-customerprofiles-integration-task-connectoroperator)" : ConnectorOperator,
  "[DestinationField](#cfn-customerprofiles-integration-task-destinationfield)" : String,
  "[SourceFields](#cfn-customerprofiles-integration-task-sourcefields)" : [ String, ... ],
  "[TaskProperties](#cfn-customerprofiles-integration-task-taskproperties)" : [ TaskPropertiesMap, ... ],
  "[TaskType](#cfn-customerprofiles-integration-task-tasktype)" : String
}
```

### YAML<a name="aws-properties-customerprofiles-integration-task-syntax.yaml"></a>

```
  [ConnectorOperator](#cfn-customerprofiles-integration-task-connectoroperator):
    ConnectorOperator
  [DestinationField](#cfn-customerprofiles-integration-task-destinationfield): String
  [SourceFields](#cfn-customerprofiles-integration-task-sourcefields):
    - String
  [TaskProperties](#cfn-customerprofiles-integration-task-taskproperties):
    - TaskPropertiesMap
  [TaskType](#cfn-customerprofiles-integration-task-tasktype): String
```

## Properties<a name="aws-properties-customerprofiles-integration-task-properties"></a>

`ConnectorOperator` <a name="cfn-customerprofiles-integration-task-connectoroperator"></a>
The operation to be performed on the provided source fields\.  
_Required_: No  
_Type_: [ConnectorOperator](aws-properties-customerprofiles-integration-connectoroperator.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationField` <a name="cfn-customerprofiles-integration-task-destinationfield"></a>
A field in a destination connector, or a field value against which Amazon AppFlow validates a source field\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFields` <a name="cfn-customerprofiles-integration-task-sourcefields"></a>
The source fields to which a particular task is applied\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskProperties` <a name="cfn-customerprofiles-integration-task-taskproperties"></a>
A map used to store task\-related information\. The service looks for particular information based on the TaskType\.  
_Required_: No  
_Type_: List of [TaskPropertiesMap](aws-properties-customerprofiles-integration-taskpropertiesmap.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskType` <a name="cfn-customerprofiles-integration-task-tasktype"></a>
Specifies the particular task implementation that Amazon AppFlow performs\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Arithmetic | Filter | Map | Mask | Merge | Truncate | Validate`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
