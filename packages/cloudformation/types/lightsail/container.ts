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
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * `EnvironmentVariable` is a property of the [Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html) property. It describes the environment variables of a container on a container service which are key-value parameters that provide dynamic configuration of the application or script run by the container.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html}
 **/
export interface LightsailContainerEnvironmentVariable {
  /**
   * The environment variable key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variable?: Value<string>;
  /**
   * The environment variable value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * `Container` is a property of the [ContainerServiceDeployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html) property. It describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html}
 **/
export interface LightsailContainerContainer {
  /**
   * The name of the container.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerName?: Value<string>;
  /**
   * The launch command for the container.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * The environment variables of the container.
   *
   * _Required_: No
   *
   * _Type_: List of [EnvironmentVariable](aws-properties-lightsail-container-environmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: List<LightsailContainerEnvironmentVariable>;
  /**
   * An object that describes the open firewall ports and protocols of the container.
   *
   * _Required_: No
   *
   * _Type_: List of [PortInfo](aws-properties-lightsail-container-portinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ports?: List<LightsailContainerPortInfo>;
  /**
   * The name of the image used for the container.
   *
   * Container images that are sourced from (registered and stored on) your container service start with a colon (`:`). For example, if your container service name is `container-service-1`, the container image label is `mystaticsite`, and you want to use the third version (`3`) of the registered container image, then you should specify `:container-service-1.mystaticsite.3`. To use the latest version of a container image, specify `latest` instead of a version number (for example, `:container-service-1.mystaticsite.latest`). Your container service will automatically use the highest numbered version of the registered container image.
   *
   * Container images that are sourced from a public registry like Docker Hub don’t start with a colon. For example, `nginx:latest` or `nginx`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Image?: Value<string>;
}

/**
 * `PublicEndpoint` is a property of the [ContainerServiceDeployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html) property. It describes describes the settings of the public endpoint of a container on a container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html}
 **/
export interface LightsailContainerPublicEndpoint {
  /**
   * The name of the container entry of the deployment that the endpoint configuration applies to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerName?: Value<string>;
  /**
   * The port of the specified container to which traffic is forwarded to.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerPort?: Value<number>;
  /**
   * An object that describes the health check configuration of the container.
   *
   * _Required_: No
   *
   * _Type_: [HealthCheckConfig](aws-properties-lightsail-container-healthcheckconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthCheckConfig?: LightsailContainerHealthCheckConfig;
}

/**
 * `ContainerServiceDeployment` is a property of the [AWS::Lightsail::Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html) resource. It describes a container deployment configuration of a container service.
 *
 * A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html}
 **/
export interface LightsailContainerContainerServiceDeployment {
  /**
   * An object that describes the configuration for the containers of the deployment.
   *
   * _Required_: No
   *
   * _Type_: List of [Container](aws-properties-lightsail-container-container.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Containers?: List<LightsailContainerContainer>;
  /**
   * An object that describes the endpoint of the deployment.
   *
   * _Required_: No
   *
   * _Type_: [PublicEndpoint](aws-properties-lightsail-container-publicendpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicEndpoint?: LightsailContainerPublicEndpoint;
}

/**
 * `PublicDomainName` is a property of the [AWS::Lightsail::Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html) resource. It describes the public domain names to use with a container service, such as `example.com` and `www.example.com`. It also describes the certificates to use with a container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html}
 **/
export interface LightsailContainerPublicDomainName {
  /**
   * The name of the certificate for the public domains.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateName?: Value<string>;
  /**
   * The public domain names to use with the container service.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainNames?: List<Value<string>>;
}

/**
 * `HealthCheckConfig` is a property of the [PublicEndpoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html) property. It describes the healthcheck configuration of a container deployment on a container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html}
 **/
export interface LightsailContainerHealthCheckConfig {
  /**
   * The path on the container on which to perform the health check. The default value is `/`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The amount of time, in seconds, during which no response means a failed health check. You can specify between `2` and `60` seconds. The default value is `2`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutSeconds?: Value<number>;
  /**
   * The HTTP codes to use when checking for a successful response from a container. You can specify values between `200` and `499`. You can specify multiple values (for example, `200,202`) or a range of values (for example, `200-299`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessCodes?: Value<string>;
  /**
   * The number of consecutive health check failures required before moving the container to the `Unhealthy` state. The default value is `2`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnhealthyThreshold?: Value<number>;
  /**
   * The number of consecutive health check successes required before moving the container to the `Healthy` state. The default value is `2`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HealthyThreshold?: Value<number>;
  /**
   * The approximate interval, in seconds, between health checks of an individual container. You can specify between `5` and `300` seconds. The default value is `5`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntervalSeconds?: Value<number>;
}

/**
 * `PortInfo` is a property of the [Container](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html) property. It describes the ports to open and the protocols to use for a container on a Amazon Lightsail container service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html}
 **/
export interface LightsailContainerPortInfo {
  /**
   * The open firewall ports of the container.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
  /**
   * The protocol name for the open ports.
   *
   * _Allowed values_: `HTTP` | `HTTPS` | `TCP` | `UDP`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
}
export interface LightsailContainerProperties {
  /**
   * The public domain name of the container service, such as `example.com` and `www.example.com`.
   *
   * You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container that is configured as the public endpoint of your container service.
   *
   * If you don't specify public domain names, then you can use the default domain of the container service.
   *
   * You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the [AWS::Lightsail::Certificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-certificate.html) resource to create a certificate for the public domain names that you want to use with your container service.
   *
   * _Required_: No
   *
   * _Type_: List of [PublicDomainName](aws-properties-lightsail-container-publicdomainname.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicDomainNames?: List<LightsailContainerPublicDomainName>;
  /**
   * The name of the container service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceName: Value<string>;
  /**
   * An object that describes the current container deployment of the container service.
   *
   * _Required_: No
   *
   * _Type_: [ContainerServiceDeployment](aws-properties-lightsail-container-containerservicedeployment.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  ContainerServiceDeployment?: LightsailContainerContainerServiceDeployment;
  /**
   * A Boolean value indicating whether the container service is disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsDisabled?: Value<boolean>;
  /**
   * The scale specification of the container service.
   *
   * The scale specifies the allocated compute nodes of the container service.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scale: Value<number>;
  /**
   * The power specification of the container service.
   *
   * The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `large | medium | micro | nano | small | xlarge`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Power: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
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
 * The `AWS::Lightsail::Container` resource specifies a container service.
 *
 * A Lightsail container service is a compute resource to which you can deploy containers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html}
 */
export interface LightsailContainerResource {
  Type: 'AWS::Lightsail::Container';
  Properties: LightsailContainerProperties;
}
