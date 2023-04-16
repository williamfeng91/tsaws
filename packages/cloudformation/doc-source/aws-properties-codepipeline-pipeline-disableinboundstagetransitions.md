# AWS::CodePipeline::Pipeline StageTransition<a name="aws-properties-codepipeline-pipeline-disableinboundstagetransitions"></a>

The name of the pipeline in which you want to disable the flow of artifacts from one stage to another\.

## Syntax<a name="aws-properties-codepipeline-pipeline-disableinboundstagetransitions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codepipeline-pipeline-disableinboundstagetransitions-syntax.json"></a>

```
{
  "[Reason](#cfn-codepipeline-pipeline-disableinboundstagetransitions-reason)" : String,
  "[StageName](#cfn-codepipeline-pipeline-disableinboundstagetransitions-stagename)" : String
}
```

### YAML<a name="aws-properties-codepipeline-pipeline-disableinboundstagetransitions-syntax.yaml"></a>

```
  [Reason](#cfn-codepipeline-pipeline-disableinboundstagetransitions-reason): String
  [StageName](#cfn-codepipeline-pipeline-disableinboundstagetransitions-stagename): String
```

## Properties<a name="aws-properties-codepipeline-pipeline-disableinboundstagetransitions-properties"></a>

`Reason` <a name="cfn-codepipeline-pipeline-disableinboundstagetransitions-reason"></a>
The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests\. This message is displayed in the pipeline console UI\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Pattern_: `[a-zA-Z0-9!@ \(\)\.\*\?\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StageName` <a name="cfn-codepipeline-pipeline-disableinboundstagetransitions-stagename"></a>
The name of the stage where you want to disable the inbound or outbound transition of artifacts\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `[A-Za-z0-9.@\-_]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
