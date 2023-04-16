# AWS::AppFlow::Flow S3DestinationProperties<a name="aws-properties-appflow-flow-s3destinationproperties"></a>

The properties that are applied when Amazon S3 is used as a destination\.

## Syntax<a name="aws-properties-appflow-flow-s3destinationproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-s3destinationproperties-syntax.json"></a>

```
{
  "[BucketName](#cfn-appflow-flow-s3destinationproperties-bucketname)" : String,
  "[BucketPrefix](#cfn-appflow-flow-s3destinationproperties-bucketprefix)" : String,
  "[S3OutputFormatConfig](#cfn-appflow-flow-s3destinationproperties-s3outputformatconfig)" : S3OutputFormatConfig
}
```

### YAML<a name="aws-properties-appflow-flow-s3destinationproperties-syntax.yaml"></a>

```
  [BucketName](#cfn-appflow-flow-s3destinationproperties-bucketname): String
  [BucketPrefix](#cfn-appflow-flow-s3destinationproperties-bucketprefix): String
  [S3OutputFormatConfig](#cfn-appflow-flow-s3destinationproperties-s3outputformatconfig):
    S3OutputFormatConfig
```

## Properties<a name="aws-properties-appflow-flow-s3destinationproperties-properties"></a>

`BucketName` <a name="cfn-appflow-flow-s3destinationproperties-bucketname"></a>
The Amazon S3 bucket name in which Amazon AppFlow places the transferred data\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-appflow-flow-s3destinationproperties-bucketprefix"></a>
The object key for the destination bucket in which Amazon AppFlow places the files\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3OutputFormatConfig` <a name="cfn-appflow-flow-s3destinationproperties-s3outputformatconfig"></a>
The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination\.  
_Required_: No  
_Type_: [S3OutputFormatConfig](aws-properties-appflow-flow-s3outputformatconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-s3destinationproperties--seealso"></a>

- [S3DestinationProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_S3DestinationProperties.html) in the _Amazon AppFlow API Reference_\.
