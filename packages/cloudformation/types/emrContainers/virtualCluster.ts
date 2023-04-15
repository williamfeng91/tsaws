/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The information about the Amazon EKS cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-eksinfo.html}
 **/
export interface EMRContainersVirtualClusterEksInfo {
  /**
   * The namespaces of the EKS cluster.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 63
   *
   * _Pattern_: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Namespace: Value<string>;
}

/**
 * The information about the container used for a job run or a managed endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerinfo.html}
 **/
export interface EMRContainersVirtualClusterContainerInfo {
  /**
   * The information about the Amazon EKS cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [EksInfo](aws-properties-emrcontainers-virtualcluster-eksinfo.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EksInfo: EMRContainersVirtualClusterEksInfo;
}

/**
 * The information about the container provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrcontainers-virtualcluster-containerprovider.html}
 **/
export interface EMRContainersVirtualClusterContainerProvider {
  /**
   * The type of the container provider. Amazon EKS is the only supported type as of now.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EKS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The ID of the container cluster.
   *
   * _Minimum_: 1
   *
   * _Maximum_: 100
   *
   * _Pattern_: `^[0-9A-Za-z][A-Za-z0-9-_]*`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The information about the container cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [ContainerInfo](aws-properties-emrcontainers-virtualcluster-containerinfo.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Info: EMRContainersVirtualClusterContainerInfo;
}
export interface EMRContainersVirtualClusterProperties {
  /**
   * The container provider of the virtual cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [ContainerProvider](aws-properties-emrcontainers-virtualcluster-containerprovider.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerProvider: EMRContainersVirtualClusterContainerProvider;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the virtual cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_/#A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The `AWS::EMRContainers::VirtualCluster` resource specifies a virtual cluster. A virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list, and delete virtual clusters. They do not consume any additional resources in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html}
 */
export interface EMRContainersVirtualClusterResource {
  Type: 'AWS::EMRContainers::VirtualCluster';
  Properties: EMRContainersVirtualClusterProperties;
}
