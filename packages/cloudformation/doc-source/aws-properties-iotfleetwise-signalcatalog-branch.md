# AWS::IoTFleetWise::SignalCatalog Branch<a name="aws-properties-iotfleetwise-signalcatalog-branch"></a>

A group of signals that are defined in a hierarchical structure\.

## Syntax<a name="aws-properties-iotfleetwise-signalcatalog-branch-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-signalcatalog-branch-syntax.json"></a>

```
{
  "[Description](#cfn-iotfleetwise-signalcatalog-branch-description)" : String,
  "[FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-branch-fullyqualifiedname)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-signalcatalog-branch-syntax.yaml"></a>

```
  [Description](#cfn-iotfleetwise-signalcatalog-branch-description): String
  [FullyQualifiedName](#cfn-iotfleetwise-signalcatalog-branch-fullyqualifiedname): String
```

## Properties<a name="aws-properties-iotfleetwise-signalcatalog-branch-properties"></a>

`Description` <a name="cfn-iotfleetwise-signalcatalog-branch-description"></a>
A brief description of the branch\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `[^\u0000-\u001F\u007F]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FullyQualifiedName` <a name="cfn-iotfleetwise-signalcatalog-branch-fullyqualifiedname"></a>
The fully qualified name of the branch\. For example, the fully qualified name of a branch might be `Vehicle.Body.Engine`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
