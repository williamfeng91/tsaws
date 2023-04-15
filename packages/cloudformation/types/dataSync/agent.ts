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

export interface DataSyncAgentProperties {
  /**
   * The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task. The agent that runs a task must be private. When you start a task that is associated with an agent created in a VPC, or one that has access to an IP address in a VPC, then the task is also private. In this case, DataSync creates four network interfaces for each task in your subnet. For a data transfer to work, the agent must be able to route to all these four network interfaces.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetArns?: List<Value<string>>;
  /**
   * The name you configured for your agent. This value is a text reference that is used to identify the agent in the console.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9s+=._:@/-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AgentName?: Value<string>;
  /**
   * The ID of the virtual private cloud (VPC) endpoint that the agent has access to. This is the client-side VPC endpoint, powered by AWS PrivateLink. If you don't have an AWS PrivateLink VPC endpoint, see [AWS PrivateLink and VPC endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html) in the _Amazon VPC User Guide_.
   *
   * For more information about activating your agent in a private network based on a VPC, see [Using AWS DataSync in a Virtual Private Cloud](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html) in the _AWS DataSync User Guide._
   *
   * A VPC endpoint ID looks like this: `vpce-01234d5aff67890e1`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^vpce-[0-9a-f]{17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcEndpointId?: Value<string>;
  /**
   * Your agent activation key. You can get the activation key either by sending an HTTP GET request with redirects that enable you to get the agent IP address (port 80). Alternatively, you can get it from the DataSync console.
   *
   * The redirect URL returned in the response provides you the activation key for your agent in the query string parameter `activationKey`. It might also include other activation-related parameters; however, these are merely defaults. The arguments you pass to this API call determine the actual configuration of your agent.
   *
   * For more information, see [Creating and activating an agent](https://docs.aws.amazon.com/datasync/latest/userguide/activating-agent.html) in the _ AWS DataSync User Guide._
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `29`
   *
   * _Pattern_: `[A-Z0-9]{5}(-[A-Z0-9]{5}){4}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActivationKey?: Value<string>;
  /**
   * The Amazon Resource Names (ARNs) of the security groups used to protect your data transfer task subnets. See [SecurityGroupArns](https://docs.aws.amazon.com/datasync/latest/userguide/API_Ec2Config.html#DataSync-Type-Ec2Config-SecurityGroupArns).
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z-0-9]*:[0-9]{12}:security-group/.*$`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupArns?: List<Value<string>>;
  /**
   * The key-value pair that represents the tag that you want to associate with the agent. The value can be an empty string. This value helps you manage, filter, and search for your agents.
   *
   * Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @.
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
 * The `AWS::DataSync::Agent` resource specifies an AWS DataSync agent to be deployed and activated on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the AWS Region that you want to activate the agent in. You activate the agent in the AWS Region where your target locations (in Amazon S3, Amazon EFS, or Amazon FSx for Windows File Server) reside. Your tasks are created in this AWS Region.
 *
 * You can activate the agent in a virtual private cloud (VPC) or provide the agent access to a VPC endpoint so that you can run tasks without sending them over the public internet.
 *
 * You can specify an agent to be used for more than one location. If a task uses multiple agents, all of them must have a status of AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run.
 *
 * For more information, see [Activating an Agent](https://docs.aws.amazon.com/datasync/latest/userguide/activating-agent.html) in the _AWS DataSync User Guide_.
 *
 * Agents are automatically updated by AWS on a regular basis, using a mechanism that ensures minimal interruption to your tasks.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export interface DataSyncAgentResource {
  Type: 'AWS::DataSync::Agent';
  Properties: DataSyncAgentProperties;
}
