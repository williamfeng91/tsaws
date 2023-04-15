# AWS::Config::OrganizationConformancePack<a name="aws-resource-config-organizationconformancepack"></a>

OrganizationConformancePack deploys conformance packs across member accounts in an AWS Organizations\. OrganizationConformancePack enables organization service access for `config-multiaccountsetup.amazonaws.com` through the `EnableAWSServiceAccess` action and creates a service linked role in the master account of your organization\. The service linked role is created only when the role does not exist in the master account\.

## Syntax<a name="aws-resource-config-organizationconformancepack-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-config-organizationconformancepack-syntax.json"></a>

```
{
  "Type" : "AWS::Config::OrganizationConformancePack",
  "Properties" : {
      "[ConformancePackInputParameters](#cfn-config-organizationconformancepack-conformancepackinputparameters)" : [ ConformancePackInputParameter, ... ],
      "[DeliveryS3Bucket](#cfn-config-organizationconformancepack-deliverys3bucket)" : String,
      "[DeliveryS3KeyPrefix](#cfn-config-organizationconformancepack-deliverys3keyprefix)" : String,
      "[ExcludedAccounts](#cfn-config-organizationconformancepack-excludedaccounts)" : [ String, ... ],
      "[OrganizationConformancePackName](#cfn-config-organizationconformancepack-organizationconformancepackname)" : String,
      "[TemplateBody](#cfn-config-organizationconformancepack-templatebody)" : String,
      "[TemplateS3Uri](#cfn-config-organizationconformancepack-templates3uri)" : String
    }
}
```

### YAML<a name="aws-resource-config-organizationconformancepack-syntax.yaml"></a>

```
Type: AWS::Config::OrganizationConformancePack
Properties:
  [ConformancePackInputParameters](#cfn-config-organizationconformancepack-conformancepackinputparameters):
    - ConformancePackInputParameter
  [DeliveryS3Bucket](#cfn-config-organizationconformancepack-deliverys3bucket): String
  [DeliveryS3KeyPrefix](#cfn-config-organizationconformancepack-deliverys3keyprefix): String
  [ExcludedAccounts](#cfn-config-organizationconformancepack-excludedaccounts):
    - String
  [OrganizationConformancePackName](#cfn-config-organizationconformancepack-organizationconformancepackname): String
  [TemplateBody](#cfn-config-organizationconformancepack-templatebody): String
  [TemplateS3Uri](#cfn-config-organizationconformancepack-templates3uri): String
```

## Properties<a name="aws-resource-config-organizationconformancepack-properties"></a>

`ConformancePackInputParameters` <a name="cfn-config-organizationconformancepack-conformancepackinputparameters"></a>
A list of `ConformancePackInputParameter` objects\.  
_Required_: No  
_Type_: List of [ConformancePackInputParameter](aws-properties-config-organizationconformancepack-conformancepackinputparameter.md)  
_Maximum_: `60`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeliveryS3Bucket` <a name="cfn-config-organizationconformancepack-deliverys3bucket"></a>
The name of the Amazon S3 bucket where AWS Config stores conformance pack templates\.  
This field is optional\.
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `63`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeliveryS3KeyPrefix` <a name="cfn-config-organizationconformancepack-deliverys3keyprefix"></a>
Any folder structure you want to add to an Amazon S3 bucket\.  
This field is optional\.
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExcludedAccounts` <a name="cfn-config-organizationconformancepack-excludedaccounts"></a>
A comma\-separated list of accounts excluded from organization conformance pack\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OrganizationConformancePackName` <a name="cfn-config-organizationconformancepack-organizationconformancepackname"></a>
The name you assign to an organization conformance pack\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[a-zA-Z][-a-zA-Z0-9]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TemplateBody` <a name="cfn-config-organizationconformancepack-templatebody"></a>
A string containing full conformance pack template body\. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TemplateS3Uri` <a name="cfn-config-organizationconformancepack-templates3uri"></a>
Location of file containing the template body\. The uri must point to the conformance pack template \(max size: 300 KB\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-config-organizationconformancepack-return-values"></a>

### Ref<a name="aws-resource-config-organizationconformancepack-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the name of organization conformance pack\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-config-organizationconformancepack--examples"></a>

### Organization Conformance Pack<a name="aws-resource-config-organizationconformancepack--examples--Organization_Conformance_Pack"></a>

The following example creates an organization conformance pack\.

#### JSON<a name="aws-resource-config-organizationconformancepack--examples--Organization_Conformance_Pack--json"></a>

```
{
    "Resources": {
        "OrganizationConformancePack": {
            "Type": "AWS::Config::OrganizationConformancePack",
            "Properties": {
                "OrganizationConformancePackName": "OrganizationConformancePackName",
                "DeliveryS3Bucket": "DeliveryS3Bucket",
                "TemplateS3Uri": "s3://bucketname/prefix"
             }
         }
     }
}
```

#### YAML<a name="aws-resource-config-organizationconformancepack--examples--Organization_Conformance_Pack--yaml"></a>

```
---
Resources:
    OrganizationConformancePack:
        Type: AWS::Config::OrganizationConformancePack
        Properties:
            OrganizationConformancePackName: OrganizationConformancePackName
            DeliveryS3Bucket: DeliveryS3Bucket
            TemplateS3Uri: s3://bucketname/prefix
```
