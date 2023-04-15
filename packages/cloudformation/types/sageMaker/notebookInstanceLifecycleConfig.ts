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
 * Specifies the notebook instance lifecycle configuration script. Each lifecycle configuration script has a limit of 16384 characters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html}
 **/
export interface SageMakerNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHook {
  /**
   * A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `16384`
   *
   * _Pattern_: `[Ss]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: Value<string>;
}
export interface SageMakerNotebookInstanceLifecycleConfigProperties {
  /**
   * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
   *
   * _Required_: No
   *
   * _Type_: List of [NotebookInstanceLifecycleHook](aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnStart?: List<SageMakerNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHook>;
  /**
   * The name of the lifecycle configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotebookInstanceLifecycleConfigName?: Value<string>;
  /**
   * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
   *
   * _Required_: No
   *
   * _Type_: List of [NotebookInstanceLifecycleHook](aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnCreate?: List<SageMakerNotebookInstanceLifecycleConfigNotebookInstanceLifecycleHook>;
}

/**
 * The `AWS::SageMaker::NotebookInstanceLifecycleConfig` resource creates shell scripts that run when you create and/or start a notebook instance. For information about notebook instance lifecycle configurations, see [Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html) in the _Amazon SageMaker Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html}
 */
export interface SageMakerNotebookInstanceLifecycleConfigResource {
  Type: 'AWS::SageMaker::NotebookInstanceLifecycleConfig';
  Properties: SageMakerNotebookInstanceLifecycleConfigProperties;
}
