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
 * Describes an app's data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-datasource.html}
 **/
export interface OpsWorksAppDataSource {
  /**
   * The data source's ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
  /**
   * The database name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * The data source's type, `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, `RdsDbInstance`, or `None`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * Describes an app's SSL configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-sslconfiguration.html}
 **/
export interface OpsWorksAppSslConfiguration {
  /**
   * The contents of the certificate's domain.crt file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate?: Value<string>;
  /**
   * Optional. Can be used to specify an intermediate certificate authority key or client authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Chain?: Value<string>;
  /**
   * The private key; the contents of the certificate's domain.kex file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateKey?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-app-environment.html}
 **/
export interface OpsWorksAppEnvironmentVariable {
  Key: Value<string>;
  Secure?: Value<boolean>;
  Value: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opsworks-stack-source.html}
 **/
export interface OpsWorksAppSource {
  Password?: Value<string>;
  Revision?: Value<string>;
  SshKey?: Value<string>;
  Type?: Value<string>;
  Url?: Value<string>;
  Username?: Value<string>;
}
export interface OpsWorksAppProperties {
  /**
   * A `Source` object that specifies the app repository.
   *
   * _Required_: No
   *
   * _Type_: [Source](aws-properties-opsworks-stack-source-1.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppSource?: OpsWorksAppSource;
  /**
   * One or more user-defined key/value pairs to be added to the stack attributes.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: Value<string> };
  /**
   * The app's data source.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSource](aws-properties-opsworks-app-datasource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSources?: List<OpsWorksAppDataSource>;
  /**
   * A description of the app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The app virtual host settings, with multiple domains separated by commas. For example: `'www.example.com, example.com'`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domains?: List<Value<string>>;
  /**
   * Whether to enable SSL for the app.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableSsl?: Value<boolean>;
  /**
   * An array of `EnvironmentVariable` objects that specify environment variables to be associated with the app. After you deploy the app, these variables are defined on the associated app server instance. For more information, see [ Environment Variables](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment).
   *
   * There is no specific limit on the number of environment variables. However, the size of the associated data structure - which includes the variables' names, values, and protected flag values - cannot exceed 20 KB. This limit should accommodate most if not all use cases. Exceeding it will cause an exception with the message, "Environment: is too large (maximum is 20KB)."
   *
   * If you have specified one or more environment variables, you cannot modify the stack's Chef version.
   *
   * _Required_: No
   *
   * _Type_: List of [EnvironmentVariable](aws-properties-opsworks-app-environment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: List<OpsWorksAppEnvironmentVariable>;
  /**
   * The app name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The app's short name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Shortname?: Value<string>;
  /**
   * An `SslConfiguration` object with the SSL configuration.
   *
   * _Required_: No
   *
   * _Type_: [SslConfiguration](aws-properties-opsworks-app-sslconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslConfiguration?: OpsWorksAppSslConfiguration;
  /**
   * The stack ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StackId: Value<string>;
  /**
   * The app type. Each supported type is associated with a particular layer. For example, PHP applications are associated with a PHP layer. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify `other`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `aws-flow-ruby | java | nodejs | other | php | rails | static`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
}

/**
 * Creates an app for a specified stack. For more information, see [Creating Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html).
 *
 * **Required Permissions**: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-app.html}
 */
export interface OpsWorksAppResource {
  Type: 'AWS::OpsWorks::App';
  Properties: OpsWorksAppProperties;
}
