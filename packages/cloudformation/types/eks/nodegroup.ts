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
 * An object representing a node group launch template specification. The launch template can't include [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html), [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html), [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html), [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html), or [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html), or the node group deployment or update will fail. For more information about launch templates, see [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html) in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
 *
 * You must specify either the launch template ID or the launch template name in the request, but not both.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html}
 **/
export interface EKSNodegroupLaunchTemplateSpecification {
  /**
   * The version number of the launch template to use. If no version is specified, then the template's default version is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name in the request, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
  /**
   * The name of the launch template.
   *
   * You must specify either the launch template name or the launch template ID in the request, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The update configuration for the node group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html}
 **/
export interface EKSNodegroupUpdateConfig {
  /**
   * The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or `maxUnavailable` is required to have a value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxUnavailablePercentage?: Value<number>;
  /**
   * The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or `maxUnavailablePercentage` is required to have a value.The maximum number is 100.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxUnavailable?: Value<number>;
}

/**
 * A property that allows a node to repel a set of pods. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html}
 **/
export interface EKSNodegroupTaint {
  /**
   * The value of the taint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The effect of the taint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NO_EXECUTE | NO_SCHEDULE | PREFER_NO_SCHEDULE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Effect?: Value<string>;
  /**
   * The key of the taint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html}
 **/
export interface EKSNodegroupScalingConfig {
  /**
   * The minimum number of nodes that the managed node group can scale in to.
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
   * The current number of nodes that the managed node group should maintain.
   *
   * If you use Cluster Autoscaler, you shouldn't change the desiredSize value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.
   *
   * Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.
   *
   * This parameter can be different from minSize in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let Cluster Autoscaler reduce the number if there are too many. When Cluster Autoscaler is used, the desiredSize parameter is altered by Cluster Autoscaler (but can be out-of-date for short periods of time). Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than maxSize.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredSize?: Value<number>;
  /**
   * The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see [Amazon EKS service quotas](https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSize?: Value<number>;
}

/**
 * An object representing the remote access configuration for the managed node group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html}
 **/
export interface EKSNodegroupRemoteAccess {
  /**
   * The security group IDs that are allowed SSH access (port 22) to the nodes. For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet (`0.0.0.0/0`). For more information, see [Security Groups for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the _Amazon Virtual Private Cloud User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceSecurityGroups?: List<Value<string>>;
  /**
   * The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group. For more information, see [Amazon EC2 key pairs and Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the _Amazon Elastic Compute Cloud User Guide for Linux Instances_. For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see [Amazon EC2 key pairs and Windows instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html) in the _Amazon Elastic Compute Cloud User Guide for Windows Instances_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Ec2SshKey: Value<string>;
}
export interface EKSNodegroupProperties {
  /**
   * The node group update configuration.
   *
   * _Required_: No
   *
   * _Type_: [UpdateConfig](aws-properties-eks-nodegroup-updateconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateConfig?: EKSNodegroupUpdateConfig;
  /**
   * The scaling configuration details for the Auto Scaling group that is created for your node group.
   *
   * _Required_: No
   *
   * _Type_: [ScalingConfig](aws-properties-eks-nodegroup-scalingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingConfig?: EKSNodegroupScalingConfig;
  /**
   * The Kubernetes labels applied to the nodes in the node group.
   *
   * Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Labels?: { [key: string]: Value<string> };
  /**
   * The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of `No_Schedule`, `Prefer_No_Schedule`, or `No_Execute`. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Taint](aws-properties-eks-nodegroup-taint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Taints?: List<EKSNodegroupTaint>;
  /**
   * The capacity type of your managed node group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ON_DEMAND | SPOT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CapacityType?: Value<string>;
  /**
   * The AMI version of the Amazon EKS optimized AMI to use with your node group (for example, `1.14.7-YYYYMMDD`). By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see [Amazon EKS optimized Linux AMI Versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the _Amazon EKS User Guide_.
   *
   * Changing this value triggers an update of the node group if one is available. You can't update other properties at the same time as updating `Release Version`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReleaseVersion?: Value<string>;
  /**
   * The unique name to give your node group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NodegroupName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node `kubelet` daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the * _Amazon EKS User Guide_ *. If you specify `launchTemplate`, then don't specify [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html) in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * *Required*: Yes
   *
   * *Type*: String
   *
   * *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NodeRole: Value<string>;
  /**
   * The subnets to use for the Auto Scaling group that is created for your node group. If you specify `launchTemplate`, then don't specify [https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html) in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subnets: List<Value<string>>;
  /**
   * The AMI type for your node group. If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `amiType`, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add `eks:kube-proxy-windows` to your Windows nodes `rolearn` in the `aws-auth` `ConfigMap`. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AL2_ARM_64 | AL2_x86_64 | AL2_x86_64_GPU | BOTTLEROCKET_ARM_64 | BOTTLEROCKET_ARM_64_NVIDIA | BOTTLEROCKET_x86_64 | BOTTLEROCKET_x86_64_NVIDIA | CUSTOM | WINDOWS_CORE_2019_x86_64 | WINDOWS_CORE_2022_x86_64 | WINDOWS_FULL_2019_x86_64 | WINDOWS_FULL_2022_x86_64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AmiType?: Value<string>;
  /**
   * Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForceUpdateEnabled?: Value<boolean>;
  /**
   * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `version`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * You can't update other properties at the same time as updating `Version`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * An object representing a node group's launch template specification. If specified, then do not specify `instanceTypes`, `diskSize`, or `remoteAccess` and make sure that the launch template meets the requirements in `launchTemplateSpecification`.
   *
   * _Required_: No
   *
   * _Type_: [LaunchTemplateSpecification](aws-properties-eks-nodegroup-launchtemplatespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchTemplate?: EKSNodegroupLaunchTemplateSpecification;
  /**
   * The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify `launchTemplate`, then don't specify `remoteAccess`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RemoteAccess](aws-properties-eks-nodegroup-remoteaccess.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RemoteAccess?: EKSNodegroupRemoteAccess;
  /**
   * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify `launchTemplate`, then don't specify `diskSize`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DiskSize?: Value<number>;
  /**
   * The name of the cluster to create the node group in.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterName: Value<string>;
  /**
   * Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the `amiType` parameter. If you specify `launchTemplate`, then you can specify zero or one instance type in your launch template _or_ you can specify 0-20 instance types for `instanceTypes`. If however, you specify an instance type in your launch template _and_ specify any `instanceTypes`, the node group deployment will fail. If you don't specify an instance type in a launch template or for `instanceTypes`, then `t3.medium` is used, by default. If you specify `Spot` for `capacityType`, then we recommend specifying multiple values for `instanceTypes`. For more information, see [Managed node group capacity types](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types) and [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceTypes?: List<Value<string>>;
  /**
   * The metadata applied to the node group to assist with categorization and organization. Each tag consists of a key and an optional value. You define both. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html).
 *
 * An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. For more information, see [Managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html) in the _Amazon EKS User Guide_.
 *
 * **Note**
 *
 * Windows AMI types are only supported for commercial Regions that support Windows Amazon EKS.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html}
 */
export interface EKSNodegroupResource {
  Type: 'AWS::EKS::Nodegroup';
  Properties: EKSNodegroupProperties;
}
