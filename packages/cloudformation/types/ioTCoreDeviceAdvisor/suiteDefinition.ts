/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information of a test device. A thing ARN or a certificate ARN is required.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html}
 **/
export interface IoTCoreDeviceAdvisorSuiteDefinitionDeviceUnderTest {
  /**
   * Lists devices thing ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThingArn?: Value<string>;
  /**
   * Lists devices certificate ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}

/**
 * Gets the suite definition configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.html}
 **/
export interface IoTCoreDeviceAdvisorSuiteDefinitionSuiteDefinitionConfiguration {
  /**
   * Gets the device permission ARN. This is a required parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DevicePermissionRoleArn: Value<string>;
  /**
   * Gets the suite definition name. This is a required parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuiteDefinitionName?: Value<string>;
  /**
   * Gets the tests intended for qualification in a suite.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntendedForQualification?: Value<boolean>;
  /**
   * Gets the devices configured.
   *
   * _Required_: No
   *
   * _Type_: List of [DeviceUnderTest](aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Devices?: List<IoTCoreDeviceAdvisorSuiteDefinitionDeviceUnderTest>;
  /**
   * Gets the test suite root group. This is a required parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RootGroup: Value<string>;
}
export interface IoTCoreDeviceAdvisorSuiteDefinitionProperties {
  /**
   * The configuration of the Suite Definition. Listed below are the required elements of the `SuiteDefinitionConfiguration`.
   *
   * **devicePermissionRoleArn**
   *
   * The device permission arn.
   *
   * This is a required element.
   *
   * **Type:** String
   *
   * **devices**
   *
   * The list of configured devices under test. For more information on devices under test, see [DeviceUnderTest](http://amazonaws.com/iot/latest/apireference/API_iotdeviceadvisor_DeviceUnderTest.html)
   *
   * Not a required element.
   *
   * **Type:** List of devices under test
   *
   * **intendedForQualification**
   *
   * The tests intended for qualification in a suite.
   *
   * Not a required element.
   *
   * **Type:** Boolean
   *
   * **rootGroup**
   *
   * The test suite root group. For more information on creating and using root groups see the [Device Advisor workflow](https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html).
   *
   * This is a required element.
   *
   * **Type:** String
   *
   * **suiteDefinitionName**
   *
   * The Suite Definition Configuration name.
   *
   * This is a required element.
   *
   * **Type:** String
   *
   * _Required_: Yes
   *
   * _Type_: [SuiteDefinitionConfiguration](aws-properties-iotcoredeviceadvisor-suitedefinition-suitedefinitionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuiteDefinitionConfiguration: IoTCoreDeviceAdvisorSuiteDefinitionSuiteDefinitionConfiguration;
  /**
   * Metadata that can be used to manage the the Suite Definition.
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
 * Creates a Device Advisor test suite.
 *
 * Requires permission to access the [CreateSuiteDefinition](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html}
 */
export interface IoTCoreDeviceAdvisorSuiteDefinitionResource {
  Type: 'AWS::IoTCoreDeviceAdvisor::SuiteDefinition';
  Properties: IoTCoreDeviceAdvisorSuiteDefinitionProperties;
}
