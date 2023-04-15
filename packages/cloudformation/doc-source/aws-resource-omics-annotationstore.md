# AWS::Omics::AnnotationStore<a name="aws-resource-omics-annotationstore"></a>

Creates an annotation store\.

## Syntax<a name="aws-resource-omics-annotationstore-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-omics-annotationstore-syntax.json"></a>

```
{
  "Type" : "AWS::Omics::AnnotationStore",
  "Properties" : {
      "[Description](#cfn-omics-annotationstore-description)" : String,
      "[Name](#cfn-omics-annotationstore-name)" : String,
      "[Reference](#cfn-omics-annotationstore-reference)" : ReferenceItem,
      "[SseConfig](#cfn-omics-annotationstore-sseconfig)" : SseConfig,
      "[StoreFormat](#cfn-omics-annotationstore-storeformat)" : String,
      "[StoreOptions](#cfn-omics-annotationstore-storeoptions)" : StoreOptions,
      "[Tags](#cfn-omics-annotationstore-tags)" : {Key : Value, ...}
    }
}
```

### YAML<a name="aws-resource-omics-annotationstore-syntax.yaml"></a>

```
Type: AWS::Omics::AnnotationStore
Properties:
  [Description](#cfn-omics-annotationstore-description): String
  [Name](#cfn-omics-annotationstore-name): String
  [Reference](#cfn-omics-annotationstore-reference):
    ReferenceItem
  [SseConfig](#cfn-omics-annotationstore-sseconfig):
    SseConfig
  [StoreFormat](#cfn-omics-annotationstore-storeformat): String
  [StoreOptions](#cfn-omics-annotationstore-storeoptions):
    StoreOptions
  [Tags](#cfn-omics-annotationstore-tags):
    Key : Value
```

## Properties<a name="aws-resource-omics-annotationstore-properties"></a>

`Description` <a name="cfn-omics-annotationstore-description"></a>
A description for the store\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-omics-annotationstore-name"></a>
The name of the Annotation Store\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Reference` <a name="cfn-omics-annotationstore-reference"></a>
The genome reference for the store's annotations\.  
_Required_: No  
_Type_: [ReferenceItem](aws-properties-omics-annotationstore-referenceitem.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SseConfig` <a name="cfn-omics-annotationstore-sseconfig"></a>
The store's server\-side encryption \(SSE\) settings\.  
_Required_: No  
_Type_: [SseConfig](aws-properties-omics-annotationstore-sseconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StoreFormat` <a name="cfn-omics-annotationstore-storeformat"></a>
The annotation file format of the store\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StoreOptions` <a name="cfn-omics-annotationstore-storeoptions"></a>
File parsing options for the annotation store\.  
_Required_: No  
_Type_: [StoreOptions](aws-properties-omics-annotationstore-storeoptions.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-omics-annotationstore-tags"></a>
Tags for the store\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-omics-annotationstore-return-values"></a>

### Ref<a name="aws-resource-omics-annotationstore-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the details of this resource\. For example:

`{ "Ref": "AnnotationStore.Id" }` `Ref` returns the id for the annotation store\.

### Fn::GetAtt<a name="aws-resource-omics-annotationstore-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-omics-annotationstore-return-values-fn--getatt-fn--getatt"></a>

`CreationTime` <a name="CreationTime-fn::getatt"></a>
When the store was created\.

`Id` <a name="Id-fn::getatt"></a>
The store's ID\.

`Status` <a name="Status-fn::getatt"></a>
The store's status\.

`StatusMessage` <a name="StatusMessage-fn::getatt"></a>
The store's status message\.

`StoreArn` <a name="StoreArn-fn::getatt"></a>
The store's ARN\.

`StoreSizeBytes` <a name="StoreSizeBytes-fn::getatt"></a>
The store's size in bytes\.

`UpdateTime` <a name="UpdateTime-fn::getatt"></a>
When the store was updated\.
