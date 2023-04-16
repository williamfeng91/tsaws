# AWS::FraudDetector::Detector Model<a name="aws-properties-frauddetector-detector-model"></a>

The model\.

## Syntax<a name="aws-properties-frauddetector-detector-model-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-frauddetector-detector-model-syntax.json"></a>

```
{
  "[Arn](#cfn-frauddetector-detector-model-arn)" : String
}
```

### YAML<a name="aws-properties-frauddetector-detector-model-syntax.yaml"></a>

```
  [Arn](#cfn-frauddetector-detector-model-arn): String
```

## Properties<a name="aws-properties-frauddetector-detector-model-properties"></a>

`Arn` <a name="cfn-frauddetector-detector-model-arn"></a>
The ARN of the model\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
