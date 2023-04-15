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
 * The [traffic-shifting](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) configuration of a Lambda function alias.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html}
 **/
export interface LambdaAliasVersionWeight {
  /**
   * The qualifier of the second version.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionVersion: Value<string>;
  /**
   * The percentage of traffic that the alias routes to the second version.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionWeight: Value<number>;
}

/**
 * A provisioned concurrency configuration for a function's alias.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-provisionedconcurrencyconfiguration.html}
 **/
export interface LambdaAliasProvisionedConcurrencyConfiguration {
  /**
   * The amount of provisioned concurrency to allocate for the alias.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedConcurrentExecutions: Value<number>;
}

/**
 * The [traffic-shifting](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) configuration of a Lambda function alias.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-aliasroutingconfiguration.html}
 **/
export interface LambdaAliasAliasRoutingConfiguration {
  /**
   * The second version, and the percentage of traffic that's routed to it.
   *
   * _Required_: Yes
   *
   * _Type_: List of [VersionWeight](aws-properties-lambda-alias-versionweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalVersionWeights: List<LambdaAliasVersionWeight>;
}
export interface LambdaAliasProperties {
  /**
   * A description of the alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The name of the Lambda function.
   *
   * **Name formats**
   */
  FunctionName: Value<string>;
  /**
   * The function version that the alias invokes.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `($LATEST|[0-9]+)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionVersion: Value<string>;
  /**
   * The name of the alias.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `(?!^[0-9]+$)([a-zA-Z0-9-_]+)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Specifies a [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) configuration for a function's alias.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedConcurrencyConfiguration](aws-properties-lambda-alias-provisionedconcurrencyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedConcurrencyConfig?: LambdaAliasProvisionedConcurrencyConfiguration;
  /**
   * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) of the alias.
   *
   * _Required_: No
   *
   * _Type_: [AliasRoutingConfiguration](aws-properties-lambda-alias-aliasroutingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoutingConfig?: LambdaAliasAliasRoutingConfiguration;
}

/**
 * The `AWS::Lambda::Alias` resource creates an [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.
 *
 * You can also map an alias to split invocation requests between two versions. Use the `RoutingConfig` parameter to specify a second version and the percentage of invocation requests that it receives.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html}
 */
export interface LambdaAliasResource {
  Type: 'AWS::Lambda::Alias';
  Properties: LambdaAliasProperties;
}
