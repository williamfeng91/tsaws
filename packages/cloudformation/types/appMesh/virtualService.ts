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
 * An object that represents a virtual node service provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.html}
 **/
export interface AppMeshVirtualServiceVirtualRouterServiceProvider {
  /**
   * The name of the virtual router that is acting as a service provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualRouterName: Value<string>;
}

/**
 * An object that represents a virtual node service provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.html}
 **/
export interface AppMeshVirtualServiceVirtualNodeServiceProvider {
  /**
   * The name of the virtual node that is acting as a service provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualNodeName: Value<string>;
}

/**
 * An object that represents the provider for a virtual service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html}
 **/
export interface AppMeshVirtualServiceVirtualServiceProvider {
  /**
   * The virtual node associated with a virtual service.
   *
   * _Required_: No
   *
   * _Type_: [VirtualNodeServiceProvider](aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualNode?: AppMeshVirtualServiceVirtualNodeServiceProvider;
  /**
   * The virtual router associated with a virtual service.
   *
   * _Required_: No
   *
   * _Type_: [VirtualRouterServiceProvider](aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VirtualRouter?: AppMeshVirtualServiceVirtualRouterServiceProvider;
}

/**
 * An object that represents the specification of a virtual service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualservicespec.html}
 **/
export interface AppMeshVirtualServiceVirtualServiceSpec {
  /**
   * The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.
   *
   * _Required_: No
   *
   * _Type_: [VirtualServiceProvider](aws-properties-appmesh-virtualservice-virtualserviceprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Provider?: AppMeshVirtualServiceVirtualServiceProvider;
}
export interface AppMeshVirtualServiceProperties {
  /**
   * The name of the service mesh to create the virtual service in.
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
   * The name to use for the virtual service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualServiceName: Value<string>;
  /**
   * The virtual service specification to apply.
   *
   * _Required_: Yes
   *
   * _Type_: [VirtualServiceSpec](aws-properties-appmesh-virtualservice-virtualservicespec.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec: AppMeshVirtualServiceVirtualServiceSpec;
  /**
   * Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
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
 * Creates a virtual service within a service mesh.
 *
 * A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its `virtualServiceName`, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.
 *
 * For more information about virtual services, see [Virtual services](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html}
 */
export interface AppMeshVirtualServiceResource {
  Type: 'AWS::AppMesh::VirtualService';
  Properties: AppMeshVirtualServiceProperties;
}
