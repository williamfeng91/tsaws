# AWS::QuickSight::DataSource DataSourceErrorInfo<a name="aws-properties-quicksight-datasource-datasourceerrorinfo"></a>

Error information for the data source creation or update\.

## Syntax<a name="aws-properties-quicksight-datasource-datasourceerrorinfo-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-datasourceerrorinfo-syntax.json"></a>

```
{
  "[Message](#cfn-quicksight-datasource-datasourceerrorinfo-message)" : String,
  "[Type](#cfn-quicksight-datasource-datasourceerrorinfo-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-datasource-datasourceerrorinfo-syntax.yaml"></a>

```
  [Message](#cfn-quicksight-datasource-datasourceerrorinfo-message): String
  [Type](#cfn-quicksight-datasource-datasourceerrorinfo-type): String
```

## Properties<a name="aws-properties-quicksight-datasource-datasourceerrorinfo-properties"></a>

`Message` <a name="cfn-quicksight-datasource-datasourceerrorinfo-message"></a>
Error message\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-datasource-datasourceerrorinfo-type"></a>
Error type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ACCESS_DENIED | CONFLICT | COPY_SOURCE_NOT_FOUND | ENGINE_VERSION_NOT_SUPPORTED | GENERIC_SQL_FAILURE | TIMEOUT | UNKNOWN | UNKNOWN_HOST`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
