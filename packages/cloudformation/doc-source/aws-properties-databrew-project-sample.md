# AWS::DataBrew::Project Sample<a name="aws-properties-databrew-project-sample"></a>

Represents the sample size and sampling type for DataBrew to use for interactive data analysis\.

## Syntax<a name="aws-properties-databrew-project-sample-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-project-sample-syntax.json"></a>

```
{
  "[Size](#cfn-databrew-project-sample-size)" : Integer,
  "[Type](#cfn-databrew-project-sample-type)" : String
}
```

### YAML<a name="aws-properties-databrew-project-sample-syntax.yaml"></a>

```
  [Size](#cfn-databrew-project-sample-size): Integer
  [Type](#cfn-databrew-project-sample-type): String
```

## Properties<a name="aws-properties-databrew-project-sample-properties"></a>

`Size` <a name="cfn-databrew-project-sample-size"></a>
The number of rows in the sample\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `5000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-databrew-project-sample-type"></a>
The way in which DataBrew obtains rows from a dataset\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `FIRST_N | LAST_N | RANDOM`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
