/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Details for IAM client authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-iam.html}
 **/
export interface MSKServerlessClusterIam {
  /**
   * SASL/IAM authentication is enabled or not.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled: Value<boolean>;
}

/**
 * Includes all client authentication information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-clientauthentication.html}
 **/
export interface MSKServerlessClusterClientAuthentication {
  /**
   * Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
   *
   * _Required_: Yes
   *
   * _Type_: [Sasl](aws-properties-msk-serverlesscluster-sasl.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Sasl: MSKServerlessClusterSasl;
}

/**
 * Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-sasl.html}
 **/
export interface MSKServerlessClusterSasl {
  /**
   * Details for client authentication using IAM.
   *
   * _Required_: Yes
   *
   * _Type_: [Iam](aws-properties-msk-serverlesscluster-iam.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Iam: MSKServerlessClusterIam;
}

/**
 * Specifies information about subnets and security groups for the VPC that your clients will use to connect with the serverless cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-serverlesscluster-vpcconfig.html}
 **/
export interface MSKServerlessClusterVpcConfig {
  /**
   * Specifies up to five security groups that control inbound and outbound traffic for the serverless cluster.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * A list of subnets in at least two different Availability Zones that host your client applications. We recommend that you specify a backup subnet in a different Availability Zone for failover in case of an outage.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds: List<Value<string>>;
}
export interface MSKServerlessClusterProperties {
  /**
   * VPC configuration information.
   *
   * _Required_: Yes
   *
   * _Type_: List of [VpcConfig](aws-properties-msk-serverlesscluster-vpcconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfigs: List<MSKServerlessClusterVpcConfig>;
  /**
   * The name of the serverless cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterName: Value<string>;
  /**
   * Specifies client authentication information for the serverless cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [ClientAuthentication](aws-properties-msk-serverlesscluster-clientauthentication.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientAuthentication: MSKServerlessClusterClientAuthentication;
  /**
   * A map of key:value pairs to apply to this serverless cluster.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The `AWS::MSK::ServerlessCluster` resource creates an Amazon MSK Serverless cluster. For more information, see [MSK Serverless](https://docs.aws.amazon.com/msk/latest/developerguide/serverless.html) in the _Amazon MSK Developer Guide_
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html}
 */
export interface MSKServerlessClusterResource {
  Type: 'AWS::MSK::ServerlessCluster';
  Properties: MSKServerlessClusterProperties;
}
