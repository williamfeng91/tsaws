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

/**
 * An object that describes the details of a number filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-numberfilter.html}
 **/
export interface InspectorV2FilterNumberFilter {
  /**
   * The lowest number to be included in the filter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LowerInclusive?: Value<number>;
  /**
   * The highest number to be included in the filter.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpperInclusive?: Value<number>;
}

/**
 * An object that describes the details of a port range filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-portrangefilter.html}
 **/
export interface InspectorV2FilterPortRangeFilter {
  /**
   * The port number the port range begins at.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BeginInclusive?: Value<number>;
  /**
   * The port number the port range ends at.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndInclusive?: Value<number>;
}

/**
 * Contains information on the details of a package filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-packagefilter.html}
 **/
export interface InspectorV2FilterPackageFilter {
  /**
   * An object that contains details on the package architecture type to filter on.
   *
   * _Required_: No
   *
   * _Type_: [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Architecture?: InspectorV2FilterStringFilter;
  /**
   * The package version to filter on.
   *
   * _Required_: No
   *
   * _Type_: [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: InspectorV2FilterStringFilter;
  /**
   * An object that contains details on the package epoch to filter on.
   *
   * _Required_: No
   *
   * _Type_: [NumberFilter](aws-properties-inspectorv2-filter-numberfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Epoch?: InspectorV2FilterNumberFilter;
  /**
   * An object that contains details on the source layer hash to filter on.
   *
   * _Required_: No
   *
   * _Type_: [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceLayerHash?: InspectorV2FilterStringFilter;
  /**
   * An object that contains details on the package release to filter on.
   *
   * _Required_: No
   *
   * _Type_: [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Release?: InspectorV2FilterStringFilter;
  /**
   * An object that contains details on the name of the package to filter on.
   *
   * _Required_: No
   *
   * _Type_: [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: InspectorV2FilterStringFilter;
}

/**
 * An object that describes the details of a string filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-stringfilter.html}
 **/
export interface InspectorV2FilterStringFilter {
  /**
   * The operator to use when comparing values in the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison: Value<string>;
  /**
   * The value to filter on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * Details on the criteria used to define the filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-filtercriteria.html}
 **/
export interface InspectorV2FilterFilterCriteria {
  /**
   * Details on the resource tags used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [MapFilter](aws-properties-inspectorv2-filter-mapfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTags?: List<InspectorV2FilterMapFilter>;
  /**
   * Details of the Amazon EC2 instance image IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2InstanceImageId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the date and time a finding was first seen used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [DateFilter](aws-properties-inspectorv2-filter-datefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirstObservedAt?: List<InspectorV2FilterDateFilter>;
  /**
   * The Amazon Inspector score to filter on.
   *
   * _Required_: No
   *
   * _Type_: List of [NumberFilter](aws-properties-inspectorv2-filter-numberfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InspectorScore?: List<InspectorV2FilterNumberFilter>;
  /**
   * Details of the Amazon EC2 instance VPC IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2InstanceVpcId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the date and time a finding was last seen used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [DateFilter](aws-properties-inspectorv2-filter-datefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastObservedAt?: List<InspectorV2FilterDateFilter>;
  /**
   * Details on the Amazon ECR image push date and time used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [DateFilter](aws-properties-inspectorv2-filter-datefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImagePushedAt?: List<InspectorV2FilterDateFilter>;
  /**
   * Details of the Amazon ECR image architecture types used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImageArchitecture?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the related vulnerabilities used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelatedVulnerabilities?: List<InspectorV2FilterStringFilter>;
  /**
   * The tags attached to the Amazon ECR container image.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImageTags?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the vulnerability ID used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VulnerabilityId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details of the component types used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentType?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the vendor severity used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VendorSeverity?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the name of the Amazon ECR repository used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImageRepositoryName?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the finding title used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the resource types used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the severity used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Severity?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the ingress source addresses used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkProtocol?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the date and time a finding was last updated at used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [DateFilter](aws-properties-inspectorv2-filter-datefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdatedAt?: List<InspectorV2FilterDateFilter>;
  /**
   * Details of the Amazon ECR image hashes used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImageHash?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the port ranges used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRangeFilter](aws-properties-inspectorv2-filter-portrangefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRange?: List<InspectorV2FilterPortRangeFilter>;
  /**
   * Details on the vulnerability score to filter findings by.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VulnerabilitySource?: List<InspectorV2FilterStringFilter>;
  /**
   * Details of the Amazon EC2 instance subnet IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2InstanceSubnetId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the finding ARNs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingArn?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the resource IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the finding status types used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingStatus?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the vulnerable packages used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [PackageFilter](aws-properties-inspectorv2-filter-packagefilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VulnerablePackages?: List<InspectorV2FilterPackageFilter>;
  /**
   * Details of the AWS account IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsAccountId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details of the component IDs used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentId?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the Amazon ECR registry used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcrImageRegistry?: List<InspectorV2FilterStringFilter>;
  /**
   * Details on the finding types used to filter findings.
   *
   * _Required_: No
   *
   * _Type_: List of [StringFilter](aws-properties-inspectorv2-filter-stringfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingType?: List<InspectorV2FilterStringFilter>;
}

/**
 * Contains details on the time range used to filter findings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-datefilter.html}
 **/
export interface InspectorV2FilterDateFilter {
  /**
   * A timestamp representing the end of the time period filtered on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndInclusive?: Value<number>;
  /**
   * A timestamp representing the start of the time period filtered on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartInclusive?: Value<number>;
}

/**
 * An object that describes details of a map filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-inspectorv2-filter-mapfilter.html}
 **/
export interface InspectorV2FilterMapFilter {
  /**
   * The operator to use when comparing values in the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comparison: Value<string>;
  /**
   * The tag value used in the filter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The tag key used in the filter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface InspectorV2FilterProperties {
  /**
   * A description of the filter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Details on the filter criteria associated with this filter.
   *
   * _Required_: Yes
   *
   * _Type_: [FilterCriteria](aws-properties-inspectorv2-filter-filtercriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterCriteria: InspectorV2FilterFilterCriteria;
  /**
   * The action that is to be applied to the findings that match the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterAction: Value<string>;
  /**
   * The name of the filter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Details about a filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html}
 */
export interface InspectorV2FilterResource {
  Type: 'AWS::InspectorV2::Filter';
  Properties: InspectorV2FilterProperties;
}
