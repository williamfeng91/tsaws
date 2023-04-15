# AWS::Backup::Framework FrameworkControl<a name="aws-properties-backup-framework-frameworkcontrol"></a>

Contains detailed information about all of the controls of a framework\. Each framework must contain at least one control\.

## Syntax<a name="aws-properties-backup-framework-frameworkcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-backup-framework-frameworkcontrol-syntax.json"></a>

```
{
  "[ControlInputParameters](#cfn-backup-framework-frameworkcontrol-controlinputparameters)" : [ ControlInputParameter, ... ],
  "[ControlName](#cfn-backup-framework-frameworkcontrol-controlname)" : String,
  "[ControlScope](#cfn-backup-framework-frameworkcontrol-controlscope)" : ControlScope
}
```

### YAML<a name="aws-properties-backup-framework-frameworkcontrol-syntax.yaml"></a>

```
  [ControlInputParameters](#cfn-backup-framework-frameworkcontrol-controlinputparameters):
    - ControlInputParameter
  [ControlName](#cfn-backup-framework-frameworkcontrol-controlname): String
  [ControlScope](#cfn-backup-framework-frameworkcontrol-controlscope):
    ControlScope
```

## Properties<a name="aws-properties-backup-framework-frameworkcontrol-properties"></a>

`ControlInputParameters` <a name="cfn-backup-framework-frameworkcontrol-controlinputparameters"></a>
A list of `ParameterName` and `ParameterValue` pairs\.  
_Required_: No  
_Type_: List of [ControlInputParameter](aws-properties-backup-framework-controlinputparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ControlName` <a name="cfn-backup-framework-frameworkcontrol-controlname"></a>
The name of a control\. This name is between 1 and 256 characters\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ControlScope` <a name="cfn-backup-framework-frameworkcontrol-controlscope"></a>
The scope of a control\. The control scope defines what the control will evaluate\. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans\. For more information, see [`ControlScope`\.](aws-backup/latest/devguide/API_ControlScope.html)  
_Required_: No  
_Type_: [ControlScope](aws-properties-backup-framework-controlscope.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
