# AWS::WAFv2::RuleGroup ForwardedIPConfiguration<a name="aws-properties-wafv2-rulegroup-forwardedipconfiguration"></a>

The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin\. Commonly, this is the X\-Forwarded\-For \(XFF\) header, but you can specify any header name\.

**Note**  
If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all\.

This configuration is used for [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ratebasedstatement)\. For [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement), use [IPSetForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html#cfn-wafv2-rulegroup-ipsetreferencestatement-ipsetforwardedipconfig) instead\.

AWS WAF only evaluates the first IP address found in the specified HTTP header\.

## Syntax<a name="aws-properties-wafv2-rulegroup-forwardedipconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-rulegroup-forwardedipconfiguration-syntax.json"></a>

```
{
  "[FallbackBehavior](#cfn-wafv2-rulegroup-forwardedipconfiguration-fallbackbehavior)" : String,
  "[HeaderName](#cfn-wafv2-rulegroup-forwardedipconfiguration-headername)" : String
}
```

### YAML<a name="aws-properties-wafv2-rulegroup-forwardedipconfiguration-syntax.yaml"></a>

```
  [FallbackBehavior](#cfn-wafv2-rulegroup-forwardedipconfiguration-fallbackbehavior): String
  [HeaderName](#cfn-wafv2-rulegroup-forwardedipconfiguration-headername): String
```

## Properties<a name="aws-properties-wafv2-rulegroup-forwardedipconfiguration-properties"></a>

`FallbackBehavior` <a name="cfn-wafv2-rulegroup-forwardedipconfiguration-fallbackbehavior"></a>
The match status to assign to the web request if the request doesn't have a valid IP address in the specified position\.  
If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all\.
You can specify the following fallback behaviors:

- `MATCH` \- Treat the web request as matching the rule statement\. AWS WAF applies the rule action to the request\.
- `NO_MATCH` \- Treat the web request as not matching the rule statement\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `MATCH | NO_MATCH`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HeaderName` <a name="cfn-wafv2-rulegroup-forwardedipconfiguration-headername"></a>
The name of the HTTP header to use for the IP address\. For example, to use the X\-Forwarded\-For \(XFF\) header, set this to `X-Forwarded-For`\.  
If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all\.
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
