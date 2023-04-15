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

export interface ServiceDiscoveryInstanceProperties {
  /**
   * A string map that contains the following information for the service that you specify in `ServiceId`:
   */
  InstanceAttributes: { [key: string]: any };
  /**
   * An identifier that you want to associate with the instance. Note the following:
   */
  InstanceId?: Value<string>;
  /**
   * The ID of the service that you want to use for settings for the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceId: Value<string>;
}

/**
 * A complex type that contains information about an instance that AWS Cloud Map creates when you submit a `RegisterInstance` request.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html}
 */
export interface ServiceDiscoveryInstanceResource {
  Type: 'AWS::ServiceDiscovery::Instance';
  Properties: ServiceDiscoveryInstanceProperties;
}
