# AWS::Omics::AnnotationStore TsvStoreOptions<a name="aws-properties-omics-annotationstore-tsvstoreoptions"></a>

The store's parsing options\.

## Syntax<a name="aws-properties-omics-annotationstore-tsvstoreoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-omics-annotationstore-tsvstoreoptions-syntax.json"></a>

```
{
  "[AnnotationType](#cfn-omics-annotationstore-tsvstoreoptions-annotationtype)" : String,
  "[FormatToHeader](#cfn-omics-annotationstore-tsvstoreoptions-formattoheader)" : {Key : Value, ...},
  "[Schema](#cfn-omics-annotationstore-tsvstoreoptions-schema)" : Json
}
```

### YAML<a name="aws-properties-omics-annotationstore-tsvstoreoptions-syntax.yaml"></a>

```
  [AnnotationType](#cfn-omics-annotationstore-tsvstoreoptions-annotationtype): String
  [FormatToHeader](#cfn-omics-annotationstore-tsvstoreoptions-formattoheader):
    Key : Value
  [Schema](#cfn-omics-annotationstore-tsvstoreoptions-schema): Json
```

## Properties<a name="aws-properties-omics-annotationstore-tsvstoreoptions-properties"></a>

`AnnotationType` <a name="cfn-omics-annotationstore-tsvstoreoptions-annotationtype"></a>
The store's annotation type\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`FormatToHeader` <a name="cfn-omics-annotationstore-tsvstoreoptions-formattoheader"></a>
The store's header key to column name mapping\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Schema` <a name="cfn-omics-annotationstore-tsvstoreoptions-schema"></a>
The schema of an annotation store\.  
_Required_: No  
_Type_: Json  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
