# AWS::EFS::FileSystem ElasticFileSystemTag<a name="aws-properties-efs-filesystem-elasticfilesystemtag"></a>

A tag is a key\-value pair attached to a file system\. Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF\-8, and the following characters:` + - = . _ : /`

## Syntax<a name="aws-properties-efs-filesystem-elasticfilesystemtag-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-efs-filesystem-elasticfilesystemtag-syntax.json"></a>

```
{
  "[Key](#cfn-efs-filesystem-elasticfilesystemtag-key)" : String,
  "[Value](#cfn-efs-filesystem-elasticfilesystemtag-value)" : String
}
```

### YAML<a name="aws-properties-efs-filesystem-elasticfilesystemtag-syntax.yaml"></a>

```
  [Key](#cfn-efs-filesystem-elasticfilesystemtag-key): String
  [Value](#cfn-efs-filesystem-elasticfilesystemtag-value): String
```

## Properties<a name="aws-properties-efs-filesystem-elasticfilesystemtag-properties"></a>

`Key` <a name="cfn-efs-filesystem-elasticfilesystemtag-key"></a>
The tag key \(String\)\. The key can't start with `aws:`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^(?![aA]{1}[wW]{1}[sS]{1}:)([\p{L}\p{Z}\p{N}_.:/=+\-@]+)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-efs-filesystem-elasticfilesystemtag-value"></a>
The value of the tag key\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
