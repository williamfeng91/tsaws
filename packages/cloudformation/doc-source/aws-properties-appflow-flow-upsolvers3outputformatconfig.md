# AWS::AppFlow::Flow UpsolverS3OutputFormatConfig<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig"></a>

The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination\.

## Syntax<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig-syntax.json"></a>

```
{
  "[AggregationConfig](#cfn-appflow-flow-upsolvers3outputformatconfig-aggregationconfig)" : AggregationConfig,
  "[FileType](#cfn-appflow-flow-upsolvers3outputformatconfig-filetype)" : String,
  "[PrefixConfig](#cfn-appflow-flow-upsolvers3outputformatconfig-prefixconfig)" : PrefixConfig
}
```

### YAML<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig-syntax.yaml"></a>

```
  [AggregationConfig](#cfn-appflow-flow-upsolvers3outputformatconfig-aggregationconfig):
    AggregationConfig
  [FileType](#cfn-appflow-flow-upsolvers3outputformatconfig-filetype): String
  [PrefixConfig](#cfn-appflow-flow-upsolvers3outputformatconfig-prefixconfig):
    PrefixConfig
```

## Properties<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig-properties"></a>

`AggregationConfig` <a name="cfn-appflow-flow-upsolvers3outputformatconfig-aggregationconfig"></a>
The aggregation settings that you can use to customize the output format of your flow data\.  
_Required_: No  
_Type_: [AggregationConfig](aws-properties-appflow-flow-aggregationconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FileType` <a name="cfn-appflow-flow-upsolvers3outputformatconfig-filetype"></a>
Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CSV | JSON | PARQUET`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrefixConfig` <a name="cfn-appflow-flow-upsolvers3outputformatconfig-prefixconfig"></a>
Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination\.  
_Required_: Yes  
_Type_: [PrefixConfig](aws-properties-appflow-flow-prefixconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-upsolvers3outputformatconfig--seealso"></a>

- [UpsolverS3OutputFormatConfig](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpsolverS3OutputFormatConfig.html) in the _Amazon AppFlow API Reference_\.
