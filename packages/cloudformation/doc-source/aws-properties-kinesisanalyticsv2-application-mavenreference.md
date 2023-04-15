# AWS::KinesisAnalyticsV2::Application MavenReference<a name="aws-properties-kinesisanalyticsv2-application-mavenreference"></a>

The information required to specify a Maven reference\. You can use Maven references to specify dependency JAR files\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-mavenreference-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-mavenreference-syntax.json"></a>

```
{
  "[ArtifactId](#cfn-kinesisanalyticsv2-application-mavenreference-artifactid)" : String,
  "[GroupId](#cfn-kinesisanalyticsv2-application-mavenreference-groupid)" : String,
  "[Version](#cfn-kinesisanalyticsv2-application-mavenreference-version)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-mavenreference-syntax.yaml"></a>

```
  [ArtifactId](#cfn-kinesisanalyticsv2-application-mavenreference-artifactid): String
  [GroupId](#cfn-kinesisanalyticsv2-application-mavenreference-groupid): String
  [Version](#cfn-kinesisanalyticsv2-application-mavenreference-version): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-mavenreference-properties"></a>

`ArtifactId` <a name="cfn-kinesisanalyticsv2-application-mavenreference-artifactid"></a>
The artifact ID of the Maven reference\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GroupId` <a name="cfn-kinesisanalyticsv2-application-mavenreference-groupid"></a>
The group ID of the Maven reference\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Version` <a name="cfn-kinesisanalyticsv2-application-mavenreference-version"></a>
The version of the Maven reference\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
