# AWS::EMRServerless::Application<a name="aws-resource-emrserverless-application"></a>

The `AWS::EMRServerless::Application` resource specifies an EMR Serverless application\. An application uses open source analytics frameworks to run jobs that process data\. To create an application, you must specify the release version for the open source framework version you want to use and the type of application you want, such as Apache Spark or Apache Hive\. After you create an application, you can submit data processing jobs or interactive requests to it\.

## Syntax<a name="aws-resource-emrserverless-application-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-emrserverless-application-syntax.json"></a>

```
{
  "Type" : "AWS::EMRServerless::Application",
  "Properties" : {
      "[Architecture](#cfn-emrserverless-application-architecture)" : String,
      "[AutoStartConfiguration](#cfn-emrserverless-application-autostartconfiguration)" : AutoStartConfiguration,
      "[AutoStopConfiguration](#cfn-emrserverless-application-autostopconfiguration)" : AutoStopConfiguration,
      "[ImageConfiguration](#cfn-emrserverless-application-imageconfiguration)" : ImageConfigurationInput,
      "[InitialCapacity](#cfn-emrserverless-application-initialcapacity)" : [ InitialCapacityConfigKeyValuePair, ... ],
      "[MaximumCapacity](#cfn-emrserverless-application-maximumcapacity)" : MaximumAllowedResources,
      "[Name](#cfn-emrserverless-application-name)" : String,
      "[NetworkConfiguration](#cfn-emrserverless-application-networkconfiguration)" : NetworkConfiguration,
      "[ReleaseLabel](#cfn-emrserverless-application-releaselabel)" : String,
      "[Tags](#cfn-emrserverless-application-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[Type](#cfn-emrserverless-application-type)" : String,
      "[WorkerTypeSpecifications](#cfn-emrserverless-application-workertypespecifications)" : {Key : Value, ...}
    }
}
```

### YAML<a name="aws-resource-emrserverless-application-syntax.yaml"></a>

```
Type: AWS::EMRServerless::Application
Properties:
  [Architecture](#cfn-emrserverless-application-architecture): String
  [AutoStartConfiguration](#cfn-emrserverless-application-autostartconfiguration):
    AutoStartConfiguration
  [AutoStopConfiguration](#cfn-emrserverless-application-autostopconfiguration):
    AutoStopConfiguration
  [ImageConfiguration](#cfn-emrserverless-application-imageconfiguration):
    ImageConfigurationInput
  [InitialCapacity](#cfn-emrserverless-application-initialcapacity):
    - InitialCapacityConfigKeyValuePair
  [MaximumCapacity](#cfn-emrserverless-application-maximumcapacity):
    MaximumAllowedResources
  [Name](#cfn-emrserverless-application-name): String
  [NetworkConfiguration](#cfn-emrserverless-application-networkconfiguration):
    NetworkConfiguration
  [ReleaseLabel](#cfn-emrserverless-application-releaselabel): String
  [Tags](#cfn-emrserverless-application-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [Type](#cfn-emrserverless-application-type): String
  [WorkerTypeSpecifications](#cfn-emrserverless-application-workertypespecifications):
    Key : Value
```

## Properties<a name="aws-resource-emrserverless-application-properties"></a>

`Architecture` <a name="cfn-emrserverless-application-architecture"></a>
The CPU architecture type of the application\. Allowed values: `X86_64` or `ARM64`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AutoStartConfiguration` <a name="cfn-emrserverless-application-autostartconfiguration"></a>
The configuration for an application to automatically start on job submission\.  
_Required_: No  
_Type_: [AutoStartConfiguration](aws-properties-emrserverless-application-autostartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AutoStopConfiguration` <a name="cfn-emrserverless-application-autostopconfiguration"></a>
The configuration for an application to automatically stop after a certain amount of time being idle\.  
_Required_: No  
_Type_: [AutoStopConfiguration](aws-properties-emrserverless-application-autostopconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageConfiguration` <a name="cfn-emrserverless-application-imageconfiguration"></a>
The image configuration applied to all worker types\.  
_Required_: No  
_Type_: [ImageConfigurationInput](aws-properties-emrserverless-application-imageconfigurationinput.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InitialCapacity` <a name="cfn-emrserverless-application-initialcapacity"></a>
The initial capacity of the application\.  
_Required_: No  
_Type_: List of [InitialCapacityConfigKeyValuePair](aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumCapacity` <a name="cfn-emrserverless-application-maximumcapacity"></a>
The maximum capacity of the application\. This is cumulative across all workers at any given point in time during the lifespan of the application is created\. No new resources will be created once any one of the defined limits is hit\.  
_Required_: No  
_Type_: [MaximumAllowedResources](aws-properties-emrserverless-application-maximumallowedresources.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-emrserverless-application-name"></a>
The name of the application\.  
_Minimum_: 1  
_Maximum_: 64  
_Pattern_: `^[A-Za-z0-9._\\/#-]+$`  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`NetworkConfiguration` <a name="cfn-emrserverless-application-networkconfiguration"></a>
The network configuration for customer VPC connectivity for the application\.  
_Required_: No  
_Type_: [NetworkConfiguration](aws-properties-emrserverless-application-networkconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReleaseLabel` <a name="cfn-emrserverless-application-releaselabel"></a>
The EMR release version associated with the application\.  
_Minimum_: 1  
_Maximum_: 64  
_Pattern_: `^[A-Za-z0-9._/-]+$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-emrserverless-application-tags"></a>
The tags assigned to the application\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-emrserverless-application-type"></a>
The type of application, such as Spark or Hive\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`WorkerTypeSpecifications` <a name="cfn-emrserverless-application-workertypespecifications"></a>
The specification applied to each worker type\.  
_Required_: No  
_Type_: Map of [WorkerTypeSpecificationInput](aws-properties-emrserverless-application-workertypespecificationinput.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-emrserverless-application-return-values"></a>

### Ref<a name="aws-resource-emrserverless-application-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ID of the application\.

For more information about using the `Ref` function, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-emrserverless-application-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-emrserverless-application-return-values-fn--getatt-fn--getatt"></a>

`ApplicationId` <a name="ApplicationId-fn::getatt"></a>
The ID of the application, such as `ab4rp1abcs8xz47n3x0example`\.

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the project\.
