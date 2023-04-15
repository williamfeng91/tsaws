# AWS::Connect::User UserPhoneConfig<a name="aws-properties-connect-user-userphoneconfig"></a>

Contains information about the phone configuration settings for a user\.

## Syntax<a name="aws-properties-connect-user-userphoneconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connect-user-userphoneconfig-syntax.json"></a>

```
{
  "[AfterContactWorkTimeLimit](#cfn-connect-user-userphoneconfig-aftercontactworktimelimit)" : Integer,
  "[AutoAccept](#cfn-connect-user-userphoneconfig-autoaccept)" : Boolean,
  "[DeskPhoneNumber](#cfn-connect-user-userphoneconfig-deskphonenumber)" : String,
  "[PhoneType](#cfn-connect-user-userphoneconfig-phonetype)" : String
}
```

### YAML<a name="aws-properties-connect-user-userphoneconfig-syntax.yaml"></a>

```
  [AfterContactWorkTimeLimit](#cfn-connect-user-userphoneconfig-aftercontactworktimelimit): Integer
  [AutoAccept](#cfn-connect-user-userphoneconfig-autoaccept): Boolean
  [DeskPhoneNumber](#cfn-connect-user-userphoneconfig-deskphonenumber): String
  [PhoneType](#cfn-connect-user-userphoneconfig-phonetype): String
```

## Properties<a name="aws-properties-connect-user-userphoneconfig-properties"></a>

`AfterContactWorkTimeLimit` <a name="cfn-connect-user-userphoneconfig-aftercontactworktimelimit"></a>
The After Call Work \(ACW\) timeout setting, in seconds\.  
When returned by a `SearchUsers` call, `AfterContactWorkTimeLimit` is returned in milliseconds\.
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AutoAccept` <a name="cfn-connect-user-userphoneconfig-autoaccept"></a>
The Auto accept setting\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeskPhoneNumber` <a name="cfn-connect-user-userphoneconfig-deskphonenumber"></a>
The phone number for the user's desk phone\.  
_Required_: No  
_Type_: String  
_Pattern_: `\\+[1-9]\\d{1,14}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PhoneType` <a name="cfn-connect-user-userphoneconfig-phonetype"></a>
The phone type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DESK_PHONE | SOFT_PHONE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
