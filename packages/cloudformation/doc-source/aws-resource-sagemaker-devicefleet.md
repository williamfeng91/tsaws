# AWS::SageMaker::DeviceFleet<a name="aws-resource-sagemaker-devicefleet"></a>

The `AWS::SageMaker::DeviceFleet` resource is an Amazon SageMaker resource type that allows you to create a DeviceFleet that manages your SageMaker Edge Manager Devices\. You must register your devices against the `DeviceFleet` separately\.

## Syntax<a name="aws-resource-sagemaker-devicefleet-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-sagemaker-devicefleet-syntax.json"></a>

```
{
  "Type" : "AWS::SageMaker::DeviceFleet",
  "Properties" : {
      "[Description](#cfn-sagemaker-devicefleet-description)" : String,
      "[DeviceFleetName](#cfn-sagemaker-devicefleet-devicefleetname)" : String,
      "[OutputConfig](#cfn-sagemaker-devicefleet-outputconfig)" : EdgeOutputConfig,
      "[RoleArn](#cfn-sagemaker-devicefleet-rolearn)" : String,
      "[Tags](#cfn-sagemaker-devicefleet-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-sagemaker-devicefleet-syntax.yaml"></a>

```
Type: AWS::SageMaker::DeviceFleet
Properties:
  [Description](#cfn-sagemaker-devicefleet-description): String
  [DeviceFleetName](#cfn-sagemaker-devicefleet-devicefleetname): String
  [OutputConfig](#cfn-sagemaker-devicefleet-outputconfig):
    EdgeOutputConfig
  [RoleArn](#cfn-sagemaker-devicefleet-rolearn): String
  [Tags](#cfn-sagemaker-devicefleet-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-sagemaker-devicefleet-properties"></a>

`Description` <a name="cfn-sagemaker-devicefleet-description"></a>
A description of the fleet\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceFleetName` <a name="cfn-sagemaker-devicefleet-devicefleetname"></a>
Name of the device fleet\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`OutputConfig` <a name="cfn-sagemaker-devicefleet-outputconfig"></a>
The output configuration for storing sample data collected by the fleet\.  
_Required_: Yes  
_Type_: [EdgeOutputConfig](aws-properties-sagemaker-devicefleet-edgeoutputconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-sagemaker-devicefleet-rolearn"></a>
The Amazon Resource Name \(ARN\) that has access to AWS Internet of Things \(IoT\)\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-sagemaker-devicefleet-tags"></a>
An array of key\-value pairs that contain metadata to help you categorize and organize your device fleets\. Each tag consists of a key and a value, both of which you define\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-sagemaker-devicefleet-return-values"></a>

### Ref<a name="aws-resource-sagemaker-devicefleet-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the DeviceFleetName\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
