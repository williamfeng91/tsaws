# AWS::PinpointEmail::ConfigurationSet<a name="aws-resource-pinpointemail-configurationset"></a>

Create a configuration set\. _Configuration sets_ are groups of rules that you can apply to the emails you send using Amazon Pinpoint\. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email\. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email\.

## Syntax<a name="aws-resource-pinpointemail-configurationset-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-pinpointemail-configurationset-syntax.json"></a>

```
{
  "Type" : "AWS::PinpointEmail::ConfigurationSet",
  "Properties" : {
      "[DeliveryOptions](#cfn-pinpointemail-configurationset-deliveryoptions)" : DeliveryOptions,
      "[Name](#cfn-pinpointemail-configurationset-name)" : String,
      "[ReputationOptions](#cfn-pinpointemail-configurationset-reputationoptions)" : ReputationOptions,
      "[SendingOptions](#cfn-pinpointemail-configurationset-sendingoptions)" : SendingOptions,
      "[Tags](#cfn-pinpointemail-configurationset-tags)" : [ Tags, ... ],
      "[TrackingOptions](#cfn-pinpointemail-configurationset-trackingoptions)" : TrackingOptions
    }
}
```

### YAML<a name="aws-resource-pinpointemail-configurationset-syntax.yaml"></a>

```
Type: AWS::PinpointEmail::ConfigurationSet
Properties:
  [DeliveryOptions](#cfn-pinpointemail-configurationset-deliveryoptions):
    DeliveryOptions
  [Name](#cfn-pinpointemail-configurationset-name): String
  [ReputationOptions](#cfn-pinpointemail-configurationset-reputationoptions):
    ReputationOptions
  [SendingOptions](#cfn-pinpointemail-configurationset-sendingoptions):
    SendingOptions
  [Tags](#cfn-pinpointemail-configurationset-tags):
    - Tags
  [TrackingOptions](#cfn-pinpointemail-configurationset-trackingoptions):
    TrackingOptions
```

## Properties<a name="aws-resource-pinpointemail-configurationset-properties"></a>

`DeliveryOptions` <a name="cfn-pinpointemail-configurationset-deliveryoptions"></a>
An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set\.  
_Required_: No  
_Type_: [DeliveryOptions](aws-properties-pinpointemail-configurationset-deliveryoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-pinpointemail-configurationset-name"></a>
The name of the configuration set\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ReputationOptions` <a name="cfn-pinpointemail-configurationset-reputationoptions"></a>
An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set\.  
_Required_: No  
_Type_: [ReputationOptions](aws-properties-pinpointemail-configurationset-reputationoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SendingOptions` <a name="cfn-pinpointemail-configurationset-sendingoptions"></a>
An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set\.  
_Required_: No  
_Type_: [SendingOptions](aws-properties-pinpointemail-configurationset-sendingoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-pinpointemail-configurationset-tags"></a>
An object that defines the tags \(keys and values\) that you want to associate with the configuration set\.  
_Required_: No  
_Type_: [List](aws-properties-pinpointemail-configurationset-tags.md) of [Tags](aws-properties-pinpointemail-configurationset-tags.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrackingOptions` <a name="cfn-pinpointemail-configurationset-trackingoptions"></a>
An object that defines the open and click tracking options for emails that you send using the configuration set\.  
_Required_: No  
_Type_: [TrackingOptions](aws-properties-pinpointemail-configurationset-trackingoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-pinpointemail-configurationset-return-values"></a>

### Ref<a name="aws-resource-pinpointemail-configurationset-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource name\. For example:

`{ "Ref": "myConfigurationSet" }`

For the Amazon Pinpoint configuration set `myConfigurationSet`, Ref returns the name of the configuration set\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
