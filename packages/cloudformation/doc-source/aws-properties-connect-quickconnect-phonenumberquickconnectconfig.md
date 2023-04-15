# AWS::Connect::QuickConnect PhoneNumberQuickConnectConfig<a name="aws-properties-connect-quickconnect-phonenumberquickconnectconfig"></a>

Contains information about a phone number for a quick connect\.

## Syntax<a name="aws-properties-connect-quickconnect-phonenumberquickconnectconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-quickconnect-phonenumberquickconnectconfig-syntax.json"></a>

```
{
  "[PhoneNumber](#cfn-connect-quickconnect-phonenumberquickconnectconfig-phonenumber)" : String
}
```

### YAML<a name="aws-properties-connect-quickconnect-phonenumberquickconnectconfig-syntax.yaml"></a>

```
  [PhoneNumber](#cfn-connect-quickconnect-phonenumberquickconnectconfig-phonenumber): String
```

## Properties<a name="aws-properties-connect-quickconnect-phonenumberquickconnectconfig-properties"></a>

`PhoneNumber` <a name="cfn-connect-quickconnect-phonenumberquickconnectconfig-phonenumber"></a>
The phone number in E\.164 format\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `\\+[1-9]\\d{1,14}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
