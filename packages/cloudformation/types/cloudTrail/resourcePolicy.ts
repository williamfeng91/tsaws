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

export interface CloudTrailResourcePolicyProperties {
  /**
   * The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. The following is the format of a resource ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9._/-:]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceArn: Value<string>;
  /**
   * A JSON-formatted string for an AWS resource-based policy.
   *
   * The following are requirements for the resource policy:
   */
  ResourcePolicy: { [key: string]: any };
}

/**
 * Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of AWS. For more information about resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the _CloudTrail User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html}
 */
export interface CloudTrailResourcePolicyResource {
  Type: 'AWS::CloudTrail::ResourcePolicy';
  Properties: CloudTrailResourcePolicyProperties;
}
