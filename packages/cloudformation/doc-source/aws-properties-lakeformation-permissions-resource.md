# AWS::LakeFormation::Permissions Resource<a name="aws-properties-lakeformation-permissions-resource"></a>

A structure for the resource\.

## Syntax<a name="aws-properties-lakeformation-permissions-resource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lakeformation-permissions-resource-syntax.json"></a>

```
{
  "[DatabaseResource](#cfn-lakeformation-permissions-resource-databaseresource)" : DatabaseResource,
  "[DataLocationResource](#cfn-lakeformation-permissions-resource-datalocationresource)" : DataLocationResource,
  "[TableResource](#cfn-lakeformation-permissions-resource-tableresource)" : TableResource,
  "[TableWithColumnsResource](#cfn-lakeformation-permissions-resource-tablewithcolumnsresource)" : TableWithColumnsResource
}
```

### YAML<a name="aws-properties-lakeformation-permissions-resource-syntax.yaml"></a>

```
  [DatabaseResource](#cfn-lakeformation-permissions-resource-databaseresource):
    DatabaseResource
  [DataLocationResource](#cfn-lakeformation-permissions-resource-datalocationresource):
    DataLocationResource
  [TableResource](#cfn-lakeformation-permissions-resource-tableresource):
    TableResource
  [TableWithColumnsResource](#cfn-lakeformation-permissions-resource-tablewithcolumnsresource):
    TableWithColumnsResource
```

## Properties<a name="aws-properties-lakeformation-permissions-resource-properties"></a>

`DatabaseResource` <a name="cfn-lakeformation-permissions-resource-databaseresource"></a>
A structure for the database object\.  
_Required_: No  
_Type_: [DatabaseResource](aws-properties-lakeformation-permissions-databaseresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataLocationResource` <a name="cfn-lakeformation-permissions-resource-datalocationresource"></a>
A structure for a data location object where permissions are granted or revoked\.  
_Required_: No  
_Type_: [DataLocationResource](aws-properties-lakeformation-permissions-datalocationresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TableResource` <a name="cfn-lakeformation-permissions-resource-tableresource"></a>
A structure for the table object\. A table is a metadata definition that represents your data\. You can Grant and Revoke table privileges to a principal\.  
_Required_: No  
_Type_: [TableResource](aws-properties-lakeformation-permissions-tableresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TableWithColumnsResource` <a name="cfn-lakeformation-permissions-resource-tablewithcolumnsresource"></a>
A structure for a table with columns object\. This object is only used when granting a SELECT permission\.  
_Required_: No  
_Type_: [TableWithColumnsResource](aws-properties-lakeformation-permissions-tablewithcolumnsresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
