/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-schedulefrequency.html}
 **/
export interface QuickSightRefreshScheduleScheduleFrequency {
  TimeZone?: Value<string>;
  RefreshOnDay?: QuickSightRefreshScheduleRefreshOnDay;
  TimeOfTheDay?: Value<string>;
  Interval?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-refreshonday.html}
 **/
export interface QuickSightRefreshScheduleRefreshOnDay {
  DayOfWeek?: Value<string>;
  DayOfMonth?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-refreshschedule-refreshschedulemap.html}
 **/
export interface QuickSightRefreshScheduleRefreshScheduleMap {
  StartAfterDateTime?: Value<string>;
  ScheduleId?: Value<string>;
  ScheduleFrequency?: QuickSightRefreshScheduleScheduleFrequency;
  RefreshType?: Value<string>;
}
export interface QuickSightRefreshScheduleProperties {
  Schedule?: QuickSightRefreshScheduleRefreshScheduleMap;
  AwsAccountId?: Value<string>;
  DataSetId?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html}
 */
export interface QuickSightRefreshScheduleResource {
  Type: 'AWS::QuickSight::RefreshSchedule';
  Properties: QuickSightRefreshScheduleProperties;
}
