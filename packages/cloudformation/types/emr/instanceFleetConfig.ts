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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-configuration.html}
 **/
export interface EMRInstanceFleetConfigConfiguration {
  Classification?: Value<string>;
  ConfigurationProperties?: { [key: string]: Value<string> };
  Configurations?: List<EMRInstanceFleetConfigConfiguration>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-spotprovisioningspecification.html}
 **/
export interface EMRInstanceFleetConfigSpotProvisioningSpecification {
  AllocationStrategy?: Value<string>;
  BlockDurationMinutes?: Value<number>;
  TimeoutAction: Value<string>;
  TimeoutDurationMinutes: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ebsconfiguration.html}
 **/
export interface EMRInstanceFleetConfigEbsConfiguration {
  EbsBlockDeviceConfigs?: List<EMRInstanceFleetConfigEbsBlockDeviceConfig>;
  EbsOptimized?: Value<boolean>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ondemandprovisioningspecification.html}
 **/
export interface EMRInstanceFleetConfigOnDemandProvisioningSpecification {
  AllocationStrategy: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-volumespecification.html}
 **/
export interface EMRInstanceFleetConfigVolumeSpecification {
  Iops?: Value<number>;
  SizeInGB: Value<number>;
  VolumeType: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-instancetypeconfig.html}
 **/
export interface EMRInstanceFleetConfigInstanceTypeConfig {
  BidPrice?: Value<string>;
  BidPriceAsPercentageOfOnDemandPrice?: Value<number>;
  Configurations?: List<EMRInstanceFleetConfigConfiguration>;
  CustomAmiId?: Value<string>;
  EbsConfiguration?: EMRInstanceFleetConfigEbsConfiguration;
  InstanceType: Value<string>;
  WeightedCapacity?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-instancefleetprovisioningspecifications.html}
 **/
export interface EMRInstanceFleetConfigInstanceFleetProvisioningSpecifications {
  OnDemandSpecification?: EMRInstanceFleetConfigOnDemandProvisioningSpecification;
  SpotSpecification?: EMRInstanceFleetConfigSpotProvisioningSpecification;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-instancefleetconfig-ebsblockdeviceconfig.html}
 **/
export interface EMRInstanceFleetConfigEbsBlockDeviceConfig {
  VolumeSpecification: EMRInstanceFleetConfigVolumeSpecification;
  VolumesPerInstance?: Value<number>;
}
export interface EMRInstanceFleetConfigProperties {
  ClusterId: Value<string>;
  InstanceFleetType: Value<string>;
  InstanceTypeConfigs?: List<EMRInstanceFleetConfigInstanceTypeConfig>;
  LaunchSpecifications?: EMRInstanceFleetConfigInstanceFleetProvisioningSpecifications;
  Name?: Value<string>;
  TargetOnDemandCapacity?: Value<number>;
  TargetSpotCapacity?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-instancefleetconfig.html}
 */
export interface EMRInstanceFleetConfigResource {
  Type: 'AWS::EMR::InstanceFleetConfig';
  Properties: EMRInstanceFleetConfigProperties;
}
