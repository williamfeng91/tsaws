# AWS::GuardDuty::ThreatIntelSet<a name="aws-resource-guardduty-threatintelset"></a>

The `AWS::GuardDuty::ThreatIntelSet` resource specifies a new `ThreatIntelSet`\. A `ThreatIntelSet` consists of known malicious IP addresses\. GuardDuty generates findings based on the `ThreatIntelSet` when it is activated\.

## Syntax<a name="aws-resource-guardduty-threatintelset-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-guardduty-threatintelset-syntax.json"></a>

```
{
  "Type" : "AWS::GuardDuty::ThreatIntelSet",
  "Properties" : {
      "[Activate](#cfn-guardduty-threatintelset-activate)" : Boolean,
      "[DetectorId](#cfn-guardduty-threatintelset-detectorid)" : String,
      "[Format](#cfn-guardduty-threatintelset-format)" : String,
      "[Location](#cfn-guardduty-threatintelset-location)" : String,
      "[Name](#cfn-guardduty-threatintelset-name)" : String,
      "[Tags](#cfn-guardduty-threatintelset-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-guardduty-threatintelset-syntax.yaml"></a>

```
Type: AWS::GuardDuty::ThreatIntelSet
Properties:
  [Activate](#cfn-guardduty-threatintelset-activate): Boolean
  [DetectorId](#cfn-guardduty-threatintelset-detectorid): String
  [Format](#cfn-guardduty-threatintelset-format): String
  [Location](#cfn-guardduty-threatintelset-location): String
  [Name](#cfn-guardduty-threatintelset-name): String
  [Tags](#cfn-guardduty-threatintelset-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-guardduty-threatintelset-properties"></a>

`Activate` <a name="cfn-guardduty-threatintelset-activate"></a>
A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DetectorId` <a name="cfn-guardduty-threatintelset-detectorid"></a>
The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Format` <a name="cfn-guardduty-threatintelset-format"></a>
The format of the file that contains the ThreatIntelSet\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ALIEN_VAULT | FIRE_EYE | OTX_CSV | PROOF_POINT | STIX | TXT`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Location` <a name="cfn-guardduty-threatintelset-location"></a>
The URI of the file that contains the ThreatIntelSet\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-guardduty-threatintelset-name"></a>
A user\-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-guardduty-threatintelset-tags"></a>
The tags to be added to a new threat list resource\. Each tag consists of a key and an optional value, both of which you define\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-guardduty-threatintelset-return-values"></a>

### Ref<a name="aws-resource-guardduty-threatintelset-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the unique ID of the `ThreatIntelSet`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-guardduty-threatintelset--examples"></a>

### Declare a ThreatIntelSet Resource<a name="aws-resource-guardduty-threatintelset--examples--Declare_a_ThreatIntelSet_Resource"></a>

The following example shows how to declare a GuardDuty `ThreatIntelSet` resource:

#### JSON<a name="aws-resource-guardduty-threatintelset--examples--Declare_a_ThreatIntelSet_Resource--json"></a>

```
"mythreatintelset": {
    "Type": "AWS::GuardDuty::ThreatIntelSet",
    "Properties": {
        "Activate": true,
        "DetectorId": "12abc34d567e8f4912ab3d45e67891f2",
        "Format": "TXT",
        "Location": "https://s3-us-west-2.amazonaws.com/mybucket/mythreatintelset.txt",
        "Name": "MyThreatIntelSet"
    }
}
```

#### YAML<a name="aws-resource-guardduty-threatintelset--examples--Declare_a_ThreatIntelSet_Resource--yaml"></a>

```
mythreatintelset:
    Type: AWS::GuardDuty::ThreatIntelSet
    Properties:
        Activate: true
        DetectorId: "12abc34d567e8f4912ab3d45e67891f2"
        Format: "TXT"
        Location: "https://s3-us-west-2.amazonaws.com/mybucket/mythreatintelset.txt"
        Name: "MyThreatIntelSet"
```