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

export interface SSMContactsContactChannelProperties {
  /**
   * The name of the contact channel.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.-]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelName: Value<string>;
  /**
   * The details that Incident Manager uses when trying to engage the contact channel.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelAddress: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:(aws|aws-cn|aws-us-gov):ssm-contacts:[-w+=/,.@]*:[0-9]+:([w+=/,.@:-]+)*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContactId: Value<string>;
  /**
   * The type of the contact channel. Incident Manager supports three contact methods:
   */
  ChannelType: Value<string>;
  /**
   * If you want to activate the channel at a later time, you can choose to defer activation. Incident Manager can't engage your contact channel until it has been activated.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeferActivation?: Value<boolean>;
}

/**
 * The `AWS::SSMContacts::ContactChannel` resource specifies a contact channel as the method that Incident Manager uses to engage your contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html}
 */
export interface SSMContactsContactChannelResource {
  Type: 'AWS::SSMContacts::ContactChannel';
  Properties: SSMContactsContactChannelProperties;
}
