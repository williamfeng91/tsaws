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
 * Specifies zone awareness configuration options. Only use if `ZoneAwarenessEnabled` is `true`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-zoneawarenessconfig.html}
 **/
export interface OpenSearchServiceDomainZoneAwarenessConfig {
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
 * **DEPRECATED**. This setting is only relevant to domains running legacy Elasticsearch OSS versions earlier than 5.3. It does not apply to OpenSearch domains.
 *
 * The automated snapshot configuration for the OpenSearch Service domain indexes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-snapshotoptions.html}
 **/
export interface OpenSearchServiceDomainSnapshotOptions {
  /**
   * The hour in UTC during which the service takes an automated daily snapshot of the indexes in the OpenSearch Service domain. For example, if you specify 0, OpenSearch Service takes an automated snapshot everyday between midnight and 1 am. You can specify a value between 0 and 23.
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
 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html}
 **/
export interface OpenSearchServiceDomainEBSOptions {
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
   * The EBS volume type to use with the OpenSearch Service domain. If you choose `gp3`, you must also specify values for `Iops` and `Throughput`. For more information about each type, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the _Amazon EC2 User Guide for Linux Instances_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `gp2 | gp3 | io1 | standard`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeType?: Value<string>;
  /**
   * The throughput (in MiB/s) of the EBS volumes attached to data nodes. Applies only to the `gp3` volume type.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Throughput?: Value<number>;
  /**
   * The number of I/O operations per second (IOPS) that the volume supports. This property applies only to the `gp3` and provisioned IOPS EBS volume types.
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
}

/**
 * The SAML Identity Provider's information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html}
 **/
export interface OpenSearchServiceDomainIdp {
  /**
   * The unique entity ID of the application in the SAML identity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityId: Value<string>;
  /**
   * The metadata of the SAML application, in XML format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1048576`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetadataContent: Value<string>;
}

/**
 * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html}
 **/
export interface OpenSearchServiceDomainDomainEndpointOptions {
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
   * True to require that all traffic to the domain arrive over HTTPS. Required if you enable fine-grained access control in [AdvancedSecurityOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * _Required_: Conditional
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  EnforceHTTPS?: Value<boolean>;
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
   * The fully qualified URL for your custom endpoint. Required if you enabled a custom endpoint for the domain.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9]).)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEndpoint?: Value<string>;
  /**
   * The minimum TLS version required for traffic to the domain. Valid values are TLS 1.0 (default) or 1.2:
   */
  TLSSecurityPolicy?: Value<string>;
}

/**
 * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html}
 **/
export interface OpenSearchServiceDomainCognitoOptions {
  /**
   * The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
   *
   * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `55`
   *
   * _Pattern_: `[w-]+_[0-9a-zA-Z]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolId?: Value<string>;
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
   * The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
   *
   * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `55`
   *
   * _Pattern_: `[w-]+:[0-9a-f-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityPoolId?: Value<string>;
  /**
   * The `AmazonOpenSearchServiceCognitoAccess` role that allows OpenSearch Service to configure your user pool and identity pool.
   *
   * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]+:role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The virtual private cloud (VPC) configuration for the OpenSearch Service domain. For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html}
 **/
export interface OpenSearchServiceDomainVPCOptions {
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
   * Provide one subnet ID for each Availability Zone that your domain uses. For example, you must specify three subnet IDs for a three-AZ domain. To learn more, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the _Amazon VPC User Guide_.
   *
   * If you specify more than one subnet, you must also configure `ZoneAwarenessEnabled` and `ZoneAwarenessConfig` within [ClusterConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html), otherwise you'll see the error "You must specify exactly one subnet" during template creation.
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
 * Specifies options for fine-grained access control.
 *
 * If you specify advanced security options, you must also enable node-to-node encryption ([NodeToNodeEncryptionOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html)) and encryption at rest ([EncryptionAtRestOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html)). You must also enable `EnforceHTTPS` within [DomainEndpointOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html), which requires HTTPS for all traffic to the domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html}
 **/
export interface OpenSearchServiceDomainAdvancedSecurityOptionsInput {
  /**
   * True to enable a 30-day migration period during which administrators can create role mappings. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnonymousAuthEnabled?: Value<boolean>;
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
   * Container for information about the SAML configuration for OpenSearch Dashboards.
   *
   * _Required_: No
   *
   * _Type_: [SAMLOptions](aws-properties-opensearchservice-domain-samloptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAMLOptions?: OpenSearchServiceDomainSAMLOptions;
  /**
   * True to enable fine-grained access control. You must also enable encryption of data at rest and node-to-node encryption. See [Fine-grained access control in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Date and time when the migration period will be disabled. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnonymousAuthDisableDate?: Value<string>;
  /**
   * Specifies information about the master user.
   *
   * _Required_: No
   *
   * _Type_: [MasterUserOptions](aws-properties-opensearchservice-domain-masteruseroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserOptions?: OpenSearchServiceDomainMasterUserOptions;
}

/**
 * A custom start time for the off-peak window, in Coordinated Universal Time (UTC). The window length will always be 10 hours, so you can't specify an end time. For example, if you specify 11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html}
 **/
export interface OpenSearchServiceDomainWindowStartTime {
  /**
   * The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time. For example, 17 refers to 5:00 P.M. UTC. The minimum value is 0 and the maximum value is 23.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hours: Value<number>;
  /**
   * The start minute of the window, in UTC. The minimum value is 0 and the maximum value is 59.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Minutes: Value<number>;
}

/**
 * A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain. These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify. If you don't specify a window start time, it defaults to 10:00 P.M. local time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html}
 **/
export interface OpenSearchServiceDomainOffPeakWindow {
  /**
   * The desired start time for an off-peak maintenance window.
   *
   * _Required_: No
   *
   * _Type_: [WindowStartTime](aws-properties-opensearchservice-domain-windowstarttime.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowStartTime?: OpenSearchServiceDomainWindowStartTime;
}

/**
 * Specifies information about the master user.
 *
 * Required if if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html}
 **/
export interface OpenSearchServiceDomainMasterUserOptions {
  /**
   * Password for the master user. Only specify if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * If you don't want to specify this value directly within the template, you can use a [dynamic reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `8`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
  /**
   * Amazon Resource Name (ARN) for the master user. The ARN can point to an IAM user or role. This property is required for Amazon Cognito to work, and it must match the role configured for Cognito. Only specify if `InternalUserDatabaseEnabled` is false in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserARN?: Value<string>;
  /**
   * Username for the master user. Only specify if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * If you don't want to specify this value directly within the template, you can use a [dynamic reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserName?: Value<string>;
}

/**
 * The cluster configuration for the OpenSearch Service domain. You can specify options such as the instance type and the number of instances. For more information, see [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html) in the _Amazon OpenSearch Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html}
 **/
export interface OpenSearchServiceDomainClusterConfig {
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
   * Whether to enable UltraWarm storage for the cluster. See [UltraWarm storage for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ultrawarm.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmEnabled?: Value<boolean>;
  /**
   * The number of warm nodes in the cluster.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmCount?: Value<number>;
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
   * Specifies zone awareness configuration options. Only use if `ZoneAwarenessEnabled` is `true`.
   *
   * _Required_: No
   *
   * _Type_: [ZoneAwarenessConfig](aws-properties-opensearchservice-domain-zoneawarenessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZoneAwarenessConfig?: OpenSearchServiceDomainZoneAwarenessConfig;
  /**
   * The number of instances to use for the master node. If you specify this property, you must specify `true` for the `DedicatedMasterEnabled` property.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedicatedMasterCount?: Value<number>;
  /**
   * The instance type for your data nodes, such as `m3.medium.search`. For valid values, see [Supported instance types in Amazon OpenSearch Service ](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `c4.2xlarge.search | c4.4xlarge.search | c4.8xlarge.search | c4.large.search | c4.xlarge.search | c5.18xlarge.search | c5.2xlarge.search | c5.4xlarge.search | c5.9xlarge.search | c5.large.search | c5.xlarge.search | c6g.12xlarge.search | c6g.2xlarge.search | c6g.4xlarge.search | c6g.8xlarge.search | c6g.large.search | c6g.xlarge.search | d2.2xlarge.search | d2.4xlarge.search | d2.8xlarge.search | d2.xlarge.search | i2.2xlarge.search | i2.xlarge.search | i3.16xlarge.search | i3.2xlarge.search | i3.4xlarge.search | i3.8xlarge.search | i3.large.search | i3.xlarge.search | m3.2xlarge.search | m3.large.search | m3.medium.search | m3.xlarge.search | m4.10xlarge.search | m4.2xlarge.search | m4.4xlarge.search | m4.large.search | m4.xlarge.search | m5.12xlarge.search | m5.24xlarge.search | m5.2xlarge.search | m5.4xlarge.search | m5.large.search | m5.xlarge.search | m6g.12xlarge.search | m6g.2xlarge.search | m6g.4xlarge.search | m6g.8xlarge.search | m6g.large.search | m6g.xlarge.search | r3.2xlarge.search | r3.4xlarge.search | r3.8xlarge.search | r3.large.search | r3.xlarge.search | r4.16xlarge.search | r4.2xlarge.search | r4.4xlarge.search | r4.8xlarge.search | r4.large.search | r4.xlarge.search | r5.12xlarge.search | r5.24xlarge.search | r5.2xlarge.search | r5.4xlarge.search | r5.large.search | r5.xlarge.search | r6g.12xlarge.search | r6g.2xlarge.search | r6g.4xlarge.search | r6g.8xlarge.search | r6g.large.search | r6g.xlarge.search | r6gd.12xlarge.search | r6gd.16xlarge.search | r6gd.2xlarge.search | r6gd.4xlarge.search | r6gd.8xlarge.search | r6gd.large.search | r6gd.xlarge.search | t2.medium.search | t2.micro.search | t2.small.search | t3.2xlarge.search | t3.large.search | t3.medium.search | t3.micro.search | t3.nano.search | t3.small.search | t3.xlarge.search | t4g.medium.search | t4g.small.search | ultrawarm1.large.search | ultrawarm1.medium.search | ultrawarm1.xlarge.search`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The instance type for the cluster's warm nodes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ultrawarm1.large.search | ultrawarm1.medium.search | ultrawarm1.xlarge.search`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarmType?: Value<string>;
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
  /**
   * The hardware configuration of the computer that hosts the dedicated master node, such as `m3.medium.search`. If you specify this property, you must specify `true` for the `DedicatedMasterEnabled` property. For valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `c4.2xlarge.search | c4.4xlarge.search | c4.8xlarge.search | c4.large.search | c4.xlarge.search | c5.18xlarge.search | c5.2xlarge.search | c5.4xlarge.search | c5.9xlarge.search | c5.large.search | c5.xlarge.search | c6g.12xlarge.search | c6g.2xlarge.search | c6g.4xlarge.search | c6g.8xlarge.search | c6g.large.search | c6g.xlarge.search | d2.2xlarge.search | d2.4xlarge.search | d2.8xlarge.search | d2.xlarge.search | i2.2xlarge.search | i2.xlarge.search | i3.16xlarge.search | i3.2xlarge.search | i3.4xlarge.search | i3.8xlarge.search | i3.large.search | i3.xlarge.search | m3.2xlarge.search | m3.large.search | m3.medium.search | m3.xlarge.search | m4.10xlarge.search | m4.2xlarge.search | m4.4xlarge.search | m4.large.search | m4.xlarge.search | m5.12xlarge.search | m5.24xlarge.search | m5.2xlarge.search | m5.4xlarge.search | m5.large.search | m5.xlarge.search | m6g.12xlarge.search | m6g.2xlarge.search | m6g.4xlarge.search | m6g.8xlarge.search | m6g.large.search | m6g.xlarge.search | r3.2xlarge.search | r3.4xlarge.search | r3.8xlarge.search | r3.large.search | r3.xlarge.search | r4.16xlarge.search | r4.2xlarge.search | r4.4xlarge.search | r4.8xlarge.search | r4.large.search | r4.xlarge.search | r5.12xlarge.search | r5.24xlarge.search | r5.2xlarge.search | r5.4xlarge.search | r5.large.search | r5.xlarge.search | r6g.12xlarge.search | r6g.2xlarge.search | r6g.4xlarge.search | r6g.8xlarge.search | r6g.large.search | r6g.xlarge.search | r6gd.12xlarge.search | r6gd.16xlarge.search | r6gd.2xlarge.search | r6gd.4xlarge.search | r6gd.8xlarge.search | r6gd.large.search | r6gd.xlarge.search | t2.medium.search | t2.micro.search | t2.small.search | t3.2xlarge.search | t3.large.search | t3.medium.search | t3.micro.search | t3.nano.search | t3.small.search | t3.xlarge.search | t4g.medium.search | t4g.small.search | ultrawarm1.large.search | ultrawarm1.medium.search | ultrawarm1.xlarge.search`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedicatedMasterType?: Value<string>;
}

/**
 * Specifies options for node-to-node encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html}
 **/
export interface OpenSearchServiceDomainNodeToNodeEncryptionOptions {
  /**
   * Specifies to enable or disable node-to-node encryption on the domain. Required if you enable fine-grained access control in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * _Required_: Conditional
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * The current status of the service software for an Amazon OpenSearch Service domain. For more information, see [Service software updates in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html}
 **/
export interface OpenSearchServiceDomainServiceSoftwareOptions {
  /**
   * The new service software version, if one is available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NewVersion?: Value<string>;
  /**
   * The status of your service software update.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COMPLETED | ELIGIBLE | IN_PROGRESS | NOT_ELIGIBLE | PENDING_UPDATE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateStatus?: Value<string>;
  /**
   * A description of the service software update status.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * True if you're able to cancel your service software version update. False if you can't cancel your service software update.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cancellable?: Value<boolean>;
  /**
   * The current service software version present on the domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentVersion?: Value<string>;
  /**
   * The timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomatedUpdateDate?: Value<string>;
  /**
   * True if you're able to update your service software version. False if you can't update your service software version.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateAvailable?: Value<boolean>;
  /**
   * True if a service software is never automatically updated. False if a service software is automatically updated after the automated update date.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptionalDeployment?: Value<boolean>;
}

/**
 * Container for information about the SAML configuration for OpenSearch Dashboards.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html}
 **/
export interface OpenSearchServiceDomainSAMLOptions {
  /**
   * The backend role that the SAML master user is mapped to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterBackendRole?: Value<string>;
  /**
   * Element of the SAML assertion to use for the user name. Default is `NameID`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubjectKey?: Value<string>;
  /**
   * The SAML Identity Provider's information.
   *
   * _Required_: No
   *
   * _Type_: [Idp](aws-properties-opensearchservice-domain-idp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Idp?: OpenSearchServiceDomainIdp;
  /**
   * The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeoutMinutes?: Value<number>;
  /**
   * Element of the SAML assertion to use for backend roles. Default is `roles`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RolesKey?: Value<string>;
  /**
   * True to enable SAML authentication for a domain.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The SAML master user name, which is stored in the domain's internal user database.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserName?: Value<string>;
}

/**
 * Specifies whether the OpenSearch Service domain publishes application, search slow logs, or index slow logs to Amazon CloudWatch. Each option must be an object of name `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `INDEX_SLOW_LOGS`, or `AUDIT_LOGS` depending on the type of logs you want to publish. For the full syntax, see the [examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain--examples).
 *
 * Before you enable log publishing, you need to create a CloudWatch log group and provide OpenSearch Service the correct permissions to write to it. To learn more, see [Enabling log publishing (AWS CloudFormation)](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html#createdomain-configure-slow-logs-cfn).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html}
 **/
export interface OpenSearchServiceDomainLogPublishingOption {
  /**
   * Specifies the CloudWatch log group to publish to. Required if you enable log publishing.
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html}
 **/
export interface OpenSearchServiceDomainEncryptionAtRestOptions {
  /**
   * The KMS key ID. Takes the form `1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a`. Required if you enable encryption at rest.
   *
   * You can also use `keyAlias` as a value.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `500`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
  /**
   * Specify `true` to enable encryption at rest. Required if you enable fine-grained access control in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html).
   *
   * _Required_: Conditional
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Options for configuring service software updates for a domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html}
 **/
export interface OpenSearchServiceDomainSoftwareUpdateOptions {
  /**
   * Specifies whether automatic service software updates are enabled for the domain.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoSoftwareUpdateEnabled?: Value<boolean>;
}

/**
 * Off-peak window settings for the domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html}
 **/
export interface OpenSearchServiceDomainOffPeakWindowOptions {
  /**
   * Off-peak window settings for the domain.
   *
   * _Required_: No
   *
   * _Type_: [OffPeakWindow](aws-properties-opensearchservice-domain-offpeakwindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OffPeakWindow?: OpenSearchServiceDomainOffPeakWindow;
  /**
   * Specifies whether off-peak window settings are enabled for the domain.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}
export interface OpenSearchServiceDomainProperties {
  /**
   * The version of OpenSearch to use. The value must be in the format `OpenSearch_X.Y` or `Elasticsearch_X.Y`. If not specified, the latest version of OpenSearch is used. For information about the versions that OpenSearch Service supports, see [Supported versions of OpenSearch and Elasticsearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html#choosing-version) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * If you set the [EnableVersionUpgrade](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeopensearchdomain) update policy to `true`, you can update `EngineVersion` without interruption. When `EnableVersionUpgrade` is set to `false`, or is not specified, updating `EngineVersion` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `14`
   *
   * _Maximum_: `18`
   *
   * _Pattern_: `^Elasticsearch_[0-9]{1}.[0-9]{1,2}$|^OpenSearch_[0-9]{1,2}.[0-9]{1,2}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * Options for configuring service software updates for a domain.
   *
   * _Required_: No
   *
   * _Type_: [SoftwareUpdateOptions](aws-properties-opensearchservice-domain-softwareupdateoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SoftwareUpdateOptions?: OpenSearchServiceDomainSoftwareUpdateOptions;
  /**
   * A name for the OpenSearch Service domain. The name must have a minimum length of 3 and a maximum length of 28. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * Required when creating a new domain.
   *
   * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName?: Value<string>;
  /**
   * An object with one or more of the following keys: `SEARCH_SLOW_LOGS`, `ES_APPLICATION_LOGS`, `INDEX_SLOW_LOGS`, `AUDIT_LOGS`, depending on the types of logs you want to publish. Each key needs a valid `LogPublishingOption` value. For the full syntax, see the [examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain--examples).
   *
   * _Required_: No
   *
   * _Type_: Map of [LogPublishingOption](aws-properties-opensearchservice-domain-logpublishingoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPublishingOptions?: { [key: string]: OpenSearchServiceDomainLogPublishingOption };
  /**
   * **DEPRECATED**. The automated snapshot configuration for the OpenSearch Service domain indexes.
   *
   * _Required_: No
   *
   * _Type_: [SnapshotOptions](aws-properties-opensearchservice-domain-snapshotoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotOptions?: OpenSearchServiceDomainSnapshotOptions;
  /**
   * The virtual private cloud (VPC) configuration for the OpenSearch Service domain. For more information, see [Launching your Amazon OpenSearch Service domains within a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * If you remove this entity altogether, along with its associated properties, it causes a replacement. You might encounter this scenario if you're updating your security configuration from a VPC to a public endpoint.
   *
   * _Required_: No
   *
   * _Type_: [VPCOptions](aws-properties-opensearchservice-domain-vpcoptions.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  VPCOptions?: OpenSearchServiceDomainVPCOptions;
  /**
   * Specifies whether node-to-node encryption is enabled. See [Node-to-node encryption for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html).
   *
   * _Required_: No
   *
   * _Type_: [NodeToNodeEncryptionOptions](aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeToNodeEncryptionOptions?: OpenSearchServiceDomainNodeToNodeEncryptionOptions;
  /**
   * An AWS Identity and Access Management (IAM) policy document that specifies who can access the OpenSearch Service domain and their permissions. For more information, see [Configuring access policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-creating) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessPolicies?: { [key: string]: any };
  /**
   * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
   *
   * _Required_: No
   *
   * _Type_: [DomainEndpointOptions](aws-properties-opensearchservice-domain-domainendpointoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainEndpointOptions?: OpenSearchServiceDomainDomainEndpointOptions;
  /**
   * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
   *
   * _Required_: No
   *
   * _Type_: [CognitoOptions](aws-properties-opensearchservice-domain-cognitooptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoOptions?: OpenSearchServiceDomainCognitoOptions;
  /**
   * Additional options to specify for the OpenSearch Service domain. For more information, see [AdvancedOptions](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html#API_CreateDomain_RequestBody) in the OpenSearch Service API reference.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedOptions?: { [key: string]: Value<string> };
  /**
   * Specifies options for fine-grained access control and SAML authentication.
   *
   * If you specify advanced security options, you must also enable node-to-node encryption ([NodeToNodeEncryptionOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html)) and encryption at rest ([EncryptionAtRestOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html)). You must also enable `EnforceHTTPS` within [DomainEndpointOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html), which requires HTTPS for all traffic to the domain.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedSecurityOptionsInput](aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedSecurityOptions?: OpenSearchServiceDomainAdvancedSecurityOptionsInput;
  /**
   * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the _Amazon OpenSearch Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [EBSOptions](aws-properties-opensearchservice-domain-ebsoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EBSOptions?: OpenSearchServiceDomainEBSOptions;
  /**
   * Whether the domain should encrypt data at rest, and if so, the AWS KMS key to use. See [Encryption of data at rest for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html).
   *
   * _Required_: No
   *
   * _Type_: [EncryptionAtRestOptions](aws-properties-opensearchservice-domain-encryptionatrestoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionAtRestOptions?: OpenSearchServiceDomainEncryptionAtRestOptions;
  /**
   * Options for a domain's off-peak window, during which OpenSearch Service can perform mandatory configuration changes on the domain.
   *
   * _Required_: No
   *
   * _Type_: [OffPeakWindowOptions](aws-properties-opensearchservice-domain-offpeakwindowoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OffPeakWindowOptions?: OpenSearchServiceDomainOffPeakWindowOptions;
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
   * Container for the cluster configuration of a domain.
   *
   * _Required_: No
   *
   * _Type_: [ClusterConfig](aws-properties-opensearchservice-domain-clusterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterConfig?: OpenSearchServiceDomainClusterConfig;
}

/**
 * The AWS::OpenSearchService::Domain resource creates an Amazon OpenSearch Service domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html}
 */
export interface OpenSearchServiceDomainResource {
  Type: 'AWS::OpenSearchService::Domain';
  Properties: OpenSearchServiceDomainProperties;
}
