# AWS::Config::ConfigurationAggregator AccountAggregationSource<a name="aws-properties-config-configurationaggregator-accountaggregationsource"></a>

A collection of accounts and regions\.

## Syntax<a name="aws-properties-config-configurationaggregator-accountaggregationsource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-configurationaggregator-accountaggregationsource-syntax.json"></a>

```
{
  "[AccountIds](#cfn-config-configurationaggregator-accountaggregationsource-accountids)" : [ String, ... ],
  "[AllAwsRegions](#cfn-config-configurationaggregator-accountaggregationsource-allawsregions)" : Boolean,
  "[AwsRegions](#cfn-config-configurationaggregator-accountaggregationsource-awsregions)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-config-configurationaggregator-accountaggregationsource-syntax.yaml"></a>

```
  [AccountIds](#cfn-config-configurationaggregator-accountaggregationsource-accountids):
    - String
  [AllAwsRegions](#cfn-config-configurationaggregator-accountaggregationsource-allawsregions): Boolean
  [AwsRegions](#cfn-config-configurationaggregator-accountaggregationsource-awsregions):
    - String
```

## Properties<a name="aws-properties-config-configurationaggregator-accountaggregationsource-properties"></a>

`AccountIds` <a name="cfn-config-configurationaggregator-accountaggregationsource-accountids"></a>
The 12\-digit account ID of the account being aggregated\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AllAwsRegions` <a name="cfn-config-configurationaggregator-accountaggregationsource-allawsregions"></a>
If true, aggregate existing AWS Config regions and future regions\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AwsRegions` <a name="cfn-config-configurationaggregator-accountaggregationsource-awsregions"></a>
The source regions being aggregated\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
