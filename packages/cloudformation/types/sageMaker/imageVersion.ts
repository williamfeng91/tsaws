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

export interface SageMakerImageVersionProperties {
  /**
   * The name of the parent image.
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
   * The container image that the SageMaker image version is based on.
   *
   * _Length Constraints_: Minimum length of 1. Maximum length of 255.
   *
   * _Pattern_: `.*`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaseImage: Value<string>;
}

/**
 * Creates a version of the SageMaker image specified by `ImageName`. The version represents the Amazon Container Registry (ECR) container image specified by `BaseImage`.
 *
 * **Note**
 *
 * You can use the `DependsOn` attribute to specify that the creation of a specific resource follows another. You can use it for the following use cases. For more information, see [`DependsOn` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
 *
 * 1. `DependsOn` can be used to establish a parent/child relationship between `ImageVersion` and `Image` where the `ImageVersion` `DependsOn`the `Image`.
 *
 * 2. `DependsOn` can be used to establish order among `ImageVersion`s within the same `Image` namespace. For example, if ImageVersionB `DependsOn` ImageVersionA and both share the same parent `Image`, then ImageVersionA is version N and ImageVersionB is N+1.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-imageversion.html}
 */
export interface SageMakerImageVersionResource {
  Type: 'AWS::SageMaker::ImageVersion';
  Properties: SageMakerImageVersionProperties;
}
