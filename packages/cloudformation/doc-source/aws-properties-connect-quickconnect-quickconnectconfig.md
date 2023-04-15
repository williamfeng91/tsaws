# AWS::Connect::QuickConnect QuickConnectConfig<a name="aws-properties-connect-quickconnect-quickconnectconfig"></a>

Contains configuration settings for a quick connect\.

## Syntax<a name="aws-properties-connect-quickconnect-quickconnectconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-quickconnect-quickconnectconfig-syntax.json"></a>

```
{
  "[PhoneConfig](#cfn-connect-quickconnect-quickconnectconfig-phoneconfig)" : PhoneNumberQuickConnectConfig,
  "[QueueConfig](#cfn-connect-quickconnect-quickconnectconfig-queueconfig)" : QueueQuickConnectConfig,
  "[QuickConnectType](#cfn-connect-quickconnect-quickconnectconfig-quickconnecttype)" : String,
  "[UserConfig](#cfn-connect-quickconnect-quickconnectconfig-userconfig)" : UserQuickConnectConfig
}
```

### YAML<a name="aws-properties-connect-quickconnect-quickconnectconfig-syntax.yaml"></a>

```
  [PhoneConfig](#cfn-connect-quickconnect-quickconnectconfig-phoneconfig):
    PhoneNumberQuickConnectConfig
  [QueueConfig](#cfn-connect-quickconnect-quickconnectconfig-queueconfig):
    QueueQuickConnectConfig
  [QuickConnectType](#cfn-connect-quickconnect-quickconnectconfig-quickconnecttype): String
  [UserConfig](#cfn-connect-quickconnect-quickconnectconfig-userconfig):
    UserQuickConnectConfig
```

## Properties<a name="aws-properties-connect-quickconnect-quickconnectconfig-properties"></a>

`PhoneConfig` <a name="cfn-connect-quickconnect-quickconnectconfig-phoneconfig"></a>
The phone configuration\. This is required only if QuickConnectType is PHONE_NUMBER\.  
_Required_: No  
_Type_: [PhoneNumberQuickConnectConfig](aws-properties-connect-quickconnect-phonenumberquickconnectconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueueConfig` <a name="cfn-connect-quickconnect-quickconnectconfig-queueconfig"></a>
The queue configuration\. This is required only if QuickConnectType is QUEUE\.  
_Required_: No  
_Type_: [QueueQuickConnectConfig](aws-properties-connect-quickconnect-queuequickconnectconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QuickConnectType` <a name="cfn-connect-quickconnect-quickconnectconfig-quickconnecttype"></a>
The type of quick connect\. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent \(USER\), External \(PHONE_NUMBER\), or Queue \(QUEUE\)\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `PHONE_NUMBER | QUEUE | USER`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserConfig` <a name="cfn-connect-quickconnect-quickconnectconfig-userconfig"></a>
The user configuration\. This is required only if QuickConnectType is USER\.  
_Required_: No  
_Type_: [UserQuickConnectConfig](aws-properties-connect-quickconnect-userquickconnectconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
