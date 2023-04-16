# AWS::AmplifyUIBuilder::Form FormDataTypeConfig<a name="aws-properties-amplifyuibuilder-form-formdatatypeconfig"></a>

Describes the data type configuration for the data source associated with a form\.

## Syntax<a name="aws-properties-amplifyuibuilder-form-formdatatypeconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-amplifyuibuilder-form-formdatatypeconfig-syntax.json"></a>

```
{
  "[DataSourceType](#cfn-amplifyuibuilder-form-formdatatypeconfig-datasourcetype)" : String,
  "[DataTypeName](#cfn-amplifyuibuilder-form-formdatatypeconfig-datatypename)" : String
}
```

### YAML<a name="aws-properties-amplifyuibuilder-form-formdatatypeconfig-syntax.yaml"></a>

```
  [DataSourceType](#cfn-amplifyuibuilder-form-formdatatypeconfig-datasourcetype): String
  [DataTypeName](#cfn-amplifyuibuilder-form-formdatatypeconfig-datatypename): String
```

## Properties<a name="aws-properties-amplifyuibuilder-form-formdatatypeconfig-properties"></a>

`DataSourceType` <a name="cfn-amplifyuibuilder-form-formdatatypeconfig-datasourcetype"></a>
The data source type, either an Amplify DataStore model or a custom data type\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataTypeName` <a name="cfn-amplifyuibuilder-form-formdatatypeconfig-datatypename"></a>
The unique name of the data type you are using as the data source for the form\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
