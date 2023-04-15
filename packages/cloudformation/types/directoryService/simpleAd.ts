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

/**
 * Contains VPC information for the [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) or [CreateMicrosoftAD](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html) operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-simplead-vpcsettings.html}
 **/
export interface DirectoryServiceSimpleADVpcSettings {
  /**
   * The identifier of the VPC in which to create the directory.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId: Value<string>;
  /**
   * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
}
export interface DirectoryServiceSimpleADProperties {
  /**
   * A description for the directory.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([a-zA-Z0-9_])[a-zA-Z0-9_@#%*+=:?./!s-]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * A [DirectoryVpcSettings](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DirectoryVpcSettings.html) object that contains additional information for the operation.
   *
   * _Required_: Yes
   *
   * _Type_: [VpcSettings](aws-properties-directoryservice-simplead-vpcsettings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcSettings: DirectoryServiceSimpleADVpcSettings;
  /**
   * The size of the directory. For valid values, see [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) in the _AWS Directory Service API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Large | Small`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Size: Value<string>;
  /**
   * If set to `true`, specifies an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as `http://<alias>.awsapps.com`. By default, this property is set to `false`.
   *
   * After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CreateAlias?: Value<boolean>;
  /**
   * Whether to enable single sign-on for a directory. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableSso?: Value<boolean>;
  /**
   * The NetBIOS name of the directory, such as `CORP`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[^/:*?"<>|.]+[^/:*?"<>|]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShortName?: Value<string>;
  /**
   * The fully qualified name for the directory, such as `corp.example.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^([a-zA-Z0-9]+[.-])+([a-zA-Z0-9])+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The password for the directory administrator. The directory creation process creates a directory administrator account with the user name `Administrator` and this password.
   *
   * If you need to change the password for the administrator account, see the [ResetUserPassword](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html) API call in the _AWS Directory Service API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `(?=^.{8,64}$)((?=.*d)(?=.*[A-Z])(?=.*[a-z])|(?=.*d)(?=.*[^A-Za-z0-9s])(?=.*[a-z])|(?=.*[^A-Za-z0-9s])(?=.*[A-Z])(?=.*[a-z])|(?=.*d)(?=.*[A-Z])(?=.*[^A-Za-z0-9s]))^.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Password?: Value<string>;
}

/**
 * The `AWS::DirectoryService::SimpleAD` resource specifies an AWS Directory Service Simple Active Directory (Simple AD) in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. Simple AD is a Microsoft Active Directory–compatible directory. For more information, see [Simple Active Directory](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html) in the _AWS Directory Service Admin Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-simplead.html}
 */
export interface DirectoryServiceSimpleADResource {
  Type: 'AWS::DirectoryService::SimpleAD';
  Properties: DirectoryServiceSimpleADProperties;
}
