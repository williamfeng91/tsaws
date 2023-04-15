# AWS::KafkaConnect::Connector CustomPlugin<a name="aws-properties-kafkaconnect-connector-customplugin"></a>

A plugin is an AWS resource that contains the code that defines a connector's logic\.

## Syntax<a name="aws-properties-kafkaconnect-connector-customplugin-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kafkaconnect-connector-customplugin-syntax.json"></a>

```
{
  "[CustomPluginArn](#cfn-kafkaconnect-connector-customplugin-custompluginarn)" : String,
  "[Revision](#cfn-kafkaconnect-connector-customplugin-revision)" : Integer
}
```

### YAML<a name="aws-properties-kafkaconnect-connector-customplugin-syntax.yaml"></a>

```
  [CustomPluginArn](#cfn-kafkaconnect-connector-customplugin-custompluginarn): String
  [Revision](#cfn-kafkaconnect-connector-customplugin-revision): Integer
```

## Properties<a name="aws-properties-kafkaconnect-connector-customplugin-properties"></a>

`CustomPluginArn` <a name="cfn-kafkaconnect-connector-customplugin-custompluginarn"></a>
The Amazon Resource Name \(ARN\) of the custom plugin\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Revision` <a name="cfn-kafkaconnect-connector-customplugin-revision"></a>
The revision of the custom plugin\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
