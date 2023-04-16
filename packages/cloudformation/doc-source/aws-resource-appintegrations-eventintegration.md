# AWS::AppIntegrations::EventIntegration<a name="aws-resource-appintegrations-eventintegration"></a>

Creates an event integration\. You provide a name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that will push events to that bus\. No objects are created in your account, only metadata that is persisted on the EventIntegration control plane\.

## Syntax<a name="aws-resource-appintegrations-eventintegration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-appintegrations-eventintegration-syntax.json"></a>

```
{
  "Type" : "AWS::AppIntegrations::EventIntegration",
  "Properties" : {
      "[Description](#cfn-appintegrations-eventintegration-description)" : String,
      "[EventBridgeBus](#cfn-appintegrations-eventintegration-eventbridgebus)" : String,
      "[EventFilter](#cfn-appintegrations-eventintegration-eventfilter)" : EventFilter,
      "[Name](#cfn-appintegrations-eventintegration-name)" : String,
      "[Tags](#cfn-appintegrations-eventintegration-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-appintegrations-eventintegration-syntax.yaml"></a>

```
Type: AWS::AppIntegrations::EventIntegration
Properties:
  [Description](#cfn-appintegrations-eventintegration-description): String
  [EventBridgeBus](#cfn-appintegrations-eventintegration-eventbridgebus): String
  [EventFilter](#cfn-appintegrations-eventintegration-eventfilter):
    EventFilter
  [Name](#cfn-appintegrations-eventintegration-name): String
  [Tags](#cfn-appintegrations-eventintegration-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-appintegrations-eventintegration-properties"></a>

`Description` <a name="cfn-appintegrations-eventintegration-description"></a>
The event integration description\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EventBridgeBus` <a name="cfn-appintegrations-eventintegration-eventbridgebus"></a>
The Amazon EventBridge bus for the event integration\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EventFilter` <a name="cfn-appintegrations-eventintegration-eventfilter"></a>
The event integration filter\.  
_Required_: Yes  
_Type_: [EventFilter](aws-properties-appintegrations-eventintegration-eventfilter.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-appintegrations-eventintegration-name"></a>
The name of the event integration\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-appintegrations-eventintegration-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-appintegrations-eventintegration-return-values"></a>

### Ref<a name="aws-resource-appintegrations-eventintegration-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the EventIntegration name\. For example:

`{ "Ref": "myEventIntegrationName" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-appintegrations-eventintegration-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-appintegrations-eventintegration-return-values-fn--getatt-fn--getatt"></a>

`EventIntegrationArn` <a name="EventIntegrationArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the event integration\.
