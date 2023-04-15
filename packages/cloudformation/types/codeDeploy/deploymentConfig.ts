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
 * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html}
 **/
export interface CodeDeployDeploymentConfigTimeBasedCanary {
  /**
   * The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CanaryPercentage: Value<number>;
  /**
   * The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CanaryInterval: Value<number>;
}

/**
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html}
 **/
export interface CodeDeployDeploymentConfigTrafficRoutingConfig {
  /**
   * The type of traffic shifting (`TimeBasedCanary` or `TimeBasedLinear`) used by a deployment configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AllAtOnce | TimeBasedCanary | TimeBasedLinear`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or Amazon ECS task sets are specified in the deployment's AppSpec file.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedLinear](aws-properties-codedeploy-deploymentconfig-timebasedlinear.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeBasedLinear?: CodeDeployDeploymentConfigTimeBasedLinear;
  /**
   * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
   *
   * _Required_: No
   *
   * _Type_: [TimeBasedCanary](aws-properties-codedeploy-deploymentconfig-timebasedcanary.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeBasedCanary?: CodeDeployDeploymentConfigTimeBasedCanary;
}

/**
 * `MinimumHealthyHosts` is a property of the [DeploymentConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html) resource that defines how many instances must remain healthy during an AWS CodeDeploy deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html}
 **/
export interface CodeDeployDeploymentConfigMinimumHealthyHosts {
  /**
   * The minimum healthy instance type:
   */
  Type: Value<string>;
  /**
   * The minimum healthy instance value.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<number>;
}

/**
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html}
 **/
export interface CodeDeployDeploymentConfigTimeBasedLinear {
  /**
   * The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LinearInterval: Value<number>;
  /**
   * The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LinearPercentage: Value<number>;
}
export interface CodeDeployDeploymentConfigProperties {
  /**
   * The destination platform type for the deployment (`Lambda`, `Server`, or `ECS`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ECS | Lambda | Server`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComputePlatform?: Value<string>;
  /**
   * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeploymentConfigName?: Value<string>;
  /**
   * The configuration that specifies how the deployment traffic is routed.
   *
   * _Required_: No
   *
   * _Type_: [TrafficRoutingConfig](aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TrafficRoutingConfig?: CodeDeployDeploymentConfigTrafficRoutingConfig;
  /**
   * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
   *
   * The type parameter takes either of the following values:
   */
  MinimumHealthyHosts?: CodeDeployDeploymentConfigMinimumHealthyHosts;
}

/**
 * The `AWS::CodeDeploy::DeploymentConfig` resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment. The deployment configuration specifies, through the use of a `MinimumHealthyHosts` value, the number or percentage of instances that must remain available at any time during a deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html}
 */
export interface CodeDeployDeploymentConfigResource {
  Type: 'AWS::CodeDeploy::DeploymentConfig';
  Properties: CodeDeployDeploymentConfigProperties;
}
