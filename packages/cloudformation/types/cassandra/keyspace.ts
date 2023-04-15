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
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface CassandraKeyspaceProperties {
  /**
   * The name of the keyspace to be created. The keyspace name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the keyspace name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * _Length constraints:_ Minimum length of 3. Maximum length of 255.
   *
   * _Pattern:_ `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyspaceName?: Value<string>;
  /**
   * A list of key-value pair tags to be attached to the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * You can use the `AWS::Cassandra::Keyspace` resource to create a new keyspace in Amazon Keyspaces (for Apache Cassandra). For more information, see [Create a keyspace and a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.ddl.html) in the _Amazon Keyspaces Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html}
 */
export interface CassandraKeyspaceResource {
  Type: 'AWS::Cassandra::Keyspace';
  Properties: CassandraKeyspaceProperties;
}
