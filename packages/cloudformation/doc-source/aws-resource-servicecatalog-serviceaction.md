# AWS::ServiceCatalog::ServiceAction<a name="aws-resource-servicecatalog-serviceaction"></a>

Creates a self\-service action\.

## Syntax<a name="aws-resource-servicecatalog-serviceaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-servicecatalog-serviceaction-syntax.json"></a>

```
{
  "Type" : "AWS::ServiceCatalog::ServiceAction",
  "Properties" : {
      "[AcceptLanguage](#cfn-servicecatalog-serviceaction-acceptlanguage)" : String,
      "[Definition](#cfn-servicecatalog-serviceaction-definition)" : [ DefinitionParameter, ... ],
      "[DefinitionType](#cfn-servicecatalog-serviceaction-definitiontype)" : String,
      "[Description](#cfn-servicecatalog-serviceaction-description)" : String,
      "[Name](#cfn-servicecatalog-serviceaction-name)" : String
    }
}
```

### YAML<a name="aws-resource-servicecatalog-serviceaction-syntax.yaml"></a>

```
Type: AWS::ServiceCatalog::ServiceAction
Properties:
  [AcceptLanguage](#cfn-servicecatalog-serviceaction-acceptlanguage): String
  [Definition](#cfn-servicecatalog-serviceaction-definition):
    - DefinitionParameter
  [DefinitionType](#cfn-servicecatalog-serviceaction-definitiontype): String
  [Description](#cfn-servicecatalog-serviceaction-description): String
  [Name](#cfn-servicecatalog-serviceaction-name): String
```

## Properties<a name="aws-resource-servicecatalog-serviceaction-properties"></a>

`AcceptLanguage` <a name="cfn-servicecatalog-serviceaction-acceptlanguage"></a>
The language code\.

- `en` \- English \(default\)
- `jp` \- Japanese
- `zh` \- Chinese
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Definition` <a name="cfn-servicecatalog-serviceaction-definition"></a>
A map that defines the self\-service action\.  
_Required_: Yes  
_Type_: List of [DefinitionParameter](aws-properties-servicecatalog-serviceaction-definitionparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefinitionType` <a name="cfn-servicecatalog-serviceaction-definitiontype"></a>
The self\-service action definition type\. For example, `SSM_AUTOMATION`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `SSM_AUTOMATION`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-servicecatalog-serviceaction-description"></a>
The self\-service action description\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-servicecatalog-serviceaction-name"></a>
The self\-service action name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^[a-zA-Z0-9_\-.]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-servicecatalog-serviceaction-return-values"></a>

### Ref<a name="aws-resource-servicecatalog-serviceaction-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-servicecatalog-serviceaction-return-values-fn--getatt"></a>

#### <a name="aws-resource-servicecatalog-serviceaction-return-values-fn--getatt-fn--getatt"></a>

`Id` <a name="Id-fn::getatt"></a>
The self\-service action identifier\. For example, `act-fs7abcd89wxyz`\.
