# AWS::WAFv2::WebACL ResponseInspectionHeader<a name="aws-properties-wafv2-webacl-responseinspectionheader"></a>

Configures inspection of the response header\. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet`\.

**Note**  
Response inspection is available only in web ACLs that protect Amazon CloudFront distributions\.

## Syntax<a name="aws-properties-wafv2-webacl-responseinspectionheader-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-webacl-responseinspectionheader-syntax.json"></a>

```
{
  "[FailureValues](#cfn-wafv2-webacl-responseinspectionheader-failurevalues)" : [ String, ... ],
  "[Name](#cfn-wafv2-webacl-responseinspectionheader-name)" : String,
  "[SuccessValues](#cfn-wafv2-webacl-responseinspectionheader-successvalues)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-wafv2-webacl-responseinspectionheader-syntax.yaml"></a>

```
  [FailureValues](#cfn-wafv2-webacl-responseinspectionheader-failurevalues):
    - String
  [Name](#cfn-wafv2-webacl-responseinspectionheader-name): String
  [SuccessValues](#cfn-wafv2-webacl-responseinspectionheader-successvalues):
    - String
```

## Properties<a name="aws-properties-wafv2-webacl-responseinspectionheader-properties"></a>

`FailureValues` <a name="cfn-wafv2-webacl-responseinspectionheader-failurevalues"></a>
Values in the response header with the specified name that indicate a failed login attempt\. To be counted as a failed login, the value must be an exact match, including case\. Each value must be unique among the success and failure values\.  
JSON example: `"FailureValues": [ "LoginFailed", "Failed login" ]`  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-wafv2-webacl-responseinspectionheader-name"></a>
The name of the header to match against\. The name must be an exact match, including case\.  
JSON example: `"Name": [ "LoginResult" ]`  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `200`  
_Pattern_: `.*\S.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SuccessValues` <a name="cfn-wafv2-webacl-responseinspectionheader-successvalues"></a>
Values in the response header with the specified name that indicate a successful login attempt\. To be counted as a successful login, the value must be an exact match, including case\. Each value must be unique among the success and failure values\.  
JSON example: `"SuccessValues": [ "LoginPassed", "Successful login" ]`  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
