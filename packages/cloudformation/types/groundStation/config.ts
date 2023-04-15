/**
 * Supported regions:
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Provides information about how AWS Ground Station should echo back uplink transmissions to a dataflow endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkechoconfig.html}
 **/
export interface GroundStationConfigUplinkEchoConfig {
  /**
   * Whether or not uplink echo is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Defines the ARN of the uplink config to echo back to a dataflow endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AntennaUplinkConfigArn?: Value<string>;
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact. Use an antenna downlink config in a mission profile to receive the downlink data in raw DigIF format.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkconfig.html}
 **/
export interface GroundStationConfigAntennaDownlinkConfig {
  /**
   * Defines the spectrum configuration.
   *
   * _Required_: No
   *
   * _Type_: [SpectrumConfig](aws-properties-groundstation-config-spectrumconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpectrumConfig?: GroundStationConfigSpectrumConfig;
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact. Use an antenna downlink demod decode config in a mission profile to receive the downlink data that has been demodulated and decoded.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html}
 **/
export interface GroundStationConfigAntennaDownlinkDemodDecodeConfig {
  /**
   * Defines how the RF signal will be demodulated.
   *
   * _Required_: No
   *
   * _Type_: [DemodulationConfig](aws-properties-groundstation-config-demodulationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DemodulationConfig?: GroundStationConfigDemodulationConfig;
  /**
   * Defines the spectrum configuration.
   *
   * _Required_: No
   *
   * _Type_: [SpectrumConfig](aws-properties-groundstation-config-spectrumconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpectrumConfig?: GroundStationConfigSpectrumConfig;
  /**
   * Defines how the RF signal will be decoded.
   *
   * _Required_: No
   *
   * _Type_: [DecodeConfig](aws-properties-groundstation-config-decodeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DecodeConfig?: GroundStationConfigDecodeConfig;
}

/**
 * Defines a uplink spectrum.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-uplinkspectrumconfig.html}
 **/
export interface GroundStationConfigUplinkSpectrumConfig {
  /**
   * The polarization of the spectrum. Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Polarization?: Value<string>;
  /**
   * The center frequency of the spectrum. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   *
   * _Required_: No
   *
   * _Type_: [Frequency](aws-properties-groundstation-config-frequency.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CenterFrequency?: GroundStationConfigFrequency;
}

/**
 * Defines a spectrum.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-spectrumconfig.html}
 **/
export interface GroundStationConfigSpectrumConfig {
  /**
   * The polarization of the spectrum. Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"`. Capturing both `"RIGHT_HAND"` and `"LEFT_HAND"` polarization requires two separate configs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Polarization?: Value<string>;
  /**
   * The bandwidth of the spectrum. AWS Ground Station currently has the following bandwidth limitations:
   */
  Bandwidth?: GroundStationConfigFrequencyBandwidth;
  /**
   * The center frequency of the spectrum. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   *
   * _Required_: No
   *
   * _Type_: [Frequency](aws-properties-groundstation-config-frequency.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CenterFrequency?: GroundStationConfigFrequency;
}

/**
 * Defines a bandwidth.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequencybandwidth.html}
 **/
export interface GroundStationConfigFrequencyBandwidth {
  /**
   * The value of the bandwidth. AWS Ground Station currently has the following bandwidth limitations:
   */
  Value?: Value<number>;
  /**
   * The units of the bandwidth.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Units?: Value<string>;
}

/**
 * Provides information about how AWS Ground Station should track the satellite through the sky during a contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-trackingconfig.html}
 **/
export interface GroundStationConfigTrackingConfig {
  /**
   * Specifies whether or not to use autotrack. `REMOVED` specifies that program track should only be used during the contact. `PREFERRED` specifies that autotracking is preferred during the contact but fallback to program track if the signal is lost. `REQUIRED` specifies that autotracking is required during the contact and not to use program track if the signal is lost.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Autotrack?: Value<string>;
}

/**
 * Config objects provide information to Ground Station about how to configure the antenna and how data flows during a contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-configdata.html}
 **/
export interface GroundStationConfigConfigData {
  /**
   * Provides information for a dataflow endpoint config object. Dataflow endpoint config objects are used to provide parameters about which IP endpoint(s) to use during a contact. Dataflow endpoints are where Ground Station sends data during a downlink contact and where Ground Station receives data to send to the satellite during an uplink contact.
   *
   * _Required_: No
   *
   * _Type_: [DataflowEndpointConfig](aws-properties-groundstation-config-dataflowendpointconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataflowEndpointConfig?: GroundStationConfigDataflowEndpointConfig;
  /**
   * Provides information for an uplink echo config object. Uplink echo config objects are used to provide parameters for uplink echo during uplink contacts.
   *
   * _Required_: No
   *
   * _Type_: [UplinkEchoConfig](aws-properties-groundstation-config-uplinkechoconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UplinkEchoConfig?: GroundStationConfigUplinkEchoConfig;
  /**
   * Provides information for an antenna downlink config object. Antenna downlink config objects are used to provide parameters for downlinks where no demodulation or decoding is performed by Ground Station (RF over IP downlinks).
   *
   * _Required_: No
   *
   * _Type_: [AntennaDownlinkConfig](aws-properties-groundstation-config-antennadownlinkconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AntennaDownlinkConfig?: GroundStationConfigAntennaDownlinkConfig;
  /**
   * Provides information for a downlink demod decode config object. Downlink demod decode config objects are used to provide parameters for downlinks where the Ground Station service will demodulate and decode the downlinked data.
   *
   * _Required_: No
   *
   * _Type_: [AntennaDownlinkDemodDecodeConfig](aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AntennaDownlinkDemodDecodeConfig?: GroundStationConfigAntennaDownlinkDemodDecodeConfig;
  /**
   * Provides information for a tracking config object. Tracking config objects are used to provide parameters about how to track the satellite through the sky during a contact.
   *
   * _Required_: No
   *
   * _Type_: [TrackingConfig](aws-properties-groundstation-config-trackingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrackingConfig?: GroundStationConfigTrackingConfig;
  /**
   * Provides information for an uplink config object. Uplink config objects are used to provide parameters for uplink contacts.
   *
   * _Required_: No
   *
   * _Type_: [AntennaUplinkConfig](aws-properties-groundstation-config-antennauplinkconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AntennaUplinkConfig?: GroundStationConfigAntennaUplinkConfig;
  /**
   * Provides information for an S3 recording config object. S3 recording config objects are used to provide parameters for S3 recording during downlink contacts.
   *
   * _Required_: No
   *
   * _Type_: [S3RecordingConfig](aws-properties-groundstation-config-s3recordingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3RecordingConfig?: GroundStationConfigS3RecordingConfig;
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for uplink during a contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-antennauplinkconfig.html}
 **/
export interface GroundStationConfigAntennaUplinkConfig {
  /**
   * Whether or not uplink transmit is disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransmitDisabled?: Value<boolean>;
  /**
   * Defines the spectrum configuration.
   *
   * _Required_: No
   *
   * _Type_: [UplinkSpectrumConfig](aws-properties-groundstation-config-uplinkspectrumconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpectrumConfig?: GroundStationConfigUplinkSpectrumConfig;
  /**
   * The equivalent isotropically radiated power (EIRP) to use for uplink transmissions. Valid values are between 20.0 to 50.0 dBW.
   *
   * _Required_: No
   *
   * _Type_: [Eirp](aws-properties-groundstation-config-eirp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetEirp?: GroundStationConfigEirp;
}

/**
 * Defines an equivalent isotropically radiated power (EIRP).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-eirp.html}
 **/
export interface GroundStationConfigEirp {
  /**
   * The value of the EIRP. Valid values are between 20.0 to 50.0 dBW.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
  /**
   * The units of the EIRP.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Units?: Value<string>;
}

/**
 * Provides information about how AWS Ground Station should save downlink data to S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-s3recordingconfig.html}
 **/
export interface GroundStationConfigS3RecordingConfig {
  /**
   * S3 Bucket where the data is written. The name of the S3 Bucket provided must begin with `aws-groundstation`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketArn?: Value<string>;
  /**
   * The prefix of the S3 data object. If you choose to use any optional keys for substitution, these values will be replaced with the corresponding information from your contact details. For example, a prefix of `{satellite_id}/{year}/{month}/{day}/` will replaced with `fake_satellite_id/2021/01/10/`
   *
   * _Optional keys for substitution_: `{satellite_id}` | `{config-name}` | `{config-id}` | `{year}` | `{month}` | `{day}`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Defines the ARN of the role assumed for putting archives to S3.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * Provides information to AWS Ground Station about which IP endpoints to use during a contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-dataflowendpointconfig.html}
 **/
export interface GroundStationConfigDataflowEndpointConfig {
  /**
   * The name of the dataflow endpoint to use during contacts.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataflowEndpointName?: Value<string>;
  /**
   * The region of the dataflow endpoint to use during contacts. When omitted, Ground Station will use the region of the contact.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataflowEndpointRegion?: Value<string>;
}

/**
 * Defines demodulation settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-demodulationconfig.html}
 **/
export interface GroundStationConfigDemodulationConfig {
  /**
   * The demodulation settings are in JSON format and define parameters for demodulation, for example which modulation scheme (e.g. PSK, QPSK, etc.) and matched filter to use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnvalidatedJSON?: Value<string>;
}

/**
 * Defines a frequency.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-frequency.html}
 **/
export interface GroundStationConfigFrequency {
  /**
   * The value of the frequency. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
  /**
   * The units of the frequency.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Units?: Value<string>;
}

/**
 * Defines decoding settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-config-decodeconfig.html}
 **/
export interface GroundStationConfigDecodeConfig {
  /**
   * The decoding settings are in JSON format and define a set of steps to perform to decode the data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnvalidatedJSON?: Value<string>;
}
export interface GroundStationConfigProperties {
  /**
   * Object containing the parameters of a config. Only one subtype may be specified per config. See the subtype definitions for a description of each config subtype.
   *
   * _Required_: Yes
   *
   * _Type_: [ConfigData](aws-properties-groundstation-config-configdata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigData: GroundStationConfigConfigData;
  /**
   * Tags assigned to a resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the config object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a `Config` with the specified parameters.
 *
 * Config objects provide Ground Station with the details necessary in order to schedule and execute satellite contacts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html}
 */
export interface GroundStationConfigResource {
  Type: 'AWS::GroundStation::Config';
  Properties: GroundStationConfigProperties;
}
