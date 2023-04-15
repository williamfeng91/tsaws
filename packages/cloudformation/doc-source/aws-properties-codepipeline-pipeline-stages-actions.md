# AWS::CodePipeline::Pipeline ActionDeclaration<a name="aws-properties-codepipeline-pipeline-stages-actions"></a>

Represents information about an action declaration\.

## Syntax<a name="aws-properties-codepipeline-pipeline-stages-actions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codepipeline-pipeline-stages-actions-syntax.json"></a>

```
{
  "[ActionTypeId](#cfn-codepipeline-pipeline-stages-actions-actiontypeid)" : ActionTypeId,
  "[Configuration](#cfn-codepipeline-pipeline-stages-actions-configuration)" : Json,
  "[InputArtifacts](#cfn-codepipeline-pipeline-stages-actions-inputartifacts)" : [ InputArtifact, ... ],
  "[Name](#cfn-codepipeline-pipeline-stages-actions-name)" : String,
  "[Namespace](#cfn-codepipeline-pipeline-actiondeclaration-namespace)" : String,
  "[OutputArtifacts](#cfn-codepipeline-pipeline-stages-actions-outputartifacts)" : [ OutputArtifact, ... ],
  "[Region](#cfn-codepipeline-pipeline-stages-actions-region)" : String,
  "[RoleArn](#cfn-codepipeline-pipeline-stages-actions-rolearn)" : String,
  "[RunOrder](#cfn-codepipeline-pipeline-stages-actions-runorder)" : Integer
}
```

### YAML<a name="aws-properties-codepipeline-pipeline-stages-actions-syntax.yaml"></a>

```
  [ActionTypeId](#cfn-codepipeline-pipeline-stages-actions-actiontypeid):
    ActionTypeId
  [Configuration](#cfn-codepipeline-pipeline-stages-actions-configuration): Json
  [InputArtifacts](#cfn-codepipeline-pipeline-stages-actions-inputartifacts):
    - InputArtifact
  [Name](#cfn-codepipeline-pipeline-stages-actions-name): String
  [Namespace](#cfn-codepipeline-pipeline-actiondeclaration-namespace): String
  [OutputArtifacts](#cfn-codepipeline-pipeline-stages-actions-outputartifacts):
    - OutputArtifact
  [Region](#cfn-codepipeline-pipeline-stages-actions-region): String
  [RoleArn](#cfn-codepipeline-pipeline-stages-actions-rolearn): String
  [RunOrder](#cfn-codepipeline-pipeline-stages-actions-runorder): Integer
```

## Properties<a name="aws-properties-codepipeline-pipeline-stages-actions-properties"></a>

`ActionTypeId` <a name="cfn-codepipeline-pipeline-stages-actions-actiontypeid"></a>
Specifies the action type and the provider of the action\.  
_Required_: Yes  
_Type_: [ActionTypeId](aws-properties-codepipeline-pipeline-stages-actions-actiontypeid.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Configuration` <a name="cfn-codepipeline-pipeline-stages-actions-configuration"></a>
The action's configuration\. These are key\-value pairs that specify input values for an action\. For more information, see [Action Structure Requirements in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements)\. For the list of configuration properties for the AWS CloudFormation action type in CodePipeline, see [Configuration Properties Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html) in the _ AWS CloudFormation User Guide_\. For template snippets with examples, see [Using Parameter Override Functions with CodePipeline Pipelines](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html) in the _ AWS CloudFormation User Guide_\.  
The values can be represented in either JSON or YAML format\. For example, the JSON configuration item format is as follows:  
 _JSON:_  
 `"Configuration" : { Key : Value },`  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputArtifacts` <a name="cfn-codepipeline-pipeline-stages-actions-inputartifacts"></a>
The name or ID of the artifact consumed by the action, such as a test or build artifact\. While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of input artifacts\. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the _AWS CodePipeline User Guide_\.  
For a CodeBuild action with multiple input artifacts, one of your input sources must be designated the PrimarySource\. For more information, see the [CodeBuild action reference page](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-CodeBuild.html) in the _AWS CodePipeline User Guide_\.
_Required_: No  
_Type_: List of [InputArtifact](aws-properties-codepipeline-pipeline-stages-actions-inputartifacts.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-codepipeline-pipeline-stages-actions-name"></a>
The action declaration's name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `[A-Za-z0-9.@\-_]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Namespace` <a name="cfn-codepipeline-pipeline-actiondeclaration-namespace"></a>
The variable namespace associated with the action\. All variables produced as output by this action fall under this namespace\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `[A-Za-z0-9@\-_]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutputArtifacts` <a name="cfn-codepipeline-pipeline-stages-actions-outputartifacts"></a>
The name or ID of the result of the action declaration, such as a test or build artifact\. While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of output artifacts\. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the _AWS CodePipeline User Guide_\.  
_Required_: No  
_Type_: List of [OutputArtifact](aws-properties-codepipeline-pipeline-stages-actions-outputartifacts.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Region` <a name="cfn-codepipeline-pipeline-stages-actions-region"></a>
The action declaration's AWS Region, such as us\-east\-1\.  
_Required_: No  
_Type_: String  
_Minimum_: `4`  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-codepipeline-pipeline-stages-actions-rolearn"></a>
The ARN of the IAM service role that performs the declared action\. This is assumed through the roleArn for the pipeline\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RunOrder` <a name="cfn-codepipeline-pipeline-stages-actions-runorder"></a>
The order in which actions are run\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `999`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)