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
 * The `HealthCheckTag` property describes one key-value pair that is associated with an `AWS::Route53::HealthCheck` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html}
 **/
export interface Route53HealthCheckHealthCheckTag {
  /**
   * The value of `Value` depends on the operation that you want to perform:
   */
  Value: Value<string>;
  /**
   * The value of `Key` depends on the operation that you want to perform:
   */
  Key: Value<string>;
}

/**
 * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html}
 **/
export interface Route53HealthCheckAlarmIdentifier {
  /**
   * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
   *
   * For the current list of CloudWatch regions, see [Amazon CloudWatch endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/cw_region.html) in the _Amazon Web Services General Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `af-south-1 | ap-east-1 | ap-northeast-1 | ap-northeast-2 | ap-northeast-3 | ap-south-1 | ap-southeast-1 | ap-southeast-2 | ap-southeast-3 | ca-central-1 | cn-north-1 | cn-northwest-1 | eu-central-1 | eu-north-1 | eu-south-1 | eu-west-1 | eu-west-2 | eu-west-3 | me-south-1 | sa-east-1 | us-east-1 | us-east-2 | us-gov-east-1 | us-gov-west-1 | us-iso-east-1 | us-iso-west-1 | us-isob-east-1 | us-west-1 | us-west-2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
  /**
   * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
   *
   * Route 53 supports CloudWatch alarms with the following features:
   */
  Name: Value<string>;
}

/**
 * A complex type that contains information about the health check.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html}
 **/
export interface Route53HealthCheckHealthCheckConfig {
  /**
   * Specify whether you want Amazon Route 53 to send the value of `FullyQualifiedDomainName` to the endpoint in the `client_hello` message during TLS negotiation. This allows the endpoint to respond to `HTTPS` health check requests with the applicable SSL/TLS certificate.
   *
   * Some endpoints require that `HTTPS` requests include the host name in the `client_hello` message. If you don't enable SNI, the status of the health check will be `SSL alert handshake_failure`. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.
   *
   * The SSL/TLS certificate on your endpoint includes a domain name in the `Common Name` field and possibly several more in the `Subject Alternative Names` field. One of the domain names in the certificate should match the value that you specify for `FullyQualifiedDomainName`. If the endpoint responds to the `client_hello` message with a certificate that does not include the domain name that you specified in `FullyQualifiedDomainName`, a health checker will retry the handshake. In the second attempt, the health checker will omit `FullyQualifiedDomainName` from the `client_hello` message.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableSNI?: Value<boolean>;
  /**
   * (CALCULATED Health Checks Only) A complex type that contains one `ChildHealthCheck` element for each health check that you want to associate with a `CALCULATED` health check.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChildHealthChecks?: List<Value<string>>;
  /**
   * Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint, and to display CloudWatch latency graphs on the **Health Checks** page in the Route 53 console.
   *
   * You can't change the value of `MeasureLatency` after you create a health check.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MeasureLatency?: Value<boolean>;
  /**
   * The port on the endpoint that you want Amazon Route 53 to perform health checks on.
   *
   * Don't specify a value for `Port` when you specify a value for [Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-type) of `CLOUDWATCH_METRIC` or `CALCULATED`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * A complex type that contains one `Region` element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.
   *
   * If you don't specify any regions, Route 53 health checkers automatically performs checks from all of the regions that are listed under **Valid Values**.
   *
   * If you update a health check to remove a region that has been performing health checks, Route 53 will briefly continue to perform checks from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with four different regions).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regions?: List<Value<string>>;
  /**
   * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:
   */
  InsufficientDataHealthStatus?: Value<string>;
  /**
   * If the value of Type is `HTTP_STR_MATCH` or `HTTPS_STR_MATCH`, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy.
   *
   * Route 53 considers case when searching for `SearchString` in the response body.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SearchString?: Value<string>;
  /**
   * The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.
   *
   * You can't change the value of `Type` after you create a health check.
   *
   * You can create the following types of health checks:
   */
  Type: Value<string>;
  /**
   * The path, if any, that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. You can also include query string parameters, for example, `/welcome.html?language=jp&login=y`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcePath?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control.
   *
   * For more information about Route 53 Application Recovery Controller, see [Route 53 Application Recovery Controller Developer Guide.](https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoutingControlArn?: Value<string>;
  /**
   * Amazon Route 53 behavior depends on whether you specify a value for `IPAddress`.
   *
   * **If you specify a value for** `IPAddress`:
   *
   * Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of `FullyQualifiedDomainName` in the `Host` header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.
   *
   * When Route 53 checks the health of an endpoint, here is how it constructs the `Host` header:
   */
  FullyQualifiedDomainName?: Value<string>;
  /**
   * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Inverted?: Value<boolean>;
  /**
   * The number of child health checks that are associated with a `CALCULATED` health check that Amazon Route 53 must consider healthy for the `CALCULATED` health check to be considered healthy. To specify the child health checks that you want to associate with a `CALCULATED` health check, use the [ChildHealthChecks](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-ChildHealthChecks) element.
   *
   * Note the following:
   */
  HealthThreshold?: Value<number>;
  /**
   * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health check request. Each Route 53 health checker makes requests at this interval.
   *
   * You can't change the value of `RequestInterval` after you create a health check.
   *
   * If you don't specify a value for `RequestInterval`, the default value is `30` seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RequestInterval?: Value<number>;
  /**
   * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
   *
   * _Required_: No
   *
   * _Type_: [AlarmIdentifier](aws-properties-route53-healthcheck-alarmidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmIdentifier?: Route53HealthCheckAlarmIdentifier;
  /**
   * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see [How Amazon Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the _Amazon Route 53 Developer Guide_.
   *
   * If you don't specify a value for `FailureThreshold`, the default value is three health checks.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureThreshold?: Value<number>;
  /**
   * The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for `IPAddress`, Route 53 sends a DNS request to resolve the domain name that you specify in `FullyQualifiedDomainName` at the interval that you specify in `RequestInterval`. Using an IP address returned by DNS, Route 53 then checks the health of the endpoint.
   *
   * Use one of the following formats for the value of `IPAddress`:
   */
  IPAddress?: Value<string>;
}
export interface Route53HealthCheckProperties {
  /**
   * A complex type that contains detailed information about one health check.
   *
   * For the values to enter for `HealthCheckConfig`, see [HealthCheckConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html)
   *
   * _Required_: Yes
   *
   * _Type_: [HealthCheckConfig](aws-properties-route53-healthcheck-healthcheckconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckConfig: Route53HealthCheckHealthCheckConfig;
  /**
   * The `HealthCheckTags` property describes key-value pairs that are associated with an `AWS::Route53::HealthCheck` resource.
   *
   * _Required_: No
   *
   * _Type_: List of [HealthCheckTag](aws-properties-route53-healthcheck-healthchecktag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckTags?: List<Route53HealthCheckHealthCheckTag>;
}

/**
 * The `AWS::Route53::HealthCheck` resource is a Route 53 resource type that contains settings for a Route 53 health check.
 *
 * For information about associating health checks with records, see [HealthCheckId](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId) in [ChangeResourceRecordSets](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html).
 *
 * **Note**
 *
 * You can't create a health check with simple routing.
 *
 * **ELB Load Balancers**
 *
 * If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.
 *
 * **Private Hosted Zones**
 *
 * You can associate health checks with failover records in a private hosted zone. Note the following:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 */
export interface Route53HealthCheckResource {
  Type: 'AWS::Route53::HealthCheck';
  Properties: Route53HealthCheckProperties;
}
