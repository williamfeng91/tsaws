/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The LoggingConfiguration attribute sets the logging configuration for the workspace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-aps-workspace-loggingconfiguration.html}
 **/
export interface APSWorkspaceLoggingConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log group the logs are emitted to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupArn?: Value<string>;
}
export interface APSWorkspaceProperties {
  /**
   * An alias that you assign to this workspace to help you identify it. It does not need to be unique.
   *
   * The alias can be as many as 100 characters and can include any type of characters. Amazon Managed Service for Prometheus automatically strips any blank spaces from the beginning and end of the alias that you specify.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alias?: Value<string>;
  /**
   * The LoggingConfiguration attribute is used to set the logging configuration for the workspace.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfiguration](aws-properties-aps-workspace-loggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingConfiguration?: APSWorkspaceLoggingConfiguration;
  /**
   * The alert manager definition for the workspace, as a string. For more information, see [ Alert manager and templating](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlertManagerDefinition?: Value<string>;
  /**
   * A list of tag keys and values to associate with the workspace.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::APS::Workspace` type specifies an Amazon Managed Service for Prometheus (Amazon Managed Service for Prometheus) workspace. A _workspace_ is a logical and isolated Prometheus server dedicated to Prometheus resources such as metrics. You can have one or more workspaces in each Region in your account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html}
 */
export interface APSWorkspaceResource {
  Type: 'AWS::APS::Workspace';
  Properties: APSWorkspaceProperties;
}
