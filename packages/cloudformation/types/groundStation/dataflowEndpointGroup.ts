/**
 * Supported regions:
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains information such as socket address and name that defines an endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html}
 **/
export interface GroundStationDataflowEndpointGroupDataflowEndpoint {
  /**
   * The address and port of an endpoint.
   *
   * _Required_: No
   *
   * _Type_: [SocketAddress](aws-properties-groundstation-dataflowendpointgroup-socketaddress.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: GroundStationDataflowEndpointGroupSocketAddress;
  /**
   * The endpoint name.
   *
   * When listing available contacts for a satellite, Ground Station searches for a dataflow endpoint whose name matches the value specified by the dataflow endpoint config of the selected mission profile. If no matching dataflow endpoints are found then Ground Station will not display any available contacts for the satellite.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. Valid values are between 1400 and 1500. A default value of 1500 is used if not set.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mtu?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html}
 **/
export interface GroundStationDataflowEndpointGroupRangedConnectionDetails {
  SocketAddress?: GroundStationDataflowEndpointGroupRangedSocketAddress;
  Mtu?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html}
 **/
export interface GroundStationDataflowEndpointGroupAwsGroundStationAgentEndpoint {
  AgentStatus?: Value<string>;
  IngressAddress?: GroundStationDataflowEndpointGroupRangedConnectionDetails;
  AuditResults?: Value<string>;
  Name?: Value<string>;
  EgressAddress?: GroundStationDataflowEndpointGroupConnectionDetails;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html}
 **/
export interface GroundStationDataflowEndpointGroupConnectionDetails {
  SocketAddress?: GroundStationDataflowEndpointGroupSocketAddress;
  Mtu?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html}
 **/
export interface GroundStationDataflowEndpointGroupRangedSocketAddress {
  PortRange?: GroundStationDataflowEndpointGroupIntegerRange;
  Name?: Value<string>;
}

/**
 * The security details and endpoint information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html}
 **/
export interface GroundStationDataflowEndpointGroupEndpointDetails {
  /**
   * Information about the endpoint such as name and the endpoint address.
   *
   * _Required_: No
   *
   * _Type_: [DataflowEndpoint](aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint?: GroundStationDataflowEndpointGroupDataflowEndpoint;
  AwsGroundStationAgentEndpoint?: GroundStationDataflowEndpointGroupAwsGroundStationAgentEndpoint;
  /**
   * The role ARN, and IDs for security groups and subnets.
   *
   * _Required_: No
   *
   * _Type_: [SecurityDetails](aws-properties-groundstation-dataflowendpointgroup-securitydetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityDetails?: GroundStationDataflowEndpointGroupSecurityDetails;
}

/**
 * Information about IAM roles, subnets, and security groups needed for this DataflowEndpointGroup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-securitydetails.html}
 **/
export interface GroundStationDataflowEndpointGroupSecurityDetails {
  /**
   * The subnet Ids of the security details, such as `subnet-12345678`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * The security group Ids of the security role, such as `sg-1234567890abcdef0`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The ARN of a role which Ground Station has permission to assume, such as `arn:aws:iam::1234567890:role/DataDeliveryServiceRole`.
   *
   * Ground Station will assume this role and create an ENI in your VPC on the specified subnet upon creation of a dataflow endpoint group. This ENI is used as the ingress/egress point for data streamed during a satellite contact.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The address of the endpoint, such as `192.168.1.1`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-socketaddress.html}
 **/
export interface GroundStationDataflowEndpointGroupSocketAddress {
  /**
   * The port of the endpoint, such as `55888`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The name of the endpoint, such as `Endpoint 1`.
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-dataflowendpointgroup-integerrange.html}
 **/
export interface GroundStationDataflowEndpointGroupIntegerRange {
  Minimum?: Value<number>;
  Maximum?: Value<number>;
}
export interface GroundStationDataflowEndpointGroupProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactPostPassDurationSeconds?: Value<number>;
  /**
   * List of Endpoint Details, containing address and port for each endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-groundstation-dataflowendpointgroup-endpointdetails.md) of [EndpointDetails](aws-properties-groundstation-dataflowendpointgroup-endpointdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointDetails: List<GroundStationDataflowEndpointGroupEndpointDetails>;
  /**
   * Tags assigned to a resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactPrePassDurationSeconds?: Value<number>;
}

/**
 * Creates a Dataflow Endpoint Group request.
 *
 * Dataflow endpoint groups contain a list of endpoints. When the name of a dataflow endpoint group is specified in a mission profile, the Ground Station service will connect to the endpoints and flow data during a contact.
 *
 * For more information about dataflow endpoint groups, see [Dataflow Endpoint Groups](https://docs.aws.amazon.com/ground-station/latest/ug/dataflowendpointgroups.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html}
 */
export interface GroundStationDataflowEndpointGroupResource {
  Type: 'AWS::GroundStation::DataflowEndpointGroup';
  Properties: GroundStationDataflowEndpointGroupProperties;
}
