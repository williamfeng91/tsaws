# AWS::Panorama::ApplicationInstance<a name="aws-resource-panorama-applicationinstance"></a>

Creates an application instance and deploys it to a device\.

## Syntax<a name="aws-resource-panorama-applicationinstance-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-panorama-applicationinstance-syntax.json"></a>

```
{
  "Type" : "AWS::Panorama::ApplicationInstance",
  "Properties" : {
      "[ApplicationInstanceIdToReplace](#cfn-panorama-applicationinstance-applicationinstanceidtoreplace)" : String,
      "[DefaultRuntimeContextDevice](#cfn-panorama-applicationinstance-defaultruntimecontextdevice)" : String,
      "[Description](#cfn-panorama-applicationinstance-description)" : String,
      "[DeviceId](#cfn-panorama-applicationinstance-deviceid)" : String,
      "[ManifestOverridesPayload](#cfn-panorama-applicationinstance-manifestoverridespayload)" : ManifestOverridesPayload,
      "[ManifestPayload](#cfn-panorama-applicationinstance-manifestpayload)" : ManifestPayload,
      "[Name](#cfn-panorama-applicationinstance-name)" : String,
      "[RuntimeRoleArn](#cfn-panorama-applicationinstance-runtimerolearn)" : String,
      "[StatusFilter](#cfn-panorama-applicationinstance-statusfilter)" : String,
      "[Tags](#cfn-panorama-applicationinstance-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-panorama-applicationinstance-syntax.yaml"></a>

```
Type: AWS::Panorama::ApplicationInstance
Properties:
  [ApplicationInstanceIdToReplace](#cfn-panorama-applicationinstance-applicationinstanceidtoreplace): String
  [DefaultRuntimeContextDevice](#cfn-panorama-applicationinstance-defaultruntimecontextdevice): String
  [Description](#cfn-panorama-applicationinstance-description): String
  [DeviceId](#cfn-panorama-applicationinstance-deviceid): String
  [ManifestOverridesPayload](#cfn-panorama-applicationinstance-manifestoverridespayload):
    ManifestOverridesPayload
  [ManifestPayload](#cfn-panorama-applicationinstance-manifestpayload):
    ManifestPayload
  [Name](#cfn-panorama-applicationinstance-name): String
  [RuntimeRoleArn](#cfn-panorama-applicationinstance-runtimerolearn): String
  [StatusFilter](#cfn-panorama-applicationinstance-statusfilter): String
  [Tags](#cfn-panorama-applicationinstance-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-panorama-applicationinstance-properties"></a>

`ApplicationInstanceIdToReplace` <a name="cfn-panorama-applicationinstance-applicationinstanceidtoreplace"></a>
The ID of an application instance to replace with the new instance\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9\-\_]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DefaultRuntimeContextDevice` <a name="cfn-panorama-applicationinstance-defaultruntimecontextdevice"></a>
The device's ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9\-\_]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Description` <a name="cfn-panorama-applicationinstance-description"></a>
A description for the application instance\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `255`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DeviceId` <a name="cfn-panorama-applicationinstance-deviceid"></a>
A device's ID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9\-\_]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ManifestOverridesPayload` <a name="cfn-panorama-applicationinstance-manifestoverridespayload"></a>
Setting overrides for the application manifest\.  
_Required_: No  
_Type_: [ManifestOverridesPayload](aws-properties-panorama-applicationinstance-manifestoverridespayload.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ManifestPayload` <a name="cfn-panorama-applicationinstance-manifestpayload"></a>
The application's manifest document\.  
_Required_: Yes  
_Type_: [ManifestPayload](aws-properties-panorama-applicationinstance-manifestpayload.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-panorama-applicationinstance-name"></a>
A name for the application instance\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9\-\_]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RuntimeRoleArn` <a name="cfn-panorama-applicationinstance-runtimerolearn"></a>
The ARN of a runtime role for the application instance\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `arn:[a-z0-9][-.a-z0-9]{0,62}:iam::[0-9]{12}:role/.+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StatusFilter` <a name="cfn-panorama-applicationinstance-statusfilter"></a>
Only include instances with a specific status\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DEPLOYMENT_ERROR | DEPLOYMENT_FAILED | DEPLOYMENT_SUCCEEDED | PROCESSING_DEPLOYMENT | PROCESSING_REMOVAL | REMOVAL_FAILED | REMOVAL_SUCCEEDED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-panorama-applicationinstance-tags"></a>
Tags for the application instance\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-panorama-applicationinstance-return-values"></a>

### Ref<a name="aws-resource-panorama-applicationinstance-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns a unique identifier for this resource\.

### Fn::GetAtt<a name="aws-resource-panorama-applicationinstance-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-panorama-applicationinstance-return-values-fn--getatt-fn--getatt"></a>

`ApplicationInstanceId` <a name="ApplicationInstanceId-fn::getatt"></a>
The application instance's ID\.

`Arn` <a name="Arn-fn::getatt"></a>
The application instance's ARN\.

`CreatedTime` <a name="CreatedTime-fn::getatt"></a>
The application instance's created time\.

`DefaultRuntimeContextDeviceName` <a name="DefaultRuntimeContextDeviceName-fn::getatt"></a>
The application instance's default runtime context device name\.

`HealthStatus` <a name="HealthStatus-fn::getatt"></a>
The application instance's health status\.

`LastUpdatedTime` <a name="LastUpdatedTime-fn::getatt"></a>
The application instance's last updated time\.

`Status` <a name="Status-fn::getatt"></a>
The application instance's status\.

`StatusDescription` <a name="StatusDescription-fn::getatt"></a>
The application instance's status description\.
