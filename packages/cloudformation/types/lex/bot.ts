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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Provides information for updating the user on the progress of fulfilling an intent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdatesspecification.html}
 **/
export interface LexBotFulfillmentUpdatesSpecification {
  /**
   * Provides configuration information for messages sent periodically to the user while the fulfillment Lambda function is running.
   *
   * _Required_: No
   *
   * _Type_: [FulfillmentUpdateResponseSpecification](aws-properties-lex-bot-fulfillmentupdateresponsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateResponse?: LexBotFulfillmentUpdateResponseSpecification;
  /**
   * Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
   *
   * If the `active` field is set to true, the `startResponse`, `updateResponse`, and `timeoutInSeconds` fields are required.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Active: Value<boolean>;
  /**
   * The length of time that the fulfillment Lambda function should run before it times out.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutInSeconds?: Value<number>;
  /**
   * Provides configuration information for the message sent to users when the fulfillment Lambda functions starts running.
   *
   * _Required_: No
   *
   * _Type_: [FulfillmentStartResponseSpecification](aws-properties-lex-bot-fulfillmentstartresponsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartResponse?: LexBotFulfillmentStartResponseSpecification;
}

/**
 * Describes a slot type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottype.html}
 **/
export interface LexBotSlotType {
  /**
   * A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for the slot.
   *
   * _Required_: No
   *
   * _Type_: List of [SlotTypeValue](aws-properties-lex-bot-slottypevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotTypeValues?: List<LexBotSlotTypeValue>;
  /**
   * A description of the slot type. Use the description to help identify the slot type in lists.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent lot type.
   *
   * Only `AMAZON.AlphaNumeric` is supported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParentSlotTypeSignature?: Value<string>;
  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
   */
  ValueSelectionSetting?: LexBotSlotValueSelectionSetting;
  /**
   * Sets the type of external information used to create the slot type.
   *
   * _Required_: No
   *
   * _Type_: [ExternalSourceSetting](aws-properties-lex-bot-externalsourcesetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExternalSourceSetting?: LexBotExternalSourceSetting;
  /**
   * The name of the slot type. A slot type name must be unique withing the account.
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
 * Specifies next steps to run after the dialog code hook finishes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postdialogcodehookinvocationspecification.html}
 **/
export interface LexBotPostDialogCodeHookInvocationSpecification {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond when the code hook succeeds.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessResponse?: LexBotResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureConditional?: LexBotConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutNextStep?: LexBotDialogState;
  /**
   * A list of conditional branches to evaluate after the dialog code hook finishes successfully.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessConditional?: LexBotConditionalSpecification;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond to the user input when the code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutResponse?: LexBotResponseSpecification;
  /**
   * Specifics the next step the bot runs after the dialog code hook finishes successfully.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessNextStep?: LexBotDialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input when the code hook fails.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureResponse?: LexBotResponseSpecification;
  /**
   * Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureNextStep?: LexBotDialogState;
  /**
   * A list of conditional branches to evaluate if the code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutConditional?: LexBotConditionalSpecification;
}

/**
 * A context that must be active for an intent to be selected by Amazon Lex.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-inputcontext.html}
 **/
export interface LexBotInputContext {
  /**
   * The name of the context.
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
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptspecification.html}
 **/
export interface LexBotPromptSpecification {
  /**
   * The maximum number of times the bot tries to elicit a response from the user using this prompt.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetries: Value<number>;
  /**
   * A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MessageGroup](aws-properties-lex-bot-messagegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupsList: List<LexBotMessageGroup>;
  /**
   * Specifies the advanced settings on each attempt of the prompt. The valid keys are `Initial`, `Retry1`, `Retry2`, `Retry3`, `Retry4`, and `Retry5`.
   *
   * _Required_: No
   *
   * _Type_: Map of [PromptAttemptSpecification](aws-properties-lex-bot-promptattemptspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PromptAttemptsSpecification?: { [key: string]: LexBotPromptAttemptSpecification };
  /**
   * Indicates whether the user can interrupt a speech prompt from the bot.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
  /**
   * Indicates how a message is selected from a message group among retries.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageSelectionStrategy?: Value<string>;
}

/**
 * Provides an expression that evaluates to true or false.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-condition.html}
 **/
export interface LexBotCondition {
  /**
   * The expression string that is evaluated.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExpressionString: Value<string>;
}

/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentconfirmationsetting.html}
 **/
export interface LexBotIntentConfirmationSetting {
  /**
   * Prompts the user to confirm the intent. This question should have a yes or no answer.
   *
   * Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the `OrderPizza` intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.
   *
   * _Required_: Yes
   *
   * _Type_: [PromptSpecification](aws-properties-lex-bot-promptspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PromptSpecification: LexBotPromptSpecification;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfirmationResponse?: LexBotResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the intent is declined.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeclinationConditional?: LexBotConditionalSpecification;
  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureConditional?: LexBotConditionalSpecification;
  /**
   * A list of conditional branches to evaluate after the intent is closed.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfirmationConditional?: LexBotConditionalSpecification;
  /**
   * Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the `IsActive` field isn't specified, the default is true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive?: Value<boolean>;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input when the intent confirmation fails.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureResponse?: LexBotResponseSpecification;
  /**
   * The `DialogCodeHookInvocationSetting` object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `InvokeDialogCodeHook`.
   *
   * _Required_: No
   *
   * _Type_: [DialogCodeHookInvocationSetting](aws-properties-lex-bot-dialogcodehookinvocationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  /**
   * Specifies the next step that the bot executes when the customer declines the intent.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeclinationNextStep?: LexBotDialogState;
  /**
   * The `DialogCodeHookInvocationSetting` used when the code hook is invoked during confirmation prompt retries.
   *
   * _Required_: No
   *
   * _Type_: [ElicitationCodeHookInvocationSetting](aws-properties-lex-bot-elicitationcodehookinvocationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElicitationCodeHook?: LexBotElicitationCodeHookInvocationSetting;
  /**
   * Specifies the next step that the bot executes when the customer confirms the intent.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfirmationNextStep?: LexBotDialogState;
  /**
   * The next step to take in the conversation if the confirmation step fails.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureNextStep?: LexBotDialogState;
  /**
   * When the user answers "no" to the question defined in `promptSpecification`, Amazon Lex responds with this response to acknowledge that the intent was canceled.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeclinationResponse?: LexBotResponseSpecification;
}

/**
 * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverride.html}
 **/
export interface LexBotSlotValueOverride {
  /**
   * When the shape value is `List`, it indicates that the `values` field contains a list of slot values. When the value is `Scalar`, it indicates that the `value` field contains a single value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Shape?: Value<string>;
  /**
   * The current value of the slot.
   *
   * _Required_: No
   *
   * _Type_: [SlotValue](aws-properties-lex-bot-slotvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: LexBotSlotValue;
  /**
   * A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
   *
   * _Required_: No
   *
   * _Type_: List of [SlotValueOverride](#aws-properties-lex-bot-slotvalueoverride)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<LexBotSlotValueOverride>;
}

/**
 * The value to set in a slot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalue.html}
 **/
export interface LexBotSlotValue {
  /**
   * The value that Amazon Lex determines for the slot. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the first value in the `resolvedValues` list.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InterpretedValue?: Value<string>;
}

/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-initialresponsesetting.html}
 **/
export interface LexBotInitialResponseSetting {
  /**
   * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
   *
   * _Required_: No
   *
   * _Type_: [DialogCodeHookInvocationSetting](aws-properties-lex-bot-dialogcodehookinvocationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitialResponse?: LexBotResponseSpecification;
  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Conditional?: LexBotConditionalSpecification;
  /**
   * The next step in the conversation.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NextStep?: LexBotDialogState;
}

/**
 * The object that provides message text and its type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-message.html}
 **/
export interface LexBotMessage {
  /**
   * A message in a custom format defined by the client application.
   *
   * _Required_: No
   *
   * _Type_: [CustomPayload](aws-properties-lex-bot-custompayload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomPayload?: LexBotCustomPayload;
  /**
   * A message that defines a response card that the client application can show to the user.
   *
   * _Required_: No
   *
   * _Type_: [ImageResponseCard](aws-properties-lex-bot-imageresponsecard.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageResponseCard?: LexBotImageResponseCard;
  /**
   * A message in plain text format.
   *
   * _Required_: No
   *
   * _Type_: [PlainTextMessage](aws-properties-lex-bot-plaintextmessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlainTextMessage?: LexBotPlainTextMessage;
  /**
   * A message in Speech Synthesis Markup Language (SSML).
   *
   * _Required_: No
   *
   * _Type_: [SSMLMessage](aws-properties-lex-bot-ssmlmessage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SSMLMessage?: LexBotSSMLMessage;
}

/**
 * The current state of the conversation with the user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogstate.html}
 **/
export interface LexBotDialogState {
  /**
   * Defines the action that the bot executes at runtime when the conversation reaches this step.
   *
   * _Required_: No
   *
   * _Type_: [DialogAction](aws-properties-lex-bot-dialogaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DialogAction?: LexBotDialogAction;
  /**
   * Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
   *
   * _Required_: No
   *
   * _Type_: List of [SessionAttribute](aws-properties-lex-bot-sessionattribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionAttributes?: List<LexBotSessionAttribute>;
  /**
   * Override settings to configure the intent state.
   *
   * _Required_: No
   *
   * _Type_: [IntentOverride](aws-properties-lex-bot-intentoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Intent?: LexBotIntentOverride;
}

/**
 * Specifies configuration settings for the alias used to test the bot. If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-testbotaliassettings.html}
 **/
export interface LexBotTestBotAliasSettings {
  /**
   * Specifies a description for the test bot alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specifies settings that are unique to a locale. For example, you can use a different Lambda function depending on the bot's locale.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-lex-bot-botaliaslocalesettings.md) of [BotAliasLocaleSettingsItem](aws-properties-lex-bot-botaliaslocalesettingsitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasLocaleSettings?: List<LexBotBotAliasLocaleSettingsItem>;
  /**
   * Specifies settings for conversation logs that save audio, text, and metadata information for conversations with your users.
   *
   * _Required_: No
   *
   * _Type_: [ConversationLogSettings](aws-properties-lex-bot-conversationlogsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConversationLogSettings?: LexBotConversationLogSettings;
  /**
   * Specifies whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
   *
   * _Required_: No
   *
   * _Type_: [SentimentAnalysisSettings](aws-properties-lex-bot-sentimentanalysissettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SentimentAnalysisSettings?: LexBotSentimentAnalysisSettings;
}

/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-cloudwatchloggrouplogdestination.html}
 **/
export interface LexBotCloudWatchLogGroupLogDestination {
  /**
   * The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogGroupArn: Value<string>;
  /**
   * The prefix of the log stream name within the log group that you specified
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPrefix: Value<string>;
}

/**
 * The default value to use when a user doesn't provide a value for a slot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvaluespecification.html}
 **/
export interface LexBotSlotDefaultValueSpecification {
  /**
   * A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the list.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SlotDefaultValue](aws-properties-lex-bot-slotdefaultvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValueList: List<LexBotSlotDefaultValue>;
}

/**
 * Specifies the audio input specifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiospecification.html}
 **/
export interface LexBotAudioSpecification {
  /**
   * Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTimeoutMs: Value<number>;
  /**
   * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLengthMs: Value<number>;
}

/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-obfuscationsetting.html}
 **/
export interface LexBotObfuscationSetting {
  /**
   * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values. The valid values are `None` and `DefaultObfuscation.`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObfuscationSettingType: Value<string>;
}

/**
 * Provides configuration information for a locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botlocale.html}
 **/
export interface LexBotBotLocale {
  /**
   * Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents. You must configure an `AMAZON.FallbackIntent`. `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NluConfidenceThreshold: Value<number>;
  /**
   * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocaleId: Value<string>;
  /**
   * A description of the bot locale. Use this to help identify the bot locale in lists.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specifies a custom vocabulary to use with a specific locale.
   *
   * _Required_: No
   *
   * _Type_: [CustomVocabulary](aws-properties-lex-bot-customvocabulary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomVocabulary?: LexBotCustomVocabulary;
  /**
   * One or more slot types defined for the locale.
   *
   * _Required_: No
   *
   * _Type_: List of [SlotType](aws-properties-lex-bot-slottype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotTypes?: List<LexBotSlotType>;
  /**
   * One or more intents defined for the locale.
   *
   * _Required_: No
   *
   * _Type_: List of [Intent](aws-properties-lex-bot-intent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Intents?: List<LexBotIntent>;
  /**
   * Defines settings for using an Amazon Polly voice to communicate with a user.
   *
   * _Required_: No
   *
   * _Type_: [VoiceSettings](aws-properties-lex-bot-voicesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VoiceSettings?: LexBotVoiceSettings;
}

/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogdestination.html}
 **/
export interface LexBotTextLogDestination {
  /**
   * Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: [CloudWatchLogGroupLogDestination](aws-properties-lex-bot-cloudwatchloggrouplogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatch: LexBotCloudWatchLogGroupLogDestination;
}

/**
 * Defines an Amazon S3 bucket location.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3location.html}
 **/
export interface LexBotS3Location {
  /**
   * The version of the object in the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectVersion?: Value<string>;
  /**
   * The S3 bucket name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The path and file name to the object in the S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectKey: Value<string>;
}

/**
 * Specifies the default value to use when a user doesn't provide a value for a slot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotdefaultvalue.html}
 **/
export interface LexBotSlotDefaultValue {
  /**
   * The default value to use when a user doesn't provide a value for a slot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue: Value<string>;
}

/**
 * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotpriority.html}
 **/
export interface LexBotSlotPriority {
  /**
   * The priority that Amazon Lex should apply to the slot.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
  /**
   * The name of the slot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotName: Value<string>;
}

/**
 * A key/value pair representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sessionattribute.html}
 **/
export interface LexBotSessionAttribute {
  /**
   * The session-specific context information for the session attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the session attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Contains settings used by Amazon Lex to select a slot value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueselectionsetting.html}
 **/
export interface LexBotSlotValueSelectionSetting {
  /**
   * Provides settings that enable advanced recognition settings for slot values. You can use this to enable using slot values as a custom vocabulary for recognizing user utterances.
   *
   * _Required_: No
   *
   * _Type_: [AdvancedRecognitionSetting](aws-properties-lex-bot-advancedrecognitionsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedRecognitionSetting?: LexBotAdvancedRecognitionSetting;
  /**
   * A regular expression used to validate the value of a slot.
   *
   * _Required_: No
   *
   * _Type_: [SlotValueRegexFilter](aws-properties-lex-bot-slotvalueregexfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegexFilter?: LexBotSlotValueRegexFilter;
  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
   */
  ResolutionStrategy: Value<string>;
}

/**
 * Provides settings that enable advanced recognition settings for slot values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-advancedrecognitionsetting.html}
 **/
export interface LexBotAdvancedRecognitionSetting {
  /**
   * Enables using the slot values as a custom vocabulary for recognizing user utterances.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioRecognitionStrategy?: Value<string>;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehookinvocationsetting.html}
 **/
export interface LexBotDialogCodeHookInvocationSetting {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableCodeHookInvocation: Value<boolean>;
  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationLabel?: Value<string>;
  /**
   * Determines whether a dialog code hook is used when the intent is activated.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive: Value<boolean>;
  /**
   * Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
   *
   * _Required_: Yes
   *
   * _Type_: [PostDialogCodeHookInvocationSpecification](aws-properties-lex-bot-postdialogcodehookinvocationspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostCodeHookSpecification: LexBotPostDialogCodeHookInvocationSpecification;
}

/**
 * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
 *
 * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-imageresponsecard.html}
 **/
export interface LexBotImageResponseCard {
  /**
   * The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subtitle?: Value<string>;
  /**
   * The title to display on the response card. The format of the title is determined by the platform displaying the response card.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUrl?: Value<string>;
  /**
   * A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button.
   *
   * _Required_: No
   *
   * _Type_: List of [Button](aws-properties-lex-bot-button.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Buttons?: List<LexBotButton>;
}

/**
 * Each slot type can have a set of values. Each `SlotTypeValue` represents a value that the slot type can take.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slottypevalue.html}
 **/
export interface LexBotSlotTypeValue {
  /**
   * Additional values related to the slot type entry.
   *
   * _Required_: No
   *
   * _Type_: List of [SampleValue](aws-properties-lex-bot-samplevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Synonyms?: List<LexBotSampleValue>;
  /**
   * The value of the slot type entry.
   *
   * _Required_: Yes
   *
   * _Type_: [SampleValue](aws-properties-lex-bot-samplevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleValue: LexBotSampleValue;
}

/**
 * Describes a button to use on a response card used to gather slot values from a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-button.html}
 **/
export interface LexBotButton {
  /**
   * The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The text that appears on the button. Use this to tell the user what value is returned when they choose this button.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Text: Value<string>;
}

/**
 * Specifies the settings on a prompt attempt.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-promptattemptspecification.html}
 **/
export interface LexBotPromptAttemptSpecification {
  /**
   * Specifies the settings on text input.
   *
   * _Required_: No
   *
   * _Type_: [TextInputSpecification](aws-properties-lex-bot-textinputspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextInputSpecification?: LexBotTextInputSpecification;
  /**
   * Indicates whether the user can interrupt a speech prompt attempt from the bot.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
  /**
   * Indicates the allowed input types of the prompt attempt.
   *
   * _Required_: Yes
   *
   * _Type_: [AllowedInputTypes](aws-properties-lex-bot-allowedinputtypes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedInputTypes: LexBotAllowedInputTypes;
  /**
   * Specifies the settings on audio and DTMF input.
   *
   * _Required_: No
   *
   * _Type_: [AudioAndDTMFInputSpecification](aws-properties-lex-bot-audioanddtmfinputspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioAndDTMFInputSpecification?: LexBotAudioAndDTMFInputSpecification;
}

/**
 * Defines an ASCII text message to send to the user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-plaintextmessage.html}
 **/
export interface LexBotPlainTextMessage {
  /**
   * The message to send to the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-kendraconfiguration.html}
 **/
export interface LexBotKendraConfiguration {
  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryFilterString?: Value<string>;
  /**
   * Determines whether the `AMAZON.KendraSearchIntent` intent uses a custom query string to query the Amazon Kendra index.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryFilterStringEnabled?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the `AMAZON.KendraSearchIntent` intent to search. The index must be in the same account and Region as the Amazon Lex bot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KendraIndex: Value<string>;
}

/**
 * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesource.html}
 **/
export interface LexBotGrammarSlotTypeSource {
  /**
   * The AWS KMS key required to decrypt the contents of the grammar, if any.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The name of the Amazon S3 bucket that contains the grammar source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketName: Value<string>;
  /**
   * The path to the grammar in the Amazon S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectKey: Value<string>;
}

/**
 * Specifies the text input specifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textinputspecification.html}
 **/
export interface LexBotTextInputSpecification {
  /**
   * Time for which a bot waits before re-prompting a customer for text input.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTimeoutMs: Value<number>;
}

/**
 * A set of actions that Amazon Lex should run if the condition is matched.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalbranch.html}
 **/
export interface LexBotConditionalBranch {
  /**
   * Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
   *
   * _Required_: Yes
   *
   * _Type_: [Condition](aws-properties-lex-bot-condition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition: LexBotCondition;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Response?: LexBotResponseSpecification;
  /**
   * The name of the branch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The next step in the conversation.
   *
   * _Required_: Yes
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NextStep: LexBotDialogState;
}

/**
 * Settings requried for a slot type based on a grammar that you provide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-grammarslottypesetting.html}
 **/
export interface LexBotGrammarSlotTypeSetting {
  /**
   * The source of the grammar used to create the slot type.
   *
   * _Required_: No
   *
   * _Type_: [GrammarSlotTypeSource](aws-properties-lex-bot-grammarslottypesource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: LexBotGrammarSlotTypeSource;
}

/**
 * Settings used when Amazon Lex successfully captures a slot value from a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotcapturesetting.html}
 **/
export interface LexBotSlotCaptureSetting {
  /**
   * A list of conditional branches to evaluate after the slot value is captured.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureConditional?: LexBotConditionalSpecification;
  /**
   * A list of conditional branches to evaluate when the slot value isn't captured.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureConditional?: LexBotConditionalSpecification;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureResponse?: LexBotResponseSpecification;
  /**
   * Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureNextStep?: LexBotDialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input when the slot fails to be captured.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureResponse?: LexBotResponseSpecification;
  /**
   * Code hook called after Amazon Lex successfully captures a slot value.
   *
   * _Required_: No
   *
   * _Type_: [DialogCodeHookInvocationSetting](aws-properties-lex-bot-dialogcodehookinvocationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHook?: LexBotDialogCodeHookInvocationSetting;
  /**
   * Specifies the next step that the bot runs when the slot value code is not recognized.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureNextStep?: LexBotDialogState;
  /**
   * Code hook called when Amazon Lex doesn't capture a slot value.
   *
   * _Required_: No
   *
   * _Type_: [ElicitationCodeHookInvocationSetting](aws-properties-lex-bot-elicitationcodehookinvocationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElicitationCodeHook?: LexBotElicitationCodeHookInvocationSetting;
}

/**
 * Defines settings to enable text conversation logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-textlogsetting.html}
 **/
export interface LexBotTextLogSetting {
  /**
   * Specifies the Amazon CloudWatch Logs destination log group for conversation text logs.
   *
   * _Required_: Yes
   *
   * _Type_: [TextLogDestination](aws-properties-lex-bot-textlogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: LexBotTextLogDestination;
  /**
   * Determines whether conversation logs should be stored for an alias.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conditionalspecification.html}
 **/
export interface LexBotConditionalSpecification {
  /**
   * The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
   *
   * _Required_: Yes
   *
   * _Type_: [DefaultConditionalBranch](aws-properties-lex-bot-defaultconditionalbranch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultBranch: LexBotDefaultConditionalBranch;
  /**
   * Determines whether a conditional branch is active. When `IsActive` is false, the conditions are not evaluated.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive: Value<boolean>;
  /**
   * A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ConditionalBranch](aws-properties-lex-bot-conditionalbranch.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionalBranches: List<LexBotConditionalBranch>;
}

/**
 * Describes a session context that is activated when an intent is fulfilled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-outputcontext.html}
 **/
export interface LexBotOutputContext {
  /**
   * The number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TurnsToLive: Value<number>;
  /**
   * The amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeToLiveInSeconds: Value<number>;
  /**
   * The name of the output context.
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
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-lambdacodehook.html}
 **/
export interface LexBotLambdaCodeHook {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn: Value<string>;
  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHookInterfaceVersion: Value<string>;
}

/**
 * Specifies the audio and DTMF input specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audioanddtmfinputspecification.html}
 **/
export interface LexBotAudioAndDTMFInputSpecification {
  /**
   * Specifies the settings on DTMF input.
   *
   * _Required_: No
   *
   * _Type_: [DTMFSpecification](aws-properties-lex-bot-dtmfspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DTMFSpecification?: LexBotDTMFSpecification;
  /**
   * Specifies the settings on audio input.
   *
   * _Required_: No
   *
   * _Type_: [AudioSpecification](aws-properties-lex-bot-audiospecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSpecification?: LexBotAudioSpecification;
  /**
   * Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTimeoutMs: Value<number>;
}

/**
 * Determines if a Lambda function should be invoked for a specific intent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentcodehooksetting.html}
 **/
export interface LexBotFulfillmentCodeHookSetting {
  /**
   * Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.
   *
   * _Required_: No
   *
   * _Type_: [PostFulfillmentStatusSpecification](aws-properties-lex-bot-postfulfillmentstatusspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostFulfillmentStatusSpecification?: LexBotPostFulfillmentStatusSpecification;
  /**
   * Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.
   *
   * _Required_: No
   *
   * _Type_: [FulfillmentUpdatesSpecification](aws-properties-lex-bot-fulfillmentupdatesspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FulfillmentUpdatesSpecification?: LexBotFulfillmentUpdatesSpecification;
  /**
   * Determines whether the fulfillment code hook is used. When `active` is false, the code hook doesn't run.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive?: Value<boolean>;
  /**
   * Indicates whether a Lambda function should be invoked to fulfill a specific intent.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Provides a regular expression used to validate the value of a slot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueregexfilter.html}
 **/
export interface LexBotSlotValueRegexFilter {
  /**
   * A regular expression used to validate the value of a slot.
   *
   * Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:
   */
  Pattern: Value<string>;
}

/**
 * A set of actions that Amazon Lex should run if none of the other conditions are met.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-defaultconditionalbranch.html}
 **/
export interface LexBotDefaultConditionalBranch {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond the user input.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Response?: LexBotResponseSpecification;
  /**
   * The next step in the conversation.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NextStep?: LexBotDialogState;
}

/**
 * Specifies an entry in a custom vocabulary.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabularyitem.html}
 **/
export interface LexBotCustomVocabularyItem {
  /**
   * The DisplayAs value for the custom vocabulary item from the custom vocabulary list.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayAs?: Value<string>;
  /**
   * Specifies 1 - 4 words that should be recognized.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Phrase: Value<string>;
  /**
   * Specifies the degree to which the phrase recognition is boosted. The default value is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
}

/**
 * Specifies a custom vocabulary. A custom vocabulary is a list of words that you expect to be used during a conversation with your bot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-customvocabulary.html}
 **/
export interface LexBotCustomVocabulary {
  /**
   * Specifies a list of words that you expect to be used during a conversation with your bot.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CustomVocabularyItem](aws-properties-lex-bot-customvocabularyitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomVocabularyItems: List<LexBotCustomVocabularyItem>;
}

/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-voicesettings.html}
 **/
export interface LexBotVoiceSettings {
  /**
   * The identifier of the Amazon Polly voice to use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VoiceId: Value<string>;
  /**
   * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the [`engine` parameter of the `SynthesizeSpeech` operation](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine) in the _Amazon Polly developer guide_.
   *
   * If you do not specify a value, the default is `standard`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Engine?: Value<string>;
}

/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologsetting.html}
 **/
export interface LexBotAudioLogSetting {
  /**
   * Specifies the location of the audio log files collected when conversation logging is enabled for a bot.
   *
   * _Required_: Yes
   *
   * _Type_: [AudioLogDestination](aws-properties-lex-bot-audiologdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: LexBotAudioLogDestination;
  /**
   * Determines whether audio logging in enabled for the bot.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Override settings to configure the intent state.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentoverride.html}
 **/
export interface LexBotIntentOverride {
  /**
   * A map of all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden.
   *
   * _Required_: No
   *
   * _Type_: List of [SlotValueOverrideMap](aws-properties-lex-bot-slotvalueoverridemap.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slots?: List<LexBotSlotValueOverrideMap>;
  /**
   * The name of the intent. Only required when you're switching intents.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Maps a slot name to the [SlotValueOverride](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_SlotValueOverride.html) object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueoverridemap.html}
 **/
export interface LexBotSlotValueOverrideMap {
  /**
   * The name of the slot.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotName?: Value<string>;
  /**
   * The SlotValueOverride object to which the slot name will be mapped.
   *
   * _Required_: No
   *
   * _Type_: [SlotValueOverride](aws-properties-lex-bot-slotvalueoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotValueOverride?: LexBotSlotValueOverride;
}

/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-codehookspecification.html}
 **/
export interface LexBotCodeHookSpecification {
  /**
   * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
   *
   * _Required_: Yes
   *
   * _Type_: [LambdaCodeHook](aws-properties-lex-bot-lambdacodehook.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaCodeHook: LexBotLambdaCodeHook;
}

/**
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-waitandcontinuespecification.html}
 **/
export interface LexBotWaitAndContinueSpecification {
  /**
   * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
   *
   * _Required_: Yes
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitingResponse: LexBotResponseSpecification;
  /**
   * A response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
   *
   * _Required_: No
   *
   * _Type_: [StillWaitingResponseSpecification](aws-properties-lex-bot-stillwaitingresponsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StillWaitingResponse?: LexBotStillWaitingResponseSpecification;
  /**
   * Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses for a slot aren't used. If the `IsActive` field isn't specified, the default is true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive?: Value<boolean>;
  /**
   * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
   *
   * _Required_: Yes
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContinueResponse: LexBotResponseSpecification;
}

/**
 * Specifies the elicitation setting details eliciting a slot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slotvalueelicitationsetting.html}
 **/
export interface LexBotSlotValueElicitationSetting {
  /**
   * The prompt that Amazon Lex uses to elicit the slot value from the user.
   *
   * _Required_: No
   *
   * _Type_: [PromptSpecification](aws-properties-lex-bot-promptspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PromptSpecification?: LexBotPromptSpecification;
  /**
   * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
   *
   * _Required_: No
   *
   * _Type_: [WaitAndContinueSpecification](aws-properties-lex-bot-waitandcontinuespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitAndContinueSpecification?: LexBotWaitAndContinueSpecification;
  /**
   * Specifies whether the slot is required or optional.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotConstraint: Value<string>;
  /**
   * Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.
   *
   * _Required_: No
   *
   * _Type_: [SlotCaptureSetting](aws-properties-lex-bot-slotcapturesetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotCaptureSetting?: LexBotSlotCaptureSetting;
  /**
   * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
   *
   * _Required_: No
   *
   * _Type_: List of [SampleUtterance](aws-properties-lex-bot-sampleutterance.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleUtterances?: List<LexBotSampleUtterance>;
  /**
   * A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.
   *
   * _Required_: No
   *
   * _Type_: [SlotDefaultValueSpecification](aws-properties-lex-bot-slotdefaultvaluespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValueSpecification?: LexBotSlotDefaultValueSpecification;
}

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettings.html}
 **/
export interface LexBotBotAliasLocaleSettings {
  /**
   * Specifies the Lambda function that should be used in the locale.
   *
   * _Required_: No
   *
   * _Type_: [CodeHookSpecification](aws-properties-lex-bot-codehookspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHookSpecification?: LexBotCodeHookSpecification;
  /**
   * Determines whether the locale is enabled for the bot. If the value is `false`, the locale isn't available for use.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Indicates whether a slot can return multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-multiplevaluessetting.html}
 **/
export interface LexBotMultipleValuesSetting {
  /**
   * Indicates whether a slot can return multiple values. When `true`, the slot may return more than one value in a response. When `false`, the slot returns only a single value.
   *
   * Multi-value slots are only available in the en-US locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException`.
   *
   * If the `allowMutlipleValues` is not set, the default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowMultipleValues?: Value<boolean>;
}

/**
 * Provides information about the external source of the slot type's definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-externalsourcesetting.html}
 **/
export interface LexBotExternalSourceSetting {
  /**
   * Settings required for a slot type based on a grammar that you provide.
   *
   * _Required_: No
   *
   * _Type_: [GrammarSlotTypeSetting](aws-properties-lex-bot-grammarslottypesetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrammarSlotTypeSetting?: LexBotGrammarSlotTypeSetting;
}

/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogcodehooksetting.html}
 **/
export interface LexBotDialogCodeHookSetting {
  /**
   * Enables the dialog code hook so that it processes user requests.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Specifies the allowed input types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-allowedinputtypes.html}
 **/
export interface LexBotAllowedInputTypes {
  /**
   * Indicates whether DTMF input is allowed.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowDTMFInput: Value<boolean>;
  /**
   * Indicates whether audio input is allowed.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowAudioInput: Value<boolean>;
}

/**
 * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentstartresponsespecification.html}
 **/
export interface LexBotFulfillmentStartResponseSpecification {
  /**
   * The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DelayInSeconds: Value<number>;
  /**
   * 1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MessageGroup](aws-properties-lex-bot-messagegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroups: List<LexBotMessageGroup>;
  /**
   * Determines whether the user can interrupt the start message while it is playing.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
}

/**
 * Represents an action that the user wants to perform.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intent.html}
 **/
export interface LexBotIntent {
  /**
   * A description of the intent. Use the description to help identify the intent in lists.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A unique identifier for the built-in intent to base this intent on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParentIntentSignature?: Value<string>;
  /**
   * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
   *
   * _Required_: No
   *
   * _Type_: [InitialResponseSetting](aws-properties-lex-bot-initialresponsesetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitialResponseSetting?: LexBotInitialResponseSetting;
  /**
   * Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user.
   *
   * _Required_: No
   *
   * _Type_: [FulfillmentCodeHookSetting](aws-properties-lex-bot-fulfillmentcodehooksetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FulfillmentCodeHook?: LexBotFulfillmentCodeHookSetting;
  /**
   * Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent.
   *
   * _Required_: No
   *
   * _Type_: [IntentConfirmationSetting](aws-properties-lex-bot-intentconfirmationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntentConfirmationSetting?: LexBotIntentConfirmationSetting;
  /**
   * The name of the intent. Intent names must be unique within the locale that contains the intent and can't match the name of any built-in intent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of slots that the intent requires for fulfillment.
   *
   * _Required_: No
   *
   * _Type_: List of [Slot](aws-properties-lex-bot-slot.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slots?: List<LexBotSlot>;
  /**
   * Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction.
   *
   * _Required_: No
   *
   * _Type_: [DialogCodeHookSetting](aws-properties-lex-bot-dialogcodehooksetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DialogCodeHook?: LexBotDialogCodeHookSetting;
  /**
   * A list of contexts that must be active for this intent to be considered by Amazon Lex.
   *
   * _Required_: No
   *
   * _Type_: List of [InputContext](aws-properties-lex-bot-inputcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputContexts?: List<LexBotInputContext>;
  /**
   * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
   *
   * _Required_: No
   *
   * _Type_: [KendraConfiguration](aws-properties-lex-bot-kendraconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KendraConfiguration?: LexBotKendraConfiguration;
  /**
   * Sets the response that Amazon Lex sends to the user when the intent is closed.
   *
   * _Required_: No
   *
   * _Type_: [IntentClosingSetting](aws-properties-lex-bot-intentclosingsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntentClosingSetting?: LexBotIntentClosingSetting;
  /**
   * A list of contexts that the intent activates when it is fulfilled.
   *
   * _Required_: No
   *
   * _Type_: List of [OutputContext](aws-properties-lex-bot-outputcontext.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputContexts?: List<LexBotOutputContext>;
  /**
   * Indicates the priority for slots. Amazon Lex prompts the user for slot values in priority order.
   *
   * _Required_: No
   *
   * _Type_: List of [SlotPriority](aws-properties-lex-bot-slotpriority.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotPriorities?: List<LexBotSlotPriority>;
  /**
   * A list of utterances that a user might say to signal the intent.
   *
   * _Required_: No
   *
   * _Type_: List of [SampleUtterance](aws-properties-lex-bot-sampleutterance.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleUtterances?: List<LexBotSampleUtterance>;
}

/**
 * Defines the action that the bot executes at runtime when the conversation reaches this step.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dialogaction.html}
 **/
export interface LexBotDialogAction {
  /**
   * The action that the bot should execute. Valid values are `ElicitIntent`, `StartIntent`, `ElicitSlot`, `EvaluateConditional`, `InvokeDialogCodeHook`, `ConfirmIntent`, `FulfillIntent`, `CloseIntent`, and `EndConversation`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * If the dialog action is `ElicitSlot`, defines the slot to elicit from the user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotToElicit?: Value<string>;
  /**
   * When true the next message for the intent is not used.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuppressNextMessage?: Value<boolean>;
}

/**
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-responsespecification.html}
 **/
export interface LexBotResponseSpecification {
  /**
   * A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MessageGroup](aws-properties-lex-bot-messagegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupsList: List<LexBotMessageGroup>;
  /**
   * Indicates whether the user can interrupt a speech response from Amazon Lex.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
}

/**
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-ssmlmessage.html}
 **/
export interface LexBotSSMLMessage {
  /**
   * The SSML text that defines the prompt.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * Specifies the DTMF input specifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dtmfspecification.html}
 **/
export interface LexBotDTMFSpecification {
  /**
   * The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionCharacter: Value<string>;
  /**
   * How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTimeoutMs: Value<number>;
  /**
   * The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndCharacter: Value<string>;
  /**
   * The maximum number of DTMF digits allowed in an utterance.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLength: Value<number>;
}

/**
 * Provides one or more messages that Amazon Lex should send to the user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-messagegroup.html}
 **/
export interface LexBotMessageGroup {
  /**
   * The primary message that Amazon Lex should send to the user.
   *
   * _Required_: Yes
   *
   * _Type_: [Message](aws-properties-lex-bot-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message: LexBotMessage;
  /**
   * Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.
   *
   * _Required_: No
   *
   * _Type_: List of [Message](aws-properties-lex-bot-message.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variations?: List<LexBotMessage>;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-elicitationcodehookinvocationsetting.html}
 **/
export interface LexBotElicitationCodeHookInvocationSetting {
  /**
   * Indicates whether a Lambda function should be invoked for the dialog.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableCodeHookInvocation: Value<boolean>;
  /**
   * A label that indicates the dialog step from which the dialog code hook is happening.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationLabel?: Value<string>;
}

/**
 * Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see [https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete](https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete)
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-postfulfillmentstatusspecification.html}
 **/
export interface LexBotPostFulfillmentStatusSpecification {
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond when the fulfillment is successful.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessResponse?: LexBotResponseSpecification;
  /**
   * A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureConditional?: LexBotConditionalSpecification;
  /**
   * Specifies the next step that the bot runs when the fulfillment code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutNextStep?: LexBotDialogState;
  /**
   * A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessConditional?: LexBotConditionalSpecification;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't completed within the timeout period.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutResponse?: LexBotResponseSpecification;
  /**
   * Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessNextStep?: LexBotDialogState;
  /**
   * Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't successful.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureResponse?: LexBotResponseSpecification;
  /**
   * Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureNextStep?: LexBotDialogState;
  /**
   * A list of conditional branches to evaluate if the fulfillment code hook times out.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutConditional?: LexBotConditionalSpecification;
}

/**
 * Specifies the definition of a slot. Amazon Lex elicits slot values from uses to fulfill the user's intent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-slot.html}
 **/
export interface LexBotSlot {
  /**
   * The description of the slot.
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
   * The name of the slot type that this slot is based on. The slot type defines the acceptable values for the slot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlotTypeName: Value<string>;
  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
   */
  ValueElicitationSetting: LexBotSlotValueElicitationSetting;
  /**
   * Determines whether the contents of the slot are obfuscated in Amazon CloudWatch Logs logs. Use obfuscated slots to protect information such as personally identifiable information (PII) in logs.
   *
   * _Required_: No
   *
   * _Type_: [ObfuscationSetting](aws-properties-lex-bot-obfuscationsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObfuscationSetting?: LexBotObfuscationSetting;
  /**
   * The name given to the slot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Indicates whether a slot can return multiple values.
   *
   * _Required_: No
   *
   * _Type_: [MultipleValuesSetting](aws-properties-lex-bot-multiplevaluessetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultipleValuesSetting?: LexBotMultipleValuesSetting;
}

/**
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sampleutterance.html}
 **/
export interface LexBotSampleUtterance {
  /**
   * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Utterance: Value<string>;
}

/**
 * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-fulfillmentupdateresponsespecification.html}
 **/
export interface LexBotFulfillmentUpdateResponseSpecification {
  /**
   * 1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MessageGroup](aws-properties-lex-bot-messagegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroups: List<LexBotMessageGroup>;
  /**
   * Determines whether the user can interrupt an update message while it is playing.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
  /**
   * The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrequencyInSeconds: Value<number>;
}

/**
 * Specifies locale settings for a single locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-botaliaslocalesettingsitem.html}
 **/
export interface LexBotBotAliasLocaleSettingsItem {
  /**
   * Specifies the locale that the settings apply to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocaleId: Value<string>;
  /**
   * Specifies locale settings for a locale.
   *
   * _Required_: Yes
   *
   * _Type_: [BotAliasLocaleSettings](aws-properties-lex-bot-botaliaslocalesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasLocaleSetting: LexBotBotAliasLocaleSettings;
}

/**
 * Provides information on additional privacy protections Amazon Lex should use with the bot's data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-dataprivacy.html}
 **/
export interface LexBotDataPrivacy {
  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ](http://aws.amazon.com/lex/faqs#data-security).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChildDirected: Value<boolean>;
}

/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-intentclosingsetting.html}
 **/
export interface LexBotIntentClosingSetting {
  /**
   * Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the `IsActive` field isn't specified, the default is true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsActive?: Value<boolean>;
  /**
   * The response that Amazon Lex sends to the user when the intent is complete.
   *
   * _Required_: No
   *
   * _Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClosingResponse?: LexBotResponseSpecification;
  /**
   * A list of conditional branches associated with the intent's closing response. These branches are executed when the `nextStep` attribute is set to `EvalutateConditional`.
   *
   * _Required_: No
   *
   * _Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Conditional?: LexBotConditionalSpecification;
  /**
   * Specifies the next step that the bot executes after playing the intent's closing response.
   *
   * _Required_: No
   *
   * _Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NextStep?: LexBotDialogState;
}

/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-conversationlogsettings.html}
 **/
export interface LexBotConversationLogSettings {
  /**
   * The Amazon CloudWatch Logs settings for logging text and metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [TextLogSetting](aws-properties-lex-bot-textlogsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextLogSettings?: List<LexBotTextLogSetting>;
  /**
   * The Amazon S3 settings for logging audio to an S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioLogSetting](aws-properties-lex-bot-audiologsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioLogSettings?: List<LexBotAudioLogSetting>;
}

/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-sentimentanalysissettings.html}
 **/
export interface LexBotSentimentAnalysisSettings {
  /**
   * Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetectSentiment: Value<boolean>;
}

/**
 * The location of audio log files collected when conversation logging is enabled for a bot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-audiologdestination.html}
 **/
export interface LexBotAudioLogDestination {
  /**
   * Specifies the Amazon S3 bucket where the audio files are stored.
   *
   * _Required_: Yes
   *
   * _Type_: [S3BucketLogDestination](aws-properties-lex-bot-s3bucketlogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: LexBotS3BucketLogDestination;
}

/**
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-stillwaitingresponsespecification.html}
 **/
export interface LexBotStillWaitingResponseSpecification {
  /**
   * One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MessageGroup](aws-properties-lex-bot-messagegroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupsList: List<LexBotMessageGroup>;
  /**
   * If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutInSeconds: Value<number>;
  /**
   * Indicates that the user can interrupt the response by speaking while the message is being played.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowInterrupt?: Value<boolean>;
  /**
   * How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrequencyInSeconds: Value<number>;
}

/**
 * Specifies an Amazon S3 bucket for logging audio conversations
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-s3bucketlogdestination.html}
 **/
export interface LexBotS3BucketLogDestination {
  /**
   * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The S3 prefix to assign to audio log files.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPrefix: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketArn: Value<string>;
}

/**
 * A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-custompayload.html}
 **/
export interface LexBotCustomPayload {
  /**
   * The string that is sent to your application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * Defines one of the values for a slot type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-bot-samplevalue.html}
 **/
export interface LexBotSampleValue {
  /**
   * The value that can be used for a slot type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}
export interface LexBotProperties {
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
   * Indicates whether Amazon Lex V2 should automatically build the locales for the bot after a change.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoBuildBotLocales?: Value<boolean>;
  /**
   * A list of locales for the bot.
   *
   * _Required_: No
   *
   * _Type_: List of [BotLocale](aws-properties-lex-bot-botlocale.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotLocales?: List<LexBotBotLocale>;
  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
   *
   * You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdleSessionTTLInSeconds: Value<number>;
  /**
   * The Amazon S3 location of files used to import a bot. The files must be in the import format specified in [JSON format for importing and exporting](https://docs.aws.amazon.com/lexv2/latest/dg/import-export-format.html) in the _Amazon Lex developer guide._
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-lex-bot-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotFileS3Location?: LexBotS3Location;
  /**
   * Specifies configuration settings for the alias used to test the bot. If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
   *
   * _Required_: No
   *
   * _Type_: [TestBotAliasSettings](aws-properties-lex-bot-testbotaliassettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TestBotAliasSettings?: LexBotTestBotAliasSettings;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The name of the bot locale.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the `UpdateBot` operation to update tags. To update tags, use the `TagResource` operation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotTags?: List<ResourceTag>;
  /**
   * A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the `UpdateAlias` operation to update tags. To update tags on the test alias, use the `TagResource` operation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TestBotAliasTags?: List<ResourceTag>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [DataPrivacy](aws-properties-lex-bot-dataprivacy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataPrivacy: LexBotDataPrivacy;
}

/**
 * **Note**
 *
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 *
 * Specifies an Amazon Lex conversational bot.
 *
 * You must configure an intent based on the `AMAZON.FallbackIntent` built-in intent. If you don't add one, creating the bot will fail.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html}
 */
export interface LexBotResource {
  Type: 'AWS::Lex::Bot';
  Properties: LexBotProperties;
}
