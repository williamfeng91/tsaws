# AWS::AppFlow::Flow ErrorHandlingConfig<a name="aws-properties-appflow-flow-errorhandlingconfig"></a>

The settings that determine how Amazon AppFlow handles an error when placing data in the destination\. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure\. `ErrorHandlingConfig` is a part of the destination connector details\.

## Syntax<a name="aws-properties-appflow-flow-errorhandlingconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-errorhandlingconfig-syntax.json"></a>

```
{
  "[BucketName](#cfn-appflow-flow-errorhandlingconfig-bucketname)" : String,
  "[BucketPrefix](#cfn-appflow-flow-errorhandlingconfig-bucketprefix)" : String,
  "[FailOnFirstError](#cfn-appflow-flow-errorhandlingconfig-failonfirsterror)" : Boolean
}
```

### YAML<a name="aws-properties-appflow-flow-errorhandlingconfig-syntax.yaml"></a>

```
  [BucketName](#cfn-appflow-flow-errorhandlingconfig-bucketname): String
  [BucketPrefix](#cfn-appflow-flow-errorhandlingconfig-bucketprefix): String
  [FailOnFirstError](#cfn-appflow-flow-errorhandlingconfig-failonfirsterror): Boolean
```

## Properties<a name="aws-properties-appflow-flow-errorhandlingconfig-properties"></a>

`BucketName` <a name="cfn-appflow-flow-errorhandlingconfig-bucketname"></a>
Specifies the name of the Amazon S3 bucket\.  
_Required_: No  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-appflow-flow-errorhandlingconfig-bucketprefix"></a>
Specifies the Amazon S3 bucket prefix\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FailOnFirstError` <a name="cfn-appflow-flow-errorhandlingconfig-failonfirsterror"></a>
Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-errorhandlingconfig--seealso"></a>

- [ErrorHandlingConfig](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ErrorHandlingConfig.html) in the _Amazon AppFlow API Reference_\.
