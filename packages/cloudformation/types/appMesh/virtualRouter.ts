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
 * An object representing a virtual router listener port mapping.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html}
 **/
export interface AppMeshVirtualRouterPortMapping {
  /**
   * The port used for the port mapping.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The protocol used for the port mapping. Specify one protocol.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `grpc | http | http2 | tcp`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<string>;
}

/**
 * An object that represents the specification of a virtual router.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterspec.html}
 **/
export interface AppMeshVirtualRouterVirtualRouterSpec {
  /**
   * The listeners that the virtual router is expected to receive inbound traffic from.
   *
   * _Required_: Yes
   *
   * _Type_: List of [VirtualRouterListener](aws-properties-appmesh-virtualrouter-virtualrouterlistener.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Listeners: List<AppMeshVirtualRouterVirtualRouterListener>;
}

/**
 * An object that represents a virtual router listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterlistener.html}
 **/
export interface AppMeshVirtualRouterVirtualRouterListener {
  /**
   * The port mapping information for the listener.
   *
   * _Required_: Yes
   *
   * _Type_: [PortMapping](aws-properties-appmesh-virtualrouter-portmapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortMapping: AppMeshVirtualRouterPortMapping;
}
export interface AppMeshVirtualRouterProperties {
  /**
   * The name of the service mesh to create the virtual router in.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeshName: Value<string>;
  /**
   * The name to use for the virtual router.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualRouterName?: Value<string>;
  /**
   * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeshOwner?: Value<string>;
  /**
   * The virtual router specification to apply.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualRouterSpec](aws-properties-appmesh-virtualrouter-virtualrouterspec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshVirtualRouterVirtualRouterSpec;
  /**
   * Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a virtual router within a service mesh.
 *
 * Specify a `listener` for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.
 *
 * For more information about virtual routers, see [Virtual routers](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html}
 */
export interface AppMeshVirtualRouterResource {
  Type: 'AWS::AppMesh::VirtualRouter';
  Properties: AppMeshVirtualRouterProperties;
}
