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
 * Protocol settings that are configured for your server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocoldetails.html}
 **/
export interface TransferServerProtocolDetails {
  /**
   * List of `As2Transport` objects.
   *
   * _Required_: No
   *
   * _Type_: List of [As2Transport](aws-properties-transfer-server-as2transport.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  As2Transports?: List<TransferServerAs2Transport>;
  /**
   * Indicates passive mode, for FTP and FTPS protocols. Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer. For example:
   *
   * `aws transfer update-server --protocol-details PassiveIp=0.0.0.0`
   *
   * Replace `0.0.0.0` in the example above with the actual IP address you want to use.
   *
   * If you change the `PassiveIp` value, you must stop and then restart your Transfer Family server for the change to take effect. For details on using passive mode (PASV) in a NAT environment, see [Configuring your FTPS server behind a firewall or NAT with AWS Transfer Family](http://aws.amazon.com/blogs/storage/configuring-your-ftps-server-behind-a-firewall-or-nat-with-aws-transfer-family/).
   *
   * _Special values_
   *
   * The `AUTO` and `0.0.0.0` are special values for the `PassiveIp` parameter. The value `PassiveIp=AUTO` is assigned by default to FTP and FTPS type servers. In this case, the server automatically responds with one of the endpoint IPs within the PASV response. `PassiveIp=0.0.0.0` has a more unique application for its usage. For example, if you have a High Availability (HA) Network Load Balancer (NLB) environment, where you have 3 subnets, you can only specify a single IP address using the `PassiveIp` parameter. This reduces the effectiveness of having High Availability. In this case, you can specify `PassiveIp=0.0.0.0`. This tells the client to use the same IP address as the Control connection and utilize all AZs for their connections. Note, however, that not all FTP clients support the `PassiveIp=0.0.0.0` response. FileZilla and WinSCP do support it. If you are using other clients, check to see if your client supports the `PassiveIp=0.0.0.0` response.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PassiveIp?: Value<string>;
  /**
   * Use the `SetStatOption` to ignore the error that is generated when the client attempts to use `SETSTAT` on a file you are uploading to an S3 bucket.
   *
   * Some SFTP file transfer clients can attempt to change the attributes of remote files, including timestamp and permissions, using commands, such as `SETSTAT` when uploading the file. However, these commands are not compatible with object storage systems, such as Amazon S3. Due to this incompatibility, file uploads from these clients can result in errors even when the file is otherwise successfully uploaded.
   *
   * Set the value to `ENABLE_NO_OP` to have the Transfer Family server ignore the `SETSTAT` command, and upload files without needing to make any changes to your SFTP client. While the `SetStatOption` `ENABLE_NO_OP` setting ignores the error, it does generate a log entry in Amazon CloudWatch Logs, so you can determine when the client is making a `SETSTAT` call.
   *
   * If you want to preserve the original timestamp for your file, and modify other file attributes using `SETSTAT`, you can use Amazon EFS as backend storage with Transfer Family.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DEFAULT | ENABLE_NO_OP`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetStatOption?: Value<string>;
  /**
   * A property used with Transfer Family servers that use the FTPS protocol. TLS Session Resumption provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. `TlsSessionResumptionMode` determines whether or not the server resumes recent, negotiated sessions through a unique session ID. This property is available during `CreateServer` and `UpdateServer` calls. If a `TlsSessionResumptionMode` value is not specified during `CreateServer`, it is set to `ENFORCED` by default.
   */
  TlsSessionResumptionMode?: Value<string>;
}

/**
 * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
 *
 * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetail.html}
 **/
