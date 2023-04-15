/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The configuration for a license service that is associated with a studio resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html}
 **/
export interface NimbleStudioStudioComponentLicenseServiceConfiguration {
  /**
   * The endpoint of the license service that is accessed by the studio component resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: Value<string>;
}

/**
 * A parameter for a studio component script, in the form of a key-value pair.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html}
 **/
export interface NimbleStudioStudioComponentScriptParameterKeyValue {
  /**
   * A script parameter value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * A script parameter key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html}
 **/
export interface NimbleStudioStudioComponentActiveDirectoryConfiguration {
  /**
   * The directory ID of the AWS Directory Service for Microsoft Active Directory to access using this studio component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryId?: Value<string>;
  /**
   * The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnitDistinguishedName?: Value<string>;
  /**
   * A collection of custom attributes for an Active Directory computer.
   *
   * _Required_: No
   *
   * _Type_: List of [ActiveDirectoryComputerAttribute](aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputerAttributes?: List<NimbleStudioStudioComponentActiveDirectoryComputerAttribute>;
}

/**
 * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html}
 **/
export interface NimbleStudioStudioComponentActiveDirectoryComputerAttribute {
  /**
   * The value for the LDAP attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name for the LDAP attribute.
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
 * The configuration for a render farm that is associated with a studio resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html}
 **/
export interface NimbleStudioStudioComponentComputeFarmConfiguration {
  /**
   * The name of an Active Directory user that is used on ComputeFarm worker instances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveDirectoryUser?: Value<string>;
  /**
   * The endpoint of the ComputeFarm that is accessed by the studio component resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: Value<string>;
}

/**
 * The configuration for a shared file storage system that is associated with a studio resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html}
 **/
export interface NimbleStudioStudioComponentSharedFileSystemConfiguration {
  /**
   * The endpoint of the shared file system that is accessed by the studio component resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: Value<string>;
  /**
   * The unique identifier for a file system.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileSystemId?: Value<string>;
  /**
   * The name of the file share.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShareName?: Value<string>;
  /**
   * The mount location for a shared file system on a Windows virtual workstation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WindowsMountDrive?: Value<string>;
  /**
   * The mount location for a shared file system on a Linux virtual workstation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinuxMountPoint?: Value<string>;
}

/**
 * The configuration of the studio component, based on component type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html}
 **/
export interface NimbleStudioStudioComponentStudioComponentConfiguration {
  /**
   * The configuration for a license service that is associated with a studio resource.
   *
   * _Required_: No
   *
   * _Type_: [LicenseServiceConfiguration](aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LicenseServiceConfiguration?: NimbleStudioStudioComponentLicenseServiceConfiguration;
  /**
   * The configuration for a render farm that is associated with a studio resource.
   *
   * _Required_: No
   *
   * _Type_: [ComputeFarmConfiguration](aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComputeFarmConfiguration?: NimbleStudioStudioComponentComputeFarmConfiguration;
  /**
   * The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
   *
   * _Required_: No
   *
   * _Type_: [ActiveDirectoryConfiguration](aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveDirectoryConfiguration?: NimbleStudioStudioComponentActiveDirectoryConfiguration;
  /**
   * The configuration for a shared file storage system that is associated with a studio resource.
   *
   * _Required_: No
   *
   * _Type_: [SharedFileSystemConfiguration](aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SharedFileSystemConfiguration?: NimbleStudioStudioComponentSharedFileSystemConfiguration;
}

/**
 * Initialization scripts for studio components.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html}
 **/
export interface NimbleStudioStudioComponentStudioComponentInitializationScript {
  /**
   * The initialization script.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Script?: Value<string>;
  /**
   * The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchProfileProtocolVersion?: Value<string>;
  /**
   * The platform of the initialization script, either Windows or Linux.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Platform?: Value<string>;
  /**
   * The method to use when running the initialization script.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunContext?: Value<string>;
}
export interface NimbleStudioStudioComponentProperties {
  /**
   * The configuration of the studio component, based on component type.
   *
   * _Required_: No
   *
   * _Type_: [StudioComponentConfiguration](aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: NimbleStudioStudioComponentStudioComponentConfiguration;
  /**
   * A human-readable description for the studio component resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The EC2 security groups that control access to the studio component.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2SecurityGroupIds?: List<Value<string>>;
  /**
   * Initialization scripts for studio components.
   *
   * _Required_: No
   *
   * _Type_: List of [StudioComponentInitializationScript](aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitializationScripts?: List<NimbleStudioStudioComponentStudioComponentInitializationScript>;
  /**
   * A friendly name for the studio component resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Parameters for the studio component scripts.
   *
   * _Required_: No
   *
   * _Type_: List of [ScriptParameterKeyValue](aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScriptParameters?: List<NimbleStudioStudioComponentScriptParameterKeyValue>;
  /**
   * The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StudioId: Value<string>;
  /**
   * The specific subtype of a studio component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subtype?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The type of the studio component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  RuntimeRoleArn?: Value<string>;
  SecureInitializationRoleArn?: Value<string>;
}

/**
 * The `AWS::NimbleStudio::StudioComponent` resource represents a network resource that is used by a studio's users and workflows. A typical studio contains studio components for the following: a render farm, an Active Directory, a licensing service, and a shared file system.
 *
 * Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.
 *
 * A studio component also has a set of initialization scripts, which are returned by `GetLaunchProfileInitialization`. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how studio resources are configured on a streaming session.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html}
 */
export interface NimbleStudioStudioComponentResource {
  Type: 'AWS::NimbleStudio::StudioComponent';
  Properties: NimbleStudioStudioComponentProperties;
}
