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

export interface SageMakerImageProperties {
  /**
   * The name of the Image. Must be unique by region in your account.
   *
   * _Length Constraints_: Minimum length of 1. Maximum length of 63.
   *
   * _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ImageName: Value<string>;
  /**
   * The display name of the image.
   *
   * _Length Constraints_: Minimum length of 1. Maximum length of 128.
   *
   * _Pattern_: `^S(.*S)?$`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageDisplayName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
   *
   * _Length Constraints_: Minimum length of 20. Maximum length of 2048.
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageRoleArn: Value<string>;
  /**
   * The description of the image.
   *
   * _Length Constraints_: Minimum length of 1. Maximum length of 512.
   *
   * _Pattern_: `.*`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageDescription?: Value<string>;
  /**
   * A list of key-value pairs to apply to this resource.
   *
   * _Array Members_: Minimum number of 0 items. Maximum number of 50 items.
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
 * Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Elastic Container Registry (ECR). For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-image.html}
 */
export interface SageMakerImageResource {
  Type: 'AWS::SageMaker::Image';
  Properties: SageMakerImageProperties;
}
