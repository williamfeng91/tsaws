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

export interface EC2SecurityGroupIngressProperties {
  CidrIp?: Value<string>;
  CidrIpv6?: Value<string>;
  Description?: Value<string>;
  FromPort?: Value<number>;
  GroupId?: Value<string>;
  GroupName?: Value<string>;
  IpProtocol: Value<string>;
  SourcePrefixListId?: Value<string>;
  SourceSecurityGroupId?: Value<string>;
  SourceSecurityGroupName?: Value<string>;
  SourceSecurityGroupOwnerId?: Value<string>;
  ToPort?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-ingress.html}
 */
export interface EC2SecurityGroupIngressResource {
  Type: 'AWS::EC2::SecurityGroupIngress';
  Properties: EC2SecurityGroupIngressProperties;
}
