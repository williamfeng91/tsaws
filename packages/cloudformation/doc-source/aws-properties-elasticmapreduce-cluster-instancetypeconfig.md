# AWS::EMR::Cluster InstanceTypeConfig<a name="aws-properties-elasticmapreduce-cluster-instancetypeconfig"></a>

**Note**  
The instance fleet configuration is available only in Amazon EMR versions 4\.8\.0 and later, excluding 5\.0\.x versions\.

`InstanceTypeConfig` is a sub\-property of `InstanceFleetConfig`\. `InstanceTypeConfig` determines the EC2 instances that Amazon EMR attempts to provision to fulfill On\-Demand and Spot target capacities\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-instancetypeconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-instancetypeconfig-syntax.json"></a>

```
{
  "[BidPrice](#cfn-elasticmapreduce-cluster-instancetypeconfig-bidprice)" : String,
  "[BidPriceAsPercentageOfOnDemandPrice](#cfn-elasticmapreduce-cluster-instancetypeconfig-bidpriceaspercentageofondemandprice)" : Double,
  "[Configurations](#cfn-elasticmapreduce-cluster-instancetypeconfig-configurations)" : [ Configuration, ... ],
  "[CustomAmiId](#cfn-elasticmapreduce-cluster-instancetypeconfig-customamiid)" : String,
  "[EbsConfiguration](#cfn-elasticmapreduce-cluster-instancetypeconfig-ebsconfiguration)" : EbsConfiguration,
  "[InstanceType](#cfn-elasticmapreduce-cluster-instancetypeconfig-instancetype)" : String,
  "[WeightedCapacity](#cfn-elasticmapreduce-cluster-instancetypeconfig-weightedcapacity)" : Integer
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-instancetypeconfig-syntax.yaml"></a>

```
  [BidPrice](#cfn-elasticmapreduce-cluster-instancetypeconfig-bidprice): String
  [BidPriceAsPercentageOfOnDemandPrice](#cfn-elasticmapreduce-cluster-instancetypeconfig-bidpriceaspercentageofondemandprice): Double
  [Configurations](#cfn-elasticmapreduce-cluster-instancetypeconfig-configurations):
    - Configuration
  [CustomAmiId](#cfn-elasticmapreduce-cluster-instancetypeconfig-customamiid): String
  [EbsConfiguration](#cfn-elasticmapreduce-cluster-instancetypeconfig-ebsconfiguration):
    EbsConfiguration
  [InstanceType](#cfn-elasticmapreduce-cluster-instancetypeconfig-instancetype): String
  [WeightedCapacity](#cfn-elasticmapreduce-cluster-instancetypeconfig-weightedcapacity): Integer
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-instancetypeconfig-properties"></a>

`BidPrice` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-bidprice"></a>
The bid price for each EC2 Spot Instance type as defined by `InstanceType`\. Expressed in USD\. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BidPriceAsPercentageOfOnDemandPrice` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-bidpriceaspercentageofondemandprice"></a>
The bid price, as a percentage of On\-Demand price, for each EC2 Spot Instance as defined by `InstanceType`\. Expressed as a number \(for example, 20 specifies 20%\)\. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%\.  
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Configurations` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-configurations"></a>
A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster\.  
_Required_: No  
_Type_: List of [Configuration](aws-properties-elasticmapreduce-cluster-configuration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`CustomAmiId` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-customamiid"></a>
The custom AMI ID to use for the instance type\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EbsConfiguration` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-ebsconfiguration"></a>
The configuration of Amazon Elastic Block Store \(Amazon EBS\) attached to each instance as defined by `InstanceType`\.  
_Required_: No  
_Type_: [EbsConfiguration](aws-properties-elasticmapreduce-cluster-ebsconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`InstanceType` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-instancetype"></a>
An EC2 instance type, such as `m3.xlarge`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`WeightedCapacity` <a name="cfn-elasticmapreduce-cluster-instancetypeconfig-weightedcapacity"></a>
The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `InstanceFleetConfig`\. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets\. Defaults to 1 if not specified\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
