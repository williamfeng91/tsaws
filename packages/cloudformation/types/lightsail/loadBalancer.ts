/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface LightsailLoadBalancerProperties {
  /**
   * The IP address type of the load balancer.
   *
   * The possible values are `ipv4` for IPv4 only, and `dualstack` for both IPv4 and IPv6.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dualstack | ipv4`
   *
   * _Update requires_: Updates are not supported.
   */
  IpAddressType?: Value<string>;
  /**
   * The time period, in seconds, after which the load balancer session stickiness cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionStickinessLBCookieDurationSeconds?: Value<string>;
  /**
   * The name of the load balancer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: Updates are not supported.
   */
  LoadBalancerName: Value<string>;
  /**
   * The Lightsail instances to attach to the load balancer.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachedInstances?: List<Value<string>>;
  /**
   * The port that the load balancer uses to direct traffic to your Lightsail instances. For HTTP traffic, specify port `80`. For HTTPS traffic, specify port `443`.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: Updates are not supported.
   */
  InstancePort: Value<number>;
  /**
   * The path on the attached instance where the health check will be performed. If no path is specified, the load balancer tries to make a request to the default (root) page (`/index.html`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckPath?: Value<string>;
  /**
   * A Boolean value indicating whether session stickiness is enabled.
   *
   * Enable session stickiness (also known as _session affinity_) to bind a user's session to a specific instance. This ensures that all requests from the user during the session are sent to the same instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionStickinessEnabled?: Value<boolean>;
  /**
   * The name of the TLS security policy for the load balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TlsPolicyName?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::Lightsail::LoadBalancer` resource specifies a load balancer that can be used with Lightsail instances.
 *
 * **Note**
 *
 * You cannot attach a TLS certificate to a load balancer using the `AWS::Lightsail::LoadBalancer` resource type. Instead, use the `AWS::Lightsail::LoadBalancerTlsCertificate` resource type to create a certificate and attach it to a load balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancer.html}
 */
export interface LightsailLoadBalancerResource {
  Type: 'AWS::Lightsail::LoadBalancer';
  Properties: LightsailLoadBalancerProperties;
}
