/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `EngineAttribute` property type specifies administrator credentials for an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server. `EngineAttribute` is a property of the `AWS::OpsWorksCM::Server` resource type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworkscm-server-engineattribute.html}
 **/
export interface OpsWorksCMServerEngineAttribute {
  /**
   * The value of the engine attribute.
   *
   * **Attribute value for Chef Automate servers:**
   *
   * On Windows-based computers, you can use the PuTTYgen utility to generate a base64-encoded RSA private key. For more information, see [PuTTYgen - Key Generator for PuTTY on Windows](https://www.ssh.com/ssh/putty/windows/puttygen) on SSH.com.
   *
   * **Attribute values for Puppet Enterprise servers:**
   */
  Value?: Value<string>;
  /**
   * The name of the engine attribute.
   *
   * **Attribute name for Chef Automate servers:**
   */
  Name?: Value<string>;
}
export interface OpsWorksCMServerProperties {
  /**
   * The Amazon EC2 key pair to set for the instance. This parameter is optional; if desired, you may specify this parameter to connect to your instances by using SSH.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyPair?: Value<string>;
  /**
   * The major release version of the engine that you want to use. For a Chef server, the valid value for EngineVersion is currently `2`. For a Puppet server, valid values are `2019` or `2017`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `(?s).*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineVersion?: Value<string>;
  /**
   * The service role that the AWS OpsWorks CM service backend uses to work with your account. Although the AWS OpsWorks management console typically creates the service role for you, if you are using the AWS CLI or API commands, run the service-role-creation.yaml AWS CloudFormation template, located at https://s3.amazonaws.com/opsworks-cm-us-east-1-prod-default-assets/misc/opsworks-cm-roles.yaml. This template creates a CloudFormation stack that includes the service role and instance profile that you need.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `arn:aws:iam::[0-9]{12}:role/.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceRoleArn: Value<string>;
  /**
   * Enable or disable scheduled backups. Valid values are `true` or `false`. The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableAutomatedBackup?: Value<boolean>;
  /**
   * If you specify this field, AWS OpsWorks CM creates the server by using the backup represented by BackupId.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `79`
   *
   * _Pattern_: `[a-zA-Z][a-zA-Z0-9-.:]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BackupId?: Value<string>;
  /**
   * The engine model of the server. Valid values in this release include `Monolithic` for Puppet and `Single` for Chef.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `(?s).*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineModel?: Value<string>;
  /**
   * The start time for a one-hour period each week during which AWS OpsWorks CM performs maintenance on the instance. Valid values must be specified in the following format: `DDD:HH:MM`. `MM` must be specified as `00`. The specified time is in coordinated universal time (UTC). The default value is a random one-hour period on Tuesday, Wednesday, or Friday. See `TimeWindowDefinition` for more information.
   *
   * **Example:** `Mon:08:00`, which represents a start time of every Monday at 08:00 UTC. (8:00 a.m.)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * Associate a public IP address with a server that you are launching. Valid values are `true` or `false`. The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AssociatePublicIpAddress?: Value<boolean>;
  /**
   * The ARN of the instance profile that your Amazon EC2 instances use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `arn:aws:iam::[0-9]{12}:instance-profile/.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceProfileArn: Value<string>;
  /**
   * Supported on servers running Chef Automate 2.0 only. A PEM-formatted HTTPS certificate. The value can be be a single, self-signed certificate, or a certificate chain. If you specify a custom certificate, you must also specify values for `CustomDomain` and `CustomPrivateKey`. The following are requirements for the `CustomCertificate` value:
   */
  CustomCertificate?: Value<string>;
  /**
   * The start time for a one-hour period during which AWS OpsWorks CM backs up application-level data on your server if automated backups are enabled. Valid values must be specified in one of the following formats:
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * A list of security group IDs to attach to the Amazon EC2 instance. If you add this parameter, the specified security groups must be within the VPC that is specified by `SubnetIds`.
   *
   * If you do not specify this parameter, AWS OpsWorks CM creates one new security group that uses TCP ports 22 and 443, open to 0.0.0.0/0 (everyone).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The IDs of subnets in which to launch the server EC2 instance.
   *
   * Amazon EC2-Classic customers: This field is required. All servers must run within a VPC. The VPC must have "Auto Assign Public IP" enabled.
   *
   * EC2-VPC customers: This field is optional. If you do not specify subnet IDs, your EC2 instances are created in a default subnet that is selected by Amazon EC2. If you specify subnet IDs, the VPC must have "Auto Assign Public IP" enabled.
   *
   * For more information about supported Amazon EC2 platforms, see [Supported Platforms](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * Supported on servers running Chef Automate 2.0 only. An optional public endpoint of a server, such as `https://aws.my-company.com`. To access the server, create a CNAME DNS record in your preferred DNS service that points the custom domain to the endpoint that is generated when the server is created (the value of the CreateServer Endpoint attribute). You cannot access the server by using the generated `Endpoint` value if the server is using a custom domain. If you specify a custom domain, you must also specify values for `CustomCertificate` and `CustomPrivateKey`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9]).)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomDomain?: Value<string>;
  /**
   * Supported on servers running Chef Automate 2.0 only. A private key in PEM format for connecting to the server by using HTTPS. The private key must not be encrypted; it cannot be protected by a password or passphrase. If you specify a custom private key, you must also specify values for `CustomDomain` and `CustomCertificate`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `(?ms)s*^-----BEGIN (?-s:.*)PRIVATE KEY-----$.*?^-----END (?-s:.*)PRIVATE KEY-----$s*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomPrivateKey?: Value<string>;
  /**
   * Optional engine attributes on a specified server.
   *
   * **Attributes accepted in a Chef createServer request:**
   *
   * **Attributes accepted in a Puppet createServer request:**
   */
  EngineAttributes?: List<OpsWorksCMServerEngineAttribute>;
  /**
   * The number of automated backups that you want to keep. Whenever a new backup is created, AWS OpsWorks CM deletes the oldest backups if this number is exceeded. The default value is `1`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupRetentionCount?: Value<number>;
  /**
   * The Amazon EC2 instance type to use. For example, `m5.large`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `(?s).*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
  /**
   * A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise server.
   */
  Tags?: List<ResourceTag>;
  /**
   * The configuration management engine to use. Valid values include `ChefAutomate` and `Puppet`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Pattern_: `(?s).*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Engine?: Value<string>;
}

/**
 * The `AWS::OpsWorksCM::Server` resource creates an AWS OpsWorks for Chef Automate or OpsWorks for Puppet Enterprise configuration management server. For more information, see [Create a Chef Automate Server in AWS CloudFormation](https://docs.aws.amazon.com/opsworks/latest/userguide/opscm-create-server-cfn.html) or [Create a Puppet Enterprise Master in AWS CloudFormation](https://docs.aws.amazon.com/opsworks/latest/userguide/opspup-create-server-cfn.html) in the _AWS OpsWorks User Guide_, and [CreateServer](https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html) in the _AWS OpsWorks CM API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworkscm-server.html}
 */
export interface OpsWorksCMServerResource {
  Type: 'AWS::OpsWorksCM::Server';
  Properties: OpsWorksCMServerProperties;
}
