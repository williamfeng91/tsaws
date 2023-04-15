# AWS::FIS::ExperimentTemplate ExperimentTemplateAction<a name="aws-properties-fis-experimenttemplate-experimenttemplateaction"></a>

Specifies an action for an experiment template\.

For more information, see [Actions](https://docs.aws.amazon.com/fis/latest/userguide/actions.html) in the _AWS Fault Injection Simulator User Guide_\.

## Syntax<a name="aws-properties-fis-experimenttemplate-experimenttemplateaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-fis-experimenttemplate-experimenttemplateaction-syntax.json"></a>

```
{
  "[ActionId](#cfn-fis-experimenttemplate-experimenttemplateaction-actionid)" : String,
  "[Description](#cfn-fis-experimenttemplate-experimenttemplateaction-description)" : String,
  "[Parameters](#cfn-fis-experimenttemplate-experimenttemplateaction-parameters)" : {Key : Value, ...},
  "[StartAfter](#cfn-fis-experimenttemplate-experimenttemplateaction-startafter)" : [ String, ... ],
  "[Targets](#cfn-fis-experimenttemplate-experimenttemplateaction-targets)" : {Key : Value, ...}
}
```

### YAML<a name="aws-properties-fis-experimenttemplate-experimenttemplateaction-syntax.yaml"></a>

```
  [ActionId](#cfn-fis-experimenttemplate-experimenttemplateaction-actionid): String
  [Description](#cfn-fis-experimenttemplate-experimenttemplateaction-description): String
  [Parameters](#cfn-fis-experimenttemplate-experimenttemplateaction-parameters):
    Key : Value
  [StartAfter](#cfn-fis-experimenttemplate-experimenttemplateaction-startafter):
    - String
  [Targets](#cfn-fis-experimenttemplate-experimenttemplateaction-targets):
    Key : Value
```

## Properties<a name="aws-properties-fis-experimenttemplate-experimenttemplateaction-properties"></a>

`ActionId` <a name="cfn-fis-experimenttemplate-experimenttemplateaction-actionid"></a>
The ID of the action\. The format of the action ID is: aws:_service\-name_:_action\-type_\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `128`  
_Pattern_: `[\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-fis-experimenttemplate-experimenttemplateaction-description"></a>
A description for the action\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `[\s\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-fis-experimenttemplate-experimenttemplateaction-parameters"></a>
The parameters for the action, if applicable\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartAfter` <a name="cfn-fis-experimenttemplate-experimenttemplateaction-startafter"></a>
The name of the action that must be completed before the current action starts\. Omit this parameter to run the action at the start of the experiment\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Targets` <a name="cfn-fis-experimenttemplate-experimenttemplateaction-targets"></a>
The targets for the action\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
