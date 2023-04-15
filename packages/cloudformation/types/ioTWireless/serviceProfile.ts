/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * LoRaWANServiceProfile object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html}
 **/
export interface IoTWirelessServiceProfileLoRaWANServiceProfile {
  /**
   * The DLBucketSize value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DlBucketSize?: Value<number>;
  /**
   * The MinGwDiversity value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinGwDiversity?: Value<number>;
  /**
   * The DRMax value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrMax?: Value<number>;
  /**
   * The ReportDevStatusMargin value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportDevStatusMargin?: Value<boolean>;
  /**
   * The PRAllowed value that describes whether passive roaming is allowed.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrAllowed?: Value<boolean>;
  /**
   * The DLRate value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DlRate?: Value<number>;
  /**
   * The ULRatePolicy value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UlRatePolicy?: Value<string>;
  /**
   * The ReportDevStatusBattery value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReportDevStatusBattery?: Value<boolean>;
  /**
   * The ChannelMask value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelMask?: Value<string>;
  /**
   * The ULRate value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UlRate?: Value<number>;
  /**
   * The AddGWMetaData value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddGwMetadata?: Value<boolean>;
  /**
   * The DLRatePolicy value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DlRatePolicy?: Value<string>;
  /**
   * The HRAllowed value that describes whether handover roaming is allowed.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HrAllowed?: Value<boolean>;
  /**
   * The DRMin value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrMin?: Value<number>;
  /**
   * The TargetPer value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetPer?: Value<number>;
  /**
   * The NwkGeoLoc value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NwkGeoLoc?: Value<boolean>;
  /**
   * The DevStatusReqFreq value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DevStatusReqFreq?: Value<number>;
  /**
   * The UlBucketSize value.
   *
   * This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2147483647`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UlBucketSize?: Value<number>;
  /**
   * The RAAllowed value that describes whether roaming activation is allowed.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RaAllowed?: Value<boolean>;
}
export interface IoTWirelessServiceProfileProperties {
  /**
   * LoRaWAN service profile object.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANServiceProfile](aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoRaWAN?: IoTWirelessServiceProfileLoRaWANServiceProfile;
  /**
   * The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
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
   * The name of the new resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a new service profile.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html}
 */
export interface IoTWirelessServiceProfileResource {
  Type: 'AWS::IoTWireless::ServiceProfile';
  Properties: IoTWirelessServiceProfileProperties;
}
