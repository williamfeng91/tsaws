/**
 * Supported regions:
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A application verion's manifest file. This is a JSON document that has a single key (`PayloadData`) where the value is an escaped string representation of the application manifest (`graph.json`). This file is located in the `graphs` folder in your application source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestpayload.html}
 **/
export interface PanoramaApplicationInstanceManifestPayload {
  /**
   * The application manifest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PayloadData?: Value<string>;
}

/**
 * Parameter overrides for an application instance. This is a JSON document that has a single key (`PayloadData`) where the value is an escaped string representation of the overrides document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-panorama-applicationinstance-manifestoverridespayload.html}
 **/
export interface PanoramaApplicationInstanceManifestOverridesPayload {
  /**
   * The overrides document.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `51200`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PayloadData?: Value<string>;
}
export interface PanoramaApplicationInstanceProperties {
  /**
   * The device's ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DefaultRuntimeContextDevice: Value<string>;
  /**
   * A description for the application instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The ID of an application instance to replace with the new instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationInstanceIdToReplace?: Value<string>;
  /**
   * A device's ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceId?: Value<string>;
  /**
   * Setting overrides for the application manifest.
   *
   * _Required_: No
   *
   * _Type_: [ManifestOverridesPayload](aws-properties-panorama-applicationinstance-manifestoverridespayload.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ManifestOverridesPayload?: PanoramaApplicationInstanceManifestOverridesPayload;
  /**
   * Only include instances with a specific status.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DEPLOYMENT_ERROR | DEPLOYMENT_FAILED | DEPLOYMENT_SUCCEEDED | PROCESSING_DEPLOYMENT | PROCESSING_REMOVAL | REMOVAL_FAILED | REMOVAL_SUCCEEDED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusFilter?: Value<string>;
  /**
   * The ARN of a runtime role for the application instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `arn:[a-z0-9][-.a-z0-9]{0,62}:iam::[0-9]{12}:role/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuntimeRoleArn?: Value<string>;
  /**
   * The application's manifest document.
   *
   * _Required_: Yes
   *
   * _Type_: [ManifestPayload](aws-properties-panorama-applicationinstance-manifestpayload.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ManifestPayload: PanoramaApplicationInstanceManifestPayload;
  /**
   * Tags for the application instance.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A name for the application instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates an application instance and deploys it to a device.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-applicationinstance.html}
 */
export interface PanoramaApplicationInstanceResource {
  Type: 'AWS::Panorama::ApplicationInstance';
  Properties: PanoramaApplicationInstanceProperties;
}
