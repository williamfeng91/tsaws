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
 * The list of parameters in JSON format. For example: `[{"Name":"InstanceId","Type":"TARGET"}] or [{"Name":"InstanceId","Type":"TEXT_VALUE"}]`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-servicecatalog-serviceaction-definitionparameter.html}
 **/
export interface ServiceCatalogServiceActionDefinitionParameter {
  /**
   * The value of the parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The parameter key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface ServiceCatalogServiceActionProperties {
  /**
   * The self-service action description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A map that defines the self-service action.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DefinitionParameter](aws-properties-servicecatalog-serviceaction-definitionparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition: List<ServiceCatalogServiceActionDefinitionParameter>;
  /**
   * The language code.
   */
  AcceptLanguage?: Value<string>;
  /**
   * The self-service action definition type. For example, `SSM_AUTOMATION`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SSM_AUTOMATION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefinitionType: Value<string>;
  /**
   * The self-service action name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a self-service action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-serviceaction.html}
 */
export interface ServiceCatalogServiceActionResource {
  Type: 'AWS::ServiceCatalog::ServiceAction';
  Properties: ServiceCatalogServiceActionProperties;
}
