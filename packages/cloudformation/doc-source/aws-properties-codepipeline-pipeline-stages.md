# AWS::CodePipeline::Pipeline StageDeclaration<a name="aws-properties-codepipeline-pipeline-stages"></a>

Represents information about a stage and its definition\.

## Syntax<a name="aws-properties-codepipeline-pipeline-stages-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codepipeline-pipeline-stages-syntax.json"></a>

```
{
  "[Actions](#cfn-codepipeline-pipeline-stages-actions)" : [ ActionDeclaration, ... ],
  "[Blockers](#cfn-codepipeline-pipeline-stages-blockers)" : [ BlockerDeclaration, ... ],
  "[Name](#cfn-codepipeline-pipeline-stages-name)" : String
}
```

### YAML<a name="aws-properties-codepipeline-pipeline-stages-syntax.yaml"></a>

```
  [Actions](#cfn-codepipeline-pipeline-stages-actions):
    - ActionDeclaration
  [Blockers](#cfn-codepipeline-pipeline-stages-blockers):
    - BlockerDeclaration
  [Name](#cfn-codepipeline-pipeline-stages-name): String
```

## Properties<a name="aws-properties-codepipeline-pipeline-stages-properties"></a>

`Actions` <a name="cfn-codepipeline-pipeline-stages-actions"></a>
The actions included in a stage\.  
_Required_: Yes  
_Type_: List of [ActionDeclaration](aws-properties-codepipeline-pipeline-stages-actions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Blockers` <a name="cfn-codepipeline-pipeline-stages-blockers"></a>
Reserved for future use\.  
_Required_: No  
_Type_: List of [BlockerDeclaration](aws-properties-codepipeline-pipeline-stages-blockers.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-codepipeline-pipeline-stages-name"></a>
The name of the stage\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `[A-Za-z0-9.@\-_]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
