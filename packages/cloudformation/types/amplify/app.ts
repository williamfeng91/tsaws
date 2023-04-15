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
 * Use the AutoBranchCreationConfig property type to automatically create branches that match a certain pattern.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-autobranchcreationconfig.html}
 **/
export interface AmplifyAppAutoBranchCreationConfig {
  /**
   * Environment variables for the auto created branch.
   *
   * _Required_: No
   *
   * _Type_: List of [EnvironmentVariable](aws-properties-amplify-app-environmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentVariables?: List<AmplifyAppEnvironmentVariable>;
  /**
   * Automated branch creation glob patterns for the Amplify app.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoBranchCreationPatterns?: List<Value<string>>;
  /**
   * Enables automated branch creation for the Amplify app.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAutoBranchCreation?: Value<boolean>;
  /**
   * If pull request previews are enabled, you can use this property to specify a dedicated backend environment for your previews. For example, you could specify an environment named `prod`, `test`, or `dev` that you initialized with the Amplify CLI.
   *
   * To enable pull request previews, set the `EnablePullRequestPreview` property to `true`.
   *
   * If you don't specify an environment, Amplify Hosting provides backend support for each preview by automatically provisioning a temporary backend environment. Amplify deletes this environment when the pull request is closed.
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
   * Sets whether pull request previews are enabled for each branch that Amplify Hosting automatically creates for your app. Amplify creates previews by deploying your app to a unique URL whenever a pull request is opened for the branch. Development and QA teams can use this preview to test the pull request before it's merged into a production or integration branch.
   *
   * To provide backend support for your preview, Amplify Hosting automatically provisions a temporary backend environment that it deletes when the pull request is closed. If you want to specify a dedicated backend environment for your previews, use the `PullRequestEnvironmentName` property.
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
   * Enables auto building for the auto created branch.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAutoBuild?: Value<boolean>;
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
   * The build specification (build spec) for the autocreated branch.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 25000.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BuildSpec?: Value<string>;
  /**
   * Stage for the auto created branch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stage?: Value<string>;
  /**
   * Sets password protection for your auto created branch.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthConfig](aws-properties-amplify-app-basicauthconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthConfig?: AmplifyAppBasicAuthConfig;
  /**
   * The framework for the autocreated branch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Framework?: Value<string>;
}

/**
 * Environment variables are key-value pairs that are available at build time. Set environment variables for all branches in your app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-environmentvariable.html}
 **/
export interface AmplifyAppEnvironmentVariable {
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

/**
 * Use the BasicAuthConfig property type to set password protection at an app level to all your branches.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-basicauthconfig.html}
 **/
export interface AmplifyAppBasicAuthConfig {
  /**
   * The user name for basic authorization.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * Enables basic authorization for the Amplify app's branches.
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
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password?: Value<string>;
}

/**
 * The CustomRule property type allows you to specify redirects, rewrites, and reverse proxies. Redirects enable a web app to reroute navigation from one URL to another.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-app-customrule.html}
 **/
export interface AmplifyAppCustomRule {
  /**
   * The condition for a URL rewrite or redirect rule, such as a country code.
   *
   * _Length Constraints:_ Minimum length of 0. Maximum length of 2048.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: Value<string>;
  /**
   * The status code for a URL rewrite or redirect rule.
   *
   * 200
   *
   * Represents a 200 rewrite rule.
   *
   * 301
   *
   * Represents a 301 (moved pemanently) redirect rule. This and all future requests should be directed to the target URL.
   *
   * 302
   *
   * Represents a 302 temporary redirect rule.
   *
   * 404
   *
   * Represents a 404 redirect rule.
   *
   * 404-200
   *
   * Represents a 404 rewrite rule.
   *
   * _Length Constraints:_ Minimum length of 3. Maximum length of 7.
   *
   * _Pattern:_ .{3,7}
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The target pattern for a URL rewrite or redirect rule.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 2048.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: Value<string>;
  /**
   * The source pattern for a URL rewrite or redirect rule.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 2048.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: Value<string>;
}
export interface AmplifyAppProperties {
  /**
   * Sets the configuration for your automatic branch creation.
   *
   * _Required_: No
   *
   * _Type_: [AutoBranchCreationConfig](aws-properties-amplify-app-autobranchcreationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  /**
   * The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.
   *
   * Use `OauthToken` for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use `AccessToken`.
   *
   * You must specify either `OauthToken` or `AccessToken` when you create a new app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the _Amplify User Guide_ .
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
  OauthToken?: Value<string>;
  /**
   * The description for an Amplify app.
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
   * The platform for the Amplify app. For a static app, set the platform type to `WEB`. For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE`. For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Platform?: Value<string>;
  /**
   * Automatically disconnect a branch in Amplify Hosting when you delete a branch from your Git repository.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableBranchAutoDeletion?: Value<boolean>;
  /**
   * The name for an Amplify app.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The repository for an Amplify app.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Repository?: Value<string>;
  /**
   * The environment variables map for an Amplify app.
   *
   * _Required_: No
   *
   * _Type_: List of [EnvironmentVariable](aws-properties-amplify-app-environmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentVariables?: List<AmplifyAppEnvironmentVariable>;
  /**
   * The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.
   *
   * Use `AccessToken` for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use `OauthToken`.
   *
   * You must specify either `AccessToken` or `OauthToken` when you create a new app.
   *
   * Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the _Amplify User Guide_ .
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The build specification (build spec) for an Amplify app.
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
   * The custom rewrite and redirect rules for an Amplify app.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomRule](aws-properties-amplify-app-customrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomRules?: List<AmplifyAppCustomRule>;
  /**
   * The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthConfig](aws-properties-amplify-app-basicauthconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthConfig?: AmplifyAppBasicAuthConfig;
  /**
   * The custom HTTP headers for an Amplify app.
   *
   * _Length Constraints:_ Minimum length of 0. Maximum length of 25000.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomHeaders?: Value<string>;
  /**
   * The tag for an Amplify app.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) of the Amplify app.
   *
   * _Length Constraints:_ Minimum length of 0. Maximum length of 1000.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IAMServiceRole?: Value<string>;
}

/**
 * The AWS::Amplify::App resource specifies Apps in Amplify Hosting. An App is a collection of branches.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html}
 */
export interface AmplifyAppResource {
  Type: 'AWS::Amplify::App';
  Properties: AmplifyAppProperties;
}
