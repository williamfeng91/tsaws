# AWS::SSM::PatchBaseline<a name="aws-resource-ssm-patchbaseline"></a>

The `AWS::SSM::PatchBaseline` resource defines the basic information for an AWS Systems Manager patch baseline\. A patch baseline defines which patches are approved for installation on your instances\.

For more information, see [CreatePatchBaseline](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html) in the _AWS Systems Manager API Reference_\.

## Syntax<a name="aws-resource-ssm-patchbaseline-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ssm-patchbaseline-syntax.json"></a>

```
{
  "Type" : "AWS::SSM::PatchBaseline",
  "Properties" : {
      "[ApprovalRules](#cfn-ssm-patchbaseline-approvalrules)" : RuleGroup,
      "[ApprovedPatches](#cfn-ssm-patchbaseline-approvedpatches)" : [ String, ... ],
      "[ApprovedPatchesComplianceLevel](#cfn-ssm-patchbaseline-approvedpatchescompliancelevel)" : String,
      "[ApprovedPatchesEnableNonSecurity](#cfn-ssm-patchbaseline-approvedpatchesenablenonsecurity)" : Boolean,
      "[Description](#cfn-ssm-patchbaseline-description)" : String,
      "[GlobalFilters](#cfn-ssm-patchbaseline-globalfilters)" : PatchFilterGroup,
      "[Name](#cfn-ssm-patchbaseline-name)" : String,
      "[OperatingSystem](#cfn-ssm-patchbaseline-operatingsystem)" : String,
      "[PatchGroups](#cfn-ssm-patchbaseline-patchgroups)" : [ String, ... ],
      "[RejectedPatches](#cfn-ssm-patchbaseline-rejectedpatches)" : [ String, ... ],
      "[RejectedPatchesAction](#cfn-ssm-patchbaseline-rejectedpatchesaction)" : String,
      "[Sources](#cfn-ssm-patchbaseline-sources)" : [ PatchSource, ... ],
      "[Tags](#cfn-ssm-patchbaseline-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-ssm-patchbaseline-syntax.yaml"></a>

```
Type: AWS::SSM::PatchBaseline
Properties:
  [ApprovalRules](#cfn-ssm-patchbaseline-approvalrules):
    RuleGroup
  [ApprovedPatches](#cfn-ssm-patchbaseline-approvedpatches):
    - String
  [ApprovedPatchesComplianceLevel](#cfn-ssm-patchbaseline-approvedpatchescompliancelevel): String
  [ApprovedPatchesEnableNonSecurity](#cfn-ssm-patchbaseline-approvedpatchesenablenonsecurity): Boolean
  [Description](#cfn-ssm-patchbaseline-description): String
  [GlobalFilters](#cfn-ssm-patchbaseline-globalfilters):
    PatchFilterGroup
  [Name](#cfn-ssm-patchbaseline-name): String
  [OperatingSystem](#cfn-ssm-patchbaseline-operatingsystem): String
  [PatchGroups](#cfn-ssm-patchbaseline-patchgroups):
    - String
  [RejectedPatches](#cfn-ssm-patchbaseline-rejectedpatches):
    - String
  [RejectedPatchesAction](#cfn-ssm-patchbaseline-rejectedpatchesaction): String
  [Sources](#cfn-ssm-patchbaseline-sources):
    - PatchSource
  [Tags](#cfn-ssm-patchbaseline-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-ssm-patchbaseline-properties"></a>

`ApprovalRules` <a name="cfn-ssm-patchbaseline-approvalrules"></a>
A set of rules used to include patches in the baseline\.  
_Required_: No  
_Type_: [RuleGroup](aws-properties-ssm-patchbaseline-rulegroup.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApprovedPatches` <a name="cfn-ssm-patchbaseline-approvedpatches"></a>
A list of explicitly approved patches for the baseline\.  
For information about accepted formats for lists of approved patches and rejected patches, see [About package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _ AWS Systems Manager User Guide_\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApprovedPatchesComplianceLevel` <a name="cfn-ssm-patchbaseline-approvedpatchescompliancelevel"></a>
Defines the compliance level for approved patches\. When an approved patch is reported as missing, this value describes the severity of the compliance violation\. The default value is `UNSPECIFIED`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CRITICAL | HIGH | INFORMATIONAL | LOW | MEDIUM | UNSPECIFIED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApprovedPatchesEnableNonSecurity` <a name="cfn-ssm-patchbaseline-approvedpatchesenablenonsecurity"></a>
Indicates whether the list of approved patches includes non\-security updates that should be applied to the managed nodes\. The default value is `false`\. Applies to Linux managed nodes only\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-ssm-patchbaseline-description"></a>
A description of the patch baseline\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GlobalFilters` <a name="cfn-ssm-patchbaseline-globalfilters"></a>
A set of global filters used to include patches in the baseline\.  
_Required_: No  
_Type_: [PatchFilterGroup](aws-properties-ssm-patchbaseline-patchfiltergroup.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssm-patchbaseline-name"></a>
The name of the patch baseline\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `128`  
_Pattern_: `^[a-zA-Z0-9_\-.]{3,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OperatingSystem` <a name="cfn-ssm-patchbaseline-operatingsystem"></a>
Defines the operating system the patch baseline applies to\. The default value is `WINDOWS`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AMAZON_LINUX | AMAZON_LINUX_2 | AMAZON_LINUX_2022 | AMAZON_LINUX_2023 | CENTOS | DEBIAN | MACOS | ORACLE_LINUX | RASPBIAN | REDHAT_ENTERPRISE_LINUX | ROCKY_LINUX | SUSE | UBUNTU | WINDOWS`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`PatchGroups` <a name="cfn-ssm-patchbaseline-patchgroups"></a>
The name of the patch group to be registered with the patch baseline\.  
_Required_: No  
_Type_: List of String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RejectedPatches` <a name="cfn-ssm-patchbaseline-rejectedpatches"></a>
A list of explicitly rejected patches for the baseline\.  
For information about accepted formats for lists of approved patches and rejected patches, see [About package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _ AWS Systems Manager User Guide_\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RejectedPatchesAction` <a name="cfn-ssm-patchbaseline-rejectedpatchesaction"></a>
The action for Patch Manager to take on patches included in the `RejectedPackages` list\.

- ** `ALLOW_AS_DEPENDENCY` **: A package in the `Rejected` patches list is installed only if it is a dependency of another package\. It is considered compliant with the patch baseline, and its status is reported as `InstalledOther`\. This is the default action if no option is specified\.
- ** `BLOCK` **: Packages in the `RejectedPatches` list, and packages that include them as dependencies, aren't installed under any circumstances\. If a package was installed before it was added to the Rejected patches list, it is considered non\-compliant with the patch baseline, and its status is reported as `InstalledRejected`\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `ALLOW_AS_DEPENDENCY | BLOCK`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sources` <a name="cfn-ssm-patchbaseline-sources"></a>
Information about the patches to use to update the managed nodes, including target operating systems and source repositories\. Applies to Linux managed nodes only\.  
_Required_: No  
_Type_: List of [PatchSource](aws-properties-ssm-patchbaseline-patchsource.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-ssm-patchbaseline-tags"></a>
Optional metadata that you assign to a resource\. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment\. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-ssm-patchbaseline-return-values"></a>

### Ref<a name="aws-resource-ssm-patchbaseline-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the patch baseline ID, such as `pb-abcde1234567890yz`\.

**Note**  
The ID of the default patch baseline provided by AWS is an ARN, for example `arn:aws:ssm:us-west-2:123456789012:patchbaseline/abcde1234567890yz`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-ssm-patchbaseline--examples"></a>

### Create a patch baseline<a name="aws-resource-ssm-patchbaseline--examples--Create_a_patch_baseline"></a>

The following example creates a Systems Manager patch baseline that approves patches for Windows Server 2019 instances seven days after they are released by Microsoft\. The patch baseline also approves patches for Active Directory seven days after they are released by Microsoft\.

#### <a name="aws-resource-ssm-patchbaseline--examples--Create_a_patch_baseline--language_owl_wvr_qlb"></a>

```
{
    "Resources": {
        "myPatchBaseline": {
            "Type": "AWS::SSM::PatchBaseline",
            "Properties": {
                "Name": "myPatchBaseline",
                "Description": "Baseline containing all updates approved for Windows instances",
                "OperatingSystem": "WINDOWS",
                "PatchGroups": [
                    "myPatchGroup"
                ],
                "ApprovalRules": {
                    "PatchRules": [
                        {
                            "PatchFilterGroup": {
                                "PatchFilters": [
                                    {
                                        "Values": [
                                            "Critical",
                                            "Important",
                                            "Moderate"
                                        ],
                                        "Key": "MSRC_SEVERITY"
                                    },
                                    {
                                        "Values": [
                                            "SecurityUpdates",
                                            "CriticalUpdates"
                                        ],
                                        "Key": "CLASSIFICATION"
                                    },
                                    {
                                        "Values": [
                                            "WindowsServer2019"
                                        ],
                                        "Key": "PRODUCT"
                                    }
                                ]
                            },
                            "ApproveAfterDays": 7,
                            "ComplianceLevel": "CRITICAL"
                        },
                        {
                            "PatchFilterGroup": {
                                "PatchFilters": [
                                    {
                                        "Values": [
                                            "Critical",
                                            "Important",
                                            "Moderate"
                                        ],
                                        "Key": "MSRC_SEVERITY"
                                    },
                                    {
                                        "Values": [
                                            "*"
                                        ],
                                        "Key": "CLASSIFICATION"
                                    },
                                    {
                                        "Values": [
                                            "APPLICATION"
                                        ],
                                        "Key": "PATCH_SET"
                                    },
                                    {
                                        "Values": [
                                            "Active Directory Rights Management Services Client 2.0"
                                        ],
                                        "Key": "PRODUCT"
                                    },
                                    {
                                        "Values": [
                                            "Active Directory"
                                        ],
                                        "Key": "PRODUCT_FAMILY"
                                    }
                                ]
                            },
                            "ApproveAfterDays": 7,
                            "ComplianceLevel": "CRITICAL"
                        }
                    ]
                }
            }
        }
    }
}
```

#### YAML<a name="aws-resource-ssm-patchbaseline--examples--Create_a_patch_baseline--yaml"></a>

```
---
Resources:
  myPatchBaseline:
    Type: AWS::SSM::PatchBaseline
    Properties:
      Name: myPatchBaseline
      Description: Baseline containing all updates approved for Windows instances
      OperatingSystem: WINDOWS
      PatchGroups:
      - myPatchGroup
      ApprovalRules:
        PatchRules:
        - PatchFilterGroup:
            PatchFilters:
            - Values:
              - Critical
              - Important
              - Moderate
              Key: MSRC_SEVERITY
            - Values:
              - SecurityUpdates
              - CriticalUpdates
              Key: CLASSIFICATION
            - Values:
              - WindowsServer2019
              Key: PRODUCT
          ApproveAfterDays: 7
          ComplianceLevel: CRITICAL
        - PatchFilterGroup:
            PatchFilters:
            - Values:
              - Critical
              - Important
              - Moderate
              Key: MSRC_SEVERITY
            - Values:
              - "*"
              Key: CLASSIFICATION
            - Values:
              - APPLICATION
              Key: PATCH_SET
            - Values:
              - Active Directory Rights Management Services Client 2.0
              Key: PRODUCT
            - Values:
              - Active Directory
              Key: PRODUCT_FAMILY
          ApproveAfterDays: 7
          ComplianceLevel: CRITICAL
```

## See also<a name="aws-resource-ssm-patchbaseline--seealso"></a>

- [CreatePatchBaseline](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html) in the _AWS Systems Manager API Reference_\.
