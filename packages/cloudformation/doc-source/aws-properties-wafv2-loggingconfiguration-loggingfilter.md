# AWS::WAFv2::LoggingConfiguration LoggingFilter<a name="aws-properties-wafv2-loggingconfiguration-loggingfilter"></a>

Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's `LoggingConfiguration`\.

You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation\.

## Syntax<a name="aws-properties-wafv2-loggingconfiguration-loggingfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-loggingconfiguration-loggingfilter-syntax.json"></a>

```
{
  "[DefaultBehavior](#cfn-wafv2-loggingconfiguration-loggingfilter-defaultbehavior)" : String,
  "[Filters](#cfn-wafv2-loggingconfiguration-loggingfilter-filters)" : [ Filter, ... ]
}
```

### YAML<a name="aws-properties-wafv2-loggingconfiguration-loggingfilter-syntax.yaml"></a>

```
  [DefaultBehavior](#cfn-wafv2-loggingconfiguration-loggingfilter-defaultbehavior): String
  [Filters](#cfn-wafv2-loggingconfiguration-loggingfilter-filters):
    - Filter
```

## Properties<a name="aws-properties-wafv2-loggingconfiguration-loggingfilter-properties"></a>

`DefaultBehavior` <a name="cfn-wafv2-loggingconfiguration-loggingfilter-defaultbehavior"></a>
Default handling for logs that don't match any of the specified filtering conditions\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DROP | KEEP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Filters` <a name="cfn-wafv2-loggingconfiguration-loggingfilter-filters"></a>
The filters that you want to apply to the logs\.  
_Required_: Yes  
_Type_: List of [Filter](aws-properties-wafv2-loggingconfiguration-filter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
