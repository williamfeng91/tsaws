/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotthingsgraph-flowtemplate-definitiondocument.html}
 **/
export interface IoTThingsGraphFlowTemplateDefinitionDocument {
  Language: Value<string>;
  Text: Value<string>;
}
export interface IoTThingsGraphFlowTemplateProperties {
  CompatibleNamespaceVersion?: Value<number>;
  Definition: IoTThingsGraphFlowTemplateDefinitionDocument;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotthingsgraph-flowtemplate.html}
 */
export interface IoTThingsGraphFlowTemplateResource {
  Type: 'AWS::IoTThingsGraph::FlowTemplate';
  Properties: IoTThingsGraphFlowTemplateProperties;
}
