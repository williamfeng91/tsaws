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
 * An array of key-value pairs to apply to this resource.
 *
 * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-capacityreservation-tagspecification.html}
 **/
export interface EC2CapacityReservationTagSpecification {
  /**
   * The type of resource to tag. Specify `capacity-reservation`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `capacity-reservation | capacity-reservation-fleet | carrier-gateway | client-vpn-endpoint | coip-pool | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-gpu | elastic-ip | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-resource-discovery | ipam-resource-discovery-association | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-route-table-virtual-interface-group-association | local-gateway-route-table-vpc-association | local-gateway-virtual-interface | local-gateway-virtual-interface-group | natgateway | network-acl | network-insights-access-scope | network-insights-access-scope-analysis | network-insights-analysis | network-insights-path | network-interface | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-filter-rule | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | verified-access-endpoint | verified-access-group | verified-access-instance | verified-access-policy | verified-access-trust-provider | volume | vpc | vpc-block-public-access-exclusion | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-connection-device-type | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-flow-log | vpc-peering-connection | vpn-connection | vpn-connection-device-type | vpn-gateway`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceType?: Value<string>;
  /**
   * The tags to apply to the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}
export interface EC2CapacityReservationProperties {
  /**
   * Indicates the tenancy of the Capacity Reservation. A Capacity Reservation can have one of the following tenancy settings:
   */
  Tenancy?: Value<string>;
  /**
   * Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:
   */
  EndDateType?: Value<string>;
  /**
   * The tags to apply to the Capacity Reservation during launch.
   *
   * _Required_: No
   *
   * _Type_: List of [TagSpecification](aws-properties-ec2-capacityreservation-tagspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagSpecifications?: List<EC2CapacityReservationTagSpecification>;
  /**
   * The Availability Zone in which to create the Capacity Reservation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZone: Value<string>;
  /**
   * The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to `expired` when it reaches its end date and time.
   *
   * You must provide an `EndDate` value if `EndDateType` is `limited`. Omit `EndDate` if `EndDateType` is `unlimited`.
   *
   * If the `EndDateType` is `limited`, the Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndDate?: Value<string>;
  /**
   * Indicates whether the Capacity Reservation supports EBS-optimized instances. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS- optimized instance.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EbsOptimized?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws([a-z-]+)?:outposts:[a-zd-]+:d{12}:outpost/op-[a-f0-9]{17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutPostArn?: Value<string>;
  /**
   * The number of instances for which to reserve capacity.
   *
   * Valid range: 1 - 1000
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceCount: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. For more information, see [ Capacity Reservations for cluster placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html) in the _Amazon EC2 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws([a-z-]+)?:ec2:[a-zd-]+:d{12}:placement-group/([^s].+[^s]){1,255}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PlacementGroupArn?: Value<string>;
  /**
   * The type of operating system for which to reserve capacity.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Linux with SQL Server Enterprise | Linux with SQL Server Standard | Linux with SQL Server Web | Linux/UNIX | Red Hat Enterprise Linux | RHEL with HA | RHEL with HA and SQL Server Enterprise | RHEL with HA and SQL Server Standard | RHEL with SQL Server Enterprise | RHEL with SQL Server Standard | RHEL with SQL Server Web | SUSE Linux | Windows | Windows with SQL Server | Windows with SQL Server Enterprise | Windows with SQL Server Standard | Windows with SQL Server Web`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstancePlatform: Value<string>;
  /**
   * The instance type for which to reserve capacity. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
  /**
   * _Deprecated._
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EphemeralStorage?: Value<boolean>;
  /**
   * Indicates the type of instance launches that the Capacity Reservation accepts. The options include:
   */
  InstanceMatchCriteria?: Value<string>;
}

/**
 * Creates a new Capacity Reservation with the specified attributes. For more information, see [Capacity Reservations](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) in the _Amazon EC2 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-capacityreservation.html}
 */
export interface EC2CapacityReservationResource {
  Type: 'AWS::EC2::CapacityReservation';
  Properties: EC2CapacityReservationProperties;
}
