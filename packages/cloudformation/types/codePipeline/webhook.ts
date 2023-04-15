/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * The event criteria that specify when a webhook notification is sent to your URL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookfilterrule.html}
 **/
export interface CodePipelineWebhookWebhookFilterRule {
  /**
   * A JsonPath expression that is applied to the body/payload of the webhook. The value selected by the JsonPath expression must match the value specified in the `MatchEquals` field. Otherwise, the request is ignored. For more information, see [Java JsonPath implementation](https://github.com/json-path/JsonPath) in GitHub.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `150`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonPath: Value<string>;
  /**
   * The value selected by the `JsonPath` expression must match what is supplied in the `MatchEquals` field. Otherwise, the request is ignored. Properties from the target action configuration can be included as placeholders in this value by surrounding the action configuration key with curly brackets. For example, if the value supplied here is "refs/heads/{Branch}" and the target action has an action configuration property called "Branch" with a value of "main", the `MatchEquals` value is evaluated as "refs/heads/main". For a list of action configuration properties for built-in action types, see [Pipeline Structure Reference Action Requirements](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `150`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchEquals?: Value<string>;
}

/**
 * The authentication applied to incoming webhook trigger requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-webhook-webhookauthconfiguration.html}
 **/
export interface CodePipelineWebhookWebhookAuthConfiguration {
  /**
   * The property used to configure acceptance of webhooks in an IP address range. For IP, only the `AllowedIPRange` property must be set. This property must be set to a valid CIDR range.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedIPRange?: Value<string>;
  /**
   * The property used to configure GitHub authentication. For GITHUB_HMAC, only the `SecretToken` property must be set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretToken?: Value<string>;
}
export interface CodePipelineWebhookProperties {
  /**
   * Properties that configure the authentication applied to incoming webhook trigger requests. The required properties depend on the authentication type. For GITHUB_HMAC, only the `SecretToken `property must be set. For IP, only the `AllowedIPRange `property must be set to a valid CIDR range. For UNAUTHENTICATED, no properties can be set.
   *
   * _Required_: Yes
   *
   * _Type_: [WebhookAuthConfiguration](aws-properties-codepipeline-webhook-webhookauthconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationConfiguration: CodePipelineWebhookWebhookAuthConfiguration;
  /**
   * A list of rules applied to the body/payload sent in the POST request to a webhook URL. All defined rules must pass for the request to be accepted and the pipeline started.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WebhookFilterRule](aws-properties-codepipeline-webhook-webhookfilterrule.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters: List<CodePipelineWebhookWebhookFilterRule>;
  /**
   * Supported options are GITHUB_HMAC, IP, and UNAUTHENTICATED.
   */
  Authentication: Value<string>;
  /**
   * The name of the pipeline you want to connect to the webhook.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[A-Za-z0-9.@-_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetPipeline: Value<string>;
  /**
   * The name of the action in a pipeline you want to connect to the webhook. The action must be from the source (first) stage of the pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[A-Za-z0-9.@-_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAction: Value<string>;
  /**
   * The name of the webhook.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[A-Za-z0-9.@-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The version number of the pipeline to be connected to the trigger request.
   *
   * Required: Yes
   *
   * Type: Integer
   *
   * Update requires: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetPipelineVersion: Value<number>;
  /**
   * Configures a connection between the webhook that was created and the external tool with events to be detected.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegisterWithThirdParty?: Value<boolean>;
}

/**
 * The `AWS::CodePipeline::Webhook` resource creates and registers your webhook. After the webhook is created and registered, it triggers your pipeline to start every time an external event occurs. For more information, see [Configure Your GitHub Pipelines to Use Webhooks for Change Detection](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-webhooks-migration.html) in the _AWS CodePipeline User Guide_.
 *
 * We strongly recommend that you use AWS Secrets Manager to store your credentials. If you use Secrets Manager, you must have already configured and stored your secret parameters in Secrets Manager. For more information, see [ Using Dynamic References to Specify Template Values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager).
 *
 * **Important**
 *
 * When passing secret parameters, do not enter the value directly into the template. The value is rendered as plaintext and is therefore readable. For security reasons, do not use plaintext in your AWS CloudFormation template to store your credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-webhook.html}
 */
export interface CodePipelineWebhookResource {
  Type: 'AWS::CodePipeline::Webhook';
  Properties: CodePipelineWebhookProperties;
}
