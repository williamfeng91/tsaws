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

export interface GlueDevEndpointProperties {
  /**
   * The path to one or more Java `.jar` files in an S3 bucket that should be loaded in your `DevEndpoint`.
   *
   * You can only use pure Java/Scala libraries with a `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtraJarsS3Path?: Value<string>;
  /**
   * The public key to be used by this `DevEndpoint` for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicKey?: Value<string>;
  /**
   * The number of AWS Glue Data Processing Units (DPUs) allocated to this `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfNodes?: Value<number>;
  /**
   * A map of arguments used to configure the `DevEndpoint`.
   *
   * Valid arguments are:
   */
  Arguments?: { [key: string]: any };
  /**
   * The subnet ID for this `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId?: Value<string>;
  /**
   * A list of public keys to be used by the `DevEndpoints` for authentication. Using this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.
   *
   * If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the `UpdateDevEndpoint` API operation with the public key content in the `deletePublicKeys` attribute, and the list of new keys in the `addPublicKeys` attribute.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicKeys?: List<Value<string>>;
  /**
   * A list of security group identifiers used in this `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used in this `DevEndpoint`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.
   */
  WorkerType?: Value<string>;
  /**
   * The name of the `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointName?: Value<string>;
  /**
   * The AWS Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints.
   *
   * For more information about the available AWS Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * Development endpoints that are created without specifying a Glue version default to Glue 0.9.
   *
   * You can specify a version of Python support for development endpoints by using the `Arguments` parameter in the `CreateDevEndpoint` or `UpdateDevEndpoint` APIs. If no arguments are provided, the version defaults to Python 2.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueVersion?: Value<string>;
  /**
   * The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your `DevEndpoint`. Multiple values must be complete paths separated by a comma.
   *
   * You can only use pure Python libraries with a `DevEndpoint`. Libraries that rely on C extensions, such as the [pandas](http://pandas.pydata.org/) Python data analysis library, are not currently supported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtraPythonLibsS3Path?: Value<string>;
  /**
   * The name of the `SecurityConfiguration` structure to be used with this `DevEndpoint`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityConfiguration?: Value<string>;
  /**
   * The number of workers of a defined `workerType` that are allocated to the development endpoint.
   *
   * The maximum number of workers you can define are 299 for `G.1X`, and 149 for `G.2X`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfWorkers?: Value<number>;
  /**
   * The tags to use with this DevEndpoint.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * The `AWS::Glue::DevEndpoint` resource specifies a development endpoint where a developer can remotely debug ETL scripts for AWS Glue. For more information, see [DevEndpoint Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-dev-endpoint.html#aws-glue-api-jobs-dev-endpoint-DevEndpoint) in the AWS Glue Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-devendpoint.html}
 */
export interface GlueDevEndpointResource {
  Type: 'AWS::Glue::DevEndpoint';
  Properties: GlueDevEndpointProperties;
}
