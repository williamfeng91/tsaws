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
 * Returns the details of the DB instance’s server certificate.
 *
 * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the _Amazon RDS User Guide_ and [ Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the _Amazon Aurora User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-certificatedetails.html}
 **/
export interface RDSDBInstanceCertificateDetails {
  /**
   * The expiration date of the DB instance’s server certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValidTill?: Value<string>;
  /**
   * The CA identifier of the CA certificate used for the DB instance's server certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CAIdentifier?: Value<string>;
}

/**
 * The `MasterUserSecret` return value specifies the secret managed by RDS in AWS Secrets Manager for the master user password.
 *
 * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide_ and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the _Amazon Aurora User Guide._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html}
 **/
export interface RDSDBInstanceMasterUserSecret {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn?: Value<string>;
  /**
   * The AWS KMS key identifier that is used to encrypt the secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
}

/**
 * This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:
 *
 * For the data structure that represents Amazon Aurora DB cluster endpoints, see `DBClusterEndpoint`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html}
 **/
export interface RDSDBInstanceEndpoint {
  /**
   * Specifies the DNS address of the DB instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
  /**
   * Specifies the port that the database engine is listening on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
  /**
   * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedZoneId?: Value<string>;
}

/**
 * Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html}
 **/
export interface RDSDBInstanceDBInstanceRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the _Amazon RDS API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeatureName: Value<string>;
}

/**
 * The `ProcessorFeature` property type specifies the processor features of a DB instance class status.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html}
 **/
export interface RDSDBInstanceProcessorFeature {
  /**
   * The value of a processor feature name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the processor feature. Valid names are `coreCount` and `threadsPerCore`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}
export interface RDSDBInstanceProperties {
  /**
   * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
   *
   * If you specify the `KmsKeyId` property, then you must enable encryption.
   *
   * If you specify the `SourceDBInstanceIdentifier` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
   *
   * If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
   *
   * If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB instance is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB instance to be encrypted, then don't set this property or set it to `false`.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The encryption for DB instances is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageEncrypted?: Value<boolean>;
  /**
   * The time zone of the DB instance. The time zone parameter is currently supported only by [Microsoft SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Timezone?: Value<string>;
  /**
   * The details of the DB instance's server certificate.
   *
   * _Required_: No
   *
   * _Type_: [CertificateDetails](aws-properties-rds-dbinstance-certificatedetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateDetails?: RDSDBInstanceCertificateDetails;
  /**
   * The port number on which the database accepts connections.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The port number is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Port?: Value<string>;
  /**
   * The identifier of the DB cluster that the instance will belong to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBClusterIdentifier?: Value<string>;
  /**
   * Specifies the storage throughput value for the DB instance. This setting applies only to the `gp3` storage type.
   *
   * This setting doesn't apply to RDS Custom or Amazon Aurora.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageThroughput?: Value<number>;
  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. The default is 0.
   *
   * If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than 0.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Valid Values: `0, 1, 5, 10, 15, 30, 60`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringInterval?: Value<number>;
  /**
   * The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.
   *
   * To list all of the available DB parameter group names, use the following command:
   *
   * `aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text`
   *
   * If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
   *
   * If you don't specify a value for `DBParameterGroupName` property, the default DB parameter group for the specified engine and engine version is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DBParameterGroupName?: Value<string>;
  /**
   * Specifies the connection endpoint.
   *
   * The endpoint might not be shown for instances whose status is `creating`.
   *
   * _Required_: No
   *
   * _Type_: [Endpoint](aws-properties-rds-dbinstance-endpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: RDSDBInstanceEndpoint;
  /**
   * Specifies whether the database instance is a Multi-AZ DB instance deployment. You can't set the `AvailabilityZone` parameter if the `MultiAZ` parameter is set to true.
   *
   * For more information, see [ Multi-AZ deployments for high availability](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) in the _Amazon RDS User Guide_.
   *
   * **Amazon Aurora**
   *
   * Not applicable. Amazon Aurora storage is replicated across all of the Availability Zones and doesn't require the `MultiAZ` option to be set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  MultiAZ?: Value<boolean>;
  /**
   * The name of the database engine that you want to use for this DB instance.
   *
   * When you are creating a DB instance, the `Engine` property is required.
   *
   * Valid Values:
   */
  Engine?: Value<string>;
  /**
   * An optional array of key-value pairs to apply to this DB instance.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The AWS KMS key identifier for encryption of Performance Insights data.
   *
   * The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
   *
   * For information about enabling Performance Insights, see [ EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  PerformanceInsightsKMSKeyId?: Value<string>;
  /**
   * If you want to create a read replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the _Amazon RDS User Guide_.
   *
   * For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the _Amazon RDS User Guide_.
   *
   * The `SourceDBInstanceIdentifier` property determines whether a DB instance is a read replica. If you remove the `SourceDBInstanceIdentifier` property from your template and then update your stack, AWS CloudFormation promotes the Read Replica to a standalone DB instance.
   */
  SourceDBInstanceIdentifier?: Value<string>;
  /**
   * The version number of the database engine to use.
   *
   * For a list of valid engine versions, use the `DescribeDBEngineVersions` action.
   *
   * The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
   *
   * **MariaDB**
   *
   * See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the _Amazon RDS User Guide._
   *
   * **Microsoft SQL Server**
   *
   * See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the _Amazon RDS User Guide._
   *
   * **MySQL**
   *
   * See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the _Amazon RDS User Guide._
   *
   * **Oracle**
   *
   * See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the _Amazon RDS User Guide._
   *
   * **PostgreSQL**
   *
   * See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the _Amazon RDS User Guide._
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * Specifies the storage type to be associated with the DB instance.
   *
   * Valid values: ` gp2 | gp3 | io1 | standard`
   *
   * The `standard` value is also known as magnetic.
   *
   * If you specify `io1` or `gp3`, you must also include a value for the `Iops` parameter.
   *
   * Default: `io1` if the `Iops` parameter is specified, otherwise `gp2`
   *
   * For more information, see [Amazon RDS DB Instance Storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html) in the _Amazon RDS User Guide_.
   *
   * **Amazon Aurora**
   *
   * Not applicable. Aurora data is stored in the cluster volume, which is a single, virtual volume that uses solid state drives (SSDs).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  StorageType?: Value<string>;
  /**
   * The ARN of the AWS KMS key that's used to encrypt the DB instance, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef`. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
   *
   * If you specify the `SourceDBInstanceIdentifier` property, the value is inherited from the source DB instance if the read replica is created in the same region.
   *
   * If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
   *
   * If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
   *
   * If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the _Amazon RDS User Guide_.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The KMS key identifier is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The compute and memory capacity of the DB instance, for example, `db.m4.large`. Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *
   * For the full list of DB instance classes, and availability for your engine, see [DB Instance Class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the _Amazon RDS User Guide._ For more information about DB instance class pricing and AWS Region support for DB instance classes, see [Amazon RDS Pricing](http://aws.amazon.com/rds/pricing/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DBInstanceClass?: Value<string>;
  /**
   * A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
   *
   * **Amazon Aurora**
   *
   * Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteAutomatedBackups?: Value<boolean>;
  /**
   * The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:
   */
  PerformanceInsightsRetentionPeriod?: Value<number>;
  /**
   * The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
   *
   * **Amazon Aurora**
   *
   * Each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
   *
   * Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.
   *
   * Example: `us-east-1d`
   *
   * Constraint: The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  AvailabilityZone?: Value<string>;
  /**
   * Indicates that the DB instance should be associated with the specified option group.
   *
   * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptionGroupName?: Value<string>;
  /**
   * A value that indicates whether to enable Performance Insights for the DB instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the _Amazon RDS User Guide_.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePerformanceInsights?: Value<boolean>;
  /**
   * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  AutoMinorVersionUpgrade?: Value<boolean>;
  /**
   * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC.
   *
   * If there's no DB subnet group, then the DB instance isn't a VPC DB instance.
   *
   * For more information about using Amazon RDS in a VPC, see [Using Amazon RDS with Amazon Virtual Private Cloud (VPC)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the _Amazon RDS User Guide_.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSubnetGroupName?: Value<string>;
  /**
   * A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see [ Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
   *
   * **Amazon Aurora**
   *
   * Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the _Amazon RDS User Guide_.
   *
   * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBInstanceIdentifier?: Value<string>;
  /**
   * The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.
   *
   * If any value is set in the `Iops` parameter, `AllocatedStorage` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the `Iops` value (in 1,000 IOPS increments), then you must also increase the `AllocatedStorage` value (in 100-GiB increments).
   *
   * **Amazon Aurora**
   *
   * Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
   *
   * **MySQL**
   *
   * Constraints to the amount of storage for each storage type are the following:
   */
  AllocatedStorage?: Value<string>;
  /**
   * The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
   *
   * **Amazon Aurora**
   *
   * Not applicable. The password for the master user is managed by the DB cluster.
   *
   * **MariaDB**
   *
   * Constraints: Must contain from 8 to 41 characters.
   *
   * **Microsoft SQL Server**
   *
   * Constraints: Must contain from 8 to 128 characters.
   *
   * **MySQL**
   *
   * Constraints: Must contain from 8 to 41 characters.
   *
   * **Oracle**
   *
   * Constraints: Must contain from 8 to 30 characters.
   *
   * **PostgreSQL**
   *
   * Constraints: Must contain from 8 to 128 characters.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
  /**
   * Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
   *
   * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide._
   *
   * _Required_: No
   *
   * _Type_: [MasterUserSecret](aws-properties-rds-dbinstance-masterusersecret.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserSecret?: RDSDBInstanceMasterUserSecret;
  /**
   * The name of the NCHAR character set for the Oracle DB instance.
   *
   * This parameter doesn't apply to RDS Custom.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NcharCharacterSetName?: Value<string>;
  SourceDBClusterIdentifier?: Value<string>;
  /**
   * A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
   *
   * If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
   *
   * If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:
   */
  DBSecurityGroups?: List<Value<string>>;
  /**
   * The master user name for the DB instance.
   *
   * If you specify the `SourceDBInstanceIdentifier` or `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The name for the master user is managed by the DB cluster.
   *
   * **MariaDB**
   *
   * Constraints:
   */
  MasterUsername?: Value<string>;
  /**
   * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * For more information about this setting, including limitations that apply to it, see [ Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the _Amazon RDS User Guide_.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * **Amazon Aurora**
   *
   * Not applicable. Storage is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxAllocatedStorage?: Value<number>;
  /**
   * A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [ Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance) in the _Amazon Aurora User Guide_.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * Default: 1
   *
   * Valid Values: 0 - 15
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PromotionTier?: Value<number>;
  /**
   * Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
   *
   * The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the _Amazon RDS API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PubliclyAccessible?: Value<boolean>;
  /**
   * The Active Directory directory ID to create the DB instance in. Currently, only Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
   *
   * For more information, see [ Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the _Amazon RDS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domain?: Value<string>;
  /**
   * For supported engines, indicates that the DB instance should be associated with the specified character set.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CharacterSetName?: Value<string>;
  /**
   * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the _Amazon RDS User Guide_.
   *
   * If `MonitoringInterval` is set to a value other than 0, then you must supply a `MonitoringRoleArn` value.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringRoleArn?: Value<string>;
  /**
   * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The associated roles are managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: List of [DBInstanceRole](aws-properties-rds-dbinstance-dbinstancerole.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociatedRoles?: List<RDSDBInstanceDBInstanceRole>;
  /**
   * The identifier for the RDS for MySQL Multi-AZ DB cluster snapshot to restore from.
   *
   * For more information on Multi-AZ DB clusters, see [ Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the _Amazon RDS User Guide_.
   *
   * Constraints:
   */
  DBClusterSnapshotIdentifier?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, `arn:aws:rds:useast-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE`.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SourceDBInstanceAutomatedBackupsArn?: Value<string>;
  /**
   * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * **Amazon Aurora**
   *
   * Not applicable.
   *
   * _Required_: No
   *
   * _Type_: List of [ProcessorFeature](aws-properties-rds-dbinstance-processorfeature.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessorFeatures?: List<RDSDBInstanceProcessorFeature>;
  /**
   * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter. For more information, see [ Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the _Amazon RDS User Guide._
   *
   * Constraints:
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * The date and time to restore from.
   *
   * Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
   *
   * Constraints:
   */
  RestoreTime?: Value<string>;
  /**
   * A value that indicates whether the DB instance is restarted when you rotate your SSL/TLS certificate.
   *
   * By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
   *
   * Set this parameter only if you are _not_ using SSL/TLS to connect to the DB instance.
   *
   * If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
   */
  CertificateRotationRestart?: Value<boolean>;
  /**
   * The network type of the DB instance.
   *
   * Valid values:
   */
  NetworkType?: Value<string>;
  /**
   * A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *
   * **Amazon Aurora**
   *
   * Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToSnapshot?: Value<boolean>;
  /**
   * Specify the name of the IAM role to be used when making API calls to the Directory Service.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The domain is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainIAMRoleName?: Value<string>;
  /**
   * The open mode of an Oracle read replica. For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the _Amazon RDS User Guide_.
   *
   * This setting is only supported in RDS for Oracle.
   *
   * Default: `open-read-only`
   *
   * Valid Values: `open-read-only` or `mounted`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicaMode?: Value<string>;
  /**
   * License model information for this DB instance.
   *
   * Valid values:
   */
  LicenseModel?: Value<string>;
  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [ Adjusting the Preferred DB Instance Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the _Amazon RDS User Guide._
   *
   * This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
   *
   * Constraints: Minimum 30-minute window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000.
   *
   * If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the _Amazon RDS User Guide_.
   *
   * If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
  /**
   * The ID of the region that contains the source DB instance for the read replica.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceRegion?: Value<string>;
  /**
   * A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.
   *
   * Constraints: Can't be specified if the `RestoreTime` parameter is provided.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  UseLatestRestorableTime?: Value<boolean>;
  /**
   * The identifier of the CA certificate for this DB instance.
   *
   * Specifying or updating this property triggers a reboot.
   *
   * For more information about CA certificate identifiers for RDS DB engines, see [ Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the _Amazon RDS User Guide_.
   *
   * For more information about CA certificate identifiers for Aurora DB engines, see [ Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the _Amazon Aurora User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CACertificateIdentifier?: Value<string>;
  /**
   * A value that indicates whether to manage the master user password with AWS Secrets Manager.
   *
   * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide._
   *
   * Constraints:
   */
  ManageMasterUserPassword?: Value<boolean>;
  /**
   * The resource ID of the source DB instance from which to restore.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  SourceDbiResourceId?: Value<string>;
  /**
   * A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
   *
   * If you plan to update the resource, don't specify VPC security groups in a shared VPC.
   *
   * If you set `VPCSecurityGroups`, you must not set [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
   *
   * You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:
   */
  VPCSecurityGroups?: List<Value<string>>;
  /**
   * A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *
   * Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowMajorVersionUpgrade?: Value<boolean>;
  /**
   * The meaning of this parameter differs according to the database engine you use.
   *
   * If you specify the `[ DBSnapshotIdentifier](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsnapshotidentifier)` property, this property only applies to RDS for Oracle.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The database name is managed by the DB cluster.
   *
   * **MySQL**
   *
   * The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
   *
   * Constraints:
   */
  DBName?: Value<string>;
  /**
   * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *
   * This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [ IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the _Amazon RDS User Guide._
   *
   * **Amazon Aurora**
   *
   * Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableIAMDatabaseAuthentication?: Value<boolean>;
  /**
   * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
   *
   * **Amazon Aurora**
   *
   * Not applicable. The retention period for automated backups is managed by the DB cluster.
   *
   * Default: 1
   *
   * Constraints:
   */
  BackupRetentionPeriod?: Value<number>;
  /**
   * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. The instance profile must meet the following requirements:
   */
  CustomIAMInstanceProfile?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
   *
   * By specifying this property, you can create a DB instance from the specified DB snapshot. If the `DBSnapshotIdentifier` property is an empty string or the `AWS::RDS::DBInstance` declaration has no `DBSnapshotIdentifier` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
   *
   * Some DB instance properties aren't valid when you restore from a snapshot, such as the `MasterUsername` and `MasterUserPassword` properties. For information about the properties that you can specify, see the `RestoreDBInstanceFromDBSnapshot` action in the _Amazon RDS API Reference_.
   *
   * After you restore a DB instance with a `DBSnapshotIdentifier` property, you must specify the same `DBSnapshotIdentifier` property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the `DBSnapshotIdentifier` property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified `DBSnapshotIdentifier` property, and the original DB instance is deleted.
   *
   * If you specify the `DBSnapshotIdentifier` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:
   */
  DBSnapshotIdentifier?: Value<string>;
  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs ](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the _Amazon Relational Database Service User Guide_.
   *
   * **Amazon Aurora**
   *
   * Not applicable. CloudWatch Logs exports are managed by the DB cluster.
   *
   * **MariaDB**
   *
   * Valid values: `audit`, `error`, `general`, `slowquery`
   *
   * **Microsoft SQL Server**
   *
   * Valid values: `agent`, `error`
   *
   * **MySQL**
   *
   * Valid values: `audit`, `error`, `general`, `slowquery`
   *
   * **Oracle**
   *
   * Valid values: `alert`, `audit`, `listener`, `trace`
   *
   * **PostgreSQL**
   *
   * Valid values: `postgresql`, `upgrade`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableCloudwatchLogsExports?: List<Value<string>>;
  /**
   * A value that indicates whether the DB instance class of the DB instance uses its default processor features.
   *
   * This setting doesn't apply to RDS Custom.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseDefaultProcessorFeatures?: Value<boolean>;
}

/**
 * The `AWS::RDS::DBInstance` resource creates an Amazon DB instance. The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.
 *
 * For more information about creating an RDS DB instance, see [Creating an Amazon RDS DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html) in the _Amazon RDS User Guide_.
 *
 * For more information about creating a DB instance in an Aurora DB cluster, see [ Creating an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the _Amazon Aurora User Guide_.
 *
 * If you import an existing DB instance, and the template configuration doesn't match the actual configuration of the DB instance, AWS CloudFormation applies the changes in the template during the import operation.
 *
 * **Important**
 *
 * If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced. For more information, see [Prevent Updates to Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).
 *
 * **Updating DB instances**
 *
 * When properties labeled "_Update requires:_ [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB instance, then changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.
 *
 * **Important**
 *
 * We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:
 *
 * Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.
 *
 * Create a snapshot of the DB instance. For more information, see [Creating a DB Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html).
 *
 * If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the `DBSnapshotIdentifier` property with the ID of the DB snapshot that you want to use.
 *
 * After you restore a DB instance with a `DBSnapshotIdentifier` property, you must specify the same `DBSnapshotIdentifier` property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the `DBSnapshotIdentifier` property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified `DBSnapshotIdentifier` property, and the original DB instance is deleted.
 *
 * Update the stack.
 *
 * For more information about updating other properties of this resource, see ` [ModifyDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html)`. For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).
 *
 * **Deleting DB instances**
 *
 * For DB instances that are part of an Aurora DB cluster, you can set a deletion policy for your DB instance to control how AWS CloudFormation handles the DB instance when the stack is deleted. For Amazon RDS DB instances, you can choose to _retain_ the DB instance, to _delete_ the DB instance, or to _create a snapshot_ of the DB instance. The default AWS CloudFormation behavior depends on the `DBClusterIdentifier` property:
 *
 * For more information, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html}
 */
export interface RDSDBInstanceResource {
  Type: 'AWS::RDS::DBInstance';
  Properties: RDSDBInstanceProperties;
}
