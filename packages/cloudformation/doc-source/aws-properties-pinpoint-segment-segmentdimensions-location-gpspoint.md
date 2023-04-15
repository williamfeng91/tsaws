# AWS::Pinpoint::Segment GPSPoint<a name="aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint"></a>

Specifies the GPS coordinates of the endpoint location\.

## Syntax<a name="aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-syntax.json"></a>

```
{
  "[Coordinates](#cfn-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates)" : Coordinates,
  "[RangeInKilometers](#cfn-pinpoint-segment-segmentdimensions-location-gpspoint-rangeinkilometers)" : Double
}
```

### YAML<a name="aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-syntax.yaml"></a>

```
  [Coordinates](#cfn-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates):
    Coordinates
  [RangeInKilometers](#cfn-pinpoint-segment-segmentdimensions-location-gpspoint-rangeinkilometers): Double
```

## Properties<a name="aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-properties"></a>

`Coordinates` <a name="cfn-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates"></a>
The GPS coordinates to measure distance from\.  
_Required_: Yes  
_Type_: [Coordinates](aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RangeInKilometers` <a name="cfn-pinpoint-segment-segmentdimensions-location-gpspoint-rangeinkilometers"></a>
The range, in kilometers, from the GPS coordinates\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
