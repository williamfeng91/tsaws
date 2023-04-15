# AWS::IoTFleetWise::SignalCatalog<a name="aws-resource-iotfleetwise-signalcatalog"></a>

Creates a collection of standardized signals that can be reused to create vehicle models\.

## Syntax<a name="aws-resource-iotfleetwise-signalcatalog-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotfleetwise-signalcatalog-syntax.json"></a>

```
{
  "Type" : "AWS::IoTFleetWise::SignalCatalog",
  "Properties" : {
      "[Description](#cfn-iotfleetwise-signalcatalog-description)" : String,
      "[Name](#cfn-iotfleetwise-signalcatalog-name)" : String,
      "[NodeCounts](#cfn-iotfleetwise-signalcatalog-nodecounts)" : NodeCounts,
      "[Nodes](#cfn-iotfleetwise-signalcatalog-nodes)" : [ Node, ... ],
      "[Tags](#cfn-iotfleetwise-signalcatalog-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-iotfleetwise-signalcatalog-syntax.yaml"></a>

```
Type: AWS::IoTFleetWise::SignalCatalog
Properties:
  [Description](#cfn-iotfleetwise-signalcatalog-description): String
  [Name](#cfn-iotfleetwise-signalcatalog-name): String
  [NodeCounts](#cfn-iotfleetwise-signalcatalog-nodecounts):
    NodeCounts
  [Nodes](#cfn-iotfleetwise-signalcatalog-nodes):
    - Node
  [Tags](#cfn-iotfleetwise-signalcatalog-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-iotfleetwise-signalcatalog-properties"></a>

`Description` <a name="cfn-iotfleetwise-signalcatalog-description"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotfleetwise-signalcatalog-name"></a>
The name of the signal catalog\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`NodeCounts` <a name="cfn-iotfleetwise-signalcatalog-nodecounts"></a>
Property description not available\.  
_Required_: No  
_Type_: [NodeCounts](aws-properties-iotfleetwise-signalcatalog-nodecounts.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Nodes` <a name="cfn-iotfleetwise-signalcatalog-nodes"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [Node](aws-properties-iotfleetwise-signalcatalog-node.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-iotfleetwise-signalcatalog-tags"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotfleetwise-signalcatalog-return-values"></a>

### Ref<a name="aws-resource-iotfleetwise-signalcatalog-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-iotfleetwise-signalcatalog-return-values-fn--getatt"></a>

#### <a name="aws-resource-iotfleetwise-signalcatalog-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.

`CreationTime` <a name="CreationTime-fn::getatt"></a>
Property description not available\.

`LastModificationTime` <a name="LastModificationTime-fn::getatt"></a>
Property description not available\.

`NodeCounts.TotalActuators` <a name="NodeCounts.TotalActuators-fn::getatt"></a>
Property description not available\.

`NodeCounts.TotalAttributes` <a name="NodeCounts.TotalAttributes-fn::getatt"></a>
Property description not available\.

`NodeCounts.TotalBranches` <a name="NodeCounts.TotalBranches-fn::getatt"></a>
Property description not available\.

`NodeCounts.TotalNodes` <a name="NodeCounts.TotalNodes-fn::getatt"></a>
Property description not available\.

`NodeCounts.TotalSensors` <a name="NodeCounts.TotalSensors-fn::getatt"></a>
Property description not available\.
