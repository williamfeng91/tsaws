# AWS::IoT::ResourceSpecificLogging<a name="aws-resource-iot-resourcespecificlogging"></a>

Configure resource\-specific logging\.

## Syntax<a name="aws-resource-iot-resourcespecificlogging-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iot-resourcespecificlogging-syntax.json"></a>

```
{
  "Type" : "AWS::IoT::ResourceSpecificLogging",
  "Properties" : {
      "[LogLevel](#cfn-iot-resourcespecificlogging-loglevel)" : String,
      "[TargetName](#cfn-iot-resourcespecificlogging-targetname)" : String,
      "[TargetType](#cfn-iot-resourcespecificlogging-targettype)" : String
    }
}
```

### YAML<a name="aws-resource-iot-resourcespecificlogging-syntax.yaml"></a>

```
Type: AWS::IoT::ResourceSpecificLogging
Properties:
  [LogLevel](#cfn-iot-resourcespecificlogging-loglevel): String
  [TargetName](#cfn-iot-resourcespecificlogging-targetname): String
  [TargetType](#cfn-iot-resourcespecificlogging-targettype): String
```

## Properties<a name="aws-resource-iot-resourcespecificlogging-properties"></a>

`LogLevel` <a name="cfn-iot-resourcespecificlogging-loglevel"></a>
The default log level\.Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetName` <a name="cfn-iot-resourcespecificlogging-targetname"></a>
The target name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TargetType` <a name="cfn-iot-resourcespecificlogging-targettype"></a>
The target type\. Valid Values: `DEFAULT | THING_GROUP`  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-iot-resourcespecificlogging-return-values"></a>

### Ref<a name="aws-resource-iot-resourcespecificlogging-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource\-specific log ID\. For example:

`{"Ref": "MyResourceLog-12345" }`

### Fn::GetAtt<a name="aws-resource-iot-resourcespecificlogging-return-values-fn--getatt"></a>

#### <a name="aws-resource-iot-resourcespecificlogging-return-values-fn--getatt-fn--getatt"></a>

`TargetId` <a name="TargetId-fn::getatt"></a>
The target Id\.
