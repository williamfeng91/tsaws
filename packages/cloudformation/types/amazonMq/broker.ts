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
 * The list of information about logs to be enabled for the specified broker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-loglist.html}
 **/
export interface AmazonMQBrokerLogList {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Audit?: Value<boolean>;
  /**
   * Enables general logging.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  General?: Value<boolean>;
}

/**
 * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.
 *
 * **Important**
 *
 * Does not apply to RabbitMQ brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-ldapservermetadata.html}
 **/
export interface AmazonMQBrokerLdapServerMetadata {
  /**
   * Specifies the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory. Optional failover server.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hosts: List<Value<string>>;
  /**
   * The name of the LDAP attribute in the user's directory entry for the user's group membership. In some cases, user roles may be identified by the value of an attribute in the user's directory entry. The `UserRoleName` option allows you to provide the name of this attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserRoleName?: Value<string>;
  /**
   * The LDAP search filter used to find users within the `userBase`. The client's username is substituted into the `{0}` placeholder in the search filter. For example, if this option is set to `(uid={0})` and the received username is `janedoe`, the search filter becomes `(uid=janedoe)` after string substitution. It will result in matching an entry like `uid=janedoe`, `ou=Users`, `ou=corp`, `dc=corp`, `dc=example`, `dc=com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserSearchMatching: Value<string>;
  /**
   * The group name attribute in a role entry whose value is the name of that role. For example, you can specify `cn` for a group entry's common name. If authentication succeeds, then the user is assigned the the value of the `cn` attribute for each role entry that they are a member of.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleName?: Value<string>;
  /**
   * Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to `ou=Users`,`ou=corp`, `dc=corp`, `dc=example`, `dc=com`, the search for user entries is restricted to the subtree beneath `ou=Users`,`ou=corp`, `dc=corp`, `dc=example`, `dc=com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserBase: Value<string>;
  /**
   * The directory search scope for the user. If set to true, scope is to search the entire subtree.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserSearchSubtree?: Value<boolean>;
  /**
   * The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the `{0}` placeholder in the search filter. The client's username is substituted into the `{1}` placeholder. For example, if you set this option to `(member=uid={1})` for the user janedoe, the search filter becomes `(member=uid=janedoe)` after string substitution. It matches all role entries that have a member attribute equal to `uid=janedoe` under the subtree selected by the `RoleBases`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleSearchMatching: Value<string>;
  /**
   * Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, `cn=admin`, `ou=corp`, `dc=corp`, `dc=example`, `dc=com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccountUsername: Value<string>;
  /**
   * The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, `ou=group`, `ou=corp`, `dc=corp`, `dc=example`, `dc=com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleBase: Value<string>;
  /**
   * Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, `cn=admin`,`dc=corp`, `dc=example`, `dc=com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccountPassword: Value<string>;
  /**
   * The directory search scope for the role. If set to true, scope is to search the entire subtree.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleSearchSubtree?: Value<boolean>;
}

/**
 * The parameters that determine the `WeeklyStartTime` to apply pending updates or patches to the broker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-maintenancewindow.html}
 **/
export interface AmazonMQBrokerMaintenanceWindow {
  /**
   * The day of the week.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfWeek: Value<string>;
  /**
   * The time, in 24-hour format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeOfDay: Value<string>;
  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeZone: Value<string>;
}

/**
 * A list of information about the configuration.
 *
 * **Important**
 *
 * Does not apply to RabbitMQ brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-configurationid.html}
 **/
export interface AmazonMQBrokerConfigurationId {
  /**
   * The revision number of the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Revision: Value<number>;
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
}

/**
 * The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created via the RabbitMQ web console or by using the RabbitMQ management API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-user.html}
 **/
export interface AmazonMQBrokerUser {
  /**
   * The username of the broker user. For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.
   *
   * Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other AWS services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<Value<string>>;
  /**
   * Enables access to the ActiveMQ web console for the ActiveMQ user. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConsoleAccess?: Value<boolean>;
  /**
   * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * Encryption options for the broker.
 *
 * **Important**
 *
 * Does not apply to RabbitMQ brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-encryptionoptions.html}
 **/
export interface AmazonMQBrokerEncryptionOptions {
  /**
   * The customer master key (CMK) to use for the A AWS KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
  /**
   * Enables the use of an AWS owned CMK using AWS KMS (KMS). Set to `true` by default, if no value is provided, for example, for RabbitMQ brokers.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseAwsOwnedKey: Value<boolean>;
}

/**
 * A key-value pair to associate with the broker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-broker-tagsentry.html}
 **/
export interface AmazonMQBrokerTagsEntry {
  /**
   * The value in a key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The key in a key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface AmazonMQBrokerProperties {
  /**
   * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The broker's storage type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageType?: Value<string>;
  /**
   * The version of the broker engine. For a list of supported engine versions, see [Engine](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html) in the _Amazon MQ Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion: Value<string>;
  /**
   * A list of information about the configuration. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: [ConfigurationId](aws-properties-amazonmq-broker-configurationid.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Configuration?: AmazonMQBrokerConfigurationId;
  /**
   * Optional. The authentication strategy used to secure the broker. The default is `SIMPLE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthenticationStrategy?: Value<string>;
  /**
   * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceWindow](aws-properties-amazonmq-broker-maintenancewindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindowStartTime?: AmazonMQBrokerMaintenanceWindow;
  /**
   * The broker's instance type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  HostInstanceType: Value<string>;
  /**
   * Enables automatic upgrades to new minor versions for brokers, as new broker engine versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoMinorVersionUpgrade: Value<boolean>;
  /**
   * The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent RabbitMQ users are created by via the RabbitMQ web console or by using the RabbitMQ management API.
   *
   * _Required_: Yes
   *
   * _Type_: List of [User](aws-properties-amazonmq-broker-user.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Users: List<AmazonMQBrokerUser>;
  /**
   * Enables Amazon CloudWatch logging for brokers.
   *
   * _Required_: No
   *
   * _Type_: [LogList](aws-properties-amazonmq-broker-loglist.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logs?: AmazonMQBrokerLogList;
  /**
   * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment (ACTIVEMQ) requires two subnets. A CLUSTER_MULTI_AZ deployment (RABBITMQ) has no subnet requirements when deployed with public accessibility, deployment without public accessibility requires at least one subnet.
   *
   * If you specify subnets in a shared VPC for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your AWS account. Amazon MQ will not be able to create VPC enpoints in VPCs that are not owned by your AWS account.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.
   *
   * Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other AWS services, including CCloudWatch Logs. Broker names are not intended to be used for private or sensitive data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BrokerName: Value<string>;
  /**
   * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: [LdapServerMetadata](aws-properties-amazonmq-broker-ldapservermetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LdapServerMetadata?: AmazonMQBrokerLdapServerMetadata;
  /**
   * The deployment mode of the broker. Available values:
   */
  DeploymentMode: Value<string>;
  /**
   * The type of broker engine. Currently, Amazon MQ supports `ACTIVEMQ` and `RABBITMQ`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineType: Value<string>;
  /**
   * Enables connections from applications outside of the VPC that hosts the broker's subnets.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PubliclyAccessible: Value<boolean>;
  /**
   * Encryption options for the broker. Does not apply to RabbitMQ brokers.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionOptions](aws-properties-amazonmq-broker-encryptionoptions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionOptions?: AmazonMQBrokerEncryptionOptions;
  /**
   * An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the _Billing and Cost Management User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [TagsEntry](aws-properties-amazonmq-broker-tagsentry.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<AmazonMQBrokerTagsEntry>;
}

/**
 * A _broker_ is a message broker environment running on Amazon MQ. It is the basic building block of Amazon MQ.
 *
 * The `AWS::AmazonMQ::Broker` resource lets you create Amazon MQ for ActiveMQ and Amazon MQ for RabbitMQ brokers, add configuration changes or modify users for a speified ActiveMQ broker, return information about the specified broker, and delete the broker. For more information, see [How Amazon MQ works](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html) in the _Amazon MQ Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-broker.html}
 */
export interface AmazonMQBrokerResource {
  Type: 'AWS::AmazonMQ::Broker';
  Properties: AmazonMQBrokerProperties;
}
