/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * This is a structure that defines the configuration of how your application integrates with AWS AppConfig to run client-side evaluation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-appconfigresourceobject.html}
 **/
export interface EvidentlyProjectAppConfigResourceObject {
  /**
   * The ID of the AWS AppConfig environment to use for client-side evaluation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentId: Value<string>;
  /**
   * The ID of the AWS AppConfig application to use for client-side evaluation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationId: Value<string>;
}

/**
 * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-s3destination.html}
 **/
export interface EvidentlyProjectS3Destination {
  /**
   * The name of the bucket in which Evidently stores evaluation events.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The bucket prefix in which Evidently stores evaluation events.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * A structure that contains information about where Evidently is to store evaluation events for longer term storage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-project-datadeliveryobject.html}
 **/
export interface EvidentlyProjectDataDeliveryObject {
  /**
   * If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.
   *
   * _Required_: No
   *
   * _Type_: [S3Destination](aws-properties-evidently-project-s3destination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: EvidentlyProjectS3Destination;
  /**
   * If the project stores evaluation events in CloudWatch Logs, this structure stores the log group name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroup?: Value<string>;
}
export interface EvidentlyProjectProperties {
  /**
   * A structure that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.
   *
   * You can't specify both `CloudWatchLogs` and `S3Destination` in the same operation.
   *
   * _Required_: No
   *
   * _Type_: [DataDeliveryObject](aws-properties-evidently-project-datadeliveryobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataDelivery?: EvidentlyProjectDataDeliveryObject;
  /**
   * An optional description of the project.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Use this parameter if the project will use _client-side evaluation powered by AWS AppConfig_. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the [EvaluateFeature](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html) operation. This mitigates the latency and availability risks that come with an API call. For more information, see [ Use client-side evaluation - powered by AWS AppConfig.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-client-side-evaluation.html)
   *
   * This parameter is a structure that contains information about the AWS AppConfig application that will be used as for client-side evaluation.
   *
   * To create a project that uses client-side evaluation, you must have the `evidently:ExportProjectAsConfiguration` permission.
   *
   * _Required_: No
   *
   * _Type_: [AppConfigResourceObject](aws-properties-evidently-project-appconfigresourceobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppConfigResource?: EvidentlyProjectAppConfigResourceObject;
  /**
   * Assigns one or more tags (key-value pairs) to the project.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with a project.
   *
   * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name for the project. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-project.html}
 */
export interface EvidentlyProjectResource {
  Type: 'AWS::Evidently::Project';
  Properties: EvidentlyProjectProperties;
}
