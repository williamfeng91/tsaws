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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html}
 **/
export interface RedshiftServerlessWorkgroupVpcEndpoint {
  /**
   * The VPC identifier that the endpoint is associated with.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcId?: Value<string>;
  /**
   * One or more network interfaces of the endpoint. Also known as an interface endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of [NetworkInterface](aws-properties-redshiftserverless-workgroup-networkinterface.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaces?: List<RedshiftServerlessWorkgroupNetworkInterface>;
  /**
   * The connection endpoint ID for connecting to Amazon Redshift Serverless.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpointId?: Value<string>;
}

/**
 * The collection of computing resources from which an endpoint is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html}
 **/
export interface RedshiftServerlessWorkgroupWorkgroup {
  /**
   * The status of the workgroup.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The creation date of the workgroup.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreationDate?: Value<string>;
  /**
   * The name of the workgroup.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkgroupName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) that links to the workgroup.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkgroupArn?: Value<string>;
  /**
   * The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseCapacity?: Value<number>;
  /**
   * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnhancedVpcRouting?: Value<boolean>;
  /**
   * The unique identifier of the workgroup.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkgroupId?: Value<string>;
  /**
   * An array of security group IDs to associate with the workgroup.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * An array of subnet IDs the workgroup is associated with.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The namespace the workgroup is associated with.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NamespaceName?: Value<string>;
  /**
   * The endpoint that is created from the workgroup.
   *
   * _Required_: No
   *
   * _Type_: [Endpoint](aws-properties-redshiftserverless-workgroup-endpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: RedshiftServerlessWorkgroupEndpoint;
  /**
   * An array of parameters to set for advanced control over a database. The options are `auto_mv`, `datestyle`, `enable_case_sensitivity_identifier`, `enable_user_activity_logging`, `query_group`, , `search_path`, and query monitoring metrics that let you define performance boundaries. For more information about query monitoring rules and available metrics, see [ Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless).
   *
   * _Required_: No
   *
   * _Type_: List of [ConfigParameter](aws-properties-redshiftserverless-workgroup-configparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigParameters?: List<RedshiftServerlessWorkgroupConfigParameter>;
  /**
   * A value that specifies whether the workgroup can be accessible from a public network
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PubliclyAccessible?: Value<boolean>;
}

/**
 * Contains information about a network interface in an Amazon Redshift Serverless managed VPC endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html}
 **/
export interface RedshiftServerlessWorkgroupNetworkInterface {
  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIpAddress?: Value<string>;
  /**
   * The availability Zone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone?: Value<string>;
  /**
   * The unique identifier of the subnet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId?: Value<string>;
  /**
   * The unique identifier of the network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceId?: Value<string>;
}

/**
 * A array of parameters to set for more control over a serverless database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html}
 **/
export interface RedshiftServerlessWorkgroupConfigParameter {
  /**
   * The value of the parameter to set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValue?: Value<string>;
  /**
   * The key of the parameter. The options are `datestyle`, `enable_user_activity_logging`, `query_group`, `search_path`, and `max_query_execution_time`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterKey?: Value<string>;
}

/**
 * The VPC endpoint object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html}
 **/
export interface RedshiftServerlessWorkgroupEndpoint {
  /**
   * The DNS address of the VPC endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
  /**
   * An array of `VpcEndpoint` objects.
   *
   * _Required_: No
   *
   * _Type_: List of [VpcEndpoint](aws-properties-redshiftserverless-workgroup-vpcendpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpoints?: List<RedshiftServerlessWorkgroupVpcEndpoint>;
  /**
   * The port that Amazon Redshift Serverless listens on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
}
export interface RedshiftServerlessWorkgroupProperties {
  /**
   * The namespace the workgroup is associated with.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NamespaceName?: Value<string>;
  /**
   * A list of parameters to set for finer control over a database. Available options are `datestyle`, `enable_user_activity_logging`, `query_group`, `search_path`, and `max_query_execution_time`.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfigParameter](aws-properties-redshiftserverless-workgroup-configparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigParameters?: List<RedshiftServerlessWorkgroupConfigParameter>;
  /**
   * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The name of the workgroup.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkgroupName: Value<string>;
  /**
   * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseCapacity?: Value<number>;
  /**
   * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnhancedVpcRouting?: Value<boolean>;
  /**
   * A value that specifies whether the workgroup can be accessible from a public network.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PubliclyAccessible?: Value<boolean>;
  /**
   * A list of security group IDs to associate with the workgroup.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * A list of subnet IDs the workgroup is associated with.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The map of the key-value pairs used to tag the workgroup.
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
 * The collection of compute resources in Amazon Redshift Serverless.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html}
 */
export interface RedshiftServerlessWorkgroupResource {
  Type: 'AWS::RedshiftServerless::Workgroup';
  Properties: RedshiftServerlessWorkgroupProperties;
}
