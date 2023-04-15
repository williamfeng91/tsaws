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
 * Describes whether S3 data event logs, Kubernetes audit logs, or Malware Protection will be enabled as a data source when the detector is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html}
 **/
export interface GuardDutyDetectorCFNDataSourceConfigurations {
  /**
   * Describes whether Malware Protection will be enabled as a data source.
   *
   * _Required_: No
   *
   * _Type_: [CFNMalwareProtectionConfiguration](aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MalwareProtection?: GuardDutyDetectorCFNMalwareProtectionConfiguration;
  /**
   * Describes whether S3 data event logs are enabled as a data source.
   *
   * _Required_: No
   *
   * _Type_: [CFNS3LogsConfiguration](aws-properties-guardduty-detector-cfns3logsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Logs?: GuardDutyDetectorCFNS3LogsConfiguration;
  /**
   * Describes which Kuberentes data sources are enabled for a detector.
   *
   * _Required_: No
   *
   * _Type_: [CFNKubernetesConfiguration](aws-properties-guardduty-detector-cfnkubernetesconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Kubernetes?: GuardDutyDetectorCFNKubernetesConfiguration;
}

/**
 * Describes the additional configuration for a feature. If you provide any additional configuration for your feature, it is required to also provide `Name` and `Status`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-featureadditionalconfiguration.html}
 **/
export interface GuardDutyDetectorFeatureAdditionalConfiguration {
  /**
   * Status of the additional configuration of a feature.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Name of the additional configuration of a feature.
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
 * Describes whether S3 data event logs will be enabled as a data source when the detector is created.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html}
 **/
export interface GuardDutyDetectorCFNS3LogsConfiguration {
  /**
   * The status of S3 data event logs as a data source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enable?: Value<boolean>;
}

/**
 * Describes the configuration for a feature. Make sure you use either `dataSources` or `Features`, and not both.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-featureconfigurations.html}
 **/
export interface GuardDutyDetectorFeatureConfigurations {
  /**
   * Status of the feature.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Additional configuration of the feature.
   *
   * _Required_: No
   *
   * _Type_: List of [FeatureAdditionalConfiguration](aws-properties-guardduty-detector-featureadditionalconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalConfiguration?: List<GuardDutyDetectorFeatureAdditionalConfiguration>;
  /**
   * Name of the feature.
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
 * Describes which optional data sources are enabled for a detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html}
 **/
export interface GuardDutyDetectorCFNKubernetesAuditLogsConfiguration {
  /**
   * Describes whether Kubernetes audit logs are enabled as a data source for the detector.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enable?: Value<boolean>;
}

/**
 * Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html}
 **/
export interface GuardDutyDetectorCFNScanEc2InstanceWithFindingsConfiguration {
  /**
   * Describes the configuration for scanning EBS volumes as data source.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbsVolumes?: Value<boolean>;
}

/**
 * Describes whether Malware Protection will be enabled as a data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html}
 **/
export interface GuardDutyDetectorCFNMalwareProtectionConfiguration {
  /**
   * Describes the configuration of Malware Protection for EC2 instances with findings.
   *
   * _Required_: No
   *
   * _Type_: [CFNScanEc2InstanceWithFindingsConfiguration](aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanEc2InstanceWithFindings?: GuardDutyDetectorCFNScanEc2InstanceWithFindingsConfiguration;
}

/**
 * Describes which Kubernetes protection data sources are enabled for the detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfnkubernetesconfiguration.html}
 **/
export interface GuardDutyDetectorCFNKubernetesConfiguration {
  /**
   * Describes whether Kubernetes audit logs are enabled as a data source for the detector.
   *
   * _Required_: No
   *
   * _Type_: [CFNKubernetesAuditLogsConfiguration](aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuditLogs?: GuardDutyDetectorCFNKubernetesAuditLogsConfiguration;
}
export interface GuardDutyDetectorProperties {
  /**
   * Specifies how frequently updated findings are exported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FIFTEEN_MINUTES | ONE_HOUR | SIX_HOURS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FindingPublishingFrequency?: Value<string>;
  /**
   * Describes which data sources will be enabled for the detector.
   *
   * _Required_: No
   *
   * _Type_: [CFNDataSourceConfigurations](aws-properties-guardduty-detector-cfndatasourceconfigurations.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSources?: GuardDutyDetectorCFNDataSourceConfigurations;
  /**
   * Specifies whether the detector is to be enabled on creation.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enable: Value<boolean>;
  /**
   * A list of features that will be configured for the detector.
   *
   * _Required_: No
   *
   * _Type_: List of [FeatureConfigurations](aws-properties-guardduty-detector-featureconfigurations.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Features?: List<GuardDutyDetectorFeatureConfigurations>;
  /**
   * The tags to be added to a new detector resource. Each tag consists of a key and an optional value, both of which you define.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * The `AWS::GuardDuty::Detector` resource specifies a new Amazon GuardDuty detector. A detector is an object that represents the Amazon GuardDuty service. A detector is required for Amazon GuardDuty to become operational.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html}
 */
export interface GuardDutyDetectorResource {
  Type: 'AWS::GuardDuty::Detector';
  Properties: GuardDutyDetectorProperties;
}
