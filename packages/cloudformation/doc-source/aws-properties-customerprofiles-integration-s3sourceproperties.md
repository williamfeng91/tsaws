# AWS::CustomerProfiles::Integration S3SourceProperties<a name="aws-properties-customerprofiles-integration-s3sourceproperties"></a>

The properties that are applied when Amazon S3 is being used as the flow source\.

## Syntax<a name="aws-properties-customerprofiles-integration-s3sourceproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-customerprofiles-integration-s3sourceproperties-syntax.json"></a>

```
{
  "[BucketName](#cfn-customerprofiles-integration-s3sourceproperties-bucketname)" : String,
  "[BucketPrefix](#cfn-customerprofiles-integration-s3sourceproperties-bucketprefix)" : String
}
```

### YAML<a name="aws-properties-customerprofiles-integration-s3sourceproperties-syntax.yaml"></a>

```
  [BucketName](#cfn-customerprofiles-integration-s3sourceproperties-bucketname): String
  [BucketPrefix](#cfn-customerprofiles-integration-s3sourceproperties-bucketprefix): String
```

## Properties<a name="aws-properties-customerprofiles-integration-s3sourceproperties-properties"></a>

`BucketName` <a name="cfn-customerprofiles-integration-s3sourceproperties-bucketname"></a>
The Amazon S3 bucket name where the source files are stored\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-customerprofiles-integration-s3sourceproperties-bucketprefix"></a>
The object key for the Amazon S3 bucket in which the source files are stored\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
