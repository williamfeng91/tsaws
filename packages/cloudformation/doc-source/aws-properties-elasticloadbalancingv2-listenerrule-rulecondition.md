# AWS::ElasticLoadBalancingV2::ListenerRule RuleCondition<a name="aws-properties-elasticloadbalancingv2-listenerrule-rulecondition"></a>

Specifies a condition for a listener rule\.

## Syntax<a name="aws-properties-elasticloadbalancingv2-listenerrule-rulecondition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticloadbalancingv2-listenerrule-rulecondition-syntax.json"></a>

```
{
  "[Field](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-field)" : String,
  "[HostHeaderConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-hostheaderconfig)" : HostHeaderConfig,
  "[HttpHeaderConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httpheaderconfig)" : HttpHeaderConfig,
  "[HttpRequestMethodConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httprequestmethodconfig)" : HttpRequestMethodConfig,
  "[PathPatternConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-pathpatternconfig)" : PathPatternConfig,
  "[QueryStringConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-querystringconfig)" : QueryStringConfig,
  "[SourceIpConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-sourceipconfig)" : SourceIpConfig,
  "[Values](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-elasticloadbalancingv2-listenerrule-rulecondition-syntax.yaml"></a>

```
  [Field](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-field): String
  [HostHeaderConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-hostheaderconfig):
    HostHeaderConfig
  [HttpHeaderConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httpheaderconfig):
    HttpHeaderConfig
  [HttpRequestMethodConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httprequestmethodconfig):
    HttpRequestMethodConfig
  [PathPatternConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-pathpatternconfig):
    PathPatternConfig
  [QueryStringConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-querystringconfig):
    QueryStringConfig
  [SourceIpConfig](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-sourceipconfig):
    SourceIpConfig
  [Values](#cfn-elasticloadbalancingv2-listenerrule-rulecondition-values):
    - String
```

## Properties<a name="aws-properties-elasticloadbalancingv2-listenerrule-rulecondition-properties"></a>

`Field` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-field"></a>
The field in the HTTP request\. The following are the possible values:

- `http-header`
- `http-request-method`
- `host-header`
- `path-pattern`
- `query-string`
- `source-ip`
  _Required_: No  
  _Type_: String  
  _Maximum_: `64`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HostHeaderConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-hostheaderconfig"></a>
Information for a host header condition\. Specify only when `Field` is `host-header`\.  
_Required_: No  
_Type_: [HostHeaderConfig](aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpHeaderConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-httpheaderconfig"></a>
Information for an HTTP header condition\. Specify only when `Field` is `http-header`\.  
_Required_: Conditional  
_Type_: [HttpHeaderConfig](aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpRequestMethodConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-httprequestmethodconfig"></a>
Information for an HTTP method condition\. Specify only when `Field` is `http-request-method`\.  
_Required_: Conditional  
_Type_: [HttpRequestMethodConfig](aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PathPatternConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-pathpatternconfig"></a>
Information for a path pattern condition\. Specify only when `Field` is `path-pattern`\.  
_Required_: No  
_Type_: [PathPatternConfig](aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueryStringConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-querystringconfig"></a>
Information for a query string condition\. Specify only when `Field` is `query-string`\.  
_Required_: Conditional  
_Type_: [QueryStringConfig](aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceIpConfig` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-sourceipconfig"></a>
Information for a source IP condition\. Specify only when `Field` is `source-ip`\.  
_Required_: Conditional  
_Type_: [SourceIpConfig](aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-elasticloadbalancingv2-listenerrule-rulecondition-values"></a>
The condition value\. Specify only when `Field` is `host-header` or `path-pattern`\. Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig`\.  
If `Field` is `host-header` and you're not using `HostHeaderConfig`, you can specify a single host name \(for example, my\.example\.com\)\. A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters\.

- A\-Z, a\-z, 0\-9
- \- \.
- \* \(matches 0 or more characters\)
- ? \(matches exactly 1 character\)
  If `Field` is `path-pattern` and you're not using `PathPatternConfig`, you can specify a single path pattern \(for example, /img/\*\)\. A path pattern is case\-sensitive, can be up to 128 characters in length, and can contain any of the following characters\.
- A\-Z, a\-z, 0\-9
- \_ \- \. $ / \~ " ' @ : \+
- & \(using &amp;\)
- \* \(matches 0 or more characters\)
- ? \(matches exactly 1 character\)
  _Required_: No  
  _Type_: List of String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
