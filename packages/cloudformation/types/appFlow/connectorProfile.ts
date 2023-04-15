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
 * The connector-specific profile credentials required by Dynatrace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileDynatraceConnectorProfileCredentials {
  /**
   * The API tokens used by Dynatrace API to authenticate various API calls.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiToken: Value<string>;
}

/**
 * The connector-specific profile credentials required by Marketo.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileMarketoConnectorProfileCredentials {
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * The credentials used to access protected Marketo resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The identifier for the desired client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The connector-specific profile credentials required when using Amazon Redshift.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileRedshiftConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * The password that corresponds to the user name.
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
  Password?: Value<string>;
}

/**
 * The OAuth credentials required for OAuth type authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauthcredentials.html}
 **/
export interface AppFlowConnectorProfileOAuthCredentials {
  /**
   * The refresh token used to refresh expired access token.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * The access token used to access protected SAPOData resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret?: Value<string>;
  /**
   * The identifier for the desired client.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The connector-specific profile credentials required by Google Analytics.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileGoogleAnalyticsConnectorProfileCredentials {
  /**
   * The credentials used to acquire new access tokens. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * The credentials used to access protected Google Analytics resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The identifier for the desired client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The connector-specific profile properties required by Dynatrace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileDynatraceConnectorProfileProperties {
  /**
   * The location of the Dynatrace resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties when using Amazon Redshift.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileRedshiftConnectorProfileProperties {
  /**
   * The JDBC URL of the Amazon Redshift cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseUrl?: Value<string>;
  /**
   * A name for the associated Amazon S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsRedshiftServerless?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataApiRoleArn?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkgroupName?: Value<string>;
  /**
   * The object key for the destination bucket in which Amazon AppFlow places the files.
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
  BucketPrefix?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterIdentifier?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift read-only access to Amazon S3. For more information, and for the polices that you attach to this role, see [Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `arn:aws:iam:.*:[0-9]+:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * The connector-specific credentials required by a connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileConnectorProfileCredentials {
  /**
   * The connector-specific credentials required when using Amplitude.
   *
   * _Required_: No
   *
   * _Type_: [AmplitudeConnectorProfileCredentials](aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Amplitude?: AppFlowConnectorProfileAmplitudeConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Google Analytics.
   *
   * _Required_: No
   *
   * _Type_: [GoogleAnalyticsConnectorProfileCredentials](aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GoogleAnalytics?: AppFlowConnectorProfileGoogleAnalyticsConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using ServiceNow.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowConnectorProfileCredentials](aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNow?: AppFlowConnectorProfileServiceNowConnectorProfileCredentials;
  /**
   * The connector-specific profile credentials that are required when using the custom connector.
   *
   * _Required_: No
   *
   * _Type_: [CustomConnectorProfileCredentials](aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConnector?: AppFlowConnectorProfileCustomConnectorProfileCredentials;
  /**
   * The connector-specific profile credentials required when using SAPOData.
   *
   * _Required_: No
   *
   * _Type_: [SAPODataConnectorProfileCredentials](aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAPOData?: AppFlowConnectorProfileSAPODataConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Salesforce Pardot.
   *
   * _Required_: No
   *
   * _Type_: [PardotConnectorProfileCredentials](aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pardot?: AppFlowConnectorProfilePardotConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Veeva.
   *
   * _Required_: No
   *
   * _Type_: [VeevaConnectorProfileCredentials](aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Veeva?: AppFlowConnectorProfileVeevaConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Trend Micro.
   *
   * _Required_: No
   *
   * _Type_: [TrendmicroConnectorProfileCredentials](aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Trendmicro?: AppFlowConnectorProfileTrendmicroConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Datadog.
   *
   * _Required_: No
   *
   * _Type_: [DatadogConnectorProfileCredentials](aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datadog?: AppFlowConnectorProfileDatadogConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Marketo.
   *
   * _Required_: No
   *
   * _Type_: [MarketoConnectorProfileCredentials](aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: AppFlowConnectorProfileMarketoConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Amazon Redshift.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftConnectorProfileCredentials](aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Redshift?: AppFlowConnectorProfileRedshiftConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Singular.
   *
   * _Required_: No
   *
   * _Type_: [SingularConnectorProfileCredentials](aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Singular?: AppFlowConnectorProfileSingularConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Slack.
   *
   * _Required_: No
   *
   * _Type_: [SlackConnectorProfileCredentials](aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slack?: AppFlowConnectorProfileSlackConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Snowflake.
   *
   * _Required_: No
   *
   * _Type_: [SnowflakeConnectorProfileCredentials](aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Snowflake?: AppFlowConnectorProfileSnowflakeConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Dynatrace.
   *
   * _Required_: No
   *
   * _Type_: [DynatraceConnectorProfileCredentials](aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dynatrace?: AppFlowConnectorProfileDynatraceConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Zendesk.
   *
   * _Required_: No
   *
   * _Type_: [ZendeskConnectorProfileCredentials](aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: AppFlowConnectorProfileZendeskConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Infor Nexus.
   *
   * _Required_: No
   *
   * _Type_: [InforNexusConnectorProfileCredentials](aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InforNexus?: AppFlowConnectorProfileInforNexusConnectorProfileCredentials;
  /**
   * The connector-specific credentials required when using Salesforce.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceConnectorProfileCredentials](aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: AppFlowConnectorProfileSalesforceConnectorProfileCredentials;
}

/**
 * The connector-specific profile credentials required when using ServiceNow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileServiceNowConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The password that corresponds to the user name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Snowflake.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileSnowflakeConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The password that corresponds to the user name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * The connector-specific profile properties required when using Salesforce Pardot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfilePardotConnectorProfileProperties {
  /**
   * The location of the Salesforce Pardot resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl?: Value<string>;
  /**
   * Indicates whether the connector profile applies to a sandbox or production environment.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsSandboxEnvironment?: Value<boolean>;
  /**
   * The business unit id of Salesforce Pardot instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `18`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BusinessUnitId: Value<string>;
}

/**
 * The basic auth credentials required for basic authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-basicauthcredentials.html}
 **/
export interface AppFlowConnectorProfileBasicAuthCredentials {
  /**
   * The username to use to connect to a resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The password to use to connect to a resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * The connector-specific profile properties required when using Salesforce.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileSalesforceConnectorProfileProperties {
  /**
   * The location of the Salesforce resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl?: Value<string>;
  /**
   * Indicates whether the connector profile applies to a sandbox or production environment.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  isSandboxEnvironment?: Value<boolean>;
  /**
   * If the connection mode for the connector profile is private, this parameter sets whether Amazon AppFlow uses the private network to send metadata and authorization calls to Salesforce. Amazon AppFlow sends private calls through AWS PrivateLink. These calls travel through AWS infrastructure without being exposed to the public internet.
   *
   * Set either of the following values:
   *
   * true
   *
   * Amazon AppFlow sends all calls to Salesforce over the private network.
   *
   * These private calls are:
   */
  usePrivateLinkForMetadataAndAuthorization?: Value<boolean>;
}

/**
 * Defines the connector-specific configuration and credentials for the connector profile.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileconfig.html}
 **/
export interface AppFlowConnectorProfileConnectorProfileConfig {
  /**
   * The connector-specific credentials required by each connector.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorProfileCredentials](aws-properties-appflow-connectorprofile-connectorprofilecredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProfileCredentials?: AppFlowConnectorProfileConnectorProfileCredentials;
  /**
   * The connector-specific properties of the profile configuration.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorProfileProperties](aws-properties-appflow-connectorprofile-connectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProfileProperties?: AppFlowConnectorProfileConnectorProfileProperties;
}

/**
 * The connector-specific credentials required when using Amplitude.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileAmplitudeConnectorProfileCredentials {
  /**
   * The Secret Access Key portion of the credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretKey: Value<string>;
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKey: Value<string>;
}

/**
 * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectoroauthrequest.html}
 **/
export interface AppFlowConnectorProfileConnectorOAuthRequest {
  /**
   * The code provided by the connector when it has been authenticated via the connected app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthCode?: Value<string>;
  /**
   * The URL to which the authentication server redirects the browser after authorization has been granted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedirectUri?: Value<string>;
}

/**
 * The connector-specific credentials required by Datadog.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileDatadogConnectorProfileCredentials {
  /**
   * Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationKey: Value<string>;
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKey: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Trend Micro.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileTrendmicroConnectorProfileCredentials {
  /**
   * The Secret Access Key portion of the credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiSecretKey: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Veeva.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileVeevaConnectorProfileCredentials {
  /**
   * The name of the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The password that corresponds to the user name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * The connector-specific profile properties required when using Veeva.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileVeevaConnectorProfileProperties {
  /**
   * The location of the Veeva resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties required when using Slack.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileSlackConnectorProfileProperties {
  /**
   * The location of the Slack resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties required when using Marketo.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileMarketoConnectorProfileProperties {
  /**
   * The location of the Marketo resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties required by Datadog.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileDatadogConnectorProfileProperties {
  /**
   * The location of the Datadog resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties required when using ServiceNow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileServiceNowConnectorProfileProperties {
  /**
   * The location of the ServiceNow resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile properties required by each connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-connectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileConnectorProfileProperties {
  /**
   * The connector-specific properties required by serviceNow.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowConnectorProfileProperties](aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNow?: AppFlowConnectorProfileServiceNowConnectorProfileProperties;
  /**
   * The properties required by the custom connector.
   *
   * _Required_: No
   *
   * _Type_: [CustomConnectorProfileProperties](aws-properties-appflow-connectorprofile-customconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomConnector?: AppFlowConnectorProfileCustomConnectorProfileProperties;
  /**
   * The connector-specific profile properties required when using SAPOData.
   *
   * _Required_: No
   *
   * _Type_: [SAPODataConnectorProfileProperties](aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAPOData?: AppFlowConnectorProfileSAPODataConnectorProfileProperties;
  /**
   * The connector-specific properties required by Salesforce Pardot.
   *
   * _Required_: No
   *
   * _Type_: [PardotConnectorProfileProperties](aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pardot?: AppFlowConnectorProfilePardotConnectorProfileProperties;
  /**
   * The connector-specific properties required by Veeva.
   *
   * _Required_: No
   *
   * _Type_: [VeevaConnectorProfileProperties](aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Veeva?: AppFlowConnectorProfileVeevaConnectorProfileProperties;
  /**
   * The connector-specific properties required by Datadog.
   *
   * _Required_: No
   *
   * _Type_: [DatadogConnectorProfileProperties](aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datadog?: AppFlowConnectorProfileDatadogConnectorProfileProperties;
  /**
   * The connector-specific properties required by Marketo.
   *
   * _Required_: No
   *
   * _Type_: [MarketoConnectorProfileProperties](aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Marketo?: AppFlowConnectorProfileMarketoConnectorProfileProperties;
  /**
   * The connector-specific properties required by Amazon Redshift.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftConnectorProfileProperties](aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Redshift?: AppFlowConnectorProfileRedshiftConnectorProfileProperties;
  /**
   * The connector-specific properties required by Slack.
   *
   * _Required_: No
   *
   * _Type_: [SlackConnectorProfileProperties](aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slack?: AppFlowConnectorProfileSlackConnectorProfileProperties;
  /**
   * The connector-specific properties required by Snowflake.
   *
   * _Required_: No
   *
   * _Type_: [SnowflakeConnectorProfileProperties](aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Snowflake?: AppFlowConnectorProfileSnowflakeConnectorProfileProperties;
  /**
   * The connector-specific properties required by Dynatrace.
   *
   * _Required_: No
   *
   * _Type_: [DynatraceConnectorProfileProperties](aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dynatrace?: AppFlowConnectorProfileDynatraceConnectorProfileProperties;
  /**
   * The connector-specific properties required by Zendesk.
   *
   * _Required_: No
   *
   * _Type_: [ZendeskConnectorProfileProperties](aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Zendesk?: AppFlowConnectorProfileZendeskConnectorProfileProperties;
  /**
   * The connector-specific properties required by Infor Nexus.
   *
   * _Required_: No
   *
   * _Type_: [InforNexusConnectorProfileProperties](aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InforNexus?: AppFlowConnectorProfileInforNexusConnectorProfileProperties;
  /**
   * The connector-specific properties required by Salesforce.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceConnectorProfileProperties](aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salesforce?: AppFlowConnectorProfileSalesforceConnectorProfileProperties;
}

/**
 * The connector-specific profile properties required by Infor Nexus.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileInforNexusConnectorProfileProperties {
  /**
   * The location of the Infor Nexus resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The connector-specific profile credentials that are required when using the custom connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileCustomConnectorProfileCredentials {
  /**
   * The basic credentials that are required for the authentication of the user.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthCredentials](aws-properties-appflow-connectorprofile-basicauthcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Basic?: AppFlowConnectorProfileBasicAuthCredentials;
  /**
   * The API keys required for the authentication of the user.
   *
   * _Required_: No
   *
   * _Type_: [ApiKeyCredentials](aws-properties-appflow-connectorprofile-apikeycredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKey?: AppFlowConnectorProfileApiKeyCredentials;
  /**
   * The OAuth 2.0 credentials required for the authentication of the user.
   *
   * _Required_: No
   *
   * _Type_: [OAuth2Credentials](aws-properties-appflow-connectorprofile-oauth2credentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Oauth2?: AppFlowConnectorProfileOAuth2Credentials;
  /**
   * If the connector uses the custom authentication mechanism, this holds the required credentials.
   *
   * _Required_: No
   *
   * _Type_: [CustomAuthCredentials](aws-properties-appflow-connectorprofile-customauthcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Custom?: AppFlowConnectorProfileCustomAuthCredentials;
  /**
   * The authentication type that the custom connector uses for authenticating while creating a connector profile.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `APIKEY | BASIC | CUSTOM | OAUTH2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationType: Value<string>;
}

/**
 * The connector-specific profile properties required when using Zendesk.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileZendeskConnectorProfileProperties {
  /**
   * The location of the Zendesk resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceUrl: Value<string>;
}

/**
 * The profile properties required by the custom connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileCustomConnectorProfileProperties {
  /**
   * The OAuth 2.0 properties required for OAuth 2.0 authentication.
   *
   * _Required_: No
   *
   * _Type_: [OAuth2Properties](aws-properties-appflow-connectorprofile-oauth2properties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuth2Properties?: AppFlowConnectorProfileOAuth2Properties;
  /**
   * A map of properties that are required to create a profile for the custom connector.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProfileProperties?: { [key: string]: Value<string> };
}

/**
 * The OAuth 2.0 credentials required for OAuth 2.0 authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2credentials.html}
 **/
export interface AppFlowConnectorProfileOAuth2Credentials {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
  /**
   * The refresh token used to refresh an expired access token.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret?: Value<string>;
  /**
   * The access token used to access the connector on your behalf.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The identifier for the desired client.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId?: Value<string>;
}

/**
 * The custom credentials required for custom authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-customauthcredentials.html}
 **/
export interface AppFlowConnectorProfileCustomAuthCredentials {
  /**
   * A map that holds custom authentication credentials.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CredentialsMap?: { [key: string]: Value<string> };
  /**
   * The custom authentication type that the connector uses.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomAuthenticationType: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Salesforce.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileSalesforceConnectorProfileCredentials {
  /**
   * The credentials used to acquire new access tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * The credentials used to access protected Salesforce resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The secret manager ARN, which contains the client ID and client secret of the connected app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws:secretsmanager:.*:[0-9]+:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientCredentialsArn?: Value<string>;
  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The connector-specific profile credentials required when using Singular.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileSingularConnectorProfileCredentials {
  /**
   * A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKey: Value<string>;
}

/**
 * The connector-specific profile credentials required when using SAPOData.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileSAPODataConnectorProfileCredentials {
  /**
   * The SAPOData basic authentication credentials.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthCredentials](aws-properties-appflow-connectorprofile-basicauthcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthCredentials?: AppFlowConnectorProfileBasicAuthCredentials;
  /**
   * The SAPOData OAuth type authentication credentials.
   *
   * _Required_: No
   *
   * _Type_: [OAuthCredentials](aws-properties-appflow-connectorprofile-oauthcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthCredentials?: AppFlowConnectorProfileOAuthCredentials;
}

/**
 * The connector-specific profile properties required when using SAPOData.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileSAPODataConnectorProfileProperties {
  /**
   * The application path to catalog service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationServicePath?: Value<string>;
  /**
   * The location of the SAPOData resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationHostUrl?: Value<string>;
  /**
   * The SAPOData OAuth properties required for OAuth type authentication.
   *
   * _Required_: No
   *
   * _Type_: [OAuthProperties](aws-properties-appflow-connectorprofile-oauthproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthProperties?: AppFlowConnectorProfileOAuthProperties;
  /**
   * The logon language of SAPOData instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2`
   *
   * _Pattern_: `^[a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogonLanguage?: Value<string>;
  /**
   * The SAPOData Private Link service name to be used for private data transfers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^$|com.amazonaws.vpce.[w/!:@#.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateLinkServiceName?: Value<string>;
  /**
   * The port number of the SAPOData instance.
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
  PortNumber?: Value<number>;
  /**
   * The client number for the client creating the connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `3`
   *
   * _Pattern_: `^d{3}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientNumber?: Value<string>;
}

/**
 * The API key credentials required for API key authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-apikeycredentials.html}
 **/
export interface AppFlowConnectorProfileApiKeyCredentials {
  /**
   * The API secret key required for API key authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiSecretKey?: Value<string>;
  /**
   * The API key required for API key authentication.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKey: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Zendesk.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileZendeskConnectorProfileCredentials {
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * The credentials used to access protected Zendesk resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The identifier for the desired client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The OAuth 2.0 properties required for OAuth 2.0 authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauth2properties.html}
 **/
export interface AppFlowConnectorProfileOAuth2Properties {
  /**
   * Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenUrlCustomProperties?: { [key: string]: Value<string> };
  /**
   * The token URL required for OAuth 2.0 authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenUrl?: Value<string>;
  /**
   * The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHORIZATION_CODE | CLIENT_CREDENTIALS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuth2GrantType?: Value<string>;
}

/**
 * The OAuth properties required for OAuth type authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-oauthproperties.html}
 **/
export interface AppFlowConnectorProfileOAuthProperties {
  /**
   * The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthCodeUrl?: Value<string>;
  /**
   * The token url required to fetch access/refresh tokens using authorization code and also to refresh expired access token using refresh token.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenUrl?: Value<string>;
  /**
   * The OAuth scopes required for OAuth type authentication.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthScopes?: List<Value<string>>;
}

/**
 * The connector-specific profile properties required when using Snowflake.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.html}
 **/
export interface AppFlowConnectorProfileSnowflakeConnectorProfileProperties {
  /**
   * The name of the Snowflake warehouse.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[sw/!@#+=.-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Warehouse: Value<string>;
  /**
   * The name of the Amazon S3 bucket associated with Snowflake.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The Snowflake Private Link service name to be used for private data transfers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^$|com.amazonaws.vpce.[w/!:@#.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateLinkServiceName?: Value<string>;
  /**
   * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: < Database>< Schema><Stage Name>.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stage: Value<string>;
  /**
   * The AWS Region of the Snowflake account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region?: Value<string>;
  /**
   * The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
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
  BucketPrefix?: Value<string>;
  /**
   * The name of the account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountName?: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Slack.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileSlackConnectorProfileCredentials {
  /**
   * The client secret used by the OAuth client to authenticate to the authorization server.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * The credentials used to access protected Slack resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The identifier for the client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
  /**
   * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}

/**
 * The connector-specific profile credentials required by Infor Nexus.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfileInforNexusConnectorProfileCredentials {
  /**
   * The Access Key portion of the credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessKeyId: Value<string>;
  /**
   * The identifier for the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserId: Value<string>;
  /**
   * The secret key used to sign requests.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretAccessKey: Value<string>;
  /**
   * The encryption keys used to encrypt data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Datakey: Value<string>;
}

/**
 * The connector-specific profile credentials required when using Salesforce Pardot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.html}
 **/
export interface AppFlowConnectorProfilePardotConnectorProfileCredentials {
  /**
   * The credentials used to acquire new access tokens.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * The credentials used to access protected Salesforce Pardot resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
  /**
   * The secret manager ARN, which contains the client ID and client secret of the connected app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws:secretsmanager:.*:[0-9]+:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientCredentialsArn?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorOAuthRequest](aws-properties-appflow-connectorprofile-connectoroauthrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorOAuthRequest?: AppFlowConnectorProfileConnectorOAuthRequest;
}
export interface AppFlowConnectorProfileProperties {
  /**
   * The label for the connector profile being created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[a-zA-Z0-9][w!@#.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorLabel?: Value<string>;
  /**
   * The name of the connector profile. The name is unique for each `ConnectorProfile` in the AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[w/!@#+=.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorProfileName: Value<string>;
  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KMSArn?: Value<string>;
  /**
   * The type of connector, such as Salesforce, Amplitude, and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Amplitude | CustomConnector | CustomerProfiles | Datadog | Dynatrace | EventBridge | Googleanalytics | Honeycode | Infornexus | LookoutMetrics | Marketo | Pardot | Redshift | S3 | Salesforce | SAPOData | Servicenow | Singular | Slack | Snowflake | Trendmicro | Upsolver | Veeva | Zendesk`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorType: Value<string>;
  /**
   * Indicates the connection mode and if it is public or private.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Private | Public`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionMode: Value<string>;
  /**
   * Defines the connector-specific configuration and credentials.
   *
   * _Required_: No
   *
   * _Type_: [ConnectorProfileConfig](aws-properties-appflow-connectorprofile-connectorprofileconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectorProfileConfig?: AppFlowConnectorProfileConnectorProfileConfig;
}

/**
 * The `AWS::AppFlow::ConnectorProfile` resource is an Amazon AppFlow resource type that specifies the configuration profile for an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. The fields that are common to all types of connector profiles are explicitly specified under the `Properties` field. The rest of the connector-specific properties are specified under `Properties/ConnectorProfileConfig`.
 *
 * **Note**
 *
 * If you want to use AWS CloudFormation to create a connector profile for connectors that implement OAuth (such as Salesforce, Slack, Zendesk, and Google Analytics), you must fetch the access and refresh tokens. You can do this by implementing your own UI for OAuth, or by retrieving the tokens from elsewhere. Alternatively, you can use the Amazon AppFlow console to create the connector profile, and then use that connector profile in the flow creation CloudFormation template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html}
 */
export interface AppFlowConnectorProfileResource {
  Type: 'AWS::AppFlow::ConnectorProfile';
  Properties: AppFlowConnectorProfileProperties;
}
