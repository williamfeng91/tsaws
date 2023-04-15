# AWS::NetworkManager::Device Location<a name="aws-properties-networkmanager-device-location"></a>

Describes a location\.

## Syntax<a name="aws-properties-networkmanager-device-location-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkmanager-device-location-syntax.json"></a>

```
{
  "[Address](#cfn-networkmanager-device-location-address)" : String,
  "[Latitude](#cfn-networkmanager-device-location-latitude)" : String,
  "[Longitude](#cfn-networkmanager-device-location-longitude)" : String
}
```

### YAML<a name="aws-properties-networkmanager-device-location-syntax.yaml"></a>

```
  [Address](#cfn-networkmanager-device-location-address): String
  [Latitude](#cfn-networkmanager-device-location-latitude): String
  [Longitude](#cfn-networkmanager-device-location-longitude): String
```

## Properties<a name="aws-properties-networkmanager-device-location-properties"></a>

`Address` <a name="cfn-networkmanager-device-location-address"></a>
The physical address\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\s\S]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Latitude` <a name="cfn-networkmanager-device-location-latitude"></a>
The latitude\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\s\S]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Longitude` <a name="cfn-networkmanager-device-location-longitude"></a>
The longitude\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\s\S]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
