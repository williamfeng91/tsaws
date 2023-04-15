/**
 * Supported regions:
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains outbound call configuration for an outbound campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html}
 **/
export interface ConnectCampaignsCampaignOutboundCallConfig {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectContactFlowArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectQueueArn: Value<string>;
  /**
   * Whether answering machine detection has been enabled.
   *
   * _Required_: No
   *
   * _Type_: [AnswerMachineDetectionConfig](aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnswerMachineDetectionConfig?: ConnectCampaignsCampaignAnswerMachineDetectionConfig;
  /**
   * The phone number associated with the outbound call. This is the caller ID that is displayed to customers when an agent calls them.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectSourcePhoneNumber?: Value<string>;
}

/**
 * Contains progressive dialer configuration for an outbound campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html}
 **/
export interface ConnectCampaignsCampaignProgressiveDialerConfig {
  /**
   * Bandwidth allocation for the progressive dialer.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BandwidthAllocation: Value<number>;
}

/**
 * Contains information about answering machine detection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html}
 **/
export interface ConnectCampaignsCampaignAnswerMachineDetectionConfig {
  /**
   * Whether answering machine detection is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAnswerMachineDetection: Value<boolean>;
}

/**
 * Contains predictive dialer configuration for an outbound campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html}
 **/
export interface ConnectCampaignsCampaignPredictiveDialerConfig {
  /**
   * Bandwidth allocation for the predictive dialer.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BandwidthAllocation: Value<number>;
}

/**
 * Contains dialer configuration for an outbound campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html}
 **/
export interface ConnectCampaignsCampaignDialerConfig {
  /**
   * The configuration of the predictive dialer.
   *
   * _Required_: No
   *
   * _Type_: [PredictiveDialerConfig](aws-properties-connectcampaigns-campaign-predictivedialerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PredictiveDialerConfig?: ConnectCampaignsCampaignPredictiveDialerConfig;
  /**
   * The configuration of the progressive dialer.
   *
   * _Required_: No
   *
   * _Type_: [ProgressiveDialerConfig](aws-properties-connectcampaigns-campaign-progressivedialerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgressiveDialerConfig?: ConnectCampaignsCampaignProgressiveDialerConfig;
}
export interface ConnectCampaignsCampaignProperties {
  /**
   * Contains information about the outbound call configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [OutboundCallConfig](aws-properties-connectcampaigns-campaign-outboundcallconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutboundCallConfig: ConnectCampaignsCampaignOutboundCallConfig;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Connect instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectInstanceArn: Value<string>;
  /**
   * Contains information about the dialer configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [DialerConfig](aws-properties-connectcampaigns-campaign-dialerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DialerConfig: ConnectCampaignsCampaignDialerConfig;
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the campaign.
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
 * Contains information about an outbound campaign.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html}
 */
export interface ConnectCampaignsCampaignResource {
  Type: 'AWS::ConnectCampaigns::Campaign';
  Properties: ConnectCampaignsCampaignProperties;
}
