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
 * The `Targets` property type specifies adding a target to a maintenance window target in AWS Systems Manager.
 *
 * `Targets` is a property of the [AWS::SSM::MaintenanceWindowTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtarget-targets.html}
 **/
export interface SSMMaintenanceWindowTargetTargets {
  /**
   * User-defined criteria that maps to `Key`. For example, if you specified `tag:ServerRole`, you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer`.
   *
   * Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * User-defined criteria for sending commands that target managed nodes that meet the criteria.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `163`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.:/=-@]*$|resource-groups:ResourceTypeFilters|resource-groups:Name`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface SSMMaintenanceWindowTargetProperties {
  /**
   * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OwnerInformation?: Value<string>;
  /**
   * A description for the target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the maintenance window to register the target with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^mw-[0-9a-f]{17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WindowId: Value<string>;
  /**
   * The type of target that is being registered with the maintenance window.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `INSTANCE | RESOURCE_GROUP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType: Value<string>;
  /**
   * The targets to register with the maintenance window. In other words, the instances to run commands on when the maintenance window runs.
   *
   * You must specify targets by using the `WindowTargetIds` parameter.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-ssm-maintenancewindowtarget-targets.md) of [Targets](aws-properties-ssm-maintenancewindowtarget-targets.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets: List<SSMMaintenanceWindowTargetTargets>;
  /**
   * The name for the maintenance window target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::SSM::MaintenanceWindowTarget` resource registers a target with a maintenance window for AWS Systems Manager. For more information, see [ RegisterTargetWithMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html) in the _AWS Systems Manager API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html}
 */
export interface SSMMaintenanceWindowTargetResource {
  Type: 'AWS::SSM::MaintenanceWindowTarget';
  Properties: SSMMaintenanceWindowTargetProperties;
}
