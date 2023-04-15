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
 * Specifies the criteria for an allow list, which is a list that defines specific text or a text pattern to ignore when inspecting data sources for sensitive data. The criteria can be:
 *
 * The criteria must specify either an S3 object or a regular expression. It can't specify both.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-criteria.html}
 **/
export interface MacieAllowListCriteria {
  /**
   * The regular expression (_regex_) that defines the text pattern to ignore. The expression can contain 1-512 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Regex?: Value<string>;
  /**
   * The location and name of an Amazon S3 object that lists specific text to ignore.
   *
   * _Required_: No
   *
   * _Type_: [S3WordsList](aws-properties-macie-allowlist-s3wordslist.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3WordsList?: MacieAllowListS3WordsList;
}

/**
 * Specifies the location and name of an Amazon Simple Storage Service (Amazon S3) object that lists specific, predefined text to ignore when inspecting data sources for sensitive data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-macie-allowlist-s3wordslist.html}
 **/
export interface MacieAllowListS3WordsList {
  /**
   * The full name of the S3 bucket that contains the object. This value correlates to the `Name` field of a bucket's properties in Amazon S3.
   *
   * This value is case sensitive. In addition, don't use wildcard characters or specify partial values for the name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The full name of the S3 object. This value correlates to the `Key` field of an object's properties in Amazon S3. If the name includes a path, include the complete path. For example, `AllowLists/Macie/MyList.txt`.
   *
   * This value is case sensitive. In addition, don't use wildcard characters or specify partial values for the name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectKey: Value<string>;
}
export interface MacieAllowListProperties {
  /**
   * A custom description of the allow list. The description can contain 1-512 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an Amazon S3 object that lists specific text to ignore (`S3WordsList`), or a regular expression (`Regex`) that defines a text pattern to ignore.
   *
   * _Required_: Yes
   *
   * _Type_: [Criteria](aws-properties-macie-allowlist-criteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Criteria: MacieAllowListCriteria;
  /**
   * An array of key-value pairs to apply to the allow list.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A custom name for the allow list. The name can contain 1-128 characters.
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
 * The `AWS::Macie::AllowList` resource specifies an allow list. In Amazon Macie, an allow list defines specific text or a text pattern for Macie to ignore when it inspects data sources for sensitive data. If data matches text or a text pattern in an allow list, Macie doesn’t report the data in sensitive data findings or sensitive data discovery results, even if the data matches the criteria of a custom data identifier or a managed data identifier. You can create and use allow lists in all the AWS Regions where Macie is currently available except the Asia Pacific (Osaka) Region.
 *
 * Macie supports two types of allow lists:
 *
 * For more information, see [Defining sensitive data exceptions with allow lists](https://docs.aws.amazon.com/macie/latest/user/allow-lists.html) in the _Amazon Macie User Guide_.
 *
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::AllowList` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html}
 */
export interface MacieAllowListResource {
  Type: 'AWS::Macie::AllowList';
  Properties: MacieAllowListProperties;
}
