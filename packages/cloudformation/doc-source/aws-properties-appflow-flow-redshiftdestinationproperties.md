# AWS::AppFlow::Flow RedshiftDestinationProperties<a name="aws-properties-appflow-flow-redshiftdestinationproperties"></a>

The properties that are applied when Amazon Redshift is being used as a destination\.

## Syntax<a name="aws-properties-appflow-flow-redshiftdestinationproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-redshiftdestinationproperties-syntax.json"></a>

```
{
  "[BucketPrefix](#cfn-appflow-flow-redshiftdestinationproperties-bucketprefix)" : String,
  "[ErrorHandlingConfig](#cfn-appflow-flow-redshiftdestinationproperties-errorhandlingconfig)" : ErrorHandlingConfig,
  "[IntermediateBucketName](#cfn-appflow-flow-redshiftdestinationproperties-intermediatebucketname)" : String,
  "[Object](#cfn-appflow-flow-redshiftdestinationproperties-object)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-redshiftdestinationproperties-syntax.yaml"></a>

```
  [BucketPrefix](#cfn-appflow-flow-redshiftdestinationproperties-bucketprefix): String
  [ErrorHandlingConfig](#cfn-appflow-flow-redshiftdestinationproperties-errorhandlingconfig):
    ErrorHandlingConfig
  [IntermediateBucketName](#cfn-appflow-flow-redshiftdestinationproperties-intermediatebucketname): String
  [Object](#cfn-appflow-flow-redshiftdestinationproperties-object): String
```

## Properties<a name="aws-properties-appflow-flow-redshiftdestinationproperties-properties"></a>

`BucketPrefix` <a name="cfn-appflow-flow-redshiftdestinationproperties-bucketprefix"></a>
The object key for the bucket in which Amazon AppFlow places the destination files\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ErrorHandlingConfig` <a name="cfn-appflow-flow-redshiftdestinationproperties-errorhandlingconfig"></a>
The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination\. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure\. `ErrorHandlingConfig` is a part of the destination connector details\.  
_Required_: No  
_Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IntermediateBucketName` <a name="cfn-appflow-flow-redshiftdestinationproperties-intermediatebucketname"></a>
The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Object` <a name="cfn-appflow-flow-redshiftdestinationproperties-object"></a>
The object specified in the Amazon Redshift flow destination\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-redshiftdestinationproperties--seealso"></a>

- [RedshiftDestinationProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RedshiftDestinationProperties.html) in the _Amazon AppFlow API Reference_\.
