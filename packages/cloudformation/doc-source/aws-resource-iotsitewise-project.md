# AWS::IoTSiteWise::Project<a name="aws-resource-iotsitewise-project"></a>

Creates a project in the specified portal\.

**Note**  
Make sure that the project name and description don't contain confidential information\.

## Syntax<a name="aws-resource-iotsitewise-project-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-iotsitewise-project-syntax.json"></a>

```
{
  "Type" : "AWS::IoTSiteWise::Project",
  "Properties" : {
      "[AssetIds](#cfn-iotsitewise-project-assetids)" : [ String, ... ],
      "[PortalId](#cfn-iotsitewise-project-portalid)" : String,
      "[ProjectDescription](#cfn-iotsitewise-project-projectdescription)" : String,
      "[ProjectName](#cfn-iotsitewise-project-projectname)" : String,
      "[Tags](#cfn-iotsitewise-project-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-iotsitewise-project-syntax.yaml"></a>

```
Type: AWS::IoTSiteWise::Project
Properties:
  [AssetIds](#cfn-iotsitewise-project-assetids):
    - String
  [PortalId](#cfn-iotsitewise-project-portalid): String
  [ProjectDescription](#cfn-iotsitewise-project-projectdescription): String
  [ProjectName](#cfn-iotsitewise-project-projectname): String
  [Tags](#cfn-iotsitewise-project-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-iotsitewise-project-properties"></a>

`AssetIds` <a name="cfn-iotsitewise-project-assetids"></a>
A list that contains the IDs of each asset associated with the project\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortalId` <a name="cfn-iotsitewise-project-portalid"></a>
The ID of the portal in which to create the project\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProjectDescription` <a name="cfn-iotsitewise-project-projectdescription"></a>
A description for the project\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProjectName` <a name="cfn-iotsitewise-project-projectname"></a>
A friendly name for the project\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-iotsitewise-project-tags"></a>
A list of key\-value pairs that contain metadata for the project\. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-iotsitewise-project-return-values"></a>

### Ref<a name="aws-resource-iotsitewise-project-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the `ProjectId`\.

### Fn::GetAtt<a name="aws-resource-iotsitewise-project-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-iotsitewise-project-return-values-fn--getatt-fn--getatt"></a>

`ProjectArn` <a name="ProjectArn-fn::getatt"></a>
The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the project, which has the following format\.  
`arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}`  
For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

`ProjectId` <a name="ProjectId-fn::getatt"></a>
The ID of the project\.  
For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
