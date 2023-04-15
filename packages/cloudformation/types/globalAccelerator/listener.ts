/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * A complex type for a range of ports for a listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html}
 **/
export interface GlobalAcceleratorListenerPortRange {
  /**
   * The first port in the range of ports, inclusive.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromPort: Value<number>;
  /**
   * The last port in the range of ports, inclusive.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ToPort: Value<number>;
}
export interface GlobalAcceleratorListenerProperties {
  /**
   * The list of port ranges for the connections from clients to the accelerator.
   *
   * _Required_: Yes
   *
   * _Type_: List of [PortRange](aws-properties-globalaccelerator-listener-portrange.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRanges: List<GlobalAcceleratorListenerPortRange>;
  /**
   * The Amazon Resource Name (ARN) of your accelerator.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorArn: Value<string>;
  /**
   * The protocol for the connections from clients to the accelerator.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `TCP | UDP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
  /**
   * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Client affinity gives you control over whether to always route each client to the same specific endpoint.
   *
   * AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is `NONE`, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.
   *
   * If you want a given client to always be routed to the same endpoint, set client affinity to `SOURCE_IP` instead. When you use the `SOURCE_IP` setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.
   *
   * The default value is `NONE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | SOURCE_IP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientAffinity?: Value<string>;
}

/**
 * The `AWS::GlobalAccelerator::Listener` resource is a Global Accelerator resource type that contains information about how you create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html}
 */
export interface GlobalAcceleratorListenerResource {
  Type: 'AWS::GlobalAccelerator::Listener';
  Properties: GlobalAcceleratorListenerProperties;
}
