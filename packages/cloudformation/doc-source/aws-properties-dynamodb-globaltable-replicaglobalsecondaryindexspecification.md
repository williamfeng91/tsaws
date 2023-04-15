# AWS::DynamoDB::GlobalTable ReplicaGlobalSecondaryIndexSpecification<a name="aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification"></a>

Represents the properties of a global secondary index that can be set on a per\-replica basis\.

## Syntax<a name="aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification-syntax.json"></a>

```
{
  "[ContributorInsightsSpecification](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-contributorinsightsspecification)" : ContributorInsightsSpecification,
  "[IndexName](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-indexname)" : String,
  "[ReadProvisionedThroughputSettings](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readprovisionedthroughputsettings)" : ReadProvisionedThroughputSettings
}
```

### YAML<a name="aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification-syntax.yaml"></a>

```
  [ContributorInsightsSpecification](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-contributorinsightsspecification):
    ContributorInsightsSpecification
  [IndexName](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-indexname): String
  [ReadProvisionedThroughputSettings](#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readprovisionedthroughputsettings):
    ReadProvisionedThroughputSettings
```

## Properties<a name="aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification-properties"></a>

`ContributorInsightsSpecification` <a name="cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-contributorinsightsspecification"></a>
Updates the status for contributor insights for a specific table or index\. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and \(if applicable\) sort key of frequently accessed items and frequently throttled items in plaintext\. If you require the use of AWS Key Management Service \(KMS\) to encrypt this table’s partition key and sort key data with an AWS managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table\.  
_Required_: No  
_Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-globaltable-contributorinsightsspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IndexName` <a name="cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-indexname"></a>
The name of the global secondary index\. The name must be unique among all other indexes on this table\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ReadProvisionedThroughputSettings` <a name="cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readprovisionedthroughputsettings"></a>
Allows you to specify the read capacity settings for a replica global secondary index when the `BillingMode` is set to `PROVISIONED`\.  
_Required_: No  
_Type_: [ReadProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
