# AWS::EC2::NetworkInsightsAnalysis Explanation<a name="aws-properties-ec2-networkinsightsanalysis-explanation"></a>

Describes an explanation code for an unreachable path\. For more information, see [Reachability Analyzer explanation codes](https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html)\.

## Syntax<a name="aws-properties-ec2-networkinsightsanalysis-explanation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-networkinsightsanalysis-explanation-syntax.json"></a>

```
{
  "[Acl](#cfn-ec2-networkinsightsanalysis-explanation-acl)" : AnalysisComponent,
  "[AclRule](#cfn-ec2-networkinsightsanalysis-explanation-aclrule)" : AnalysisAclRule,
  "[Address](#cfn-ec2-networkinsightsanalysis-explanation-address)" : String,
  "[Addresses](#cfn-ec2-networkinsightsanalysis-explanation-addresses)" : [ String, ... ],
  "[AttachedTo](#cfn-ec2-networkinsightsanalysis-explanation-attachedto)" : AnalysisComponent,
  "[AvailabilityZones](#cfn-ec2-networkinsightsanalysis-explanation-availabilityzones)" : [ String, ... ],
  "[Cidrs](#cfn-ec2-networkinsightsanalysis-explanation-cidrs)" : [ String, ... ],
  "[ClassicLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-explanation-classicloadbalancerlistener)" : AnalysisLoadBalancerListener,
  "[Component](#cfn-ec2-networkinsightsanalysis-explanation-component)" : AnalysisComponent,
  "[ComponentAccount](#cfn-ec2-networkinsightsanalysis-explanation-componentaccount)" : String,
  "[ComponentRegion](#cfn-ec2-networkinsightsanalysis-explanation-componentregion)" : String,
  "[CustomerGateway](#cfn-ec2-networkinsightsanalysis-explanation-customergateway)" : AnalysisComponent,
  "[Destination](#cfn-ec2-networkinsightsanalysis-explanation-destination)" : AnalysisComponent,
  "[DestinationVpc](#cfn-ec2-networkinsightsanalysis-explanation-destinationvpc)" : AnalysisComponent,
  "[Direction](#cfn-ec2-networkinsightsanalysis-explanation-direction)" : String,
  "[ElasticLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-explanation-elasticloadbalancerlistener)" : AnalysisComponent,
  "[ExplanationCode](#cfn-ec2-networkinsightsanalysis-explanation-explanationcode)" : String,
  "[IngressRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-ingressroutetable)" : AnalysisComponent,
  "[InternetGateway](#cfn-ec2-networkinsightsanalysis-explanation-internetgateway)" : AnalysisComponent,
  "[LoadBalancerArn](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancerarn)" : String,
  "[LoadBalancerListenerPort](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancerlistenerport)" : Integer,
  "[LoadBalancerTarget](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertarget)" : AnalysisLoadBalancerTarget,
  "[LoadBalancerTargetGroup](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroup)" : AnalysisComponent,
  "[LoadBalancerTargetGroups](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroups)" : [ AnalysisComponent, ... ],
  "[LoadBalancerTargetPort](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetport)" : Integer,
  "[MissingComponent](#cfn-ec2-networkinsightsanalysis-explanation-missingcomponent)" : String,
  "[NatGateway](#cfn-ec2-networkinsightsanalysis-explanation-natgateway)" : AnalysisComponent,
  "[NetworkInterface](#cfn-ec2-networkinsightsanalysis-explanation-networkinterface)" : AnalysisComponent,
  "[PacketField](#cfn-ec2-networkinsightsanalysis-explanation-packetfield)" : String,
  "[Port](#cfn-ec2-networkinsightsanalysis-explanation-port)" : Integer,
  "[PortRanges](#cfn-ec2-networkinsightsanalysis-explanation-portranges)" : [ PortRange, ... ],
  "[PrefixList](#cfn-ec2-networkinsightsanalysis-explanation-prefixlist)" : AnalysisComponent,
  "[Protocols](#cfn-ec2-networkinsightsanalysis-explanation-protocols)" : [ String, ... ],
  "[RouteTable](#cfn-ec2-networkinsightsanalysis-explanation-routetable)" : AnalysisComponent,
  "[RouteTableRoute](#cfn-ec2-networkinsightsanalysis-explanation-routetableroute)" : AnalysisRouteTableRoute,
  "[SecurityGroup](#cfn-ec2-networkinsightsanalysis-explanation-securitygroup)" : AnalysisComponent,
  "[SecurityGroupRule](#cfn-ec2-networkinsightsanalysis-explanation-securitygrouprule)" : AnalysisSecurityGroupRule,
  "[SecurityGroups](#cfn-ec2-networkinsightsanalysis-explanation-securitygroups)" : [ AnalysisComponent, ... ],
  "[SourceVpc](#cfn-ec2-networkinsightsanalysis-explanation-sourcevpc)" : AnalysisComponent,
  "[State](#cfn-ec2-networkinsightsanalysis-explanation-state)" : String,
  "[Subnet](#cfn-ec2-networkinsightsanalysis-explanation-subnet)" : AnalysisComponent,
  "[SubnetRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-subnetroutetable)" : AnalysisComponent,
  "[TransitGateway](#cfn-ec2-networkinsightsanalysis-explanation-transitgateway)" : AnalysisComponent,
  "[TransitGatewayAttachment](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayattachment)" : AnalysisComponent,
  "[TransitGatewayRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetable)" : AnalysisComponent,
  "[TransitGatewayRouteTableRoute](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetableroute)" : TransitGatewayRouteTableRoute,
  "[Vpc](#cfn-ec2-networkinsightsanalysis-explanation-vpc)" : AnalysisComponent,
  "[vpcEndpoint](#cfn-ec2-networkinsightsanalysis-explanation-vpcendpoint)" : AnalysisComponent,
  "[VpcPeeringConnection](#cfn-ec2-networkinsightsanalysis-explanation-vpcpeeringconnection)" : AnalysisComponent,
  "[VpnConnection](#cfn-ec2-networkinsightsanalysis-explanation-vpnconnection)" : AnalysisComponent,
  "[VpnGateway](#cfn-ec2-networkinsightsanalysis-explanation-vpngateway)" : AnalysisComponent
}
```

