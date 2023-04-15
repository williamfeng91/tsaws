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
 * A structure that is used to specify a connection to create or update.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-connectioninput.html}
 **/
export interface GlueConnectionConnectionInput {
  /**
   * The description of the connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The type of the connection. Currently, these types are supported:
   */
  ConnectionType: Value<string>;
  /**
   * A list of criteria that can be used in selecting this connection.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchCriteria?: List<Value<string>>;
  /**
   * A map of physical connection requirements, such as virtual private cloud (VPC) and `SecurityGroup`, that are needed to successfully make this connection.
   *
   * _Required_: No
   *
   * _Type_: [PhysicalConnectionRequirements](aws-properties-glue-connection-physicalconnectionrequirements.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhysicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
  /**
   * These key-value pairs define parameters for the connection.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionProperties?: { [key: string]: any };
  /**
   * The name of the connection. Connection will not function as expected without a name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Specifies the physical requirements for a connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-connection-physicalconnectionrequirements.html}
 **/
export interface GlueConnectionPhysicalConnectionRequirements {
  /**
   * The connection's Availability Zone. This field is redundant because the specified subnet implies the Availability Zone to be used. Currently the field must be populated, but it will be deprecated in the future.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The security group ID list used by the connection.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIdList?: List<Value<string>>;
  /**
   * The subnet ID used by the connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId?: Value<string>;
}
export interface GlueConnectionProperties {
  /**
   * The connection that you want to create.
   *
   * _Required_: Yes
   *
   * _Type_: [ConnectionInput](aws-properties-glue-connection-connectioninput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionInput: GlueConnectionConnectionInput;
  /**
   * The ID of the data catalog to create the catalog object in. Currently, this should be the AWS account ID.
   *
   * To specify the account ID, you can use the `Ref` intrinsic function with the `AWS::AccountId` pseudo parameter. For example: `!Ref AWS::AccountId`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
}

/**
 * The `AWS::Glue::Connection` resource specifies an AWS Glue connection to a data source. For more information, see [Adding a Connection to Your Data Store](https://docs.aws.amazon.com/glue/latest/dg/populate-add-connection.html) and [Connection Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-Connection) in the _AWS Glue Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html}
 */
export interface GlueConnectionResource {
  Type: 'AWS::Glue::Connection';
  Properties: GlueConnectionProperties;
}
