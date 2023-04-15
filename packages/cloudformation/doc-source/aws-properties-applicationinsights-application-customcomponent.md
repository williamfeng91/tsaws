# AWS::ApplicationInsights::Application CustomComponent<a name="aws-properties-applicationinsights-application-customcomponent"></a>

The `AWS::ApplicationInsights::Application CustomComponent` property type describes a custom component by grouping similar standalone instances to monitor\.

## Syntax<a name="aws-properties-applicationinsights-application-customcomponent-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-applicationinsights-application-customcomponent-syntax.json"></a>

```
{
  "[ComponentName](#cfn-applicationinsights-application-customcomponent-componentname)" : String,
  "[ResourceList](#cfn-applicationinsights-application-customcomponent-resourcelist)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-applicationinsights-application-customcomponent-syntax.yaml"></a>

```
  [ComponentName](#cfn-applicationinsights-application-customcomponent-componentname): String
  [ResourceList](#cfn-applicationinsights-application-customcomponent-resourcelist):
    - String
```

## Properties<a name="aws-properties-applicationinsights-application-customcomponent-properties"></a>

`ComponentName` <a name="cfn-applicationinsights-application-customcomponent-componentname"></a>
The name of the component\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^[\d\w\-_\.+]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceList` <a name="cfn-applicationinsights-application-customcomponent-resourcelist"></a>
The list of resource ARNs that belong to the component\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
