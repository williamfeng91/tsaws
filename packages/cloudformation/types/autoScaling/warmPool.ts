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
 * A structure that specifies an instance reuse policy for the `InstanceReusePolicy` property of the [AWS::AutoScaling::WarmPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html) resource.
 *
 * For more information, see [Warm pools for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-warmpool-instancereusepolicy.html}
 **/
export interface AutoScalingWarmPoolInstanceReusePolicy {
  /**
   * Specifies whether instances in the Auto Scaling group can be returned to the warm pool on scale in.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReuseOnScaleIn?: Value<boolean>;
}
export interface AutoScalingWarmPoolProperties {
  /**
   * Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinSize?: Value<number>;
  /**
   * Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except `Terminated` for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity.
   *
   * If a value for `MaxGroupPreparedCapacity` is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for `MaxGroupPreparedCapacity`, Amazon EC2 Auto Scaling uses the difference between the `MaxGroupPreparedCapacity` and the desired capacity instead.
   *
   * The size of the warm pool is dynamic. Only when `MaxGroupPreparedCapacity` and `MinSize` are set to the same value does the warm pool have an absolute size.
   *
   * If the desired capacity of the Auto Scaling group is higher than the `MaxGroupPreparedCapacity`, the capacity of the warm pool is 0, unless you specify a value for `MinSize`. To remove a value that you previously set, include the property but specify -1 for the value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxGroupPreparedCapacity?: Value<number>;
  /**
   * The name of the Auto Scaling group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoScalingGroupName: Value<string>;
  /**
   * Sets the instance state to transition to after the lifecycle actions are complete. Default is `Stopped`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Hibernated | Running | Stopped`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PoolState?: Value<string>;
  /**
   * Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.
   *
   * _Required_: No
   *
   * _Type_: [InstanceReusePolicy](aws-properties-autoscaling-warmpool-instancereusepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceReusePolicy?: AutoScalingWarmPoolInstanceReusePolicy;
}

/**
 * The `AWS::AutoScaling::WarmPool` resource creates a pool of pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new desired capacity.
 *
 * When you create a warm pool, you can define a minimum size. When your Auto Scaling group scales out and the size of the warm pool shrinks, Amazon EC2 Auto Scaling launches new instances into the warm pool to maintain its minimum size.
 *
 * For more information, see [Warm pools for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * **Note**
 *
 * CloudFormation supports the `UpdatePolicy` attribute for Auto Scaling groups. During an update, if `UpdatePolicy` is set to `AutoScalingRollingUpdate`, CloudFormation replaces `InService` instances only. Instances in the warm pool are not replaced. The difference in which instances are replaced can potentially result in different instance configurations after the stack update completes. If `UpdatePolicy` is set to `AutoScalingReplacingUpdate`, you do not encounter this issue because CloudFormation replaces both the Auto Scaling group and the warm pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html}
 */
export interface AutoScalingWarmPoolResource {
  Type: 'AWS::AutoScaling::WarmPool';
  Properties: AutoScalingWarmPoolProperties;
}
