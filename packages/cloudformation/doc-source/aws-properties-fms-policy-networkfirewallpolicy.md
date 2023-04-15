# AWS::FMS::Policy NetworkFirewallPolicy<a name="aws-properties-fms-policy-networkfirewallpolicy"></a>

Configures the firewall policy deployment model of AWS Network Firewall\. For information about Network Firewall deployment models, see [AWS Network Firewall example architectures with routing](https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html) in the _Network Firewall Developer Guide_\.

## Syntax<a name="aws-properties-fms-policy-networkfirewallpolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-fms-policy-networkfirewallpolicy-syntax.json"></a>

```
{
  "[FirewallDeploymentModel](#cfn-fms-policy-networkfirewallpolicy-firewalldeploymentmodel)" : String
}
```

### YAML<a name="aws-properties-fms-policy-networkfirewallpolicy-syntax.yaml"></a>

```
  [FirewallDeploymentModel](#cfn-fms-policy-networkfirewallpolicy-firewalldeploymentmodel): String
```

## Properties<a name="aws-properties-fms-policy-networkfirewallpolicy-properties"></a>

`FirewallDeploymentModel` <a name="cfn-fms-policy-networkfirewallpolicy-firewalldeploymentmodel"></a>
Defines the deployment model to use for the firewall policy\. To use a distributed model, set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CENTRALIZED | DISTRIBUTED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
