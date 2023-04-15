# AWS::FIS::ExperimentTemplate ExperimentTemplateStopCondition<a name="aws-properties-fis-experimenttemplate-experimenttemplatestopcondition"></a>

Specifies a stop condition for an experiment template\.

For more information, see [Stop conditions](https://docs.aws.amazon.com/fis/latest/userguide/stop-conditions.html) in the _AWS Fault Injection Simulator User Guide_\.

## Syntax<a name="aws-properties-fis-experimenttemplate-experimenttemplatestopcondition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-fis-experimenttemplate-experimenttemplatestopcondition-syntax.json"></a>

```
{
  "[Source](#cfn-fis-experimenttemplate-experimenttemplatestopcondition-source)" : String,
  "[Value](#cfn-fis-experimenttemplate-experimenttemplatestopcondition-value)" : String
}
```

### YAML<a name="aws-properties-fis-experimenttemplate-experimenttemplatestopcondition-syntax.yaml"></a>

```
  [Source](#cfn-fis-experimenttemplate-experimenttemplatestopcondition-source): String
  [Value](#cfn-fis-experimenttemplate-experimenttemplatestopcondition-value): String
```

## Properties<a name="aws-properties-fis-experimenttemplate-experimenttemplatestopcondition-properties"></a>

`Source` <a name="cfn-fis-experimenttemplate-experimenttemplatestopcondition-source"></a>
The source for the stop condition\. Specify `aws:cloudwatch:alarm` if the stop condition is defined by a CloudWatch alarm\. Specify `none` if there is no stop condition\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `64`  
_Pattern_: `[\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-fis-experimenttemplate-experimenttemplatestopcondition-value"></a>
The Amazon Resource Name \(ARN\) of the CloudWatch alarm\. This is required if the source is a CloudWatch alarm\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `[\s\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
