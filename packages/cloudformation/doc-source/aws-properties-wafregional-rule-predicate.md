# AWS::WAFRegional::Rule Predicate<a name="aws-properties-wafregional-rule-predicate"></a>

Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a `Rule` and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192\.0\.2\.44\.

## Syntax<a name="aws-properties-wafregional-rule-predicate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafregional-rule-predicate-syntax.json"></a>

```
{
  "[DataId](#cfn-wafregional-rule-predicate-dataid)" : String,
  "[Negated](#cfn-wafregional-rule-predicate-negated)" : Boolean,
  "[Type](#cfn-wafregional-rule-predicate-type)" : String
}
```

### YAML<a name="aws-properties-wafregional-rule-predicate-syntax.yaml"></a>

```
  [DataId](#cfn-wafregional-rule-predicate-dataid): String
  [Negated](#cfn-wafregional-rule-predicate-negated): Boolean
  [Type](#cfn-wafregional-rule-predicate-type): String
```

## Properties<a name="aws-properties-wafregional-rule-predicate-properties"></a>

`DataId` <a name="cfn-wafregional-rule-predicate-dataid"></a>
A unique identifier for a predicate in a `Rule`, such as `ByteMatchSetId` or `IPSetId`\. The ID is returned by the corresponding `Create` or `List` command\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `.*\S.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Negated` <a name="cfn-wafregional-rule-predicate-negated"></a>
Set `Negated` to `False` if you want AWS WAF to allow, block, or count requests based on the settings in the specified `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`\. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address\.  
Set `Negated` to `True` if you want AWS WAF to allow or block a request based on the negation of the settings in the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`\. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow, block, or count requests based on all IP addresses _except_ `192.0.2.44`\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-wafregional-rule-predicate-type"></a>
The type of predicate in a `Rule`, such as `ByteMatch` or `IPSet`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ByteMatch | GeoMatch | IPMatch | RegexMatch | SizeConstraint | SqlInjectionMatch | XssMatch`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
