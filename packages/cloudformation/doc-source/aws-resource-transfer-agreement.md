# AWS::Transfer::Agreement<a name="aws-resource-transfer-agreement"></a>

Creates an agreement\. An agreement is a bilateral trading partner agreement, or partnership, between an AWS Transfer Family server and an AS2 process\. The agreement defines the file and message transfer relationship between the server and the AS2 process\. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes\.

The partner is identified with the `PartnerProfileId`, and the AS2 process is identified with the `LocalProfileId`\.

## Syntax<a name="aws-resource-transfer-agreement-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-transfer-agreement-syntax.json"></a>

```
{
  "Type" : "AWS::Transfer::Agreement",
  "Properties" : {
      "[AccessRole](#cfn-transfer-agreement-accessrole)" : String,
      "[BaseDirectory](#cfn-transfer-agreement-basedirectory)" : String,
      "[Description](#cfn-transfer-agreement-description)" : String,
      "[LocalProfileId](#cfn-transfer-agreement-localprofileid)" : String,
      "[PartnerProfileId](#cfn-transfer-agreement-partnerprofileid)" : String,
      "[ServerId](#cfn-transfer-agreement-serverid)" : String,
      "[Status](#cfn-transfer-agreement-status)" : String,
      "[Tags](#cfn-transfer-agreement-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-transfer-agreement-syntax.yaml"></a>

```
Type: AWS::Transfer::Agreement
Properties:
  [AccessRole](#cfn-transfer-agreement-accessrole): String
  [BaseDirectory](#cfn-transfer-agreement-basedirectory): String
  [Description](#cfn-transfer-agreement-description): String
  [LocalProfileId](#cfn-transfer-agreement-localprofileid): String
  [PartnerProfileId](#cfn-transfer-agreement-partnerprofileid): String
  [ServerId](#cfn-transfer-agreement-serverid): String
  [Status](#cfn-transfer-agreement-status): String
  [Tags](#cfn-transfer-agreement-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-transfer-agreement-properties"></a>

`AccessRole` <a name="cfn-transfer-agreement-accessrole"></a>
With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`\. We use the file’s parent directory \(for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`\) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission\. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request\. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `arn:.*role/.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BaseDirectory` <a name="cfn-transfer-agreement-basedirectory"></a>
The landing directory \(folder\) for files that are transferred by using the AS2 protocol\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^$|/.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-transfer-agreement-description"></a>
The name or short description that's used to identify the agreement\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `200`  
_Pattern_: `^[\p{Graph}]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LocalProfileId` <a name="cfn-transfer-agreement-localprofileid"></a>
A unique identifier for the AS2 local profile\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `19`  
_Maximum_: `19`  
_Pattern_: `^p-([0-9a-f]{17})$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PartnerProfileId` <a name="cfn-transfer-agreement-partnerprofileid"></a>
A unique identifier for the partner profile used in the agreement\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `19`  
_Maximum_: `19`  
_Pattern_: `^p-([0-9a-f]{17})$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServerId` <a name="cfn-transfer-agreement-serverid"></a>
A system\-assigned unique identifier for a server instance\. This identifier indicates the specific server that the agreement uses\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `19`  
_Maximum_: `19`  
_Pattern_: `^s-([0-9a-f]{17})$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Status` <a name="cfn-transfer-agreement-status"></a>
The current status of the agreement, either `ACTIVE` or `INACTIVE`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ACTIVE | INACTIVE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-transfer-agreement-tags"></a>
Key\-value pairs that can be used to group and search for agreements\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-transfer-agreement-return-values"></a>

### Ref<a name="aws-resource-transfer-agreement-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-transfer-agreement-return-values-fn--getatt"></a>

#### <a name="aws-resource-transfer-agreement-return-values-fn--getatt-fn--getatt"></a>

`AgreementId` <a name="AgreementId-fn::getatt"></a>
Property description not available\.

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.
