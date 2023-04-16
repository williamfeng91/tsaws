# AWS::IoTFleetWise::Campaign ConditionBasedCollectionScheme<a name="aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme"></a>

Information about a collection scheme that uses a simple logical expression to recognize what data to collect\.

## Syntax<a name="aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme-syntax.json"></a>

```
{
  "[ConditionLanguageVersion](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-conditionlanguageversion)" : Integer,
  "[Expression](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-expression)" : String,
  "[MinimumTriggerIntervalMs](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-minimumtriggerintervalms)" : Double,
  "[TriggerMode](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-triggermode)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme-syntax.yaml"></a>

```
  [ConditionLanguageVersion](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-conditionlanguageversion): Integer
  [Expression](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-expression): String
  [MinimumTriggerIntervalMs](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-minimumtriggerintervalms): Double
  [TriggerMode](#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-triggermode): String
```

## Properties<a name="aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme-properties"></a>

`ConditionLanguageVersion` <a name="cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-conditionlanguageversion"></a>
Specifies the version of the conditional expression language\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Expression` <a name="cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-expression"></a>
The logical expression used to recognize what data to collect\. For example, `$variable.Vehicle.OutsideAirTemperature >= 105.0`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MinimumTriggerIntervalMs` <a name="cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-minimumtriggerintervalms"></a>
The minimum duration of time between two triggering events to collect data, in milliseconds\.  
If a signal changes often, you might want to collect data at a slower rate\.
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TriggerMode` <a name="cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-triggermode"></a>
Whether to collect data for all triggering events \(`ALWAYS`\)\. Specify \(`RISING_EDGE`\), or specify only when the condition first evaluates to false\. For example, triggering on "AirbagDeployed"; Users aren't interested on triggering when the airbag is already exploded; they only care about the change from not deployed => deployed\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ALWAYS | RISING_EDGE`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
