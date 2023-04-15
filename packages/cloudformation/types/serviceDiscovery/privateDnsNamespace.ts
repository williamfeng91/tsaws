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
 * Start of Authority (SOA) properties for a public or private DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-soa.html}
 **/
export interface ServiceDiscoveryPrivateDnsNamespaceSOA {
  /**
   * The time to live (TTL) for purposes of negative caching.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TTL?: Value<number>;
}

/**
 * DNS properties for the private DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-privatednspropertiesmutable.html}
 **/
export interface ServiceDiscoveryPrivateDnsNamespacePrivateDnsPropertiesMutable {
  /**
   * Fields for the Start of Authority (SOA) record for the hosted zone for the private DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [SOA](aws-properties-servicediscovery-privatednsnamespace-soa.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SOA?: ServiceDiscoveryPrivateDnsNamespaceSOA;
}

/**
 * Properties for the private DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-privatednsnamespace-properties.html}
 **/
export interface ServiceDiscoveryPrivateDnsNamespaceProperties {
  /**
   * DNS properties for the private DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [PrivateDnsPropertiesMutable](aws-properties-servicediscovery-privatednsnamespace-privatednspropertiesmutable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsProperties?: ServiceDiscoveryPrivateDnsNamespacePrivateDnsPropertiesMutable;
}
export interface ServiceDiscoveryPrivateDnsNamespaceProperties {
  /**
   * A description for the namespace.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the Amazon VPC that you want to associate the namespace with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Vpc: Value<string>;
  /**
   * Properties for the private DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [Properties](aws-properties-servicediscovery-privatednsnamespace-properties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Properties?: ServiceDiscoveryPrivateDnsNamespaceProperties;
  /**
   * The tags for the namespace. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: Updates are not supported.
   */
  Tags?: List<ResourceTag>;
  /**
   * The name that you want to assign to this namespace. When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^[!-~]{1,253}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace `example.com` and name your service `backend`, the resulting DNS name for the service is `backend.example.com`. Service instances that are registered using a private DNS namespace can be discovered using either a `DiscoverInstances` request or using DNS. For the current quota on the number of namespaces that you can create using the same AWS account, see [AWS Cloud Map quotas](https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html) in the _ AWS Cloud Map Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-privatednsnamespace.html}
 */
export interface ServiceDiscoveryPrivateDnsNamespaceResource {
  Type: 'AWS::ServiceDiscovery::PrivateDnsNamespace';
  Properties: ServiceDiscoveryPrivateDnsNamespaceProperties;
}
