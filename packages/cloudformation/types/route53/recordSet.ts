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
 * A complex type that contains information about a geographic location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html}
 **/
export interface Route53RecordSetGeoLocation {
  /**
   * For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Route 53 supports the following continent codes:
   */
  ContinentCode?: Value<string>;
  /**
   * For geolocation resource record sets, the two-letter code for a country.
   *
   * Route 53 uses the two-letter country codes that are specified in [ISO standard 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CountryCode?: Value<string>;
  /**
   * For geolocation resource record sets, the two-letter code for a state of the United States. Route 53 doesn't support any other values for `SubdivisionCode`. For a list of state abbreviations, see [Appendix B: Two–Letter State and Possession Abbreviations](https://pe.usps.com/text/pub28/28apb.htm) on the United States Postal Service website.
   *
   * If you specify `subdivisioncode`, you must also specify `US` for `CountryCode`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubdivisionCode?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrroutingconfig.html}
 **/
export interface Route53RecordSetCidrRoutingConfig {
  CollectionId: Value<string>;
  LocationName: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html}
 **/
export interface Route53RecordSetAliasTarget {
  DNSName: Value<string>;
  EvaluateTargetHealth?: Value<boolean>;
  HostedZoneId: Value<string>;
}
export interface Route53RecordSetProperties {
  AliasTarget?: Route53RecordSetAliasTarget;
  CidrRoutingConfig?: Route53RecordSetCidrRoutingConfig;
  Comment?: Value<string>;
  Failover?: Value<string>;
  GeoLocation?: Route53RecordSetGeoLocation;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html}
 */
export interface Route53RecordSetResource {
  Type: 'AWS::Route53::RecordSet';
  Properties: Route53RecordSetProperties;
}
