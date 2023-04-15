# AWS::IVS::RecordingConfiguration<a name="aws-resource-ivs-recordingconfiguration"></a>

The `AWS::IVS::RecordingConfiguration` resource specifies an Amazon IVS recording configuration\. A recording configuration enables the recording of a channel’s live streams to a data store\. Multiple channels can reference the same recording configuration\. For more information, see [RecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_RecordingConfiguration.html) in the _Amazon Interactive Video Service API Reference_\.

## Syntax<a name="aws-resource-ivs-recordingconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ivs-recordingconfiguration-syntax.json"></a>

```
{
  "Type" : "AWS::IVS::RecordingConfiguration",
  "Properties" : {
      "[DestinationConfiguration](#cfn-ivs-recordingconfiguration-destinationconfiguration)" : DestinationConfiguration,
      "[Name](#cfn-ivs-recordingconfiguration-name)" : String,
      "[RecordingReconnectWindowSeconds](#cfn-ivs-recordingconfiguration-recordingreconnectwindowseconds)" : Integer,
      "[Tags](#cfn-ivs-recordingconfiguration-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[ThumbnailConfiguration](#cfn-ivs-recordingconfiguration-thumbnailconfiguration)" : ThumbnailConfiguration
    }
}
```

### YAML<a name="aws-resource-ivs-recordingconfiguration-syntax.yaml"></a>

```
Type: AWS::IVS::RecordingConfiguration
Properties:
  [DestinationConfiguration](#cfn-ivs-recordingconfiguration-destinationconfiguration):
    DestinationConfiguration
  [Name](#cfn-ivs-recordingconfiguration-name): String
  [RecordingReconnectWindowSeconds](#cfn-ivs-recordingconfiguration-recordingreconnectwindowseconds): Integer
  [Tags](#cfn-ivs-recordingconfiguration-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [ThumbnailConfiguration](#cfn-ivs-recordingconfiguration-thumbnailconfiguration):
    ThumbnailConfiguration
```

## Properties<a name="aws-resource-ivs-recordingconfiguration-properties"></a>

`DestinationConfiguration` <a name="cfn-ivs-recordingconfiguration-destinationconfiguration"></a>
A destination configuration contains information about where recorded video will be stored\. See the [ DestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html) property type for more information\.  
_Required_: Yes  
_Type_: [DestinationConfiguration](aws-properties-ivs-recordingconfiguration-destinationconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-ivs-recordingconfiguration-name"></a>
Recording\-configuration name\. The value does not need to be unique\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `128`  
_Pattern_: `^[a-zA-Z0-9-_]*$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RecordingReconnectWindowSeconds` <a name="cfn-ivs-recordingconfiguration-recordingreconnectwindowseconds"></a>
If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together\.  
_Default_: `0`  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `300`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-ivs-recordingconfiguration-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThumbnailConfiguration` <a name="cfn-ivs-recordingconfiguration-thumbnailconfiguration"></a>
A thumbnail configuration enables/disables the recording of thumbnails for a live session and controls the interval at which thumbnails are generated for the live session\. See the [ThumbnailConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thunbnailconfiguration.html) property type for more information\.  
_Required_: No  
_Type_: [ThumbnailConfiguration](aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-ivs-recordingconfiguration-return-values"></a>

### Ref<a name="aws-resource-ivs-recordingconfiguration-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the recording\-configuration ARN\. For example:

`{ "Ref": "myRecordingConfiguration" }`

For the Amazon IVS recording configuration `myRecordingConfiguration`, `Ref` returns the recording\-configuration ARN\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-ivs-recordingconfiguration-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-ivs-recordingconfiguration-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The recording configuration ARN\. For example: `arn:aws:ivs:us-west-2:123456789012:recording-configuration/abcdABCDefgh`

`State` <a name="State-fn::getatt"></a>
Indicates the current state of the recording configuration\. When the state is `ACTIVE`, the configuration is ready to record a channel stream\. Valid values: `CREATING` \| `CREATE_FAILED` \| `ACTIVE`\.

## Examples<a name="aws-resource-ivs-recordingconfiguration--examples"></a>

### Recording Configuration Template Examples<a name="aws-resource-ivs-recordingconfiguration--examples--Recording_Configuration_Template_Examples"></a>

The following examples specify an Amazon IVS Channel that records live\-channel streams to an S3 bucket\.

#### JSON<a name="aws-resource-ivs-recordingconfiguration--examples--Recording_Configuration_Template_Examples--json"></a>

```
{
  "Resources": {
    "S3Bucket": {
      "Type": "AWS::S3::Bucket"
    },
    "RecordingConfiguration": {
      "Type": "AWS::IVS::RecordingConfiguration",
      "DependsOn": "S3Bucket",
      "Properties": {
        "Name": “MyRecordingConfiguration”,
        "DestinationConfiguration": {
          "S3": {
            "BucketName": {
              "Ref": "S3Bucket"
            }
          }
        },
        "ThumbnailConfiguration": {
          "RecordingMode": "INTERVAL",
          "TargetIntervalSeconds": 60
        }
      }
    },
    "Channel": {
      "Type": "AWS::IVS::Channel",
      "DependsOn": "RecordingConfiguration",
      "Properties": {
        "Name": "MyRecordedChannel",
        "RecordingConfigurationArn": {
          "Ref": "RecordingConfiguration"
        }
      }
    }
  }
}
```

#### YAML<a name="aws-resource-ivs-recordingconfiguration--examples--Recording_Configuration_Template_Examples--yaml"></a>

```
Resources:
 S3Bucket:
   Type: AWS::S3::Bucket

 RecordingConfiguration:
   Type: AWS::IVS::RecordingConfiguration
   DependsOn: S3Bucket
   Properties:
     Name: MyRecordingConfiguration
     DestinationConfiguration:
       S3:
         BucketName: !Ref S3Bucket
     ThumbnailConfiguration:
       RecordingMode: INTERVAL
       TargetIntervalSeconds: 60

 Channel:
   Type: AWS::IVS::Channel
   DependsOn: RecordingConfiguration
   Properties:
     Name: MyRecordedChannel
     RecordingConfigurationArn: !Ref RecordingConfiguration
```

## See also<a name="aws-resource-ivs-recordingconfiguration--seealso"></a>

- [Getting Started with Amazon Interactive Video Service](https://docs.aws.amazon.com/ivs/latest/userguide/GSIVS.html)
- [Record to Amazon S3](https://docs.aws.amazon.com/ivs/latest/userguide/record-to-S3.html)
- [RecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_RecordingConfiguration.html) API data type
- [DestinationConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_DestinationConfiguration.html) API data type
- [S3DestinationConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_S3DestinationConfiguration.html) API data type
- [CreateRecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateRecordingConfiguration.html) API endpoint