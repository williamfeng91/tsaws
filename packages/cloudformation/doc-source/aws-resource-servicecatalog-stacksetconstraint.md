# AWS::ServiceCatalog::StackSetConstraint<a name="aws-resource-servicecatalog-stacksetconstraint"></a>

Specifies a StackSet constraint\.

## Syntax<a name="aws-resource-servicecatalog-stacksetconstraint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-servicecatalog-stacksetconstraint-syntax.json"></a>

```
{
  "Type" : "AWS::ServiceCatalog::StackSetConstraint",
  "Properties" : {
      "[AcceptLanguage](#cfn-servicecatalog-stacksetconstraint-acceptlanguage)" : String,
      "[AccountList](#cfn-servicecatalog-stacksetconstraint-accountlist)" : [ String, ... ],
      "[AdminRole](#cfn-servicecatalog-stacksetconstraint-adminrole)" : String,
      "[Description](#cfn-servicecatalog-stacksetconstraint-description)" : String,
      "[ExecutionRole](#cfn-servicecatalog-stacksetconstraint-executionrole)" : String,
      "[PortfolioId](#cfn-servicecatalog-stacksetconstraint-portfolioid)" : String,
      "[ProductId](#cfn-servicecatalog-stacksetconstraint-productid)" : String,
      "[RegionList](#cfn-servicecatalog-stacksetconstraint-regionlist)" : [ String, ... ],
      "[StackInstanceControl](#cfn-servicecatalog-stacksetconstraint-stackinstancecontrol)" : String
    }
}
```

### YAML<a name="aws-resource-servicecatalog-stacksetconstraint-syntax.yaml"></a>

```
Type: AWS::ServiceCatalog::StackSetConstraint
Properties:
  [AcceptLanguage](#cfn-servicecatalog-stacksetconstraint-acceptlanguage): String
  [AccountList](#cfn-servicecatalog-stacksetconstraint-accountlist):
    - String
  [AdminRole](#cfn-servicecatalog-stacksetconstraint-adminrole): String
  [Description](#cfn-servicecatalog-stacksetconstraint-description): String
  [ExecutionRole](#cfn-servicecatalog-stacksetconstraint-executionrole): String
  [PortfolioId](#cfn-servicecatalog-stacksetconstraint-portfolioid): String
  [ProductId](#cfn-servicecatalog-stacksetconstraint-productid): String
  [RegionList](#cfn-servicecatalog-stacksetconstraint-regionlist):
    - String
  [StackInstanceControl](#cfn-servicecatalog-stacksetconstraint-stackinstancecontrol): String
```

## Properties<a name="aws-resource-servicecatalog-stacksetconstraint-properties"></a>

`AcceptLanguage` <a name="cfn-servicecatalog-stacksetconstraint-acceptlanguage"></a>
The language code\.

- `jp` \- Japanese
- `zh` \- Chinese
  _Required_: No  
  _Type_: String  
  _Maximum_: `100`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AccountList` <a name="cfn-servicecatalog-stacksetconstraint-accountlist"></a>
One or more AWS accounts that will have access to the provisioned product\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AdminRole` <a name="cfn-servicecatalog-stacksetconstraint-adminrole"></a>
AdminRole ARN  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-servicecatalog-stacksetconstraint-description"></a>
The description of the constraint\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `2000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExecutionRole` <a name="cfn-servicecatalog-stacksetconstraint-executionrole"></a>
ExecutionRole name  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortfolioId` <a name="cfn-servicecatalog-stacksetconstraint-portfolioid"></a>
The portfolio identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProductId` <a name="cfn-servicecatalog-stacksetconstraint-productid"></a>
The product identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RegionList` <a name="cfn-servicecatalog-stacksetconstraint-regionlist"></a>
One or more AWS Regions where the provisioned product will be available\.  
Applicable only to a `CFN_STACKSET` provisioned product type\.  
The specified Regions should be within the list of Regions from the `STACKSET` constraint\. To get the list of Regions in the `STACKSET` constraint, use the `DescribeProvisioningParameters` operation\.  
If no values are specified, the default value is all Regions from the `STACKSET` constraint\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StackInstanceControl` <a name="cfn-servicecatalog-stacksetconstraint-stackinstancecontrol"></a>
Permission to create, update, and delete stack instances\. Choose from ALLOWED and NOT_ALLOWED\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-servicecatalog-stacksetconstraint-return-values"></a>

### Ref<a name="aws-resource-servicecatalog-stacksetconstraint-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the identifier of the constraint\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
