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
 * Specifies whether node-to-node encryption is enabled.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-nodetonodeencryptionoptions.html}
 **/
export interface ElasticsearchDomainNodeToNodeEncryptionOptions {
  /**
   * Specifies whether node-to-node encryption is enabled, as a Boolean.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Specifies options for cold storage. For more information, see [Cold storage for Amazon Elasticsearch Service](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/cold-storage.html).
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-coldstorageoptions.html}
 **/
export interface ElasticsearchDomainColdStorageOptions {
  /**
   * Whether to enable or disable cold storage on the domain. You must enable UltraWarm storage in order to enable cold storage.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Specifies options for fine-grained access control.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-advancedsecurityoptionsinput.html}
 **/
export interface ElasticsearchDomainAdvancedSecurityOptionsInput {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnonymousAuthEnabled?: Value<boolean>;
  /**
   * True to enable fine-grained access control. You must also enable encryption of data at rest and node-to-node encryption.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled?: Value<boolean>;
  /**
   * True to enable the internal user database.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InternalUserDatabaseEnabled?: Value<boolean>;
  /**
   * Specifies information about the master user.
   *
   * _Required_: No
   *
   * _Type_: [MasterUserOptions](aws-properties-elasticsearch-domain-masteruseroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserOptions?: ElasticsearchDomainMasterUserOptions;
}

/**
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 *
 * **DEPRECATED**. For domains running Elasticsearch 5.3 and later, OpenSearch Service takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions of Elasticsearch, OpenSearch Service takes daily automated snapshots.
 *
 * The automated snapshot configuration for the OpenSearch Service domain indices.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-snapshotoptions.html}
 **/
export interface ElasticsearchDomainSnapshotOptions {
  /**
   * The hour in UTC during which the service takes an automated daily snapshot of the indices in the OpenSearch Service domain. For example, if you specify 0, OpenSearch Service takes an automated snapshot everyday between midnight and 1 am. You can specify a value between 0 and 23.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomatedSnapshotStartHour?: Value<number>;
}

/**
 * Specifies information about the master user. Required if you enabled the internal user database.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-masteruseroptions.html}
 **/
export interface ElasticsearchDomainMasterUserOptions {
  /**
   * ARN for the master user. Only specify if `InternalUserDatabaseEnabled` is false in `AdvancedSecurityOptions`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserARN?: Value<string>;
  /**
   * Username for the master user. Only specify if `InternalUserDatabaseEnabled` is true in `AdvancedSecurityOptions`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserName?: Value<string>;
  /**
   * Password for the master user. Only specify if `InternalUserDatabaseEnabled` is true in `AdvancedSecurityOptions`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
}

/**
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 *
 * Specifies whether the OpenSearch Service domain publishes the Elasticsearch application, search slow logs, or index slow logs to Amazon CloudWatch. Each option must be an object of name `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `INDEX_SLOW_LOGS`, or `AUDIT_LOGS` depending on the type of logs you want to publish.
 *
 * If you enable a slow log, you still have to enable the _collection_ of slow logs using the Configuration API. To learn more, see [Enabling log publishing (AWS CLI)](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html#createdomain-configure-slow-logs-cli).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-logpublishingoption.html}
 **/
export interface ElasticsearchDomainLogPublishingOption {
  /**
   * Specifies the CloudWatch log group to publish to. Required if you enable log publishing for the domain.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsLogGroupArn?: Value<string>;
  /**
   * If `true`, enables the publishing of logs to CloudWatch.
   *
   * Default: `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Whether the domain should encrypt data at rest, and if so, the AWS Key Management Service key to use.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-encryptionatrestoptions.html}
 **/
export interface ElasticsearchDomainEncryptionAtRestOptions {
  /**
   * Specify `true` to enable encryption at rest.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The KMS key ID. Takes the form `1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a`. Required if you enable encryption at rest.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
}

/**
 * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-domainendpointoptions.html}
 **/
export interface ElasticsearchDomainDomainEndpointOptions {
  /**
   * The fully qualified URL for your custom endpoint. Required if you enabled a custom endpoint for the domain.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEndpoint?: Value<string>;
  /**
   * The AWS Certificate Manager ARN for your domain's SSL/TLS certificate. Required if you enabled a custom endpoint for the domain.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEndpointCertificateArn?: Value<string>;
  /**
   * True to enable a custom endpoint for the domain. If enabled, you must also provide values for `CustomEndpoint` and `CustomEndpointCertificateArn`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEndpointEnabled?: Value<boolean>;
  /**
   * True to require that all traffic to the domain arrive over HTTPS.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnforceHTTPS?: Value<boolean>;
  /**
   * The minimum TLS version required for traffic to the domain. Valid values are TLS 1.0 (default) or 1.2:
   */
  TLSSecurityPolicy?: Value<string>;
}

/**
 * The cluster configuration for the OpenSearch Service domain. You can specify options such as the instance type and the number of instances. For more information, see [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html) in the _Amazon OpenSearch Service Developer Guide_.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-elasticsearchclusterconfig.html}
 **/
export interface ElasticsearchDomainElasticsearchClusterConfig {
  /**
   * Specifies cold storage options for the domain.
   *
   * _Required_: No
   *
   * _Type_: [ColdStorageOptions](aws-properties-elasticsearch-domain-coldstorageoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColdStorageOptions?: ElasticsearchDomainColdStorageOptions;
  /**
   * The number of instances to use for the master node. If you specify this property, you must specify true for the DedicatedMasterEnabled property.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedicatedMasterCount?: Value<number>;
  /**
   * Indicates whether to use a dedicated master node for the OpenSearch Service domain. A dedicated master node is a cluster node that performs cluster management tasks, but doesn't hold data or respond to data upload requests. Dedicated master nodes offload cluster management tasks to increase the stability of your search clusters. See [Dedicated master nodes in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-dedicatedmasternodes.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedicatedMasterEnabled?: Value<boolean>;
  /**
   * The hardware configuration of the computer that hosts the dedicated master node, such as `m3.medium.elasticsearch`. If you specify this property, you must specify true for the `DedicatedMasterEnabled` property. For valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedicatedMasterType?: Value<string>;
  /**
   * The number of data nodes (instances) to use in the OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceCount?: Value<number>;
  /**
   * The instance type for your data nodes, such as `m3.medium.elasticsearch`. For valid values, see [Supported instance types in Amazon OpenSearch Service ](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The number of warm nodes in the cluster. Required if you enable warm storage.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmCount?: Value<number>;
  /**
   * Whether to enable warm storage for the cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmEnabled?: Value<boolean>;
  /**
   * The instance type for the cluster's warm nodes. Required if you enable warm storage.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmType?: Value<string>;
  /**
   * Specifies zone awareness configuration options. Only use if `ZoneAwarenessEnabled` is `true`.
   *
   * _Required_: Conditional
   *
   * _Type_: [ZoneAwarenessConfig](aws-properties-elasticsearch-domain-zoneawarenessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZoneAwarenessConfig?: ElasticsearchDomainZoneAwarenessConfig;
  /**
   * Indicates whether to enable zone awareness for the OpenSearch Service domain. When you enable zone awareness, OpenSearch Service allocates the nodes and replica index shards that belong to a cluster across two Availability Zones (AZs) in the same region to prevent data loss and minimize downtime in the event of node or data center failure. Don't enable zone awareness if your cluster has no replica index shards or is a single-node cluster. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZoneAwarenessEnabled?: Value<boolean>;
}

/**
 * Specifies zone awareness configuration options. Only use if `ZoneAwarenessEnabled` is `true`.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-zoneawarenessconfig.html}
 **/
export interface ElasticsearchDomainZoneAwarenessConfig {
  /**
   * If you enabled multiple Availability Zones (AZs), the number of AZs that you want the domain to use.
   *
   * Valid values are `2` and `3`. Default is 2.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZoneCount?: Value<number>;
}

/**
 * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-cognitooptions.html}
 **/
export interface ElasticsearchDomainCognitoOptions {
  /**
   * Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards. See [Amazon Cognito authentication for OpenSearch Dashboards](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication. Required if you enable Cognito authentication.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityPoolId?: Value<string>;
  /**
   * The `AmazonESCognitoAccess` role that allows OpenSearch Service to configure your user pool and identity pool. Required if you enable Cognito authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication. Required if you enable Cognito authentication.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolId?: Value<string>;
}

/**
 * The virtual private cloud (VPC) configuration for the OpenSearch Service domain. For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the _Amazon OpenSearch Service Developer Guide_.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-vpcoptions.html}
 **/
export interface ElasticsearchDomainVPCOptions {
  /**
   * The list of security group IDs that are associated with the VPC endpoints for the domain. If you don't provide a security group ID, OpenSearch Service uses the default security group for the VPC. To learn more, see [Security groups for your VPC ](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the _Amazon VPC User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * Provide one subnet ID for each Availability Zone that your domain uses. For example, you must specify three subnet IDs for a three Availability Zone domain. To learn more, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the _Amazon VPC User Guide_.
   *
   * Required if you're creating your domain inside a VPC.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
}

/**
 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the _Amazon OpenSearch Service Developer Guide_.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and Elasticsearch. For more information about the service rename, see [New resource types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/rename.html#rename-resource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticsearch-domain-ebsoptions.html}
 **/
export interface ElasticsearchDomainEBSOptions {
  /**
   * Specifies whether Amazon EBS volumes are attached to data nodes in the OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EBSEnabled?: Value<boolean>;
  /**
   * The number of I/O operations per second (IOPS) that the volume supports. This property applies only to provisioned IOPS EBS volume types.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
  /**
   * The size (in GiB) of the EBS volume for each data node. The minimum and maximum size of an EBS volume depends on the EBS volume type and the instance type to which it is attached. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeSize?: Value<number>;
  /**
   * The EBS volume type to use with the OpenSearch Service domain, such as standard, gp2, or io1. For more information about each type, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeType?: Value<string>;
}
export interface ElasticsearchDomainProperties {
  /**
   * An AWS Identity and Access Management (IAM) policy document that specifies who can access the OpenSearch Service domain and their permissions. For more information, see [Configuring access policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-creating) in the *Amazon OpenSearch Service Developer Guid*e.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPolicies?: { [key: string]: any };
  /**
   * Additional options to specify for the OpenSearch Service domain. For more information, see [Advanced cluster parameters](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedOptions?: { [key: string]: Value<string> };
  /**
   * Specifies options for fine-grained access control.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedSecurityOptionsInput](aws-properties-elasticsearch-domain-advancedsecurityoptionsinput.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  AdvancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptionsInput;
  /**
   * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
   *
   * _Required_: No
   *
   * _Type_: [CognitoOptions](aws-properties-elasticsearch-domain-cognitooptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoOptions?: ElasticsearchDomainCognitoOptions;
  /**
   * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
   *
   * _Required_: No
   *
   * _Type_: [DomainEndpointOptions](aws-properties-elasticsearch-domain-domainendpointoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions;
  /**
   * A name for the OpenSearch Service domain. For valid values, see the [DomainName](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-datatypes-domainname) data type in the _Amazon OpenSearch Service Developer Guide_. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName?: Value<string>;
  /**
   * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [EBSOptions](aws-properties-elasticsearch-domain-ebsoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EBSOptions?: ElasticsearchDomainEBSOptions;
  /**
   * ElasticsearchClusterConfig is a property of the AWS::Elasticsearch::Domain resource that configures the cluster of an Amazon OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchClusterConfig](aws-properties-elasticsearch-domain-elasticsearchclusterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticsearchClusterConfig?: ElasticsearchDomainElasticsearchClusterConfig;
  /**
   * The version of Elasticsearch to use, such as 2.3. If not specified, 1.5 is used as the default. For information about the versions that OpenSearch Service supports, see [Supported versions of OpenSearch and Elasticsearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html#choosing-version) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * If you set the [EnableVersionUpgrade](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeopensearchdomain) update policy to `true`, you can update `ElasticsearchVersion` without interruption. When `EnableVersionUpgrade` is set to `false`, or is not specified, updating `ElasticsearchVersion` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ElasticsearchVersion?: Value<string>;
  /**
   * Whether the domain should encrypt data at rest, and if so, the AWS Key Management Service key to use. See [Encryption of data at rest for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html).
   *
   * _Required_: No
   *
   * _Type_: [EncryptionAtRestOptions](aws-properties-elasticsearch-domain-encryptionatrestoptions.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  EncryptionAtRestOptions?: ElasticsearchDomainEncryptionAtRestOptions;
  /**
   * An object with one or more of the following keys: `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `INDEX_SLOW_LOGS`, `AUDIT_LOGS`, depending on the types of logs you want to publish. Each key needs a valid `LogPublishingOption` value.
   *
   * _Required_: No
   *
   * _Type_: Map of [LogPublishingOption](aws-properties-elasticsearch-domain-logpublishingoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPublishingOptions?: { [key: string]: ElasticsearchDomainLogPublishingOption };
  /**
   * Specifies whether node-to-node encryption is enabled. See [Node-to-node encryption for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html).
   *
   * _Required_: No
   *
   * _Type_: [NodeToNodeEncryptionOptions](aws-properties-elasticsearch-domain-nodetonodeencryptionoptions.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NodeToNodeEncryptionOptions?: ElasticsearchDomainNodeToNodeEncryptionOptions;
  /**
   * **DEPRECATED**. The automated snapshot configuration for the OpenSearch Service domain indices.
   *
   * _Required_: No
   *
   * _Type_: [SnapshotOptions](aws-properties-elasticsearch-domain-snapshotoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotOptions?: ElasticsearchDomainSnapshotOptions;
  /**
   * An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The virtual private cloud (VPC) configuration for the OpenSearch Service domain. For more information, see [Launching your Amazon OpenSearch Service domains within a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [VPCOptions](aws-properties-elasticsearch-domain-vpcoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VPCOptions?: ElasticsearchDomainVPCOptions;
}

/**
 * The AWS::Elasticsearch::Domain resource creates an Amazon OpenSearch Service domain.
 *
 * **Important**
 *
 * The `AWS::Elasticsearch::Domain` resource is being replaced by the [AWS::OpenSearchService::Domain](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html) resource. While the legacy Elasticsearch resource and options are still supported, we recommend modifying your existing Cloudformation templates to use the new OpenSearch Service resource, which supports both OpenSearch and legacy Elasticsearch. For instructions to upgrade domains defined within CloudFormation from Elasticsearch to OpenSearch, see [Remarks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain--remarks).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticsearch-domain.html}
 */
export interface ElasticsearchDomainResource {
  Type: 'AWS::Elasticsearch::Domain';
  Properties: ElasticsearchDomainProperties;
}
