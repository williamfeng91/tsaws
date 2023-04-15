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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Details about the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the _ AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html}
 **/
export interface BatchComputeEnvironmentComputeResources {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a `SPOT` compute environment. This role is required if the allocation strategy set to `BEST_FIT` or if the allocation strategy isn't specified. For more information, see [Amazon EC2 spot fleet role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * To tag your Spot Instances on creation, the Spot Fleet IAM role specified here must use the newer **AmazonEC2SpotFleetTaggingRole** managed policy. The previously recommended **AmazonEC2SpotFleetRole** managed policy doesn't have the required permissions to tag Spot Instances. For more information, see [Spot instances not tagged on creation](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#spot-instance-no-tag) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SpotIamFleetRole?: Value<string>;
  /**
   * The maximum number of Amazon EC2 vCPUs that an environment can reach.
   *
   * With both `BEST_FIT_PROGRESSIVE` and `SPOT_CAPACITY_OPTIMIZED` allocation strategies using On-Demand or Spot Instances, and the `BEST_FIT` strategy using Spot Instances, AWS Batch might need to exceed `maxvCpus` to meet your capacity requirements. In this event, AWS Batch never exceeds `maxvCpus` by more than a single instance. That is, no more than a single instance from among those specified in your compute environment.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxvCpus: Value<number>;
  /**
   * Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If `Ec2Configuration` isn't specified, the default is `ECS_AL2`.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_. To remove the EC2 configuration and any custom AMI ID specified in `imageIdOverride`, set this value to an empty string.
   *
   * One or two values can be provided.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: List of [Ec2ConfigurationObject](aws-properties-batch-computeenvironment-ec2configurationobject.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Ec2Configuration?: List<BatchComputeEnvironmentEc2ConfigurationObject>;
  /**
   * The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, the Spot price must be less than 20% of the current On-Demand price for that Amazon EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. For most use cases, we recommend leaving this field empty.
   *
   * When updating a compute environment, changing the bid percentage requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  BidPercentage?: Value<number>;
  /**
   * The Amazon EC2 security groups that are associated with instances launched in the compute environment. This parameter is required for Fargate compute resources, where it can contain up to 5 security groups. For Fargate compute resources, providing an empty list is handled as if this parameter wasn't specified and no change is made. For EC2 compute resources, providing an empty list removes the security groups from the compute resource.
   *
   * When updating a compute environment, changing the EC2 security groups requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The allocation strategy to use for the compute resource if not enough instances of the best fitting instance type can be allocated. This might be because of availability of the instance type in the Region or [Amazon EC2 service limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html). For more information, see [Allocation strategies](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) in the _ AWS Batch User Guide_.
   *
   * When updating a compute environment, changing the allocation strategy requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_. `BEST_FIT` is not supported when updating a compute environment.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources, and shouldn't be specified.
   *
   * BEST_FIT (default)
   *
   * AWS Batch selects an instance type that best fits the needs of the jobs with a preference for the lowest-cost instance type. If additional instances of the selected instance type aren't available, AWS Batch waits for the additional instances to be available. If there aren't enough instances available, or if the user is reaching [Amazon EC2 service limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html) then additional jobs aren't run until the currently running jobs have completed. This allocation strategy keeps costs lower but can limit scaling. If you are using Spot Fleets with `BEST_FIT` then the Spot Fleet IAM role must be specified.
   *
   * BEST_FIT_PROGRESSIVE
   *
   * AWS Batch will select additional instance types that are large enough to meet the requirements of the jobs in the queue, with a preference for instance types with a lower cost per unit vCPU. If additional instances of the previously selected instance types aren't available, AWS Batch will select new instance types.
   *
   * SPOT_CAPACITY_OPTIMIZED
   *
   * AWS Batch will select one or more instance types that are large enough to meet the requirements of the jobs in the queue, with a preference for instance types that are less likely to be interrupted. This allocation strategy is only available for Spot Instance compute resources.
   *
   * With both `BEST_FIT_PROGRESSIVE` and `SPOT_CAPACITY_OPTIMIZED` allocation strategies using On-Demand or Spot Instances, and the `BEST_FIT` strategy using Spot Instances, AWS Batch might need to go above `maxvCpus` to meet your capacity requirements. In this event, AWS Batch never exceeds `maxvCpus` by more than a single instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BEST_FIT_PROGRESSIVE | SPOT_CAPACITY_OPTIMIZED`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  AllocationStrategy?: Value<string>;
  /**
   * The VPC subnets where the compute resources are launched. Fargate compute resources can contain up to 16 subnets. For Fargate compute resources, providing an empty list will be handled as if this parameter wasn't specified and no change is made. For EC2 compute resources, providing an empty list removes the VPC subnets from the compute resource. For more information, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the _Amazon VPC User Guide_.
   *
   * When updating a compute environment, changing the VPC subnets requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * AWS Batch on Amazon EC2 and AWS Batch on Amazon EKS support Local Zones. For more information, see [ Local Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-local-zones) in the _Amazon EC2 User Guide for Linux Instances_, [Amazon EKS and AWS Local Zones](https://docs.aws.amazon.com/eks/latest/userguide/local-zones.html) in the _Amazon EKS User Guide_ and [ Amazon ECS clusters in Local Zones, Wavelength Zones, and AWS Outposts](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-regions-zones.html#clusters-local-zones) in the _Amazon ECS Developer Guide_.
   *
   * AWS Batch on Fargate doesn't currently support Local Zones.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Subnets: List<Value<string>>;
  /**
   * The type of compute environment: `EC2`, `SPOT`, `FARGATE`, or `FARGATE_SPOT`. For more information, see [Compute environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the _ AWS Batch User Guide_.
   *
   * If you choose `SPOT`, you must also specify an Amazon EC2 Spot Fleet role with the `spotIamFleetRole` parameter. For more information, see [Amazon EC2 spot fleet role](https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html) in the _ AWS Batch User Guide_.
   *
   * When updating compute environment, changing the type of a compute environment requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * When updating the type of a compute environment, changing between `EC2` and `SPOT` or between `FARGATE` and `FARGATE_SPOT` will initiate an infrastructure update, but if you switch between `EC2` and `FARGATE`, AWS CloudFormation will create a new compute environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EC2 | FARGATE | FARGATE_SPOT | SPOT`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Type: Value<string>;
  /**
   * The minimum number of Amazon EC2 vCPUs that an environment should maintain (even if the compute environment is `DISABLED`).
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinvCpus?: Value<number>;
  /**
   * Specifies whether the AMI ID is updated to the latest one that's supported by AWS Batch when the compute environment has an infrastructure update. The default value is `false`.
   *
   * An AMI ID can either be specified in the `imageId` or `imageIdOverride` parameters or be determined by the launch template that's specified in the `launchTemplate` parameter. If an AMI ID is specified any of these ways, this parameter is ignored. For more information about to update AMI IDs during an infrastructure update, see [Updating the AMI ID](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html#updating-compute-environments-ami) in the _ AWS Batch User Guide_.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateToLatestImageVersion?: Value<boolean>;
  /**
   * The launch template to use for your compute resources. Any other compute resource parameters that you specify in a [CreateComputeEnvironment](https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html) API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. For more information, see [Launch Template Support](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the _AWS Batch User Guide_. Removing the launch template from a compute environment will not remove the AMI specified in the launch template. In order to update the AMI specified in a launch template, the `updateToLatestImageVersion` parameter must be set to `true`.
   *
   * When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified.
   *
   * _Required_: No
   *
   * _Type_: [LaunchTemplateSpecification](aws-properties-batch-computeenvironment-launchtemplatespecification.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  LaunchTemplate?: BatchComputeEnvironmentLaunchTemplateSpecification;
  /**
   * The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter is overridden by the `imageIdOverride` member of the `Ec2Configuration` structure. To remove the custom AMI ID and use the default AMI ID, set this value to an empty string.
   *
   * When updating a compute environment, changing the AMI ID requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see [Amazon ECS-optimized Amazon Linux 2 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ImageId?: Value<string>;
  /**
   * The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, `ecsInstanceRole` or `arn:aws:iam::<aws_account_id>:instance-profile/ecsInstanceRole `. For more information, see [Amazon ECS instance role](https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html) in the _ AWS Batch User Guide_.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  InstanceRole?: Value<string>;
  /**
   * The instances types that can be launched. You can specify instance families to launch any instance type within those families (for example, `c5` or `p3`), or you can specify specific sizes within a family (such as `c5.8xlarge`). You can also choose `optimal` to select instance types (from the C4, M4, and R4 instance families) that match the demand of your job queues.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * When you create a compute environment, the instance types that you select for the compute environment must share the same architecture. For example, you can't mix x86 and ARM instances in the same compute environment.
   *
   * Currently, `optimal` uses instance types from the C4, M4, and R4 instance families. In Regions that don't have instance types from those instance families, instance types from the C5, M5, and R5 instance families are used.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  InstanceTypes?: List<Value<string>>;
  /**
   * The Amazon EC2 key pair that's used for instances launched in the compute environment. You can use this key pair to log in to your instances with SSH. To remove the Amazon EC2 key pair, set this value to an empty string.
   *
   * When updating a compute environment, changing the EC2 key pair requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Ec2KeyPair?: Value<string>;
  /**
   * The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * When updating a compute environment, changing the placement group requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  PlacementGroup?: Value<string>;
  /**
   * Key-value pair tags to be applied to EC2 resources that are launched in the compute environment. For AWS Batch, these take the form of `"String1": "String2"`, where `String1` is the tag key and `String2` is the tag value-for example, `{ "Name": "Batch Instance - C4OnDemand" }`. This is helpful for recognizing your AWS Batch instances in the Amazon EC2 console. These tags aren't seen when using the AWS Batch `ListTagsForResource` API operation.
   *
   * When updating a compute environment, changing this setting requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The desired number of Amazon EC2 vCPUS in the compute environment. AWS Batch modifies this value between the minimum and maximum values based on job queue demand.
   *
   * This parameter isn't applicable to jobs that are running on Fargate resources. Don't specify it.
   *
   * AWS Batch doesn't support changing the desired number of vCPUs of an existing compute environment. Don't specify this parameter for compute environments using Amazon EKS clusters.
   *
   * When you update the `desiredvCpus` setting, the value must be between the `minvCpus` and `maxvCpus` values.
   *
   * Additionally, the updated `desiredvCpus` value must be greater than or equal to the current `desiredvCpus` value. For more information, see [Troubleshooting AWS Batch](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredvCpus?: Value<number>;
}

/**
 * An object that represents a launch template that's associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.
 *
 * If security groups are specified using both the `securityGroupIds` parameter of `CreateComputeEnvironment` and the launch template, the values in the `securityGroupIds` parameter of `CreateComputeEnvironment` will be used.
 *
 * **Note**
 *
 * This object isn't applicable to jobs that are running on Fargate resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-launchtemplatespecification.html}
 **/
export interface BatchComputeEnvironmentLaunchTemplateSpecification {
  /**
   * The name of the launch template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  LaunchTemplateName?: Value<string>;
  /**
   * The version number of the launch template, `$Latest`, or `$Default`.
   *
   * If the value is `$Latest`, the latest version of the launch template is used. If the value is `$Default`, the default version of the launch template is used.
   *
   * If the AMI ID that's used in a compute environment is from the launch template, the AMI isn't changed when the compute environment is updated. It's only changed if the `updateToLatestImageVersion` parameter for the compute environment is set to `true`. During an infrastructure update, if either `$Latest` or `$Default` is specified, AWS Batch re-evaluates the launch template version, and it might use a different version of the launch template. This is the case even if the launch template isn't specified in the update. When updating a compute environment, changing the launch template requires an infrastructure update of the compute environment. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * Default: `$Default`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Version?: Value<string>;
  /**
   * The ID of the launch template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  LaunchTemplateId?: Value<string>;
}

/**
 * Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-updatepolicy.html}
 **/
export interface BatchComputeEnvironmentUpdatePolicy {
  /**
   * Specifies the job timeout (in minutes) when the compute environment infrastructure is updated. The default value is 30.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobExecutionTimeoutMinutes?: Value<number>;
  /**
   * Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerminateJobsOnUpdate?: Value<boolean>;
}

/**
 * Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If `Ec2Configuration` isn't specified, the default is `ECS_AL2` ([Amazon Linux 2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami)).
 *
 * **Note**
 *
 * This object isn't applicable to jobs that are running on Fargate resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-ec2configurationobject.html}
 **/
export interface BatchComputeEnvironmentEc2ConfigurationObject {
  /**
   * The AMI ID used for instances launched in the compute environment that match the image type. This setting overrides the `imageId` set in the `computeResource` object.
   *
   * The AMI that you choose for a compute environment must match the architecture of the instance types that you intend to use for that compute environment. For example, if your compute environment uses A1 instance types, the compute resource AMI that you choose must support ARM instances. Amazon ECS vends both x86 and ARM versions of the Amazon ECS-optimized Amazon Linux 2 AMI. For more information, see [Amazon ECS-optimized Amazon Linux 2 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#ecs-optimized-ami-linux-variants.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ImageIdOverride?: Value<string>;
  /**
   * The Kubernetes version for the compute environment. If you don't specify a value, the latest version that AWS Batch supports is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ImageKubernetesVersion?: Value<string>;
  /**
   * The image type to match with the instance type to select an AMI. The supported values are different for `ECS` and `EKS` resources.
   *
   * ECS
   *
   * If the `imageIdOverride` parameter isn't specified, then a recent [Amazon ECS-optimized Amazon Linux 2 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami) (`ECS_AL2`) is used. If a new image type is specified in an update, but neither an `imageId` nor a `imageIdOverride` parameter is specified, then the latest Amazon ECS optimized AMI for that image type that's supported by AWS Batch is used.
   *
   * ECS_AL2
   *
   * [Amazon Linux 2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami): Default for all non-GPU instance families.
   *
   * ECS_AL2_NVIDIA
   *
   * [Amazon Linux 2 (GPU)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#gpuami): Default for all GPU instance families (for example `P4` and `G4`) and can be used for all non AWS Graviton-based instance types.
   *
   * ECS_AL1
   *
   * [Amazon Linux](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami). Amazon Linux has reached the end-of-life of standard support. For more information, see [Amazon Linux AMI](http://aws.amazon.com/amazon-linux-ami/).
   *
   * EKS
   *
   * If the `imageIdOverride` parameter isn't specified, then a recent [Amazon EKS-optimized Amazon Linux AMI](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html) (`EKS_AL2`) is used. If a new image type is specified in an update, but neither an `imageId` nor a `imageIdOverride` parameter is specified, then the latest Amazon EKS optimized AMI for that image type that AWS Batch supports is used.
   *
   * EKS_AL2
   *
   * [Amazon Linux 2](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Default for all non-GPU instance families.
   *
   * EKS_AL2_NVIDIA
   *
   * [Amazon Linux 2 (accelerated)](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html): Default for all GPU instance families (for example, `P4` and `G4`) and can be used for all non AWS Graviton-based instance types.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ImageType: Value<string>;
}

/**
 * Configuration for the Amazon EKS cluster that supports the AWS Batch compute environment. The cluster must exist before the compute environment can be created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-eksconfiguration.html}
 **/
export interface BatchComputeEnvironmentEksConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EKS cluster. An example is `arn:aws:eks:us-east-1:123456789012:cluster/ClusterForBatch `.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EksClusterArn: Value<string>;
  /**
   * The namespace of the Amazon EKS cluster. AWS Batch manages pods in this namespace. The value can't left empty or null. It must be fewer than 64 characters long, can't be set to `default`, can't start with "`kube-`," and must match this regular expression: `^[a-z0-9]([-a-z0-9]*[a-z0-9])?$`. For more information, see [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) in the Kubernetes documentation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KubernetesNamespace: Value<string>;
}
export interface BatchComputeEnvironmentProperties {
  /**
   * The maximum number of vCPUs for an unmanaged compute environment. This parameter is only used for fair share scheduling to reserve vCPU capacity for new share identifiers. If this parameter isn't provided for a fair share job queue, no vCPU capacity is reserved.
   *
   * This parameter is only supported when the `type` parameter is set to `UNMANAGED`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnmanagedvCpus?: Value<number>;
  /**
   * The type of the compute environment: `MANAGED` or `UNMANAGED`. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MANAGED | UNMANAGED`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Specifies whether the compute environment is replaced if an update is made that requires replacing the instances in the compute environment. The default value is `true`. To enable more properties to be updated, set this property to `false`. When changing the value of this property to `false`, do not change any other properties at the same time. If other properties are changed at the same time, and the change needs to be rolled back but it can't, it's possible for the stack to go into the `UPDATE_ROLLBACK_FAILED` state. You can't update a stack that is in the `UPDATE_ROLLBACK_FAILED` state. However, if you can continue to roll it back, you can return the stack to its original settings and then try to update it again. For more information, see [Continue rolling back an update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html) in the _AWS CloudFormation User Guide_.
   *
   * The properties that can't be changed without replacing the compute environment are in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html) property type: [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-allocationstrategy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-allocationstrategy), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-bidpercentage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-bidpercentage), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2configuration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2configuration), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2keypair](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2keypair), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2keypair](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-ec2keypair), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-imageid](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-imageid), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-instancerole](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-instancerole), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-instancetypes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-instancetypes), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-launchtemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-launchtemplate), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-maxvcpus](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-maxvcpus), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-minvcpus](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-minvcpus), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-placementgroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-placementgroup), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-securitygroupids](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-securitygroupids), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-subnets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-subnets), [Tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-tags), [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-type), and [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-updatetolatestimageversion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-updatetolatestimageversion).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplaceComputeEnvironment?: Value<boolean>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. For more information, see [AWS Batch service IAM role](https://docs.aws.amazon.com/batch/latest/userguide/service_IAM_role.html) in the _ AWS Batch User Guide_.
   *
   * If your account already created the AWS Batch service-linked role, that role is used by default for your compute environment unless you specify a different role here. If the AWS Batch service-linked role doesn't exist in your account, and no role is specified here, the service attempts to create the AWS Batch service-linked role in your account.
   *
   * If your specified role has a path other than `/`, then you must specify either the full role ARN (recommended) or prefix the role name with the path. For example, if a role with the name `bar` has a path of `/foo/`, specify `/foo/bar` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the _IAM User Guide_.
   *
   * Depending on how you created your AWS Batch service role, its ARN might contain the `service-role` path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN doesn't use the `service-role` path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceRole?: Value<string>;
  /**
   * Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [UpdatePolicy](aws-properties-batch-computeenvironment-updatepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdatePolicy?: BatchComputeEnvironmentUpdatePolicy;
  /**
   * The details for the Amazon EKS cluster that supports the compute environment.
   *
   * _Required_: No
   *
   * _Type_: [EksConfiguration](aws-properties-batch-computeenvironment-eksconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EksConfiguration?: BatchComputeEnvironmentEksConfiguration;
  /**
   * The name for your compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComputeEnvironmentName?: Value<string>;
  /**
   * The ComputeResources property type specifies details of the compute resources managed by the compute environment. This parameter is required for managed compute environments. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the _AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ComputeResources](aws-properties-batch-computeenvironment-computeresources.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeResources?: BatchComputeEnvironmentComputeResources;
  /**
   * The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.
   *
   * If the state is `ENABLED`, then the AWS Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand.
   *
   * If the state is `DISABLED`, then the AWS Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a `STARTING` or `RUNNING` state continue to progress normally. Managed compute environments in the `DISABLED` state don't scale out.
   *
   * Compute environments in a `DISABLED` state may continue to incur billing charges. To prevent additional charges, turn off and then delete the compute environment. For more information, see [State](https://docs.aws.amazon.com/batch/latest/userguide/compute_environment_parameters.html#compute_environment_state) in the _ AWS Batch User Guide_.
   *
   * When an instance is idle, the instance scales down to the `minvCpus` value. However, the instance size doesn't change. For example, consider a `c5.8xlarge` instance with a `minvCpus` value of `4` and a `desiredvCpus` value of `36`. This instance doesn't scale down to a `c5.large` instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The tags applied to the compute environment.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The `AWS::Batch::ComputeEnvironment` resource defines your AWS Batch compute environment. You can define `MANAGED` or `UNMANAGED` compute environments. `MANAGED` compute environments can use Amazon EC2 or AWS Fargate resources. `UNMANAGED` compute environments can only use EC2 resources. For more information, see [Compute Environments](https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html) in the _AWS Batch User Guide_.
 *
 * In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the [launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) that you specify when you create the compute environment. You can choose either to use EC2 On-Demand Instances and EC2 Spot Instances, or to use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage of the On-Demand price.
 *
 * **Note**
 *
 * Multi-node parallel jobs are not supported on Spot Instances.
 *
 * In an unmanaged compute environment, you can manage your own EC2 compute resources and have a lot of flexibility with how you configure your compute resources. For example, you can use custom AMI. However, you need to verify that your AMI meets the Amazon ECS container instance AMI specification. For more information, see [container instance AMIs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html) in the _Amazon Elastic Container Service Developer Guide_. After you have created your unmanaged compute environment, you can use the [DescribeComputeEnvironments](https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html) operation to find the Amazon ECS cluster that is associated with it. Then, manually launch your container instances into that Amazon ECS cluster. For more information, see [Launching an Amazon ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html) in the _Amazon Elastic Container Service Developer Guide_.
 *
 * **Note**
 *
 * To create a compute environment that uses EKS resources, the caller must have permissions to call `eks:DescribeCluster`.
 *
 * **Note**
 *
 * AWS Batch doesn't upgrade the AMIs in a compute environment after it's created except under specific conditions. For example, it doesn't automatically update the AMIs when a newer version of the Amazon ECS optimized AMI is available. Therefore, you're responsible for the management of the guest operating system (including updates and security patches) and any additional application software or utilities that you install on the compute resources. There are two ways to use a new AMI for your AWS Batch jobs. The original method is to complete these steps:
 *
 * Create a new compute environment with the new AMI.
 *
 * Add the compute environment to an existing job queue.
 *
 * Remove the earlier compute environment from your job queue.
 *
 * Delete the earlier compute environment.
 *
 * In April 2022, AWS Batch added enhanced support for updating compute environments. For more information, see [Updating compute environments](https://docs.aws.amazon.com/batch/latest/userguide/updating-compute-environments.html) in the _ AWS Batch User Guide_. To use the enhanced updating of compute environments to update AMIs, follow these rules:
 *
 * Either do not set the [ServiceRole](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html#cfn-batch-computeenvironment-servicerole) property or set it to the **AWSServiceRoleForBatch** service-linked role.
 *
 * Set the [AllocationStrategy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-allocationstrategy) property to `BEST_FIT_PROGRESSIVE` or `SPOT_CAPACITY_OPTIMIZED`.
 *
 * Set the [ReplaceComputeEnvironment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html#cfn-batch-computeenvironment-replacecomputeenvironment) property to `false`.
 *
 * If the `replaceComputeEnvironment` property is set to `false`, you might receive an error message when you update the CFN template for a compute environment. This issue occurs if the updated `desiredvcpus` value is less than the current `desiredvcpus` value. As a workaround, delete the `desiredvcpus` value from the updated template or use the `minvcpus` property to manage the number of vCPUs. For information, see [Error message when you update the `DesiredvCpus` setting](https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#error-desired-vcpus-update).
 *
 * Set the [UpdateToLatestImageVersion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-updatetolatestimageversion) property to `true`. This property is used when you update a compute environment. The [UpdateToLatestImageVersion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-updatetolatestimageversion) property is ignored when you create a compute environment.
 *
 * Either do not specify an image ID in [ImageId](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-imageid) or [ImageIdOverride](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-ec2configurationobject.html#cfn-batch-computeenvironment-ec2configurationobject-imageidoverride) properties, or in the launch template identified by the [Launch Template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-computeresources.html#cfn-batch-computeenvironment-computeresources-launchtemplate) property. In that case AWS Batch will select the latest Amazon ECS optimized AMI supported by AWS Batch at the time the infrastructure update is initiated. Alternatively you can specify the AMI ID in the `ImageId` or `ImageIdOverride` properties, or the launch template identified by the `LaunchTemplate` properties. Changing any of these properties will trigger an infrastructure update.
 *
 * If these rules are followed, any update that triggers an infrastructure update will cause the AMI ID to be re-selected. If the [Version](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-launchtemplatespecification.html#cfn-batch-computeenvironment-launchtemplatespecification-version) property of the [LaunchTemplateSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-computeenvironment-launchtemplatespecification.html) is set to `$Latest` or `$Default`, the latest or default version of the launch template will be evaluated up at the time of the infrastructure update, even if the `LaunchTemplateSpecification` was not updated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-computeenvironment.html}
 */
export interface BatchComputeEnvironmentResource {
  Type: 'AWS::Batch::ComputeEnvironment';
  Properties: BatchComputeEnvironmentProperties;
}
