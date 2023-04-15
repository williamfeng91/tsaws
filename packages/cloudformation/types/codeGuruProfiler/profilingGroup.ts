/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `AgentPermissions` property type specifies Property description not available. for an [AWS::CodeGuruProfiler::ProfilingGroup](aws-resource-codeguruprofiler-profilinggroup.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-agentpermissions.html}
 **/
export interface CodeGuruProfilerProfilingGroupAgentPermissions {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Principals: List<Value<string>>;
}

/**
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html}
 **/
export interface CodeGuruProfilerProfilingGroupChannel {
  /**
   * The channel URI.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  channelUri: Value<string>;
  /**
   * The channel ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  channelId?: Value<string>;
}
export interface CodeGuruProfilerProfilingGroupProperties {
  /**
   * Adds anomaly notifications for a profiling group.
   *
   * _Required_: No
   *
   * _Type_: List of [Channel](aws-properties-codeguruprofiler-profilinggroup-channel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnomalyDetectionNotificationConfiguration?: List<CodeGuruProfilerProfilingGroupChannel>;
  /**
   * The agent permissions attached to this profiling group. This action group grants `ConfigureAgent` and `PostAgentProfile` permissions to perform actions required by the profiling agent. The Json consists of key `Principals`.
   *
   * _Principals_: A list of string ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not supported in the ARNs. You are allowed to provide up to 50 ARNs. An empty list is not permitted. This is a required key.
   *
   * For more information, see [Resource-based policies in CodeGuru Profiler](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html) in the _Amazon CodeGuru Profiler user guide_, [ConfigureAgent](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html), and [PostAgentProfile](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html).
   *
   * _Required_: No
   *
   * _Type_: [AgentPermissions](aws-properties-codeguruprofiler-profilinggroup-agentpermissions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AgentPermissions?: CodeGuruProfilerProfilingGroupAgentPermissions;
  /**
   * The compute platform of the profiling group. Use `AWSLambda` if your application runs on AWS Lambda. Use `Default` if your application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, `Default` is used. This property is immutable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComputePlatform?: Value<string>;
  /**
   * The name of the profiling group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProfilingGroupName: Value<string>;
  /**
   * A list of tags to add to the created profiling group.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a profiling group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html}
 */
export interface CodeGuruProfilerProfilingGroupResource {
  Type: 'AWS::CodeGuruProfiler::ProfilingGroup';
  Properties: CodeGuruProfilerProfilingGroupProperties;
}
