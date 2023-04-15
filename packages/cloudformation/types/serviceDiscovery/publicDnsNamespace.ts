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
 * DNS properties for the public DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.html}
 **/
export interface ServiceDiscoveryPublicDnsNamespacePublicDnsPropertiesMutable {
  /**
   * Start of Authority (SOA) record for the hosted zone for the public DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [SOA](aws-properties-servicediscovery-publicdnsnamespace-soa.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SOA?: ServiceDiscoveryPublicDnsNamespaceSOA;
}

/**
 * Start of Authority (SOA) properties for a public or private DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-soa.html}
 **/
export interface ServiceDiscoveryPublicDnsNamespaceSOA {
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
 * Properties for the public DNS namespace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicediscovery-publicdnsnamespace-properties.html}
 **/
export interface ServiceDiscoveryPublicDnsNamespaceProperties {
  /**
   * DNS properties for the public DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [PublicDnsPropertiesMutable](aws-properties-servicediscovery-publicdnsnamespace-publicdnspropertiesmutable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsProperties?: ServiceDiscoveryPublicDnsNamespacePublicDnsPropertiesMutable;
}
export interface ServiceDiscoveryPublicDnsNamespaceProperties {
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
   * Properties for the public DNS namespace.
   *
   * _Required_: No
   *
   * _Type_: [Properties](aws-properties-servicediscovery-publicdnsnamespace-properties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Properties?: ServiceDiscoveryPublicDnsNamespaceProperties;
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
   * The name that you want to assign to this namespace.
   *
   * Do not include sensitive information in the name. The name is publicly available using DNS queries.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?.)+[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a public namespace based on DNS, which is visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace `example.com` and name your service `backend`, the resulting DNS name for the service is `backend.example.com`. You can discover instances that were registered with a public DNS namespace by using either a `DiscoverInstances` request or using DNS. For the current quota on the number of namespaces that you can create using the same AWS account, see [AWS Cloud Map quotas](https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html) in the _ AWS Cloud Map Developer Guide_.
 *
 * **Important**
 *
 * The `CreatePublicDnsNamespace` API operation is not supported in the AWS GovCloud (US) Regions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-publicdnsnamespace.html}
 */
export interface ServiceDiscoveryPublicDnsNamespaceResource {
  Type: 'AWS::ServiceDiscovery::PublicDnsNamespace';
  Properties: ServiceDiscoveryPublicDnsNamespaceProperties;
}
