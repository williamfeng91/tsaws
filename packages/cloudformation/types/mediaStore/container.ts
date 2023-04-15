/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.
 *
 * To view examples of how to construct a metric policy for your use case, see [Example Metric Policies](https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html}
 **/
export interface MediaStoreContainerMetricPolicy {
  /**
   * A setting to enable or disable metrics at the container level.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerLevelMetrics: Value<string>;
  /**
   * A parameter that holds an array of rules that enable metrics at the object level. This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also [request a quota increase](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricPolicyRule](aws-properties-mediastore-container-metricpolicyrule.md)
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricPolicyRules?: List<MediaStoreContainerMetricPolicyRule>;
}

/**
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html}
 **/
export interface MediaStoreContainerCorsRule {
  /**
   * Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.
   *
   * Each CORS rule must contain at least one `AllowedMethods` and one `AllowedOrigins` element.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AllowedMethods?: List<Value<string>>;
  /**
   * One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * Each CORS rule must have at least one `AllowedOrigins` element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedOrigins?: List<Value<string>>;
  /**
   * One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
   *
   * This element is optional for each rule.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExposeHeaders?: List<Value<string>>;
  /**
   * The time in seconds that your browser caches the preflight response for the specified resource.
   *
   * A CORS rule can have only one `MaxAgeSeconds` element.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxAgeSeconds?: Value<number>;
  /**
   * Specifies which headers are allowed in a preflight `OPTIONS` request through the `Access-Control-Request-Headers` header. Each header name that is specified in `Access-Control-Request-Headers` must have a corresponding entry in the rule. Only the headers that were requested are sent back.
   *
   * This element can contain only one wildcard character (*).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedHeaders?: List<Value<string>>;
}

/**
 * A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also [request a quota increase](https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html}
 **/
export interface MediaStoreContainerMetricPolicyRule {
  /**
   * A path or file name that defines which objects to include in the group. Wildcards (*) are acceptable.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `900`
   *
   * _Pattern_: `/?(?:[A-Za-z0-9_=:.-~*]+/){0,10}(?:[A-Za-z0-9_=:.-~*]+)?/?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectGroup: Value<string>;
  /**
   * A name that allows you to refer to the object group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `[a-zA-Z0-9_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectGroupName: Value<string>;
}
export interface MediaStoreContainerProperties {
  /**
   * Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the [AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/iam/).
   *
   * For this release of the REST API, you can create only one policy for a container. If you enter `PutContainerPolicy` twice, the second command modifies the existing policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [MetricPolicy](aws-properties-mediastore-container-metricpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricPolicy?: MediaStoreContainerMetricPolicy;
  /**
   * The name for the container. The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named `movies` in every region, as long as you don’t have an existing container with that name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerName: Value<string>;
  /**
   * Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.
   *
   * To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
   *
   * To learn more about CORS, see [Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore](https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html).
   *
   * _Required_: No
   *
   * _Type_: List of [CorsRule](aws-properties-mediastore-container-corsrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CorsPolicy?: List<MediaStoreContainerCorsRule>;
  /**
   * Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.
   *
   * For information about how to construct an object lifecycle policy, see [Components of an Object Lifecycle Policy](https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecyclePolicy?: Value<string>;
  /**
   * The state of access logging on the container. This value is `false` by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to `true`, indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessLoggingEnabled?: Value<boolean>;
  /**
   * Property description not available.
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
 * The AWS::MediaStore::Container resource specifies a storage container to hold objects. A container is similar to a bucket in Amazon S3.
 *
 * When you create a container using AWS CloudFormation, the template manages data for five API actions: creating a container, setting access logging, updating the default container policy, adding a cross-origin resource sharing (CORS) policy, and adding an object lifecycle policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html}
 */
export interface MediaStoreContainerResource {
  Type: 'AWS::MediaStore::Container';
  Properties: MediaStoreContainerProperties;
}
