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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html}
 **/
export interface Route53RecordSetGroupGeoLocation {
  ContinentCode?: Value<string>;
  CountryCode?: Value<string>;
  SubdivisionCode?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrroutingconfig.html}
 **/
export interface Route53RecordSetGroupCidrRoutingConfig {
  CollectionId: Value<string>;
  LocationName: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html}
 **/
export interface Route53RecordSetGroupRecordSet {
  AliasTarget?: Route53RecordSetGroupAliasTarget;
  CidrRoutingConfig?: Route53RecordSetGroupCidrRoutingConfig;
  Failover?: Value<string>;
  GeoLocation?: Route53RecordSetGroupGeoLocation;
  HealthCheckId?: Value<string>;
  HostedZoneId?: Value<string>;
  HostedZoneName?: Value<string>;
  MultiValueAnswer?: Value<boolean>;
  Name: Value<string>;
  Region?: Value<string>;
  ResourceRecords?: List<Value<string>>;
  SetIdentifier?: Value<string>;
  TTL?: Value<string>;
  Type: Value<string>;
  Weight?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html}
 **/
export interface Route53RecordSetGroupAliasTarget {
  DNSName: Value<string>;
  EvaluateTargetHealth?: Value<boolean>;
  HostedZoneId: Value<string>;
}
export interface Route53RecordSetGroupProperties {
  /**
   * _Optional:_ Any comments you want to include about a change batch request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The ID of the hosted zone that you want to create records in.
   *
   * Specify either `HostedZoneName` or `HostedZoneId`, but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HostedZoneId?: Value<string>;
  /**
   * The name of the hosted zone that you want to create records in. You must include a trailing dot (for example, `www.example.com.`) as part of the `HostedZoneName`.
   *
   * When you create a stack using an `AWS::Route53::RecordSet` that specifies `HostedZoneName`, AWS CloudFormation attempts to find a hosted zone whose name matches the `HostedZoneName`. If AWS CloudFormation can't find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.
   *
   * Specify either `HostedZoneName` or `HostedZoneId`, but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HostedZoneName?: Value<string>;
  /**
   * A complex type that contains one `RecordSet` element for each record that you want to create.
   *
   * _Required_: No
   *
   * _Type_: List of [RecordSet](aws-properties-route53-recordset-1.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordSets?: List<Route53RecordSetGroupRecordSet>;
}

/**
 * A complex type that contains an optional comment, the name and ID of the hosted zone that you want to make changes in, and values for the records that you want to create.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html}
 */
export interface Route53RecordSetGroupResource {
  Type: 'AWS::Route53::RecordSetGroup';
  Properties: Route53RecordSetGroupProperties;
}
