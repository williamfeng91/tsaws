# AWS::AppFlow::ConnectorProfile SnowflakeConnectorProfileProperties<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties"></a>

The connector\-specific profile properties required when using Snowflake\.

## Syntax<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties-syntax.json"></a>

```
{
  "[AccountName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-accountname)" : String,
  "[BucketName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketname)" : String,
  "[BucketPrefix](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketprefix)" : String,
  "[PrivateLinkServiceName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-privatelinkservicename)" : String,
  "[Region](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-region)" : String,
  "[Stage](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-stage)" : String,
  "[Warehouse](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-warehouse)" : String
}
```

### YAML<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties-syntax.yaml"></a>

```
  [AccountName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-accountname): String
  [BucketName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketname): String
  [BucketPrefix](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketprefix): String
  [PrivateLinkServiceName](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-privatelinkservicename): String
  [Region](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-region): String
  [Stage](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-stage): String
  [Warehouse](#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-warehouse): String
```

## Properties<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties-properties"></a>

`AccountName` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-accountname"></a>
The name of the account\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketName` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketname"></a>
The name of the Amazon S3 bucket associated with Snowflake\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketPrefix` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketprefix"></a>
The bucket path that refers to the Amazon S3 bucket associated with Snowflake\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrivateLinkServiceName` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-privatelinkservicename"></a>
The Snowflake Private Link service name to be used for private data transfers\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `^$|com.amazonaws.vpce.[\w/!:@#.\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Region` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-region"></a>
The AWS Region of the Snowflake account\.  
_Required_: No  
_Type_: String  
_Maximum_: `64`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Stage` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-stage"></a>
The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account\. This is written in the following format: < Database>< Schema><Stage Name>\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `\S+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Warehouse` <a name="cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-warehouse"></a>
The name of the Snowflake warehouse\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `[\s\w/!@#+=.-]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties--seealso"></a>

- [SnowflakeConnectorProfileProperties](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_SnowflakeConnectorProfileProperties.html) in the _Amazon AppFlow API Reference_\.
