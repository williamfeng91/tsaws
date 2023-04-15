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
 * Specifies the KMS key that is used to encrypt the user's data stores in Athena.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-customercontentencryptionconfiguration.html}
 **/
export interface AthenaWorkGroupCustomerContentEncryptionConfiguration {
  /**
   * The KMS key that is used to encrypt the user's data stores in Athena.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:kms:([a-z0-9-]+):d{12}:key/?[a-zA-Z_0-9+=,.@-_/]+$|^arn:aws[a-z-]*:kms:([a-z0-9-]+):d{12}:alias/?[a-zA-Z_0-9+=,.@-_/]+$|^alias/[a-zA-Z0-9/_-]+$|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKey: Value<string>;
}

/**
 * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch Metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified. The [EnforceWorkGroupConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration) option determines whether workgroup settings override client-side query settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html}
 **/
export interface AthenaWorkGroupWorkGroupConfiguration {
  /**
   * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnforceWorkGroupConfiguration?: Value<boolean>;
  /**
   * The engine version that all queries running on the workgroup use. Queries on the `AmazonAthenaPreviewFunctionality` workgroup run on the preview engine regardless of this setting.
   *
   * _Required_: No
   *
   * _Type_: [EngineVersion](aws-properties-athena-workgroup-engineversion.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: AthenaWorkGroupEngineVersion;
  /**
   * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublishCloudWatchMetricsEnabled?: Value<boolean>;
  /**
   * Specifies the location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. For more information, see [Working with Query Results, Output Files, and Query History](https://docs.aws.amazon.com/athena/latest/ug/querying.html).
   *
   * _Required_: No
   *
   * _Type_: [ResultConfiguration](aws-properties-athena-workgroup-resultconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResultConfiguration?: AthenaWorkGroupResultConfiguration;
  /**
   * Specifies a user defined JSON string that is passed to the notebook engine.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalConfiguration?: Value<string>;
  /**
   * Specifies the KMS key that is used to encrypt the user's data stores in Athena.
   *
   * _Required_: No
   *
   * _Type_: [CustomerContentEncryptionConfiguration](aws-properties-athena-workgroup-customercontentencryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerContentEncryptionConfiguration?: AthenaWorkGroupCustomerContentEncryptionConfiguration;
  /**
   * The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. No default is defined.
   *
   * This property currently supports integer types. Support for long values is planned.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BytesScannedCutoffPerQuery?: Value<number>;
  /**
   * If set to `true`, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to `false`, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is `false`. For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the _Amazon Simple Storage Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequesterPaysEnabled?: Value<boolean>;
  /**
   * Role used in a session for accessing the user's resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRole?: Value<string>;
}

/**
 * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. When Athena stores query results in Amazon S3, the canned ACL is set with the `x-amz-acl` request header. For more information about S3 Object Ownership, see [Object Ownership settings](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html#object-ownership-overview) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-aclconfiguration.html}
 **/
export interface AthenaWorkGroupAclConfiguration {
  /**
   * The Amazon S3 canned ACL that Athena should specify when storing query results. Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL`. If a query runs in a workgroup and the workgroup overrides client-side settings, then the Amazon S3 canned ACL specified in the workgroup's settings is used for all queries that run in the workgroup. For more information about Amazon S3 canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl) in the _Amazon S3 User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BUCKET_OWNER_FULL_CONTROL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3AclOption: Value<string>;
}

/**
 * The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query and calculation results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-resultconfiguration.html}
 **/
export interface AthenaWorkGroupResultConfiguration {
  /**
   * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS`) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See [EnforceWorkGroupConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration) and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfiguration](aws-properties-athena-workgroup-encryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfiguration?: AthenaWorkGroupEncryptionConfiguration;
  /**
   * The location in Amazon S3 where your query results are stored, such as `s3://path/to/query/bucket/`. To run a query, you must specify the query results location using either a client-side setting for individual queries or a location specified by the workgroup. If workgroup settings override client-side settings, then the query uses the location specified for the workgroup. If no query location is set, Athena issues an error. For more information, see [Working with Query Results, Output Files, and Query History](https://docs.aws.amazon.com/athena/latest/ug/querying.html) and [EnforceWorkGroupConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputLocation?: Value<string>;
  /**
   * Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. Currently the only supported canned ACL is `BUCKET_OWNER_FULL_CONTROL`. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the ACL configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. For more information, see WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * _Required_: No
   *
   * _Type_: [AclConfiguration](aws-properties-athena-workgroup-aclconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AclConfiguration?: AthenaWorkGroupAclConfiguration;
  /**
   * The AWS account ID that you expect to be the owner of the Amazon S3 bucket specified by ResultConfiguration$OutputLocation. If set, Athena uses the value for `ExpectedBucketOwner` when it makes Amazon S3 calls to your specified output location. If the `ExpectedBucketOwner` AWS account ID does not match the actual owner of the Amazon S3 bucket, the call fails with a permissions error.
   *
   * This is a client-side setting. If workgroup settings override client-side settings, then the query uses the `ExpectedBucketOwner` setting that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration and [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^[0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExpectedBucketOwner?: Value<string>;
}

/**
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, `SSE_KMS` or `CSE_KMS`) and key information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-encryptionconfiguration.html}
 **/
export interface AthenaWorkGroupEncryptionConfiguration {
  /**
   * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (`SSE_S3`), server-side encryption with KMS-managed keys (`SSE_KMS`), or client-side encryption with KMS-managed keys (`CSE_KMS`) is used.
   *
   * If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CSE_KMS | SSE_KMS | SSE_S3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionOption: Value<string>;
  /**
   * For `SSE_KMS` and `CSE_KMS`, this is the KMS key ARN or ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKey?: Value<string>;
}

/**
 * The Athena engine version for running queries, or the PySpark engine version for running sessions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-engineversion.html}
 **/
export interface AthenaWorkGroupEngineVersion {
  /**
   * The engine version requested by the user. Possible values are determined by the output of `ListEngineVersions`, including AUTO. The default is AUTO.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectedEngineVersion?: Value<string>;
  /**
   * Read only. The engine version on which the query runs. If the user requests a valid engine version other than Auto, the effective engine version is the same as the engine version that the user requested. If the user requests Auto, the effective engine version is chosen by Athena. When a request to update the engine version is made by a `CreateWorkGroup` or `UpdateWorkGroup` operation, the `EffectiveEngineVersion` field is ignored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EffectiveEngineVersion?: Value<string>;
}
export interface AthenaWorkGroupProperties {
  /**
   * The option to delete a workgroup and its contents even if the workgroup contains any named queries. The default is false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecursiveDeleteOption?: Value<boolean>;
  /**
   * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption option, if any, used for query results, whether Amazon CloudWatch Metrics are enabled for the workgroup, and the limit for the amount of bytes scanned (cutoff) per query, if it is specified. The [EnforceWorkGroupConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-athena-workgroup-workgroupconfiguration.html#cfn-athena-workgroup-workgroupconfiguration-enforceworkgroupconfiguration) option determines whether workgroup settings override client-side query settings.
   *
   * _Required_: No
   *
   * _Type_: [WorkGroupConfiguration](aws-properties-athena-workgroup-workgroupconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkGroupConfiguration?: AthenaWorkGroupWorkGroupConfiguration;
  /**
   * The workgroup description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The state of the workgroup: ENABLED or DISABLED.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The tags (key-value pairs) to associate with this resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The workgroup name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-zA-Z0-9._-]{1,128}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The AWS::Athena::WorkGroup resource specifies an Amazon Athena workgroup, which contains a name, description, creation time, state, and other configuration, listed under [WorkGroupConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html#cfn-athena-workgroup-workgroupconfiguration). Each workgroup enables you to isolate queries for you or your group from other queries in the same account. For more information, see [CreateWorkGroup](https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html) in the _Amazon Athena API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-workgroup.html}
 */
export interface AthenaWorkGroupResource {
  Type: 'AWS::Athena::WorkGroup';
  Properties: AthenaWorkGroupProperties;
}
