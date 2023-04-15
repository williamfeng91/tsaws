# AWS::SSM::MaintenanceWindowTarget Targets<a name="aws-properties-ssm-maintenancewindowtarget-targets"></a>

The `Targets` property type specifies adding a target to a maintenance window target in AWS Systems Manager\.

`Targets` is a property of the [AWS::SSM::MaintenanceWindowTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtarget.html) resource\.

## Syntax<a name="aws-properties-ssm-maintenancewindowtarget-targets-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssm-maintenancewindowtarget-targets-syntax.json"></a>

```
{
  "[Key](#cfn-ssm-maintenancewindowtarget-targets-key)" : String,
  "[Values](#cfn-ssm-maintenancewindowtarget-targets-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-ssm-maintenancewindowtarget-targets-syntax.yaml"></a>

```
  [Key](#cfn-ssm-maintenancewindowtarget-targets-key): String
  [Values](#cfn-ssm-maintenancewindowtarget-targets-values):
    - String
```

## Properties<a name="aws-properties-ssm-maintenancewindowtarget-targets-properties"></a>

`Key` <a name="cfn-ssm-maintenancewindowtarget-targets-key"></a>
User\-defined criteria for sending commands that target managed nodes that meet the criteria\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `163`  
_Pattern_: `^[\p{L}\p{Z}\p{N}_.:/=\-@]*$|resource-groups:ResourceTypeFilters|resource-groups:Name`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-ssm-maintenancewindowtarget-targets-values"></a>
User\-defined criteria that maps to `Key`\. For example, if you specified `tag:ServerRole`, you could specify `value:WebServer` to run a command on instances that include EC2 tags of `ServerRole,WebServer`\.  
Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
