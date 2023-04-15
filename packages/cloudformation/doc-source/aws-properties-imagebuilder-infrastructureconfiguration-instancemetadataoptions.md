# AWS::ImageBuilder::InfrastructureConfiguration InstanceMetadataOptions<a name="aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions"></a>

The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances\. For more information about instance metadata options, see [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the \* _Amazon EC2 User Guide_ _ for Linux instances, or [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html) in the _ _Amazon EC2 Windows Guide_ \* for Windows instances\.

## Syntax<a name="aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions-syntax.json"></a>

```
{
  "[HttpPutResponseHopLimit](#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httpputresponsehoplimit)" : Integer,
  "[HttpTokens](#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httptokens)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions-syntax.yaml"></a>

```
  [HttpPutResponseHopLimit](#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httpputresponsehoplimit): Integer
  [HttpTokens](#cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httptokens): String
```

## Properties<a name="aws-properties-imagebuilder-infrastructureconfiguration-instancemetadataoptions-properties"></a>

`HttpPutResponseHopLimit` <a name="cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httpputresponsehoplimit"></a>
Limit the number of hops that an instance metadata request can traverse to reach its destination\. The default is one hop\. However, if HTTP tokens are required, container image builds need a minimum of two hops\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HttpTokens` <a name="cfn-imagebuilder-infrastructureconfiguration-instancemetadataoptions-httptokens"></a>
Indicates whether a signed token header is required for instance metadata retrieval requests\. The values affect the response as follows:

- **required** – When you retrieve the IAM role credentials, version 2\.0 credentials are returned in all cases\.
- **optional** – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out\. If you include it, version 2\.0 credentials are returned for the IAM role\. Otherwise, version 1\.0 credentials are returned\.
  The default setting is **optional**\.  
  _Required_: No  
  _Type_: String  
  _Pattern_: `optional|required`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
