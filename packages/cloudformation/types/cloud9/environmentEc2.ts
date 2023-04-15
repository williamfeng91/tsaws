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
 * The `Repository` property type specifies an AWS CodeCommit source code repository to be cloned into an AWS Cloud9 development environment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloud9-environmentec2-repository.html}
 **/
export interface Cloud9EnvironmentEC2Repository {
  /**
   * The path within the development environment's default file system location to clone the AWS CodeCommit repository into. For example, `/REPOSITORY_NAME` would clone the repository into the `/home/USER_NAME/environment/REPOSITORY_NAME` directory in the environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathComponent: Value<string>;
  /**
   * The clone URL of the AWS CodeCommit repository to be cloned. For example, for an AWS CodeCommit repository this might be `https://git-codecommit.us-east-2.amazonaws.com/v1/repos/REPOSITORY_NAME`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryUrl: Value<string>;
}
export interface Cloud9EnvironmentEC2Properties {
  /**
   * Any AWS CodeCommit source code repositories to be cloned into the development environment.
   *
   * _Required_: No
   *
   * _Type_: List of [Repository](aws-properties-cloud9-environmentec2-repository.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Repositories?: List<Cloud9EnvironmentEC2Repository>;
  /**
   * The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any AWS Identity and Access Management principal. If this value is not specified, the ARN defaults to this environment's creator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(iam|sts)::d+:(root|(user/[w+=/:,.@-]{1,64}|federated-user/[w+=/:,.@-]{2,32}|assumed-role/[w+=:,.@-]{1,64}/[w+=,.@-]{1,64}))$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OwnerArn?: Value<string>;
  /**
   * The description of the environment to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` (default) and `CONNECT_SSM` (connected through AWS Systems Manager).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CONNECT_SSH | CONNECT_SSM`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectionType?: Value<string>;
  /**
   * The number of minutes until the running instance is shut down after the environment was last used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `20160`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutomaticStopTimeMinutes?: Value<number>;
  /**
   * The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. To choose an AMI for the instance, you must specify a valid AMI alias or a valid AWS Systems Manager path.
   *
   * The default AMI is used if the parameter isn't explicitly assigned a value in the request.
   *
   * **AMI aliases **
   */
  ImageId?: Value<string>;
  /**
   * The ID of the subnet in Amazon Virtual Private Cloud (Amazon VPC) that AWS Cloud9 will use to communicate with the Amazon Elastic Compute Cloud (Amazon EC2) instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `15`
   *
   * _Maximum_: `24`
   *
   * _Pattern_: `^(subnet-[0-9a-f]{8}|subnet-[0-9a-f]{17})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetId?: Value<string>;
  /**
   * The type of instance to connect to the environment (for example, `t2.micro`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^[a-z][1-9][.][a-z0-9]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
  /**
   * An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the environment.
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
 * The `AWS::Cloud9::EnvironmentEC2` resource creates an Amazon EC2 development environment in AWS Cloud9. For more information, see [Creating an Environment](https://docs.aws.amazon.com/cloud9/latest/user-guide/create-environment.html) in the _AWS Cloud9 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloud9-environmentec2.html}
 */
export interface Cloud9EnvironmentEC2Resource {
  Type: 'AWS::Cloud9::EnvironmentEC2';
  Properties: Cloud9EnvironmentEC2Properties;
}
