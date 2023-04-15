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
 * The VPC security groups and subnets that are attached to a Lambda function. When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC. For more information, see [VPC Settings](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
 *
 * **Note**
 *
 * When you delete a function, AWS CloudFormation monitors the state of its network interfaces and waits for Lambda to delete them before proceeding. If the VPC is defined in the same stack, the network interfaces need to be deleted by Lambda before AWS CloudFormation can delete the VPC's resources.
 *
 * To monitor network interfaces, AWS CloudFormation needs the `ec2:DescribeNetworkInterfaces` permission. It obtains this from the user or role that modifies the stack. If you don't provide this permission, AWS CloudFormation does not wait for network interfaces to be deleted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html}
 **/
export interface LambdaFunctionVpcConfig {
  /**
   * A list of VPC security group IDs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * A list of VPC subnet IDs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
}

/**
 * Details about the connection between a Lambda function and an [Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html}
 **/
export interface LambdaFunctionFileSystemConfig {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `arn:aws[a-zA-Z-]*:elasticfilesystem:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-d{1}:d{12}:access-point/fsap-[a-f0-9]{17}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
  /**
   * The path where the function can access the file system, starting with `/mnt/`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `160`
   *
   * _Pattern_: `^/mnt/[a-zA-Z0-9-_.]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalMountPath: Value<string>;
}

/**
 * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html}
 **/
export interface LambdaFunctionImageConfig {
  /**
   * Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkingDirectory?: Value<string>;
  /**
   * Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntryPoint?: List<Value<string>>;
}

/**
 * The `SnapStartResponse` property type specifies Property description not available. for an [AWS::Lambda::Function](aws-resource-lambda-function.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html}
 **/
export interface LambdaFunctionSnapStartResponse {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptimizationStatus?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyOn?: Value<string>;
}

/**
 * The [dead-letter queue](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq) for failed asynchronous invocations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-deadletterconfig.html}
 **/
export interface LambdaFunctionDeadLetterConfig {
  /**
   * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetArn?: Value<string>;
}

/**
 * The [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) for a Lambda function. To deploy a function defined as a container image, you specify the location of a container image in the Amazon ECR registry. For a .zip file deployment package, you can specify the location of an object in Amazon S3. For Node.js and Python functions, you can specify the function code inline in the template.
 *
 * Changes to a deployment package in Amazon S3 are not detected automatically during stack updates. To update the function code, change the object key or version in the template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html}
 **/
export interface LambdaFunctionCode {
  /**
   * For versioned objects, the version of the deployment package object to use.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectVersion?: Value<string>;
  /**
   * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[0-9A-Za-z.-_]*(?<!.)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket?: Value<string>;
  /**
   * (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named `index` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the `Handler` property, the first part of the handler identifier must be `index`. For example, `index.handler`.
   *
   * For JSON, you must escape quotes and special characters such as newline (`n`) with a backslash.
   *
   * If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using AWS Lambda with AWS CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ZipFile?: Value<string>;
  /**
   * The Amazon S3 key of the deployment package.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Key?: Value<string>;
  /**
   * URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUri?: Value<string>;
}

/**
 * The size of the function's `/tmp` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html}
 **/
export interface LambdaFunctionEphemeralStorage {
  /**
   * The size of the function's `/tmp` directory.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `512`
   *
   * _Maximum_: `10240`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size: Value<number>;
}

/**
 * The function's [AWS X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) tracing configuration. To sample and record incoming requests, set `Mode` to `Active`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tracingconfig.html}
 **/
export interface LambdaFunctionTracingConfig {
  /**
   * The tracing mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Active | PassThrough`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
}

/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html}
 **/
export interface LambdaFunctionEnvironment {
  /**
   * Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variables?: { [key: string]: Value<string> };
}

/**
 * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html}
 **/
export interface LambdaFunctionRuntimeManagementConfig {
  /**
   * Specify the runtime update mode.
   */
  UpdateRuntimeOn: Value<string>;
  /**
   * The ARN of the runtime version you want the function to use.
   *
   * This is only required if you're using the **Manual** runtime update mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `26`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:(aws[a-zA-Z-]*):lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-d{1}::runtime:.+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeVersionArn?: Value<string>;
}

/**
 * The function's [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html}
 **/
export interface LambdaFunctionSnapStart {
  /**
   * Set `ApplyOn` to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `None | PublishedVersions`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplyOn: Value<string>;
}
export interface LambdaFunctionProperties {
  /**
   * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
   *
   * _Required_: No
   *
   * _Type_: [ImageConfig](aws-properties-lambda-function-imageconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageConfig?: LambdaFunctionImageConfig;
  /**
   * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `128`
   *
   * _Maximum_: `10240`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemorySize?: Value<number>;
  /**
   * A description of the function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Set `Mode` to `Active` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
   *
   * _Required_: No
   *
   * _Type_: [TracingConfig](aws-properties-lambda-function-tracingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TracingConfig?: LambdaFunctionTracingConfig;
  /**
   * For network connectivity to AWS resources in a [VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-network.html), specify a list of security groups and subnets in the VPC.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-lambda-function-vpcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfig?: LambdaFunctionVpcConfig;
  /**
   * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
   *
   * _Required_: No
   *
   * _Type_: [DeadLetterConfig](aws-properties-lambda-function-deadletterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeadLetterConfig?: LambdaFunctionDeadLetterConfig;
  /**
   * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: Value<number>;
  /**
   * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
   *
   * _Required_: No
   *
   * _Type_: [RuntimeManagementConfig](aws-properties-lambda-function-runtimemanagementconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuntimeManagementConfig?: LambdaFunctionRuntimeManagementConfig;
  /**
   * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[^s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Handler?: Value<string>;
  /**
   * The number of simultaneous executions to reserve for the function.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReservedConcurrentExecutions?: Value<number>;
  /**
   * The function's [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
   *
   * _Required_: No
   *
   * _Type_: [SnapStart](aws-properties-lambda-function-snapstart.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapStart?: LambdaFunctionSnapStart;
  /**
   * The code for the function.
   *
   * _Required_: Yes
   *
   * _Type_: [Code](aws-properties-lambda-function-code.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code: LambdaFunctionCode;
  /**
   * The Amazon Resource Name (ARN) of the function's execution role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `arn:(aws[a-zA-Z-]*)?:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role: Value<string>;
  /**
   * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
   *
   * For more information about using the `DependsOn` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
   *
   * _Required_: No
   *
   * _Type_: List of [FileSystemConfig](aws-properties-lambda-function-filesystemconfig.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileSystemConfigs?: List<LambdaFunctionFileSystemConfig>;
  /**
   * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one.
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionName?: Value<string>;
  /**
   * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dotnet6 | dotnetcore1.0 | dotnetcore2.0 | dotnetcore2.1 | dotnetcore3.1 | go1.x | java11 | java8 | java8.al2 | nodejs | nodejs10.x | nodejs12.x | nodejs14.x | nodejs16.x | nodejs18.x | nodejs4.3 | nodejs4.3-edge | nodejs6.10 | nodejs8.10 | provided | provided.al2 | python2.7 | python3.6 | python3.7 | python3.8 | python3.9 | ruby2.5 | ruby2.7`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Runtime?: Value<string>;
  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt your function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption). When [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, this key is also used to encrypt your function's snapshot. If you don't provide a customer managed key, Lambda uses a default service key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The type of deployment package. Set to `Image` for container image and set `Zip` for .zip file archive.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Image | Zip`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PackageType?: Value<string>;
  /**
   * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-d{1}:d{12}:code-signing-config:csc-[a-z0-9]{17}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeSigningConfigArn?: Value<string>;
  /**
   * Environment variables that are accessible from function code during execution.
   *
   * _Required_: No
   *
   * _Type_: [Environment](aws-properties-lambda-function-environment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: LambdaFunctionEnvironment;
  /**
   * The size of the function's `/tmp` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
   *
   * _Required_: No
   *
   * _Type_: [EphemeralStorage](aws-properties-lambda-function-ephemeralstorage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EphemeralStorage?: LambdaFunctionEphemeralStorage;
  /**
   * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Layers?: List<Value<string>>;
  /**
   * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Architectures?: List<Value<string>>;
}

/**
 * The `AWS::Lambda::Function` resource creates a Lambda function. To create a function, you need a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html). The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
 *
 * You set the package type to `Image` if the deployment package is a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html). For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties.
 *
 * You set the package type to `Zip` if the deployment package is a [.zip file archive](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip). For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties. For a Python example, see [ Deploy Python Lambda functions with .zip file archives](https://docs.aws.amazon.com/lambda/latest/dg/python-package.html).
 *
 * You can use [code signing](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with `UpdateFunctionCode`, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
 *
 * Note that you configure [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a `AWS::Lambda::Version` or a `AWS::Lambda::Alias`.
 *
 * For a complete introduction to Lambda functions, see [What is Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the _Lambda developer guide._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html}
 */
export interface LambdaFunctionResource {
  Type: 'AWS::Lambda::Function';
  Properties: LambdaFunctionProperties;
}
