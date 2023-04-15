# AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption"></a>

Adds an Amazon CloudWatch log stream to monitor application configuration errors\.

**Note**  
Only one _ApplicationCloudWatchLoggingOption_ resource can be attached per application\.

## Syntax<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption-syntax.json"></a>

```
{
  "Type" : "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption",
  "Properties" : {
      "[ApplicationName](#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname)" : String,
      "[CloudWatchLoggingOption](#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption)" : CloudWatchLoggingOption
    }
}
```

### YAML<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption-syntax.yaml"></a>

```
Type: AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
Properties:
  [ApplicationName](#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname): String
  [CloudWatchLoggingOption](#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption):
    CloudWatchLoggingOption
```

## Properties<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption-properties"></a>

`ApplicationName` <a name="cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname"></a>
The name of the application\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`CloudWatchLoggingOption` <a name="cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption"></a>
Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name \(ARN\)\.  
_Required_: Yes  
_Type_: [CloudWatchLoggingOption](aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption--examples"></a>

### Create an ApplicationCloudWatchLoggingOption resource<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption--examples--Create_an_ApplicationCloudWatchLoggingOption_resource"></a>

#### JSON<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption--examples--Create_an_ApplicationCloudWatchLoggingOption_resource--json"></a>

```
{
    "BasicApplicationV2CloudWatchLoggingOption": {
        "Type": "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption",
        "Properties": {
            "ApplicationName": {
                "Ref": "BasicApplication"
            },
            "CloudWatchLoggingOption": {
                "LogStreamARN": {
                    "Fn::Join": [
                        ":",
                        [
                            "arn:aws:logs",
                            {
                                "Ref": "AWS::Region"
                            },
                            {
                                "Ref": "AWS::AccountId"
                            },
                            "log-group",
                            {
                                "Ref": "TestCWLogGroup"
                            },
                            "log-stream",
                            {
                                "Ref": "TestCWLogStream"
                            }
                        ]
                    ]
                }
            }
        }
    }
}
```

#### YAML<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption--examples--Create_an_ApplicationCloudWatchLoggingOption_resource--yaml"></a>

```
BasicApplicationV2CloudWatchLoggingOption:
  Type: AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
  Properties:
    ApplicationName:
      Ref: BasicApplication
    CloudWatchLoggingOption:
      LogStreamARN:
        Fn::Join:
        - ":"
        - - arn:aws:logs
          - Ref: AWS::Region
          - Ref: AWS::AccountId
          - log-group
          - Ref: TestCWLogGroup
          - log-stream
          - Ref: TestCWLogStream
```

## See also<a name="aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption--seealso"></a>

- [AddApplicationCloudWatchLoggingOption](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html) in the _Amazon Kinesis Data Analytics API Reference_