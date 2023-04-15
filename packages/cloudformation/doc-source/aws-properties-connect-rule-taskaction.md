# AWS::Connect::Rule TaskAction<a name="aws-properties-connect-rule-taskaction"></a>

Information about the task action\. This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` \| `OnZendeskTicketStatusUpdate` \| `OnSalesforceCaseCreate`

## Syntax<a name="aws-properties-connect-rule-taskaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-rule-taskaction-syntax.json"></a>

```
{
  "[ContactFlowArn](#cfn-connect-rule-taskaction-contactflowarn)" : String,
  "[Description](#cfn-connect-rule-taskaction-description)" : String,
  "[Name](#cfn-connect-rule-taskaction-name)" : String,
  "[References](#cfn-connect-rule-taskaction-references)" : {Key : Value, ...}
}
```

### YAML<a name="aws-properties-connect-rule-taskaction-syntax.yaml"></a>

```
  [ContactFlowArn](#cfn-connect-rule-taskaction-contactflowarn): String
  [Description](#cfn-connect-rule-taskaction-description): String
  [Name](#cfn-connect-rule-taskaction-name): String
  [References](#cfn-connect-rule-taskaction-references):
    Key : Value
```

## Properties<a name="aws-properties-connect-rule-taskaction-properties"></a>

`ContactFlowArn` <a name="cfn-connect-rule-taskaction-contactflowarn"></a>
The Amazon Resource Name \(ARN\) of the flow\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-connect-rule-taskaction-description"></a>
The description\. Supports variable injection\. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-connect-rule-taskaction-name"></a>
The name\. Supports variable injection\. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`References` <a name="cfn-connect-rule-taskaction-references"></a>
Information about the reference when the `referenceType` is `URL`\. Otherwise, null\. `URL` is the only accepted type\. \(Supports variable injection in the `Value` field\.\)  
_Required_: No  
_Type_: Map of [Reference](aws-properties-connect-rule-reference.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
