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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `DecryptStepDetails` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-decryptstepdetails.html}
 **/
export interface TransferWorkflowDecryptStepDetails {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [InputFileLocation](aws-properties-transfer-workflow-inputfilelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationFileLocation?: TransferWorkflowInputFileLocation;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceFileLocation?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OverwriteExisting?: Value<string>;
}

/**
 * The `TagStepDetails` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-tagstepdetails.html}
 **/
export interface TransferWorkflowTagStepDetails {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceFileLocation?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [S3Tag](aws-properties-transfer-workflow-s3tag.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<TransferWorkflowS3Tag>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `InputFileLocation` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-inputfilelocation.html}
 **/
export interface TransferWorkflowInputFileLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [EfsInputFileLocation](aws-properties-transfer-workflow-efsinputfilelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EfsFileLocation?: TransferWorkflowEfsInputFileLocation;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [S3InputFileLocation](aws-properties-transfer-workflow-s3inputfilelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3FileLocation?: TransferWorkflowS3InputFileLocation;
}

/**
 * The `EfsInputFileLocation` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-efsinputfilelocation.html}
 **/
export interface TransferWorkflowEfsInputFileLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Path?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileSystemId?: Value<string>;
}

/**
 * The `S3FileLocation` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3filelocation.html}
 **/
export interface TransferWorkflowS3FileLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [S3InputFileLocation](aws-properties-transfer-workflow-s3inputfilelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3FileLocation?: TransferWorkflowS3InputFileLocation;
}

/**
 * The `S3Tag` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3tag.html}
 **/
export interface TransferWorkflowS3Tag {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
}

/**
 * The `CopyStepDetails` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-copystepdetails.html}
 **/
export interface TransferWorkflowCopyStepDetails {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [S3FileLocation](aws-properties-transfer-workflow-s3filelocation.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationFileLocation?: TransferWorkflowS3FileLocation;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceFileLocation?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OverwriteExisting?: Value<string>;
}

/**
 * The `S3InputFileLocation` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-s3inputfilelocation.html}
 **/
export interface TransferWorkflowS3InputFileLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key?: Value<string>;
}

/**
 * The `DeleteStepDetails` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-deletestepdetails.html}
 **/
export interface TransferWorkflowDeleteStepDetails {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceFileLocation?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `CustomStepDetails` property type specifies Property description not available. for an [AWS::Transfer::Workflow](aws-resource-transfer-workflow.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-customstepdetails.html}
 **/
export interface TransferWorkflowCustomStepDetails {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutSeconds?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Target?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceFileLocation?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The basic building block of a workflow.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-workflow-workflowstep.html}
 **/
export interface TransferWorkflowWorkflowStep {
  /**
   * Details for a step that invokes an AWS Lambda function.
   *
   * Consists of the Lambda function's name, target, and timeout (in seconds).
   *
   * _Required_: No
   *
   * _Type_: [CustomStepDetails](aws-properties-transfer-workflow-customstepdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomStepDetails?: TransferWorkflowCustomStepDetails;
  /**
   * Details for a step that performs a file copy.
   *
   * Consists of the following values:
   */
  CopyStepDetails?: TransferWorkflowCopyStepDetails;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DecryptStepDetails](aws-properties-transfer-workflow-decryptstepdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DecryptStepDetails?: TransferWorkflowDecryptStepDetails;
  /**
   * Currently, the following step types are supported.
   */
  Type?: Value<string>;
  /**
   * Details for a step that creates one or more tags.
   *
   * You specify one or more tags. Each tag contains a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: [TagStepDetails](aws-properties-transfer-workflow-tagstepdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagStepDetails?: TransferWorkflowTagStepDetails;
  /**
   * Details for a step that deletes the file.
   *
   * _Required_: No
   *
   * _Type_: [DeleteStepDetails](aws-properties-transfer-workflow-deletestepdetails.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeleteStepDetails?: TransferWorkflowDeleteStepDetails;
}
export interface TransferWorkflowProperties {
  /**
   * Specifies the details for the steps that are in the specified workflow.
   *
   * _Required_: Yes
   *
   * _Type_: List of [WorkflowStep](aws-properties-transfer-workflow-workflowstep.md)
   *
   * _Maximum_: `8`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Steps: List<TransferWorkflowWorkflowStep>;
  /**
   * Specifies the text description for the workflow.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[w- ]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Specifies the steps (actions) to take if errors are encountered during execution of the workflow.
   *
   * _Required_: No
   *
   * _Type_: List of [WorkflowStep](aws-properties-transfer-workflow-workflowstep.md)
   *
   * _Maximum_: `8`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OnExceptionSteps?: List<TransferWorkflowWorkflowStep>;
  /**
   * Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the `workflow-details` field in `CreateServer` and `UpdateServer` operations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-workflow.html}
 */
export interface TransferWorkflowResource {
  Type: 'AWS::Transfer::Workflow';
  Properties: TransferWorkflowProperties;
}
