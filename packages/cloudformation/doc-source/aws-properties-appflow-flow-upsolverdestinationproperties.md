# AWS::AppFlow::Flow UpsolverDestinationProperties<a name="aws-properties-appflow-flow-upsolverdestinationproperties"></a>

The properties that are applied when Upsolver is used as a destination\.

## Syntax<a name="aws-properties-appflow-flow-upsolverdestinationproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-upsolverdestinationproperties-syntax.json"></a>

```
{
  "[BucketName](#cfn-appflow-flow-upsolverdestinationproperties-bucketname)" : String,
  "[BucketPrefix](#cfn-appflow-flow-upsolverdestinationproperties-bucketprefix)" : String,
  "[S3OutputFormatConfig](#cfn-appflow-flow-upsolverdestinationproperties-s3outputformatconfig)" : UpsolverS3OutputFormatConfig
}
```

### YAML<a name="aws-properties-appflow-flow-upsolverdestinationproperties-syntax.yaml"></a>

```
  [BucketName](#cfn-appflow-flow-upsolverdestinationproperties-bucketname): String
  [BucketPrefix](#cfn-appflow-flow-upsolverdestinationproperties-bucketprefix): String
  [S3OutputFormatConfig](#cfn-appflow-flow-upsolverdestinationproperties-s3outputformatconfig):
    UpsolverS3OutputFormatConfig
```

## Properties<a name="aws-properties-appflow-flow-upsolverdestinationproperties-properties"></a>

`BucketName` <a name="cfn-appflow-flow-upsolverdestinationproperties-bucketname"></a>
The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `16`  
_Maximum_: `63`  
_Pattern_: `^(upsolver-appflow)\S*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-appflow-flow-upsolverdestinationproperties-bucketprefix"></a>
The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3OutputFormatConfig` <a name="cfn-appflow-flow-upsolverdestinationproperties-s3outputformatconfig"></a>
The configuration that determines how data is formatted when Upsolver is used as the flow destination\.  
_Required_: Yes  
_Type_: [UpsolverS3OutputFormatConfig](aws-properties-appflow-flow-upsolvers3outputformatconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-upsolverdestinationproperties--seealso"></a>

- [UpsolverDestinationProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpsolverDestinationProperties.html) in the _Amazon AppFlow API Reference_\.
