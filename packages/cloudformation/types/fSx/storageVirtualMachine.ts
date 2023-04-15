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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration.html}
 **/
export interface FSxStorageVirtualMachineSelfManagedActiveDirectoryConfiguration {
  FileSystemAdministratorsGroup?: Value<string>;
  UserName?: Value<string>;
  DomainName?: Value<string>;
  OrganizationalUnitDistinguishedName?: Value<string>;
  DnsIps?: List<Value<string>>;
  Password?: Value<string>;
}

/**
 * Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS client accessing the file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html}
 **/
export interface FSxStorageVirtualMachineActiveDirectoryConfiguration {
  /**
   * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedActiveDirectoryConfiguration](aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelfManagedActiveDirectoryConfiguration?: FSxStorageVirtualMachineSelfManagedActiveDirectoryConfiguration;
  /**
   * The NetBIOS name of the Active Directory computer object that will be created for your SVM.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `15`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,255}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetBiosName?: Value<string>;
}
export interface FSxStorageVirtualMachineProperties {
  /**
   * Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's `fsxadmin` user to manage the SVM. For more information, see [ Managing SVMs using the NetApp ONTAP CLI](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-resources-ontap-apps.html#vsadmin-ontap-cli) in the _FSx for ONTAP User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SvmAdminPassword?: Value<string>;
  /**
   * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
   *
   * _Required_: No
   *
   * _Type_: [ActiveDirectoryConfiguration](aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveDirectoryConfiguration?: FSxStorageVirtualMachineActiveDirectoryConfiguration;
  /**
   * The security style of the root volume of the SVM. Specify one of the following values:
   */
  RootVolumeSecurityStyle?: Value<string>;
  /**
   * Specifies the FSx for ONTAP file system on which to create the SVM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemId: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the SVM.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `47`
   *
   * _Pattern_: `^[^u0000u0085u2028u2029rn]{1,47}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html}
 */
export interface FSxStorageVirtualMachineResource {
  Type: 'AWS::FSx::StorageVirtualMachine';
  Properties: FSxStorageVirtualMachineProperties;
}
