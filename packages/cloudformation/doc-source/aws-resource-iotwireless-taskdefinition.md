# AWS::IoTWireless::TaskDefinition<a name="aws-resource-iotwireless-taskdefinition"></a>

Creates a gateway task definition\.

## Syntax<a name="aws-resource-iotwireless-taskdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotwireless-taskdefinition-syntax.json"></a>

```
{
  "Type" : "AWS::IoTWireless::TaskDefinition",
  "Properties" : {
      "[AutoCreateTasks](#cfn-iotwireless-taskdefinition-autocreatetasks)" : Boolean,
      "[Name](#cfn-iotwireless-taskdefinition-name)" : String,
      "[Tags](#cfn-iotwireless-taskdefinition-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Update](#cfn-iotwireless-taskdefinition-update)" : UpdateWirelessGatewayTaskCreate
    }
}
```

### YAML<a name="aws-resource-iotwireless-taskdefinition-syntax.yaml"></a>

```
Type: AWS::IoTWireless::TaskDefinition
Properties:
  [AutoCreateTasks](#cfn-iotwireless-taskdefinition-autocreatetasks): Boolean
  [Name](#cfn-iotwireless-taskdefinition-name): String
  [Tags](#cfn-iotwireless-taskdefinition-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Update](#cfn-iotwireless-taskdefinition-update):
    UpdateWirelessGatewayTaskCreate
```

## Properties<a name="aws-resource-iotwireless-taskdefinition-properties"></a>

`AutoCreateTasks` <a name="cfn-iotwireless-taskdefinition-autocreatetasks"></a>
Whether to automatically create tasks using this task definition for all gateways with the specified current version\. If `false`, the task must me created by calling `CreateWirelessGatewayTask`\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotwireless-taskdefinition-name"></a>
The name of the new resource\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-iotwireless-taskdefinition-tags"></a>
The tags are an array of key\-value pairs to attach to the specified resource\. Tags can have a minimum of 0 and a maximum of 50 items\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Update` <a name="cfn-iotwireless-taskdefinition-update"></a>
Information about the gateways to update\.  
_Required_: No  
_Type_: [UpdateWirelessGatewayTaskCreate](aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotwireless-taskdefinition-return-values"></a>

### Ref<a name="aws-resource-iotwireless-taskdefinition-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the task definition\.

### Fn::GetAtt<a name="aws-resource-iotwireless-taskdefinition-return-values-fn--getatt"></a>

#### <a name="aws-resource-iotwireless-taskdefinition-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name of the resource\.

`Id` <a name="Id-fn::getatt"></a>
The ID of the new wireless gateway task definition\.
