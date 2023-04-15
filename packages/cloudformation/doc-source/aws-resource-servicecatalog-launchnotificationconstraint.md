# AWS::ServiceCatalog::LaunchNotificationConstraint<a name="aws-resource-servicecatalog-launchnotificationconstraint"></a>

Specifies a notification constraint\.

## Syntax<a name="aws-resource-servicecatalog-launchnotificationconstraint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-servicecatalog-launchnotificationconstraint-syntax.json"></a>

```
{
  "Type" : "AWS::ServiceCatalog::LaunchNotificationConstraint",
  "Properties" : {
      "[AcceptLanguage](#cfn-servicecatalog-launchnotificationconstraint-acceptlanguage)" : String,
      "[Description](#cfn-servicecatalog-launchnotificationconstraint-description)" : String,
      "[NotificationArns](#cfn-servicecatalog-launchnotificationconstraint-notificationarns)" : [ String, ... ],
      "[PortfolioId](#cfn-servicecatalog-launchnotificationconstraint-portfolioid)" : String,
      "[ProductId](#cfn-servicecatalog-launchnotificationconstraint-productid)" : String
    }
}
```

### YAML<a name="aws-resource-servicecatalog-launchnotificationconstraint-syntax.yaml"></a>

```
Type: AWS::ServiceCatalog::LaunchNotificationConstraint
Properties:
  [AcceptLanguage](#cfn-servicecatalog-launchnotificationconstraint-acceptlanguage): String
  [Description](#cfn-servicecatalog-launchnotificationconstraint-description): String
  [NotificationArns](#cfn-servicecatalog-launchnotificationconstraint-notificationarns):
    - String
  [PortfolioId](#cfn-servicecatalog-launchnotificationconstraint-portfolioid): String
  [ProductId](#cfn-servicecatalog-launchnotificationconstraint-productid): String
```

## Properties<a name="aws-resource-servicecatalog-launchnotificationconstraint-properties"></a>

`AcceptLanguage` <a name="cfn-servicecatalog-launchnotificationconstraint-acceptlanguage"></a>
The language code\.

- `jp` \- Japanese
- `zh` \- Chinese
  _Required_: No  
  _Type_: String  
  _Maximum_: `100`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-servicecatalog-launchnotificationconstraint-description"></a>
The description of the constraint\.  
_Required_: No  
_Type_: String  
_Maximum_: `2000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NotificationArns` <a name="cfn-servicecatalog-launchnotificationconstraint-notificationarns"></a>
The notification ARNs\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortfolioId` <a name="cfn-servicecatalog-launchnotificationconstraint-portfolioid"></a>
The portfolio identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProductId` <a name="cfn-servicecatalog-launchnotificationconstraint-productid"></a>
The product identifier\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9_\-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-servicecatalog-launchnotificationconstraint-return-values"></a>

### Ref<a name="aws-resource-servicecatalog-launchnotificationconstraint-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the identifier of the constraint\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## See also<a name="aws-resource-servicecatalog-launchnotificationconstraint--seealso"></a>

- [CreateConstraint](https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html) in the _AWS Service Catalog API Reference_
