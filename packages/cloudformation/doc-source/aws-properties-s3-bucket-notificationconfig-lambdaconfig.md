# AWS::S3::Bucket LambdaConfiguration<a name="aws-properties-s3-bucket-notificationconfig-lambdaconfig"></a>

Describes the AWS Lambda functions to invoke and the events for which to invoke them\.

## Syntax<a name="aws-properties-s3-bucket-notificationconfig-lambdaconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-s3-bucket-notificationconfig-lambdaconfig-syntax.json"></a>

```
{
  "[Event](#cfn-s3-bucket-notificationconfig-lambdaconfig-event)" : String,
  "[Filter](#cfn-s3-bucket-notificationconfig-lambdaconfig-filter)" : NotificationFilter,
  "[Function](#cfn-s3-bucket-notificationconfig-lambdaconfig-function)" : String
}
```

### YAML<a name="aws-properties-s3-bucket-notificationconfig-lambdaconfig-syntax.yaml"></a>

```
  [Event](#cfn-s3-bucket-notificationconfig-lambdaconfig-event): String
  [Filter](#cfn-s3-bucket-notificationconfig-lambdaconfig-filter):
    NotificationFilter
  [Function](#cfn-s3-bucket-notificationconfig-lambdaconfig-function): String
```

## Properties<a name="aws-properties-s3-bucket-notificationconfig-lambdaconfig-properties"></a>

`Event` <a name="cfn-s3-bucket-notificationconfig-lambdaconfig-event"></a>
The Amazon S3 bucket event for which to invoke the AWS Lambda function\. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the _Amazon S3 User Guide_\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Filter` <a name="cfn-s3-bucket-notificationconfig-lambdaconfig-filter"></a>
The filtering rules that determine which objects invoke the AWS Lambda function\. For example, you can create a filter so that only image files with a `.jpg` extension invoke the function when they are added to the Amazon S3 bucket\.  
_Required_: No  
_Type_: [NotificationFilter](aws-properties-s3-bucket-notificationconfiguration-config-filter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Function` <a name="cfn-s3-bucket-notificationconfig-lambdaconfig-function"></a>
The Amazon Resource Name \(ARN\) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