### YAML<a name="aws-properties-ec2-networkinsightsanalysis-explanation-syntax.yaml"></a>

```
  [Acl](#cfn-ec2-networkinsightsanalysis-explanation-acl):
    AnalysisComponent
  [AclRule](#cfn-ec2-networkinsightsanalysis-explanation-aclrule):
    AnalysisAclRule
  [Address](#cfn-ec2-networkinsightsanalysis-explanation-address): String
  [Addresses](#cfn-ec2-networkinsightsanalysis-explanation-addresses):
    - String
  [AttachedTo](#cfn-ec2-networkinsightsanalysis-explanation-attachedto):
    AnalysisComponent
  [AvailabilityZones](#cfn-ec2-networkinsightsanalysis-explanation-availabilityzones):
    - String
  [Cidrs](#cfn-ec2-networkinsightsanalysis-explanation-cidrs):
    - String
  [ClassicLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-explanation-classicloadbalancerlistener):
    AnalysisLoadBalancerListener
  [Component](#cfn-ec2-networkinsightsanalysis-explanation-component):
    AnalysisComponent
  [ComponentAccount](#cfn-ec2-networkinsightsanalysis-explanation-componentaccount): String
  [ComponentRegion](#cfn-ec2-networkinsightsanalysis-explanation-componentregion): String
  [CustomerGateway](#cfn-ec2-networkinsightsanalysis-explanation-customergateway):
    AnalysisComponent
  [Destination](#cfn-ec2-networkinsightsanalysis-explanation-destination):
    AnalysisComponent
  [DestinationVpc](#cfn-ec2-networkinsightsanalysis-explanation-destinationvpc):
    AnalysisComponent
  [Direction](#cfn-ec2-networkinsightsanalysis-explanation-direction): String
  [ElasticLoadBalancerListener](#cfn-ec2-networkinsightsanalysis-explanation-elasticloadbalancerlistener):
    AnalysisComponent
  [ExplanationCode](#cfn-ec2-networkinsightsanalysis-explanation-explanationcode): String
  [IngressRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-ingressroutetable):
    AnalysisComponent
  [InternetGateway](#cfn-ec2-networkinsightsanalysis-explanation-internetgateway):
    AnalysisComponent
  [LoadBalancerArn](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancerarn): String
  [LoadBalancerListenerPort](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancerlistenerport): Integer
  [LoadBalancerTarget](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertarget):
    AnalysisLoadBalancerTarget
  [LoadBalancerTargetGroup](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroup):
    AnalysisComponent
  [LoadBalancerTargetGroups](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroups):
    - AnalysisComponent
  [LoadBalancerTargetPort](#cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetport): Integer
  [MissingComponent](#cfn-ec2-networkinsightsanalysis-explanation-missingcomponent): String
  [NatGateway](#cfn-ec2-networkinsightsanalysis-explanation-natgateway):
    AnalysisComponent
  [NetworkInterface](#cfn-ec2-networkinsightsanalysis-explanation-networkinterface):
    AnalysisComponent
  [PacketField](#cfn-ec2-networkinsightsanalysis-explanation-packetfield): String
  [Port](#cfn-ec2-networkinsightsanalysis-explanation-port): Integer
  [PortRanges](#cfn-ec2-networkinsightsanalysis-explanation-portranges):
    - PortRange
  [PrefixList](#cfn-ec2-networkinsightsanalysis-explanation-prefixlist):
    AnalysisComponent
  [Protocols](#cfn-ec2-networkinsightsanalysis-explanation-protocols):
    - String
  [RouteTable](#cfn-ec2-networkinsightsanalysis-explanation-routetable):
    AnalysisComponent
  [RouteTableRoute](#cfn-ec2-networkinsightsanalysis-explanation-routetableroute):
    AnalysisRouteTableRoute
  [SecurityGroup](#cfn-ec2-networkinsightsanalysis-explanation-securitygroup):
    AnalysisComponent
  [SecurityGroupRule](#cfn-ec2-networkinsightsanalysis-explanation-securitygrouprule):
    AnalysisSecurityGroupRule
  [SecurityGroups](#cfn-ec2-networkinsightsanalysis-explanation-securitygroups):
    - AnalysisComponent
  [SourceVpc](#cfn-ec2-networkinsightsanalysis-explanation-sourcevpc):
    AnalysisComponent
  [State](#cfn-ec2-networkinsightsanalysis-explanation-state): String
  [Subnet](#cfn-ec2-networkinsightsanalysis-explanation-subnet):
    AnalysisComponent
  [SubnetRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-subnetroutetable):
    AnalysisComponent
  [TransitGateway](#cfn-ec2-networkinsightsanalysis-explanation-transitgateway):
    AnalysisComponent
  [TransitGatewayAttachment](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayattachment):
    AnalysisComponent
  [TransitGatewayRouteTable](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetable):
    AnalysisComponent
  [TransitGatewayRouteTableRoute](#cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetableroute):
    TransitGatewayRouteTableRoute
  [Vpc](#cfn-ec2-networkinsightsanalysis-explanation-vpc):
    AnalysisComponent
  [vpcEndpoint](#cfn-ec2-networkinsightsanalysis-explanation-vpcendpoint):
    AnalysisComponent
  [VpcPeeringConnection](#cfn-ec2-networkinsightsanalysis-explanation-vpcpeeringconnection):
    AnalysisComponent
  [VpnConnection](#cfn-ec2-networkinsightsanalysis-explanation-vpnconnection):
    AnalysisComponent
  [VpnGateway](#cfn-ec2-networkinsightsanalysis-explanation-vpngateway):
    AnalysisComponent
```

