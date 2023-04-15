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
 * The `CapacityProviderStrategy` property specifies the details of the default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html}
 **/
export interface ECSClusterCapacityProviderAssociationsCapacityProviderStrategy {
  /**
   * The short name of the capacity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProvider: Value<string>;
  /**
   * The _base_ value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a _base_ defined. If no value is specified, the default value of `0` is used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Base?: Value<number>;
  /**
   * The _weight_ value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
   *
   * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` will not be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0`, any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
   *
   * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1`, then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for _capacityProviderA_ and a weight of `4` for _capacityProviderB_, then for every one task that is run using _capacityProviderA_, four tasks would use _capacityProviderB_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
}
export interface ECSClusterCapacityProviderAssociationsProperties {
  /**
   * The default capacity provider strategy to associate with the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CapacityProviderStrategy](aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultCapacityProviderStrategy: List<ECSClusterCapacityProviderAssociationsCapacityProviderStrategy>;
  /**
   * The capacity providers to associate with the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProviders: List<Value<string>>;
  /**
   * The cluster the capacity provider association is the target of.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Cluster: Value<string>;
}

/**
 * The `AWS::ECS::ClusterCapacityProviderAssociations` resource associates one or more capacity providers and a default capacity provider strategy with a cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html}
 */
export interface ECSClusterCapacityProviderAssociationsResource {
  Type: 'AWS::ECS::ClusterCapacityProviderAssociations';
  Properties: ECSClusterCapacityProviderAssociationsProperties;
}
