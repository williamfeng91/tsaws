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
 * Describes the Chef configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-chefconfiguration.html}
 **/
export interface OpsWorksStackChefConfiguration {
  /**
   * The Berkshelf version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BerkshelfVersion?: Value<string>;
  /**
   * Whether to enable Berkshelf.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManageBerkshelf?: Value<boolean>;
}

/**
 * Describes an Elastic IP address.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-elasticip.html}
 **/
export interface OpsWorksStackElasticIp {
  /**
   * The IP address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ip: Value<string>;
  /**
   * The name, which can be a maximum of 32 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-stackconfigmanager.html}
 **/
export interface OpsWorksStackStackConfigurationManager {
  Name?: Value<string>;
  Version?: Value<string>;
}

/**
 * Describes an Amazon RDS instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-rdsdbinstance.html}
 **/
export interface OpsWorksStackRdsDbInstance {
  /**
   * AWS OpsWorks Stacks returns `*****FILTERED*****` instead of the actual value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DbPassword: Value<string>;
  /**
   * The master user name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DbUser: Value<string>;
  /**
   * The instance's ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RdsDbInstanceArn: Value<string>;
}

/**
 * Contains the information required to retrieve an app or cookbook from a repository. For more information, see [Creating Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html) or [Custom Recipes and Cookbooks](https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html}
 **/
export interface OpsWorksStackSource {
  /**
   * When included in a request, the parameter depends on the repository type.
   */
  Password?: Value<string>;
  /**
   * The application's version. AWS OpsWorks Stacks enables you to easily deploy new versions of an application. One of the simplest approaches is to have branches or revisions in your repository that represent different versions that can potentially be deployed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Revision?: Value<string>;
  /**
   * The repository's SSH key. For more information, see [Using Git Repository SSH Keys](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploykeys.html) in the _AWS OpsWorks User Guide_. To pass in an SSH key as a parameter, see the following example:
   *
   * `"Parameters" : { "GitSSHKey" : { "Description" : "Change SSH key newlines to commas.", "Type" : "CommaDelimitedList", "NoEcho" : "true" }, ... "CustomCookbooksSource": { "Revision" : { "Ref": "GitRevision"}, "SshKey" : { "Fn::Join" : [ "n", { "Ref": "GitSSHKey"} ] }, "Type": "git", "Url": { "Ref": "GitURL"} } ...`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SshKey?: Value<string>;
  /**
   * The repository type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `archive | git | s3 | svn`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The source URL. The following is an example of an Amazon S3 source URL: `https://s3.amazonaws.com/opsworks-demo-bucket/opsworks_cookbook_demo.tar.gz`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
  /**
   * This parameter depends on the repository type.
   */
  Username?: Value<string>;
}
export interface OpsWorksStackProperties {
  /**
   * The default AWS OpsWorks Stacks agent version. You have the following options:
   */
  AgentVersion?: Value<string>;
  /**
   * One or more user-defined key-value pairs to be added to the stack attributes.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: Value<string> };
  /**
   * A `ChefConfiguration` object that specifies whether to enable Berkshelf and the Berkshelf version on Chef 11.10 stacks. For more information, see [Create a New Stack](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-creating.html).
   *
   * _Required_: No
   *
   * _Type_: [ChefConfiguration](aws-properties-opsworks-stack-chefconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChefConfiguration?: OpsWorksStackChefConfiguration;
  /**
   * If you're cloning an AWS OpsWorks stack, a list of AWS OpsWorks application stack IDs from the source stack to include in the cloned stack.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CloneAppIds?: List<Value<string>>;
  /**
   * If you're cloning an AWS OpsWorks stack, indicates whether to clone the source stack's permissions.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClonePermissions?: Value<boolean>;
  /**
   * The configuration manager. When you create a stack we recommend that you use the configuration manager to specify the Chef version: 12, 11.10, or 11.4 for Linux stacks, or 12.2 for Windows stacks. The default value for Linux stacks is currently 12.
   *
   * _Required_: No
   *
   * _Type_: [StackConfigurationManager](aws-properties-opsworks-stack-stackconfigmanager.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationManager?: OpsWorksStackStackConfigurationManager;
  /**
   * Contains the information required to retrieve an app or cookbook from a repository. For more information, see [Adding Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html) or [Cookbooks and Recipes](https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html).
   *
   * _Required_: No
   *
   * _Type_: [Source](aws-properties-opsworks-stack-source.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomCookbooksSource?: OpsWorksStackSource;
  /**
   * A string that contains user-defined, custom JSON. It can be used to override the corresponding default stack configuration attribute values or to pass data to recipes. The string should be in the following format:
   *
   * `"{"key1": "value1", "key2": "value2",...}"`
   *
   * For more information about custom JSON, see [Use Custom JSON to Modify the Stack Configuration Attributes](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomJson?: { [key: string]: any };
  /**
   * The stack's default Availability Zone, which must be in the specified region. For more information, see [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html). If you also specify a value for `DefaultSubnetId`, the subnet must be in the same zone. For more information, see the `VpcId` parameter description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAvailabilityZone?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an IAM profile that is the default profile for all of the stack's EC2 instances. For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultInstanceProfileArn: Value<string>;
  /**
   * The stack's default operating system, which is installed on every instance unless you specify a different operating system when you create the instance. You can specify one of the following.
   */
  DefaultOs?: Value<string>;
  /**
   * The default root device type. This value is the default for all instances in the stack, but you can override it when you create an instance. The default option is `instance-store`. For more information, see [Storage for the Root Device](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ebs | instance-store`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRootDeviceType?: Value<string>;
  /**
   * A default Amazon EC2 key pair name. The default value is none. If you specify a key pair name, AWS OpsWorks installs the public key on the instance and you can use the private key with an SSH client to log in to the instance. For more information, see [ Using SSH to Communicate with an Instance](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-ssh.html) and [ Managing SSH Access](https://docs.aws.amazon.com/opsworks/latest/userguide/security-ssh-access.html). You can override this setting by specifying a different key pair, or no key pair, when you [ create an instance](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSshKeyName?: Value<string>;
  /**
   * The stack's default subnet ID. All instances are launched into this subnet unless you specify another subnet ID when you create the instance. This parameter is required if you specify a value for the `VpcId` parameter. If you also specify a value for `DefaultAvailabilityZone`, the subnet must be in that zone.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultSubnetId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Elastic Container Service (Amazon ECS) cluster to register with the AWS OpsWorks stack.
   *
   * If you specify a cluster that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcsClusterArn?: Value<string>;
  /**
   * A list of Elastic IP addresses to register with the AWS OpsWorks stack.
   *
   * If you specify an IP address that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the IP address.
   *
   * _Required_: No
   *
   * _Type_: List of [ElasticIp](aws-properties-opsworks-stack-elasticip.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticIps?: List<OpsWorksStackElasticIp>;
  /**
   * The stack's host name theme, with spaces replaced by underscores. The theme is used to generate host names for the stack's instances. By default, `HostnameTheme` is set to `Layer_Dependent`, which creates host names by appending integers to the layer's short name. The other themes are:
   */
  HostnameTheme?: Value<string>;
  /**
   * The stack name. Stack names can be a maximum of 64 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The Amazon Relational Database Service (Amazon RDS) database instance to register with the AWS OpsWorks stack.
   *
   * If you specify a database instance that's registered with another AWS OpsWorks stack, AWS CloudFormation deregisters the existing association before registering the database instance.
   *
   * _Required_: No
   *
   * _Type_: List of [RdsDbInstance](aws-properties-opsworks-stack-rdsdbinstance.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RdsDbInstances?: List<OpsWorksStackRdsDbInstance>;
  /**
   * The stack's IAM role, which allows AWS OpsWorks Stacks to work with AWS resources on your behalf. You must set this parameter to the Amazon Resource Name (ARN) for an existing IAM role. For more information about IAM ARNs, see [Using Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceRoleArn: Value<string>;
  /**
   * If you're cloning an AWS OpsWorks stack, the stack ID of the source AWS OpsWorks stack to clone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceStackId?: Value<string>;
  /**
   * A map that contains tag keys and tag values that are attached to a stack or layer.
   */
  Tags?: List<ResourceTag>;
  /**
   * Whether the stack uses custom cookbooks.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseCustomCookbooks?: Value<boolean>;
  /**
   * Whether to associate the AWS OpsWorks Stacks built-in security groups with the stack's layers.
   *
   * AWS OpsWorks Stacks provides a standard set of built-in security groups, one for each layer, which are associated with layers by default. With `UseOpsworksSecurityGroups` you can instead provide your own custom security groups. `UseOpsworksSecurityGroups` has the following settings:
   */
  UseOpsworksSecurityGroups?: Value<boolean>;
  /**
   * The ID of the VPC that the stack is to be launched into. The VPC must be in the stack's region. All instances are launched into this VPC. You cannot change the ID later.
   */
  VpcId?: Value<string>;
}

/**
 * Creates a new stack. For more information, see [Create a New Stack](https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html).
 *
 * **Required Permissions**: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-stack.html}
 */
export interface OpsWorksStackResource {
  Type: 'AWS::OpsWorks::Stack';
  Properties: OpsWorksStackProperties;
}
