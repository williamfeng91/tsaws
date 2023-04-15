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
 * The `SourceBundle` property is an embedded property of the [AWS::ElasticBeanstalk::ApplicationVersion](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html) resource. It specifies the Amazon S3 location of the source bundle for an AWS Elastic Beanstalk application version.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-applicationversion-sourcebundle.html}
 **/
export interface ElasticBeanstalkApplicationVersionSourceBundle {
  /**
   * The Amazon S3 bucket where the data is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Bucket: Value<string>;
  /**
   * The Amazon S3 key where the data is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Key: Value<string>;
}
export interface ElasticBeanstalkApplicationVersionProperties {
  /**
   * The name of the Elastic Beanstalk application that is associated with this application version.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * A description of this application version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
   *
   * The Amazon S3 bucket must be in the same region as the environment.
   *
   * _Required_: Yes
   *
   * _Type_: [SourceBundle](aws-properties-elasticbeanstalk-applicationversion-sourcebundle.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceBundle: ElasticBeanstalkApplicationVersionSourceBundle;
}

/**
 * The AWS::ElasticBeanstalk::ApplicationVersion resource is an AWS Elastic Beanstalk resource type that specifies an application version, an iteration of deployable code, for an Elastic Beanstalk application.
 *
 * **Note**
 *
 * After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, an attempt to launch an environment from the application version will fail.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-applicationversion.html}
 */
export interface ElasticBeanstalkApplicationVersionResource {
  Type: 'AWS::ElasticBeanstalk::ApplicationVersion';
  Properties: ElasticBeanstalkApplicationVersionProperties;
}
