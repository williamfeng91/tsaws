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
 * A collection of AWS tags.
 *
 * Tags help you identify and organize your AWS resources. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
 *
 * Each AWS tag has two parts.
 *
 * Together these are known as _key_-_value_ pairs.
 *
 * **Important**
 *
 * The string used for a _key_ in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag _key_ might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a _key_, the case of characters in the _key_ can be whatever you choose. After you create a _key_, it is case-sensitive. For example, DevOps Guru works with a _key_ named `devops-guru-rds` and a _key_ named `DevOps-Guru-RDS`, and these act as two different _keys_. Possible _key_/_value_ pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-tagcollection.html}
 **/
export interface DevOpsGuruResourceCollectionTagCollection {
  /**
   * An AWS tag _key_ that is used to identify the AWS resources that DevOps Guru analyzes. All AWS resources in your account and Region tagged with this _key_ make up your DevOps Guru application and analysis boundary.
   *
   * The string used for a _key_ in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`. The tag _key_ might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`. When you create a _key_, the case of characters in the _key_ can be whatever you choose. After you create a _key_, it is case-sensitive. For example, DevOps Guru works with a _key_ named `devops-guru-rds` and a _key_ named `DevOps-Guru-RDS`, and these act as two different _keys_. Possible _key_/_value_ pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppBoundaryKey?: Value<string>;
  /**
   * The values in an AWS tag collection.
   *
   * The tag's _value_ is an optional field used to associate a string with the tag _key_ (for example, `111122223333`, `Production`, or a team name). The _key_ and _value_ are the tag's _key_ pair. Omitting the tag _value_ is the same as using an empty string. Like tag _keys_, tag _values_ are case-sensitive. You can specify a maximum of 256 characters for a tag value.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagValues?: List<Value<string>>;
}

/**
 * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-resourcecollectionfilter.html}
 **/
export interface DevOpsGuruResourceCollectionResourceCollectionFilter {
  /**
   * Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _ AWS CloudFormation User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [CloudFormationCollectionFilter](aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudFormation?: DevOpsGuruResourceCollectionCloudFormationCollectionFilter;
  /**
   * The AWS tags used to filter the resources in the resource collection.
   *
   * Tags help you identify and organize your AWS resources. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   *
   * Each AWS tag has two parts.
   */
  Tags?: List<DevOpsGuruResourceCollectionTagCollection>;
}

/**
 * Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _ AWS CloudFormation User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.html}
 **/
export interface DevOpsGuruResourceCollectionCloudFormationCollectionFilter {
  /**
   * An array of CloudFormation stack names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackNames?: List<Value<string>>;
}
export interface DevOpsGuruResourceCollectionProperties {
  /**
   * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
   *
   * _Required_: Yes
   *
   * _Type_: [ResourceCollectionFilter](aws-properties-devopsguru-resourcecollection-resourcecollectionfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceCollectionFilter: DevOpsGuruResourceCollectionResourceCollectionFilter;
}

/**
 * A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html}
 */
export interface DevOpsGuruResourceCollectionResource {
  Type: 'AWS::DevOpsGuru::ResourceCollection';
  Properties: DevOpsGuruResourceCollectionProperties;
}
