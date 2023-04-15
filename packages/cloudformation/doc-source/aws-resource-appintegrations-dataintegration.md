# AWS::AppIntegrations::DataIntegration<a name="aws-resource-appintegrations-dataintegration"></a>

Creates and persists a DataIntegration resource\.

## Syntax<a name="aws-resource-appintegrations-dataintegration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-appintegrations-dataintegration-syntax.json"></a>

```
{
  "Type" : "AWS::AppIntegrations::DataIntegration",
  "Properties" : {
      "[Description](#cfn-appintegrations-dataintegration-description)" : String,
      "[KmsKey](#cfn-appintegrations-dataintegration-kmskey)" : String,
      "[Name](#cfn-appintegrations-dataintegration-name)" : String,
      "[ScheduleConfig](#cfn-appintegrations-dataintegration-scheduleconfig)" : ScheduleConfig,
      "[SourceURI](#cfn-appintegrations-dataintegration-sourceuri)" : String,
      "[Tags](#cfn-appintegrations-dataintegration-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-appintegrations-dataintegration-syntax.yaml"></a>

```
Type: AWS::AppIntegrations::DataIntegration
Properties:
  [Description](#cfn-appintegrations-dataintegration-description): String
  [KmsKey](#cfn-appintegrations-dataintegration-kmskey): String
  [Name](#cfn-appintegrations-dataintegration-name): String
  [ScheduleConfig](#cfn-appintegrations-dataintegration-scheduleconfig):
    ScheduleConfig
  [SourceURI](#cfn-appintegrations-dataintegration-sourceuri): String
  [Tags](#cfn-appintegrations-dataintegration-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-appintegrations-dataintegration-properties"></a>

`Description` <a name="cfn-appintegrations-dataintegration-description"></a>
A description of the DataIntegration\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKey` <a name="cfn-appintegrations-dataintegration-kmskey"></a>
The KMS key for the DataIntegration\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-appintegrations-dataintegration-name"></a>
The name of the DataIntegration\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleConfig` <a name="cfn-appintegrations-dataintegration-scheduleconfig"></a>
The name of the data and how often it should be pulled from the source\.  
_Required_: Yes  
_Type_: [ScheduleConfig](aws-properties-appintegrations-dataintegration-scheduleconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SourceURI` <a name="cfn-appintegrations-dataintegration-sourceuri"></a>
The URI of the data source\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-appintegrations-dataintegration-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-appintegrations-dataintegration-return-values"></a>

### Ref<a name="aws-resource-appintegrations-dataintegration-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the DataIntegration name\. For example:

`{ "Ref": "myDataIntegrationName" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-appintegrations-dataintegration-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-appintegrations-dataintegration-return-values-fn--getatt-fn--getatt"></a>

`DataIntegrationArn` <a name="DataIntegrationArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) for the DataIntegration\.

`Id` <a name="Id-fn::getatt"></a>
A unique identifier\.
