# AWS::ServiceCatalog::LaunchTemplateConstraint<a name="aws-resource-servicecatalog-launchtemplateconstraint"></a>

Specifies a template constraint\.

## Syntax<a name="aws-resource-servicecatalog-launchtemplateconstraint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-servicecatalog-launchtemplateconstraint-syntax.json"></a>

```
{
  "Type" : "AWS::ServiceCatalog::LaunchTemplateConstraint",
  "Properties" : {
      "[AcceptLanguage](#cfn-servicecatalog-launchtemplateconstraint-acceptlanguage)" : String,
      "[Description](#cfn-servicecatalog-launchtemplateconstraint-description)" : String,
      "[PortfolioId](#cfn-servicecatalog-launchtemplateconstraint-portfolioid)" : String,
      "[ProductId](#cfn-servicecatalog-launchtemplateconstraint-productid)" : String,
      "[Rules](#cfn-servicecatalog-launchtemplateconstraint-rules)" : String
    }
}
```

### YAML<a name="aws-resource-servicecatalog-launchtemplateconstraint-syntax.yaml"></a>

```
Type: AWS::ServiceCatalog::LaunchTemplateConstraint
Properties:
  [AcceptLanguage](#cfn-servicecatalog-launchtemplateconstraint-acceptlanguage): String
  [Description](#cfn-servicecatalog-launchtemplateconstraint-description): String
  [PortfolioId](#cfn-servicecatalog-launchtemplateconstraint-portfolioid): String
  [ProductId](#cfn-servicecatalog-launchtemplateconstraint-productid): String
  [Rules](#cfn-servicecatalog-launchtemplateconstraint-rules): String
```

## Properties<a name="aws-resource-servicecatalog-launchtemplateconstraint-properties"></a>

`AcceptLanguage` <a name="cfn-servicecatalog-launchtemplateconstraint-acceptlanguage"></a>
The language code\.

- `jp` \- Japanese
- `zh` \- Chinese
  _Required_: No  
  _Type_: String  
  _Maximum_: `100`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-servicecatalog-launchtemplateconstraint-description"></a>
The description of the constraint\.  
_Required_: No  
_Type_: String  
_Maximum_: `2000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortfolioId` <a name="cfn-servicecatalog-launchtemplateconstraint-portfolioid"></a>
The portfolio identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProductId` <a name="cfn-servicecatalog-launchtemplateconstraint-productid"></a>
The product identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Rules` <a name="cfn-servicecatalog-launchtemplateconstraint-rules"></a>
The constraint rules\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-servicecatalog-launchtemplateconstraint-return-values"></a>

### Ref<a name="aws-resource-servicecatalog-launchtemplateconstraint-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the identifier of the constraint\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Remarks<a name="aws-resource-servicecatalog-launchtemplateconstraint--remarks"></a>

_Using AWS CloudFormation constraint rules_

Administrators can create and apply rules to create template contraints in an AWS Service Catalog portfolio\. The rules prevent end users from entering incorrect values in the AWS Service Catalog template the administrator used to create the product\.

For more information about template constraint rules and how to create them, see [Template Constraint Rules](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/reference-template_constraint_rules.html) in the _AWS Service Catalog Admin Guide_\.

## See also<a name="aws-resource-servicecatalog-launchtemplateconstraint--seealso"></a>

- [CreateConstraint](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html) in the _AWS Service Catalog API Reference_
