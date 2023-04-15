# AWS::IoTCoreDeviceAdvisor::SuiteDefinition SuiteDefinitionConfiguration<a name="aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration"></a>

Gets the suite definition configuration\.

## Syntax<a name="aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-syntax.json"></a>

```
{
  "[DevicePermissionRoleArn](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devicepermissionrolearn)" : String,
  "[Devices](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devices)" : [ DeviceUnderTest, ... ],
  "[IntendedForQualification](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-intendedforqualification)" : Boolean,
  "[RootGroup](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-rootgroup)" : String,
  "[SuiteDefinitionName](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-suitedefinitionname)" : String
}
```

### YAML<a name="aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-syntax.yaml"></a>

```
  [DevicePermissionRoleArn](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devicepermissionrolearn): String
  [Devices](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devices):
    - DeviceUnderTest
  [IntendedForQualification](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-intendedforqualification): Boolean
  [RootGroup](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-rootgroup): String
  [SuiteDefinitionName](#cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-suitedefinitionname): String
```

## Properties<a name="aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-properties"></a>

`DevicePermissionRoleArn` <a name="cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devicepermissionrolearn"></a>
Gets the device permission ARN\. This is a required parameter\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Devices` <a name="cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-devices"></a>
Gets the devices configured\.  
_Required_: No  
_Type_: List of [DeviceUnderTest](aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IntendedForQualification` <a name="cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-intendedforqualification"></a>
Gets the tests intended for qualification in a suite\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RootGroup` <a name="cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-rootgroup"></a>
Gets the test suite root group\. This is a required parameter\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SuiteDefinitionName` <a name="cfn-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration-suitedefinitionname"></a>
Gets the suite definition name\. This is a required parameter\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
