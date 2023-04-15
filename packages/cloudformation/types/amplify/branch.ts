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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Use the BasicAuthConfig property type to set password protection for a specific branch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-basicauthconfig.html}
 **/
export interface AmplifyBranchBasicAuthConfig {
  /**
   * The user name for basic authorization.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * Enables basic authorization for the branch.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableBasicAuth?: Value<boolean>;
  /**
   * The password for basic authorization.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * The EnvironmentVariable property type sets environment variables for a specific branch. Environment variables are key-value pairs that are available at build time.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-branch-environmentvariable.html}
 **/
export interface AmplifyBranchEnvironmentVariable {
  /**
   * The environment variable value.
   *
   * _Length Constraints:_ Maximum length of 5500.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The environment variable name.
   *
   * _Length Constraints:_ Maximum length of 255.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface AmplifyBranchProperties {
  /**
   * The description for the branch that is part of an Amplify app.
   *
   * _Length Constraints:_ Maximum length of 1000.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Enables performance mode for the branch.
   *
   * Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePerformanceMode?: Value<boolean>;
  /**
   * The environment variables for the branch.
   *
   * _Required_: No
   *
   * _Type_: List of [EnvironmentVariable](aws-properties-amplify-branch-environmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentVariables?: List<AmplifyBranchEnvironmentVariable>;
  /**
   * The unique ID for an Amplify app.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 20.
   *
   * _Pattern:_ d[a-z0-9]+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AppId: Value<string>;
  /**
   * If pull request previews are enabled for this branch, you can use this property to specify a dedicated backend environment for your previews. For example, you could specify an environment named `prod`, `test`, or `dev` that you initialized with the Amplify CLI and mapped to this branch.
   *
   * To enable pull request previews, set the `EnablePullRequestPreview` property to `true`.
   *
   * If you don't specify an environment, Amplify Hosting provides backend support for each preview by automatically provisioning a temporary backend environment. Amplify Hosting deletes this environment when the pull request is closed.
   *
   * For more information about creating backend environments, see [Feature Branch Deployments and Team Workflows](https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html) in the _AWS Amplify Hosting User Guide_.
   *
   * _Length Constraints:_ Maximum length of 20.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PullRequestEnvironmentName?: Value<string>;
  /**
   * Specifies whether Amplify Hosting creates a preview for each pull request that is made for this branch. If this property is enabled, Amplify deploys your app to a unique preview URL after each pull request is opened. Development and QA teams can use this preview to test the pull request before it's merged into a production or integration branch.
   *
   * To provide backend support for your preview, Amplify automatically provisions a temporary backend environment that it deletes when the pull request is closed. If you want to specify a dedicated backend environment for your previews, use the `PullRequestEnvironmentName` property.
   *
   * For more information, see [Web Previews](https://docs.aws.amazon.com/amplify/latest/userguide/pr-previews.html) in the _AWS Amplify Hosting User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePullRequestPreview?: Value<boolean>;
  /**
   * Enables auto building for the branch.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAutoBuild?: Value<boolean>;
  /**
   * The build specification (build spec) for the branch.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 25000.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BuildSpec?: Value<string>;
  /**
   * Describes the current stage for the branch.
   *
   * _Valid Values:_ PRODUCTION | BETA | DEVELOPMENT | EXPERIMENTAL | PULL_REQUEST
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stage?: Value<string>;
  /**
   * The name for the branch.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BranchName: Value<string>;
  /**
   * The basic authorization credentials for a branch of an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthConfig](aws-properties-amplify-branch-basicauthconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthConfig?: AmplifyBranchBasicAuthConfig;
  /**
   * The framework for the branch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Framework?: Value<string>;
  /**
   * The tag for the branch.
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
 * The AWS::Amplify::Branch resource specifies a new branch within an app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-branch.html}
 */
export interface AmplifyBranchResource {
  Type: 'AWS::Amplify::Branch';
  Properties: AmplifyBranchProperties;
}
