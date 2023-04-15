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

export interface RDSDBSecurityGroupIngressProperties {
  CIDRIP?: Value<string>;
  DBSecurityGroupName: Value<string>;
  EC2SecurityGroupId?: Value<string>;
  EC2SecurityGroupName?: Value<string>;
  EC2SecurityGroupOwnerId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-security-group-ingress.html}
 */
export interface RDSDBSecurityGroupIngressResource {
  Type: 'AWS::RDS::DBSecurityGroupIngress';
  Properties: RDSDBSecurityGroupIngressProperties;
}
