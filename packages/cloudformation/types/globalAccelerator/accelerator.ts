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

export interface GlobalAcceleratorAcceleratorProperties {
  /**
   * The IP address type that an accelerator supports. For a standard accelerator, the value can be IPV4 or DUAL_STACK.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DUAL_STACK | IPV4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpAddressType?: Value<string>;
  /**
   * Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose IP addresses from your own pool to use for the accelerator's static IP addresses when you create an accelerator. You can specify one or two addresses, separated by a comma. Do not include the /32 suffix.
   *
   * Only one IP address from each of your IP address ranges can be used for each accelerator. If you specify only one IP address from your IP address range, Global Accelerator assigns a second static IP address for the accelerator from the AWS IP address pool.
   *
   * Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.
   *
   * For more information, see [Bring Your Own IP Addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the _AWS Global Accelerator Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpAddresses?: List<Value<string>>;
  /**
   * Indicates whether the accelerator is enabled. The value is true or false. The default value is true.
   *
   * If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Create tags for an accelerator.
   *
   * For more information, see [Tagging ](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the _AWS Global Accelerator Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the accelerator. The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::GlobalAccelerator::Accelerator` resource is a Global Accelerator resource type that contains information about how you create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Application Load Balancers, Network Load Balancers, and Amazon EC2 instances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html}
 */
export interface GlobalAcceleratorAcceleratorResource {
  Type: 'AWS::GlobalAccelerator::Accelerator';
  Properties: GlobalAcceleratorAcceleratorProperties;
}
