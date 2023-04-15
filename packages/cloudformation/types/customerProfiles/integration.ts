/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-objecttypemapping.html}
 **/
export interface CustomerProfilesIntegrationObjectTypeMapping {
  /**
   * The value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-scheduledtriggerproperties.html}
 **/
export interface CustomerProfilesIntegrationScheduledTriggerProperties {
  /**
   * Specifies the scheduled end time for a scheduled-trigger flow.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleEndTime?: Value<number>;
  /**
   * Specifies the time zone used when referring to the date and time of a scheduled-triggered flow, such as America/New_York.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timezone?: Value<string>;
  /**
   * The scheduling expression that determines the rate at which the schedule will run, for example rate (5 minutes).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression: Value<string>;
  /**
   * Specifies the date range for the records to import from the connector in the first flow run.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FirstExecutionFrom?: Value<number>;
  /**
   * Specifies the scheduled start time for a scheduled-trigger flow.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleStartTime?: Value<number>;
  /**
   * Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Complete | Incremental`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPullMode?: Value<string>;
  /**
   * Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleOffset?: Value<number>;
}

/**
 * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-taskpropertiesmap.html}
 **/
export interface CustomerProfilesIntegrationTaskPropertiesMap {
  /**
   * The task property key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OperatorPropertyKey: Value<string>;
  /**
   * The task property value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property: Value<string>;
}

/**
 * The operation to be performed on the provided source fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-connectoroperator.html}
 **/
export interface CustomerProfilesIntegrationConnectorOperator {
  /**
   * The operation to be performed on the provided Amazon S3 source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: Value<string>;
  /**
   * The operation to be performed on the provided ServiceNow source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | CONTAINS | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNow?: Value<string>;
  /**
   * The operation to be performed on the provided Zendesk source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | DIVISION | GREATER_THAN | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: Value<string>;
  /**
   * The operation to be performed on the provided Marketo source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | GREATER_THAN | LESS_THAN | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: Value<string>;
  /**
   * The operation to be performed on the provided Salesforce source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | CONTAINS | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: Value<string>;
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-zendesksourceproperties.html}
 **/
export interface CustomerProfilesIntegrationZendeskSourceProperties {
  /**
   * The object specified in the Zendesk flow source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Object: Value<string>;
}

/**
 * The properties that are applied when Salesforce is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-salesforcesourceproperties.html}
 **/
export interface CustomerProfilesIntegrationSalesforceSourceProperties {
  /**
   * Indicates whether Amazon AppFlow includes deleted files in the flow run.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeDeletedRecords?: Value<boolean>;
  /**
   * The object specified in the Salesforce flow source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Object: Value<string>;
  /**
   * The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableDynamicFieldUpdate?: Value<boolean>;
}

/**
 * The configuration that controls how Customer Profiles retrieves data from the source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceflowconfig.html}
 **/
export interface CustomerProfilesIntegrationSourceFlowConfig {
  /**
   * The name of the Amazon AppFlow connector profile. This name must be unique for each connector profile in the AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[w/!@#+=.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProfileName?: Value<string>;
  /**
   * Specifies the information that is required to query a particular source connector.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceConnectorProperties](aws-properties-customerprofiles-integration-sourceconnectorproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceConnectorProperties: CustomerProfilesIntegrationSourceConnectorProperties;
  /**
   * The type of connector, such as Salesforce, Marketo, and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Marketo | S3 | Salesforce | Servicenow | Zendesk`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorType: Value<string>;
  /**
   * Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
   *
   * _Required_: No
   *
   * _Type_: [IncrementalPullConfig](aws-properties-customerprofiles-integration-incrementalpullconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncrementalPullConfig?: CustomerProfilesIntegrationIncrementalPullConfig;
}

/**
 * The `Task` property type specifies the class for modeling different type of tasks. Task implementation varies based on the TaskType.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-task.html}
 **/
export interface CustomerProfilesIntegrationTask {
  /**
   * The source fields to which a particular task is applied.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFields: List<Value<string>>;
  /**
   * A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationField?: Value<string>;
  /**
   * The operation to be performed on the provided source fields.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOperator](aws-properties-customerprofiles-integration-connectoroperator.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOperator?: CustomerProfilesIntegrationConnectorOperator;
  /**
   * Specifies the particular task implementation that Amazon AppFlow performs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Arithmetic | Filter | Map | Mask | Merge | Truncate | Validate`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskType: Value<string>;
  /**
   * A map used to store task-related information. The service looks for particular information based on the TaskType.
   *
   * _Required_: No
   *
   * _Type_: List of [TaskPropertiesMap](aws-properties-customerprofiles-integration-taskpropertiesmap.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskProperties?: List<CustomerProfilesIntegrationTaskPropertiesMap>;
}

/**
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerproperties.html}
 **/
export interface CustomerProfilesIntegrationTriggerProperties {
  /**
   * Specifies the configuration details of a schedule-triggered flow that you define.
   *
   * _Required_: No
   *
   * _Type_: [ScheduledTriggerProperties](aws-properties-customerprofiles-integration-scheduledtriggerproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scheduled?: CustomerProfilesIntegrationScheduledTriggerProperties;
}

/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-s3sourceproperties.html}
 **/
export interface CustomerProfilesIntegrationS3SourceProperties {
  /**
   * The Amazon S3 bucket name where the source files are stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The object key for the Amazon S3 bucket in which the source files are stored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketPrefix?: Value<string>;
}

/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-flowdefinition.html}
 **/
export interface CustomerProfilesIntegrationFlowDefinition {
  /**
   * A description of the flow you want to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `[w!@#-.?,s]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A list of tasks that Customer Profiles performs while transferring the data in the flow run.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Task](aws-properties-customerprofiles-integration-task.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tasks: List<CustomerProfilesIntegrationTask>;
  /**
   * The specified name of the flow. Use underscores (_) or hyphens (-) only. Spaces are not allowed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9][w!@#.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowName: Value<string>;
  /**
   * The trigger settings that determine how and when the flow runs.
   *
   * _Required_: Yes
   *
   * _Type_: [TriggerConfig](aws-properties-customerprofiles-integration-triggerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerConfig: CustomerProfilesIntegrationTriggerConfig;
  /**
   * The configuration that controls how Customer Profiles retrieves data from the source.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceFlowConfig](aws-properties-customerprofiles-integration-sourceflowconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFlowConfig: CustomerProfilesIntegrationSourceFlowConfig;
  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key you provide for encryption.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsArn: Value<string>;
}

/**
 * Specifies the configuration used when importing incremental records from the source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-incrementalpullconfig.html}
 **/
export interface CustomerProfilesIntegrationIncrementalPullConfig {
  /**
   * A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatetimeTypeFieldName?: Value<string>;
}

/**
 * The properties that are applied when Marketo is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-marketosourceproperties.html}
 **/
export interface CustomerProfilesIntegrationMarketoSourceProperties {
  /**
   * The object specified in the Marketo flow source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Object: Value<string>;
}

/**
 * Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-sourceconnectorproperties.html}
 **/
export interface CustomerProfilesIntegrationSourceConnectorProperties {
  /**
   * The properties that are applied when Amazon S3 is being used as the flow source.
   *
   * _Required_: No
   *
   * _Type_: [S3SourceProperties](aws-properties-customerprofiles-integration-s3sourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: CustomerProfilesIntegrationS3SourceProperties;
  /**
   * The properties that are applied when ServiceNow is being used as a source.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowSourceProperties](aws-properties-customerprofiles-integration-servicenowsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNow?: CustomerProfilesIntegrationServiceNowSourceProperties;
  /**
   * The properties that are applied when using Zendesk as a flow source.
   *
   * _Required_: No
   *
   * _Type_: [ZendeskSourceProperties](aws-properties-customerprofiles-integration-zendesksourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: CustomerProfilesIntegrationZendeskSourceProperties;
  /**
   * The properties that are applied when Marketo is being used as a source.
   *
   * _Required_: No
   *
   * _Type_: [MarketoSourceProperties](aws-properties-customerprofiles-integration-marketosourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: CustomerProfilesIntegrationMarketoSourceProperties;
  /**
   * The properties that are applied when Salesforce is being used as a source.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceSourceProperties](aws-properties-customerprofiles-integration-salesforcesourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: CustomerProfilesIntegrationSalesforceSourceProperties;
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-servicenowsourceproperties.html}
 **/
export interface CustomerProfilesIntegrationServiceNowSourceProperties {
  /**
   * The object specified in the ServiceNow flow source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Object: Value<string>;
}

/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-customerprofiles-integration-triggerconfig.html}
 **/
export interface CustomerProfilesIntegrationTriggerConfig {
  /**
   * Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Event | OnDemand | Scheduled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerType: Value<string>;
  /**
   * Specifies the configuration details of a schedule-triggered flow that you define. Currently, these settings only apply to the Scheduled trigger type.
   *
   * _Required_: No
   *
   * _Type_: [TriggerProperties](aws-properties-customerprofiles-integration-triggerproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerProperties?: CustomerProfilesIntegrationTriggerProperties;
}
export interface CustomerProfilesIntegrationProperties {
  /**
   * The object type mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [ObjectTypeMapping](aws-properties-customerprofiles-integration-objecttypemapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectTypeNames?: List<CustomerProfilesIntegrationObjectTypeMapping>;
  /**
   * The unique name of the domain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * The name of the profile object type mapping to use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectTypeName?: Value<string>;
  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Uri?: Value<string>;
  /**
   * The configuration that controls how Customer Profiles retrieves data from the source.
   *
   * _Required_: No
   *
   * _Type_: [FlowDefinition](aws-properties-customerprofiles-integration-flowdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowDefinition?: CustomerProfilesIntegrationFlowDefinition;
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Specifies an Amazon Connect Customer Profiles Integration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html}
 */
export interface CustomerProfilesIntegrationResource {
  Type: 'AWS::CustomerProfiles::Integration';
  Properties: CustomerProfilesIntegrationProperties;
}
