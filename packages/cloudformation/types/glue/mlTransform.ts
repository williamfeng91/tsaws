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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters-findmatchesparameters.html}
 **/
export interface GlueMLTransformFindMatchesParameters {
  PrecisionRecallTradeoff?: Value<number>;
  EnforceProvidedLabels?: Value<boolean>;
  PrimaryKeyColumnName: Value<string>;
  AccuracyCostTradeoff?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption-mluserdataencryption.html}
 **/
export interface GlueMLTransformMLUserDataEncryption {
  MLUserDataEncryptionMode: Value<string>;
  KmsKeyId?: Value<string>;
}

/**
 * A list of AWS Glue table definitions used by the transform.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables.html}
 **/
export interface GlueMLTransformInputRecordTables {
  /**
   * The database and table in the AWS Glue Data Catalog that is used for input or output data.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-glue-mltransform-inputrecordtables-gluetables.md) of [GlueTables](aws-properties-glue-mltransform-inputrecordtables-gluetables.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueTables?: List<GlueMLTransformGlueTables>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-inputrecordtables-gluetables.html}
 **/
export interface GlueMLTransformGlueTables {
  ConnectionName?: Value<string>;
  TableName: Value<string>;
  DatabaseName: Value<string>;
  CatalogId?: Value<string>;
}

/**
 * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
 *
 * Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformencryption.html}
 **/
export interface GlueMLTransformTransformEncryption {
  /**
   * The encryption-at-rest settings of the transform that apply to accessing user data.
   *
   * _Required_: No
   *
   * _Type_: [MLUserDataEncryption](aws-properties-glue-mltransform-transformencryption-mluserdataencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MLUserDataEncryption?: GlueMLTransformMLUserDataEncryption;
  /**
   * The name of the security configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskRunSecurityConfigurationName?: Value<string>;
}

/**
 * The algorithm-specific parameters that are associated with the machine learning transform.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-mltransform-transformparameters.html}
 **/
export interface GlueMLTransformTransformParameters {
  /**
   * The type of machine learning transform. `FIND_MATCHES` is the only option.
   *
   * For information about the types of machine learning transforms, see [Creating Machine Learning Transforms](https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransformType: Value<string>;
  /**
   * The parameters for the find matches algorithm.
   *
   * _Required_: No
   *
   * _Type_: [FindMatchesParameters](aws-properties-glue-mltransform-transformparameters-findmatchesparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindMatchesParameters?: GlueMLTransformFindMatchesParameters;
}
export interface GlueMLTransformProperties {
  /**
   * The maximum number of times to retry after an `MLTaskRun` of the machine learning transform fails.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetries?: Value<number>;
  /**
   * A user-defined, long-form description text for the machine learning transform.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.
   *
   * Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.
   *
   * _Required_: No
   *
   * _Type_: [TransformEncryption](aws-properties-glue-mltransform-transformencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransformEncryption?: GlueMLTransformTransformEncryption;
  /**
   * The timeout in minutes of the machine learning transform.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: Value<number>;
  /**
   * A user-defined name for the machine learning transform. Names are required to be unique. `Name` is optional:
   */
  Name?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform.
   */
  Role: Value<string>;
  /**
   * The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.
   */
  WorkerType?: Value<string>;
  /**
   * This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see [AWS Glue Versions](https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions) in the developer guide.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueVersion?: Value<string>;
  /**
   * The algorithm-specific parameters that are associated with the machine learning transform.
   *
   * _Required_: Yes
   *
   * _Type_: [TransformParameters](aws-properties-glue-mltransform-transformparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransformParameters: GlueMLTransformTransformParameters;
  /**
   * A list of AWS Glue table definitions used by the transform.
   *
   * _Required_: Yes
   *
   * _Type_: [InputRecordTables](aws-properties-glue-mltransform-inputrecordtables.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputRecordTables: GlueMLTransformInputRecordTables;
  /**
   * The number of workers of a defined `workerType` that are allocated when a task of the transform runs.
   *
   * If `WorkerType` is set, then `NumberOfWorkers` is required (and vice versa).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfWorkers?: Value<number>;
  /**
   * The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in AWS Glue, see [AWS Tags in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) in the developer guide.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the [AWS Glue pricing page](http://aws.amazon.com/glue/pricing/).
   *
   * `MaxCapacity` is a mutually exclusive option with `NumberOfWorkers` and `WorkerType`.
   */
  MaxCapacity?: Value<number>;
}

/**
 * The AWS::Glue::MLTransform is an AWS Glue resource type that manages machine learning transforms.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-mltransform.html}
 */
export interface GlueMLTransformResource {
  Type: 'AWS::Glue::MLTransform';
  Properties: GlueMLTransformProperties;
}
