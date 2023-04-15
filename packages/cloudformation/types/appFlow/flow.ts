/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * Specifies the configuration used when importing incremental records from the source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-incrementalpullconfig.html}
 **/
export interface AppFlowFlowIncrementalPullConfig {
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
 * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-prefixconfig.html}
 **/
export interface AppFlowFlowPrefixConfig {
  /**
   * Determines the format of the prefix, and whether it applies to the file name, file path, or both.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FILENAME | PATH | PATH_AND_FILENAME`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixType?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathPrefixHierarchy?: List<Value<string>>;
  /**
   * Determines the level of granularity for the date and time that's included in the prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DAY | HOUR | MINUTE | MONTH | YEAR`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixFormat?: Value<string>;
}

/**
 * Contains information about the configuration of destination connectors present in the flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationflowconfig.html}
 **/
export interface AppFlowFlowDestinationFlowConfig {
  /**
   * The name of the connector profile. This name must be unique for each connector profile in the AWS account.
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
   * The API version that the destination connector uses.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiVersion?: Value<string>;
  /**
   * The type of destination connector, such as Sales force, Amazon S3, and so on.
   *
   * _Allowed Values_: `EventBridge | Redshift | S3 | Salesforce | Snowflake`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorType: Value<string>;
  /**
   * This stores the information that is required to query a particular connector.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationConnectorProperties](aws-properties-appflow-flow-destinationconnectorproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationConnectorProperties: AppFlowFlowDestinationConnectorProperties;
}

/**
 * The properties that are applied when Datadog is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-datadogsourceproperties.html}
 **/
export interface AppFlowFlowDatadogSourceProperties {
  /**
   * The object specified in the Datadog flow source.
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
 * The aggregation settings that you can use to customize the output format of your flow data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-aggregationconfig.html}
 **/
export interface AppFlowFlowAggregationConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetFileSize?: Value<number>;
  /**
   * Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `None | SingleFile`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationType?: Value<string>;
}

/**
 * This stores the information that is required to query a particular connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-destinationconnectorproperties.html}
 **/
export interface AppFlowFlowDestinationConnectorProperties {
  /**
   * The properties required to query Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3DestinationProperties](aws-properties-appflow-flow-s3destinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: AppFlowFlowS3DestinationProperties;
  /**
   * The properties that are required to query the custom Connector.
   *
   * _Required_: No
   *
   * _Type_: [CustomConnectorDestinationProperties](aws-properties-appflow-flow-customconnectordestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConnector?: AppFlowFlowCustomConnectorDestinationProperties;
  /**
   * The properties required to query Upsolver.
   *
   * _Required_: No
   *
   * _Type_: [UpsolverDestinationProperties](aws-properties-appflow-flow-upsolverdestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Upsolver?: AppFlowFlowUpsolverDestinationProperties;
  /**
   * The properties required to query SAPOData.
   *
   * _Required_: No
   *
   * _Type_: [SAPODataDestinationProperties](aws-properties-appflow-flow-sapodatadestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAPOData?: AppFlowFlowSAPODataDestinationProperties;
  /**
   * The properties required to query Snowflake.
   *
   * _Required_: No
   *
   * _Type_: [SnowflakeDestinationProperties](aws-properties-appflow-flow-snowflakedestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Snowflake?: AppFlowFlowSnowflakeDestinationProperties;
  /**
   * The properties required to query Amazon Lookout for Metrics.
   *
   * _Required_: No
   *
   * _Type_: [LookoutMetricsDestinationProperties](aws-properties-appflow-flow-lookoutmetricsdestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LookoutMetrics?: AppFlowFlowLookoutMetricsDestinationProperties;
  /**
   * The properties required to query Amazon EventBridge.
   *
   * _Required_: No
   *
   * _Type_: [EventBridgeDestinationProperties](aws-properties-appflow-flow-eventbridgedestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBridge?: AppFlowFlowEventBridgeDestinationProperties;
  /**
   * The properties required to query Zendesk.
   *
   * _Required_: No
   *
   * _Type_: [ZendeskDestinationProperties](aws-properties-appflow-flow-zendeskdestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: AppFlowFlowZendeskDestinationProperties;
  /**
   * The properties required to query Marketo.
   *
   * _Required_: No
   *
   * _Type_: [MarketoDestinationProperties](aws-properties-appflow-flow-marketodestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: AppFlowFlowMarketoDestinationProperties;
  /**
   * The properties required to query Amazon Redshift.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftDestinationProperties](aws-properties-appflow-flow-redshiftdestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Redshift?: AppFlowFlowRedshiftDestinationProperties;
  /**
   * The properties required to query Salesforce.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceDestinationProperties](aws-properties-appflow-flow-salesforcedestinationproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: AppFlowFlowSalesforceDestinationProperties;
}

/**
 * The operation to be performed on the provided source fields.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-connectoroperator.html}
 **/
export interface AppFlowFlowConnectorOperator {
  /**
   * The operation to be performed on the provided Amplitude source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BETWEEN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Amplitude?: Value<string>;
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
   * The operation to be performed on the provided Google Analytics source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BETWEEN | PROJECTION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GoogleAnalytics?: Value<string>;
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
   * Operators supported by the custom connector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | CONTAINS | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConnector?: Value<string>;
  /**
   * The operation to be performed on the provided SAPOData source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | CONTAINS | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAPOData?: Value<string>;
  /**
   * The operation to be performed on the provided Salesforce Pardot source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pardot?: Value<string>;
  /**
   * The operation to be performed on the provided Veeva source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | CONTAINS | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | NOT_EQUAL_TO | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Veeva?: Value<string>;
  /**
   * The operation to be performed on the provided Trend Micro source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trendmicro?: Value<string>;
  /**
   * The operation to be performed on the provided Datadog source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datadog?: Value<string>;
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
   * The operation to be performed on the provided Singular source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Singular?: Value<string>;
  /**
   * The operation to be performed on the provided Slack source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | EQUAL_TO | GREATER_THAN | GREATER_THAN_OR_EQUAL_TO | LESS_THAN | LESS_THAN_OR_EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slack?: Value<string>;
  /**
   * The operation to be performed on the provided Dynatrace source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dynatrace?: Value<string>;
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
   * The operation to be performed on the provided Infor Nexus source fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ADDITION | BETWEEN | DIVISION | EQUAL_TO | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | MULTIPLICATION | NO_OP | PROJECTION | SUBTRACTION | VALIDATE_NON_NEGATIVE | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NUMERIC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InforNexus?: Value<string>;
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
 * The properties that are applied when Amazon S3 is being used as the flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3sourceproperties.html}
 **/
export interface AppFlowFlowS3SourceProperties {
  /**
   * When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
   *
   * _Required_: No
   *
   * _Type_: [S3InputFormatConfig](aws-properties-appflow-flow-s3inputformatconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputFormatConfig?: AppFlowFlowS3InputFormatConfig;
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
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketPrefix: Value<string>;
}

/**
 * The properties that are applied when Singular is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-singularsourceproperties.html}
 **/
export interface AppFlowFlowSingularSourceProperties {
  /**
   * The object specified in the Singular flow source.
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
 * The properties that are applied when Marketo is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketosourceproperties.html}
 **/
export interface AppFlowFlowMarketoSourceProperties {
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
 * The properties that are applied when Amazon Redshift is being used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-redshiftdestinationproperties.html}
 **/
export interface AppFlowFlowRedshiftDestinationProperties {
  /**
   * The object specified in the Amazon Redshift flow destination.
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
   * The object key for the bucket in which Amazon AppFlow places the destination files.
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
  /**
   * The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.
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
  IntermediateBucketName: Value<string>;
  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The properties that are applied when Upsolver is used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolverdestinationproperties.html}
 **/
export interface AppFlowFlowUpsolverDestinationProperties {
  /**
   * The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `16`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^(upsolver-appflow)S*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files.
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
  /**
   * The configuration that determines how data is formatted when Upsolver is used as the flow destination.
   *
   * _Required_: Yes
   *
   * _Type_: [UpsolverS3OutputFormatConfig](aws-properties-appflow-flow-upsolvers3outputformatconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OutputFormatConfig: AppFlowFlowUpsolverS3OutputFormatConfig;
}

/**
 * When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3inputformatconfig.html}
 **/
export interface AppFlowFlowS3InputFormatConfig {
  /**
   * The file type that Amazon AppFlow gets from your Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputFileType?: Value<string>;
}

/**
 * The properties that are applied when using SAPOData as a flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatasourceproperties.html}
 **/
export interface AppFlowFlowSAPODataSourceProperties {
  /**
   * The object path specified in the SAPOData flow source.
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
  ObjectPath: Value<string>;
}

/**
 * The properties that are applied when Zendesk is used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendeskdestinationproperties.html}
 **/
export interface AppFlowFlowZendeskDestinationProperties {
  /**
   * A list of field names that can be used as an ID field when performing a write operation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdFieldNames?: List<Value<string>>;
  /**
   * The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteOperationType?: Value<string>;
  /**
   * The object specified in the Zendesk flow destination.
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
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The properties that are applied when using SAPOData as a flow destination
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sapodatadestinationproperties.html}
 **/
export interface AppFlowFlowSAPODataDestinationProperties {
  /**
   * A list of field names that can be used as an ID field when performing a write operation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdFieldNames?: List<Value<string>>;
  /**
   * The object path specified in the SAPOData flow destination.
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
  ObjectPath: Value<string>;
  /**
   * The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteOperationType?: Value<string>;
  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
  /**
   * Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
   *
   * For example, this setting would determine where to write the response from a destination connector upon a successful insert operation.
   *
   * _Required_: No
   *
   * _Type_: [SuccessResponseHandlingConfig](aws-properties-appflow-flow-successresponsehandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessResponseHandlingConfig?: AppFlowFlowSuccessResponseHandlingConfig;
}

/**
 * The properties that are applied when the custom connector is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectorsourceproperties.html}
 **/
export interface AppFlowFlowCustomConnectorSourceProperties {
  /**
   * The entity specified in the custom connector as a source in the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityName: Value<string>;
  /**
   * Custom properties that are required to use the custom connector as a source.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomProperties?: { [key: string]: Value<string> };
}

/**
 * Specifies the information that is required to query a particular connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceconnectorproperties.html}
 **/
export interface AppFlowFlowSourceConnectorProperties {
  /**
   * Specifies the information that is required for querying Amplitude.
   *
   * _Required_: No
   *
   * _Type_: [AmplitudeSourceProperties](aws-properties-appflow-flow-amplitudesourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Amplitude?: AppFlowFlowAmplitudeSourceProperties;
  /**
   * Specifies the information that is required for querying Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3SourceProperties](aws-properties-appflow-flow-s3sourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: AppFlowFlowS3SourceProperties;
  /**
   * Specifies the information that is required for querying Google Analytics.
   *
   * _Required_: No
   *
   * _Type_: [GoogleAnalyticsSourceProperties](aws-properties-appflow-flow-googleanalyticssourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GoogleAnalytics?: AppFlowFlowGoogleAnalyticsSourceProperties;
  /**
   * Specifies the information that is required for querying ServiceNow.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowSourceProperties](aws-properties-appflow-flow-servicenowsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNow?: AppFlowFlowServiceNowSourceProperties;
  /**
   * The properties that are applied when the custom connector is being used as a source.
   *
   * _Required_: No
   *
   * _Type_: [CustomConnectorSourceProperties](aws-properties-appflow-flow-customconnectorsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConnector?: AppFlowFlowCustomConnectorSourceProperties;
  /**
   * The properties that are applied when using SAPOData as a flow source.
   *
   * _Required_: No
   *
   * _Type_: [SAPODataSourceProperties](aws-properties-appflow-flow-sapodatasourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAPOData?: AppFlowFlowSAPODataSourceProperties;
  /**
   * Specifies the information that is required for querying Salesforce Pardot.
   *
   * _Required_: No
   *
   * _Type_: [PardotSourceProperties](aws-properties-appflow-flow-pardotsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pardot?: AppFlowFlowPardotSourceProperties;
  /**
   * Specifies the information that is required for querying Veeva.
   *
   * _Required_: No
   *
   * _Type_: [VeevaSourceProperties](aws-properties-appflow-flow-veevasourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Veeva?: AppFlowFlowVeevaSourceProperties;
  /**
   * Specifies the information that is required for querying Trend Micro.
   *
   * _Required_: No
   *
   * _Type_: [TrendmicroSourceProperties](aws-properties-appflow-flow-trendmicrosourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trendmicro?: AppFlowFlowTrendmicroSourceProperties;
  /**
   * Specifies the information that is required for querying Datadog.
   *
   * _Required_: No
   *
   * _Type_: [DatadogSourceProperties](aws-properties-appflow-flow-datadogsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datadog?: AppFlowFlowDatadogSourceProperties;
  /**
   * Specifies the information that is required for querying Marketo.
   *
   * _Required_: No
   *
   * _Type_: [MarketoSourceProperties](aws-properties-appflow-flow-marketosourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: AppFlowFlowMarketoSourceProperties;
  /**
   * Specifies the information that is required for querying Singular.
   *
   * _Required_: No
   *
   * _Type_: [SingularSourceProperties](aws-properties-appflow-flow-singularsourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Singular?: AppFlowFlowSingularSourceProperties;
  /**
   * Specifies the information that is required for querying Slack.
   *
   * _Required_: No
   *
   * _Type_: [SlackSourceProperties](aws-properties-appflow-flow-slacksourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slack?: AppFlowFlowSlackSourceProperties;
  /**
   * Specifies the information that is required for querying Dynatrace.
   *
   * _Required_: No
   *
   * _Type_: [DynatraceSourceProperties](aws-properties-appflow-flow-dynatracesourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dynatrace?: AppFlowFlowDynatraceSourceProperties;
  /**
   * Specifies the information that is required for querying Zendesk.
   *
   * _Required_: No
   *
   * _Type_: [ZendeskSourceProperties](aws-properties-appflow-flow-zendesksourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: AppFlowFlowZendeskSourceProperties;
  /**
   * Specifies the information that is required for querying Infor Nexus.
   *
   * _Required_: No
   *
   * _Type_: [InforNexusSourceProperties](aws-properties-appflow-flow-infornexussourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InforNexus?: AppFlowFlowInforNexusSourceProperties;
  /**
   * Specifies the information that is required for querying Salesforce.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceSourceProperties](aws-properties-appflow-flow-salesforcesourceproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: AppFlowFlowSalesforceSourceProperties;
}

/**
 * The properties that are applied when the custom connector is being used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-customconnectordestinationproperties.html}
 **/
export interface AppFlowFlowCustomConnectorDestinationProperties {
  /**
   * The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdFieldNames?: List<Value<string>>;
  /**
   * The entity specified in the custom connector as a destination in the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityName: Value<string>;
  /**
   * Specifies the type of write operation to be performed in the custom connector when it's used as destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DELETE | INSERT | UPDATE | UPSERT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteOperationType?: Value<string>;
  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
  /**
   * The custom properties that are specific to the connector when it's used as a destination in the flow.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomProperties?: { [key: string]: Value<string> };
}

/**
 * The properties that are applied when using Trend Micro as a flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-trendmicrosourceproperties.html}
 **/
export interface AppFlowFlowTrendmicroSourceProperties {
  /**
   * The object specified in the Trend Micro flow source.
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
 * The properties that are applied when using Veeva as a flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-veevasourceproperties.html}
 **/
export interface AppFlowFlowVeevaSourceProperties {
  /**
   * Boolean value to include All Versions of files in Veeva document extract flow.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeAllVersions?: Value<boolean>;
  /**
   * Boolean value to include file renditions in Veeva document extract flow.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeRenditions?: Value<boolean>;
  /**
   * The document type specified in the Veeva document extract flow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[sw_-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentType?: Value<string>;
  /**
   * The object specified in the Veeva flow source.
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
   * Boolean value to include source files in Veeva document extract flow.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeSourceFiles?: Value<boolean>;
}

/**
 * The properties that are applied when Dynatrace is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-dynatracesourceproperties.html}
 **/
export interface AppFlowFlowDynatraceSourceProperties {
  /**
   * The object specified in the Dynatrace flow source.
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
 * The properties that are applied when Amplitude is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-amplitudesourceproperties.html}
 **/
export interface AppFlowFlowAmplitudeSourceProperties {
  /**
   * The object specified in the Amplitude flow source.
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
 * The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3outputformatconfig.html}
 **/
export interface AppFlowFlowS3OutputFormatConfig {
  /**
   * Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date.
   *
   * _Required_: No
   *
   * _Type_: [PrefixConfig](aws-properties-appflow-flow-prefixconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixConfig?: AppFlowFlowPrefixConfig;
  /**
   * Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON | PARQUET`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileType?: Value<string>;
  /**
   * The aggregation settings that you can use to customize the output format of your flow data.
   *
   * _Required_: No
   *
   * _Type_: [AggregationConfig](aws-properties-appflow-flow-aggregationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationConfig?: AppFlowFlowAggregationConfig;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreserveSourceDataTyping?: Value<boolean>;
}

/**
 * Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-scheduledtriggerproperties.html}
 **/
export interface AppFlowFlowScheduledTriggerProperties {
  /**
   * The time at which the scheduled flow ends. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-27T13:00:00-07:00`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleEndTime?: Value<number>;
  /**
   * The scheduling expression that determines the rate at which the schedule will run, for example `rate(5minutes)`.
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
   * Specifies the time zone used when referring to the dates and times of a scheduled flow, such as `America/New_York`. This time zone is only a descriptive label. It doesn't affect how Amazon AppFlow interprets the timestamps that you specify to schedule the flow.
   *
   * If you want to schedule a flow by using times in a particular time zone, indicate the time zone as a UTC offset in your timestamps. For example, the UTC offsets for the `America/New_York` timezone are `-04:00` EDT and `-05:00 EST`.
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
  TimeZone?: Value<string>;
  /**
   * The time at which the scheduled flow starts. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-26T13:00:00-07:00`.
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
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleOffset?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowErrorDeactivationThreshold?: Value<number>;
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-zendesksourceproperties.html}
 **/
export interface AppFlowFlowZendeskSourceProperties {
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
 * The properties that are applied when Salesforce is being used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcedestinationproperties.html}
 **/
export interface AppFlowFlowSalesforceDestinationProperties {
  /**
   * The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update or delete.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdFieldNames?: List<Value<string>>;
  /**
   * This specifies the type of write operation to be performed in Salesforce. When the value is `UPSERT`, then `idFieldNames` is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DELETE | INSERT | UPDATE | UPSERT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteOperationType?: Value<string>;
  /**
   * Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.
   *
   * AUTOMATIC
   *
   * The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.
   *
   * Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to transfer 1,100 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.
   *
   * By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.
   *
   * BULKV2
   *
   * Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.
   *
   * Note that Bulk API 2.0 does not transfer Salesforce compound fields.
   *
   * REST_SYNC
   *
   * Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail with a timed out error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTOMATIC | BULKV2 | REST_SYNC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTransferApi?: Value<string>;
  /**
   * The object specified in the Salesforce flow destination.
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
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-errorhandlingconfig.html}
 **/
export interface AppFlowFlowErrorHandlingConfig {
  /**
   * Specifies the name of the Amazon S3 bucket.
   *
   * _Required_: No
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
  BucketName?: Value<string>;
  /**
   * Specifies the Amazon S3 bucket prefix.
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
  /**
   * Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailOnFirstError?: Value<boolean>;
}

/**
 * The properties that are applied when Salesforce Pardot is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-pardotsourceproperties.html}
 **/
export interface AppFlowFlowPardotSourceProperties {
  /**
   * The object specified in the Salesforce Pardot flow source.
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-salesforcesourceproperties.html}
 **/
export interface AppFlowFlowSalesforceSourceProperties {
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
   * Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data from Salesforce.
   *
   * AUTOMATIC
   *
   * The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers from Salesforce. If your flow transfers fewer than 1,000,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.
   *
   * Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900,000 records, and it might use Bulk API 2.0 on the next day to transfer 1,100,000 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.
   *
   * By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.
   *
   * BULKV2
   *
   * Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.
   *
   * Note that Bulk API 2.0 does not transfer Salesforce compound fields.
   *
   * REST_SYNC
   *
   * Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail wituh a timed out error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTOMATIC | BULKV2 | REST_SYNC`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTransferApi?: Value<string>;
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
 * The properties that are applied when Amazon EventBridge is being used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-eventbridgedestinationproperties.html}
 **/
export interface AppFlowFlowEventBridgeDestinationProperties {
  /**
   * The object specified in the Amazon EventBridge flow destination.
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
   * The object specified in the Amplitude flow source.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The properties that are applied when Slack is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-slacksourceproperties.html}
 **/
export interface AppFlowFlowSlackSourceProperties {
  /**
   * The object specified in the Slack flow source.
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
 * The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html}
 **/
export interface AppFlowFlowLookoutMetricsDestinationProperties {
  /**
   * The object specified in the Amazon Lookout for Metrics flow destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Object?: Value<string>;
}

/**
 * Contains information about the configuration of the source connector used in the flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-sourceflowconfig.html}
 **/
export interface AppFlowFlowSourceFlowConfig {
  /**
   * The name of the connector profile. This name must be unique for each connector profile in the AWS account.
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
   * The API version of the connector when it's used as a source in the flow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiVersion?: Value<string>;
  /**
   * Specifies the information that is required to query a particular source connector.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceConnectorProperties](aws-properties-appflow-flow-sourceconnectorproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceConnectorProperties: AppFlowFlowSourceConnectorProperties;
  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Amplitude | CustomConnector | CustomerProfiles | Datadog | Dynatrace | EventBridge | Googleanalytics | Honeycode | Infornexus | LookoutMetrics | Marketo | Pardot | Redshift | S3 | Salesforce | SAPOData | Servicenow | Singular | Slack | Snowflake | Trendmicro | Upsolver | Veeva | Zendesk`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorType: Value<string>;
  /**
   * Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
   *
   * _Required_: No
   *
   * _Type_: [IncrementalPullConfig](aws-properties-appflow-flow-incrementalpullconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncrementalPullConfig?: AppFlowFlowIncrementalPullConfig;
}

/**
 * The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-upsolvers3outputformatconfig.html}
 **/
export interface AppFlowFlowUpsolverS3OutputFormatConfig {
  /**
   * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
   *
   * _Required_: Yes
   *
   * _Type_: [PrefixConfig](aws-properties-appflow-flow-prefixconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixConfig: AppFlowFlowPrefixConfig;
  /**
   * Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CSV | JSON | PARQUET`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileType?: Value<string>;
  /**
   * The aggregation settings that you can use to customize the output format of your flow data.
   *
   * _Required_: No
   *
   * _Type_: [AggregationConfig](aws-properties-appflow-flow-aggregationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AggregationConfig?: AppFlowFlowAggregationConfig;
}

/**
 * The `MetadataCatalogConfig` property type specifies Property description not available. for an [AWS::AppFlow::Flow](aws-resource-appflow-flow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-metadatacatalogconfig.html}
 **/
export interface AppFlowFlowMetadataCatalogConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [GlueDataCatalog](aws-properties-appflow-flow-gluedatacatalog.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueDataCatalog?: AppFlowFlowGlueDataCatalog;
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-servicenowsourceproperties.html}
 **/
export interface AppFlowFlowServiceNowSourceProperties {
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
 * Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
 *
 * For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-successresponsehandlingconfig.html}
 **/
export interface AppFlowFlowSuccessResponseHandlingConfig {
  /**
   * The name of the Amazon S3 bucket.
   *
   * _Required_: No
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
  BucketName?: Value<string>;
  /**
   * The Amazon S3 bucket prefix.
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
 * The properties that are applied when Infor Nexus is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-infornexussourceproperties.html}
 **/
export interface AppFlowFlowInforNexusSourceProperties {
  /**
   * The object specified in the Infor Nexus flow source.
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
 * The properties that Amazon AppFlow applies when you use Marketo as a flow destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-marketodestinationproperties.html}
 **/
export interface AppFlowFlowMarketoDestinationProperties {
  /**
   * The object specified in the Marketo flow destination.
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
   * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The properties that are applied when Amazon S3 is used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-s3destinationproperties.html}
 **/
export interface AppFlowFlowS3DestinationProperties {
  /**
   * The Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
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
   * The object key for the destination bucket in which Amazon AppFlow places the files.
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
  /**
   * The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
   *
   * _Required_: No
   *
   * _Type_: [S3OutputFormatConfig](aws-properties-appflow-flow-s3outputformatconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OutputFormatConfig?: AppFlowFlowS3OutputFormatConfig;
}

/**
 * The properties that are applied when Snowflake is being used as a destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-snowflakedestinationproperties.html}
 **/
export interface AppFlowFlowSnowflakeDestinationProperties {
  /**
   * The object specified in the Snowflake flow destination.
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
   * The object key for the destination bucket in which Amazon AppFlow places the files.
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
  /**
   * The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
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
  IntermediateBucketName: Value<string>;
  /**
   * The settings that determine how Amazon AppFlow handles an error when placing data in the Snowflake destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   *
   * _Required_: No
   *
   * _Type_: [ErrorHandlingConfig](aws-properties-appflow-flow-errorhandlingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorHandlingConfig?: AppFlowFlowErrorHandlingConfig;
}

/**
 * The properties that are applied when Google Analytics is being used as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-googleanalyticssourceproperties.html}
 **/
export interface AppFlowFlowGoogleAnalyticsSourceProperties {
  /**
   * The object specified in the Google Analytics flow source.
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
 * A class for modeling different type of tasks. Task implementation varies based on the `TaskType`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-task.html}
 **/
export interface AppFlowFlowTask {
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
   * _Type_: [ConnectorOperator](aws-properties-appflow-flow-connectoroperator.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOperator?: AppFlowFlowConnectorOperator;
  /**
   * Specifies the particular task implementation that Amazon AppFlow performs.
   *
   * _Allowed values_: `Arithmetic` | `Filter` | `Map` | `Map_all` | `Mask` | `Merge` | `Truncate` | `Validate`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskType: Value<string>;
  /**
   * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
   *
   * _Required_: No
   *
   * _Type_: List of [TaskPropertiesObject](aws-properties-appflow-flow-taskpropertiesobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskProperties?: List<AppFlowFlowTaskPropertiesObject>;
}

/**
 * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-taskpropertiesobject.html}
 **/
export interface AppFlowFlowTaskPropertiesObject {
  /**
   * The task property value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The task property key.
   *
   * _Allowed Values_: `VALUE | VALUES | DATA_TYPE | UPPER_BOUND | LOWER_BOUND | SOURCE_DATA_TYPE | DESTINATION_DATA_TYPE | VALIDATION_ACTION | MASK_VALUE | MASK_LENGTH | TRUNCATE_LENGTH | MATH_OPERATION_FIELDS_ORDER | CONCAT_FORMAT | SUBFIELD_CATEGORY_MAP` | `EXCLUDE_SOURCE_FIELDS_LIST`
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
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-triggerconfig.html}
 **/
export interface AppFlowFlowTriggerConfig {
  /**
   * Specifies the type of flow trigger. This can be `OnDemand`, `Scheduled`, or `Event`.
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
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActivateFlowOnCreate?: Value<boolean>;
  /**
   * Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
   *
   * _Required_: No
   *
   * _Type_: [ScheduledTriggerProperties](aws-properties-appflow-flow-scheduledtriggerproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerProperties?: AppFlowFlowScheduledTriggerProperties;
}

/**
 * The `GlueDataCatalog` property type specifies Property description not available. for an [AWS::AppFlow::Flow](aws-resource-appflow-flow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-flow-gluedatacatalog.html}
 **/
export interface AppFlowFlowGlueDataCatalog {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TablePrefix: Value<string>;
}
export interface AppFlowFlowProperties {
  /**
   * A user-entered description of the flow.
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
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KMSArn?: Value<string>;
  /**
   * A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Task](aws-properties-appflow-flow-task.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tasks: List<AppFlowFlowTask>;
  /**
   * The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9][w!@#.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FlowName: Value<string>;
  /**
   * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
   *
   * _Required_: Yes
   *
   * _Type_: [TriggerConfig](aws-properties-appflow-flow-triggerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerConfig: AppFlowFlowTriggerConfig;
  /**
   * The configuration that controls how Amazon AppFlow places data in the destination connector.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DestinationFlowConfig](aws-properties-appflow-flow-destinationflowconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationFlowConfigList: List<AppFlowFlowDestinationFlowConfig>;
  /**
   * Contains information about the configuration of the source connector used in the flow.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceFlowConfig](aws-properties-appflow-flow-sourceflowconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceFlowConfig: AppFlowFlowSourceFlowConfig;
  /**
   * The tags used to organize, track, or control access for your flow.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [MetadataCatalogConfig](aws-properties-appflow-flow-metadatacatalogconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetadataCatalogConfig?: AppFlowFlowMetadataCatalogConfig;
}

/**
 * The `AWS::AppFlow::Flow` resource is an Amazon AppFlow resource type that specifies a new flow.
 *
 * **Note**
 *
 * If you want to use AWS CloudFormation to create a connector profile for connectors that implement OAuth (such as Salesforce, Slack, Zendesk, and Google Analytics), you must fetch the access and refresh tokens. You can do this by implementing your own UI for OAuth, or by retrieving the tokens from elsewhere. Alternatively, you can use the Amazon AppFlow console to create the connector profile, and then use that connector profile in the flow creation CloudFormation template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html}
 */
export interface AppFlowFlowResource {
  Type: 'AWS::AppFlow::Flow';
  Properties: AppFlowFlowProperties;
}
