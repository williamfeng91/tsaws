# AWS::SSM::MaintenanceWindowTask MaintenanceWindowStepFunctionsParameters<a name="aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters"></a>

The `MaintenanceWindowStepFunctionsParameters` property type specifies the parameters for the execution of a `STEP_FUNCTIONS` task in a Systems Manager maintenance window\.

`MaintenanceWindowStepFunctionsParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type\.

## Syntax<a name="aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-syntax.json"></a>

```
{
  "[Input](#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-input)" : String,
  "[Name](#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-name)" : String
}
```

### YAML<a name="aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-syntax.yaml"></a>

```
  [Input](#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-input): String
  [Name](#cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-name): String
```

## Properties<a name="aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-properties"></a>

`Input` <a name="cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-input"></a>
The inputs for the `STEP_FUNCTIONS` task\.  
_Required_: No  
_Type_: String  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters-name"></a>
The name of the `STEP_FUNCTIONS` task\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `80`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
