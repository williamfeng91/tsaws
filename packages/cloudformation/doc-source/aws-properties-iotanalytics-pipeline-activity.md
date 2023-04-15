# AWS::IoTAnalytics::Pipeline Activity<a name="aws-properties-iotanalytics-pipeline-activity"></a>

An activity that performs a transformation on a message\.

## Syntax<a name="aws-properties-iotanalytics-pipeline-activity-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-pipeline-activity-syntax.json"></a>

```
{
  "[AddAttributes](#cfn-iotanalytics-pipeline-activity-addattributes)" : AddAttributes,
  "[Channel](#cfn-iotanalytics-pipeline-activity-channel)" : Channel,
  "[Datastore](#cfn-iotanalytics-pipeline-activity-datastore)" : Datastore,
  "[DeviceRegistryEnrich](#cfn-iotanalytics-pipeline-activity-deviceregistryenrich)" : DeviceRegistryEnrich,
  "[DeviceShadowEnrich](#cfn-iotanalytics-pipeline-activity-deviceshadowenrich)" : DeviceShadowEnrich,
  "[Filter](#cfn-iotanalytics-pipeline-activity-filter)" : Filter,
  "[Lambda](#cfn-iotanalytics-pipeline-activity-lambda)" : Lambda,
  "[Math](#cfn-iotanalytics-pipeline-activity-math)" : Math,
  "[RemoveAttributes](#cfn-iotanalytics-pipeline-activity-removeattributes)" : RemoveAttributes,
  "[SelectAttributes](#cfn-iotanalytics-pipeline-activity-selectattributes)" : SelectAttributes
}
```

### YAML<a name="aws-properties-iotanalytics-pipeline-activity-syntax.yaml"></a>

```
  [AddAttributes](#cfn-iotanalytics-pipeline-activity-addattributes):
    AddAttributes
  [Channel](#cfn-iotanalytics-pipeline-activity-channel):
    Channel
  [Datastore](#cfn-iotanalytics-pipeline-activity-datastore):
    Datastore
  [DeviceRegistryEnrich](#cfn-iotanalytics-pipeline-activity-deviceregistryenrich):
    DeviceRegistryEnrich
  [DeviceShadowEnrich](#cfn-iotanalytics-pipeline-activity-deviceshadowenrich):
    DeviceShadowEnrich
  [Filter](#cfn-iotanalytics-pipeline-activity-filter):
    Filter
  [Lambda](#cfn-iotanalytics-pipeline-activity-lambda):
    Lambda
  [Math](#cfn-iotanalytics-pipeline-activity-math):
    Math
  [RemoveAttributes](#cfn-iotanalytics-pipeline-activity-removeattributes):
    RemoveAttributes
  [SelectAttributes](#cfn-iotanalytics-pipeline-activity-selectattributes):
    SelectAttributes
```

## Properties<a name="aws-properties-iotanalytics-pipeline-activity-properties"></a>

`AddAttributes` <a name="cfn-iotanalytics-pipeline-activity-addattributes"></a>
Adds other attributes based on existing attributes in the message\.  
_Required_: No  
_Type_: [AddAttributes](aws-properties-iotanalytics-pipeline-addattributes.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Channel` <a name="cfn-iotanalytics-pipeline-activity-channel"></a>
Determines the source of the messages to be processed\.  
_Required_: No  
_Type_: [Channel](aws-properties-iotanalytics-pipeline-channel.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Datastore` <a name="cfn-iotanalytics-pipeline-activity-datastore"></a>
Specifies where to store the processed message data\.  
_Required_: No  
_Type_: [Datastore](aws-properties-iotanalytics-pipeline-datastore.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceRegistryEnrich` <a name="cfn-iotanalytics-pipeline-activity-deviceregistryenrich"></a>
Adds data from the AWS IoT device registry to your message\.  
_Required_: No  
_Type_: [DeviceRegistryEnrich](aws-properties-iotanalytics-pipeline-deviceregistryenrich.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceShadowEnrich` <a name="cfn-iotanalytics-pipeline-activity-deviceshadowenrich"></a>
Adds information from the AWS IoT Device Shadows service to a message\.  
_Required_: No  
_Type_: [DeviceShadowEnrich](aws-properties-iotanalytics-pipeline-deviceshadowenrich.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Filter` <a name="cfn-iotanalytics-pipeline-activity-filter"></a>
Filters a message based on its attributes\.  
_Required_: No  
_Type_: [Filter](aws-properties-iotanalytics-pipeline-filter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Lambda` <a name="cfn-iotanalytics-pipeline-activity-lambda"></a>
Runs a Lambda function to modify the message\.  
_Required_: No  
_Type_: [Lambda](aws-properties-iotanalytics-pipeline-lambda.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Math` <a name="cfn-iotanalytics-pipeline-activity-math"></a>
Computes an arithmetic expression using the message's attributes and adds it to the message\.  
_Required_: No  
_Type_: [Math](aws-properties-iotanalytics-pipeline-math.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RemoveAttributes` <a name="cfn-iotanalytics-pipeline-activity-removeattributes"></a>
Removes attributes from a message\.  
_Required_: No  
_Type_: [RemoveAttributes](aws-properties-iotanalytics-pipeline-removeattributes.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAttributes` <a name="cfn-iotanalytics-pipeline-activity-selectattributes"></a>
Creates a new message using only the specified attributes from the original message\.  
_Required_: No  
_Type_: [SelectAttributes](aws-properties-iotanalytics-pipeline-selectattributes.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
