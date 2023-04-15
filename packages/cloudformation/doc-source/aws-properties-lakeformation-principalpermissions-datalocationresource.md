# AWS::LakeFormation::PrincipalPermissions DataLocationResource<a name="aws-properties-lakeformation-principalpermissions-datalocationresource"></a>

A structure for a data location object where permissions are granted or revoked\.

## Syntax<a name="aws-properties-lakeformation-principalpermissions-datalocationresource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lakeformation-principalpermissions-datalocationresource-syntax.json"></a>

```
{
  "[CatalogId](#cfn-lakeformation-principalpermissions-datalocationresource-catalogid)" : String,
  "[ResourceArn](#cfn-lakeformation-principalpermissions-datalocationresource-resourcearn)" : String
}
```

### YAML<a name="aws-properties-lakeformation-principalpermissions-datalocationresource-syntax.yaml"></a>

```
  [CatalogId](#cfn-lakeformation-principalpermissions-datalocationresource-catalogid): String
  [ResourceArn](#cfn-lakeformation-principalpermissions-datalocationresource-resourcearn): String
```

## Properties<a name="aws-properties-lakeformation-principalpermissions-datalocationresource-properties"></a>

`CatalogId` <a name="cfn-lakeformation-principalpermissions-datalocationresource-catalogid"></a>
The identifier for the Data Catalog where the location is registered with AWS Lake Formation\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ResourceArn` <a name="cfn-lakeformation-principalpermissions-datalocationresource-resourcearn"></a>
The Amazon Resource Name \(ARN\) that uniquely identifies the data location resource\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
