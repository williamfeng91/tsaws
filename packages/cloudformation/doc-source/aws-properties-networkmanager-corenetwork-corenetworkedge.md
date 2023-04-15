# AWS::NetworkManager::CoreNetwork CoreNetworkEdge<a name="aws-properties-networkmanager-corenetwork-corenetworkedge"></a>

Describes a core network edge\.

## Syntax<a name="aws-properties-networkmanager-corenetwork-corenetworkedge-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkmanager-corenetwork-corenetworkedge-syntax.json"></a>

```
{
  "[Asn](#cfn-networkmanager-corenetwork-corenetworkedge-asn)" : Double,
  "[EdgeLocation](#cfn-networkmanager-corenetwork-corenetworkedge-edgelocation)" : String,
  "[InsideCidrBlocks](#cfn-networkmanager-corenetwork-corenetworkedge-insidecidrblocks)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-networkmanager-corenetwork-corenetworkedge-syntax.yaml"></a>

```
  [Asn](#cfn-networkmanager-corenetwork-corenetworkedge-asn): Double
  [EdgeLocation](#cfn-networkmanager-corenetwork-corenetworkedge-edgelocation): String
  [InsideCidrBlocks](#cfn-networkmanager-corenetwork-corenetworkedge-insidecidrblocks):
    - String
```

## Properties<a name="aws-properties-networkmanager-corenetwork-corenetworkedge-properties"></a>

`Asn` <a name="cfn-networkmanager-corenetwork-corenetworkedge-asn"></a>
The ASN of a core network edge\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EdgeLocation` <a name="cfn-networkmanager-corenetwork-corenetworkedge-edgelocation"></a>
The Region where a core network edge is located\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `[\s\S]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InsideCidrBlocks` <a name="cfn-networkmanager-corenetwork-corenetworkedge-insidecidrblocks"></a>
The inside IP addresses used for core network edges\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
