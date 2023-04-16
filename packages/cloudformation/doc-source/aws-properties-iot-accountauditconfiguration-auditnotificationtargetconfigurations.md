# AWS::IoT::AccountAuditConfiguration AuditNotificationTargetConfigurations<a name="aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations"></a>

The configuration of the audit notification target\.

## Syntax<a name="aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations-syntax.json"></a>

```
{
  "[Sns](#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations-sns)" : AuditNotificationTarget
}
```

### YAML<a name="aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations-syntax.yaml"></a>

```
  [Sns](#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations-sns):
    AuditNotificationTarget
```

## Properties<a name="aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations-properties"></a>

`Sns` <a name="cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations-sns"></a>
The `Sns` notification target\.  
_Required_: No  
_Type_: [AuditNotificationTarget](aws-properties-iot-accountauditconfiguration-auditnotificationtarget.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