export interface TransferServerWorkflowDetail {
  /**
   * A unique identifier for the workflow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `19`
   *
   * _Maximum_: `19`
   *
   * _Pattern_: `^w-([a-z0-9]{17})$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkflowId: Value<string>;
  /**
   * Includes the necessary permissions for S3, EFS, and Lambda operations that Transfer can assume, so that all workflow steps can operate on the required resources
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRole: Value<string>;
}

/**
 * Container for the `WorkflowDetail` data type. It is used by actions that trigger a workflow to begin execution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-workflowdetails.html}
 **/
export interface TransferServerWorkflowDetails {
  /**
   * A trigger that starts a workflow: the workflow begins to execute after a file is uploaded.
   *
   * To remove an associated workflow from a server, you can provide an empty `OnUpload` object, as in the following example.
   *
   * `aws transfer update-server --server-id s-01234567890abcdef --workflow-details '{"OnUpload":[]}'`
   *
   * _Required_: No
   *
   * _Type_: List of [WorkflowDetail](aws-properties-transfer-server-workflowdetail.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnUpload?: List<TransferServerWorkflowDetail>;
  /**
   * A trigger that starts a workflow if a file is only partially uploaded. You can attach a workflow to a server that executes whenever there is a partial upload.
   *
   * A _partial upload_ occurs when a file is open when the session disconnects.
   *
   * _Required_: No
   *
   * _Type_: List of [WorkflowDetail](aws-properties-transfer-server-workflowdetail.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPartialUpload?: List<TransferServerWorkflowDetail>;
}

/**
 * Indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-as2transport.html}
 **/
export type TransferServerAs2Transport = Value<string>;

/**
 * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE` or `API_GATEWAY`. Accepts an array containing all of the information required to use a directory in `AWS_DIRECTORY_SERVICE` or invoke a customer-supplied authentication API, including the API Gateway URL. Not required when `IdentityProviderType` is set to `SERVICE_MANAGED`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-identityproviderdetails.html}
 **/
export interface TransferServerIdentityProviderDetails {
  /**
   * The ARN for a lambda function to use for the Identity provider.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `170`
   *
   * _Pattern_: `^arn:[a-z-]+:lambda:.*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Function?: Value<string>;
  /**
   * The identifier of the AWS Directory Service directory that you want to stop sharing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^d-[0-9a-f]{10}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryId?: Value<string>;
  /**
   * Provides the type of `InvocationRole` used to authenticate the user account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationRole?: Value<string>;
  /**
   * Provides the location of the service endpoint used to authenticate users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}

/**
 * The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-endpointdetails.html}
 **/
export interface TransferServerEndpointDetails {
  /**
   * A list of address allocation IDs that are required to attach an Elastic IP address to your server's endpoint.
   *
   * This property can only be set when `EndpointType` is set to `VPC` and it is only valid in the `UpdateServer` API.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  AddressAllocationIds?: List<Value<string>>;
  /**
   * The VPC ID of the virtual private cloud in which the server's endpoint will be hosted.
   *
   * This property can only be set when `EndpointType` is set to `VPC`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcId?: Value<string>;
  /**
   * The ID of the VPC endpoint.
   *
   * This property can only be set when `EndpointType` is set to `VPC_ENDPOINT`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `22`
   *
   * _Maximum_: `22`
   *
   * _Pattern_: `^vpce-[0-9a-f]{17}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpointId?: Value<string>;
  /**
   * A list of security groups IDs that are available to attach to your server's endpoint.
   *
   * This property can only be set when `EndpointType` is set to `VPC`.
   *
   * You can edit the `SecurityGroupIds` property in the [UpdateServer](https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html) API only if you are changing the `EndpointType` from `PUBLIC` or `VPC_ENDPOINT` to `VPC`. To change security groups associated with your server's VPC endpoint after creation, use the Amazon EC2 [ModifyVpcEndpoint](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html) API.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * A list of subnet IDs that are required to host your server endpoint in your VPC.
   *
   * This property can only be set when `EndpointType` is set to `VPC`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
}

/**
 * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:
 *
 * **Note**
 *
 * If you select `FTPS`, you must choose a certificate stored in AWS Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS.
 *
 * If `Protocol` includes either `FTP` or `FTPS`, then the `EndpointType` must be `VPC` and the `IdentityProviderType` must be either `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
 *
 * If `Protocol` includes `FTP`, then `AddressAllocationIds` cannot be associated.
 *
 * If `Protocol` is set only to `SFTP`, the `EndpointType` can be set to `PUBLIC` and the `IdentityProviderType` can be set any of the supported identity types: `SERVICE_MANAGED`, `AWS_DIRECTORY_SERVICE`, `AWS_LAMBDA`, or `API_GATEWAY`.
 *
 * If `Protocol` includes `AS2`, then the `EndpointType` must be `VPC`, and domain must be Amazon S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-transfer-server-protocol.html}
 **/
export type TransferServerProtocol = Value<string>;
export interface TransferServerProperties {
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFSevents. When set, you can view user activity in your CloudWatch logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*role/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingRole?: Value<string>;
  /**
   * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are:
   */
  Protocols?: List<TransferServerProtocol>;
  /**
   * Required when `IdentityProviderType` is set to `AWS_DIRECTORY_SERVICE` or `API_GATEWAY`. Accepts an array containing all of the information required to use a directory in `AWS_DIRECTORY_SERVICE` or invoke a customer-supplied authentication API, including the API Gateway URL. Not required when `IdentityProviderType` is set to `SERVICE_MANAGED`.
   *
   * _Required_: No
   *
   * _Type_: [IdentityProviderDetails](aws-properties-transfer-server-identityproviderdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityProviderDetails?: TransferServerIdentityProviderDetails;
  /**
   * The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
   *
   * _Required_: No
   *
   * _Type_: [EndpointDetails](aws-properties-transfer-server-endpointdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointDetails?: TransferServerEndpointDetails;
  /**
   * Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system:
   *
   * `This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[x09-x0Dx20-x7E]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreAuthenticationLoginBanner?: Value<string>;
  /**
   * Specifies a string to display when users connect to a server. This string is displayed after the user authenticates.
   *
   * The SFTP protocol does not support post-authentication display banners.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[x09-x0Dx20-x7E]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostAuthenticationLoginBanner?: Value<string>;
  /**
   * The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PUBLIC | VPC | VPC_ENDPOINT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointType?: Value<string>;
  /**
   * Specifies the name of the security policy that is attached to the server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `TransferSecurityPolicy-.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityPolicyName?: Value<string>;
  /**
   * The protocol settings that are configured for your server.
   */
  ProtocolDetails?: TransferServerProtocolDetails;
  /**
   * Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.
   *
   * In addition to a workflow to execute when a file is uploaded completely, `WorkflowDetails` can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when a file is open when the session disconnects.
   *
   * _Required_: No
   *
   * _Type_: [WorkflowDetails](aws-properties-transfer-server-workflowdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkflowDetails?: TransferServerWorkflowDetails;
  /**
   * Specifies the domain of the storage system that is used for file transfers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EFS | S3`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * The mode of authentication for a server. The default value is `SERVICE_MANAGED`, which allows you to store and access user credentials within the AWS Transfer Family service.
   *
   * Use `AWS_DIRECTORY_SERVICE` to provide access to Active Directory groups in AWS Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in AWS using AD Connector. This option also requires you to provide a Directory ID by using the `IdentityProviderDetails` parameter.
   *
   * Use the `API_GATEWAY` value to integrate with an identity provider of your choosing. The `API_GATEWAY` setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the `IdentityProviderDetails` parameter.
   *
   * Use the `AWS_LAMBDA` value to directly use an AWS Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the `Function` parameter or the `IdentityProviderDetails` data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `API_GATEWAY | AWS_DIRECTORY_SERVICE | AWS_LAMBDA | SERVICE_MANAGED`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IdentityProviderType?: Value<string>;
  /**
   * Key-value pairs that can be used to group and search for servers.
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
  /**
   * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. Required when `Protocols` is set to `FTPS`.
   *
   * To request a new public certificate, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) in the _ AWS Certificate Manager User Guide_.
   *
   * To import an existing certificate into ACM, see [Importing certificates into ACM](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the _ AWS Certificate Manager User Guide_.
   *
   * To request a private certificate to use FTPS through private IP addresses, see [Request a private certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html) in the _ AWS Certificate Manager User Guide_.
   *
   * Certificates with the following cryptographic algorithms and key sizes are supported:
   */
  Certificate?: Value<string>;
}

/**
 * Instantiates an auto-scaling virtual server based on the selected file transfer protocol in AWS. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated `ServerId` property that is assigned to the newly created server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-server.html}
 */
export interface TransferServerResource {
  Type: 'AWS::Transfer::Server';
  Properties: TransferServerProperties;
}
