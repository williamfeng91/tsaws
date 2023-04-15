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
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kinesissettings.html}
 **/
export interface DMSEndpointKinesisSettings {
  /**
   * The output format for the records created on the endpoint. The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `json | json-unformatted`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageFormat?: Value<string>;
  /**
   * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeTransactionDetails?: Value<boolean>;
  /**
   * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeTableAlterOperations?: Value<boolean>;
  /**
   * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeControlDetails?: Value<boolean>;
  /**
   * Shows the partition value within the Kinesis message output, unless the partition type is `schema-table-type`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludePartitionValue?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. The role must allow the `iam:PassRole` action.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
  /**
   * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to an Amazon Kinesis target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoHexPrefix?: Value<boolean>;
  /**
   * Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kinesis shards. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same shard, which causes throttling. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionIncludeSchemaTable?: Value<boolean>;
  /**
   * Include NULL and empty columns for records migrated to the endpoint. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeNullAndEmpty?: Value<boolean>;
}

/**
 * Provides information that defines a PostgreSQL endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Extra connection attributes when using PostgreSQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [ Extra connection attributes when using PostgreSQL as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-postgresqlsettings.html}
 **/
export interface DMSEndpointPostgreSqlSettings {
  /**
   * Specifies the plugin to use to create a replication slot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PluginName?: Value<string>;
  /**
   * For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
   *
   * Example: `afterConnectScript=SET session_replication_role='replica'`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfterConnectScript?: Value<string>;
  /**
   * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
   *
   * Example: `executeTimeout=100;`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecuteTimeout?: Value<number>;
  /**
   * The schema in which the operational DDL database artifacts are created.
   *
   * Example: `ddlArtifactsSchema=xyzddlschema;`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DdlArtifactsSchema?: Value<string>;
  /**
   * When set to `true`, this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize`.
   *
   * If task is set to Limited LOB mode and this option is set to true, the task fails instead of truncating the LOB data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailTasksOnLobTruncation?: Value<boolean>;
  /**
   * The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source. This heartbeat keeps `restart_lsn` moving and prevents storage full scenarios.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeartbeatEnable?: Value<boolean>;
  /**
   * To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts.
   *
   * If this value is set to `N`, you don't have to create tables or triggers on the source database.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureDdls?: Value<boolean>;
  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.
   *
   * Example: `maxFileSize=512`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * Sets the WAL heartbeat frequency (in minutes).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeartbeatFrequency?: Value<number>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the PostgreSQL endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the PostgreSQL endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * Sets the schema in which the heartbeat artifacts are created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeartbeatSchema?: Value<string>;
  /**
   * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.
   *
   * When used with the `CdcStartPosition` request parameter for the AWS DMS API , this attribute also makes it possible to use native CDC start points. DMS verifies that the specified logical replication slot exists before starting the CDC load task. It also verifies that the task was created with a valid setting of `CdcStartPosition`. If the specified slot doesn't exist or the task doesn't have a valid `CdcStartPosition` setting, DMS raises an error.
   *
   * For more information about setting the `CdcStartPosition` request parameter, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native) in the _ AWS Database Migration Service User Guide_. For more information about using `CdcStartPosition`, see [CreateReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html), [StartReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html), and [ModifyReplicationTask](https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotName?: Value<string>;
}

/**
 * Provides information that defines a MongoDB endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Endpoint configuration settings when using MongoDB as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mongodbsettings.html}
 **/
export interface DMSEndpointMongoDbSettings {
  /**
   * The port value for the MongoDB source endpoint.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * Specifies the document ID. Use this setting when `NestingLevel` is set to `"none"`.
   *
   * Default value is `"false"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtractDocId?: Value<string>;
  /**
   * The database name on the MongoDB source endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The MongoDB database name. This setting isn't used when `AuthType` is set to `"no"`.
   *
   * The default is `"admin"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthSource?: Value<string>;
  /**
   * The authentication mechanism you use to access the MongoDB source endpoint.
   *
   * For the default value, in MongoDB version 2.x, `"default"` is `"mongodb_cr"`. For MongoDB version 3.x or later, `"default"` is `"scram_sha_1"`. This setting isn't used when `AuthType` is set to `"no"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `default | mongodb_cr | scram_sha_1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthMechanism?: Value<string>;
  /**
   * The user name you use to access the MongoDB source endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * Indicates the number of documents to preview to determine the document organization. Use this setting when `NestingLevel` is set to `"one"`.
   *
   * Must be a positive value greater than `0`. Default value is `1000`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocsToInvestigate?: Value<string>;
  /**
   * The name of the server on the MongoDB source endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerName?: Value<string>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MongoDB endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The authentication type you use to access the MongoDB source endpoint.
   *
   * When set to `"no"`, user name and password parameters are not used and can be empty.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `no | password`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthType?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MongoDB endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * The password for the user account you use to access the MongoDB source endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
  /**
   * Specifies either document or table mode.
   *
   * Default value is `"none"`. Specify `"none"` to use document mode. Specify `"one"` to use table mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `none | one`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NestingLevel?: Value<string>;
}

/**
 * Provides information that defines a MySQL endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [ Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-mysqlsettings.html}
 **/
export interface DMSEndpointMySqlSettings {
  /**
   * Specifies the time zone for the source MySQL database.
   *
   * Example: `serverTimezone=US/Pacific;`
   *
   * Note: Do not enclose time zones in single quotes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerTimezone?: Value<string>;
  /**
   * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
   *
   * Example: `eventsPollInterval=5;`
   *
   * In the example, AWS DMS checks for changes in the binary logs every five seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventsPollInterval?: Value<number>;
  /**
   * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
   *
   * Example: `parallelLoadThreads=1`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelLoadThreads?: Value<number>;
  /**
   * Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
   *
   * For this parameter, provide the code of the script itself, not the name of a file containing the script.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfterConnectScript?: Value<string>;
  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
   *
   * Example: `maxFileSize=512`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * Specifies where to migrate source tables on the target, either to a single database or multiple databases. If you specify `SPECIFIC_DATABASE`, specify the database name using the `DatabaseName` parameter of the `Endpoint` object.
   *
   * Example: `targetDbType=MULTIPLE_DATABASES`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetDbType?: Value<string>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. For example, in a situation where running an alter DDL on the table could result in different information about the table cached in the replication instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CleanSourceMetadataOnMismatch?: Value<boolean>;
}

/**
 * Provides information that defines an IBMDB2 endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Extra connection attributes when using Db2 LUW as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-ibmdb2settings.html}
 **/
export interface DMSEndpointIbmDb2Settings {
  /**
   * Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetDataCaptureChanges?: Value<boolean>;
  /**
   * For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentLsn?: Value<string>;
  /**
   * Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxKBytesPerRead?: Value<number>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the IBMDB2 endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
}

/**
 * Provides information that defines an OpenSearch endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [ Extra connection attributes when using OpenSearch as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-elasticsearchsettings.html}
 **/
export interface DMSEndpointElasticsearchSettings {
  /**
   * The endpoint for the OpenSearch cluster. AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointUri?: Value<string>;
  /**
   * The maximum percentage of records that can fail to be written before a full load operation stops.
   *
   * To avoid early failure, this counter is only effective after 1,000 records are transferred. OpenSearch also has the concept of error monitoring during the last 10 minutes of an Observation Window. If transfer of all records fail in the last 10 minutes, the full load operation stops.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullLoadErrorPercentage?: Value<number>;
  /**
   * The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorRetryDuration?: Value<number>;
  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
}

/**
 * Provides information that defines a Redis target endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Specifying endpoint settings for Redis as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redis.html#CHAP_Target.Redis.EndpointSettings) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redissettings.html}
 **/
export interface DMSEndpointRedisSettings {
  /**
   * The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include `plaintext` and `ssl-encryption`. The default is `ssl-encryption`. The `ssl-encryption` option makes an encrypted connection. Optionally, you can identify an Amazon Resource Name (ARN) for an SSL certificate authority (CA) using the `SslCaCertificateArn `setting. If an ARN isn't given for a CA, DMS uses the Amazon root CA.
   *
   * The `plaintext` option doesn't provide Transport Layer Security (TLS) encryption for traffic between endpoint and database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `plaintext | ssl-encryption`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslSecurityProtocol?: Value<string>;
  /**
   * The user name provided with the `auth-role` option of the `AuthType` setting for a Redis target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthUserName?: Value<string>;
  /**
   * Fully qualified domain name of the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerName?: Value<string>;
  /**
   * Transmission Control Protocol (TCP) port for the endpoint.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslCaCertificateArn?: Value<string>;
  /**
   * The password provided with the `auth-role` and `auth-token` options of the `AuthType` setting for a Redis target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthPassword?: Value<string>;
  /**
   * The type of authentication to perform when connecting to a Redis target. Options include `none`, `auth-token`, and `auth-role`. The `auth-token` option requires an `AuthPassword` value to be provided. The `auth-role` option requires `AuthUserName` and `AuthPassword` values to be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `auth-role | auth-token | none`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthType?: Value<string>;
}

/**
 * Provides information that defines an Amazon Redshift endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Extra connection attributes when using Amazon Redshift as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html#CHAP_Target.Redshift.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-redshiftsettings.html}
 **/
export interface DMSEndpointRedshiftSettings {
  /**
   * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionTimeout?: Value<number>;
  /**
   * Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfterConnectScript?: Value<string>;
  /**
   * The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.
   *
   * The number of parallel streams used to upload a single .csv file to an S3 bucket using S3 Multipart Upload. For more information, see [Multipart upload overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html).
   *
   * `FileTransferUploadStreams` accepts a value from 1 through 64. It defaults to 10.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileTransferUploadStreams?: Value<number>;
  /**
   * The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName?: Value<string>;
  /**
   * The AWS KMS key ID. If you are using `SSE_KMS` for the `EncryptionMode`, provide this key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerSideEncryptionKmsKeyId?: Value<string>;
  /**
   * This setting is only valid for a full-load migration task. Set `ExplicitIds` to `true` to have tables with `IDENTITY` columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplicitIds?: Value<boolean>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Amazon Redshift endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. This parameter applies only to columns with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose `true` to truncate data. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TruncateColumns?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the `iam:PassRole` action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
  /**
   * A value that specifies to replaces the invalid characters specified in `ReplaceInvalidChars`, substituting the specified characters instead. The default is `"?"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplaceChars?: Value<string>;
  /**
   * The time format that you want to use. Valid values are `auto` (case-sensitive), `'timeformat_string'`, `'epochsecs'`, or `'epochmillisecs'`. It defaults to 10. Using `auto` recognizes most strings, even some that aren't supported when you use a time format string.
   *
   * If your date and time values use formats different from each other, set this parameter to `auto`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeFormat?: Value<string>;
  /**
   * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
   *
   * For full load mode, AWS DMS converts source records into .csv files and loads them to the _BucketFolder/TableID_ path. AWS DMS uses the Redshift `COPY` command to upload the .csv files to the target table. The files are deleted once the `COPY` operation has finished. For more information, see [COPY](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html) in the _Amazon Redshift Database Developer Guide_.
   *
   * For change-data-capture (CDC) mode, AWS DMS creates a _NetChanges_ table, and loads the .csv files to this _BucketFolder/NetChangesTableID_ path.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketFolder?: Value<string>;
  /**
   * A list of characters that you want to replace. Use with `ReplaceChars`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplaceInvalidChars?: Value<string>;
  /**
   * A value that specifies to remove surrounding quotation marks from strings in the incoming data. All characters within the quotation marks, including delimiters, are retained. Choose `true` to remove quotation marks. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemoveQuotes?: Value<boolean>;
  /**
   * The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadTimeout?: Value<number>;
  /**
   * The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * A value that specifies to remove the trailing white space characters from a VARCHAR string. This parameter applies only to columns with a VARCHAR data type. Choose `true` to remove unneeded white space. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrimBlanks?: Value<boolean>;
  /**
   * The date format that you are using. Valid values are `auto` (case-sensitive), your date format string enclosed in quotes, or NULL. If this parameter is left unset (NULL), it defaults to a format of 'YYYY-MM-DD'. Using `auto` recognizes most strings, even some that aren't supported when you use a date format string.
   *
   * If your date and time values use formats different from each other, set this to `auto`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFormat?: Value<string>;
  /**
   * If you set `CompUpdate` to `true` Amazon Redshift applies automatic compression if the table is empty. This applies even if the table columns already have encodings other than `RAW`. If you set `CompUpdate` to `false`, automatic compression is disabled and existing column encodings aren't changed. The default is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompUpdate?: Value<boolean>;
  /**
   * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose `true` or `false` (the default).
   *
   * This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT specification, Amazon Redshift inserts a NULL value into that field.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcceptAnyDate?: Value<boolean>;
  /**
   * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteBufferSize?: Value<number>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the Amazon Redshift endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * If Amazon Redshift is configured to support case sensitive schema names, set `CaseSensitiveNames` to `true`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaseSensitiveNames?: Value<boolean>;
  /**
   * A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of `true` sets empty CHAR and VARCHAR fields to null. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyAsNull?: Value<boolean>;
  /**
   * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS`.
   *
   * For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3`. But you can’t change the existing value from `SSE_S3` to `SSE_KMS`.
   *
   * To use `SSE_S3`, create an AWS Identity and Access Management (IAM) role with a policy that allows `"arn:aws:s3:::*"` to use the following actions: `"s3:PutObject", "s3:ListBucket"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `sse-kms | sse-s3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionMode?: Value<string>;
}

/**
 * Provides information that defines an Amazon S3 endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [ Extra connection attributes when using Amazon S3 as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html#CHAP_Source.S3.Configuring) and [ Extra connection attributes when using Amazon S3 as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the*AWS Database Migration Service User Guide*.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-s3settings.html}
 **/
export interface DMSEndpointS3Settings {
  /**
   * A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
   *
   * AWS DMS supports the `TimestampColumnName` parameter in versions 3.1.4 and later.
   *
   * AWS DMS includes an additional `STRING` column in the .csv or .parquet object files of your migrated data when you set `TimestampColumnName` to a nonblank value.
   *
   * For a full load, each row of this timestamp column contains a timestamp for when the data was transferred from the source to the target by DMS.
   *
   * For a change data capture (CDC) load, each row of the timestamp column contains the timestamp for the commit of that row in the source database.
   *
   * The string format for this timestamp column value is `yyyy-MM-dd HH:mm:ss.SSSSSS`. By default, the precision of this value is in microseconds. For a CDC load, the rounding of the precision depends on the commit timestamp supported by DMS for the source database.
   *
   * When the `AddColumnName` parameter is set to `true`, DMS also includes a name for the timestamp column that you set with `TimestampColumnName`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampColumnName?: Value<string>;
  /**
   * A value that enables statistics for Parquet pages and row groups. Choose `true` to enable statistics, `false` to disable. Statistics include `NULL`, `DISTINCT`, `MAX`, and `MIN` values. This parameter defaults to `true`. This value is used for .parquet file format only.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableStatistics?: Value<boolean>;
  /**
   * Identifies the sequence of the date format to use during folder partitioning. The default value is `YYYYMMDD`. Use this parameter when `DatePartitionedEnabled` is set to `true`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DDMMYYYY | MMYYYYDD | YYYYMM | YYYYMMDD | YYYYMMDDHH`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatePartitionSequence?: Value<string>;
  /**
   * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.
   *
   * AWS DMS supports the `IncludeOpForFullLoad` parameter in versions 3.1.4 and later.
   *
   * For full load, records can only be inserted. By default (the `false` setting), no information is recorded in these output files for a full load to indicate that the rows were inserted at the source database. If `IncludeOpForFullLoad` is set to `true` or `y`, the INSERT is recorded as an I annotation in the first field of the .csv file. This allows the format of your target records from a full load to be consistent with the target records from a CDC load.
   *
   * This setting works together with the `CdcInsertsOnly` and the `CdcInsertsAndUpdates` parameters for output to .csv files only. For more information about how these settings work together, see [ Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeOpForFullLoad?: Value<boolean>;
  /**
   * An optional parameter that specifies how AWS DMS treats null values. While handling the null value, you can use this parameter to pass a user-defined string as null when writing to the target. For example, when target columns are not nullable, you can use this option to differentiate between the empty string value and the null value. So, if you set this parameter value to the empty string ("" or ''), AWS DMS treats the empty string as the null value instead of `NULL`.
   *
   * The default value is `NULL`. Valid values include any valid string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvNullValue?: Value<string>;
  /**
   * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. The default setting is `false`, but when `CdcInsertsAndUpdates` is set to `true` or `y`, only INSERTs and UPDATEs from the source database are migrated to the .csv or .parquet file.
   *
   * For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the value of the `IncludeOpForFullLoad` parameter. If `IncludeOpForFullLoad` is set to `true`, the first field of every CDC record is set to either `I` or `U` to indicate INSERT and UPDATE operations at the source. But if `IncludeOpForFullLoad` is set to `false`, CDC records are written without an indication of INSERT or UPDATE operations at the source. For more information about how these settings work together, see [ Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the _AWS Database Migration Service User Guide_.
   *
   * AWS DMS supports the use of the `CdcInsertsAndUpdates` parameter in versions 3.3.1 and later.
   *
   * `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcInsertsAndUpdates?: Value<boolean>;
  /**
   * The name of the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName?: Value<string>;
  /**
   * If you are using `SSE_KMS` for the `EncryptionMode`, provide the AWS KMS key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
   *
   * Here is a CLI example: `aws dms create-endpoint --endpoint-identifier value --endpoint-type target --engine-name s3 --s3-settings ServiceAccessRoleArn=value,BucketFolder=value,BucketName=value,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=value `
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerSideEncryptionKmsKeyId?: Value<string>;
  /**
   * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. For full load, when `useTaskStartTimeForFullLoadTimestamp` is set to `true`, each row of the timestamp column contains the task start time. For CDC loads, each row of the timestamp column contains the transaction commit time.
   *
   * When `useTaskStartTimeForFullLoadTimestamp` is set to `false`, the full load timestamp in the timestamp column increments with the time data arrives at the target.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseTaskStartTimeForFullLoadTimestamp?: Value<boolean>;
  /**
   * The format of the data that you want to use for output. You can choose one of the following:
   */
  DataFormat?: Value<string>;
  /**
   * The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvDelimiter?: Value<string>;
  /**
   * When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
   *
   * The default is 0.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IgnoreHeaderRows?: Value<number>;
  /**
   * A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. For more information about Amazon S3 canned ACLs, see [ Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the _Amazon S3 Developer Guide_.
   *
   * The default value is NONE. Valid values include NONE, PRIVATE, PUBLIC_READ, PUBLIC_READ_WRITE, AUTHENTICATED_READ, AWS_EXEC_READ, BUCKET_OWNER_READ, and BUCKET_OWNER_FULL_CONTROL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `authenticated-read | aws-exec-read | bucket-owner-full-control | bucket-owner-read | none | private | public-read | public-read-write`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CannedAclForObjects?: Value<string>;
  /**
   * For an S3 source, when this value is set to `true` or `y`, each leading double quotation mark has to be followed by an ending double quotation mark. This formatting complies with RFC 4180. When this value is set to `false` or `n`, string literals are copied to the target as is. In this case, a delimiter (row or column) signals the end of the field. Thus, you can't use a delimiter as part of the string, because it signals the end of the value.
   *
   * For an S3 target, an optional parameter used to set behavior to comply with RFC 4180 for data migrated to Amazon S3 using .csv file format only. When this value is set to `true` or `y` using Amazon S3 as a target, if the data has quotation marks or newline characters in it, AWS DMS encloses the entire column with an additional pair of double quotation marks ("). Every quotation mark within the data is repeated twice.
   *
   * The default value is `true`. Valid values include `true`, `false`, `y`, and `n`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rfc4180?: Value<boolean>;
  /**
   * A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action. It enables AWS DMS to read and write objects from an S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
  /**
   * A value that specifies the precision of any `TIMESTAMP` column values that are written to an Amazon S3 object file in .parquet format.
   *
   * AWS DMS supports the `ParquetTimestampInMillisecond` parameter in versions 3.1.4 and later.
   *
   * When `ParquetTimestampInMillisecond` is set to `true` or `y`, AWS DMS writes all `TIMESTAMP` columns in a .parquet formatted file with millisecond precision. Otherwise, DMS writes them with microsecond precision.
   *
   * Currently, Amazon Athena and AWS Glue can handle only millisecond precision for `TIMESTAMP` values. Set this parameter to `true` for S3 endpoint object files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue.
   *
   * AWS DMS writes any `TIMESTAMP` column values written to an S3 file in .csv format with microsecond precision.
   *
   * Setting `ParquetTimestampInMillisecond` has no effect on the string format of the timestamp column value that is inserted by setting the `TimestampColumnName` parameter.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParquetTimestampInMillisecond?: Value<boolean>;
  /**
   * If this setting is set to `true`, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CdcPath). For more information, see [ Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath).
   *
   * This setting is supported in AWS DMS versions 3.4.2 and later.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreserveTransactions?: Value<boolean>;
  /**
   * An optional parameter to set a folder name in the S3 bucket. If provided, tables are created in the path `bucketFolder/schema_name/table_name/`. If this parameter isn't specified, the path used is `schema_name/table_name/`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketFolder?: Value<string>;
  /**
   * Specifies a date separating delimiter to use during folder partitioning. The default value is `SLASH`. Use this parameter when `DatePartitionedEnabled` is set to `true`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DASH | NONE | SLASH | UNDERSCORE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatePartitionDelimiter?: Value<string>;
  /**
   * The type of encoding that you're using:
   */
  EncodingType?: Value<string>;
  /**
   * The version of the Apache Parquet format that you want to use: `parquet_1_0` (the default) or `parquet_2_0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `parquet-1-0 | parquet-2-0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParquetVersion?: Value<string>;
  /**
   * An optional parameter that, when set to `true` or `y`, you can use to add column name information to the .csv output file.
   *
   * The default value is `false`. Valid values are `true`, `false`, `y`, and `n`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddColumnName?: Value<boolean>;
  /**
   * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
   *
   * When `CdcMinFileSize` and `CdcMaxBatchInterval` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
   *
   * The default value is 32 MB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcMinFileSize?: Value<number>;
  /**
   * The external table definition.
   *
   * Conditional: If `S3` is used as a source then `ExternalTableDefinition` is required.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExternalTableDefinition?: Value<string>;
  /**
   * This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to `true` for columns not included in the supplemental log, AWS DMS uses the value specified by [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-CsvNoSupValue). If this setting isn't set or is set to `false`, AWS DMS uses the null value for these columns.
   *
   * This setting is supported in AWS DMS versions 3.4.1 and later.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseCsvNoSupValue?: Value<boolean>;
  /**
   * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
   *
   * The default value is 1,048,576 KB (1 GB). Valid values include 1 to 1,048,576.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. If [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-UseCsvNoSupValue) is set to true, specify a string value that you want AWS DMS to use for all columns not included in the supplemental log. If you do not specify a string value, AWS DMS uses the null value for these columns regardless of the `UseCsvNoSupValue` setting.
   *
   * This setting is supported in AWS DMS versions 3.4.1 and later.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvNoSupValue?: Value<string>;
  /**
   * Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional. If `CdcPath` is set, AWS DMS reads CDC files from this path and replicates the data changes to the target endpoint. For an S3 target if you set [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-PreserveTransactions) to `true`, AWS DMS verifies that you have set this parameter to a folder path on your S3 target where AWS DMS can save the transaction order for the CDC load. AWS DMS creates this CDC folder path in either your S3 target working directory or the S3 target location specified by [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketFolder) and [https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName](https://docs.aws.amazon.com/dms/latest/APIReference/API_S3Settings.html#DMS-Type-S3Settings-BucketName).
   *
   * For example, if you specify `CdcPath` as `MyChangedData`, and you specify `BucketName` as `MyTargetBucket` but do not specify `BucketFolder`, AWS DMS creates the CDC folder path following: `MyTargetBucket/MyChangedData`.
   *
   * If you specify the same `CdcPath`, and you specify `BucketName` as `MyTargetBucket` and `BucketFolder` as `MyTargetData`, AWS DMS creates the CDC folder path following: `MyTargetBucket/MyTargetData/MyChangedData`.
   *
   * For more information on CDC including transaction order on an S3 target, see [ Capturing data changes (CDC) including transaction order on the S3 target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.EndpointSettings.CdcPath).
   *
   * This setting is supported in AWS DMS versions 3.4.2 and later.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcPath?: Value<string>;
  /**
   * The delimiter used to separate rows in the .csv file for both source and target.
   *
   * The default is a carriage return (`n`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvRowDelimiter?: Value<string>;
  /**
   * The number of rows in a row group. A smaller row group size provides faster reads. But as the number of row groups grows, the slower writes become. This parameter defaults to 10,000 rows. This number is used for .parquet file format only.
   *
   * If you choose a value larger than the maximum, `RowGroupLength` is set to the max row group length in bytes (64 * 1024 * 1024).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowGroupLength?: Value<number>;
  /**
   * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
   *
   * When `CdcMaxBatchInterval` and `CdcMinFileSize` are both specified, the file write is triggered by whichever parameter condition is met first within an AWS DMS CloudFormation template.
   *
   * The default value is 60 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcMaxBatchInterval?: Value<number>;
  /**
   * The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPageSize?: Value<number>;
  /**
   * The maximum size of an encoded dictionary page of a column. If the dictionary page exceeds this, this column is stored using an encoding type of `PLAIN`. This parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page before it reverts to `PLAIN` encoding. This size is used for .parquet file format only.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DictPageSizeLimit?: Value<number>;
  /**
   * When set to `true`, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is `false`. For more information about date-based folder partitioning, see [ Using date-based folder partitioning](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.DatePartitioning).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatePartitionEnabled?: Value<boolean>;
  /**
   * An optional parameter. When set to GZIP it enables the service to compress the target files. To allow the service to write the target files uncompressed, either set this parameter to NONE (the default) or don't specify the parameter at all. This parameter applies to both .csv and .parquet file formats.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gzip | none`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompressionType?: Value<string>;
  /**
   * When creating an S3 target endpoint, set `DatePartitionTimezone` to convert the current UTC time into a specified time zone. The conversion occurs when a date partition folder is created and a change data capture (CDC) file name is generated. The time zone format is Area/Location. Use this parameter when `DatePartitionedEnabled` is set to `true`, as shown in the following example.
   *
   * `s3-settings='{"DatePartitionEnabled": true, "DatePartitionSequence": "YYYYMMDDHH", "DatePartitionDelimiter": "SLASH", "DatePartitionTimezone":"Asia/Seoul", "BucketName": "dms-nattarat-test"}'`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatePartitionTimezone?: Value<string>;
  /**
   * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the `false` setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
   *
   * If `CdcInsertsOnly` is set to `true` or `y`, only INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format only, how these INSERTs are recorded depends on the value of `IncludeOpForFullLoad`. If `IncludeOpForFullLoad` is set to `true`, the first field of every CDC record is set to I to indicate the INSERT operation at the source. If `IncludeOpForFullLoad` is set to `false`, every CDC record is written without a first field to indicate the INSERT operation at the source. For more information about how these settings work together, see [ Indicating Source DB Operations in Migrated S3 Data](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps) in the _AWS Database Migration Service User Guide_.
   *
   * AWS DMS supports the interaction described preceding between the `CdcInsertsOnly` and `IncludeOpForFullLoad` parameters in versions 3.1.4 and later.
   *
   * `CdcInsertsOnly` and `CdcInsertsAndUpdates` can't both be set to `true` for the same endpoint. Set either `CdcInsertsOnly` or `CdcInsertsAndUpdates` to `true` for the same endpoint, but not both.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdcInsertsOnly?: Value<boolean>;
  /**
   * The type of server-side encryption that you want to use for your data. This encryption type is part of the endpoint settings or the extra connections attributes for Amazon S3. You can choose either `SSE_S3` (the default) or `SSE_KMS`.
   *
   * For the `ModifyEndpoint` operation, you can change the existing value of the `EncryptionMode` parameter from `SSE_KMS` to `SSE_S3`. But you can’t change the existing value from `SSE_S3` to `SSE_KMS`.
   *
   * To use `SSE_S3`, you need an IAM role with permission to allow `"arn:aws:s3:::dms-*"` to use the following actions:
   */
  EncryptionMode?: Value<string>;
}

/**
 * Provides information that defines a Microsoft SQL Server endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Extra connection attributes when using SQL Server as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [ Extra connection attributes when using SQL Server as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-microsoftsqlserversettings.html}
 **/
export interface DMSEndpointMicrosoftSqlServerSettings {
  /**
   * When this attribute is set to `Y`, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to `Y` enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadBackupOnly?: Value<boolean>;
  /**
   * The maximum size of the packets (in bytes) used to transfer data using BCP.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BcpPacketSize?: Value<number>;
  /**
   * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuerySingleAlwaysOnNode?: Value<boolean>;
  /**
   * Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.
   *
   * _Start transactions in the database:_ This is the default method. When this method is used, AWS DMS prevents TLOG truncation by mimicking a transaction in the database. As long as such a transaction is open, changes that appear after the transaction started aren't truncated. If you need Microsoft Replication to be enabled in your database, then you must choose this method.
   *
   * _Exclusively use sp_repldone within a single task_: When this method is used, AWS DMS reads the changes and then uses sp_repldone to mark the TLOG transactions as ready for truncation. Although this method doesn't involve any transactional activities, it can only be used when Microsoft Replication isn't running. Also, when using this method, only one AWS DMS task can access the database at any given time. Therefore, if you need to run parallel AWS DMS tasks against the same database, use the default method.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SafeguardPolicy?: Value<string>;
  /**
   * When this attribute is set to `Y`, DMS processes third-party transaction log backups if they are created in native format.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseThirdPartyBackupDevice?: Value<boolean>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MicrosoftSQLServer endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * Specifies a file group for the AWS DMS internal tables. When the replication task starts, all the internal AWS DMS control tables (awsdms_ apply_exception, awsdms_apply, awsdms_changes) are created for the specified file group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlTablesFileGroup?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the SQL Server endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseBcpFullLoad?: Value<boolean>;
}

/**
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-kafkasettings.html}
 **/
export interface DMSEndpointKafkaSettings {
  /**
   * A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form `broker-hostname-or-ip:port`. For example, `"ec2-12-345-678-901.compute-1.amazonaws.com:2345"`. For more information and examples of specifying a list of broker locations, see [ Using Apache Kafka as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Broker?: Value<string>;
  /**
   * The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SaslPassword?: Value<string>;
  /**
   * The output format for the records created on the endpoint. The message format is `JSON` (default) or `JSON_UNFORMATTED` (a single line with no tab).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `json | json-unformatted`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageFormat?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslClientCertificateArn?: Value<string>;
  /**
   * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for `transaction_id`, previous `transaction_id`, and `transaction_record_id` (the record offset within a transaction). The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeTransactionDetails?: Value<boolean>;
  /**
   * Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include `ssl-encryption`, `ssl-authentication`, and `sasl-ssl`. `sasl-ssl` requires `SaslUsername` and `SaslPassword`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `plaintext | sasl-ssl | ssl-authentication | ssl-encryption`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityProtocol?: Value<string>;
  /**
   * Includes any data definition language (DDL) operations that change the table in the control data, such as `rename-table`, `drop-table`, `add-column`, `drop-column`, and `rename-column`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeTableAlterOperations?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslCaCertificateArn?: Value<string>;
  /**
   * Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeControlDetails?: Value<boolean>;
  /**
   * Shows the partition value within the Kafka message output unless the partition type is `schema-table-type`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludePartitionValue?: Value<boolean>;
  /**
   * Set this optional parameter to `true` to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the `NoHexPrefix` endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoHexPrefix?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslClientKeyArn?: Value<string>;
  /**
   * The password for the client private key used to securely connect to a Kafka target endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslClientKeyPassword?: Value<string>;
  /**
   * The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SaslUserName?: Value<string>;
  /**
   * The maximum size in bytes for records created on the endpoint The default is 1,000,000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageMaxBytes?: Value<number>;
  /**
   * The topic to which you migrate the data. If you don't specify a topic, AWS DMS specifies `"kafka-default-topic"` as the migration topic.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Topic?: Value<string>;
  /**
   * Prefixes schema and table names to partition values, when the partition type is `primary-key-type`. Doing this increases data distribution among Kafka partitions. For example, suppose that a SysBench schema has thousands of tables and each table has only limited range for a primary key. In this case, the same primary key is sent from thousands of tables to the same partition, which causes throttling. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionIncludeSchemaTable?: Value<boolean>;
  /**
   * Include NULL and empty columns for records migrated to the endpoint. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeNullAndEmpty?: Value<boolean>;
}

/**
 * Provides information that defines an Amazon Neptune endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about the available settings, see [ Specifying endpoint settings for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-neptunesettings.html}
 **/
export interface DMSEndpointNeptuneSettings {
  /**
   * The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetryCount?: Value<number>;
  /**
   * The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the bulk load is successful, AWS DMS clears the bucket, ready to store the next batch of migrated graph data.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by `S3BucketName`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketFolder?: Value<string>;
  /**
   * The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorRetryDuration?: Value<number>;
  /**
   * If you want IAM authorization enabled for this endpoint, set this parameter to `true`. Then attach the appropriate IAM policy document to your service role specified by `ServiceAccessRoleArn`. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamAuthEnabled?: Value<boolean>;
  /**
   * The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. AWS DMS maps the SQL source data to graph data before storing it in these .csv files.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the `iam:PassRole` action.
   *
   * For more information, see [ Creating an IAM Service Role for Accessing Amazon Neptune as a Target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
}

/**
 * Provides information that defines a GCP MySQL endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. These settings are much the same as the settings for any MySQL-compatible endpoint. For more information, see [ Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-gcpmysqlsettings.html}
 **/
export interface DMSEndpointGcpMySQLSettings {
  /**
   * Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
   *
   * For this parameter, provide the code of the script itself, not the name of a file containing the script.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfterConnectScript?: Value<string>;
  /**
   * The port used by the endpoint database.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the `DatabaseName` request parameter on either the `CreateEndpoint` or `ModifyEndpoint` API call. Specifying `DatabaseName` when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CleanSourceMetadataOnMismatch?: Value<boolean>;
  /**
   * Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
   *
   * Example: `serverTimezone=US/Pacific;`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerTimezone?: Value<string>;
  /**
   * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
   *
   * Example: `eventsPollInterval=5;`
   *
   * In the example, AWS DMS checks for changes in the binary logs every five seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventsPollInterval?: Value<number>;
  /**
   * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
   *
   * Example: `parallelLoadThreads=1`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelLoadThreads?: Value<number>;
  /**
   * Endpoint connection user name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
   *
   * Example: `maxFileSize=512`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFileSize?: Value<number>;
  /**
   * Endpoint TCP port.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerName?: Value<string>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the MySQL endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret.` The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * Endpoint connection password.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
}

/**
 * Provides information that defines an Oracle endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Extra connection attributes when using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [ Extra connection attributes when using Oracle as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-oraclesettings.html}
 **/
export interface DMSEndpointOracleSettings {
  /**
   * For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. You can set this value from the `asm_user_password` value. You set this value as part of the comma-separated value that you set to the `Password` request parameter when you create the endpoint to access transaction logs using Binary Reader. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AsmPassword?: Value<string>;
  /**
   * When set to `true`, this attribute specifies a parallel load when `useDirectPathFullLoad` is set to `Y`. This attribute also only applies when you use the AWS DMS parallel load feature. Note that the target table cannot have any constraints or indexes.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectPathParallelLoad?: Value<boolean>;
  /**
   * Set this attribute with `ArchivedLogDestId` in a primary/ standby setup. This attribute is useful in the case of a switchover. In this case, AWS DMS needs to know which destination to get archive redo logs from to read changes. This need arises because the previous primary instance is now a standby instance after switchover.
   *
   * Although AWS DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless necessary. For additional information about `RESETLOGS`, see [RMAN Data Repair Concepts](https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the _Oracle Database Backup and Recovery User's Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalArchivedLogDestId?: Value<number>;
  /**
   * Use this attribute to convert `SDO_GEOMETRY` to `GEOJSON` format. By default, DMS calls the `SDO2GEOJSON` custom function if present and accessible. Or you can create your own custom function that mimics the operation of `SDOGEOJSON` and set `SpatialDataOptionToGeoJsonFunctionName` to call it instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpatialDataOptionToGeoJsonFunctionName?: Value<string>;
  /**
   * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This setting tells DMS instance to replace the default Oracle root with the specified `usePathPrefix` setting to access the redo logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplacePathPrefix?: Value<boolean>;
  /**
   * When set to `true`, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified `LobMaxSize`.
   *
   * If a task is set to limited LOB mode and this option is set to `true`, the task fails instead of truncating the LOB data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailTasksOnLobTruncation?: Value<boolean>;
  /**
   * For an Oracle source endpoint, your ASM server address. You can set this value from the `asm_server` value. You set `asm_server` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AsmServer?: Value<string>;
  /**
   * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). The full ARN of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the `SecretsManagerOracleAsmSecret`. This `SecretsManagerOracleAsmSecret` has the secret value that allows access to the Oracle ASM of the endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerOracleAsmSecretId`. Or you can specify clear-text values for `AsmUserName`, `AsmPassword`, and `AsmServerName`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerOracleAsmSecret`, the corresponding `SecretsManagerOracleAsmAccessRoleArn`, and the `SecretsManagerOracleAsmSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerOracleAsmAccessRoleArn?: Value<string>;
  /**
   * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the default Oracle root used to access the redo logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OraclePathPrefix?: Value<string>;
  /**
   * Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 1000 (the default) and 200,000 (the maximum).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadAheadBlocks?: Value<number>;
  /**
   * Use this attribute to specify a time in minutes for the delay in standby sync. If the source is an Oracle Active Data Guard standby database, use this attribute to specify the time lag between primary and standby databases.
   *
   * In AWS DMS, you can create an Oracle CDC task that uses an Active Data Guard standby instance as a source for replicating ongoing changes. Doing this eliminates the need to connect to an active database that might be in production.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StandbyDelayTime?: Value<number>;
  /**
   * Set this attribute to `true` to enable replication of Oracle tables containing columns that are nested tables or defined types.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowSelectNestedTables?: Value<boolean>;
  /**
   * Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.
   *
   * If you use this option, you still need to enable database-level supplemental logging.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddSupplementalLogging?: Value<boolean>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the Oracle endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * Set this attribute to Y to capture change data using the Binary Reader utility. Set `UseLogminerReader` to N to set this attribute to Y. To use Binary Reader with Amazon RDS for Oracle as the source, you set additional attributes. For more information about using this setting with Oracle Automatic Storage Management (ASM), see [ Using Oracle LogMiner or AWS DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseBFile?: Value<boolean>;
  /**
   * Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableHomogenousTablespace?: Value<boolean>;
  /**
   * For an Oracle source endpoint, your ASM user name. You can set this value from the `asm_user` value. You set `asm_user` as part of the extra connection attribute string to access an Oracle server with Binary Reader that uses ASM. For more information, see [Configuration for change data capture (CDC) on an Oracle source database](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AsmUser?: Value<string>;
  /**
   * Set this attribute to Y to have AWS DMS use a direct path full load. Specify this value to use the direct path protocol in the Oracle Call Interface (OCI). By using this OCI protocol, you can bulk-load Oracle target tables during a full load.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseDirectPathFullLoad?: Value<boolean>;
  /**
   * For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the `TDE_Password` part of the comma-separated value you set to the `Password` request parameter when you create the endpoint. The `SecurityDbEncryptian` setting is related to this `SecurityDbEncryptionName` setting. For more information, see [ Supported encryption methods for using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the _ AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityDbEncryption?: Value<string>;
  /**
   * Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). You can specify an integer value between 2 (the default) and 8 (the maximum). Use this attribute together with the `readAheadBlocks` attribute.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelAsmReadThreads?: Value<number>;
  /**
   * Specifies the ID of the destination for the archived redo logs. This value should be the same as a number in the dest_id column of the v$archived_log view. If you work with an additional redo log destination, use the `AdditionalArchivedLogDestId` option to specify the additional destination ID. Doing this improves performance by ensuring that the correct logs are accessed from the outset.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchivedLogDestId?: Value<number>;
  /**
   * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This value specifies the path prefix used to replace the default Oracle root to access the redo logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsePathPrefix?: Value<string>;
  /**
   * Set this attribute to Y to capture change data using the Oracle LogMiner utility (the default). Set this attribute to N if you want to access the redo logs as a binary file. When you set `UseLogminerReader` to N, also set `UseBfile` to Y. For more information on this setting and using Oracle ASM, see [ Using Oracle LogMiner or AWS DMS Binary Reader for CDC](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC) in the _ AWS DMS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseLogminerReader?: Value<boolean>;
  /**
   * For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. The key value is the value of the `SecurityDbEncryption` setting. For more information on setting the key name value of `SecurityDbEncryptionName`, see the information and example for setting the `securityDbEncryptionName` extra connection attribute in [ Supported encryption methods for using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption) in the _ AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityDbEncryptionName?: Value<string>;
  /**
   * When set to `true`, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectPathNoLog?: Value<boolean>;
  /**
   * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). The full ARN, partial ARN, or display name of the `SecretsManagerOracleAsmSecret` that contains the Oracle ASM connection details for the Oracle endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerOracleAsmSecretId?: Value<string>;
  /**
   * Specifies whether the length of a character column is in bytes or in characters. To indicate that the character column length is in characters, set this attribute to `CHAR`. Otherwise, the character column length is in bytes.
   *
   * Example: `charLengthSemantics=CHAR;`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `byte | char | default`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CharLengthSemantics?: Value<string>;
  /**
   * Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.
   *
   * Example: `numberDataTypeScale=12`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberDatatypeScale?: Value<number>;
  /**
   * When set to `true`, this attribute supports tablespace replication.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadTableSpaceName?: Value<boolean>;
  /**
   * Set this attribute to `false` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to not access redo logs through any specified path prefix replacement using direct file access.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessAlternateDirectly?: Value<boolean>;
  /**
   * Set this attribute to `true` in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. This tells the DMS instance to use any specified prefix replacement to access all online redo logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseAlternateFolderForOnline?: Value<boolean>;
  /**
   * When this field is set to `Y`, AWS DMS only accesses the archived redo logs. If the archived redo logs are stored on Automatic Storage Management (ASM) only, the AWS DMS user account needs to be granted ASM privileges.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchivedLogsOnly?: Value<boolean>;
  /**
   * Specifies the IDs of one more destinations for one or more archived redo logs. These IDs are the values of the `dest_id` column in the `v$archived_log` view. Use this setting with the `archivedLogDestId` extra connection attribute in a primary-to-single setup or a primary-to-multiple-standby setup.
   *
   * This setting is useful in a switchover when you use an Oracle Data Guard database as a source. In this case, AWS DMS needs information about what destination to get archive redo logs from to read changes. AWS DMS needs this because after the switchover the previous primary is a standby instance. For example, in a primary-to-single standby setup you might apply the following settings.
   *
   * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2]`
   *
   * In a primary-to-multiple-standby setup, you might apply the following settings.
   *
   * `archivedLogDestId=1; ExtraArchivedLogDestIds=[2,3,4]`
   *
   * Although AWS DMS supports the use of the Oracle `RESETLOGS` option to open the database, never use `RESETLOGS` unless it's necessary. For more information about `RESETLOGS`, see [ RMAN Data Repair Concepts](https://docs.oracle.com/en/database/oracle/oracle-database/19/bradv/rman-data-repair-concepts.html#GUID-1805CCF7-4AF2-482D-B65A-998192F89C2B) in the _Oracle Database Backup and Recovery User's Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtraArchivedLogDestIds?: List<Value<number>>;
  /**
   * Specifies the number of seconds that the system waits before resending a query.
   *
   * Example: `retryInterval=6;`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryInterval?: Value<number>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the Oracle endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
}

/**
 * Provides information, including the Amazon Resource Name (ARN) of the IAM role used to define an Amazon DynamoDB target endpoint. This information also includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Using object mapping to migrate data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-dynamodbsettings.html}
 **/
export interface DMSEndpointDynamoDbSettings {
  /**
   * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the `iam:PassRole` action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccessRoleArn?: Value<string>;
}

/**
 * Provides information that defines a DocumentDB endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For more information about other available settings, see [ Using extra connections attributes with Amazon DocumentDB as a source](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html#CHAP_Source.DocumentDB.ECAs) and [ Using Amazon DocumentDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DocumentDB.html) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-docdbsettings.html}
 **/
export interface DMSEndpointDocDbSettings {
  /**
   * Indicates the number of documents to preview to determine the document organization. Use this setting when `NestingLevel` is set to `"one"`.
   *
   * Must be a positive value greater than `0`. Default value is `1000`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocsToInvestigate?: Value<number>;
  /**
   * Specifies the document ID. Use this setting when `NestingLevel` is set to `"none"`.
   *
   * Default value is `"false"`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtractDocId?: Value<boolean>;
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the DocumentDB endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
  /**
   * Specifies either document or table mode.
   *
   * Default value is `"none"`. Specify `"none"` to use document mode. Specify `"one"` to use table mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `none | one`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NestingLevel?: Value<string>;
}

/**
 * Provides information that defines a SAP ASE endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information. For information about other available settings, see [ Extra connection attributes when using SAP ASE as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [ Extra connection attributes when using SAP ASE as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dms-endpoint-sybasesettings.html}
 **/
export interface DMSEndpointSybaseSettings {
  /**
   * The full ARN, partial ARN, or display name of the `SecretsManagerSecret` that contains the SAP SAE endpoint connection details.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerSecretId?: Value<string>;
  /**
   * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in `SecretsManagerSecret`. The role must allow the `iam:PassRole` action. `SecretsManagerSecret` has the value of the AWS Secrets Manager secret that allows access to the SAP ASE endpoint.
   *
   * You can specify one of two sets of values for these permissions. You can specify the values for this setting and `SecretsManagerSecretId`. Or you can specify clear-text values for `UserName`, `Password`, `ServerName`, and `Port`. You can't specify both.
   *
   * For more information on creating this `SecretsManagerSecret`, the corresponding `SecretsManagerAccessRoleArn`, and the `SecretsManagerSecretId` that is required to access it, see [ Using secrets to access AWS Database Migration Service resources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#security-iam-secretsmanager) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsManagerAccessRoleArn?: Value<string>;
}
export interface DMSEndpointProperties {
  /**
   * Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see [ Extra connection attributes when using SAP ASE as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib) and [ Extra connection attributes when using SAP ASE as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SybaseSettings](aws-properties-dms-endpoint-sybasesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SybaseSettings?: DMSEndpointSybaseSettings;
  /**
   * Settings in JSON format for the target Redis endpoint. For information about other available settings, see [ Specifying endpoint settings for Redis as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redis.html#CHAP_Target.Redis.EndpointSettings) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RedisSettings](aws-properties-dms-endpoint-redissettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedisSettings?: DMSEndpointRedisSettings;
  /**
   * Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see [ Extra connection attributes when using Oracle as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib) and [ Extra connection attributes when using Oracle as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [OracleSettings](aws-properties-dms-endpoint-oraclesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OracleSettings?: DMSEndpointOracleSettings;
  /**
   * Settings in JSON format for the target Apache Kafka endpoint. For more information about other available settings, see [ Using object mapping to migrate data to a Kafka topic](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [KafkaSettings](aws-properties-dms-endpoint-kafkasettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KafkaSettings?: DMSEndpointKafkaSettings;
  /**
   * The port used by the endpoint database.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see [ Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) and [ Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [MySqlSettings](aws-properties-dms-endpoint-mysqlsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MySqlSettings?: DMSEndpointMySqlSettings;
  /**
   * Settings in JSON format for the source and target Amazon S3 endpoint. For more information about other available settings, see [ Extra connection attributes when using Amazon S3 as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.S3.html#CHAP_Source.S3.Configuring) and [ Extra connection attributes when using Amazon S3 as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring) in the*AWS Database Migration Service User Guide*.
   *
   * _Required_: No
   *
   * _Type_: [S3Settings](aws-properties-dms-endpoint-s3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Settings?: DMSEndpointS3Settings;
  /**
   * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`.
   *
   * For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceIdentifier?: Value<string>;
  /**
   * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about other available settings, see [ Using object mapping to migrate data to a Kinesis data stream](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [KinesisSettings](aws-properties-dms-endpoint-kinesissettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisSettings?: DMSEndpointKinesisSettings;
  /**
   * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is `none`.
   *
   * When `engine_name` is set to S3, the only allowed value is `none`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `none | require | verify-ca | verify-full`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslMode?: Value<string>;
  /**
   * Settings in JSON format for the Amazon Redshift endpoint.
   *
   * For more information about other available settings, see [ Extra connection attributes when using Amazon Redshift as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Redshift.html#CHAP_Target.Redshift.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftSettings](aws-properties-dms-endpoint-redshiftsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftSettings?: DMSEndpointRedshiftSettings;
  /**
   * The type of endpoint. Valid values are `source` and `target`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `source | target`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointType: Value<string>;
  /**
   * One or more tags to be assigned to the endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The password to be used to log in to the endpoint database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
  /**
   * Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see [ Using MongoDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [MongoDbSettings](aws-properties-dms-endpoint-mongodbsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MongoDbSettings?: DMSEndpointMongoDbSettings;
  /**
   * Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see [ Extra connection attributes when using Db2 LUW as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [IbmDb2Settings](aws-properties-dms-endpoint-ibmdb2settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IbmDb2Settings?: DMSEndpointIbmDb2Settings;
  /**
   * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.
   *
   * If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
   *
   * AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The name of the endpoint database. For a MySQL source or target endpoint, don't specify `DatabaseName`. To migrate to a specific database, use this setting and `targetDbType`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see [ Specifying endpoint settings for Amazon Neptune as a target](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [NeptuneSettings](aws-properties-dms-endpoint-neptunesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NeptuneSettings?: DMSEndpointNeptuneSettings;
  /**
   * Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see [ Extra connection attributes when using OpenSearch as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchSettings](aws-properties-dms-endpoint-elasticsearchsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticsearchSettings?: DMSEndpointElasticsearchSettings;
  /**
   * The type of engine for the endpoint, depending on the `EndpointType` value.
   *
   * _Valid values_: `mysql` | `oracle` | `postgres` | `mariadb` | `aurora` | `aurora-postgresql` | `opensearch` | `redshift` | `s3` | `db2` | `azuredb` | `sybase` | `dynamodb` | `mongodb` | `kinesis` | `kafka` | `elasticsearch` | `docdb` | `sqlserver` | `neptune`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineName: Value<string>;
  /**
   * Settings in JSON format for the source and target DocumentDB endpoint. For more information about other available settings, see [ Using extra connections attributes with Amazon DocumentDB as a source](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html#CHAP_Source.DocumentDB.ECAs) and [ Using Amazon DocumentDB as a target for AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DocumentDB.html) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [DocDbSettings](aws-properties-dms-endpoint-docdbsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocDbSettings?: DMSEndpointDocDbSettings;
  /**
   * Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see [ Using object mapping to migrate data to DynamoDB](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDbSettings](aws-properties-dms-endpoint-dynamodbsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDbSettings?: DMSEndpointDynamoDbSettings;
  /**
   * The user name to be used to log in to the endpoint database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see [ Extra connection attributes when using SQL Server as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib) and [ Extra connection attributes when using SQL Server as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [MicrosoftSqlServerSettings](aws-properties-dms-endpoint-microsoftsqlserversettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MicrosoftSqlServerSettings?: DMSEndpointMicrosoftSqlServerSettings;
  /**
   * Settings in JSON format for the source GCP MySQL endpoint. These settings are much the same as the settings for any MySQL-compatible endpoint. For more information, see [ Extra connection attributes when using MySQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [GcpMySQLSettings](aws-properties-dms-endpoint-gcpmysqlsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GcpMySQLSettings?: DMSEndpointGcpMySQLSettings;
  /**
   * The name of the server where the endpoint database resides.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerName?: Value<string>;
  /**
   * Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see [ Working with AWS DMS Endpoints](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtraConnectionAttributes?: Value<string>;
  /**
   * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointIdentifier?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
  /**
   * Settings in JSON format for the source and target PostgreSQL endpoint.
   *
   * For information about other available settings, see [ Extra connection attributes when using PostgreSQL as a source for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib) and [ Extra connection attributes when using PostgreSQL as a target for AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib) in the _AWS Database Migration Service User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PostgreSqlSettings](aws-properties-dms-endpoint-postgresqlsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostgreSqlSettings?: DMSEndpointPostgreSqlSettings;
}

/**
 * The `AWS::DMS::Endpoint` resource specifies an AWS DMS endpoint.
 *
 * Currently, AWS CloudFormation supports all AWS DMS endpoint types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-endpoint.html}
 */
export interface DMSEndpointResource {
  Type: 'AWS::DMS::Endpoint';
  Properties: DMSEndpointProperties;
}
