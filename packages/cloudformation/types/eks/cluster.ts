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
 * The configuration of your local Amazon EKS cluster on an AWS Outpost. Before creating a cluster on an Outpost, review [Creating a local cluster on an Outpost](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html) in the _Amazon EKS User Guide_. This API isn't available for Amazon EKS clusters on the AWS cloud.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html}
 **/
export interface EKSClusterOutpostConfig {
  /**
   * The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutpostArns: List<Value<string>>;
  /**
   * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ControlPlanePlacement](aws-properties-eks-cluster-controlplaneplacement.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ControlPlanePlacement?: EKSClusterControlPlanePlacement;
  /**
   * The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes that your cluster will have. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the _Amazon EKS User Guide_.
   *
   * The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ControlPlaneInstanceType: Value<string>;
}

/**
 * The encryption configuration for the cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html}
 **/
export interface EKSClusterEncryptionConfig {
  /**
   * Specifies the resources to be encrypted. The only supported value is "secrets".
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resources?: List<Value<string>>;
  /**
   * The encryption provider for the cluster.
   *
   * _Required_: No
   *
   * _Type_: [Provider](aws-properties-eks-cluster-provider.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Provider?: EKSClusterProvider;
}

/**
 * The Kubernetes network configuration for the cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html}
 **/
export interface EKSClusterKubernetesNetworkConfig {
  /**
   * Don't specify a value if you select `ipv6` for **ipFamily**. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the `10.100.0.0/16` or `172.20.0.0/16` CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:
   */
  ServiceIpv4Cidr?: Value<string>;
  /**
   * The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified `ipv6` for **ipFamily** when you created the cluster. Kubernetes assigns service addresses from the unique local address range (`fc00::/7`) because you can't specify a custom IPv6 CIDR block when you create the cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceIpv6Cidr?: Value<string>;
  /**
   * Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, `ipv4` is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify `ipv6`, the VPC and subnets that you specify for cluster creation must have both `IPv4` and `IPv6` CIDR blocks assigned to them. You can't specify `ipv6` for clusters in China Regions.
   *
   * You can only specify `ipv6` for `1.21` and later clusters that use version `1.10.1` or later of the Amazon VPC CNI add-on. If you specify `ipv6`, then ensure that your VPC meets the requirements listed in the considerations listed in [Assigning IPv6 addresses to pods and services](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html) in the Amazon EKS User Guide. Kubernetes assigns services `IPv6` addresses from the unique local address range `(fc00::/7)`. You can't specify a custom `IPv6` CIDR block. Pod addresses are assigned from the subnet's `IPv6` CIDR.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ipv4 | ipv6`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IpFamily?: Value<string>;
}

/**
 * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster control plane logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the * _Amazon EKS User Guide_ *.
 *
 * **Important**
 *
 * When updating a resource, you must include this `Logging` property if the previous CloudFormation template of the resource had it.
 *
 * **Note**
 *
 * CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html}
 **/
export interface EKSClusterLogging {
  /**
   * The cluster control plane logging configuration for your cluster.
   *
   * _Required_: No
   *
   * _Type_: [ClusterLogging](aws-properties-eks-cluster-clusterlogging.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterLogging?: EKSClusterClusterLogging;
}

/**
 * The enabled logging type. For a list of the valid logging types, see the [`types` property of `LogSetup`](https://docs.aws.amazon.com/eks/latest/APIReference/API_LogSetup.html#AmazonEKS-Type-LogSetup-types) in the _Amazon EKS API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html}
 **/
export interface EKSClusterLoggingTypeConfig {
  /**
   * The name of the log type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * Identifies the AWS Key Management Service (AWS KMS) key used to encrypt the secrets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-provider.html}
 **/
export interface EKSClusterProvider {
  /**
   * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric and created in the same AWS Region as the cluster. If the KMS key was created in a different account, the [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) must have access to the KMS key. For more information, see [Allowing users in other accounts to use a KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the _ AWS Key Management Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyArn?: Value<string>;
}

/**
 * The cluster control plane logging configuration for your cluster.
 *
 * **Important**
 *
 * When updating a resource, you must include this `ClusterLogging` property if the previous CloudFormation template of the resource had it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html}
 **/
export interface EKSClusterClusterLogging {
  /**
   * The enabled control plane logs for your cluster. All log types are disabled if the array is empty.
   *
   * When updating a resource, you must include this `EnabledTypes` property if the previous CloudFormation template of the resource had it.
   *
   * _Required_: No
   *
   * _Type_: List of [LoggingTypeConfig](aws-properties-eks-cluster-loggingtypeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnabledTypes?: List<EKSClusterLoggingTypeConfig>;
}

/**
 * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the Amazon EKS User Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-controlplaneplacement.html}
 **/
export interface EKSClusterControlPlanePlacement {
  /**
   * The name of the placement group for the Kubernetes control plane instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupName?: Value<string>;
}

/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 *
 * **Important**
 *
 * When updating a resource, you must include these properties if the previous CloudFormation template of the resource had them:
 *
 * `EndpointPublicAccess`
 *
 * `EndpointPrivateAccess`
 *
 * `PublicAccessCidrs`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html}
 **/
export interface EKSClusterResourcesVpcConfig {
  /**
   * Set this value to `false` to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is `true`, which enables public access for your Kubernetes API server. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the * _Amazon EKS User Guide_ *.
   *
   * *Required*: No
   *
   * *Type*: Boolean
   *
   * *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointPublicAccess?: Value<boolean>;
  /**
   * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is `0.0.0.0/0`. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the * _Amazon EKS User Guide_ *.
   *
   * *Required*: No
   *
   * *Type*: List of String
   *
   * *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicAccessCidrs?: List<Value<string>>;
  /**
   * Set this value to `true` to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is `false`, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that `publicAccessCidrs` includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the * _Amazon EKS User Guide_ *.
   *
   * *Required*: No
   *
   * *Type*: Boolean
   *
   * *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointPrivateAccess?: Value<boolean>;
  /**
   * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see [Amazon EKS security group considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the * _Amazon EKS User Guide_ *.
   *
   * *Required*: No
   *
   * *Type*: List of String
   *
   * *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
}
export interface EKSClusterProperties {
  /**
   * The logging configuration for your cluster.
   *
   * _Required_: No
   *
   * _Type_: [Logging](aws-properties-eks-cluster-logging.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logging?: EKSClusterLogging;
  /**
   * The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.
   *
   * The default version might not be the latest version available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * An object representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This object isn't available for clusters on the AWS cloud.
   *
   * _Required_: No
   *
   * _Type_: [OutpostConfig](aws-properties-eks-cluster-outpostconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutpostConfig?: EKSClusterOutpostConfig;
  /**
   * The encryption configuration for the cluster.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-eks-cluster-encryptionconfig.md) of [EncryptionConfig](aws-properties-eks-cluster-encryptionconfig.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionConfig?: List<EKSClusterEncryptionConfig>;
  /**
   * The Kubernetes network configuration for the cluster.
   *
   * _Required_: No
   *
   * _Type_: [KubernetesNetworkConfig](aws-properties-eks-cluster-kubernetesnetworkconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KubernetesNetworkConfig?: EKSClusterKubernetesNetworkConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. For more information, see [Amazon EKS Service IAM Role](https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the * _Amazon EKS User Guide_ *.
   *
   * *Required*: Yes
   *
   * *Type*: String
   *
   * *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the _Amazon EKS User Guide_. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
   *
   * Updates require replacement of the `SecurityGroupIds` and `SubnetIds` sub-properties.
   *
   * _Required_: Yes
   *
   * _Type_: [ResourcesVpcConfig](aws-properties-eks-cluster-resourcesvpcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcesVpcConfig: EKSClusterResourcesVpcConfig;
  /**
   * The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags don't propagate to any other resources associated with the cluster.
   *
   * You must have the `eks:TagResource` and `eks:UntagResource` permissions for your [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the AWS CloudFormation stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The unique name to give to your cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[0-9A-Za-z][A-Za-z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates an Amazon EKS control plane.
 *
 * The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as `etcd` and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.
 *
 * The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support `kubectl exec`, `logs`, and `proxy` data flows).
 *
 * Amazon EKS nodes run in your AWS account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.
 *
 * In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see [Managing Cluster Authentication](https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html) and [Launching Amazon EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html) in the _Amazon EKS User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html}
 */
export interface EKSClusterResource {
  Type: 'AWS::EKS::Cluster';
  Properties: EKSClusterProperties;
}
