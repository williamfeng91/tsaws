# AWS::SSM::Document AttachmentsSource<a name="aws-properties-ssm-document-attachmentssource"></a>

Identifying information about a document attachment, including the file name and a key\-value pair that identifies the location of an attachment to a document\.

## Syntax<a name="aws-properties-ssm-document-attachmentssource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssm-document-attachmentssource-syntax.json"></a>

```
{
  "[Key](#cfn-ssm-document-attachmentssource-key)" : String,
  "[Name](#cfn-ssm-document-attachmentssource-name)" : String,
  "[Values](#cfn-ssm-document-attachmentssource-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-ssm-document-attachmentssource-syntax.yaml"></a>

```
  [Key](#cfn-ssm-document-attachmentssource-key): String
  [Name](#cfn-ssm-document-attachmentssource-name): String
  [Values](#cfn-ssm-document-attachmentssource-values):
    - String
```

## Properties<a name="aws-properties-ssm-document-attachmentssource-properties"></a>

`Key` <a name="cfn-ssm-document-attachmentssource-key"></a>
The key of a key\-value pair that identifies the location of an attachment to a document\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AttachmentReference | S3FileUrl | SourceUrl`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssm-document-attachmentssource-name"></a>
The name of the document attachment file\.  
_Required_: No  
_Type_: String  
_Pattern_: `^[a-zA-Z0-9_\-.]{3,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-ssm-document-attachmentssource-values"></a>
The value of a key\-value pair that identifies the location of an attachment to a document\. The format for **Value** depends on the type of key you specify\.

- For the key _SourceUrl_, the value is an S3 bucket location\. For example:

  `"Values": [ "s3://doc-example-bucket/my-folder" ]`

- For the key _S3FileUrl_, the value is a file in an S3 bucket\. For example:

  `"Values": [ "s3://doc-example-bucket/my-folder/my-file.py" ]`

- For the key _AttachmentReference_, the value is constructed from the name of another SSM document in your account, a version number of that document, and a file attached to that document version that you want to reuse\. For example:

  `"Values": [ "MyOtherDocument/3/my-other-file.py" ]`

  However, if the SSM document is shared with you from another account, the full SSM document ARN must be specified instead of the document name only\. For example:

  `"Values": [ "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py" ]`
  _Required_: No  
  _Type_: List of String  
  _Maximum_: `1`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)