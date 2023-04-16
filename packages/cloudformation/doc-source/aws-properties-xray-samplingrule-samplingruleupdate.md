# AWS::XRay::SamplingRule SamplingRuleUpdate<a name="aws-properties-xray-samplingrule-samplingruleupdate"></a>

A document specifying changes to a sampling rule's configuration\.

## Syntax<a name="aws-properties-xray-samplingrule-samplingruleupdate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-xray-samplingrule-samplingruleupdate-syntax.json"></a>

```
{
  "[Attributes](#cfn-xray-samplingrule-samplingruleupdate-attributes)" : {Key : Value, ...},
  "[FixedRate](#cfn-xray-samplingrule-samplingruleupdate-fixedrate)" : Double,
  "[Host](#cfn-xray-samplingrule-samplingruleupdate-host)" : String,
  "[HTTPMethod](#cfn-xray-samplingrule-samplingruleupdate-httpmethod)" : String,
  "[Priority](#cfn-xray-samplingrule-samplingruleupdate-priority)" : Integer,
  "[ReservoirSize](#cfn-xray-samplingrule-samplingruleupdate-reservoirsize)" : Integer,
  "[ResourceARN](#cfn-xray-samplingrule-samplingruleupdate-resourcearn)" : String,
  "[RuleARN](#cfn-xray-samplingrule-samplingruleupdate-rulearn)" : String,
  "[RuleName](#cfn-xray-samplingrule-samplingruleupdate-rulename)" : String,
  "[ServiceName](#cfn-xray-samplingrule-samplingruleupdate-servicename)" : String,
  "[ServiceType](#cfn-xray-samplingrule-samplingruleupdate-servicetype)" : String,
  "[URLPath](#cfn-xray-samplingrule-samplingruleupdate-urlpath)" : String
}
```

### YAML<a name="aws-properties-xray-samplingrule-samplingruleupdate-syntax.yaml"></a>

```
  [Attributes](#cfn-xray-samplingrule-samplingruleupdate-attributes):
    Key : Value
  [FixedRate](#cfn-xray-samplingrule-samplingruleupdate-fixedrate): Double
  [Host](#cfn-xray-samplingrule-samplingruleupdate-host): String
  [HTTPMethod](#cfn-xray-samplingrule-samplingruleupdate-httpmethod): String
  [Priority](#cfn-xray-samplingrule-samplingruleupdate-priority): Integer
  [ReservoirSize](#cfn-xray-samplingrule-samplingruleupdate-reservoirsize): Integer
  [ResourceARN](#cfn-xray-samplingrule-samplingruleupdate-resourcearn): String
  [RuleARN](#cfn-xray-samplingrule-samplingruleupdate-rulearn): String
  [RuleName](#cfn-xray-samplingrule-samplingruleupdate-rulename): String
  [ServiceName](#cfn-xray-samplingrule-samplingruleupdate-servicename): String
  [ServiceType](#cfn-xray-samplingrule-samplingruleupdate-servicetype): String
  [URLPath](#cfn-xray-samplingrule-samplingruleupdate-urlpath): String
```

## Properties<a name="aws-properties-xray-samplingrule-samplingruleupdate-properties"></a>

`Attributes` <a name="cfn-xray-samplingrule-samplingruleupdate-attributes"></a>
Matches attributes derived from the request\.  
_Map Entries:_ Maximum number of 5 items\.  
_Key Length Constraints:_ Minimum length of 1\. Maximum length of 32\.  
_Value Length Constraints:_ Minimum length of 1\. Maximum length of 32\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FixedRate` <a name="cfn-xray-samplingrule-samplingruleupdate-fixedrate"></a>
The percentage of matching requests to instrument, after the reservoir is exhausted\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-xray-samplingrule-samplingruleupdate-host"></a>
Matches the hostname from a request URL\.  
_Required_: No  
_Type_: String  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HTTPMethod` <a name="cfn-xray-samplingrule-samplingruleupdate-httpmethod"></a>
Matches the HTTP method of a request\.  
_Required_: No  
_Type_: String  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Priority` <a name="cfn-xray-samplingrule-samplingruleupdate-priority"></a>
The priority of the sampling rule\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReservoirSize` <a name="cfn-xray-samplingrule-samplingruleupdate-reservoirsize"></a>
A fixed number of matching requests to instrument per second, prior to applying the fixed rate\. The reservoir is not used directly by services, but applies to all services using the rule collectively\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceARN` <a name="cfn-xray-samplingrule-samplingruleupdate-resourcearn"></a>
Matches the ARN of the AWS resource on which the service runs\.  
_Required_: No  
_Type_: String  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleARN` <a name="cfn-xray-samplingrule-samplingruleupdate-rulearn"></a>
The ARN of the sampling rule\. You must specify either RuleARN or RuleName, but not both\.  
_Required_: Conditional  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleName` <a name="cfn-xray-samplingrule-samplingruleupdate-rulename"></a>
The name of the sampling rule\. You must specify either RuleARN or RuleName, but not both\.  
_Required_: Conditional  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `32`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceName` <a name="cfn-xray-samplingrule-samplingruleupdate-servicename"></a>
Matches the `name` that the service uses to identify itself in segments\.  
_Required_: No  
_Type_: String  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceType` <a name="cfn-xray-samplingrule-samplingruleupdate-servicetype"></a>
Matches the `origin` that the service uses to identify its type in segments\.  
_Required_: No  
_Type_: String  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`URLPath` <a name="cfn-xray-samplingrule-samplingruleupdate-urlpath"></a>
Matches the path from a request URL\.  
_Required_: No  
_Type_: String  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
