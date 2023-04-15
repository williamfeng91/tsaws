# AWS::Location::Tracker<a name="aws-resource-location-tracker"></a>

Specifies a tracker resource in your AWS account, which lets you receive current and historical location of devices\.

## Syntax<a name="aws-resource-location-tracker-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-location-tracker-syntax.json"></a>

```
{
  "Type" : "AWS::Location::Tracker",
  "Properties" : {
      "[Description](#cfn-location-tracker-description)" : String,
      "[KmsKeyId](#cfn-location-tracker-kmskeyid)" : String,
      "[PositionFiltering](#cfn-location-tracker-positionfiltering)" : String,
      "[TrackerName](#cfn-location-tracker-trackername)" : String
    }
}
```

### YAML<a name="aws-resource-location-tracker-syntax.yaml"></a>

```
Type: AWS::Location::Tracker
Properties:
  [Description](#cfn-location-tracker-description): String
  [KmsKeyId](#cfn-location-tracker-kmskeyid): String
  [PositionFiltering](#cfn-location-tracker-positionfiltering): String
  [TrackerName](#cfn-location-tracker-trackername): String
```

## Properties<a name="aws-resource-location-tracker-properties"></a>

`Description` <a name="cfn-location-tracker-description"></a>
An optional description for the tracker resource\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKeyId` <a name="cfn-location-tracker-kmskeyid"></a>
A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html)\. Enter a key ID, key ARN, alias name, or alias ARN\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`PositionFiltering` <a name="cfn-location-tracker-positionfiltering"></a>
Specifies the position filtering for the tracker resource\.  
Valid values:

- `TimeBased` \- Location updates are evaluated against linked geofence collections, but not every location update is stored\. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID\.
- `DistanceBased` \- If the device has moved less than 30 m \(98\.4 ft\), location updates are ignored\. Location updates within this area are neither evaluated against linked geofence collections, nor stored\. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through\. Distance\-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map\.
- `AccuracyBased` \- If the device has moved less than the measured accuracy, location updates are ignored\. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m\. Ignored location updates are neither evaluated against linked geofence collections, nor stored\. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations\.
  This field is optional\. If not specified, the default value is `TimeBased`\.  
  _Required_: No  
  _Type_: String  
  _Allowed values_: `AccuracyBased | DistanceBased | TimeBased`  
  _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TrackerName` <a name="cfn-location-tracker-trackername"></a>
The name for the tracker resource\.  
Requirements:

- Contain only alphanumeric characters \(A\-Z, a\-z, 0\-9\) , hyphens \(\-\), periods \(\.\), and underscores \(\_\)\.
- Must be a unique tracker resource name\.
- No spaces allowed\. For example, `ExampleTracker`\.
  _Required_: Yes  
  _Type_: String  
  _Minimum_: `1`  
  _Maximum_: `100`  
  _Pattern_: `^[-._\w]+$`  
  _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-location-tracker-return-values"></a>

### Ref<a name="aws-resource-location-tracker-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the `Tracker` name\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-location-tracker-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-location-tracker-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) for the tracker resource\. Used when you need to specify a resource across all AWS\.

- Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`

`CreateTime` <a name="CreateTime-fn::getatt"></a>
The timestamp for when the tracker resource was created in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`\.

`TrackerArn` <a name="TrackerArn-fn::getatt"></a>
Synonym for `Arn`\. The Amazon Resource Name \(ARN\) for the tracker resource\. Used when you need to specify a resource across all AWS\.

- Format example: `arn:aws:geo:region:account-id:tracker/ExampleTracker`

`UpdateTime` <a name="UpdateTime-fn::getatt"></a>
The timestamp for when the tracker resource was last updated in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format: `YYYY-MM-DDThh:mm:ss.sssZ`\.
