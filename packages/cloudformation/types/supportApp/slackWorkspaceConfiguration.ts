/**
 * Supported regions:
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface SupportAppSlackWorkspaceConfigurationProperties {
  /**
   * An identifier used to update an existing Slack workspace configuration in AWS CloudFormation, such as `100`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionId?: Value<string>;
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TeamId: Value<string>;
}

/**
 * You can use the `AWS::SupportApp::SlackWorkspaceConfiguration` resource to specify your Slack workspace configuration. This resource configures your AWS account so that you can use the specified Slack workspace in the AWS Support App. This resource includes the following information:
 *
 * For more information, see the following topics in the _AWS Support User Guide_:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html}
 */
export interface SupportAppSlackWorkspaceConfigurationResource {
  Type: 'AWS::SupportApp::SlackWorkspaceConfiguration';
  Properties: SupportAppSlackWorkspaceConfigurationProperties;
}
