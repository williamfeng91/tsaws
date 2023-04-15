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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `SsmAutomation` property type specifies details about the Systems Manager automation document that will be used as a runbook during an incident.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html}
 **/
export interface SSMIncidentsResponsePlanSsmAutomation {
  /**
   * The key-value pair parameters to use when running the automation document.
   *
   * _Required_: No
   *
   * _Type_: List of [SsmParameter](aws-properties-ssmincidents-responseplan-ssmparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: List<SSMIncidentsResponsePlanSsmParameter>;
  /**
   * The account that the automation document will be run in. This can be in either the management account or an application account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IMPACTED_ACCOUNT | RESPONSE_PLAN_OWNER_ACCOUNT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAccount?: Value<string>;
  /**
   * The key-value pairs to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
   *
   * _Required_: No
   *
   * _Type_: List of [DynamicSsmParameter](aws-properties-ssmincidents-responseplan-dynamicssmparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamicParameters?: List<SSMIncidentsResponsePlanDynamicSsmParameter>;
  /**
   * The automation document's version to use when running.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentVersion?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^arn:aws(-cn|-us-gov)?:iam::([0-9]{12})?:role/.+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The automation document's name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9_-.:/]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentName: Value<string>;
}

/**
 * Information about third-party services integrated into a response plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-integration.html}
 **/
export interface SSMIncidentsResponsePlanIntegration {
  /**
   * Information about the PagerDuty service where the response plan creates an incident.
   *
   * _Required_: Yes
   *
   * _Type_: [PagerDutyConfiguration](aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PagerDutyConfiguration: SSMIncidentsResponsePlanPagerDutyConfiguration;
}

/**
 * Details about the PagerDuty service where the response plan creates an incident.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html}
 **/
export interface SSMIncidentsResponsePlanPagerDutyIncidentConfiguration {
  /**
   * The ID of the PagerDuty service that the response plan associates with an incident when it launches.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceId: Value<string>;
}

/**
 * When you add a runbook to a response plan, you can specify the parameters the runbook should use at runtime. Response plans support parameters with both static and dynamic values. For static values, you enter the value when you define the parameter in the response plan. For dynamic values, the system determines the correct parameter value by collecting information from the incident. Incident Manager supports the following dynamic parameters:
 *
 * **Incident ARN**
 *
 * When Incident Manager creates an incident, the system captures the Amazon Resource Name (ARN) of the corresponding incident record and enters it for this parameter in the runbook.
 *
 * **Note**
 *
 * This value can only be assigned to parameters of type `String`. If assigned to a parameter of any other type, the runbook fails to run.
 *
 * **Involved resources**
 *
 * When Incident Manager creates an incident, the system captures the ARNs of the resources involved in the incident. These resource ARNs are then assigned to this parameter in the runbook.
 *
 * **Note**
 *
 * This value can only be assigned to parameters of type `StringList`. If assigned to a parameter of any other type, the runbook fails to run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparameter.html}
 **/
export interface SSMIncidentsResponsePlanDynamicSsmParameter {
  /**
   * The dynamic parameter value.
   *
   * _Required_: Yes
   *
   * _Type_: [DynamicSsmParameterValue](aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: SSMIncidentsResponsePlanDynamicSsmParameterValue;
  /**
   * The key parameter to use when running the Systems Manager Automation runbook.
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
 * Details about the PagerDuty configuration for a response plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html}
 **/
export interface SSMIncidentsResponsePlanPagerDutyConfiguration {
  /**
   * The ID of the AWS Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretId: Value<string>;
  /**
   * Details about the PagerDuty service associated with the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [PagerDutyIncidentConfiguration](aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PagerDutyIncidentConfiguration: SSMIncidentsResponsePlanPagerDutyIncidentConfiguration;
  /**
   * The name of the PagerDuty configuration.
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
 * The dynamic parameter value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html}
 **/
export interface SSMIncidentsResponsePlanDynamicSsmParameterValue {
  /**
   * Variable dynamic parameters. A parameter value is determined when an incident is created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `INCIDENT_RECORD_ARN | INVOLVED_RESOURCES`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variable?: Value<string>;
}

/**
 * The `Action` property type specifies the configuration to launch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html}
 **/
export interface SSMIncidentsResponsePlanAction {
  /**
   * Details about the Systems Manager automation document that will be used as a runbook during an incident.
   *
   * _Required_: No
   *
   * _Type_: [SsmAutomation](aws-properties-ssmincidents-responseplan-ssmautomation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SsmAutomation?: SSMIncidentsResponsePlanSsmAutomation;
}

/**
 * The SNS topic that's used by AWS Chatbot to notify the incidents chat channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-notificationtargetitem.html}
 **/
export interface SSMIncidentsResponsePlanNotificationTargetItem {
  /**
   * The Amazon Resource Name (ARN) of the SNS topic.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsTopicArn?: Value<string>;
}

/**
 * The key-value pair parameters to use when running the automation document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html}
 **/
export interface SSMIncidentsResponsePlanSsmParameter {
  /**
   * The value parameter to use when running the automation document.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * The key parameter to use when running the automation document.
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
 * The AWS Chatbot chat channel used for collaboration during an incident.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-chatchannel.html}
 **/
export interface SSMIncidentsResponsePlanChatChannel {
  /**
   * The SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the SNS topics
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChatbotSns?: List<Value<string>>;
}

/**
 * The `IncidentTemplate` property type specifies details used to create an incident when using this response plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html}
 **/
export interface SSMIncidentsResponsePlanIncidentTemplate {
  /**
   * Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.
   *
   * **Possible impacts:**
   */
  Impact: Value<number>;
  /**
   * Tags to assign to the template. When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncidentTags?: List<ResourceTag>;
  /**
   * The summary describes what has happened during the incident.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `8000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Summary?: Value<string>;
  /**
   * The title of the incident is a brief and easily recognizable.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Title: Value<string>;
  /**
   * The SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel using the SNS topics.
   *
   * _Required_: No
   *
   * _Type_: List of [NotificationTargetItem](aws-properties-ssmincidents-responseplan-notificationtargetitem.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTargets?: List<SSMIncidentsResponsePlanNotificationTargetItem>;
  /**
   * Used to create only one incident record for an incident.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DedupeString?: Value<string>;
}
export interface SSMIncidentsResponsePlanProperties {
  /**
   * The AWS Chatbot chat channel used for collaboration during an incident.
   *
   * _Required_: No
   *
   * _Type_: [ChatChannel](aws-properties-ssmincidents-responseplan-chatchannel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChatChannel?: SSMIncidentsResponsePlanChatChannel;
  /**
   * Information about third-party services integrated into the response plan.
   *
   * _Required_: No
   *
   * _Type_: List of [Integration](aws-properties-ssmincidents-responseplan-integration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Integrations?: List<SSMIncidentsResponsePlanIntegration>;
  /**
   * The actions that the response plan starts at the beginning of an incident.
   *
   * _Required_: No
   *
   * _Type_: List of [Action](aws-properties-ssmincidents-responseplan-action.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<SSMIncidentsResponsePlanAction>;
  /**
   * The human readable name of the response plan.
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
  DisplayName?: Value<string>;
  /**
   * Details used to create an incident when using this response plan.
   *
   * _Required_: Yes
   *
   * _Type_: [IncidentTemplate](aws-properties-ssmincidents-responseplan-incidenttemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncidentTemplate: SSMIncidentsResponsePlanIncidentTemplate;
  /**
   * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Engagements?: List<Value<string>>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the response plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `^[a-zA-Z0-9-_]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The `AWS::SSMIncidents::ResponsePlan` resource specifies the details of the response plan that are used when creating an incident.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html}
 */
export interface SSMIncidentsResponsePlanResource {
  Type: 'AWS::SSMIncidents::ResponsePlan';
  Properties: SSMIncidentsResponsePlanProperties;
}
