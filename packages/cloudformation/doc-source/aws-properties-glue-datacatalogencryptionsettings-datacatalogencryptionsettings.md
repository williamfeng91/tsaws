# AWS::Glue::DataCatalogEncryptionSettings DataCatalogEncryptionSettings<a name="aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings"></a>

Contains configuration information for maintaining Data Catalog security\.

## Syntax<a name="aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-syntax.json"></a>

```
{
  "[ConnectionPasswordEncryption](#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-connectionpasswordencryption)" : ConnectionPasswordEncryption,
  "[EncryptionAtRest](#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-encryptionatrest)" : EncryptionAtRest
}
```

### YAML<a name="aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-syntax.yaml"></a>

```
  [ConnectionPasswordEncryption](#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-connectionpasswordencryption):
    ConnectionPasswordEncryption
  [EncryptionAtRest](#cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-encryptionatrest):
    EncryptionAtRest
```

## Properties<a name="aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-properties"></a>

`ConnectionPasswordEncryption` <a name="cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-connectionpasswordencryption"></a>
When connection password protection is enabled, the Data Catalog uses a customer\-provided key to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties\. You can enable catalog encryption or only password encryption\.  
_Required_: No  
_Type_: [ConnectionPasswordEncryption](aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionAtRest` <a name="cfn-glue-datacatalogencryptionsettings-datacatalogencryptionsettings-encryptionatrest"></a>
Specifies the encryption\-at\-rest configuration for the Data Catalog\.  
_Required_: No  
_Type_: [EncryptionAtRest](aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
