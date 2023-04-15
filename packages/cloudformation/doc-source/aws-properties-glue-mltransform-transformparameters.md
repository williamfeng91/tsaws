# AWS::Glue::MLTransform TransformParameters<a name="aws-properties-glue-mltransform-transformparameters"></a>

The algorithm\-specific parameters that are associated with the machine learning transform\.

## Syntax<a name="aws-properties-glue-mltransform-transformparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-mltransform-transformparameters-syntax.json"></a>

```
{
  "[FindMatchesParameters](#cfn-glue-mltransform-transformparameters-findmatchesparameters)" : FindMatchesParameters,
  "[TransformType](#cfn-glue-mltransform-transformparameters-transformtype)" : String
}
```

### YAML<a name="aws-properties-glue-mltransform-transformparameters-syntax.yaml"></a>

```
  [FindMatchesParameters](#cfn-glue-mltransform-transformparameters-findmatchesparameters):
    FindMatchesParameters
  [TransformType](#cfn-glue-mltransform-transformparameters-transformtype): String
```

## Properties<a name="aws-properties-glue-mltransform-transformparameters-properties"></a>

`FindMatchesParameters` <a name="cfn-glue-mltransform-transformparameters-findmatchesparameters"></a>
The parameters for the find matches algorithm\.  
_Required_: No  
_Type_: [FindMatchesParameters](aws-properties-glue-mltransform-transformparameters-findmatchesparameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TransformType` <a name="cfn-glue-mltransform-transformparameters-transformtype"></a>
The type of machine learning transform\. `FIND_MATCHES` is the only option\.  
For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
