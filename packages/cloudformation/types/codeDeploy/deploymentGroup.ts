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
 * Information about an Amazon EC2 tag filter.
 *
 * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [ Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the _AWS CodeDeploy User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html}
 **/
export interface CodeDeployDeploymentGroupEC2TagFilter {
  /**
   * The tag filter key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
  /**
   * The tag filter type:
   */
  Type?: Value<string>;
  /**
   * The tag filter value.
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
 * The `LoadBalancerInfo` property type specifies information about the load balancer or target group used for an AWS CodeDeploy deployment group. For more information, see [ Integrating CodeDeploy with Elastic Load Balancing](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html) in the _AWS CodeDeploy User Guide_.
 *
 * For AWS CloudFormation to use the properties specified in `LoadBalancerInfo`, the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL`. If `DeploymentStyle.DeploymentOption` is not set to `WITH_TRAFFIC_CONTROL`, AWS CloudFormation ignores any settings specified in `LoadBalancerInfo`.
 *
 * **Note**
 *
 * AWS CloudFormation supports blue/green deployments on the AWS Lambda compute platform only.
 *
 * `LoadBalancerInfo` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html}
 **/
export interface CodeDeployDeploymentGroupLoadBalancerInfo {
  /**
   * An array that contains information about the load balancer to use for load balancing in a deployment. In Elastic Load Balancing, load balancers are used with Classic Load Balancers.
   *
   * Adding more than one load balancer to the array is not supported.
   *
   * _Required_: No
   *
   * _Type_: List of [ELBInfo](aws-properties-codedeploy-deploymentgroup-elbinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElbInfoList?: List<CodeDeployDeploymentGroupELBInfo>;
  /**
   * An array that contains information about the target group to use for load balancing in a deployment. In Elastic Load Balancing, target groups are used with Application Load Balancers.
   *
   * Adding more than one target group to the array is not supported.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [TargetGroupInfo](aws-properties-codedeploy-deploymentgroup-targetgroupinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupInfoList?: List<CodeDeployDeploymentGroupTargetGroupInfo>;
  /**
   * The target group pair information. This is an array of `TargeGroupPairInfo` objects with a maximum size of one.
   *
   * _Required_: No
   *
   * _Type_: List of [TargetGroupPairInfo](aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroupPairInfoList?: List<CodeDeployDeploymentGroupTargetGroupPairInfo>;
}

/**
 * Information about notification triggers for the deployment group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html}
 **/
export interface CodeDeployDeploymentGroupTriggerConfig {
  /**
   * The event type or types that trigger notifications.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerEvents?: List<Value<string>>;
  /**
   * The name of the notification trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerTargetArn?: Value<string>;
}

/**
 * Information about blue/green deployment options for a deployment group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html}
 **/
export interface CodeDeployDeploymentGroupBlueGreenDeploymentConfiguration {
  /**
   * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentReadyOption](aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentReadyOption?: CodeDeployDeploymentGroupDeploymentReadyOption;
  /**
   * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
   *
   * _Required_: No
   *
   * _Type_: [GreenFleetProvisioningOption](aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GreenFleetProvisioningOption?: CodeDeployDeploymentGroupGreenFleetProvisioningOption;
  /**
   * Information about whether to terminate instances in the original fleet during a blue/green deployment.
   *
   * _Required_: No
   *
   * _Type_: [BlueInstanceTerminationOption](aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerminateBlueInstancesOnDeploymentSuccess?: CodeDeployDeploymentGroupBlueInstanceTerminationOption;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-s3location.html}
 **/
export interface CodeDeployDeploymentGroupS3Location {
  Bucket: Value<string>;
  BundleType?: Value<string>;
  ETag?: Value<string>;
  Key: Value<string>;
  Version?: Value<string>;
}

/**
 * `TagFilter` is a property type of the [AWS::CodeDeploy::DeploymentGroup ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy, see [Configure Existing On-Premises Instances by Using AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html) in the _AWS CodeDeploy User Guide_.
 *
 * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the _AWS CodeDeploy User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html}
 **/
export interface CodeDeployDeploymentGroupTagFilter {
  /**
   * The on-premises instance tag filter key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
  /**
   * The on-premises instance tag filter type:
   */
  Type?: Value<string>;
  /**
   * The on-premises instance tag filter value.
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
 * Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html}
 **/
export interface CodeDeployDeploymentGroupTrafficRoute {
  /**
   * The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ListenerArns?: List<Value<string>>;
}

/**
 * The `ELBInfo` property type specifies information about the Elastic Load Balancing load balancer used for an CodeDeploy deployment group.
 *
 * If you specify the `ELBInfo` property, the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL` for AWS CodeDeploy to route your traffic using the specified load balancers.
 *
 * `ELBInfo` is a property of the [AWS CodeDeploy DeploymentGroup LoadBalancerInfo ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html}
 **/
export interface CodeDeployDeploymentGroupELBInfo {
  /**
   * For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
   *
   * AWS CloudFormation supports blue/green deployments on AWS Lambda compute platforms only.
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
 * The `Alarm` property type specifies a CloudWatch alarm to use for an AWS CodeDeploy deployment group. The `Alarm` property of the [ CodeDeploy DeploymentGroup AlarmConfiguration ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html) property contains a list of `Alarm` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html}
 **/
export interface CodeDeployDeploymentGroupAlarm {
  /**
   * The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
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
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html}
 **/
export interface CodeDeployDeploymentGroupGreenFleetProvisioningOption {
  /**
   * The method used to add instances to a replacement environment.
   */
  Action?: Value<string>;
}

/**
 * `Deployment` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource that specifies an AWS CodeDeploy application revision to be deployed to instances in the deployment group. If you specify an application revision, your target revision is deployed as soon as the provisioning process is complete.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html}
 **/
export interface CodeDeployDeploymentGroupDeployment {
  /**
   * A comment about the deployment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * If true, then if an `ApplicationStop`, `BeforeBlockTraffic`, or `AfterBlockTraffic` deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if `ApplicationStop` fails, the deployment continues with DownloadBundle. If `BeforeBlockTraffic` fails, the deployment continues with `BlockTraffic`. If `AfterBlockTraffic` fails, the deployment continues with `ApplicationStop`.
   *
   * If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
   *
   * During a deployment, the AWS CodeDeploy agent runs the scripts specified for `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.
   *
   * If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use `ignoreApplicationStopFailures` to specify that the `ApplicationStop`, `BeforeBlockTraffic`, and `AfterBlockTraffic` failures should be ignored.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IgnoreApplicationStopFailures?: Value<boolean>;
  /**
   * Information about the location of stored application artifacts and the service from which to retrieve them.
   *
   * _Required_: Yes
   *
   * _Type_: [RevisionLocation](aws-properties-codedeploy-deploymentgroup-deployment-revision.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Revision: CodeDeployDeploymentGroupRevisionLocation;
}

/**
 * Contains the service and cluster names used to identify an Amazon ECS deployment's target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html}
 **/
export interface CodeDeployDeploymentGroupECSService {
  /**
   * The name of the cluster that the Amazon ECS service is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterName: Value<string>;
  /**
   * The name of the target Amazon ECS service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName: Value<string>;
}

/**
 * Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html}
 **/
export interface CodeDeployDeploymentGroupTargetGroupPairInfo {
  /**
   * The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
   *
   * _Required_: No
   *
   * _Type_: [TrafficRoute](aws-properties-codedeploy-deploymentgroup-trafficroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProdTrafficRoute?: CodeDeployDeploymentGroupTrafficRoute;
  /**
   * One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
   *
   * _Required_: No
   *
   * _Type_: List of [TargetGroupInfo](aws-properties-codedeploy-deploymentgroup-targetgroupinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetGroups?: List<CodeDeployDeploymentGroupTargetGroupInfo>;
  /**
   * An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment.
   *
   * _Required_: No
   *
   * _Type_: [TrafficRoute](aws-properties-codedeploy-deploymentgroup-trafficroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TestTrafficRoute?: CodeDeployDeploymentGroupTrafficRoute;
}

/**
 * The `TargetGroupInfo` property type specifies information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. For more information, see [ TargetGroupInfo](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TargetGroupInfo.html) in the _AWS CodeDeploy API Reference_
 *
 * If you specify the `TargetGroupInfo` property, the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL` for CodeDeploy to route your traffic using the specified target groups.
 *
 * `TargetGroupInfo` is a property of the [LoadBalancerInfo](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html}
 **/
export interface CodeDeployDeploymentGroupTargetGroupInfo {
  /**
   * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.
   *
   * AWS CloudFormation supports blue/green deployments on AWS Lambda compute platforms only.
   *
   * This value cannot exceed 32 characters, so you should use the `Name` property of the target group, or the `TargetGroupName` attribute with the `Fn::GetAtt` intrinsic function, as shown in the following example. Don't use the group's Amazon Resource Name (ARN) or `TargetGroupFullName` attribute.
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
 * The `OnPremisesTagSetListObject` property type specifies lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
 *
 * `OnPremisesTagSetListObject` is a property of the [CodeDeploy DeploymentGroup OnPremisesTagSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html}
 **/
export interface CodeDeployDeploymentGroupOnPremisesTagSetListObject {
  /**
   * Information about groups of on-premises instance tags.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-codedeploy-deploymentgroup-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPremisesTagGroup?: List<CodeDeployDeploymentGroupTagFilter>;
}

/**
 * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html}
 **/
export interface CodeDeployDeploymentGroupDeploymentStyle {
  /**
   * Indicates whether to route deployment traffic behind a load balancer.
   *
   * An Amazon EC2 Application Load Balancer or Network Load Balancer is required for an Amazon ECS deployment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `WITH_TRAFFIC_CONTROL | WITHOUT_TRAFFIC_CONTROL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentOption?: Value<string>;
  /**
   * Indicates whether to run an in-place or blue/green deployment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BLUE_GREEN | IN_PLACE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentType?: Value<string>;
}

/**
 * The `OnPremisesTagSet` property type specifies a list containing other lists of on-premises instance tag groups. In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
 *
 * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the _AWS CodeDeploy User Guide_.
 *
 * `OnPremisesTagSet` is a property of the [DeploymentGroup ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html}
 **/
export interface CodeDeployDeploymentGroupOnPremisesTagSet {
  /**
   * A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   *
   * Duplicates are not allowed.
   *
   * _Required_: No
   *
   * _Type_: List of [OnPremisesTagSetListObject](aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPremisesTagSetList?: List<CodeDeployDeploymentGroupOnPremisesTagSetListObject>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision.html}
 **/
export interface CodeDeployDeploymentGroupRevisionLocation {
  GitHubLocation?: CodeDeployDeploymentGroupGitHubLocation;
  RevisionType?: Value<string>;
  S3Location?: CodeDeployDeploymentGroupS3Location;
}

/**
 * The `EC2TagSet` property type specifies information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. `EC2TagSet` cannot be used in the same template as `EC2TagFilter`.
 *
 * For information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html}
 **/
export interface CodeDeployDeploymentGroupEC2TagSet {
  /**
   * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.
   *
   * Duplicates are not allowed.
   *
   * _Required_: No
   *
   * _Type_: List of [EC2TagSetListObject](aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2TagSetList?: List<CodeDeployDeploymentGroupEC2TagSetListObject>;
}

/**
 * The `AlarmConfiguration` property type configures CloudWatch alarms for an AWS CodeDeploy deployment group. `AlarmConfiguration` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html}
 **/
export interface CodeDeployDeploymentGroupAlarmConfiguration {
  /**
   * A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.
   *
   * _Required_: No
   *
   * _Type_: List of [Alarm](aws-properties-codedeploy-deploymentgroup-alarm.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alarms?: List<CodeDeployDeploymentGroupAlarm>;
  /**
   * Indicates whether the alarm configuration is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is `false`.
   */
  IgnorePollAlarmFailure?: Value<boolean>;
}

/**
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html}
 **/
export interface CodeDeployDeploymentGroupDeploymentReadyOption {
  /**
   * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
   */
  ActionOnTimeout?: Value<string>;
  /**
   * The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `actionOnTimeout`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitTimeInMinutes?: Value<number>;
}

/**
 * The `AutoRollbackConfiguration` property type configures automatic rollback for an AWS CodeDeploy deployment group when a deployment is not completed successfully. For more information, see [Automatic Rollbacks](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html#deployments-rollback-and-redeploy-automatic-rollbacks) in the _AWS CodeDeploy User Guide_.
 *
 * `AutoRollbackConfiguration` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html}
 **/
export interface CodeDeployDeploymentGroupAutoRollbackConfiguration {
  /**
   * Indicates whether a defined automatic rollback configuration is currently enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The event type or types that trigger a rollback. Valid values are `DEPLOYMENT_FAILURE`, `DEPLOYMENT_STOP_ON_ALARM`, or `DEPLOYMENT_STOP_ON_REQUEST`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: List<Value<string>>;
}

/**
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. `BlueInstanceTerminationOption` does not apply to Lambda deployments.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html}
 **/
export interface CodeDeployDeploymentGroupBlueInstanceTerminationOption {
  /**
   * The action to take on instances in the original environment after a successful blue/green deployment.
   */
  Action?: Value<string>;
  /**
   * For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
   *
   * For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set.
   *
   * The maximum setting is 2880 minutes (2 days).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerminationWaitTimeInMinutes?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation.html}
 **/
export interface CodeDeployDeploymentGroupGitHubLocation {
  CommitId: Value<string>;
  Repository: Value<string>;
}

/**
 * The `EC2TagSet` property type specifies information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same template as EC2TagFilters.
 *
 * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the _AWS CodeDeploy User Guide_.
 *
 * `EC2TagSet` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html}
 **/
export interface CodeDeployDeploymentGroupEC2TagSetListObject {
  /**
   * A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
   *
   * _Required_: No
   *
   * _Type_: List of [EC2TagFilter](aws-properties-codedeploy-deploymentgroup-ec2tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2TagGroup?: List<CodeDeployDeploymentGroupEC2TagFilter>;
}
export interface CodeDeployDeploymentGroupProperties {
  /**
   * Information about the Amazon CloudWatch alarms that are associated with the deployment group.
   *
   * _Required_: No
   *
   * _Type_: [AlarmConfiguration](aws-properties-codedeploy-deploymentgroup-alarmconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmConfiguration?: CodeDeployDeploymentGroupAlarmConfiguration;
  /**
   * The name of an existing CodeDeploy application to associate this deployment group with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * Information about the automatic rollback configuration that is associated with the deployment group. If you specify this property, don't specify the `Deployment` property.
   *
   * _Required_: No
   *
   * _Type_: [AutoRollbackConfiguration](aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoRollbackConfiguration?: CodeDeployDeploymentGroupAutoRollbackConfiguration;
  /**
   * A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. Duplicates are not allowed.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoScalingGroups?: List<Value<string>>;
  /**
   * Information about blue/green deployment options for a deployment group.
   *
   * _Required_: No
   *
   * _Type_: [BlueGreenDeploymentConfiguration](aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlueGreenDeploymentConfiguration?: CodeDeployDeploymentGroupBlueGreenDeploymentConfiguration;
  /**
   * The application revision to deploy to this deployment group. If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the `AutoRollbackConfiguration` property.
   *
   * _Required_: No
   *
   * _Type_: [Deployment](aws-properties-codedeploy-deploymentgroup-deployment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Deployment?: CodeDeployDeploymentGroupDeployment;
  /**
   * A deployment configuration name or a predefined configuration name. With predefined configurations, you can deploy application revisions to one instance at a time (`CodeDeployDefault.OneAtATime`), half of the instances at a time (`CodeDeployDefault.HalfAtATime`), or all the instances at once (`CodeDeployDefault.AllAtOnce`). For more information and valid values, see [Working with Deployment Configurations](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html) in the _AWS CodeDeploy User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentConfigName?: Value<string>;
  /**
   * A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeploymentGroupName?: Value<string>;
  /**
   * Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.
   *
   * If you specify this property with a blue/green deployment type, don't specify the `AutoScalingGroups`, `LoadBalancerInfo`, or `Deployment` properties.
   *
   * For blue/green deployments, AWS CloudFormation supports deployments on Lambda compute platforms only. You can perform Amazon ECS blue/green deployments using `AWS::CodeDeploy::BlueGreen ` hook. See [Perform Amazon ECS blue/green deployments through CodeDeploy using AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html) for more information.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentStyle](aws-properties-codedeploy-deploymentgroup-deploymentstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentStyle?: CodeDeployDeploymentGroupDeploymentStyle;
  /**
   * The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format `<clustername>:<servicename>`.
   *
   * _Required_: No
   *
   * _Type_: List of [ECSService](aws-properties-codedeploy-deploymentgroup-ecsservice.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ECSServices?: List<CodeDeployDeploymentGroupECSService>;
  /**
   * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed.
   *
   * You can specify `EC2TagFilters` or `Ec2TagSet`, but not both.
   *
   * _Required_: No
   *
   * _Type_: List of [EC2TagFilter](aws-properties-codedeploy-deploymentgroup-ec2tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2TagFilters?: List<CodeDeployDeploymentGroupEC2TagFilter>;
  /**
   * Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as `ec2TagFilter`.
   *
   * _Required_: No
   *
   * _Type_: [EC2TagSet](aws-properties-codedeploy-deploymentgroup-ec2tagset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ec2TagSet?: CodeDeployDeploymentGroupEC2TagSet;
  /**
   * Information about the load balancer to use in a deployment. For more information, see [ Integrating CodeDeploy with Elastic Load Balancing](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html) in the _AWS CodeDeploy User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [LoadBalancerInfo](aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerInfo?: CodeDeployDeploymentGroupLoadBalancerInfo;
  /**
   * The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. To register on-premises instances with CodeDeploy, see [Working with On-Premises Instances for CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html) in the _AWS CodeDeploy User Guide_. Duplicates are not allowed.
   *
   * You can specify `OnPremisesInstanceTagFilters` or `OnPremisesInstanceTagSet`, but not both.
   *
   * _Required_: No
   *
   * _Type_: List of [TagFilter](aws-properties-codedeploy-deploymentgroup-tagfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPremisesInstanceTagFilters?: List<CodeDeployDeploymentGroupTagFilter>;
  /**
   * Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all the tag groups.
   *
   * You can specify `OnPremisesInstanceTagFilters` or `OnPremisesInstanceTagSet`, but not both.
   *
   * _Required_: No
   *
   * _Type_: [OnPremisesTagSet](aws-properties-codedeploy-deploymentgroup-onpremisestagset.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPremisesTagSet?: CodeDeployDeploymentGroupOnPremisesTagSet;
  /**
   * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
   *
   * If this option is set to `UPDATE` or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.
   *
   * If this option is set to `IGNORE`, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IGNORE | UPDATE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutdatedInstancesStrategy?: Value<string>;
  /**
   * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. For more information, see [Create a Service Role for AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html) in the _AWS CodeDeploy User Guide_.
   *
   * In some cases, you might need to add a dependency on the service role's policy. For more information, see IAM role policy in [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceRoleArn: Value<string>;
  /**
   * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Information about triggers associated with the deployment group. Duplicates are not allowed
   *
   * _Required_: No
   *
   * _Type_: List of [TriggerConfig](aws-properties-codedeploy-deploymentgroup-triggerconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TriggerConfigurations?: List<CodeDeployDeploymentGroupTriggerConfig>;
}

/**
 * The `AWS::CodeDeploy::DeploymentGroup` resource creates an AWS CodeDeploy deployment group that specifies which instances your application revisions are deployed to, along with other deployment options. For more information, see [CreateDeploymentGroup](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html) in the _CodeDeploy API Reference_.
 *
 * **Note**
 *
 * Amazon ECS blue/green deployments through CodeDeploy do not use the `AWS::CodeDeploy::DeploymentGroup` resource. To perform Amazon ECS blue/green deployments, use the `AWS::CodeDeploy::BlueGreen` hook. See [Perform Amazon ECS blue/green deployments through CodeDeploy using AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html) for more information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html}
 */
export interface CodeDeployDeploymentGroupResource {
  Type: 'AWS::CodeDeploy::DeploymentGroup';
  Properties: CodeDeployDeploymentGroupProperties;
}
