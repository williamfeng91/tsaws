# AWS::KinesisAnalyticsV2::Application CustomArtifactConfiguration<a name="aws-properties-kinesisanalyticsv2-application-customartifactconfiguration"></a>

The configuration of connectors and user\-defined functions\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-customartifactconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-customartifactconfiguration-syntax.json"></a>

```
{
  "[ArtifactType](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-artifacttype)" : String,
  "[MavenReference](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-mavenreference)" : MavenReference,
  "[S3ContentLocation](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-s3contentlocation)" : S3ContentLocation
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-customartifactconfiguration-syntax.yaml"></a>

```
  [ArtifactType](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-artifacttype): String
  [MavenReference](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-mavenreference):
    MavenReference
  [S3ContentLocation](#cfn-kinesisanalyticsv2-application-customartifactconfiguration-s3contentlocation):
    S3ContentLocation
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-customartifactconfiguration-properties"></a>

`ArtifactType` <a name="cfn-kinesisanalyticsv2-application-customartifactconfiguration-artifacttype"></a>
Set this to either `UDF` or `DEPENDENCY_JAR`\. `UDF` stands for user\-defined functions\. This type of artifact must be in an S3 bucket\. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DEPENDENCY_JAR | UDF`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MavenReference` <a name="cfn-kinesisanalyticsv2-application-customartifactconfiguration-mavenreference"></a>
The parameters required to fully specify a Maven reference\.  
_Required_: No  
_Type_: [MavenReference](aws-properties-kinesisanalyticsv2-application-mavenreference.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3ContentLocation` <a name="cfn-kinesisanalyticsv2-application-customartifactconfiguration-s3contentlocation"></a>
The location of the custom artifacts\.  
_Required_: No  
_Type_: [S3ContentLocation](aws-properties-kinesisanalyticsv2-application-s3contentlocation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
