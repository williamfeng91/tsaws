/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Advanced event selectors let you create fine-grained selectors for the following AWS CloudTrail event record ﬁelds. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the _ AWS CloudTrail User Guide_.
 *
 * You cannot apply both event selectors and advanced event selectors to a trail.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedeventselector.html}
 **/
export interface CloudTrailEventDataStoreAdvancedEventSelector {
  /**
   * Contains all selector statements in an advanced event selector.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AdvancedFieldSelector](aws-properties-cloudtrail-eventdatastore-advancedfieldselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldSelectors: List<CloudTrailEventDataStoreAdvancedFieldSelector>;
  /**
   * An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A single selector statement in an advanced event selector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html}
 **/
export interface CloudTrailEventDataStoreAdvancedFieldSelector {
  /**
   * A field in a CloudTrail event record on which to filter events to be logged. For event data stores for AWS Config configuration items, Audit Manager evidence, or non-AWS events, the field is used only for selecting events as filtering is not supported.
   *
   * For CloudTrail event records, supported fields include `readOnly`, `eventCategory`, `eventSource` (for management events), `eventName`, `resources.type`, and `resources.ARN`.
   *
   * For event data stores for AWS Config configuration items, Audit Manager evidence, or non-AWS events, the only supported field is `eventCategory`.
   *
   * You can have only one `resources.type` ﬁeld per selector. To log data events on more than one resource type, add another selector.
   *
   * The trailing slash is intentional; do not exclude it. Replace the text between less than and greater than symbols (<>) with resource-specific information.
   *
   * When resources.type equals `AWS::DynamoDB::Table`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When resources.type equals `AWS::Lambda::Function`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When resources.type equals `AWS::CloudTrail::Channel`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When resources.type equals `AWS::Cognito::IdentityPool`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::DynamoDB::Stream`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::EC2::Snapshot`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::FinSpace::Environment`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::Glue::Table`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::GuardDuty::Detector`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::KendraRanking::ExecutionPlan`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::ManagedBlockchain::Node`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::SageMaker::ExperimentTrialComponent`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::SageMaker::FeatureGroup`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::S3::AccessPoint`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in one of the following formats. To log events on all objects in an S3 access point, we recommend that you use only the access point ARN, don’t include the object path, and use the `StartsWith` or `NotStartsWith` operators.
   *
   * When `resources.type` equals `AWS::S3ObjectLambda::AccessPoint`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   *
   * When `resources.type` equals `AWS::S3Outposts::Object`, and the operator is set to `Equals` or `NotEquals`, the ARN must be in the following format:
   */
  Field: Value<string>;
  /**
   * An operator that includes events that match the exact value of the event record field specified as the value of `Field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Equals?: List<Value<string>>;
  /**
   * An operator that excludes events that match the first few characters of the event record field specified as the value of `Field`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotStartsWith?: List<Value<string>>;
  /**
   * An operator that excludes events that match the last few characters of the event record field specified as the value of `Field`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotEndsWith?: List<Value<string>>;
  /**
   * An operator that includes events that match the first few characters of the event record field specified as the value of `Field`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartsWith?: List<Value<string>>;
  /**
   * An operator that includes events that match the last few characters of the event record field specified as the value of `Field`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndsWith?: List<Value<string>>;
  /**
   * An operator that excludes events that match the exact value of the event record field specified as the value of `Field`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotEquals?: List<Value<string>>;
}
export interface CloudTrailEventDataStoreProperties {
  /**
   * Specifies whether an event data store collects events logged for an organization in AWS Organizations.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationEnabled?: Value<boolean>;
  /**
   * Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by `alias/`, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.
   *
   * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _ AWS Key Management Service Developer Guide_.
   *
   * Examples:
   */
  KmsKeyId?: Value<string>;
  /**
   * The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.
   *
   * For more information about how to use advanced event selectors to log CloudTrail events, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
   *
   * For more information about how to use advanced event selectors to include AWS Config configuration items in your event data store, see [Create an event data store for AWS Config configuration items](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-eds-config) in the CloudTrail User Guide.
   *
   * For more information about how to use advanced event selectors to include non-AWS events in your event data store, see [Create an integration to log events from outside AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-integration) in the CloudTrail User Guide.
   *
   * _Required_: No
   *
   * _Type_: List of [AdvancedEventSelector](aws-properties-cloudtrail-eventdatastore-advancedeventselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedEventSelectors?: List<CloudTrailEventDataStoreAdvancedEventSelector>;
  /**
   * Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerminationProtectionEnabled?: Value<boolean>;
  /**
   * Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiRegionEnabled?: Value<boolean>;
  /**
   * The retention period of the event data store, in days. You can set a retention period of up to 2557 days, the equivalent of seven years.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `7`
   *
   * _Maximum_: `2557`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetentionPeriod?: Value<number>;
  /**
   * A list of tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the event data store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9._-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a new event data store.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html}
 */
export interface CloudTrailEventDataStoreResource {
  Type: 'AWS::CloudTrail::EventDataStore';
  Properties: CloudTrailEventDataStoreProperties;
}
