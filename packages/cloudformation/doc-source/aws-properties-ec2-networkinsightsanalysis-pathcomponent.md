# AWS::EC2::NetworkInsightsAnalysis PathComponent<a name="aws-properties-ec2-networkinsightsanalysis-pathcomponent"></a>

Describes a path component\.

## Syntax<a name="aws-properties-ec2-networkinsightsanalysis-pathcomponent-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-networkinsightsanalysis-pathcomponent-syntax.json"></a>

```
{
  "[AclRule](#cfn-ec2-networkinsightsanalysis-pathcomponent-aclrule)" : AnalysisAclRule,
  "[AdditionalDetails](#cfn-ec2-networkinsightsanalysis-pathcomponent-additionaldetails)" : [ AdditionalDetail, ... ],
  "[Component](#cfn-ec2-networkinsightsanalysis-pathcomponent-component)" : AnalysisComponent,
  "[DestinationVpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-destinationvpc)" : AnalysisComponent,
  "[ElasticLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-pathcomponent-elasticloadbalancerlistener)" : AnalysisComponent,
  "[Explanations](#cfn-ec2-networkinsightsanalysis-pathcomponent-explanations)" : [ Explanation, ... ],
  "[InboundHeader](#cfn-ec2-networkinsightsanalysis-pathcomponent-inboundheader)" : AnalysisPacketHeader,
  "[OutboundHeader](#cfn-ec2-networkinsightsanalysis-pathcomponent-outboundheader)" : AnalysisPacketHeader,
  "[RouteTableRoute](#cfn-ec2-networkinsightsanalysis-pathcomponent-routetableroute)" : AnalysisRouteTableRoute,
  "[SecurityGroupRule](#cfn-ec2-networkinsightsanalysis-pathcomponent-securitygrouprule)" : AnalysisSecurityGroupRule,
  "[SequenceNumber](#cfn-ec2-networkinsightsanalysis-pathcomponent-sequencenumber)" : Integer,
  "[ServiceName](#cfn-ec2-networkinsightsanalysis-pathcomponent-servicename)" : String,
  "[SourceVpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-sourcevpc)" : AnalysisComponent,
  "[Subnet](#cfn-ec2-networkinsightsanalysis-pathcomponent-subnet)" : AnalysisComponent,
  "[TransitGateway](#cfn-ec2-networkinsightsanalysis-pathcomponent-transitgateway)" : AnalysisComponent,
  "[TransitGatewayRouteTableRoute](#cfn-ec2-networkinsightsanalysis-pathcomponent-transitgatewayroutetableroute)" : TransitGatewayRouteTableRoute,
  "[Vpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-vpc)" : AnalysisComponent
}
```

### YAML<a name="aws-properties-ec2-networkinsightsanalysis-pathcomponent-syntax.yaml"></a>

```
  [AclRule](#cfn-ec2-networkinsightsanalysis-pathcomponent-aclrule):
    AnalysisAclRule
  [AdditionalDetails](#cfn-ec2-networkinsightsanalysis-pathcomponent-additionaldetails):
    - AdditionalDetail
  [Component](#cfn-ec2-networkinsightsanalysis-pathcomponent-component):
    AnalysisComponent
  [DestinationVpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-destinationvpc):
    AnalysisComponent
  [ElasticLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-pathcomponent-elasticloadbalancerlistener):
    AnalysisComponent
  [Explanations](#cfn-ec2-networkinsightsanalysis-pathcomponent-explanations):
    - Explanation
  [InboundHeader](#cfn-ec2-networkinsightsanalysis-pathcomponent-inboundheader):
    AnalysisPacketHeader
  [OutboundHeader](#cfn-ec2-networkinsightsanalysis-pathcomponent-outboundheader):
    AnalysisPacketHeader
  [RouteTableRoute](#cfn-ec2-networkinsightsanalysis-pathcomponent-routetableroute):
    AnalysisRouteTableRoute
  [SecurityGroupRule](#cfn-ec2-networkinsightsanalysis-pathcomponent-securitygrouprule):
    AnalysisSecurityGroupRule
  [SequenceNumber](#cfn-ec2-networkinsightsanalysis-pathcomponent-sequencenumber): Integer
  [ServiceName](#cfn-ec2-networkinsightsanalysis-pathcomponent-servicename): String
  [SourceVpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-sourcevpc):
    AnalysisComponent
  [Subnet](#cfn-ec2-networkinsightsanalysis-pathcomponent-subnet):
    AnalysisComponent
  [TransitGateway](#cfn-ec2-networkinsightsanalysis-pathcomponent-transitgateway):
    AnalysisComponent
  [TransitGatewayRouteTableRoute](#cfn-ec2-networkinsightsanalysis-pathcomponent-transitgatewayroutetableroute):
    TransitGatewayRouteTableRoute
  [Vpc](#cfn-ec2-networkinsightsanalysis-pathcomponent-vpc):
    AnalysisComponent
```

## Properties<a name="aws-properties-ec2-networkinsightsanalysis-pathcomponent-properties"></a>

`AclRule` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-aclrule"></a>
The network ACL rule\.  
_Required_: No  
_Type_: [AnalysisAclRule](aws-properties-ec2-networkinsightsanalysis-analysisaclrule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AdditionalDetails` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-additionaldetails"></a>
The additional details\.  
_Required_: No  
_Type_: List of [AdditionalDetail](aws-properties-ec2-networkinsightsanalysis-additionaldetail.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Component` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-component"></a>
The component\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationVpc` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-destinationvpc"></a>
The destination VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ElasticLoadBalancerListener` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-elasticloadbalancerlistener"></a>
The load balancer listener\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Explanations` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-explanations"></a>
The explanation codes\.  
_Required_: No  
_Type_: List of [Explanation](aws-properties-ec2-networkinsightsanalysis-explanation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InboundHeader` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-inboundheader"></a>
The inbound header\.  
_Required_: No  
_Type_: [AnalysisPacketHeader](aws-properties-ec2-networkinsightsanalysis-analysispacketheader.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OutboundHeader` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-outboundheader"></a>
The outbound header\.  
_Required_: No  
_Type_: [AnalysisPacketHeader](aws-properties-ec2-networkinsightsanalysis-analysispacketheader.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RouteTableRoute` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-routetableroute"></a>
The route table route\.  
_Required_: No  
_Type_: [AnalysisRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityGroupRule` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-securitygrouprule"></a>
The security group rule\.  
_Required_: No  
_Type_: [AnalysisSecurityGroupRule](aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SequenceNumber` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-sequencenumber"></a>
The sequence number\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServiceName` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-servicename"></a>
The name of the VPC endpoint service\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceVpc` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-sourcevpc"></a>
The source VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subnet` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-subnet"></a>
The subnet\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGateway` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-transitgateway"></a>
The transit gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGatewayRouteTableRoute` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-transitgatewayroutetableroute"></a>
The route in a transit gateway route table\.  
_Required_: No  
_Type_: [TransitGatewayRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Vpc` <a name="cfn-ec2-networkinsightsanalysis-pathcomponent-vpc"></a>
The component VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
