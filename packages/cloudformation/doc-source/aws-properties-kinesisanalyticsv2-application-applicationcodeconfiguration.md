# AWS::KinesisAnalyticsV2::Application ApplicationCodeConfiguration<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration"></a>

Describes code configuration for an application\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration-syntax.json"></a>

```
{
  "[CodeContent](#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontent)" : CodeContent,
  "[CodeContentType](#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontenttype)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration-syntax.yaml"></a>

```
  [CodeContent](#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontent):
    CodeContent
  [CodeContentType](#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontenttype): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration-properties"></a>

`CodeContent` <a name="cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontent"></a>
The location and type of the application code\.  
_Required_: Yes  
_Type_: [CodeContent](aws-properties-kinesisanalyticsv2-application-codecontent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CodeContentType` <a name="cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontenttype"></a>
Specifies whether the code content is in text or zip format\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `PLAINTEXT | ZIPFILE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration--seealso"></a>

- [ApplicationCodeConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ApplicationCodeConfiguration.html) in the _Amazon Kinesis Data Analytics API Reference_
