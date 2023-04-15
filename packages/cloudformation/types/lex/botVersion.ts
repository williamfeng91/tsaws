/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The version of a bot used for a bot locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocaledetails.html}
 **/
export interface LexBotVersionBotVersionLocaleDetails {
  /**
   * The version of a bot used for a bot locale.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceBotVersion: Value<string>;
}

/**
 * Specifies the locale that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botversion-botversionlocalespecification.html}
 **/
export interface LexBotVersionBotVersionLocaleSpecification {
  /**
   * The identifier of the locale to add to the version.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocaleId: Value<string>;
  /**
   * The version of a bot used for a bot locale.
   *
   * _Required_: Yes
   *
   * _Type_: [BotVersionLocaleDetails](aws-properties-lex-botversion-botversionlocaledetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotVersionLocaleDetails: LexBotVersionBotVersionLocaleDetails;
}
export interface LexBotVersionProperties {
  /**
   * The description of the version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The unique identifier of the bot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BotId: Value<string>;
  /**
   * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
   *
   * _Required_: Yes
   *
   * _Type_: [List](aws-properties-lex-botversion-botversionlocalespecification.md) of [BotVersionLocaleSpecification](aws-properties-lex-botversion-botversionlocalespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotVersionLocaleSpecification: List<LexBotVersionBotVersionLocaleSpecification>;
}

/**
 * **Note**
 *
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 *
 * Specifies a new version of the bot based on the `DRAFT` version. If the `DRAFT` version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.
 *
 * When you specify the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html}
 */
export interface LexBotVersionResource {
  Type: 'AWS::Lex::BotVersion';
  Properties: LexBotVersionProperties;
}
