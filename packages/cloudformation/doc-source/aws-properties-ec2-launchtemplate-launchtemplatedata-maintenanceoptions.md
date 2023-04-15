# AWS::EC2::LaunchTemplate MaintenanceOptions<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions"></a>

The maintenance options of your instance\.

## Syntax<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-syntax.json"></a>

```
{
  "[AutoRecovery](#cfn-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-autorecovery)" : String
}
```

### YAML<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-syntax.yaml"></a>

```
  [AutoRecovery](#cfn-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-autorecovery): String
```

## Properties<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-properties"></a>

`AutoRecovery` <a name="cfn-ec2-launchtemplate-launchtemplatedata-maintenanceoptions-autorecovery"></a>
Disables the automatic recovery behavior of your instance or sets it to default\.  
_Required_: No  
_Type_: String  
_Allowed values_: `default | disabled`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
