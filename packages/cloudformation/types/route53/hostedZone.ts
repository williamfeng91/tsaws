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
 * A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the `HostedZoneConfig` and `Comment` elements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html}
 **/
export interface Route53HostedZoneHostedZoneConfig {
  /**
   * Any comments that you want to include about the hosted zone.
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
}

/**
 * A complex type that contains information about a configuration for DNS query logging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html}
 **/
export interface Route53HostedZoneQueryLoggingConfig {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsLogGroupArn: Value<string>;
}

/**
 * _Private hosted zones only:_ A complex type that contains information about an Amazon VPC. Route 53 Resolver uses the records in the private hosted zone to route traffic in that VPC.
 *
 * **Note**
 *
 * For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html}
 **/
export interface Route53HostedZoneVPC {
  /**
   * _Private hosted zones only:_ The region that an Amazon VPC was created in.
   *
   * For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `af-south-1 | ap-east-1 | ap-northeast-1 | ap-northeast-2 | ap-northeast-3 | ap-south-1 | ap-southeast-1 | ap-southeast-2 | ap-southeast-3 | ca-central-1 | cn-north-1 | eu-central-1 | eu-north-1 | eu-south-1 | eu-west-1 | eu-west-2 | eu-west-3 | me-south-1 | sa-east-1 | us-east-1 | us-east-2 | us-gov-east-1 | us-gov-west-1 | us-iso-east-1 | us-iso-west-1 | us-isob-east-1 | us-west-1 | us-west-2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VPCRegion: Value<string>;
  /**
   * _Private hosted zones only:_ The ID of an Amazon VPC.
   *
   * For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VPCId: Value<string>;
}

/**
 * A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html}
 **/
export interface Route53HostedZoneHostedZoneTag {
  /**
   * The value of `Value` depends on the operation that you want to perform:
   */
  Value: Value<string>;
  /**
   * The value of `Key` depends on the operation that you want to perform:
   */
  Key: Value<string>;
}
export interface Route53HostedZoneProperties {
  /**
   * Adds, edits, or deletes tags for a health check or a hosted zone.
   *
   * For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the _ AWS Billing and Cost Management User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [HostedZoneTag](aws-properties-route53-hostedzone-hostedzonetag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedZoneTags?: List<Route53HostedZoneHostedZoneTag>;
  /**
   * _Private hosted zones:_ A complex type that contains information about the VPCs that are associated with the specified hosted zone.
   *
   * For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.
   *
   * _Required_: No
   *
   * _Type_: List of [VPC](aws-properties-route53-hostedzone-vpc.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VPCs?: List<Route53HostedZoneVPC>;
  /**
   * A complex type that contains an optional comment.
   *
   * If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.
   *
   * _Required_: No
   *
   * _Type_: [HostedZoneConfig](aws-properties-route53-hostedzone-hostedzoneconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedZoneConfig?: Route53HostedZoneHostedZoneConfig;
  /**
   * Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
   *
   * DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
   */
  QueryLoggingConfig?: Route53HostedZoneQueryLoggingConfig;
  /**
   * The name of the domain. Specify a fully qualified domain name, for example, _www.example.com_. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats _www.example.com_ (without a trailing dot) and _www.example.com._ (with a trailing dot) as identical.
   *
   * If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).
 *
 * **Important**
 *
 * You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.
 *
 * For more information about charges for hosted zones, see [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
 *
 * Note the following:
 *
 * When you submit a `CreateHostedZone` request, the initial status of the hosted zone is `PENDING`. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to `INSYNC`.
 *
 * The `CreateHostedZone` request requires the caller to have an `ec2:DescribeVpcs` permission.
 *
 * **Note**
 *
 * When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of AWS Regions. Each AWS account is scoped to one partition.
 *
 * The following are the supported partitions:
 *
 * `aws` - AWS Regions
 *
 * `aws-cn` - China Regions
 *
 * `aws-us-gov` - AWS GovCloud (US) Region
 *
 * For more information, see [Access Management](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _ AWS General Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 */
export interface Route53HostedZoneResource {
  Type: 'AWS::Route53::HostedZone';
  Properties: Route53HostedZoneProperties;
}
