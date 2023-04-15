/**
 * Supported regions:
 * - ap-southeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A workflow parameter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-omics-workflow-workflowparameter.html}
 **/
export interface OmicsWorkflowWorkflowParameter {
  /**
   * The parameter's description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Whether the parameter is optional.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Optional?: Value<boolean>;
}
export interface OmicsWorkflowProperties {
  /**
   * The workflow's parameter template.
   *
   * _Required_: No
   *
   * _Type_: Map of [WorkflowParameter](aws-properties-omics-workflow-workflowparameter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ParameterTemplate?: { [key: string]: OmicsWorkflowWorkflowParameter };
  /**
   * The parameter's description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A storage capacity for the workflow in gigabytes.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageCapacity?: Value<number>;
  /**
   * The URI of a definition for the workflow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DefinitionUri?: Value<string>;
  /**
   * The path of the main definition file for the workflow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Main?: Value<string>;
  /**
   * An engine for the workflow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NEXTFLOW | WDL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Engine?: Value<string>;
  /**
   * Tags for the workflow.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The workflow's name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}||p{M}||p{Z}||p{S}||p{N}||p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a workflow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflow.html}
 */
export interface OmicsWorkflowResource {
  Type: 'AWS::Omics::Workflow';
  Properties: OmicsWorkflowProperties;
}
