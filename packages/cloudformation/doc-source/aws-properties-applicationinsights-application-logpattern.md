# AWS::ApplicationInsights::Application LogPattern<a name="aws-properties-applicationinsights-application-logpattern"></a>

The `AWS::ApplicationInsights::Application LogPattern` property type specifies an object that defines the log patterns that belong to a `LogPatternSet`\.

## Syntax<a name="aws-properties-applicationinsights-application-logpattern-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-applicationinsights-application-logpattern-syntax.json"></a>

```
{
  "[Pattern](#cfn-applicationinsights-application-logpattern-pattern)" : String,
  "[PatternName](#cfn-applicationinsights-application-logpattern-patternname)" : String,
  "[Rank](#cfn-applicationinsights-application-logpattern-rank)" : Integer
}
```

### YAML<a name="aws-properties-applicationinsights-application-logpattern-syntax.yaml"></a>

```
  [Pattern](#cfn-applicationinsights-application-logpattern-pattern): String
  [PatternName](#cfn-applicationinsights-application-logpattern-patternname): String
  [Rank](#cfn-applicationinsights-application-logpattern-rank): Integer
```

## Properties<a name="aws-properties-applicationinsights-application-logpattern-properties"></a>

`Pattern` <a name="cfn-applicationinsights-application-logpattern-pattern"></a>
A regular expression that defines the log pattern\. A log pattern can contain up to 50 characters, and it cannot be empty\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Pattern_: `[\S\s]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PatternName` <a name="cfn-applicationinsights-application-logpattern-patternname"></a>
The name of the log pattern\. A log pattern name can contain up to 50 characters, and it cannot be empty\. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Pattern_: `[a-zA-Z0-9\.\-_]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Rank` <a name="cfn-applicationinsights-application-logpattern-rank"></a>
The rank of the log pattern\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