## Properties<a name="aws-properties-ec2-networkinsightsanalysis-explanation-properties"></a>

`Acl` <a name="cfn-ec2-networkinsightsanalysis-explanation-acl"></a>
The network ACL\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AclRule` <a name="cfn-ec2-networkinsightsanalysis-explanation-aclrule"></a>
The network ACL rule\.  
_Required_: No  
_Type_: [AnalysisAclRule](aws-properties-ec2-networkinsightsanalysis-analysisaclrule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Address` <a name="cfn-ec2-networkinsightsanalysis-explanation-address"></a>
The IPv4 address, in CIDR notation\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `15`  
_Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Addresses` <a name="cfn-ec2-networkinsightsanalysis-explanation-addresses"></a>
The IPv4 addresses, in CIDR notation\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AttachedTo` <a name="cfn-ec2-networkinsightsanalysis-explanation-attachedto"></a>
The resource to which the component is attached\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AvailabilityZones` <a name="cfn-ec2-networkinsightsanalysis-explanation-availabilityzones"></a>
The Availability Zones\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Cidrs` <a name="cfn-ec2-networkinsightsanalysis-explanation-cidrs"></a>
The CIDR ranges\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClassicLoadBalancerListener` <a name="cfn-ec2-networkinsightsanalysis-explanation-classicloadbalancerlistener"></a>
The listener for a Classic Load Balancer\.  
_Required_: No  
_Type_: [AnalysisLoadBalancerListener](aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Component` <a name="cfn-ec2-networkinsightsanalysis-explanation-component"></a>
The component\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComponentAccount` <a name="cfn-ec2-networkinsightsanalysis-explanation-componentaccount"></a>
The AWS account for the component\.  
_Required_: No  
_Type_: String  
_Pattern_: `\d{12}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComponentRegion` <a name="cfn-ec2-networkinsightsanalysis-explanation-componentregion"></a>
The Region for the component\.  
_Required_: No  
_Type_: String  
_Pattern_: `[a-z]{2}-[a-z]+-[1-9]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomerGateway` <a name="cfn-ec2-networkinsightsanalysis-explanation-customergateway"></a>
The customer gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Destination` <a name="cfn-ec2-networkinsightsanalysis-explanation-destination"></a>
The destination\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationVpc` <a name="cfn-ec2-networkinsightsanalysis-explanation-destinationvpc"></a>
The destination VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Direction` <a name="cfn-ec2-networkinsightsanalysis-explanation-direction"></a>
The direction\. The following are the possible values:

