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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Data security configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-datasecurityconfig.html}
 **/
export interface ComprehendFlywheelDataSecurityConfig {
  /**
   * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-comprehend-flywheel-vpcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfig?: ComprehendFlywheelVpcConfig;
  /**
   * ID for the AWS KMS key that Amazon Comprehend uses to encrypt the volume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^p{ASCII}+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeKmsKeyId?: Value<string>;
  /**
   * ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
   */
  ModelKmsKeyId?: Value<string>;
  /**
   * ID for the AWS KMS key that Amazon Comprehend uses to encrypt the data in the data lake.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^p{ASCII}+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataLakeKmsKeyId?: Value<string>;
}

/**
 * Configuration required for a custom classification model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-documentclassificationconfig.html}
 **/
export interface ComprehendFlywheelDocumentClassificationConfig {
  /**
   * Classification mode indicates whether the documents are `MULTI_CLASS` or `MULTI_LABEL`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `MULTI_CLASS | MULTI_LABEL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Mode: Value<string>;
  /**
   * One or more labels to associate with the custom classifier.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Labels?: List<Value<string>>;
}

/**
 * Configuration about the custom classifier associated with the flywheel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-taskconfig.html}
 **/
export interface ComprehendFlywheelTaskConfig {
  /**
   * Language code for the language that the model supports.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ar | de | en | es | fr | hi | it | ja | ko | pt | zh | zh-TW`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LanguageCode: Value<string>;
  /**
   * Configuration required for a classification model.
   *
   * _Required_: No
   *
   * _Type_: [DocumentClassificationConfig](aws-properties-comprehend-flywheel-documentclassificationconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DocumentClassificationConfig?: ComprehendFlywheelDocumentClassificationConfig;
  /**
   * Configuration required for an entity recognition model.
   *
   * _Required_: No
   *
   * _Type_: [EntityRecognitionConfig](aws-properties-comprehend-flywheel-entityrecognitionconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EntityRecognitionConfig?: ComprehendFlywheelEntityRecognitionConfig;
}

/**
 * Configuration required for an entity recognition model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entityrecognitionconfig.html}
 **/
export interface ComprehendFlywheelEntityRecognitionConfig {
  /**
   * Up to 25 entity types that the model is trained to recognize.
   *
   * _Required_: No
   *
   * _Type_: List of [EntityTypesListItem](aws-properties-comprehend-flywheel-entitytypeslistitem.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EntityTypes?: List<ComprehendFlywheelEntityTypesListItem>;
}

/**
 * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-entitytypeslistitem.html}
 **/
export interface ComprehendFlywheelEntityTypesListItem {
  /**
   * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
   *
   * Entity types must not contain the following invalid characters: n (line break), n (escaped line break, r (carriage return), r (escaped carriage return), t (tab), t (escaped tab), space, and , (comma).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^(?![^nrt,]*n|r|t)[^nrt,]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
}

/**
 * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-comprehend-flywheel-vpcconfig.html}
 **/
export interface ComprehendFlywheelVpcConfig {
  /**
   * The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets: List<Value<string>>;
  /**
   * The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see [Security Groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
}
export interface ComprehendFlywheelProperties {
  /**
   * Amazon S3 URI of the data lake location.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `s3://[a-z0-9][.-a-z0-9]{1,61}[a-z0-9](/.*)?`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataLakeS3Uri: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataAccessRoleArn: Value<string>;
  /**
   * Name for the flywheel.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FlywheelName: Value<string>;
  /**
   * Model type of the flywheel's model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DOCUMENT_CLASSIFIER | ENTITY_RECOGNIZER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelType?: Value<string>;
  /**
   * Configuration about the custom classifier associated with the flywheel.
   *
   * _Required_: No
   *
   * _Type_: [TaskConfig](aws-properties-comprehend-flywheel-taskconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TaskConfig?: ComprehendFlywheelTaskConfig;
  /**
   * The Amazon Resource Number (ARN) of the active model version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws(-[^:]+)?:comprehend:[a-zA-Z0-9-]*:[0-9]{12}:(document-classifier|entity-recognizer)/[a-zA-Z0-9](-*[a-zA-Z0-9])*(/version/[a-zA-Z0-9](-*[a-zA-Z0-9])*)?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveModelArn?: Value<string>;
  /**
   * Data security configuration.
   *
   * _Required_: No
   *
   * _Type_: [DataSecurityConfig](aws-properties-comprehend-flywheel-datasecurityconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSecurityConfig?: ComprehendFlywheelDataSecurityConfig;
  /**
   * Tags associated with the endpoint being created. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department.
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
 * A flywheel is an AWS resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.
 *
 * When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.
 *
 * To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.
 *
 * To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.
 *
 * For more information about flywheels, see [ Flywheel overview](https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html) in the _Amazon Comprehend Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-flywheel.html}
 */
export interface ComprehendFlywheelResource {
  Type: 'AWS::Comprehend::Flywheel';
  Properties: ComprehendFlywheelProperties;
}
