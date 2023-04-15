# AWS::EC2::NetworkInsightsAnalysis AnalysisRouteTableRoute<a name="aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute"></a>

Describes a route table route\.

## Syntax<a name="aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute-syntax.json"></a>

```
{
  "[destinationCidr](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationcidr)" : String,
  "[destinationPrefixListId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationprefixlistid)" : String,
  "[egressOnlyInternetGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-egressonlyinternetgatewayid)" : String,
  "[gatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-gatewayid)" : String,
  "[instanceId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-instanceid)" : String,
  "[NatGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-natgatewayid)" : String,
  "[NetworkInterfaceId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-networkinterfaceid)" : String,
  "[Origin](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-origin)" : String,
  "[State](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-state)" : String,
  "[TransitGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-transitgatewayid)" : String,
  "[VpcPeeringConnectionId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-vpcpeeringconnectionid)" : String
}
```

### YAML<a name="aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute-syntax.yaml"></a>

```
  [destinationCidr](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationcidr): String
  [destinationPrefixListId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationprefixlistid): String
  [egressOnlyInternetGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-egressonlyinternetgatewayid): String
  [gatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-gatewayid): String
  [instanceId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-instanceid): String
  [NatGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-natgatewayid): String
  [NetworkInterfaceId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-networkinterfaceid): String
  [Origin](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-origin): String
  [State](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-state): String
  [TransitGatewayId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-transitgatewayid): String
  [VpcPeeringConnectionId](#cfn-ec2-networkinsightsanalysis-analysisroutetableroute-vpcpeeringconnectionid): String
```

## Properties<a name="aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute-properties"></a>

`destinationCidr` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationcidr"></a>
The destination IPv4 address, in CIDR notation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`destinationPrefixListId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-destinationprefixlistid"></a>
The prefix of the AWS service\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`egressOnlyInternetGatewayId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-egressonlyinternetgatewayid"></a>
The ID of an egress\-only internet gateway\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`gatewayId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-gatewayid"></a>
The ID of the gateway, such as an internet gateway or virtual private gateway\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`instanceId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-instanceid"></a>
The ID of the instance, such as a NAT instance\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NatGatewayId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-natgatewayid"></a>
The ID of a NAT gateway\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkInterfaceId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-networkinterfaceid"></a>
The ID of a network interface\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Origin` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-origin"></a>
Describes how the route was created\. The following are the possible values:

- CreateRouteTable \- The route was automatically created when the route table was created\.
- CreateRoute \- The route was manually added to the route table\.
- EnableVgwRoutePropagation \- The route was propagated by route propagation\.
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`State` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-state"></a>
The state\. The following are the possible values:

- active
- blackhole
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGatewayId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-transitgatewayid"></a>
The ID of a transit gateway\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcPeeringConnectionId` <a name="cfn-ec2-networkinsightsanalysis-analysisroutetableroute-vpcpeeringconnectionid"></a>
The ID of a VPC peering connection\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