- egress
- ingress
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ElasticLoadBalancerListener` <a name="cfn-ec2-networkinsightsanalysis-explanation-elasticloadbalancerlistener"></a>
The load balancer listener\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExplanationCode` <a name="cfn-ec2-networkinsightsanalysis-explanation-explanationcode"></a>
The explanation code\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IngressRouteTable` <a name="cfn-ec2-networkinsightsanalysis-explanation-ingressroutetable"></a>
The route table\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InternetGateway` <a name="cfn-ec2-networkinsightsanalysis-explanation-internetgateway"></a>
The internet gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerArn` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancerarn"></a>
The Amazon Resource Name \(ARN\) of the load balancer\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1283`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerListenerPort` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancerlistenerport"></a>
The listener port of the load balancer\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerTarget` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancertarget"></a>
The target\.  
_Required_: No  
_Type_: [AnalysisLoadBalancerTarget](aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerTargetGroup` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroup"></a>
The target group\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerTargetGroups` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetgroups"></a>
The target groups\.  
_Required_: No  
_Type_: List of [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadBalancerTargetPort` <a name="cfn-ec2-networkinsightsanalysis-explanation-loadbalancertargetport"></a>
The target port\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MissingComponent` <a name="cfn-ec2-networkinsightsanalysis-explanation-missingcomponent"></a>
The missing component\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NatGateway` <a name="cfn-ec2-networkinsightsanalysis-explanation-natgateway"></a>
The NAT gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkInterface` <a name="cfn-ec2-networkinsightsanalysis-explanation-networkinterface"></a>
The network interface\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PacketField` <a name="cfn-ec2-networkinsightsanalysis-explanation-packetfield"></a>
The packet field\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-ec2-networkinsightsanalysis-explanation-port"></a>
The port\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortRanges` <a name="cfn-ec2-networkinsightsanalysis-explanation-portranges"></a>
The port ranges\.  
_Required_: No  
_Type_: List of [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrefixList` <a name="cfn-ec2-networkinsightsanalysis-explanation-prefixlist"></a>
The prefix list\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Protocols` <a name="cfn-ec2-networkinsightsanalysis-explanation-protocols"></a>
The protocols\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RouteTable` <a name="cfn-ec2-networkinsightsanalysis-explanation-routetable"></a>
The route table\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RouteTableRoute` <a name="cfn-ec2-networkinsightsanalysis-explanation-routetableroute"></a>
The route table route\.  
_Required_: No  
_Type_: [AnalysisRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityGroup` <a name="cfn-ec2-networkinsightsanalysis-explanation-securitygroup"></a>
The security group\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityGroupRule` <a name="cfn-ec2-networkinsightsanalysis-explanation-securitygrouprule"></a>
The security group rule\.  
_Required_: No  
_Type_: [AnalysisSecurityGroupRule](aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecurityGroups` <a name="cfn-ec2-networkinsightsanalysis-explanation-securitygroups"></a>
The security groups\.  
_Required_: No  
_Type_: List of [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceVpc` <a name="cfn-ec2-networkinsightsanalysis-explanation-sourcevpc"></a>
The source VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`State` <a name="cfn-ec2-networkinsightsanalysis-explanation-state"></a>
The state\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subnet` <a name="cfn-ec2-networkinsightsanalysis-explanation-subnet"></a>
The subnet\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetRouteTable` <a name="cfn-ec2-networkinsightsanalysis-explanation-subnetroutetable"></a>
The route table for the subnet\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGateway` <a name="cfn-ec2-networkinsightsanalysis-explanation-transitgateway"></a>
The transit gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGatewayAttachment` <a name="cfn-ec2-networkinsightsanalysis-explanation-transitgatewayattachment"></a>
The transit gateway attachment\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGatewayRouteTable` <a name="cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetable"></a>
The transit gateway route table\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransitGatewayRouteTableRoute` <a name="cfn-ec2-networkinsightsanalysis-explanation-transitgatewayroutetableroute"></a>
The transit gateway route table route\.  
_Required_: No  
_Type_: [TransitGatewayRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Vpc` <a name="cfn-ec2-networkinsightsanalysis-explanation-vpc"></a>
The component VPC\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`vpcEndpoint` <a name="cfn-ec2-networkinsightsanalysis-explanation-vpcendpoint"></a>
The VPC endpoint\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcPeeringConnection` <a name="cfn-ec2-networkinsightsanalysis-explanation-vpcpeeringconnection"></a>
The VPC peering connection\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpnConnection` <a name="cfn-ec2-networkinsightsanalysis-explanation-vpnconnection"></a>
The VPN connection\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpnGateway` <a name="cfn-ec2-networkinsightsanalysis-explanation-vpngateway"></a>
The VPN gateway\.  
_Required_: No  
_Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
