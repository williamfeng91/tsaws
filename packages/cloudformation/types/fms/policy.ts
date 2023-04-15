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
 * Configures the firewall policy deployment model of AWS Network Firewall. For information about Network Firewall deployment models, see [AWS Network Firewall example architectures with routing](https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html) in the _Network Firewall Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-networkfirewallpolicy.html}
 **/
export interface FMSPolicyNetworkFirewallPolicy {
  /**
   * Defines the deployment model to use for the firewall policy. To use a distributed model, set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CENTRALIZED | DISTRIBUTED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirewallDeploymentModel: Value<string>;
}

/**
 * Details about the security service that is being used to protect the resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-securityservicepolicydata.html}
 **/
export interface FMSPolicySecurityServicePolicyData {
  /**
   * Details about the service that are specific to the service type, in JSON format.
   */
  ManagedServiceData?: Value<string>;
  /**
   * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting AWS Support.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DNS_FIREWALL | IMPORT_NETWORK_FIREWALL | NETWORK_FIREWALL | SECURITY_GROUPS_COMMON | SECURITY_GROUPS_CONTENT_AUDIT | SECURITY_GROUPS_USAGE_AUDIT | SHIELD_ADVANCED | THIRD_PARTY_FIREWALL | WAF | WAFV2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Contains the Network Firewall firewall policy options to configure a centralized deployment model.
   *
   * _Required_: No
   *
   * _Type_: [PolicyOption](aws-properties-fms-policy-policyoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyOption?: FMSPolicyPolicyOption;
}

/**
 * A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html}
 **/
export interface FMSPolicyPolicyTag {
  /**
   * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see [Working with Tag Editor](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html}
 **/
export interface FMSPolicyResourceTag {
  /**
   * The resource tag value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The resource tag key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Contains the AWS Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policyoption.html}
 **/
export interface FMSPolicyPolicyOption {
  /**
   * Defines the deployment model to use for the firewall policy.
   *
   * _Required_: No
   *
   * _Type_: [NetworkFirewallPolicy](aws-properties-fms-policy-networkfirewallpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkFirewallPolicy?: FMSPolicyNetworkFirewallPolicy;
  /**
   * Defines the policy options for a third-party firewall policy.
   *
   * _Required_: No
   *
   * _Type_: [ThirdPartyFirewallPolicy](aws-properties-fms-policy-thirdpartyfirewallpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThirdPartyFirewallPolicy?: FMSPolicyThirdPartyFirewallPolicy;
}

/**
 * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in or exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
 *
 * This is used for the policy's `IncludeMap` and `ExcludeMap`.
 *
 * You can specify account IDs, OUs, or a combination:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html}
 **/
export interface FMSPolicyIEMap {
  /**
   * The account list for the map.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ACCOUNT?: List<Value<string>>;
  /**
   * The organizational unit list for the map.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ORGUNIT?: List<Value<string>>;
}

/**
 * Configures the deployment model for the third-party firewall.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html}
 **/
export interface FMSPolicyThirdPartyFirewallPolicy {
  /**
   * Defines the deployment model to use for the third-party firewall policy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CENTRALIZED | DISTRIBUTED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirewallDeploymentModel: Value<string>;
}
export interface FMSPolicyProperties {
  /**
   * Indicates whether AWS Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope.
   *
   * By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources.
   *
   * This option is not available for Shield Advanced or AWS WAF Classic policies.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcesCleanUp?: Value<boolean>;
  /**
   * An array of `ResourceTag` objects, used to explicitly include resources in the policy scope or explicitly exclude them. If this isn't set, then tags aren't used to modify policy scope. See also `ExcludeResourceTags`.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceTag](aws-properties-fms-policy-resourcetag.md)
   *
   * _Maximum_: `8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTags?: List<FMSPolicyResourceTag>;
  /**
   * Used only when tags are specified in the `ResourceTags` property. If this property is `True`, resources with the specified tags are not in scope of the policy. If it's `False`, only resources with the specified tags are in scope of the policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeResourceTags: Value<boolean>;
  /**
   * The type of resource protected by or in scope of the policy. This is in the format shown in the [AWS Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html). To apply this policy to multiple resource types, specify a resource type of `ResourceTypeList` and then specify the resource types in a `ResourceTypeList`.
   *
   * For AWS WAF and Shield Advanced, example resource types include `AWS::ElasticLoadBalancingV2::LoadBalancer` and `AWS::CloudFront::Distribution`. For a security group common policy, valid values are `AWS::EC2::NetworkInterface` and `AWS::EC2::Instance`. For a security group content audit policy, valid values are `AWS::EC2::SecurityGroup`, `AWS::EC2::NetworkInterface`, and `AWS::EC2::Instance`. For a security group usage audit policy, the value is `AWS::EC2::SecurityGroup`. For an AWS Network Firewall policy or DNS Firewall policy, the value is `AWS::EC2::VPC`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: Value<string>;
  /**
   * The unique identifiers of the resource sets used by the policy.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceSetIds?: List<Value<string>>;
  /**
   * Details about the security service that is being used to protect the resources.
   *
   * This contains the following settings:
   */
  SecurityServicePolicyData: FMSPolicySecurityServicePolicyData;
  /**
   * Indicates if the policy should be automatically applied to new resources.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemediationEnabled: Value<boolean>;
  /**
   * Used when deleting a policy. If `true`, Firewall Manager performs cleanup according to the policy type.
   *
   * For AWS WAF and Shield Advanced policies, Firewall Manager does the following:
   */
  DeleteAllPolicyResources?: Value<boolean>;
  /**
   * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
   *
   * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
   *
   * You can specify account IDs, OUs, or a combination:
   */
  ExcludeMap?: FMSPolicyIEMap;
  /**
   * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
   *
   * You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
   *
   * You can specify account IDs, OUs, or a combination:
   */
  IncludeMap?: FMSPolicyIEMap;
  /**
   * The definition of the AWS Network Firewall firewall policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyDescription?: Value<string>;
  /**
   * The name of the AWS Firewall Manager policy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyName: Value<string>;
  /**
   * An array of `ResourceType` objects. Use this only to specify multiple resource types. To specify a single resource type, use `ResourceType`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypeList?: List<Value<string>>;
  /**
   * A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
   *
   * _Required_: No
   *
   * _Type_: List of [PolicyTag](aws-properties-fms-policy-policytag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<FMSPolicyPolicyTag>;
}

/**
 * An AWS Firewall Manager policy.
 *
 * Firewall Manager provides the following types of policies:
 *
 * Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.
 *
 * These policies require some setup to use. For more information, see the sections on prerequisites and getting started under [AWS Firewall Manager](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html}
 */
export interface FMSPolicyResource {
  Type: 'AWS::FMS::Policy';
  Properties: FMSPolicyProperties;
}
