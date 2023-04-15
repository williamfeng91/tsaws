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
 * Specifies the settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html}
 **/
export interface RDSDBProxyTargetGroupConnectionPoolConfigurationInfoFormat {
  /**
   * Controls how actively the proxy closes idle database connections in the connection pool. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group. With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.
   *
   * If you specify this parameter, then you must also include a value for `MaxConnectionsPercent`.
   *
   * Default: The default value is half of the value of `MaxConnectionsPercent`. For example, if `MaxConnectionsPercent` is 80, then the default value of `MaxIdleConnectionsPercent` is 40. If the value of `MaxConnectionsPercent` isn't specified, then for SQL Server, `MaxIdleConnectionsPercent` is 5, and for all other engines, the default is 50.
   *
   * Constraints: Must be between 0 and the value of `MaxConnectionsPercent`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxIdleConnectionsPercent?: Value<number>;
  /**
   * The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *
   * If you specify `MaxIdleConnectionsPercent`, then you must also include a value for this parameter.
   *
   * Default: 10 for RDS for Microsoft SQL Server, and 100 for all other engines
   *
   * Constraints: Must be between 1 and 100.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConnectionsPercent?: Value<number>;
  /**
   * One or more SQL statements for the proxy to run when opening each new database connection. Typically used with `SET` statements to make sure that each connection has identical settings such as time zone and character set. For multiple statements, use semicolons as the separator. You can also include multiple variables in a single `SET` statement, such as `SET x=1, y=2`.
   *
   * Default: no initialization query
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitQuery?: Value<string>;
  /**
   * The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions.
   *
   * Default: 120
   *
   * Constraints: between 1 and 3600, or 0 representing unlimited
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionBorrowTimeout?: Value<number>;
  /**
   * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. Including an item in the list exempts that class of SQL operations from the pinning behavior.
   *
   * Default: no session pinning filters
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionPinningFilters?: List<Value<string>>;
}
export interface RDSDBProxyTargetGroupProperties {
  /**
   * The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBProxyName: Value<string>;
  /**
   * One or more DB instance identifiers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBInstanceIdentifiers?: List<Value<string>>;
  /**
   * The identifier for the target group.
   *
   * Currently, this property must be set to `default`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetGroupName: Value<string>;
  /**
   * Settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup`.
   *
   * _Required_: No
   *
   * _Type_: [ConnectionPoolConfigurationInfoFormat](aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionPoolConfigurationInfo?: RDSDBProxyTargetGroupConnectionPoolConfigurationInfoFormat;
  /**
   * One or more DB cluster identifiers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBClusterIdentifiers?: List<Value<string>>;
}

/**
 * The `AWS::RDS::DBProxyTargetGroup` resource represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.
 *
 * This data type is used as a response element in the `DescribeDBProxyTargetGroups` action.
 *
 * For information about RDS Proxy for Amazon RDS, see [ Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html) in the _Amazon RDS User Guide_.
 *
 * For information about RDS Proxy for Amazon Aurora, see [ Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html) in the _Amazon Aurora User Guide_.
 *
 * For a sample template that creates a DB proxy and registers a DB instance, see [ Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#aws-resource-rds-dbproxy--examples) in AWS::RDS::DBProxy.
 *
 * **Note**
 *
 * Limitations apply to RDS Proxy, including DB engine version limitations and AWS Region limitations.
 *
 * For information about limitations that apply to RDS Proxy for Amazon RDS, see [ Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html#rds-proxy.limitations) in the _Amazon RDS User Guide_.
 *
 * For information about that apply to RDS Proxy for Amazon Aurora, see [ Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html#rds-proxy.limitations) in the _Amazon Aurora User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html}
 */
export interface RDSDBProxyTargetGroupResource {
  Type: 'AWS::RDS::DBProxyTargetGroup';
  Properties: RDSDBProxyTargetGroupProperties;
}
