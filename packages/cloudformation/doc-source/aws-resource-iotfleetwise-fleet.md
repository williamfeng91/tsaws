# AWS::IoTFleetWise::Fleet<a name="aws-resource-iotfleetwise-fleet"></a>

Creates a fleet that represents a group of vehicles\.

**Note**  
You must create both a signal catalog and vehicles before you can create a fleet\.

For more information, see [Fleets](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleets.html) in the _AWS IoT FleetWise Developer Guide_\.

## Syntax<a name="aws-resource-iotfleetwise-fleet-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotfleetwise-fleet-syntax.json"></a>

```
{
  "Type" : "AWS::IoTFleetWise::Fleet",
  "Properties" : {
      "[Description](#cfn-iotfleetwise-fleet-description)" : String,
      "[Id](#cfn-iotfleetwise-fleet-id)" : String,
      "[SignalCatalogArn](#cfn-iotfleetwise-fleet-signalcatalogarn)" : String,
      "[Tags](#cfn-iotfleetwise-fleet-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-iotfleetwise-fleet-syntax.yaml"></a>

```
Type: AWS::IoTFleetWise::Fleet
Properties:
  [Description](#cfn-iotfleetwise-fleet-description): String
  [Id](#cfn-iotfleetwise-fleet-id): String
  [SignalCatalogArn](#cfn-iotfleetwise-fleet-signalcatalogarn): String
  [Tags](#cfn-iotfleetwise-fleet-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-iotfleetwise-fleet-properties"></a>

`Description` <a name="cfn-iotfleetwise-fleet-description"></a>
A brief description of the fleet\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `[^\u0000-\u001F\u007F]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Id` <a name="cfn-iotfleetwise-fleet-id"></a>
The unique ID of the fleet\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `[a-zA-Z0-9:_-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SignalCatalogArn` <a name="cfn-iotfleetwise-fleet-signalcatalogarn"></a>
The ARN of the signal catalog associated with the fleet\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-iotfleetwise-fleet-tags"></a>
Property description not available\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotfleetwise-fleet-return-values"></a>

### Ref<a name="aws-resource-iotfleetwise-fleet-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-iotfleetwise-fleet-return-values-fn--getatt"></a>

#### <a name="aws-resource-iotfleetwise-fleet-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.

`CreationTime` <a name="CreationTime-fn::getatt"></a>
Property description not available\.

`LastModificationTime` <a name="LastModificationTime-fn::getatt"></a>
Property description not available\.
