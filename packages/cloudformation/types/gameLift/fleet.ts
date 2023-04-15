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
 * A remote location where a multi-location fleet can deploy game servers for game hosting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationconfiguration.html}
 **/
export interface GameLiftFleetLocationConfiguration {
  /**
   * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
   *
   * **Related actions**
   *
   * [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) | [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html) | [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
   *
   * _Required_: No
   *
   * _Type_: [LocationCapacity](aws-properties-gamelift-fleet-locationcapacity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocationCapacity?: GameLiftFleetLocationCapacity;
  /**
   * An AWS Region code, such as `us-west-2`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[A-Za-z0-9-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location: Value<string>;
}

/**
 * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-ippermission.html}
 **/
export interface GameLiftFleetIpPermission {
  /**
   * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "`000.000.000.000/[subnet mask]`" or optionally the shortened version "`0.0.0.0/[subnet mask]`".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[^s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpRange: Value<string>;
  /**
   * A starting value for a range of allowed port numbers.
   *
   * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   *
   * For fleets using Windows builds, only ports `1026-60000` are valid.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `60000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FromPort: Value<number>;
  /**
   * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   *
   * For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   *
   * For fleets using Windows builds, only ports `1026-60000` are valid.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `60000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ToPort: Value<number>;
  /**
   * The network communication protocol used by the fleet.
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
}

/**
 * Amazon GameLift Anywhere configuration options for your Anywhere fleets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-anywhereconfiguration.html}
 **/
export interface GameLiftFleetAnywhereConfiguration {
  /**
   * The cost to run your fleet per hour. Amazon GameLift uses the provided cost of your fleet to balance usage in queues. For more information about queues, see [Setting up queues](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html) in the _Amazon GameLift Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `11`
   *
   * _Pattern_: `^d{1,5}(?:.d{1,5})?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cost: Value<string>;
}

/**
 * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
 *
 * **Related actions**
 *
 * [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) | [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html) | [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-locationcapacity.html}
 **/
export interface GameLiftFleetLocationCapacity {
  /**
   * The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinSize: Value<number>;
  /**
   * The number of Amazon EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredEC2Instances: Value<number>;
  /**
   * The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSize: Value<number>;
}

/**
 * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the [GameLift Server SDK](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html) operation `GetInstanceCertificate`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-certificateconfiguration.html}
 **/
export interface GameLiftFleetCertificateConfiguration {
  /**
   * Indicates whether a TLS/SSL certificate is generated for a fleet.
   *
   * Valid values include:
   */
  CertificateType: Value<string>;
}

/**
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-serverprocess.html}
 **/
export interface GameLiftFleetServerProcess {
  /**
   * The number of server processes using this configuration that run concurrently on each instance.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConcurrentExecutions: Value<number>;
  /**
   * An optional list of parameters to pass to the server executable or Realtime script on launch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[A-Za-z0-9_:.+/- =@;{},?'[]"]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: Value<string>;
  /**
   * The location of a game build executable or the Realtime script file that contains the `Init()` function. Game builds and Realtime scripts are installed on instances at the root:
   */
  LaunchPath: Value<string>;
}

/**
 * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
 *
 * The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId`) has created fewer than 10 game sessions in the past 60 minutes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html}
 **/
export interface GameLiftFleetResourceCreationLimitPolicy {
  /**
   * The time span used in evaluating the resource creation limit policy.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyPeriodInMinutes?: Value<number>;
  /**
   * A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
   *
   * The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId`) has created fewer than game session limit in the specified time period.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NewGameSessionsPerCreator?: Value<number>;
}

/**
 * A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration.
 *
 * A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the `ConcurrentExecutions` parameter for each ServerProcess. Learn more about [ Running Multiple Processes on a Fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-fleet-runtimeconfiguration.html}
 **/
export interface GameLiftFleetRuntimeConfiguration {
  /**
   * A collection of server process configurations that identify what server processes to run on each instance in a fleet.
   *
   * _Required_: No
   *
   * _Type_: List of [ServerProcess](aws-properties-gamelift-fleet-serverprocess.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerProcesses?: List<GameLiftFleetServerProcess>;
  /**
   * The number of game sessions in status `ACTIVATING` to allow on an instance. This setting limits the instance resources that can be used for new game activations at any one time.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrentGameSessionActivations?: Value<number>;
  /**
   * The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players. During this time, the game session is in status `ACTIVATING`. If the game session does not become active before the timeout, it is ended and the game session status is changed to `TERMINATED`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GameSessionActivationTimeoutSeconds?: Value<number>;
}
export interface GameLiftFleetProperties {
  /**
   * A description for the fleet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the AWS Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerVpcId?: Value<string>;
  /**
   * Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to `ON_DEMAND`. Learn more about when to use [ On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). This property cannot be changed after the fleet is created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ON_DEMAND | SPOT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FleetType?: Value<string>;
  /**
   * The allowed IP address ranges and port settings that allow inbound traffic to access game sessions on this fleet. If the fleet is hosting a custom game build, this property must be set before players can connect to game sessions. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges.
   *
   * _Required_: No
   *
   * _Type_: List of [IpPermission](aws-properties-gamelift-fleet-ippermission.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EC2InboundPermissions?: List<GameLiftFleetIpPermission>;
  /**
   * A set of remote locations to deploy additional instances to and manage as part of the fleet. This parameter can only be used when creating fleets in AWS Regions that support multiple locations. You can add any Amazon GameLift-supported AWS Region as a remote location, in the form of an AWS Region code such as `us-west-2`. To create a fleet with instances in the home Region only, don't use this parameter.
   *
   * To use this parameter, Amazon GameLift requires you to use your home location in the request.
   *
   * _Required_: No
   *
   * _Type_: List of [LocationConfiguration](aws-properties-gamelift-fleet-locationconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Locations?: List<GameLiftFleetLocationConfiguration>;
  /**
   * The status of termination protection for active game sessions on the fleet. By default, this property is set to `NoProtection`.
   */
  NewGameSessionProtectionPolicy?: Value<string>;
  /**
   * The unique identifier for a Realtime configuration script to be deployed on fleet instances. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift prior to creating the fleet. This fleet property cannot be changed later.
   *
   * You can't use the `!Ref` command to reference a script created with a CloudFormation template for the fleet property `ScriptId`. Instead, use `Fn::GetAtt Script.Arn` or `Fn::GetAtt Script.Id` to retrieve either of these properties as input for `ScriptId`. Alternatively, enter a `ScriptId` string manually.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Pattern_: `^script-S+|^arn:.*:script/script-S+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScriptId?: Value<string>;
  /**
   * The type of compute resource used to host your game servers. You can use your own compute resources with Amazon GameLift Anywhere or use Amazon EC2 instances with managed Amazon GameLift.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ANYWHERE | EC2`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComputeType?: Value<string>;
  /**
   * The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSize?: Value<number>;
  /**
   * Instructions for how to launch and maintain server processes on instances in the fleet. The runtime configuration defines one or more server process configurations, each identifying a build executable or Realtime script file and the number of processes of that type to run concurrently.
   *
   * The `RuntimeConfiguration` parameter is required unless the fleet is being configured using the older parameters `ServerLaunchPath` and `ServerLaunchParameters`, which are still supported for backward compatibility.
   *
   * _Required_: Conditional
   *
   * _Type_: [RuntimeConfiguration](aws-properties-gamelift-fleet-runtimeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeConfiguration?: GameLiftFleetRuntimeConfiguration;
  /**
   * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0.
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
   * Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the AWS account that owns the VPC. You can find your account ID in the AWS Management Console under account settings.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PeerVpcAwsAccountId?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AnywhereConfiguration](aws-properties-gamelift-fleet-anywhereconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnywhereConfiguration?: GameLiftFleetAnywhereConfiguration;
  /**
   * A unique identifier for an IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN by using the [IAM dashboard](https://console.aws.amazon.com/iam/) in the AWS Management Console. Learn more about using on-box credentials for your game servers at [ Access external resources from a game server](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This property cannot be changed after the fleet is created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceRoleARN?: Value<string>;
  /**
   * The name of an AWS CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricGroups?: List<Value<string>>;
  /**
   * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a `READY` status. This fleet setting cannot be changed once the fleet is created.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Pattern_: `^build-S+|^arn:.*:build/build-S+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BuildId?: Value<string>;
  /**
   * A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
   *
   * _Required_: No
   *
   * _Type_: [ResourceCreationLimitPolicy](aws-properties-gamelift-fleet-resourcecreationlimitpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceCreationLimitPolicy?: GameLiftFleetResourceCreationLimitPolicy;
  /**
   * The Amazon GameLift-supported Amazon EC2 instance type to use for all fleet instances. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](http://aws.amazon.com/ec2/instance-types/) for detailed descriptions of Amazon EC2 instance types.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `c3.2xlarge | c3.4xlarge | c3.8xlarge | c3.large | c3.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c4.large | c4.xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.large | c5.xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.large | c5a.xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.large | c5d.xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.2xlarge | c6a.4xlarge | c6a.8xlarge | c6a.large | c6a.xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.2xlarge | c6i.4xlarge | c6i.8xlarge | c6i.large | c6i.xlarge | m3.2xlarge | m3.large | m3.medium | m3.xlarge | m4.10xlarge | m4.2xlarge | m4.4xlarge | m4.large | m4.xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.large | m5.xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.large | m5a.xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r3.large | r3.xlarge | r4.16xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.large | r4.xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.large | r5.xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.large | r5a.xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.large | r5d.xlarge | t2.large | t2.medium | t2.micro | t2.small`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EC2InstanceType?: Value<string>;
  /**
   * Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift. By default, the `CertificateConfiguration` is `DISABLED`. You can't change this property after you create the fleet.
   *
   * AWS Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.
   *
   * ACM isn't available in all AWS regions. A fleet creation request with certificate generation enabled in an unsupported Region, fails with a 4xx error. For more information about the supported Regions, see [Supported Regions](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html) in the _ AWS Certificate Manager User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CertificateConfiguration](aws-properties-gamelift-fleet-certificateconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateConfiguration?: GameLiftFleetCertificateConfiguration;
  /**
   * The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredEC2Instances?: Value<number>;
  LogPaths?: List<Value<string>>;
  ServerLaunchParameters?: Value<string>;
  ServerLaunchPath?: Value<string>;
}

/**
 * The `AWS::GameLift::Fleet` resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 instances, each of which can host multiple game sessions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html}
 */
export interface GameLiftFleetResource {
  Type: 'AWS::GameLift::Fleet';
  Properties: GameLiftFleetProperties;
}
