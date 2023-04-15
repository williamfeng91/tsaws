/**
 * Supported regions:
 * - ap-southeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface OmicsRunGroupProperties {
  /**
   * The group's maximum duration setting in minutes.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxDuration?: Value<number>;
  /**
   * The group's maximum concurrent run setting.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRuns?: Value<number>;
  /**
   * The group's maximum CPU count setting.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCpus?: Value<number>;
  /**
   * Tags for the group.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The group's name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a run group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html}
 */
export interface OmicsRunGroupResource {
  Type: 'AWS::Omics::RunGroup';
  Properties: OmicsRunGroupProperties;
}
