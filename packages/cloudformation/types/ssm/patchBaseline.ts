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
 * The date for `ApproveUntilDate`, as a String in the format `YYYY-MM-DD`. For example, `2020-12-31`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchstringdate.html}
 **/
export type SSMPatchBaselinePatchStringDate = Value<string>;

/**
 * `PatchSource` is the property type for the `Sources` resource of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
 *
 * The AWS CloudFormation `AWS::SSM::PatchSource` resource is used to provide information about the patches to use to update target instances, including target operating systems and source repository. Applies to Linux instances only.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchsource.html}
 **/
export interface SSMPatchBaselinePatchSource {
  /**
   * The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Products?: List<Value<string>>;
  /**
   * The value of the yum repo configuration. For example:
   *
   * `[main]`
   *
   * `name=MyCustomRepository`
   *
   * `baseurl=https://my-custom-repository`
   *
   * `enabled=1`
   *
   * For information about other options available for your yum repository configuration, see [dnf.conf(5)](https://man7.org/linux/man-pages/man5/dnf.conf.5.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: Value<string>;
  /**
   * The name specified to identify the patch source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,50}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `PatchFilter` property type defines a patch filter for an AWS Systems Manager patch baseline.
 *
 * The `PatchFilters` property of the [PatchFilterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html) property type contains a list of `PatchFilter` property types.
 *
 * You can view lists of valid values for the patch properties by running the `DescribePatchProperties` command. For more information, see [DescribePatchProperties](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html) in the _AWS Systems Manager API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfilter.html}
 **/
export interface SSMPatchBaselinePatchFilter {
  /**
   * The value for the filter key.
   *
   * For information about valid values for each key based on operating system type, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
  /**
   * The key for the filter.
   *
   * For information about valid keys, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADVISORY_ID | ARCH | BUGZILLA_ID | CLASSIFICATION | CVE_ID | EPOCH | MSRC_SEVERITY | NAME | PATCH_ID | PATCH_SET | PRIORITY | PRODUCT | PRODUCT_FAMILY | RELEASE | REPOSITORY | SECTION | SECURITY | SEVERITY | VERSION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * The `Rule` property type specifies an approval rule for a Systems Manager patch baseline.
 *
 * The `PatchRules` property of the [RuleGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html) property type contains a list of `Rule` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html}
 **/
export interface SSMPatchBaselineRule {
  /**
   * The cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Not supported on Debian Server or Ubuntu Server.
   *
   * Enter dates in the format `YYYY-MM-DD`. For example, `2021-12-31`.
   *
   * _Required_: No
   *
   * _Type_: [PatchStringDate](aws-properties-ssm-patchbaseline-patchstringdate.md)
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApproveUntilDate?: SSMPatchBaselinePatchStringDate;
  /**
   * For managed nodes identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is `false`. Applies to Linux managed nodes only.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableNonSecurity?: Value<boolean>;
  /**
   * The patch filter group that defines the criteria for the rule.
   *
   * _Required_: No
   *
   * _Type_: [PatchFilterGroup](aws-properties-ssm-patchbaseline-patchfiltergroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatchFilterGroup?: SSMPatchBaselinePatchFilterGroup;
  /**
   * The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of `7` means that patches are approved seven days after they are released.
   *
   * You must specify a value for `ApproveAfterDays`.
   *
   * Exception: Not supported on Debian Server or Ubuntu Server.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `360`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApproveAfterDays?: Value<number>;
  /**
   * A compliance severity level for all approved patches in a patch baseline. Valid compliance severity levels include the following: `UNSPECIFIED`, `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, and `INFORMATIONAL`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CRITICAL | HIGH | INFORMATIONAL | LOW | MEDIUM | UNSPECIFIED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComplianceLevel?: Value<string>;
}

/**
 * The `PatchFilterGroup` property type specifies a set of patch filters for an AWS Systems Manager patch baseline, typically used for approval rules for a Systems Manager patch baseline.
 *
 * `PatchFilterGroup` is the property type for the `GlobalFilters` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource and the `PatchFilterGroup` property of the [Rule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html}
 **/
export interface SSMPatchBaselinePatchFilterGroup {
  /**
   * The set of patch filters that make up the group.
   *
   * _Required_: No
   *
   * _Type_: List of [PatchFilter](aws-properties-ssm-patchbaseline-patchfilter.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatchFilters?: List<SSMPatchBaselinePatchFilter>;
}

/**
 * The `RuleGroup` property type specifies a set of rules that define the approval rules for an AWS Systems Manager patch baseline.
 *
 * `RuleGroup` is the property type for the `ApprovalRules` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html}
 **/
export interface SSMPatchBaselineRuleGroup {
  /**
   * The rules that make up the rule group.
   *
   * _Required_: No
   *
   * _Type_: List of [Rule](aws-properties-ssm-patchbaseline-rule.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatchRules?: List<SSMPatchBaselineRule>;
}
export interface SSMPatchBaselineProperties {
  /**
   * Defines the operating system the patch baseline applies to. The default value is `WINDOWS`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AMAZON_LINUX | AMAZON_LINUX_2 | AMAZON_LINUX_2022 | AMAZON_LINUX_2023 | CENTOS | DEBIAN | MACOS | ORACLE_LINUX | RASPBIAN | REDHAT_ENTERPRISE_LINUX | ROCKY_LINUX | SUSE | UBUNTU | WINDOWS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OperatingSystem?: Value<string>;
  /**
   * A description of the patch baseline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A set of rules used to include patches in the baseline.
   *
   * _Required_: No
   *
   * _Type_: [RuleGroup](aws-properties-ssm-patchbaseline-rulegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovalRules?: SSMPatchBaselineRuleGroup;
  /**
   * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
   *
   * _Required_: No
   *
   * _Type_: List of [PatchSource](aws-properties-ssm-patchbaseline-patchsource.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sources?: List<SSMPatchBaselinePatchSource>;
  /**
   * The name of the patch baseline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of explicitly rejected patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [About package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _ AWS Systems Manager User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RejectedPatches?: List<Value<string>>;
  /**
   * A list of explicitly approved patches for the baseline.
   *
   * For information about accepted formats for lists of approved patches and rejected patches, see [About package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _ AWS Systems Manager User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovedPatches?: List<Value<string>>;
  /**
   * The action for Patch Manager to take on patches included in the `RejectedPackages` list.
   */
  RejectedPatchesAction?: Value<string>;
  /**
   * The name of the patch group to be registered with the patch baseline.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatchGroups?: List<Value<string>>;
  /**
   * Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is `UNSPECIFIED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CRITICAL | HIGH | INFORMATIONAL | LOW | MEDIUM | UNSPECIFIED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovedPatchesComplianceLevel?: Value<string>;
  /**
   * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApprovedPatchesEnableNonSecurity?: Value<boolean>;
  /**
   * A set of global filters used to include patches in the baseline.
   *
   * _Required_: No
   *
   * _Type_: [PatchFilterGroup](aws-properties-ssm-patchbaseline-patchfiltergroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalFilters?: SSMPatchBaselinePatchFilterGroup;
  /**
   * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::SSM::PatchBaseline` resource defines the basic information for an AWS Systems Manager patch baseline. A patch baseline defines which patches are approved for installation on your instances.
 *
 * For more information, see [CreatePatchBaseline](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html) in the _AWS Systems Manager API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html}
 */
export interface SSMPatchBaselineResource {
  Type: 'AWS::SSM::PatchBaseline';
  Properties: SSMPatchBaselineProperties;
}
