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
 * The secondary Region that processes events when failover is triggered or replication is enabled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-secondary.html}
 **/
export interface EventsEndpointSecondary {
  /**
   * Defines the secondary Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `9`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^[-a-z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Route: Value<string>;
}

/**
 * Endpoints can replicate all events to the secondary Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationconfig.html}
 **/
export interface EventsEndpointReplicationConfig {
  /**
   * The state of event replication.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State: Value<string>;
}

/**
 * The routing configuration of the endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-routingconfig.html}
 **/
export interface EventsEndpointRoutingConfig {
  /**
   * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
   *
   * _Required_: Yes
   *
   * _Type_: [FailoverConfig](aws-properties-events-endpoint-failoverconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailoverConfig: EventsEndpointFailoverConfig;
}

/**
 * The event buses the endpoint is associated with.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-endpointeventbus.html}
 **/
export interface EventsEndpointEndpointEventBus {
  /**
   * The ARN of the event bus the endpoint is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^arn:aws[a-z-]*:events:[a-z]{2}-[a-z-]+-d+:d{12}:event-bus/[w.-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBusArn: Value<string>;
}

/**
 * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html}
 **/
export interface EventsEndpointFailoverConfig {
  /**
   * The Region that events are routed to when failover is triggered or event replication is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: [Secondary](aws-properties-events-endpoint-secondary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Secondary: EventsEndpointSecondary;
  /**
   * The main Region of the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: [Primary](aws-properties-events-endpoint-primary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Primary: EventsEndpointPrimary;
}

/**
 * The primary Region of the endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-primary.html}
 **/
export interface EventsEndpointPrimary {
  /**
   * The ARN of the health check used by the endpoint to determine whether failover is triggered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Pattern_: `^arn:aws([a-z]|-)*:route53:::healthcheck/[-a-z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheck: Value<string>;
}
export interface EventsEndpointProperties {
  /**
   * The event buses being used by the endpoint.
   *
   * _Exactly_: `2`
   *
   * _Required_: Yes
   *
   * _Type_: List of [EndpointEventBus](aws-properties-events-endpoint-endpointeventbus.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBuses: List<EventsEndpointEndpointEventBus>;
  /**
   * A description for the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Whether event replication was enabled or disabled for this endpoint. The default state is `ENABLED` which means you must supply a `RoleArn`. If you don't have a `RoleArn` or you don't want event replication enabled, set the state to `DISABLED`.
   *
   * _Required_: No
   *
   * _Type_: [ReplicationConfig](aws-properties-events-endpoint-replicationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationConfig?: EventsEndpointReplicationConfig;
  /**
   * The routing configuration of the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: [RoutingConfig](aws-properties-events-endpoint-routingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoutingConfig: EventsEndpointRoutingConfig;
  /**
   * The ARN of the role used by event replication for the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/[w+=,.@/-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The name of the endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see [Making applications Regional-fault tolerant with global endpoints and event replication](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html) in the _Amazon EventBridge User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html}
 */
export interface EventsEndpointResource {
  Type: 'AWS::Events::Endpoint';
  Properties: EventsEndpointProperties;
}
