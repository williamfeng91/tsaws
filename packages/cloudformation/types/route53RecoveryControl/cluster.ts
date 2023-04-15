/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A cluster endpoint. You specify one of the five cluster endpoints, which consists of an endpoint URL and an AWS Region, when you want to get or update a routing control state in the cluster.
 *
 * For more information, see [Code examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html}
 **/
export interface Route53RecoveryControlClusterClusterEndpoint {
  /**
   * A cluster endpoint URL for one of the five redundant clusters that you specify to set or retrieve a routing control state.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: Value<string>;
  /**
   * The AWS Region for a cluster endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region?: Value<string>;
}
export interface Route53RecoveryControlClusterProperties {
  /**
   * The value for a tag.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
  /**
   * Name of the cluster. You can use any non-white space character in the name except the following: & > < ' (single quote) " (double quote) ; (semicolon).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a cluster in Amazon Route 53 Application Recovery Controller. A cluster is a set of redundant Regional endpoints that you can run Route 53 ARC API calls against to update or get the state of one or more routing controls.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html}
 */
export interface Route53RecoveryControlClusterResource {
  Type: 'AWS::Route53RecoveryControl::Cluster';
  Properties: Route53RecoveryControlClusterProperties;
}
