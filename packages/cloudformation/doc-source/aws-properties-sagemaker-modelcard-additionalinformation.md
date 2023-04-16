# AWS::SageMaker::ModelCard AdditionalInformation<a name="aws-properties-sagemaker-modelcard-additionalinformation"></a>

Additional information about the model\.

## Syntax<a name="aws-properties-sagemaker-modelcard-additionalinformation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-additionalinformation-syntax.json"></a>

```
{
  "[CaveatsAndRecommendations](#cfn-sagemaker-modelcard-additionalinformation-caveatsandrecommendations)" : String,
  "[CustomDetails](#cfn-sagemaker-modelcard-additionalinformation-customdetails)" : {Key : Value, ...},
  "[EthicalConsiderations](#cfn-sagemaker-modelcard-additionalinformation-ethicalconsiderations)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-additionalinformation-syntax.yaml"></a>

```
  [CaveatsAndRecommendations](#cfn-sagemaker-modelcard-additionalinformation-caveatsandrecommendations): String
  [CustomDetails](#cfn-sagemaker-modelcard-additionalinformation-customdetails):
    Key : Value
  [EthicalConsiderations](#cfn-sagemaker-modelcard-additionalinformation-ethicalconsiderations): String
```

## Properties<a name="aws-properties-sagemaker-modelcard-additionalinformation-properties"></a>

`CaveatsAndRecommendations` <a name="cfn-sagemaker-modelcard-additionalinformation-caveatsandrecommendations"></a>
Caveats and recommendations for those who might use this model in their applications\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomDetails` <a name="cfn-sagemaker-modelcard-additionalinformation-customdetails"></a>
Any additional information to document about the model\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EthicalConsiderations` <a name="cfn-sagemaker-modelcard-additionalinformation-ethicalconsiderations"></a>
Any ethical considerations documented by the model card author\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
