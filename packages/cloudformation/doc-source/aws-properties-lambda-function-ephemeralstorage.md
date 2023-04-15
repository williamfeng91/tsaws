# AWS::Lambda::Function EphemeralStorage<a name="aws-properties-lambda-function-ephemeralstorage"></a>

The size of the function's `/tmp` directory in MB\. The default value is 512, but it can be any whole number between 512 and 10,240 MB\.

## Syntax<a name="aws-properties-lambda-function-ephemeralstorage-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lambda-function-ephemeralstorage-syntax.json"></a>

```
{
  "[Size](#cfn-lambda-function-ephemeralstorage-size)" : Integer
}
```

### YAML<a name="aws-properties-lambda-function-ephemeralstorage-syntax.yaml"></a>

```
  [Size](#cfn-lambda-function-ephemeralstorage-size): Integer
```

## Properties<a name="aws-properties-lambda-function-ephemeralstorage-properties"></a>

`Size` <a name="cfn-lambda-function-ephemeralstorage-size"></a>
The size of the function's `/tmp` directory\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `512`  
_Maximum_: `10240`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
