# AWS::Connect::PhoneNumber<a name="aws-resource-connect-phonenumber"></a>

Claims a phone number to the specified Amazon Connect instance or traffic distribution group\.

## Syntax<a name="aws-resource-connect-phonenumber-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-connect-phonenumber-syntax.json"></a>

```
{
  "Type" : "AWS::Connect::PhoneNumber",
  "Properties" : {
      "[CountryCode](#cfn-connect-phonenumber-countrycode)" : String,
      "[Description](#cfn-connect-phonenumber-description)" : String,
      "[Prefix](#cfn-connect-phonenumber-prefix)" : String,
      "[Tags](#cfn-connect-phonenumber-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[TargetArn](#cfn-connect-phonenumber-targetarn)" : String,
      "[Type](#cfn-connect-phonenumber-type)" : String
    }
}
```

### YAML<a name="aws-resource-connect-phonenumber-syntax.yaml"></a>

```
Type: AWS::Connect::PhoneNumber
Properties:
  [CountryCode](#cfn-connect-phonenumber-countrycode): String
  [Description](#cfn-connect-phonenumber-description): String
  [Prefix](#cfn-connect-phonenumber-prefix): String
  [Tags](#cfn-connect-phonenumber-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TargetArn](#cfn-connect-phonenumber-targetarn): String
  [Type](#cfn-connect-phonenumber-type): String
```

## Properties<a name="aws-resource-connect-phonenumber-properties"></a>

`CountryCode` <a name="cfn-connect-phonenumber-countrycode"></a>
The ISO country code\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `AD | AE | AF | AG | AI | AL | AM | AN | AO | AQ | AR | AS | AT | AU | AW | AZ | BA | BB | BD | BE | BF | BG | BH | BI | BJ | BL | BM | BN | BO | BR | BS | BT | BW | BY | BZ | CA | CC | CD | CF | CG | CH | CI | CK | CL | CM | CN | CO | CR | CU | CV | CW | CX | CY | CZ | DE | DJ | DK | DM | DO | DZ | EC | EE | EG | EH | ER | ES | ET | FI | FJ | FK | FM | FO | FR | GA | GB | GD | GE | GG | GH | GI | GL | GM | GN | GQ | GR | GT | GU | GW | GY | HK | HN | HR | HT | HU | ID | IE | IL | IM | IN | IO | IQ | IR | IS | IT | JE | JM | JO | JP | KE | KG | KH | KI | KM | KN | KP | KR | KW | KY | KZ | LA | LB | LC | LI | LK | LR | LS | LT | LU | LV | LY | MA | MC | MD | ME | MF | MG | MH | MK | ML | MM | MN | MO | MP | MR | MS | MT | MU | MV | MW | MX | MY | MZ | NA | NC | NE | NG | NI | NL | NO | NP | NR | NU | NZ | OM | PA | PE | PF | PG | PH | PK | PL | PM | PN | PR | PT | PW | PY | QA | RE | RO | RS | RU | RW | SA | SB | SC | SD | SE | SG | SH | SI | SJ | SK | SL | SM | SN | SO | SR | ST | SV | SX | SY | SZ | TC | TD | TG | TH | TJ | TK | TL | TM | TN | TO | TR | TT | TV | TW | TZ | UA | UG | US | UY | UZ | VA | VC | VE | VG | VI | VN | VU | WF | WS | YE | YT | ZA | ZM | ZW`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Description` <a name="cfn-connect-phonenumber-description"></a>
The description of the phone number\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `500`  
_Pattern_: `^[\W\S_]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Prefix` <a name="cfn-connect-phonenumber-prefix"></a>
The prefix of the phone number\. If provided, it must contain `+` as part of the country code\.  
_Pattern_: `^\\+[0-9]{1,15}`  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-connect-phonenumber-tags"></a>
The tags used to organize, track, or control access for this resource\. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetArn` <a name="cfn-connect-phonenumber-targetarn"></a>
The Amazon Resource Name \(ARN\) for Amazon Connect instances or traffic distribution group that phone numbers are claimed to\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-connect-phonenumber-type"></a>
The type of phone number\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DID | TOLL_FREE`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-connect-phonenumber-return-values"></a>

### Ref<a name="aws-resource-connect-phonenumber-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the phone number\. For example:

`{ "Ref": "myPhoneNumber" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-connect-phonenumber-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-connect-phonenumber-return-values-fn--getatt-fn--getatt"></a>

`Address` <a name="Address-fn::getatt"></a>
The phone number, in E\.164 format\.

`PhoneNumberArn` <a name="PhoneNumberArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the phone number\.

## Examples<a name="aws-resource-connect-phonenumber--examples"></a>

### Specify a phone number resource<a name="aws-resource-connect-phonenumber--examples--Specify_a_phone_number_resource"></a>

The following example specifies a phone number resource for an Amazon Connect instance\.

#### YAML<a name="aws-resource-connect-phonenumber--examples--Specify_a_phone_number_resource--yaml"></a>

```
AWSTemplateFormatVersion: 2010-09-09
 Description: Specifies a phone number for Amazon Connect instance
 Resources:
   PhoneNumber:
     Type: 'AWS::Connect::PhoneNumber'
     Properties:
       TargetArn: arn:aws:connect:region-name:aws-account-id:instance/instance-arn
       Description: phone number created using cfn
       Type: DID
       CountryCode: US
       Tags:
         - Key: testkey
           Value: testValue
```
