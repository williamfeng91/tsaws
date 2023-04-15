/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The codes to use when checking for a successful response from a target for health checks.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-matcher.html}
 **/
export interface VpcLatticeTargetGroupMatcher {
  /**
   * The HTTP code to use when checking for a successful response from a target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpCode: Value<string>;
}

/**
 * The health check configuration of a target group. Health check configurations aren't used for `LAMBDA` and `ALB` target groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-healthcheckconfig.html}
 **/
export interface VpcLatticeTargetGroupHealthCheckConfig {
  /**
   * The destination for health checks on the targets. If the protocol version is `HTTP/1.1` or `HTTP/2`, specify a valid URI (for example, `/path?query`). The default path is `/`. Health checks are not supported if the protocol version is `gRPC`, however, you can choose `HTTP/1.1` or `HTTP/2` and specify a valid URI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckIntervalSeconds?: Value<number>;
  /**
   * The codes to use when checking for a successful response from a target. These are called _Success codes_ in the console.
   *
   * _Required_: No
   *
   * _Type_: [Matcher](aws-properties-vpclattice-targetgroup-matcher.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Matcher?: VpcLatticeTargetGroupMatcher;
  /**
   * The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthyThresholdCount?: Value<number>;
  /**
   * The port used when performing health checks on targets. The default setting is the port that a target receives traffic on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * Indicates whether health checking is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The protocol used when performing health checks on targets. The possible protocols are `HTTP` and `HTTPS`. The default is `HTTP`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProtocolVersion?: Value<string>;
  /**
   * The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnhealthyThresholdCount?: Value<number>;
  /**
   * The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckTimeoutSeconds?: Value<number>;
}

/**
 * Describes a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-target.html}
 **/
export interface VpcLatticeTargetGroupTarget {
  /**
   * The port on which the target is listening. For HTTP, the default is `80`. For HTTPS, the default is `443`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The ID of the target. If the target type of the target group is `INSTANCE`, this is an instance ID. If the target type is `IP` , this is an IP address. If the target type is `LAMBDA`, this is the ARN of the Lambda function. If the target type is `ALB`, this is the ARN of the Application Load Balancer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
}

/**
 * Describes the configuration of a target group. Lambda functions don't support target group configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-targetgroup-targetgroupconfig.html}
 **/
export interface VpcLatticeTargetGroupTargetGroupConfig {
  /**
   * The type of IP address used for the target group. The possible values are `ipv4` and `ipv6`. This is an optional parameter. If not specified, the IP address type defaults to `ipv4`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IpAddressType?: Value<string>;
  /**
   * The port on which the targets are listening. For HTTP, the default is `80`. For HTTPS, the default is `443`
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Port: Value<number>;
  /**
   * The health check configuration.
   *
   * _Required_: No
   *
   * _Type_: [HealthCheckConfig](aws-properties-vpclattice-targetgroup-healthcheckconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheck?: VpcLatticeTargetGroupHealthCheckConfig;
  /**
   * The ID of the VPC.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcIdentifier: Value<string>;
  /**
   * The protocol to use for routing traffic to the targets. Default is the protocol of a target group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Protocol: Value<string>;
  /**
   * The protocol version. Default value is `HTTP1`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProtocolVersion?: Value<string>;
}
export interface VpcLatticeTargetGroupProperties {
  /**
   * The type of target group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The target group configuration. If `type` is set to `LAMBDA`, this parameter doesn't apply.
   *
   * _Required_: No
   *
   * _Type_: [TargetGroupConfig](aws-properties-vpclattice-targetgroup-targetgroupconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Config?: VpcLatticeTargetGroupTargetGroupConfig;
  /**
   * Describes a target.
   *
   * _Required_: No
   *
   * _Type_: List of [Target](aws-properties-vpclattice-targetgroup-target.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets?: List<VpcLatticeTargetGroupTarget>;
  /**
   * The tags for the target group.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * If you don't specify a name, CloudFormation generates one. However, if you specify a name, and later want to replace the resource, you must specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 *
 * For more information, see [Target groups](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html) in the _Amazon VPC Lattice User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html}
 */
export interface VpcLatticeTargetGroupResource {
  Type: 'AWS::VpcLattice::TargetGroup';
  Properties: VpcLatticeTargetGroupProperties;
}
