# AWS::Cognito::UserPool SchemaAttribute<a name="aws-properties-cognito-userpool-schemaattribute"></a>

Contains information about the schema attribute\.

## Syntax<a name="aws-properties-cognito-userpool-schemaattribute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpool-schemaattribute-syntax.json"></a>

```
{
  "[AttributeDataType](#cfn-cognito-userpool-schemaattribute-attributedatatype)" : String,
  "[DeveloperOnlyAttribute](#cfn-cognito-userpool-schemaattribute-developeronlyattribute)" : Boolean,
  "[Mutable](#cfn-cognito-userpool-schemaattribute-mutable)" : Boolean,
  "[Name](#cfn-cognito-userpool-schemaattribute-name)" : String,
  "[NumberAttributeConstraints](#cfn-cognito-userpool-schemaattribute-numberattributeconstraints)" : NumberAttributeConstraints,
  "[Required](#cfn-cognito-userpool-schemaattribute-required)" : Boolean,
  "[StringAttributeConstraints](#cfn-cognito-userpool-schemaattribute-stringattributeconstraints)" : StringAttributeConstraints
}
```

### YAML<a name="aws-properties-cognito-userpool-schemaattribute-syntax.yaml"></a>

```
  [AttributeDataType](#cfn-cognito-userpool-schemaattribute-attributedatatype): String
  [DeveloperOnlyAttribute](#cfn-cognito-userpool-schemaattribute-developeronlyattribute): Boolean
  [Mutable](#cfn-cognito-userpool-schemaattribute-mutable): Boolean
  [Name](#cfn-cognito-userpool-schemaattribute-name): String
  [NumberAttributeConstraints](#cfn-cognito-userpool-schemaattribute-numberattributeconstraints):
    NumberAttributeConstraints
  [Required](#cfn-cognito-userpool-schemaattribute-required): Boolean
  [StringAttributeConstraints](#cfn-cognito-userpool-schemaattribute-stringattributeconstraints):
    StringAttributeConstraints
```

## Properties<a name="aws-properties-cognito-userpool-schemaattribute-properties"></a>

`AttributeDataType` <a name="cfn-cognito-userpool-schemaattribute-attributedatatype"></a>
The attribute data type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `Boolean | DateTime | Number | String`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeveloperOnlyAttribute` <a name="cfn-cognito-userpool-schemaattribute-developeronlyattribute"></a>
We recommend that you use [WriteAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes) in the user pool client to control how attributes can be mutated for new use cases instead of using `DeveloperOnlyAttribute`\.
Specifies whether the attribute type is developer only\. This attribute can only be modified by an administrator\. Users will not be able to modify this attribute using their access token\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Mutable` <a name="cfn-cognito-userpool-schemaattribute-mutable"></a>
Specifies whether the value of the attribute can be changed\.  
For any user pool attribute that is mapped to an IdP attribute, you must set this parameter to `true`\. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP\. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute\. For more information, see [Specifying Identity Provider Attribute Mappings for Your User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html)\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-cognito-userpool-schemaattribute-name"></a>
A schema attribute of the name type\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `20`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberAttributeConstraints` <a name="cfn-cognito-userpool-schemaattribute-numberattributeconstraints"></a>
Specifies the constraints for an attribute of the number type\.  
_Required_: No  
_Type_: [NumberAttributeConstraints](aws-properties-cognito-userpool-numberattributeconstraints.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Required` <a name="cfn-cognito-userpool-schemaattribute-required"></a>
Specifies whether a user pool attribute is required\. If the attribute is required and the user doesn't provide a value, registration or sign\-in will fail\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringAttributeConstraints` <a name="cfn-cognito-userpool-schemaattribute-stringattributeconstraints"></a>
Specifies the constraints for an attribute of the string type\.  
_Required_: No  
_Type_: [StringAttributeConstraints](aws-properties-cognito-userpool-stringattributeconstraints.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
