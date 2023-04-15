/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface Route53RecoveryControlRoutingControlProperties {
  /**
   * The Amazon Resource Name (ARN) of the cluster that hosts the routing control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ControlPanelArn?: Value<string>;
  /**
   * The name of the routing control. You can use any non-white space character in the name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a routing control in Amazon Route 53 Application Recovery Controller. Routing control states are maintained on the highly reliable cluster data plane.
 *
 * To get or update the state of the routing control, you must specify a cluster endpoint, which is an endpoint URL and an AWS Region. For more information, see [Code examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html}
 */
export interface Route53RecoveryControlRoutingControlResource {
  Type: 'AWS::Route53RecoveryControl::RoutingControl';
  Properties: Route53RecoveryControlRoutingControlProperties;
}
