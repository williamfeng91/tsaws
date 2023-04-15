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

export interface SESDedicatedIpPoolProperties {
  /**
   * The name of the dedicated IP pool that the IP address is associated with.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PoolName?: Value<string>;
  /**
   * The type of scaling mode.
   *
   * The following options are available:
   */
  ScalingMode?: Value<string>;
}

/**
 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your AWS account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
 *
 * **Important**
 *
 * You can't delete dedicated IP pools that have a `STANDARD` scaling mode and one or more dedicated IP addresses. This constraint doesn't apply to dedicated IP pools that have a `MANAGED` scaling mode.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html}
 */
export interface SESDedicatedIpPoolResource {
  Type: 'AWS::SES::DedicatedIpPool';
  Properties: SESDedicatedIpPoolProperties;
}
