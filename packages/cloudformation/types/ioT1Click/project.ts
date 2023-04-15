/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * In AWS CloudFormation, use the `DeviceTemplate` property type to define the template for an AWS IoT 1-Click project.
 *
 * `DeviceTemplate` is a property of the `AWS::IoT1Click::Project` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-devicetemplate.html}
 **/
export interface IoT1ClickProjectDeviceTemplate {
  /**
   * The device type, which currently must be `"button"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceType?: Value<string>;
  /**
   * An optional AWS Lambda function to invoke instead of the default AWS Lambda function provided by the placement template.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CallbackOverrides?: { [key: string]: any };
}

/**
 * In AWS CloudFormation, use the `PlacementTemplate` property type to define the template for an AWS IoT 1-Click project.
 *
 * `PlacementTemplate` is a property of the `AWS::IoT1Click::Project` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot1click-project-placementtemplate.html}
 **/
export interface IoT1ClickProjectPlacementTemplate {
  /**
   * An object specifying the [DeviceTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeviceTemplate.html) for all placements using this ([PlacementTemplate](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_PlacementTemplate.html)) template.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceTemplates?: { [key: string]: any };
  /**
   * The default attributes (key-value pairs) to be applied to all placements using this template.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAttributes?: { [key: string]: any };
}
export interface IoT1ClickProjectProperties {
  /**
   * The description of the project.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * An object describing the project's placement specifications.
   *
   * _Required_: Yes
   *
   * _Type_: [PlacementTemplate](aws-properties-iot1click-project-placementtemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementTemplate: IoT1ClickProjectPlacementTemplate;
  /**
   * The name of the project from which to obtain information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectName?: Value<string>;
}

/**
 * The `AWS::IoT1Click::Project` resource creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project. For more information, see [CreateProject](https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html) in the _AWS IoT 1-Click Projects API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-project.html}
 */
export interface IoT1ClickProjectResource {
  Type: 'AWS::IoT1Click::Project';
  Properties: IoT1ClickProjectProperties;
}
