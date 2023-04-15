# AWS::Events::Archive<a name="aws-resource-events-archive"></a>

Creates an archive of events with the specified settings\. When you create an archive, incoming events might not immediately start being sent to the archive\. Allow a short period of time for changes to take effect\. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events\. Replayed events are not sent to an archive\.

## Syntax<a name="aws-resource-events-archive-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-events-archive-syntax.json"></a>

```
{
  "Type" : "AWS::Events::Archive",
  "Properties" : {
      "[ArchiveName](#cfn-events-archive-archivename)" : String,
      "[Description](#cfn-events-archive-description)" : String,
      "[EventPattern](#cfn-events-archive-eventpattern)" : Json,
      "[RetentionDays](#cfn-events-archive-retentiondays)" : Integer,
      "[SourceArn](#cfn-events-archive-sourcearn)" : String
    }
}
```

### YAML<a name="aws-resource-events-archive-syntax.yaml"></a>

```
Type: AWS::Events::Archive
Properties:
  [ArchiveName](#cfn-events-archive-archivename): String
  [Description](#cfn-events-archive-description): String
  [EventPattern](#cfn-events-archive-eventpattern): Json
  [RetentionDays](#cfn-events-archive-retentiondays): Integer
  [SourceArn](#cfn-events-archive-sourcearn): String
```

## Properties<a name="aws-resource-events-archive-properties"></a>

`ArchiveName` <a name="cfn-events-archive-archivename"></a>
The name for the archive to create\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `48`  
_Pattern_: `[\.\-_A-Za-z0-9]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Description` <a name="cfn-events-archive-description"></a>
A description for the archive\.  
_Required_: No  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EventPattern` <a name="cfn-events-archive-eventpattern"></a>
An event pattern to use to filter events sent to the archive\.  
_Required_: No  
_Type_: Json  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetentionDays` <a name="cfn-events-archive-retentiondays"></a>
The number of days to retain events for\. Default value is 0\. If set to 0, events are retained indefinitely  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceArn` <a name="cfn-events-archive-sourcearn"></a>
The ARN of the event bus that sends events to the archive\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1600`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-events-archive-return-values"></a>

### Ref<a name="aws-resource-events-archive-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the archive name\.

### Fn::GetAtt<a name="aws-resource-events-archive-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-events-archive-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The ARN of the archive created\.

## Examples<a name="aws-resource-events-archive--examples"></a>

### Create an archive<a name="aws-resource-events-archive--examples--Create_an_archive"></a>

The following example creates an archive for all EC2 events sent from the default event bus that retains events in the archive for 10 days\.

#### JSON<a name="aws-resource-events-archive--examples--Create_an_archive--json"></a>

```
{
  "SampleArchive":
    "Type" : "AWS::Events::Archive",
    "Properties" : {
        "ArchiveName" : "MyArchive",
        "Description" : "Archive for all EC2 events",
        "EventPattern" : {
              "source": [
                 "aws.ec2"
              ]
           },
        "RetentionDays" : "10",
        "SourceArn" : "arn:aws:events:us-west-2:123456789012:event-bus/default"
      }
}
```

#### YAML<a name="aws-resource-events-archive--examples--Create_an_archive--yaml"></a>

```
SampleArchive:
  Type: 'AWS::Events::Archive'
  Properties:
    ArchiveName: MyArchive
    Description: Archive for all EC2 events
    EventPattern:
      source:
        - "aws.ec2"
    RetentionDays: 10
    SourceArn: 'arn:aws:events:us-west-2:123456789012:event-bus/default'
```