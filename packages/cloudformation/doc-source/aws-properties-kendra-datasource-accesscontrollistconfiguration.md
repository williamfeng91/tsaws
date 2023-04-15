# AWS::Kendra::DataSource AccessControlListConfiguration<a name="aws-properties-kendra-datasource-accesscontrollistconfiguration"></a>

Specifies access control list files for the documents in a data source\.

## Syntax<a name="aws-properties-kendra-datasource-accesscontrollistconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-accesscontrollistconfiguration-syntax.json"></a>

```
{
  "[KeyPath](#cfn-kendra-datasource-accesscontrollistconfiguration-keypath)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-accesscontrollistconfiguration-syntax.yaml"></a>

```
  [KeyPath](#cfn-kendra-datasource-accesscontrollistconfiguration-keypath): String
```

## Properties<a name="aws-properties-kendra-datasource-accesscontrollistconfiguration-properties"></a>

`KeyPath` <a name="cfn-kendra-datasource-accesscontrollistconfiguration-keypath"></a>
Path to the AWS S3 bucket that contains the access control list files\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
