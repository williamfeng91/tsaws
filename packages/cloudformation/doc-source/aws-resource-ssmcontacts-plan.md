# AWS::SSMContacts::Plan<a name="aws-resource-ssmcontacts-plan"></a>

Information about the stages and on\-call rotation teams associated with an escalation plan or engagement plan\.

## Syntax<a name="aws-resource-ssmcontacts-plan-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ssmcontacts-plan-syntax.json"></a>

```
{
  "Type" : "AWS::SSMContacts::Plan",
  "Properties" : {
      "[ContactId](#cfn-ssmcontacts-plan-contactid)" : String,
      "[RotationIds](#cfn-ssmcontacts-plan-rotationids)" : [ String, ... ],
      "[Stages](#cfn-ssmcontacts-plan-stages)" : [ Stage, ... ]
    }
}
```

### YAML<a name="aws-resource-ssmcontacts-plan-syntax.yaml"></a>

```
Type: AWS::SSMContacts::Plan
Properties:
  [ContactId](#cfn-ssmcontacts-plan-contactid): String
  [RotationIds](#cfn-ssmcontacts-plan-rotationids):
    - String
  [Stages](#cfn-ssmcontacts-plan-stages):
    - Stage
```

## Properties<a name="aws-resource-ssmcontacts-plan-properties"></a>

`ContactId` <a name="cfn-ssmcontacts-plan-contactid"></a>
The Amazon Resource Name \(ARN\) of the contact\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RotationIds` <a name="cfn-ssmcontacts-plan-rotationids"></a>
The Amazon Resource Names \(ARNs\) of the on\-call rotations associated with the plan\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `25`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Stages` <a name="cfn-ssmcontacts-plan-stages"></a>
A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods\.  
_Required_: No  
_Type_: List of [Stage](aws-properties-ssmcontacts-plan-stage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-ssmcontacts-plan-return-values"></a>

### Ref<a name="aws-resource-ssmcontacts-plan-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-ssmcontacts-plan-return-values-fn--getatt"></a>

#### <a name="aws-resource-ssmcontacts-plan-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Property description not available\.
