# AWS::IoT::Logging<a name="aws-resource-iot-logging"></a>

Configure logging\.

## Syntax<a name="aws-resource-iot-logging-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iot-logging-syntax.json"></a>

```
{
  "Type" : "AWS::IoT::Logging",
  "Properties" : {
      "[AccountId](#cfn-iot-logging-accountid)" : String,
      "[DefaultLogLevel](#cfn-iot-logging-defaultloglevel)" : String,
      "[RoleArn](#cfn-iot-logging-rolearn)" : String
    }
}
```

### YAML<a name="aws-resource-iot-logging-syntax.yaml"></a>

```
Type: AWS::IoT::Logging
Properties:
  [AccountId](#cfn-iot-logging-accountid): String
  [DefaultLogLevel](#cfn-iot-logging-defaultloglevel): String
  [RoleArn](#cfn-iot-logging-rolearn): String
```

## Properties<a name="aws-resource-iot-logging-properties"></a>

`AccountId` <a name="cfn-iot-logging-accountid"></a>
The account ID\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DefaultLogLevel` <a name="cfn-iot-logging-defaultloglevel"></a>
The default log level\. Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-iot-logging-rolearn"></a>
The role ARN used for the log\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iot-logging-return-values"></a>

### Ref<a name="aws-resource-iot-logging-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the log ID\. For example:

`{"Ref": "Log-12345"}`
