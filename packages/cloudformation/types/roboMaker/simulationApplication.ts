/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about a simulation software suite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-simulationsoftwaresuite.html}
 **/
export interface RoboMakerSimulationApplicationSimulationSoftwareSuite {
  /**
   * The version of the simulation software suite. Not applicable for `SimulationRuntime`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `7|9|11|Kinetic|Melodic|Dashing|Foxy`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The name of the simulation software suite. `SimulationRuntime` is the only supported value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Gazebo | RosbagPlay | SimulationRuntime`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about a robot software suite.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-robotsoftwaresuite.html}
 **/
export interface RoboMakerSimulationApplicationRobotSoftwareSuite {
  /**
   * The version of the robot software suite. Not applicable for General software suite.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Dashing | Foxy | Kinetic | Melodic`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The name of the robot software suite. `General` is the only supported value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `General | ROS | ROS2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about a source configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-sourceconfig.html}
 **/
export interface RoboMakerSimulationApplicationSourceConfig {
  /**
   * The Amazon S3 bucket name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][a-z0-9.-]*[a-z0-9]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The target processor architecture for the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ARM64 | ARMHF | X86_64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Architecture: Value<string>;
  /**
   * The s3 object key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Key: Value<string>;
}

/**
 * Information about a rendering engine.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-robomaker-simulationapplication-renderingengine.html}
 **/
export interface RoboMakerSimulationApplicationRenderingEngine {
  /**
   * The version of the rendering engine.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4`
   *
   * _Pattern_: `1.x`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version: Value<string>;
  /**
   * The name of the rendering engine.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `OGRE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface RoboMakerSimulationApplicationProperties {
  /**
   * The rendering engine for the simulation application.
   *
   * _Required_: No
   *
   * _Type_: [RenderingEngine](aws-properties-robomaker-simulationapplication-renderingengine.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RenderingEngine?: RoboMakerSimulationApplicationRenderingEngine;
  /**
   * The simulation software suite used by the simulation application.
   *
   * _Required_: Yes
   *
   * _Type_: [SimulationSoftwareSuite](aws-properties-robomaker-simulationapplication-simulationsoftwaresuite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimulationSoftwareSuite: RoboMakerSimulationApplicationSimulationSoftwareSuite;
  /**
   * The current revision id.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentRevisionId?: Value<string>;
  /**
   * The environment of the simulation application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: Value<string>;
  /**
   * The robot software suite used by the simulation application.
   *
   * _Required_: Yes
   *
   * _Type_: [RobotSoftwareSuite](aws-properties-robomaker-simulationapplication-robotsoftwaresuite.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RobotSoftwareSuite: RoboMakerSimulationApplicationRobotSoftwareSuite;
  /**
   * The sources of the simulation application.
   *
   * _Required_: No
   *
   * _Type_: List of [SourceConfig](aws-properties-robomaker-simulationapplication-sourceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sources?: List<RoboMakerSimulationApplicationSourceConfig>;
  /**
   * A map that contains tag keys and tag values that are attached to the simulation application.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the simulation application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::RoboMaker::SimulationApplication` resource creates an AWS RoboMaker simulation application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html}
 */
export interface RoboMakerSimulationApplicationResource {
  Type: 'AWS::RoboMaker::SimulationApplication';
  Properties: RoboMakerSimulationApplicationProperties;
}
