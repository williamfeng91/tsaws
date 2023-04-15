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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html}
 **/
export interface IoTMitigationActionAddThingsToThingGroupParams {
  /**
   * Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic thing groups.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OverrideDynamicGroups?: Value<boolean>;
  /**
   * The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you can't add a thing to more than one group in the same hierarchy.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThingGroupNames: List<Value<string>>;
}

/**
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html}
 **/
export interface IoTMitigationActionUpdateCACertificateParams {
  /**
   * The action that you want to apply to the CA certificate. The only supported value is `DEACTIVATE`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
}

/**
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html}
 **/
export interface IoTMitigationActionUpdateDeviceCertificateParams {
  /**
   * The action that you want to apply to the device certificate. The only supported value is `DEACTIVATE`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action: Value<string>;
}

/**
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html}
 **/
export interface IoTMitigationActionReplaceDefaultPolicyVersionParams {
  /**
   * The name of the template to be applied. The only supported value is `BLANK_POLICY`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateName: Value<string>;
}

/**
 * Parameters used when defining a mitigation action that enable AWS IoT Core logging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html}
 **/
export interface IoTMitigationActionEnableIoTLoggingParams {
  /**
   * The Amazon Resource Name (ARN) of the IAM role used for logging.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArnForLogging: Value<string>;
  /**
   * Specifies the type of information to be logged.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel: Value<string>;
}

/**
 * Defines the type of action and the parameters for that action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html}
 **/
export interface IoTMitigationActionActionParams {
  /**
   * Specifies the new state for a device certificate. Only a value of `DEACTIVATE` is currently supported.
   *
   * _Required_: No
   *
   * _Type_: [UpdateDeviceCertificateParams](aws-properties-iot-mitigationaction-updatedevicecertificateparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateDeviceCertificateParams?: IoTMitigationActionUpdateDeviceCertificateParams;
  /**
   * Specifies the group to which you want to add the devices.
   *
   * _Required_: No
   *
   * _Type_: [AddThingsToThingGroupParams](aws-properties-iot-mitigationaction-addthingstothinggroupparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddThingsToThingGroupParams?: IoTMitigationActionAddThingsToThingGroupParams;
  /**
   * Specifies the topic to which the finding should be published.
   *
   * _Required_: No
   *
   * _Type_: [PublishFindingToSnsParams](aws-properties-iot-mitigationaction-publishfindingtosnsparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublishFindingToSnsParams?: IoTMitigationActionPublishFindingToSnsParams;
  /**
   * Specifies the logging level and the role with permissions for logging. You cannot specify a logging level of `DISABLED`.
   *
   * _Required_: No
   *
   * _Type_: [EnableIoTLoggingParams](aws-properties-iot-mitigationaction-enableiotloggingparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableIoTLoggingParams?: IoTMitigationActionEnableIoTLoggingParams;
  /**
   * Replaces the policy version with a default or blank policy. You specify the template name. Only a value of `BLANK_POLICY` is currently supported.
   *
   * _Required_: No
   *
   * _Type_: [ReplaceDefaultPolicyVersionParams](aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplaceDefaultPolicyVersionParams?: IoTMitigationActionReplaceDefaultPolicyVersionParams;
  /**
   * Specifies the new state for the CA certificate. Only a value of `DEACTIVATE` is currently supported.
   *
   * _Required_: No
   *
   * _Type_: [UpdateCACertificateParams](aws-properties-iot-mitigationaction-updatecacertificateparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateCACertificateParams?: IoTMitigationActionUpdateCACertificateParams;
}

/**
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html}
 **/
export interface IoTMitigationActionPublishFindingToSnsParams {
  /**
   * The ARN of the topic to which you want to publish the findings.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn: Value<string>;
}
export interface IoTMitigationActionProperties {
  /**
   * The friendly name of the mitigation action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActionName?: Value<string>;
  /**
   * The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.
   *
   * _Required_: Yes
   *
   * _Type_: [ActionParams](aws-properties-iot-mitigationaction-actionparams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActionParams: IoTMitigationActionActionParams;
  /**
   * The IAM role ARN used to apply this mitigation action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Metadata that can be used to manage the mitigation action.
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
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. For API reference, see [CreateMitigationAction](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html) and for general information, see [Mitigation actions](https://docs.aws.amazon.com/iot/latest/developerguide/dd-mitigation-actions.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html}
 */
export interface IoTMitigationActionResource {
  Type: 'AWS::IoT::MitigationAction';
  Properties: IoTMitigationActionProperties;
}
