# AWS::SSM::PatchBaseline PatchSource<a name="aws-properties-ssm-patchbaseline-patchsource"></a>

`PatchSource` is the property type for the `Sources` resource of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource\.

The AWS CloudFormation `AWS::SSM::PatchSource` resource is used to provide information about the patches to use to update target instances, including target operating systems and source repository\. Applies to Linux instances only\.

## Syntax<a name="aws-properties-ssm-patchbaseline-patchsource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssm-patchbaseline-patchsource-syntax.json"></a>

```
{
  "[Configuration](#cfn-ssm-patchbaseline-patchsource-configuration)" : String,
  "[Name](#cfn-ssm-patchbaseline-patchsource-name)" : String,
  "[Products](#cfn-ssm-patchbaseline-patchsource-products)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-ssm-patchbaseline-patchsource-syntax.yaml"></a>

```
  [Configuration](#cfn-ssm-patchbaseline-patchsource-configuration): String
  [Name](#cfn-ssm-patchbaseline-patchsource-name): String
  [Products](#cfn-ssm-patchbaseline-patchsource-products):
    - String
```

## Properties<a name="aws-properties-ssm-patchbaseline-patchsource-properties"></a>

`Configuration` <a name="cfn-ssm-patchbaseline-patchsource-configuration"></a>
The value of the yum repo configuration\. For example:  
 `[main]`  
 `name=MyCustomRepository`  
 `baseurl=https://my-custom-repository`  
 `enabled=1`  
For information about other options available for your yum repository configuration, see [dnf\.conf\(5\)](https://man7.org/linux/man-pages/man5/dnf.conf.5.html)\.
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssm-patchbaseline-patchsource-name"></a>
The name specified to identify the patch source\.  
_Required_: No  
_Type_: String  
_Pattern_: `^[a-zA-Z0-9_\-.]{3,50}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Products` <a name="cfn-ssm-patchbaseline-patchsource-products"></a>
The specific operating system versions a patch repository applies to, such as "Ubuntu16\.04", "AmazonLinux2016\.09", "RedhatEnterpriseLinux7\.2" or "Suse12\.7"\. For lists of supported product values, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
