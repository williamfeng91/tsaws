# AWS::Events::Rule CapacityProviderStrategyItem<a name="aws-properties-events-rule-capacityproviderstrategyitem"></a>

The details of a capacity provider strategy\. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference\.

## Syntax<a name="aws-properties-events-rule-capacityproviderstrategyitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-capacityproviderstrategyitem-syntax.json"></a>

```
{
  "[Base](#cfn-events-rule-capacityproviderstrategyitem-base)" : Integer,
  "[CapacityProvider](#cfn-events-rule-capacityproviderstrategyitem-capacityprovider)" : String,
  "[Weight](#cfn-events-rule-capacityproviderstrategyitem-weight)" : Integer
}
```

### YAML<a name="aws-properties-events-rule-capacityproviderstrategyitem-syntax.yaml"></a>

```
  [Base](#cfn-events-rule-capacityproviderstrategyitem-base): Integer
  [CapacityProvider](#cfn-events-rule-capacityproviderstrategyitem-capacityprovider): String
  [Weight](#cfn-events-rule-capacityproviderstrategyitem-weight): Integer
```

## Properties<a name="aws-properties-events-rule-capacityproviderstrategyitem-properties"></a>

`Base` <a name="cfn-events-rule-capacityproviderstrategyitem-base"></a>
The base value designates how many tasks, at a minimum, to run on the specified capacity provider\. Only one capacity provider in a capacity provider strategy can have a base defined\. If no value is specified, the default value of 0 is used\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CapacityProvider` <a name="cfn-events-rule-capacityproviderstrategyitem-capacityprovider"></a>
The short name of the capacity provider\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Weight` <a name="cfn-events-rule-capacityproviderstrategyitem-weight"></a>
The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider\. The weight value is taken into consideration after the base value, if defined, is satisfied\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-properties-events-rule-capacityproviderstrategyitem--examples"></a>

### Set the CapacityProviderStrategyItem property<a name="aws-properties-events-rule-capacityproviderstrategyitem--examples--Set_the_CapacityProviderStrategyItem_property"></a>

The following example sets the `CapacityProviderStrategyItem` property to run a minimum of 10 tasks on CapacityProvider1\.

#### JSON<a name="aws-properties-events-rule-capacityproviderstrategyitem--examples--Set_the_CapacityProviderStrategyItem_property--json"></a>

```
"CapacityProviderStrategy": {
  "Base": 10,
  "CapacityProvider": "CapacityProvider1",
  "Weight": 0
}
```

#### YAML<a name="aws-properties-events-rule-capacityproviderstrategyitem--examples--Set_the_CapacityProviderStrategyItem_property--yaml"></a>

```
CapacityProviderStrategy
  Base: 10
  CapacityProvider: CapacityProvider1
  Weight: 0
```
