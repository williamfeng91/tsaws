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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectionsettings.html}
 **/
export interface ElasticLoadBalancingLoadBalancerConnectionSettings {
  IdleTimeout: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-AppCookieStickinessPolicy.html}
 **/
export interface ElasticLoadBalancingLoadBalancerAppCookieStickinessPolicy {
  CookieName: Value<string>;
  PolicyName: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-LBCookieStickinessPolicy.html}
 **/
export interface ElasticLoadBalancingLoadBalancerLBCookieStickinessPolicy {
  CookieExpirationPeriod?: Value<string>;
  PolicyName?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-accessloggingpolicy.html}
 **/
export interface ElasticLoadBalancingLoadBalancerAccessLoggingPolicy {
  EmitInterval?: Value<number>;
  Enabled: Value<boolean>;
  S3BucketName: Value<string>;
  S3BucketPrefix?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-health-check.html}
 **/
export interface ElasticLoadBalancingLoadBalancerHealthCheck {
  HealthyThreshold: Value<string>;
  Interval: Value<string>;
  Target: Value<string>;
  Timeout: Value<string>;
  UnhealthyThreshold: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-connectiondrainingpolicy.html}
 **/
export interface ElasticLoadBalancingLoadBalancerConnectionDrainingPolicy {
  Enabled: Value<boolean>;
  Timeout?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html}
 **/
export interface ElasticLoadBalancingLoadBalancerListeners {
  InstancePort: Value<string>;
  InstanceProtocol?: Value<string>;
  LoadBalancerPort: Value<string>;
  PolicyNames?: List<Value<string>>;
  Protocol: Value<string>;
  SSLCertificateId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-policy.html}
 **/
export interface ElasticLoadBalancingLoadBalancerPolicies {
  Attributes: List<{ [key: string]: any }>;
  InstancePorts?: List<Value<string>>;
  LoadBalancerPorts?: List<Value<string>>;
  PolicyName: Value<string>;
  PolicyType: Value<string>;
}
export interface ElasticLoadBalancingLoadBalancerProperties {
  AccessLoggingPolicy?: ElasticLoadBalancingLoadBalancerAccessLoggingPolicy;
  AppCookieStickinessPolicy?: List<ElasticLoadBalancingLoadBalancerAppCookieStickinessPolicy>;
  AvailabilityZones?: List<Value<string>>;
  ConnectionDrainingPolicy?: ElasticLoadBalancingLoadBalancerConnectionDrainingPolicy;
  ConnectionSettings?: ElasticLoadBalancingLoadBalancerConnectionSettings;
  CrossZone?: Value<boolean>;
  HealthCheck?: ElasticLoadBalancingLoadBalancerHealthCheck;
  Instances?: List<Value<string>>;
  LBCookieStickinessPolicy?: List<ElasticLoadBalancingLoadBalancerLBCookieStickinessPolicy>;
  Listeners: List<ElasticLoadBalancingLoadBalancerListeners>;
  LoadBalancerName?: Value<string>;
  Policies?: List<ElasticLoadBalancingLoadBalancerPolicies>;
  Scheme?: Value<string>;
  SecurityGroups?: List<Value<string>>;
  Subnets?: List<Value<string>>;
  Tags?: List<ResourceTag>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html}
 */
export interface ElasticLoadBalancingLoadBalancerResource {
  Type: 'AWS::ElasticLoadBalancing::LoadBalancer';
  Properties: ElasticLoadBalancingLoadBalancerProperties;
}
