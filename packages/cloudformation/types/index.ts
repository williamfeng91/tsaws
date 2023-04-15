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
import { AccessAnalyzerAnalyzerResource } from './accessAnalyzer';
import {
  ACMPCACertificateAuthorityActivationResource,
  ACMPCACertificateAuthorityResource,
  ACMPCACertificateResource,
  ACMPCAPermissionResource,
} from './acmpca';
import {
  AmazonMQBrokerResource,
  AmazonMQConfigurationAssociationResource,
  AmazonMQConfigurationResource,
} from './amazonMq';
import { AmplifyAppResource, AmplifyBranchResource, AmplifyDomainResource } from './amplify';
import {
  AmplifyUIBuilderComponentResource,
  AmplifyUIBuilderFormResource,
  AmplifyUIBuilderThemeResource,
} from './amplifyUiBuilder';
import {
  ApiGatewayAccountResource,
  ApiGatewayApiKeyResource,
  ApiGatewayAuthorizerResource,
  ApiGatewayBasePathMappingResource,
  ApiGatewayClientCertificateResource,
  ApiGatewayDeploymentResource,
  ApiGatewayDocumentationPartResource,
  ApiGatewayDocumentationVersionResource,
  ApiGatewayDomainNameResource,
  ApiGatewayGatewayResponseResource,
  ApiGatewayMethodResource,
  ApiGatewayModelResource,
  ApiGatewayRequestValidatorResource,
  ApiGatewayResourceResource,
  ApiGatewayRestApiResource,
  ApiGatewayStageResource,
  ApiGatewayUsagePlanKeyResource,
  ApiGatewayUsagePlanResource,
  ApiGatewayVpcLinkResource,
} from './apiGateway';
import {
  ApiGatewayV2ApiGatewayManagedOverridesResource,
  ApiGatewayV2ApiMappingResource,
  ApiGatewayV2ApiResource,
  ApiGatewayV2AuthorizerResource,
  ApiGatewayV2DeploymentResource,
  ApiGatewayV2DomainNameResource,
  ApiGatewayV2IntegrationResource,
  ApiGatewayV2IntegrationResponseResource,
  ApiGatewayV2ModelResource,
  ApiGatewayV2RouteResource,
  ApiGatewayV2RouteResponseResource,
  ApiGatewayV2StageResource,
  ApiGatewayV2VpcLinkResource,
} from './apiGatewayV2';
import {
  AppConfigApplicationResource,
  AppConfigConfigurationProfileResource,
  AppConfigDeploymentResource,
  AppConfigDeploymentStrategyResource,
  AppConfigEnvironmentResource,
  AppConfigExtensionAssociationResource,
  AppConfigExtensionResource,
  AppConfigHostedConfigurationVersionResource,
} from './appConfig';
import {
  AppFlowConnectorProfileResource,
  AppFlowConnectorResource,
  AppFlowFlowResource,
} from './appFlow';
import {
  AppIntegrationsDataIntegrationResource,
  AppIntegrationsEventIntegrationResource,
} from './appIntegrations';
import {
  AppMeshGatewayRouteResource,
  AppMeshMeshResource,
  AppMeshRouteResource,
  AppMeshVirtualGatewayResource,
  AppMeshVirtualNodeResource,
  AppMeshVirtualRouterResource,
  AppMeshVirtualServiceResource,
} from './appMesh';
import {
  AppRunnerObservabilityConfigurationResource,
  AppRunnerServiceResource,
  AppRunnerVpcConnectorResource,
  AppRunnerVpcIngressConnectionResource,
} from './appRunner';
import {
  AppStreamAppBlockResource,
  AppStreamApplicationEntitlementAssociationResource,
  AppStreamApplicationFleetAssociationResource,
  AppStreamApplicationResource,
  AppStreamDirectoryConfigResource,
  AppStreamEntitlementResource,
  AppStreamFleetResource,
  AppStreamImageBuilderResource,
  AppStreamStackFleetAssociationResource,
  AppStreamStackResource,
  AppStreamStackUserAssociationResource,
  AppStreamUserResource,
} from './appStream';
import {
  AppSyncApiCacheResource,
  AppSyncApiKeyResource,
  AppSyncDataSourceResource,
  AppSyncDomainNameApiAssociationResource,
  AppSyncDomainNameResource,
  AppSyncFunctionConfigurationResource,
  AppSyncGraphQLApiResource,
  AppSyncGraphQLSchemaResource,
  AppSyncResolverResource,
} from './appSync';
import {
  ApplicationAutoScalingScalableTargetResource,
  ApplicationAutoScalingScalingPolicyResource,
} from './applicationAutoScaling';
import { ApplicationInsightsApplicationResource } from './applicationInsights';
import { APSRuleGroupsNamespaceResource, APSWorkspaceResource } from './aps';
import { ASKSkillResource } from './ask';
import {
  AthenaDataCatalogResource,
  AthenaNamedQueryResource,
  AthenaPreparedStatementResource,
  AthenaWorkGroupResource,
} from './athena';
import { AuditManagerAssessmentResource } from './auditManager';
import {
  AutoScalingAutoScalingGroupResource,
  AutoScalingLaunchConfigurationResource,
  AutoScalingLifecycleHookResource,
  AutoScalingScalingPolicyResource,
  AutoScalingScheduledActionResource,
  AutoScalingWarmPoolResource,
} from './autoScaling';
import { AutoScalingPlansScalingPlanResource } from './autoScalingPlans';
import {
  BackupBackupPlanResource,
  BackupBackupSelectionResource,
  BackupBackupVaultResource,
  BackupFrameworkResource,
  BackupReportPlanResource,
} from './backup';
import {
  BatchComputeEnvironmentResource,
  BatchJobDefinitionResource,
  BatchJobQueueResource,
  BatchSchedulingPolicyResource,
} from './batch';
import {
  BillingConductorBillingGroupResource,
  BillingConductorCustomLineItemResource,
  BillingConductorPricingPlanResource,
  BillingConductorPricingRuleResource,
} from './billingConductor';
import { BudgetsBudgetResource, BudgetsBudgetsActionResource } from './budgets';
import { CassandraKeyspaceResource, CassandraTableResource } from './cassandra';
import {
  CEAnomalyMonitorResource,
  CEAnomalySubscriptionResource,
  CECostCategoryResource,
} from './ce';
import {
  CertificateManagerAccountResource,
  CertificateManagerCertificateResource,
} from './certificateManager';
import {
  ChatbotMicrosoftTeamsChannelConfigurationResource,
  ChatbotSlackChannelConfigurationResource,
} from './chatbot';
import { Cloud9EnvironmentEC2Resource } from './cloud9';
import {
  CloudFormationCustomResourceResource,
  CloudFormationHookDefaultVersionResource,
  CloudFormationHookTypeConfigResource,
  CloudFormationHookVersionResource,
  CloudFormationMacroResource,
  CloudFormationModuleDefaultVersionResource,
  CloudFormationModuleVersionResource,
  CloudFormationPublicTypeVersionResource,
  CloudFormationPublisherResource,
  CloudFormationResourceDefaultVersionResource,
  CloudFormationResourceVersionResource,
  CloudFormationStackResource,
  CloudFormationStackSetResource,
  CloudFormationTypeActivationResource,
  CloudFormationWaitConditionHandleResource,
  CloudFormationWaitConditionResource,
} from './cloudFormation';
import {
  CloudFrontCachePolicyResource,
  CloudFrontCloudFrontOriginAccessIdentityResource,
  CloudFrontContinuousDeploymentPolicyResource,
  CloudFrontDistributionResource,
  CloudFrontFunctionResource,
  CloudFrontKeyGroupResource,
  CloudFrontMonitoringSubscriptionResource,
  CloudFrontOriginAccessControlResource,
  CloudFrontOriginRequestPolicyResource,
  CloudFrontPublicKeyResource,
  CloudFrontRealtimeLogConfigResource,
  CloudFrontResponseHeadersPolicyResource,
  CloudFrontStreamingDistributionResource,
} from './cloudFront';
import {
  CloudTrailChannelResource,
  CloudTrailEventDataStoreResource,
  CloudTrailResourcePolicyResource,
  CloudTrailTrailResource,
} from './cloudTrail';
import {
  CloudWatchAlarmResource,
  CloudWatchAnomalyDetectorResource,
  CloudWatchCompositeAlarmResource,
  CloudWatchDashboardResource,
  CloudWatchInsightRuleResource,
  CloudWatchMetricStreamResource,
} from './cloudWatch';
import { CodeArtifactDomainResource, CodeArtifactRepositoryResource } from './codeArtifact';
import {
  CodeBuildProjectResource,
  CodeBuildReportGroupResource,
  CodeBuildSourceCredentialResource,
} from './codeBuild';
import { CodeCommitRepositoryResource } from './codeCommit';
import {
  CodeDeployApplicationResource,
  CodeDeployDeploymentConfigResource,
  CodeDeployDeploymentGroupResource,
} from './codeDeploy';
import { CodeGuruProfilerProfilingGroupResource } from './codeGuruProfiler';
import { CodeGuruReviewerRepositoryAssociationResource } from './codeGuruReviewer';
import {
  CodePipelineCustomActionTypeResource,
  CodePipelinePipelineResource,
  CodePipelineWebhookResource,
} from './codePipeline';
import { CodeStarGitHubRepositoryResource } from './codeStar';
import { CodeStarConnectionsConnectionResource } from './codeStarConnections';
import { CodeStarNotificationsNotificationRuleResource } from './codeStarNotifications';
import {
  CognitoIdentityPoolResource,
  CognitoIdentityPoolRoleAttachmentResource,
  CognitoUserPoolClientResource,
  CognitoUserPoolDomainResource,
  CognitoUserPoolGroupResource,
  CognitoUserPoolIdentityProviderResource,
  CognitoUserPoolResource,
  CognitoUserPoolResourceServerResource,
  CognitoUserPoolRiskConfigurationAttachmentResource,
  CognitoUserPoolUICustomizationAttachmentResource,
  CognitoUserPoolUserResource,
  CognitoUserPoolUserToGroupAttachmentResource,
} from './cognito';
import { ComprehendFlywheelResource } from './comprehend';
import {
  ConfigAggregationAuthorizationResource,
  ConfigConfigRuleResource,
  ConfigConfigurationAggregatorResource,
  ConfigConfigurationRecorderResource,
  ConfigConformancePackResource,
  ConfigDeliveryChannelResource,
  ConfigOrganizationConfigRuleResource,
  ConfigOrganizationConformancePackResource,
  ConfigRemediationConfigurationResource,
  ConfigStoredQueryResource,
} from './config';
import {
  ConnectApprovedOriginResource,
  ConnectContactFlowModuleResource,
  ConnectContactFlowResource,
  ConnectHoursOfOperationResource,
  ConnectInstanceResource,
  ConnectInstanceStorageConfigResource,
  ConnectIntegrationAssociationResource,
  ConnectPhoneNumberResource,
  ConnectQuickConnectResource,
  ConnectRuleResource,
  ConnectSecurityKeyResource,
  ConnectTaskTemplateResource,
  ConnectUserHierarchyGroupResource,
  ConnectUserResource,
} from './connect';
import { ConnectCampaignsCampaignResource } from './connectCampaigns';
import { ControlTowerEnabledControlResource } from './controlTower';
import { CURReportDefinitionResource } from './cur';
import {
  CustomerProfilesDomainResource,
  CustomerProfilesIntegrationResource,
  CustomerProfilesObjectTypeResource,
} from './customerProfiles';
import {
  DataBrewDatasetResource,
  DataBrewJobResource,
  DataBrewProjectResource,
  DataBrewRecipeResource,
  DataBrewRulesetResource,
  DataBrewScheduleResource,
} from './dataBrew';
import { DataPipelinePipelineResource } from './dataPipeline';
import {
  DataSyncAgentResource,
  DataSyncLocationEFSResource,
  DataSyncLocationFSxLustreResource,
  DataSyncLocationFSxONTAPResource,
  DataSyncLocationFSxOpenZFSResource,
  DataSyncLocationFSxWindowsResource,
  DataSyncLocationHDFSResource,
  DataSyncLocationNFSResource,
  DataSyncLocationObjectStorageResource,
  DataSyncLocationS3Resource,
  DataSyncLocationSMBResource,
  DataSyncTaskResource,
} from './dataSync';
import { DAXClusterResource, DAXParameterGroupResource, DAXSubnetGroupResource } from './dax';
import { DetectiveGraphResource, DetectiveMemberInvitationResource } from './detective';
import {
  DevOpsGuruLogAnomalyDetectionIntegrationResource,
  DevOpsGuruNotificationChannelResource,
  DevOpsGuruResourceCollectionResource,
} from './devOpsGuru';
import {
  DeviceFarmDevicePoolResource,
  DeviceFarmInstanceProfileResource,
  DeviceFarmNetworkProfileResource,
  DeviceFarmProjectResource,
  DeviceFarmTestGridProjectResource,
  DeviceFarmVPCEConfigurationResource,
} from './deviceFarm';
import {
  DirectoryServiceMicrosoftADResource,
  DirectoryServiceSimpleADResource,
} from './directoryService';
import { DLMLifecyclePolicyResource } from './dlm';
import {
  DMSCertificateResource,
  DMSEndpointResource,
  DMSEventSubscriptionResource,
  DMSReplicationInstanceResource,
  DMSReplicationSubnetGroupResource,
  DMSReplicationTaskResource,
} from './dms';
import {
  DocDBDBClusterParameterGroupResource,
  DocDBDBClusterResource,
  DocDBDBInstanceResource,
  DocDBDBSubnetGroupResource,
} from './docDb';
import { DocDBElasticClusterResource } from './docDbElastic';
import { DynamoDBGlobalTableResource, DynamoDBTableResource } from './dynamoDb';
import {
  EC2CapacityReservationFleetResource,
  EC2CapacityReservationResource,
  EC2CarrierGatewayResource,
  EC2ClientVpnAuthorizationRuleResource,
  EC2ClientVpnEndpointResource,
  EC2ClientVpnRouteResource,
  EC2ClientVpnTargetNetworkAssociationResource,
  EC2CustomerGatewayResource,
  EC2DHCPOptionsResource,
  EC2EC2FleetResource,
  EC2EIPAssociationResource,
  EC2EIPResource,
  EC2EgressOnlyInternetGatewayResource,
  EC2EnclaveCertificateIamRoleAssociationResource,
  EC2FlowLogResource,
  EC2GatewayRouteTableAssociationResource,
  EC2HostResource,
  EC2IPAMAllocationResource,
  EC2IPAMPoolCidrResource,
  EC2IPAMPoolResource,
  EC2IPAMResource,
  EC2IPAMResourceDiscoveryAssociationResource,
  EC2IPAMResourceDiscoveryResource,
  EC2IPAMScopeResource,
  EC2InstanceResource,
  EC2InternetGatewayResource,
  EC2KeyPairResource,
  EC2LaunchTemplateResource,
  EC2LocalGatewayRouteResource,
  EC2LocalGatewayRouteTableResource,
  EC2LocalGatewayRouteTableVPCAssociationResource,
  EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationResource,
  EC2NatGatewayResource,
  EC2NetworkAclEntryResource,
  EC2NetworkAclResource,
  EC2NetworkInsightsAccessScopeAnalysisResource,
  EC2NetworkInsightsAccessScopeResource,
  EC2NetworkInsightsAnalysisResource,
  EC2NetworkInsightsPathResource,
  EC2NetworkInterfaceAttachmentResource,
  EC2NetworkInterfacePermissionResource,
  EC2NetworkInterfaceResource,
  EC2NetworkPerformanceMetricSubscriptionResource,
  EC2PlacementGroupResource,
  EC2PrefixListResource,
  EC2RouteResource,
  EC2RouteTableResource,
  EC2SecurityGroupEgressResource,
  EC2SecurityGroupIngressResource,
  EC2SecurityGroupResource,
  EC2SpotFleetResource,
  EC2SubnetCidrBlockResource,
  EC2SubnetNetworkAclAssociationResource,
  EC2SubnetResource,
  EC2SubnetRouteTableAssociationResource,
  EC2TrafficMirrorFilterResource,
  EC2TrafficMirrorFilterRuleResource,
  EC2TrafficMirrorSessionResource,
  EC2TrafficMirrorTargetResource,
  EC2TransitGatewayAttachmentResource,
  EC2TransitGatewayConnectResource,
  EC2TransitGatewayMulticastDomainAssociationResource,
  EC2TransitGatewayMulticastDomainResource,
  EC2TransitGatewayMulticastGroupMemberResource,
  EC2TransitGatewayMulticastGroupSourceResource,
  EC2TransitGatewayPeeringAttachmentResource,
  EC2TransitGatewayResource,
  EC2TransitGatewayRouteResource,
  EC2TransitGatewayRouteTableAssociationResource,
  EC2TransitGatewayRouteTablePropagationResource,
  EC2TransitGatewayRouteTableResource,
  EC2TransitGatewayVpcAttachmentResource,
  EC2VPCCidrBlockResource,
  EC2VPCDHCPOptionsAssociationResource,
  EC2VPCEndpointConnectionNotificationResource,
  EC2VPCEndpointResource,
  EC2VPCEndpointServicePermissionsResource,
  EC2VPCEndpointServiceResource,
  EC2VPCGatewayAttachmentResource,
  EC2VPCPeeringConnectionResource,
  EC2VPCResource,
  EC2VPNConnectionResource,
  EC2VPNConnectionRouteResource,
  EC2VPNGatewayResource,
  EC2VPNGatewayRoutePropagationResource,
  EC2VolumeAttachmentResource,
  EC2VolumeResource,
} from './ec2';
import {
  ECRPublicRepositoryResource,
  ECRPullThroughCacheRuleResource,
  ECRRegistryPolicyResource,
  ECRReplicationConfigurationResource,
  ECRRepositoryResource,
} from './ecr';
import {
  ECSCapacityProviderResource,
  ECSClusterCapacityProviderAssociationsResource,
  ECSClusterResource,
  ECSPrimaryTaskSetResource,
  ECSServiceResource,
  ECSTaskDefinitionResource,
  ECSTaskSetResource,
} from './ecs';
import { EFSAccessPointResource, EFSFileSystemResource, EFSMountTargetResource } from './efs';
import {
  EKSAddonResource,
  EKSClusterResource,
  EKSFargateProfileResource,
  EKSIdentityProviderConfigResource,
  EKSNodegroupResource,
} from './eks';
import {
  ElastiCacheCacheClusterResource,
  ElastiCacheGlobalReplicationGroupResource,
  ElastiCacheParameterGroupResource,
  ElastiCacheReplicationGroupResource,
  ElastiCacheSecurityGroupIngressResource,
  ElastiCacheSecurityGroupResource,
  ElastiCacheSubnetGroupResource,
  ElastiCacheUserGroupResource,
  ElastiCacheUserResource,
} from './elastiCache';
import {
  ElasticBeanstalkApplicationResource,
  ElasticBeanstalkApplicationVersionResource,
  ElasticBeanstalkConfigurationTemplateResource,
  ElasticBeanstalkEnvironmentResource,
} from './elasticBeanstalk';
import { ElasticLoadBalancingLoadBalancerResource } from './elasticLoadBalancing';
import {
  ElasticLoadBalancingV2ListenerCertificateResource,
  ElasticLoadBalancingV2ListenerResource,
  ElasticLoadBalancingV2ListenerRuleResource,
  ElasticLoadBalancingV2LoadBalancerResource,
  ElasticLoadBalancingV2TargetGroupResource,
} from './elasticLoadBalancingV2';
import { ElasticsearchDomainResource } from './elasticsearch';
import {
  EMRClusterResource,
  EMRInstanceFleetConfigResource,
  EMRInstanceGroupConfigResource,
  EMRSecurityConfigurationResource,
  EMRStepResource,
  EMRStudioResource,
  EMRStudioSessionMappingResource,
} from './emr';
import { EMRContainersVirtualClusterResource } from './emrContainers';
import { EMRServerlessApplicationResource } from './emrServerless';
import {
  EventSchemasDiscovererResource,
  EventSchemasRegistryPolicyResource,
  EventSchemasRegistryResource,
  EventSchemasSchemaResource,
} from './eventSchemas';
import {
  EventsApiDestinationResource,
  EventsArchiveResource,
  EventsConnectionResource,
  EventsEndpointResource,
  EventsEventBusPolicyResource,
  EventsEventBusResource,
  EventsRuleResource,
} from './events';
import {
  EvidentlyExperimentResource,
  EvidentlyFeatureResource,
  EvidentlyLaunchResource,
  EvidentlyProjectResource,
  EvidentlySegmentResource,
} from './evidently';
import {
  FSxDataRepositoryAssociationResource,
  FSxFileSystemResource,
  FSxSnapshotResource,
  FSxStorageVirtualMachineResource,
  FSxVolumeResource,
} from './fSx';
import { FinSpaceEnvironmentResource } from './finSpace';
import { FISExperimentTemplateResource } from './fis';
import { FMSNotificationChannelResource, FMSPolicyResource, FMSResourceSetResource } from './fms';
import { ForecastDatasetGroupResource, ForecastDatasetResource } from './forecast';
import {
  FraudDetectorDetectorResource,
  FraudDetectorEntityTypeResource,
  FraudDetectorEventTypeResource,
  FraudDetectorLabelResource,
  FraudDetectorOutcomeResource,
  FraudDetectorVariableResource,
} from './fraudDetector';
import {
  GameLiftAliasResource,
  GameLiftBuildResource,
  GameLiftFleetResource,
  GameLiftGameServerGroupResource,
  GameLiftGameSessionQueueResource,
  GameLiftLocationResource,
  GameLiftMatchmakingConfigurationResource,
  GameLiftMatchmakingRuleSetResource,
  GameLiftScriptResource,
} from './gameLift';
import {
  GlobalAcceleratorAcceleratorResource,
  GlobalAcceleratorEndpointGroupResource,
  GlobalAcceleratorListenerResource,
} from './globalAccelerator';
import {
  GlueClassifierResource,
  GlueConnectionResource,
  GlueCrawlerResource,
  GlueDataCatalogEncryptionSettingsResource,
  GlueDatabaseResource,
  GlueDevEndpointResource,
  GlueJobResource,
  GlueMLTransformResource,
  GluePartitionResource,
  GlueRegistryResource,
  GlueSchemaResource,
  GlueSchemaVersionMetadataResource,
  GlueSchemaVersionResource,
  GlueSecurityConfigurationResource,
  GlueTableResource,
  GlueTriggerResource,
  GlueWorkflowResource,
} from './glue';
import { GrafanaWorkspaceResource } from './grafana';
import {
  GreengrassConnectorDefinitionResource,
  GreengrassConnectorDefinitionVersionResource,
  GreengrassCoreDefinitionResource,
  GreengrassCoreDefinitionVersionResource,
  GreengrassDeviceDefinitionResource,
  GreengrassDeviceDefinitionVersionResource,
  GreengrassFunctionDefinitionResource,
  GreengrassFunctionDefinitionVersionResource,
  GreengrassGroupResource,
  GreengrassGroupVersionResource,
  GreengrassLoggerDefinitionResource,
  GreengrassLoggerDefinitionVersionResource,
  GreengrassResourceDefinitionResource,
  GreengrassResourceDefinitionVersionResource,
  GreengrassSubscriptionDefinitionResource,
  GreengrassSubscriptionDefinitionVersionResource,
} from './greengrass';
import {
  GreengrassV2ComponentVersionResource,
  GreengrassV2DeploymentResource,
} from './greengrassV2';
import {
  GroundStationConfigResource,
  GroundStationDataflowEndpointGroupResource,
  GroundStationMissionProfileResource,
} from './groundStation';
import {
  GuardDutyDetectorResource,
  GuardDutyFilterResource,
  GuardDutyIPSetResource,
  GuardDutyMasterResource,
  GuardDutyMemberResource,
  GuardDutyThreatIntelSetResource,
} from './guardDuty';
import { HealthLakeFHIRDatastoreResource } from './healthLake';
import {
  IAMAccessKeyResource,
  IAMGroupResource,
  IAMInstanceProfileResource,
  IAMManagedPolicyResource,
  IAMOIDCProviderResource,
  IAMPolicyResource,
  IAMRoleResource,
  IAMSAMLProviderResource,
  IAMServerCertificateResource,
  IAMServiceLinkedRoleResource,
  IAMUserResource,
  IAMUserToGroupAdditionResource,
  IAMVirtualMFADeviceResource,
} from './iam';
import { IdentityStoreGroupMembershipResource, IdentityStoreGroupResource } from './identityStore';
import {
  ImageBuilderComponentResource,
  ImageBuilderContainerRecipeResource,
  ImageBuilderDistributionConfigurationResource,
  ImageBuilderImagePipelineResource,
  ImageBuilderImageRecipeResource,
  ImageBuilderImageResource,
  ImageBuilderInfrastructureConfigurationResource,
} from './imageBuilder';
import {
  InspectorAssessmentTargetResource,
  InspectorAssessmentTemplateResource,
  InspectorResourceGroupResource,
} from './inspector';
import { InspectorV2FilterResource } from './inspectorV2';
import { InternetMonitorMonitorResource } from './internetMonitor';
import {
  IoT1ClickDeviceResource,
  IoT1ClickPlacementResource,
  IoT1ClickProjectResource,
} from './ioT1Click';
import {
  IoTAnalyticsChannelResource,
  IoTAnalyticsDatasetResource,
  IoTAnalyticsDatastoreResource,
  IoTAnalyticsPipelineResource,
} from './ioTAnalytics';
import { IoTCoreDeviceAdvisorSuiteDefinitionResource } from './ioTCoreDeviceAdvisor';
import {
  IoTEventsAlarmModelResource,
  IoTEventsDetectorModelResource,
  IoTEventsInputResource,
} from './ioTEvents';
import { IoTFleetHubApplicationResource } from './ioTFleetHub';
import {
  IoTFleetWiseCampaignResource,
  IoTFleetWiseDecoderManifestResource,
  IoTFleetWiseFleetResource,
  IoTFleetWiseModelManifestResource,
  IoTFleetWiseSignalCatalogResource,
  IoTFleetWiseVehicleResource,
} from './ioTFleetWise';
import {
  IoTSiteWiseAccessPolicyResource,
  IoTSiteWiseAssetModelResource,
  IoTSiteWiseAssetResource,
  IoTSiteWiseDashboardResource,
  IoTSiteWiseGatewayResource,
  IoTSiteWisePortalResource,
  IoTSiteWiseProjectResource,
} from './ioTSiteWise';
import { IoTThingsGraphFlowTemplateResource } from './ioTThingsGraph';
import {
  IoTTwinMakerComponentTypeResource,
  IoTTwinMakerEntityResource,
  IoTTwinMakerSceneResource,
  IoTTwinMakerSyncJobResource,
  IoTTwinMakerWorkspaceResource,
} from './ioTTwinMaker';
import {
  IoTWirelessDestinationResource,
  IoTWirelessDeviceProfileResource,
  IoTWirelessFuotaTaskResource,
  IoTWirelessMulticastGroupResource,
  IoTWirelessNetworkAnalyzerConfigurationResource,
  IoTWirelessPartnerAccountResource,
  IoTWirelessServiceProfileResource,
  IoTWirelessTaskDefinitionResource,
  IoTWirelessWirelessDeviceImportTaskResource,
  IoTWirelessWirelessDeviceResource,
  IoTWirelessWirelessGatewayResource,
} from './ioTWireless';
import {
  IoTAccountAuditConfigurationResource,
  IoTAuthorizerResource,
  IoTCACertificateResource,
  IoTCertificateResource,
  IoTCustomMetricResource,
  IoTDimensionResource,
  IoTDomainConfigurationResource,
  IoTFleetMetricResource,
  IoTJobTemplateResource,
  IoTLoggingResource,
  IoTMitigationActionResource,
  IoTPolicyPrincipalAttachmentResource,
  IoTPolicyResource,
  IoTProvisioningTemplateResource,
  IoTResourceSpecificLoggingResource,
  IoTRoleAliasResource,
  IoTScheduledAuditResource,
  IoTSecurityProfileResource,
  IoTThingPrincipalAttachmentResource,
  IoTThingResource,
  IoTTopicRuleDestinationResource,
  IoTTopicRuleResource,
} from './iot';
import {
  IVSChannelResource,
  IVSPlaybackKeyPairResource,
  IVSRecordingConfigurationResource,
  IVSStreamKeyResource,
} from './ivs';
import { IVSChatLoggingConfigurationResource, IVSChatRoomResource } from './ivsChat';
import { KafkaConnectConnectorResource } from './kafkaConnect';
import { KendraDataSourceResource, KendraFaqResource, KendraKendraIndexResource } from './kendra';
import { KendraRankingExecutionPlanResource } from './kendraRanking';
import { KinesisStreamConsumerResource, KinesisStreamResource } from './kinesis';
import {
  KinesisAnalyticsApplicationOutputResource,
  KinesisAnalyticsApplicationReferenceDataSourceResource,
  KinesisAnalyticsApplicationResource,
} from './kinesisAnalytics';
import {
  KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionResource,
  KinesisAnalyticsV2ApplicationOutputResource,
  KinesisAnalyticsV2ApplicationReferenceDataSourceResource,
  KinesisAnalyticsV2ApplicationResource,
} from './kinesisAnalyticsV2';
import { KinesisFirehoseDeliveryStreamResource } from './kinesisFirehose';
import { KinesisVideoSignalingChannelResource, KinesisVideoStreamResource } from './kinesisVideo';
import { KMSAliasResource, KMSKeyResource, KMSReplicaKeyResource } from './kms';
import {
  LakeFormationDataCellsFilterResource,
  LakeFormationDataLakeSettingsResource,
  LakeFormationPermissionsResource,
  LakeFormationPrincipalPermissionsResource,
  LakeFormationResourceResource,
  LakeFormationTagAssociationResource,
  LakeFormationTagResource,
} from './lakeFormation';
import {
  LambdaAliasResource,
  LambdaCodeSigningConfigResource,
  LambdaEventInvokeConfigResource,
  LambdaEventSourceMappingResource,
  LambdaFunctionResource,
  LambdaLayerVersionPermissionResource,
  LambdaLayerVersionResource,
  LambdaPermissionResource,
  LambdaUrlResource,
  LambdaVersionResource,
} from './lambda';
import {
  LexBotAliasResource,
  LexBotResource,
  LexBotVersionResource,
  LexResourcePolicyResource,
} from './lex';
import { LicenseManagerGrantResource, LicenseManagerLicenseResource } from './licenseManager';
import {
  LightsailAlarmResource,
  LightsailBucketResource,
  LightsailCertificateResource,
  LightsailContainerResource,
  LightsailDatabaseResource,
  LightsailDiskResource,
  LightsailDistributionResource,
  LightsailInstanceResource,
  LightsailLoadBalancerResource,
  LightsailLoadBalancerTlsCertificateResource,
  LightsailStaticIpResource,
} from './lightsail';
import {
  LocationGeofenceCollectionResource,
  LocationMapResource,
  LocationPlaceIndexResource,
  LocationRouteCalculatorResource,
  LocationTrackerConsumerResource,
  LocationTrackerResource,
} from './location';
import {
  LogsDestinationResource,
  LogsLogGroupResource,
  LogsLogStreamResource,
  LogsMetricFilterResource,
  LogsQueryDefinitionResource,
  LogsResourcePolicyResource,
  LogsSubscriptionFilterResource,
} from './logs';
import { LookoutEquipmentInferenceSchedulerResource } from './lookoutEquipment';
import {
  LookoutMetricsAlertResource,
  LookoutMetricsAnomalyDetectorResource,
} from './lookoutMetrics';
import { LookoutVisionProjectResource } from './lookoutVision';
import { M2ApplicationResource, M2EnvironmentResource } from './m2';
import {
  MacieAllowListResource,
  MacieCustomDataIdentifierResource,
  MacieFindingsFilterResource,
  MacieSessionResource,
} from './macie';
import {
  ManagedBlockchainAccessorResource,
  ManagedBlockchainMemberResource,
  ManagedBlockchainNodeResource,
} from './managedBlockchain';
import {
  MediaConnectFlowEntitlementResource,
  MediaConnectFlowOutputResource,
  MediaConnectFlowResource,
  MediaConnectFlowSourceResource,
  MediaConnectFlowVpcInterfaceResource,
} from './mediaConnect';
import {
  MediaConvertJobTemplateResource,
  MediaConvertPresetResource,
  MediaConvertQueueResource,
} from './mediaConvert';
import {
  MediaLiveChannelResource,
  MediaLiveInputResource,
  MediaLiveInputSecurityGroupResource,
} from './mediaLive';
import {
  MediaPackageAssetResource,
  MediaPackageChannelResource,
  MediaPackageOriginEndpointResource,
  MediaPackagePackagingConfigurationResource,
  MediaPackagePackagingGroupResource,
} from './mediaPackage';
import { MediaStoreContainerResource } from './mediaStore';
import { MediaTailorPlaybackConfigurationResource } from './mediaTailor';
import {
  MemoryDBACLResource,
  MemoryDBClusterResource,
  MemoryDBParameterGroupResource,
  MemoryDBSubnetGroupResource,
  MemoryDBUserResource,
} from './memoryDb';
import {
  MSKBatchScramSecretResource,
  MSKClusterResource,
  MSKConfigurationResource,
  MSKServerlessClusterResource,
} from './msk';
import { MWAAEnvironmentResource } from './mwaa';
import {
  NeptuneDBClusterParameterGroupResource,
  NeptuneDBClusterResource,
  NeptuneDBInstanceResource,
  NeptuneDBParameterGroupResource,
  NeptuneDBSubnetGroupResource,
} from './neptune';
import {
  NetworkFirewallFirewallPolicyResource,
  NetworkFirewallFirewallResource,
  NetworkFirewallLoggingConfigurationResource,
  NetworkFirewallRuleGroupResource,
} from './networkFirewall';
import {
  NetworkManagerConnectAttachmentResource,
  NetworkManagerConnectPeerResource,
  NetworkManagerCoreNetworkResource,
  NetworkManagerCustomerGatewayAssociationResource,
  NetworkManagerDeviceResource,
  NetworkManagerGlobalNetworkResource,
  NetworkManagerLinkAssociationResource,
  NetworkManagerLinkResource,
  NetworkManagerSiteResource,
  NetworkManagerSiteToSiteVpnAttachmentResource,
  NetworkManagerTransitGatewayPeeringResource,
  NetworkManagerTransitGatewayRegistrationResource,
  NetworkManagerTransitGatewayRouteTableAttachmentResource,
  NetworkManagerVpcAttachmentResource,
} from './networkManager';
import {
  NimbleStudioLaunchProfileResource,
  NimbleStudioStreamingImageResource,
  NimbleStudioStudioComponentResource,
  NimbleStudioStudioResource,
} from './nimbleStudio';
import { OamLinkResource, OamSinkResource } from './oam';
import {
  OmicsAnnotationStoreResource,
  OmicsReferenceStoreResource,
  OmicsRunGroupResource,
  OmicsSequenceStoreResource,
  OmicsVariantStoreResource,
  OmicsWorkflowResource,
} from './omics';
import {
  OpenSearchServerlessAccessPolicyResource,
  OpenSearchServerlessCollectionResource,
  OpenSearchServerlessSecurityConfigResource,
  OpenSearchServerlessSecurityPolicyResource,
  OpenSearchServerlessVpcEndpointResource,
} from './openSearchServerless';
import { OpenSearchServiceDomainResource } from './openSearchService';
import {
  OpsWorksAppResource,
  OpsWorksElasticLoadBalancerAttachmentResource,
  OpsWorksInstanceResource,
  OpsWorksLayerResource,
  OpsWorksStackResource,
  OpsWorksUserProfileResource,
  OpsWorksVolumeResource,
} from './opsWorks';
import { OpsWorksCMServerResource } from './opsWorksCm';
import {
  OrganizationsAccountResource,
  OrganizationsOrganizationalUnitResource,
  OrganizationsPolicyResource,
  OrganizationsResourcePolicyResource,
} from './organizations';
import {
  PanoramaApplicationInstanceResource,
  PanoramaPackageResource,
  PanoramaPackageVersionResource,
} from './panorama';
import {
  PersonalizeDatasetGroupResource,
  PersonalizeDatasetResource,
  PersonalizeSchemaResource,
  PersonalizeSolutionResource,
} from './personalize';
import {
  PinpointADMChannelResource,
  PinpointAPNSChannelResource,
  PinpointAPNSSandboxChannelResource,
  PinpointAPNSVoipChannelResource,
  PinpointAPNSVoipSandboxChannelResource,
  PinpointAppResource,
  PinpointApplicationSettingsResource,
  PinpointBaiduChannelResource,
  PinpointCampaignResource,
  PinpointEmailChannelResource,
  PinpointEmailTemplateResource,
  PinpointEventStreamResource,
  PinpointGCMChannelResource,
  PinpointInAppTemplateResource,
  PinpointPushTemplateResource,
  PinpointSMSChannelResource,
  PinpointSegmentResource,
  PinpointSmsTemplateResource,
  PinpointVoiceChannelResource,
} from './pinpoint';
import {
  PinpointEmailConfigurationSetEventDestinationResource,
  PinpointEmailConfigurationSetResource,
  PinpointEmailDedicatedIpPoolResource,
  PinpointEmailIdentityResource,
} from './pinpointEmail';
import { PipesPipeResource } from './pipes';
import { QLDBLedgerResource, QLDBStreamResource } from './qldb';
import {
  QuickSightAnalysisResource,
  QuickSightDashboardResource,
  QuickSightDataSetResource,
  QuickSightDataSourceResource,
  QuickSightRefreshScheduleResource,
  QuickSightTemplateResource,
  QuickSightThemeResource,
} from './quickSight';
import { RAMResourceShareResource } from './ram';
import {
  RDSDBClusterParameterGroupResource,
  RDSDBClusterResource,
  RDSDBInstanceResource,
  RDSDBParameterGroupResource,
  RDSDBProxyEndpointResource,
  RDSDBProxyResource,
  RDSDBProxyTargetGroupResource,
  RDSDBSecurityGroupIngressResource,
  RDSDBSecurityGroupResource,
  RDSDBSubnetGroupResource,
  RDSEventSubscriptionResource,
  RDSGlobalClusterResource,
  RDSOptionGroupResource,
} from './rds';
import {
  RedshiftClusterParameterGroupResource,
  RedshiftClusterResource,
  RedshiftClusterSecurityGroupIngressResource,
  RedshiftClusterSecurityGroupResource,
  RedshiftClusterSubnetGroupResource,
  RedshiftEndpointAccessResource,
  RedshiftEndpointAuthorizationResource,
  RedshiftEventSubscriptionResource,
  RedshiftScheduledActionResource,
} from './redshift';
import {
  RedshiftServerlessNamespaceResource,
  RedshiftServerlessWorkgroupResource,
} from './redshiftServerless';
import {
  RefactorSpacesApplicationResource,
  RefactorSpacesEnvironmentResource,
  RefactorSpacesRouteResource,
  RefactorSpacesServiceResource,
} from './refactorSpaces';
import {
  RekognitionCollectionResource,
  RekognitionProjectResource,
  RekognitionStreamProcessorResource,
} from './rekognition';
import { ResilienceHubAppResource, ResilienceHubResiliencyPolicyResource } from './resilienceHub';
import {
  ResourceExplorer2DefaultViewAssociationResource,
  ResourceExplorer2ResourceExplorer2IndexResource,
  ResourceExplorer2ViewResource,
} from './resourceExplorer2';
import { ResourceGroupsGroupResource } from './resourceGroups';
import {
  RoboMakerFleetResource,
  RoboMakerRobotApplicationResource,
  RoboMakerRobotApplicationVersionResource,
  RoboMakerRobotResource,
  RoboMakerSimulationApplicationResource,
  RoboMakerSimulationApplicationVersionResource,
} from './roboMaker';
import {
  RolesAnywhereCRLResource,
  RolesAnywhereProfileResource,
  RolesAnywhereTrustAnchorResource,
} from './rolesAnywhere';
import {
  Route53CidrCollectionResource,
  Route53DNSSECResource,
  Route53HealthCheckResource,
  Route53HostedZoneResource,
  Route53KeySigningKeyResource,
  Route53RecordSetGroupResource,
  Route53RecordSetResource,
} from './route53';
import {
  Route53RecoveryControlClusterResource,
  Route53RecoveryControlControlPanelResource,
  Route53RecoveryControlRoutingControlResource,
  Route53RecoveryControlSafetyRuleResource,
} from './route53RecoveryControl';
import {
  Route53RecoveryReadinessCellResource,
  Route53RecoveryReadinessReadinessCheckResource,
  Route53RecoveryReadinessRecoveryGroupResource,
  Route53RecoveryReadinessResourceSetResource,
} from './route53RecoveryReadiness';
import {
  Route53ResolverFirewallDomainListResource,
  Route53ResolverFirewallRuleGroupAssociationResource,
  Route53ResolverFirewallRuleGroupResource,
  Route53ResolverResolverConfigResource,
  Route53ResolverResolverDNSSECConfigResource,
  Route53ResolverResolverEndpointResource,
  Route53ResolverResolverQueryLoggingConfigAssociationResource,
  Route53ResolverResolverQueryLoggingConfigResource,
  Route53ResolverResolverRuleAssociationResource,
  Route53ResolverResolverRuleResource,
} from './route53Resolver';
import { RUMAppMonitorResource } from './rum';
import {
  S3AccessPointResource,
  S3BucketPolicyResource,
  S3BucketResource,
  S3MultiRegionAccessPointPolicyResource,
  S3MultiRegionAccessPointResource,
  S3StorageLensResource,
} from './s3';
import {
  S3ObjectLambdaAccessPointPolicyResource,
  S3ObjectLambdaAccessPointResource,
} from './s3ObjectLambda';
import {
  S3OutpostsAccessPointResource,
  S3OutpostsBucketPolicyResource,
  S3OutpostsBucketResource,
  S3OutpostsEndpointResource,
} from './s3Outposts';
import {
  SageMakerAppImageConfigResource,
  SageMakerAppResource,
  SageMakerCodeRepositoryResource,
  SageMakerDataQualityJobDefinitionResource,
  SageMakerDeviceFleetResource,
  SageMakerDeviceResource,
  SageMakerDomainResource,
  SageMakerEndpointConfigResource,
  SageMakerEndpointResource,
  SageMakerFeatureGroupResource,
  SageMakerImageResource,
  SageMakerImageVersionResource,
  SageMakerInferenceExperimentResource,
  SageMakerModelBiasJobDefinitionResource,
  SageMakerModelCardResource,
  SageMakerModelExplainabilityJobDefinitionResource,
  SageMakerModelPackageGroupResource,
  SageMakerModelPackageResource,
  SageMakerModelQualityJobDefinitionResource,
  SageMakerModelResource,
  SageMakerMonitoringScheduleResource,
  SageMakerNotebookInstanceLifecycleConfigResource,
  SageMakerNotebookInstanceResource,
  SageMakerPipelineResource,
  SageMakerProjectResource,
  SageMakerSpaceResource,
  SageMakerUserProfileResource,
  SageMakerWorkteamResource,
} from './sageMaker';
import { SchedulerScheduleGroupResource, SchedulerScheduleResource } from './scheduler';
import { SDBDomainResource } from './sdb';
import {
  SecretsManagerResourcePolicyResource,
  SecretsManagerRotationScheduleResource,
  SecretsManagerSecretResource,
  SecretsManagerSecretTargetAttachmentResource,
} from './secretsManager';
import { SecurityHubHubResource } from './securityHub';
import {
  ServiceCatalogAcceptedPortfolioShareResource,
  ServiceCatalogCloudFormationProductResource,
  ServiceCatalogCloudFormationProvisionedProductResource,
  ServiceCatalogLaunchNotificationConstraintResource,
  ServiceCatalogLaunchRoleConstraintResource,
  ServiceCatalogLaunchTemplateConstraintResource,
  ServiceCatalogPortfolioPrincipalAssociationResource,
  ServiceCatalogPortfolioProductAssociationResource,
  ServiceCatalogPortfolioResource,
  ServiceCatalogPortfolioShareResource,
  ServiceCatalogResourceUpdateConstraintResource,
  ServiceCatalogServiceActionAssociationResource,
  ServiceCatalogServiceActionResource,
  ServiceCatalogStackSetConstraintResource,
  ServiceCatalogTagOptionAssociationResource,
  ServiceCatalogTagOptionResource,
} from './serviceCatalog';
import {
  ServiceCatalogAppRegistryApplicationResource,
  ServiceCatalogAppRegistryAttributeGroupAssociationResource,
  ServiceCatalogAppRegistryAttributeGroupResource,
  ServiceCatalogAppRegistryResourceAssociationResource,
} from './serviceCatalogAppRegistry';
import {
  ServiceDiscoveryHttpNamespaceResource,
  ServiceDiscoveryInstanceResource,
  ServiceDiscoveryPrivateDnsNamespaceResource,
  ServiceDiscoveryPublicDnsNamespaceResource,
  ServiceDiscoveryServiceResource,
} from './serviceDiscovery';
import {
  SESConfigurationSetEventDestinationResource,
  SESConfigurationSetResource,
  SESContactListResource,
  SESDedicatedIpPoolResource,
  SESEmailIdentityResource,
  SESReceiptFilterResource,
  SESReceiptRuleResource,
  SESReceiptRuleSetResource,
  SESTemplateResource,
  SESVdmAttributesResource,
} from './ses';
import { SignerProfilePermissionResource, SignerSigningProfileResource } from './signer';
import { SimSpaceWeaverSimulationResource } from './simSpaceWeaver';
import { SNSSubscriptionResource, SNSTopicPolicyResource, SNSTopicResource } from './sns';
import { SQSQueuePolicyResource, SQSQueueResource } from './sqs';
import {
  SSMAssociationResource,
  SSMDocumentResource,
  SSMMaintenanceWindowResource,
  SSMMaintenanceWindowTargetResource,
  SSMMaintenanceWindowTaskResource,
  SSMParameterResource,
  SSMPatchBaselineResource,
  SSMResourceDataSyncResource,
  SSMResourcePolicyResource,
} from './ssm';
import {
  SSMContactsContactChannelResource,
  SSMContactsContactResource,
  SSMContactsPlanResource,
  SSMContactsRotationResource,
} from './ssmContacts';
import {
  SSMIncidentsReplicationSetResource,
  SSMIncidentsResponsePlanResource,
} from './ssmIncidents';
import {
  SSOAssignmentResource,
  SSOInstanceAccessControlAttributeConfigurationResource,
  SSOPermissionSetResource,
} from './sso';
import { StepFunctionsActivityResource, StepFunctionsStateMachineResource } from './stepFunctions';
import {
  SupportAppAccountAliasResource,
  SupportAppSlackChannelConfigurationResource,
  SupportAppSlackWorkspaceConfigurationResource,
} from './supportApp';
import { SyntheticsCanaryResource, SyntheticsGroupResource } from './synthetics';
import { SystemsManagerSAPApplicationResource } from './systemsManagerSap';
import {
  TimestreamDatabaseResource,
  TimestreamScheduledQueryResource,
  TimestreamTableResource,
} from './timestream';
import {
  TransferAgreementResource,
  TransferCertificateResource,
  TransferConnectorResource,
  TransferProfileResource,
  TransferServerResource,
  TransferUserResource,
  TransferWorkflowResource,
} from './transfer';
import { VoiceIDDomainResource } from './voiceId';
import {
  VpcLatticeAccessLogSubscriptionResource,
  VpcLatticeAuthPolicyResource,
  VpcLatticeListenerResource,
  VpcLatticeResourcePolicyResource,
  VpcLatticeRuleResource,
  VpcLatticeServiceNetworkResource,
  VpcLatticeServiceNetworkServiceAssociationResource,
  VpcLatticeServiceNetworkVpcAssociationResource,
  VpcLatticeServiceResource,
  VpcLatticeTargetGroupResource,
} from './vpcLattice';
import {
  WAFv2IPSetResource,
  WAFv2LoggingConfigurationResource,
  WAFv2RegexPatternSetResource,
  WAFv2RuleGroupResource,
  WAFv2WebACLAssociationResource,
  WAFv2WebACLResource,
} from './waFv2';
import {
  WAFByteMatchSetResource,
  WAFIPSetResource,
  WAFRuleResource,
  WAFSizeConstraintSetResource,
  WAFSqlInjectionMatchSetResource,
  WAFWebACLResource,
  WAFXssMatchSetResource,
} from './waf';
import {
  WAFRegionalByteMatchSetResource,
  WAFRegionalGeoMatchSetResource,
  WAFRegionalIPSetResource,
  WAFRegionalRateBasedRuleResource,
  WAFRegionalRegexPatternSetResource,
  WAFRegionalRuleResource,
  WAFRegionalSizeConstraintSetResource,
  WAFRegionalSqlInjectionMatchSetResource,
  WAFRegionalWebACLAssociationResource,
  WAFRegionalWebACLResource,
  WAFRegionalXssMatchSetResource,
} from './wafRegional';
import {
  WisdomAssistantAssociationResource,
  WisdomAssistantResource,
  WisdomKnowledgeBaseResource,
} from './wisdom';
import { WorkSpacesConnectionAliasResource, WorkSpacesWorkspaceResource } from './workSpaces';
import { XRayGroupResource, XRayResourcePolicyResource, XRaySamplingRuleResource } from './xRay';

export * from './xRay';
export * from './ses';
export * from './acmpca';
export * from './serviceCatalog';
export * from './waf';
export * from './iam';
export * from './backup';
export * from './appIntegrations';
export * from './rekognition';
export * from './s3';
export * from './route53Resolver';
export * from './ec2';
export * from './elasticsearch';
export * from './ioTSiteWise';
export * from './devOpsGuru';
export * from './lookoutMetrics';
export * from './wafRegional';
export * from './kinesis';
export * from './amplifyUiBuilder';
export * from './ram';
export * from './redshift';
export * from './sageMaker';
export * from './appRunner';
export * from './appSync';
export * from './refactorSpaces';
export * from './dataSync';
export * from './pinpoint';
export * from './route53';
export * from './managedBlockchain';
export * from './timestream';
export * from './ecs';
export * from './events';
export * from './networkManager';
export * from './kinesisAnalytics';
export * from './cloudFormation';
export * from './cognito';
export * from './appStream';
export * from './greengrass';
export * from './cloudFront';
export * from './lakeFormation';
export * from './waFv2';
export * from './openSearchServerless';
export * from './sns';
export * from './quickSight';
export * from './appMesh';
export * from './eks';
export * from './ce';
export * from './transfer';
export * from './connect';
export * from './ioT1Click';
export * from './iot';
export * from './mediaConvert';
export * from './apiGateway';
export * from './lambda';
export * from './vpcLattice';
export * from './rds';
export * from './memoryDb';
export * from './greengrassV2';
export * from './ioTFleetHub';
export * from './appConfig';
export * from './mwaa';
export * from './oam';
export * from './guardDuty';
export * from './logs';
export * from './lightsail';
export * from './macie';
export * from './chatbot';
export * from './secretsManager';
export * from './scheduler';
export * from './elasticLoadBalancingV2';
export * from './codeBuild';
export * from './dms';
export * from './grafana';
export * from './stepFunctions';
export * from './codeDeploy';
export * from './customerProfiles';
export * from './location';
export * from './dax';
export * from './elastiCache';
export * from './emr';
export * from './codePipeline';
export * from './mediaConnect';
export * from './ssmContacts';
export * from './ioTAnalytics';
export * from './amplify';
export * from './cloudWatch';
export * from './cloud9';
export * from './cloudTrail';
export * from './lex';
export * from './ivsChat';
export * from './ioTWireless';
export * from './docDb';
export * from './ssm';
export * from './kinesisAnalyticsV2';
export * from './serviceDiscovery';
export * from './roboMaker';
export * from './autoScaling';
export * from './appFlow';
export * from './ssmIncidents';
export * from './fSx';
export * from './kms';
export * from './detective';
export * from './synthetics';
export * from './dataBrew';
export * from './apiGatewayV2';
export * from './ecr';
export * from './evidently';
export * from './glue';
export * from './opsWorks';
export * from './neptune';
export * from './mediaTailor';
export * from './resourceExplorer2';
export * from './rolesAnywhere';
export * from './resilienceHub';
export * from './mediaPackage';
export * from './networkFirewall';
export * from './kendra';
export * from './codeGuruReviewer';
export * from './elasticBeanstalk';
export * from './workSpaces';
export * from './ioTCoreDeviceAdvisor';
export * from './imageBuilder';
export * from './organizations';
export * from './ioTThingsGraph';
export * from './autoScalingPlans';
export * from './m2';
export * from './identityStore';
export * from './sso';
export * from './gameLift';
export * from './aps';
export * from './directoryService';
export * from './config';
export * from './personalize';
export * from './licenseManager';
export * from './inspector';
export * from './emrContainers';
export * from './rum';
export * from './opsWorksCm';
export * from './batch';
export * from './controlTower';
export * from './kinesisVideo';
export * from './s3Outposts';
export * from './dataPipeline';
export * from './mediaLive';
export * from './codeArtifact';
export * from './wisdom';
export * from './codeGuruProfiler';
export * from './athena';
export * from './internetMonitor';
export * from './sqs';
export * from './ivs';
export * from './codeCommit';
export * from './msk';
export * from './mediaStore';
export * from './lookoutVision';
export * from './eventSchemas';
export * from './kendraRanking';
export * from './docDbElastic';
export * from './fms';
export * from './kinesisFirehose';
export * from './applicationAutoScaling';
export * from './forecast';
export * from './dynamoDb';
export * from './certificateManager';
export * from './codeStar';
export * from './cassandra';
export * from './globalAccelerator';
export * from './accessAnalyzer';
export * from './codeStarConnections';
export * from './budgets';
export * from './efs';
export * from './nimbleStudio';
export * from './applicationInsights';
export * from './qldb';
export * from './elasticLoadBalancing';
export * from './amazonMq';
export * from './s3ObjectLambda';
export * from './serviceCatalogAppRegistry';
export * from './systemsManagerSap';
export * from './fis';
export * from './auditManager';
export * from './pipes';
export * from './dlm';
export * from './sdb';
export * from './ioTEvents';
export * from './redshiftServerless';
export * from './codeStarNotifications';
export * from './emrServerless';
export * from './ask';
export * from './securityHub';
export * from './comprehend';
export * from './signer';
export * from './inspectorV2';
export * from './resourceGroups';
export * from './voiceId';
export * from './kafkaConnect';
export * from './openSearchService';
export * from './lookoutEquipment';
export * from './groundStation';
export * from './pinpointEmail';
export * from './healthLake';
export * from './fraudDetector';
export * from './ioTTwinMaker';
export * from './omics';
export * from './panorama';
export * from './simSpaceWeaver';
export * from './connectCampaigns';
export * from './finSpace';
export * from './ioTFleetWise';
export * from './supportApp';
export * from './billingConductor';
export * from './route53RecoveryReadiness';
export * from './route53RecoveryControl';
export * from './cur';
export * from './deviceFarm';

export type Resource =
  | XRayGroupResource
  | XRayResourcePolicyResource
  | XRaySamplingRuleResource
  | SESContactListResource
  | SESConfigurationSetEventDestinationResource
  | SESTemplateResource
  | SESConfigurationSetResource
  | SESDedicatedIpPoolResource
  | SESVdmAttributesResource
  | SESEmailIdentityResource
  | SESReceiptRuleSetResource
  | SESReceiptFilterResource
  | SESReceiptRuleResource
  | ACMPCACertificateAuthorityResource
  | ACMPCACertificateAuthorityActivationResource
  | ACMPCACertificateResource
  | ACMPCAPermissionResource
  | ServiceCatalogPortfolioShareResource
  | ServiceCatalogResourceUpdateConstraintResource
  | ServiceCatalogTagOptionResource
  | ServiceCatalogCloudFormationProductResource
  | ServiceCatalogPortfolioProductAssociationResource
  | ServiceCatalogAcceptedPortfolioShareResource
  | ServiceCatalogServiceActionResource
  | ServiceCatalogLaunchTemplateConstraintResource
  | ServiceCatalogCloudFormationProvisionedProductResource
  | ServiceCatalogPortfolioResource
  | ServiceCatalogLaunchNotificationConstraintResource
  | ServiceCatalogServiceActionAssociationResource
  | ServiceCatalogStackSetConstraintResource
  | ServiceCatalogTagOptionAssociationResource
  | ServiceCatalogPortfolioPrincipalAssociationResource
  | ServiceCatalogLaunchRoleConstraintResource
  | WAFIPSetResource
  | WAFSizeConstraintSetResource
  | WAFXssMatchSetResource
  | WAFRuleResource
  | WAFSqlInjectionMatchSetResource
  | WAFWebACLResource
  | WAFByteMatchSetResource
  | IAMGroupResource
  | IAMUserResource
  | IAMVirtualMFADeviceResource
  | IAMRoleResource
  | IAMSAMLProviderResource
  | IAMServerCertificateResource
  | IAMPolicyResource
  | IAMServiceLinkedRoleResource
  | IAMAccessKeyResource
  | IAMOIDCProviderResource
  | IAMUserToGroupAdditionResource
  | IAMInstanceProfileResource
  | IAMManagedPolicyResource
  | BackupBackupPlanResource
  | BackupFrameworkResource
  | BackupBackupVaultResource
  | BackupReportPlanResource
  | BackupBackupSelectionResource
  | AppIntegrationsEventIntegrationResource
  | AppIntegrationsDataIntegrationResource
  | RekognitionCollectionResource
  | RekognitionProjectResource
  | RekognitionStreamProcessorResource
  | S3MultiRegionAccessPointResource
  | S3StorageLensResource
  | S3BucketResource
  | S3BucketPolicyResource
  | S3AccessPointResource
  | S3MultiRegionAccessPointPolicyResource
  | Route53ResolverResolverQueryLoggingConfigResource
  | Route53ResolverFirewallRuleGroupAssociationResource
  | Route53ResolverResolverQueryLoggingConfigAssociationResource
  | Route53ResolverResolverConfigResource
  | Route53ResolverResolverDNSSECConfigResource
  | Route53ResolverFirewallDomainListResource
  | Route53ResolverResolverRuleResource
  | Route53ResolverFirewallRuleGroupResource
  | Route53ResolverResolverRuleAssociationResource
  | Route53ResolverResolverEndpointResource
  | EC2VPCPeeringConnectionResource
  | EC2CapacityReservationResource
  | EC2VPCEndpointServicePermissionsResource
  | EC2TransitGatewayRouteTableAssociationResource
  | EC2IPAMResource
  | EC2IPAMResourceDiscoveryResource
  | EC2EIPResource
  | EC2SecurityGroupEgressResource
  | EC2TransitGatewayAttachmentResource
  | EC2TransitGatewayMulticastDomainAssociationResource
  | EC2DHCPOptionsResource
  | EC2EgressOnlyInternetGatewayResource
  | EC2NetworkInterfaceAttachmentResource
  | EC2CustomerGatewayResource
  | EC2ClientVpnRouteResource
  | EC2IPAMScopeResource
  | EC2PlacementGroupResource
  | EC2InternetGatewayResource
  | EC2LaunchTemplateResource
  | EC2VPNConnectionRouteResource
  | EC2NetworkInterfacePermissionResource
  | EC2IPAMPoolCidrResource
  | EC2TransitGatewayMulticastGroupMemberResource
  | EC2ClientVpnEndpointResource
  | EC2LocalGatewayRouteTableVPCAssociationResource
  | EC2NetworkInterfaceResource
  | EC2TransitGatewayMulticastGroupSourceResource
  | EC2ClientVpnAuthorizationRuleResource
  | EC2NatGatewayResource
  | EC2TrafficMirrorFilterRuleResource
  | EC2PrefixListResource
  | EC2TransitGatewayMulticastDomainResource
  | EC2NetworkInsightsAnalysisResource
  | EC2NetworkInsightsAccessScopeResource
  | EC2EC2FleetResource
  | EC2VPCDHCPOptionsAssociationResource
  | EC2EnclaveCertificateIamRoleAssociationResource
  | EC2TransitGatewayConnectResource
  | EC2TrafficMirrorTargetResource
  | EC2RouteTableResource
  | EC2TransitGatewayResource
  | EC2CapacityReservationFleetResource
  | EC2NetworkPerformanceMetricSubscriptionResource
  | EC2VolumeResource
  | EC2LocalGatewayRouteResource
  | EC2TransitGatewayVpcAttachmentResource
  | EC2VPCEndpointConnectionNotificationResource
  | EC2IPAMAllocationResource
  | EC2FlowLogResource
  | EC2SubnetResource
  | EC2CarrierGatewayResource
  | EC2InstanceResource
  | EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociationResource
  | EC2IPAMPoolResource
  | EC2LocalGatewayRouteTableResource
  | EC2NetworkInsightsPathResource
  | EC2EIPAssociationResource
  | EC2VPNGatewayResource
  | EC2VPNConnectionResource
  | EC2TransitGatewayRouteTableResource
  | EC2VPCEndpointServiceResource
  | EC2NetworkInsightsAccessScopeAnalysisResource
  | EC2GatewayRouteTableAssociationResource
  | EC2NetworkAclEntryResource
  | EC2SpotFleetResource
  | EC2TrafficMirrorFilterResource
  | EC2SecurityGroupIngressResource
  | EC2SubnetRouteTableAssociationResource
  | EC2RouteResource
  | EC2TransitGatewayRouteTablePropagationResource
  | EC2SubnetNetworkAclAssociationResource
  | EC2TrafficMirrorSessionResource
  | EC2SubnetCidrBlockResource
  | EC2KeyPairResource
  | EC2SecurityGroupResource
  | EC2VPCResource
  | EC2TransitGatewayRouteResource
  | EC2NetworkAclResource
  | EC2VPNGatewayRoutePropagationResource
  | EC2ClientVpnTargetNetworkAssociationResource
  | EC2TransitGatewayPeeringAttachmentResource
  | EC2VolumeAttachmentResource
  | EC2HostResource
  | EC2VPCEndpointResource
  | EC2VPCGatewayAttachmentResource
  | EC2VPCCidrBlockResource
  | EC2IPAMResourceDiscoveryAssociationResource
  | ElasticsearchDomainResource
  | IoTSiteWiseAssetModelResource
  | IoTSiteWiseAssetResource
  | IoTSiteWiseDashboardResource
  | IoTSiteWisePortalResource
  | IoTSiteWiseAccessPolicyResource
  | IoTSiteWiseProjectResource
  | IoTSiteWiseGatewayResource
  | DevOpsGuruLogAnomalyDetectionIntegrationResource
  | DevOpsGuruNotificationChannelResource
  | DevOpsGuruResourceCollectionResource
  | LookoutMetricsAlertResource
  | LookoutMetricsAnomalyDetectorResource
  | WAFRegionalSqlInjectionMatchSetResource
  | WAFRegionalRegexPatternSetResource
  | WAFRegionalWebACLAssociationResource
  | WAFRegionalSizeConstraintSetResource
  | WAFRegionalXssMatchSetResource
  | WAFRegionalRateBasedRuleResource
  | WAFRegionalGeoMatchSetResource
  | WAFRegionalWebACLResource
  | WAFRegionalIPSetResource
  | WAFRegionalByteMatchSetResource
  | WAFRegionalRuleResource
  | KinesisStreamResource
  | KinesisStreamConsumerResource
  | AmplifyUIBuilderFormResource
  | AmplifyUIBuilderComponentResource
  | AmplifyUIBuilderThemeResource
  | RAMResourceShareResource
  | RedshiftEndpointAccessResource
  | RedshiftClusterResource
  | RedshiftScheduledActionResource
  | RedshiftClusterParameterGroupResource
  | RedshiftClusterSubnetGroupResource
  | RedshiftClusterSecurityGroupResource
  | RedshiftEventSubscriptionResource
  | RedshiftClusterSecurityGroupIngressResource
  | RedshiftEndpointAuthorizationResource
  | SageMakerImageVersionResource
  | SageMakerFeatureGroupResource
  | SageMakerDataQualityJobDefinitionResource
  | SageMakerSpaceResource
  | SageMakerMonitoringScheduleResource
  | SageMakerModelPackageGroupResource
  | SageMakerModelBiasJobDefinitionResource
  | SageMakerModelQualityJobDefinitionResource
  | SageMakerNotebookInstanceResource
  | SageMakerAppImageConfigResource
  | SageMakerPipelineResource
  | SageMakerWorkteamResource
  | SageMakerNotebookInstanceLifecycleConfigResource
  | SageMakerUserProfileResource
  | SageMakerModelExplainabilityJobDefinitionResource
  | SageMakerEndpointConfigResource
  | SageMakerEndpointResource
  | SageMakerModelPackageResource
  | SageMakerCodeRepositoryResource
  | SageMakerModelCardResource
  | SageMakerModelResource
  | SageMakerDeviceFleetResource
  | SageMakerAppResource
  | SageMakerDomainResource
  | SageMakerProjectResource
  | SageMakerInferenceExperimentResource
  | SageMakerImageResource
  | SageMakerDeviceResource
  | AppRunnerVpcConnectorResource
  | AppRunnerObservabilityConfigurationResource
  | AppRunnerVpcIngressConnectionResource
  | AppRunnerServiceResource
  | AppSyncResolverResource
  | AppSyncGraphQLSchemaResource
  | AppSyncGraphQLApiResource
  | AppSyncApiKeyResource
  | AppSyncDomainNameApiAssociationResource
  | AppSyncFunctionConfigurationResource
  | AppSyncApiCacheResource
  | AppSyncDomainNameResource
  | AppSyncDataSourceResource
  | RefactorSpacesEnvironmentResource
  | RefactorSpacesServiceResource
  | RefactorSpacesRouteResource
  | RefactorSpacesApplicationResource
  | DataSyncLocationNFSResource
  | DataSyncLocationHDFSResource
  | DataSyncLocationFSxONTAPResource
  | DataSyncAgentResource
  | DataSyncLocationEFSResource
  | DataSyncLocationFSxLustreResource
  | DataSyncLocationFSxWindowsResource
  | DataSyncLocationS3Resource
  | DataSyncTaskResource
  | DataSyncLocationObjectStorageResource
  | DataSyncLocationFSxOpenZFSResource
  | DataSyncLocationSMBResource
  | PinpointVoiceChannelResource
  | PinpointEventStreamResource
  | PinpointEmailTemplateResource
  | PinpointBaiduChannelResource
  | PinpointGCMChannelResource
  | PinpointAPNSChannelResource
  | PinpointInAppTemplateResource
  | PinpointCampaignResource
  | PinpointAPNSVoipSandboxChannelResource
  | PinpointAPNSVoipChannelResource
  | PinpointEmailChannelResource
  | PinpointSMSChannelResource
  | PinpointSmsTemplateResource
  | PinpointSegmentResource
  | PinpointAPNSSandboxChannelResource
  | PinpointADMChannelResource
  | PinpointApplicationSettingsResource
  | PinpointPushTemplateResource
  | PinpointAppResource
  | Route53RecordSetResource
  | Route53DNSSECResource
  | Route53HostedZoneResource
  | Route53RecordSetGroupResource
  | Route53CidrCollectionResource
  | Route53HealthCheckResource
  | Route53KeySigningKeyResource
  | ManagedBlockchainMemberResource
  | ManagedBlockchainNodeResource
  | ManagedBlockchainAccessorResource
  | TimestreamScheduledQueryResource
  | TimestreamDatabaseResource
  | TimestreamTableResource
  | ECSClusterResource
  | ECSServiceResource
  | ECSClusterCapacityProviderAssociationsResource
  | ECSTaskDefinitionResource
  | ECSCapacityProviderResource
  | ECSPrimaryTaskSetResource
  | ECSTaskSetResource
  | EventsEndpointResource
  | EventsApiDestinationResource
  | EventsRuleResource
  | EventsArchiveResource
  | EventsConnectionResource
  | EventsEventBusPolicyResource
  | EventsEventBusResource
  | NetworkManagerLinkResource
  | NetworkManagerCustomerGatewayAssociationResource
  | NetworkManagerConnectAttachmentResource
  | NetworkManagerTransitGatewayRouteTableAttachmentResource
  | NetworkManagerTransitGatewayPeeringResource
  | NetworkManagerLinkAssociationResource
  | NetworkManagerConnectPeerResource
  | NetworkManagerSiteToSiteVpnAttachmentResource
  | NetworkManagerDeviceResource
  | NetworkManagerVpcAttachmentResource
  | NetworkManagerCoreNetworkResource
  | NetworkManagerGlobalNetworkResource
  | NetworkManagerTransitGatewayRegistrationResource
  | NetworkManagerSiteResource
  | KinesisAnalyticsApplicationOutputResource
  | KinesisAnalyticsApplicationResource
  | KinesisAnalyticsApplicationReferenceDataSourceResource
  | CloudFormationStackSetResource
  | CloudFormationHookTypeConfigResource
  | CloudFormationResourceDefaultVersionResource
  | CloudFormationCustomResourceResource
  | CloudFormationTypeActivationResource
  | CloudFormationPublicTypeVersionResource
  | CloudFormationHookVersionResource
  | CloudFormationResourceVersionResource
  | CloudFormationMacroResource
  | CloudFormationModuleDefaultVersionResource
  | CloudFormationStackResource
  | CloudFormationPublisherResource
  | CloudFormationWaitConditionResource
  | CloudFormationWaitConditionHandleResource
  | CloudFormationHookDefaultVersionResource
  | CloudFormationModuleVersionResource
  | CognitoUserPoolRiskConfigurationAttachmentResource
  | CognitoUserPoolIdentityProviderResource
  | CognitoIdentityPoolResource
  | CognitoUserPoolResource
  | CognitoUserPoolUserToGroupAttachmentResource
  | CognitoUserPoolUserResource
  | CognitoUserPoolUICustomizationAttachmentResource
  | CognitoUserPoolGroupResource
  | CognitoUserPoolResourceServerResource
  | CognitoUserPoolClientResource
  | CognitoIdentityPoolRoleAttachmentResource
  | CognitoUserPoolDomainResource
  | AppStreamStackResource
  | AppStreamUserResource
  | AppStreamStackUserAssociationResource
  | AppStreamAppBlockResource
  | AppStreamApplicationFleetAssociationResource
  | AppStreamApplicationEntitlementAssociationResource
  | AppStreamApplicationResource
  | AppStreamFleetResource
  | AppStreamImageBuilderResource
  | AppStreamDirectoryConfigResource
  | AppStreamEntitlementResource
  | AppStreamStackFleetAssociationResource
  | GreengrassConnectorDefinitionVersionResource
  | GreengrassLoggerDefinitionVersionResource
  | GreengrassFunctionDefinitionVersionResource
  | GreengrassConnectorDefinitionResource
  | GreengrassFunctionDefinitionResource
  | GreengrassLoggerDefinitionResource
  | GreengrassCoreDefinitionResource
  | GreengrassDeviceDefinitionVersionResource
  | GreengrassResourceDefinitionResource
  | GreengrassDeviceDefinitionResource
  | GreengrassGroupResource
  | GreengrassSubscriptionDefinitionVersionResource
  | GreengrassCoreDefinitionVersionResource
  | GreengrassSubscriptionDefinitionResource
  | GreengrassResourceDefinitionVersionResource
  | GreengrassGroupVersionResource
  | CloudFrontStreamingDistributionResource
  | CloudFrontCachePolicyResource
  | CloudFrontDistributionResource
  | CloudFrontFunctionResource
  | CloudFrontKeyGroupResource
  | CloudFrontOriginAccessControlResource
  | CloudFrontCloudFrontOriginAccessIdentityResource
  | CloudFrontRealtimeLogConfigResource
  | CloudFrontMonitoringSubscriptionResource
  | CloudFrontResponseHeadersPolicyResource
  | CloudFrontOriginRequestPolicyResource
  | CloudFrontPublicKeyResource
  | CloudFrontContinuousDeploymentPolicyResource
  | LakeFormationTagResource
  | LakeFormationResourceResource
  | LakeFormationDataLakeSettingsResource
  | LakeFormationPrincipalPermissionsResource
  | LakeFormationTagAssociationResource
  | LakeFormationPermissionsResource
  | LakeFormationDataCellsFilterResource
  | WAFv2LoggingConfigurationResource
  | WAFv2RegexPatternSetResource
  | WAFv2IPSetResource
  | WAFv2WebACLAssociationResource
  | WAFv2WebACLResource
  | WAFv2RuleGroupResource
  | OpenSearchServerlessAccessPolicyResource
  | OpenSearchServerlessVpcEndpointResource
  | OpenSearchServerlessSecurityConfigResource
  | OpenSearchServerlessSecurityPolicyResource
  | OpenSearchServerlessCollectionResource
  | SNSTopicResource
  | SNSSubscriptionResource
  | SNSTopicPolicyResource
  | QuickSightDashboardResource
  | QuickSightRefreshScheduleResource
  | QuickSightThemeResource
  | QuickSightAnalysisResource
  | QuickSightTemplateResource
  | QuickSightDataSourceResource
  | QuickSightDataSetResource
  | AppMeshRouteResource
  | AppMeshVirtualNodeResource
  | AppMeshVirtualRouterResource
  | AppMeshMeshResource
  | AppMeshGatewayRouteResource
  | AppMeshVirtualGatewayResource
  | AppMeshVirtualServiceResource
  | EKSNodegroupResource
  | EKSClusterResource
  | EKSFargateProfileResource
  | EKSAddonResource
  | EKSIdentityProviderConfigResource
  | CECostCategoryResource
  | CEAnomalyMonitorResource
  | CEAnomalySubscriptionResource
  | TransferProfileResource
  | TransferWorkflowResource
  | TransferConnectorResource
  | TransferCertificateResource
  | TransferServerResource
  | TransferUserResource
  | TransferAgreementResource
  | ConnectInstanceResource
  | ConnectQuickConnectResource
  | ConnectInstanceStorageConfigResource
  | ConnectHoursOfOperationResource
  | ConnectPhoneNumberResource
  | ConnectIntegrationAssociationResource
  | ConnectSecurityKeyResource
  | ConnectContactFlowResource
  | ConnectUserHierarchyGroupResource
  | ConnectApprovedOriginResource
  | ConnectRuleResource
  | ConnectTaskTemplateResource
  | ConnectUserResource
  | ConnectContactFlowModuleResource
  | IoT1ClickProjectResource
  | IoT1ClickPlacementResource
  | IoT1ClickDeviceResource
  | IoTCustomMetricResource
  | IoTMitigationActionResource
  | IoTSecurityProfileResource
  | IoTTopicRuleResource
  | IoTCACertificateResource
  | IoTDomainConfigurationResource
  | IoTAccountAuditConfigurationResource
  | IoTAuthorizerResource
  | IoTDimensionResource
  | IoTThingResource
  | IoTFleetMetricResource
  | IoTThingPrincipalAttachmentResource
  | IoTJobTemplateResource
  | IoTRoleAliasResource
  | IoTProvisioningTemplateResource
  | IoTPolicyResource
  | IoTResourceSpecificLoggingResource
  | IoTScheduledAuditResource
  | IoTPolicyPrincipalAttachmentResource
  | IoTLoggingResource
  | IoTTopicRuleDestinationResource
  | IoTCertificateResource
  | MediaConvertQueueResource
  | MediaConvertJobTemplateResource
  | MediaConvertPresetResource
  | ApiGatewayDomainNameResource
  | ApiGatewayDocumentationPartResource
  | ApiGatewayUsagePlanResource
  | ApiGatewayGatewayResponseResource
  | ApiGatewayUsagePlanKeyResource
  | ApiGatewayRequestValidatorResource
  | ApiGatewayApiKeyResource
  | ApiGatewayResourceResource
  | ApiGatewayAccountResource
  | ApiGatewayMethodResource
  | ApiGatewayDeploymentResource
  | ApiGatewayAuthorizerResource
  | ApiGatewayModelResource
  | ApiGatewayBasePathMappingResource
  | ApiGatewayStageResource
  | ApiGatewayClientCertificateResource
  | ApiGatewayDocumentationVersionResource
  | ApiGatewayRestApiResource
  | ApiGatewayVpcLinkResource
  | LambdaLayerVersionResource
  | LambdaAliasResource
  | LambdaLayerVersionPermissionResource
  | LambdaUrlResource
  | LambdaEventInvokeConfigResource
  | LambdaFunctionResource
  | LambdaPermissionResource
  | LambdaEventSourceMappingResource
  | LambdaVersionResource
  | LambdaCodeSigningConfigResource
  | VpcLatticeServiceNetworkResource
  | VpcLatticeServiceNetworkVpcAssociationResource
  | VpcLatticeAccessLogSubscriptionResource
  | VpcLatticeResourcePolicyResource
  | VpcLatticeAuthPolicyResource
  | VpcLatticeServiceResource
  | VpcLatticeTargetGroupResource
  | VpcLatticeListenerResource
  | VpcLatticeServiceNetworkServiceAssociationResource
  | VpcLatticeRuleResource
  | RDSDBSubnetGroupResource
  | RDSGlobalClusterResource
  | RDSDBSecurityGroupIngressResource
  | RDSDBClusterResource
  | RDSEventSubscriptionResource
  | RDSDBInstanceResource
  | RDSDBSecurityGroupResource
  | RDSDBClusterParameterGroupResource
  | RDSOptionGroupResource
  | RDSDBParameterGroupResource
  | RDSDBProxyResource
  | RDSDBProxyTargetGroupResource
  | RDSDBProxyEndpointResource
  | MemoryDBParameterGroupResource
  | MemoryDBACLResource
  | MemoryDBUserResource
  | MemoryDBSubnetGroupResource
  | MemoryDBClusterResource
  | GreengrassV2DeploymentResource
  | GreengrassV2ComponentVersionResource
  | IoTFleetHubApplicationResource
  | AppConfigExtensionAssociationResource
  | AppConfigEnvironmentResource
  | AppConfigDeploymentStrategyResource
  | AppConfigDeploymentResource
  | AppConfigHostedConfigurationVersionResource
  | AppConfigConfigurationProfileResource
  | AppConfigExtensionResource
  | AppConfigApplicationResource
  | MWAAEnvironmentResource
  | OamSinkResource
  | OamLinkResource
  | GuardDutyThreatIntelSetResource
  | GuardDutyMemberResource
  | GuardDutyMasterResource
  | GuardDutyFilterResource
  | GuardDutyDetectorResource
  | GuardDutyIPSetResource
  | LogsMetricFilterResource
  | LogsDestinationResource
  | LogsLogGroupResource
  | LogsResourcePolicyResource
  | LogsLogStreamResource
  | LogsSubscriptionFilterResource
  | LogsQueryDefinitionResource
  | LightsailDatabaseResource
  | LightsailCertificateResource
  | LightsailLoadBalancerResource
  | LightsailBucketResource
  | LightsailInstanceResource
  | LightsailAlarmResource
  | LightsailLoadBalancerTlsCertificateResource
  | LightsailDiskResource
  | LightsailContainerResource
  | LightsailStaticIpResource
  | LightsailDistributionResource
  | MacieSessionResource
  | MacieAllowListResource
  | MacieFindingsFilterResource
  | MacieCustomDataIdentifierResource
  | ChatbotMicrosoftTeamsChannelConfigurationResource
  | ChatbotSlackChannelConfigurationResource
  | SecretsManagerRotationScheduleResource
  | SecretsManagerSecretResource
  | SecretsManagerResourcePolicyResource
  | SecretsManagerSecretTargetAttachmentResource
  | SchedulerScheduleGroupResource
  | SchedulerScheduleResource
  | ElasticLoadBalancingV2LoadBalancerResource
  | ElasticLoadBalancingV2ListenerRuleResource
  | ElasticLoadBalancingV2TargetGroupResource
  | ElasticLoadBalancingV2ListenerResource
  | ElasticLoadBalancingV2ListenerCertificateResource
  | CodeBuildSourceCredentialResource
  | CodeBuildReportGroupResource
  | CodeBuildProjectResource
  | DMSReplicationSubnetGroupResource
  | DMSEventSubscriptionResource
  | DMSCertificateResource
  | DMSEndpointResource
  | DMSReplicationTaskResource
  | DMSReplicationInstanceResource
  | GrafanaWorkspaceResource
  | StepFunctionsStateMachineResource
  | StepFunctionsActivityResource
  | CodeDeployDeploymentConfigResource
  | CodeDeployApplicationResource
  | CodeDeployDeploymentGroupResource
  | CustomerProfilesIntegrationResource
  | CustomerProfilesObjectTypeResource
  | CustomerProfilesDomainResource
  | LocationTrackerResource
  | LocationGeofenceCollectionResource
  | LocationTrackerConsumerResource
  | LocationRouteCalculatorResource
  | LocationMapResource
  | LocationPlaceIndexResource
  | DAXParameterGroupResource
  | DAXClusterResource
  | DAXSubnetGroupResource
  | ElastiCacheUserGroupResource
  | ElastiCacheSubnetGroupResource
  | ElastiCacheReplicationGroupResource
  | ElastiCacheParameterGroupResource
  | ElastiCacheGlobalReplicationGroupResource
  | ElastiCacheCacheClusterResource
  | ElastiCacheUserResource
  | ElastiCacheSecurityGroupResource
  | ElastiCacheSecurityGroupIngressResource
  | EMRInstanceGroupConfigResource
  | EMRSecurityConfigurationResource
  | EMRClusterResource
  | EMRStudioSessionMappingResource
  | EMRInstanceFleetConfigResource
  | EMRStepResource
  | EMRStudioResource
  | CodePipelinePipelineResource
  | CodePipelineCustomActionTypeResource
  | CodePipelineWebhookResource
  | MediaConnectFlowEntitlementResource
  | MediaConnectFlowSourceResource
  | MediaConnectFlowVpcInterfaceResource
  | MediaConnectFlowOutputResource
  | MediaConnectFlowResource
  | SSMContactsContactResource
  | SSMContactsPlanResource
  | SSMContactsContactChannelResource
  | SSMContactsRotationResource
  | IoTAnalyticsChannelResource
  | IoTAnalyticsDatastoreResource
  | IoTAnalyticsDatasetResource
  | IoTAnalyticsPipelineResource
  | AmplifyAppResource
  | AmplifyDomainResource
  | AmplifyBranchResource
  | CloudWatchAnomalyDetectorResource
  | CloudWatchCompositeAlarmResource
  | CloudWatchInsightRuleResource
  | CloudWatchDashboardResource
  | CloudWatchMetricStreamResource
  | CloudWatchAlarmResource
  | Cloud9EnvironmentEC2Resource
  | CloudTrailResourcePolicyResource
  | CloudTrailChannelResource
  | CloudTrailTrailResource
  | CloudTrailEventDataStoreResource
  | LexBotResource
  | LexBotAliasResource
  | LexResourcePolicyResource
  | LexBotVersionResource
  | IVSChatRoomResource
  | IVSChatLoggingConfigurationResource
  | IoTWirelessServiceProfileResource
  | IoTWirelessWirelessDeviceResource
  | IoTWirelessDeviceProfileResource
  | IoTWirelessMulticastGroupResource
  | IoTWirelessNetworkAnalyzerConfigurationResource
  | IoTWirelessWirelessGatewayResource
  | IoTWirelessFuotaTaskResource
  | IoTWirelessDestinationResource
  | IoTWirelessTaskDefinitionResource
  | IoTWirelessWirelessDeviceImportTaskResource
  | IoTWirelessPartnerAccountResource
  | DocDBDBClusterResource
  | DocDBDBSubnetGroupResource
  | DocDBDBInstanceResource
  | DocDBDBClusterParameterGroupResource
  | SSMPatchBaselineResource
  | SSMMaintenanceWindowTaskResource
  | SSMResourcePolicyResource
  | SSMMaintenanceWindowResource
  | SSMParameterResource
  | SSMResourceDataSyncResource
  | SSMMaintenanceWindowTargetResource
  | SSMDocumentResource
  | SSMAssociationResource
  | KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionResource
  | KinesisAnalyticsV2ApplicationResource
  | KinesisAnalyticsV2ApplicationOutputResource
  | KinesisAnalyticsV2ApplicationReferenceDataSourceResource
  | ServiceDiscoveryServiceResource
  | ServiceDiscoveryPublicDnsNamespaceResource
  | ServiceDiscoveryInstanceResource
  | ServiceDiscoveryHttpNamespaceResource
  | ServiceDiscoveryPrivateDnsNamespaceResource
  | RoboMakerSimulationApplicationVersionResource
  | RoboMakerRobotApplicationResource
  | RoboMakerFleetResource
  | RoboMakerRobotApplicationVersionResource
  | RoboMakerRobotResource
  | RoboMakerSimulationApplicationResource
  | AutoScalingScalingPolicyResource
  | AutoScalingAutoScalingGroupResource
  | AutoScalingScheduledActionResource
  | AutoScalingLaunchConfigurationResource
  | AutoScalingLifecycleHookResource
  | AutoScalingWarmPoolResource
  | AppFlowConnectorResource
  | AppFlowFlowResource
  | AppFlowConnectorProfileResource
  | SSMIncidentsReplicationSetResource
  | SSMIncidentsResponsePlanResource
  | FSxDataRepositoryAssociationResource
  | FSxFileSystemResource
  | FSxVolumeResource
  | FSxStorageVirtualMachineResource
  | FSxSnapshotResource
  | KMSReplicaKeyResource
  | KMSAliasResource
  | KMSKeyResource
  | DetectiveMemberInvitationResource
  | DetectiveGraphResource
  | SyntheticsCanaryResource
  | SyntheticsGroupResource
  | DataBrewRecipeResource
  | DataBrewDatasetResource
  | DataBrewRulesetResource
  | DataBrewProjectResource
  | DataBrewJobResource
  | DataBrewScheduleResource
  | ApiGatewayV2ApiResource
  | ApiGatewayV2RouteResponseResource
  | ApiGatewayV2DomainNameResource
  | ApiGatewayV2IntegrationResource
  | ApiGatewayV2DeploymentResource
  | ApiGatewayV2ModelResource
  | ApiGatewayV2IntegrationResponseResource
  | ApiGatewayV2RouteResource
  | ApiGatewayV2ApiGatewayManagedOverridesResource
  | ApiGatewayV2StageResource
  | ApiGatewayV2VpcLinkResource
  | ApiGatewayV2AuthorizerResource
  | ApiGatewayV2ApiMappingResource
  | ECRRepositoryResource
  | ECRReplicationConfigurationResource
  | ECRRegistryPolicyResource
  | ECRPullThroughCacheRuleResource
  | ECRPublicRepositoryResource
  | EvidentlySegmentResource
  | EvidentlyLaunchResource
  | EvidentlyExperimentResource
  | EvidentlyProjectResource
  | EvidentlyFeatureResource
  | GlueDevEndpointResource
  | GlueSchemaVersionMetadataResource
  | GlueMLTransformResource
  | GlueConnectionResource
  | GluePartitionResource
  | GlueTriggerResource
  | GlueSecurityConfigurationResource
  | GlueSchemaVersionResource
  | GlueDataCatalogEncryptionSettingsResource
  | GlueWorkflowResource
  | GlueJobResource
  | GlueDatabaseResource
  | GlueCrawlerResource
  | GlueClassifierResource
  | GlueSchemaResource
  | GlueTableResource
  | GlueRegistryResource
  | OpsWorksUserProfileResource
  | OpsWorksVolumeResource
  | OpsWorksAppResource
  | OpsWorksElasticLoadBalancerAttachmentResource
  | OpsWorksInstanceResource
  | OpsWorksLayerResource
  | OpsWorksStackResource
  | NeptuneDBSubnetGroupResource
  | NeptuneDBInstanceResource
  | NeptuneDBClusterResource
  | NeptuneDBClusterParameterGroupResource
  | NeptuneDBParameterGroupResource
  | MediaTailorPlaybackConfigurationResource
  | ResourceExplorer2ViewResource
  | ResourceExplorer2ResourceExplorer2IndexResource
  | ResourceExplorer2DefaultViewAssociationResource
  | RolesAnywhereProfileResource
  | RolesAnywhereTrustAnchorResource
  | RolesAnywhereCRLResource
  | ResilienceHubAppResource
  | ResilienceHubResiliencyPolicyResource
  | MediaPackageChannelResource
  | MediaPackagePackagingConfigurationResource
  | MediaPackageAssetResource
  | MediaPackagePackagingGroupResource
  | MediaPackageOriginEndpointResource
  | NetworkFirewallFirewallPolicyResource
  | NetworkFirewallFirewallResource
  | NetworkFirewallLoggingConfigurationResource
  | NetworkFirewallRuleGroupResource
  | KendraDataSourceResource
  | KendraKendraIndexResource
  | KendraFaqResource
  | CodeGuruReviewerRepositoryAssociationResource
  | ElasticBeanstalkConfigurationTemplateResource
  | ElasticBeanstalkEnvironmentResource
  | ElasticBeanstalkApplicationResource
  | ElasticBeanstalkApplicationVersionResource
  | WorkSpacesConnectionAliasResource
  | WorkSpacesWorkspaceResource
  | IoTCoreDeviceAdvisorSuiteDefinitionResource
  | ImageBuilderComponentResource
  | ImageBuilderImagePipelineResource
  | ImageBuilderContainerRecipeResource
  | ImageBuilderImageRecipeResource
  | ImageBuilderInfrastructureConfigurationResource
  | ImageBuilderDistributionConfigurationResource
  | ImageBuilderImageResource
  | OrganizationsResourcePolicyResource
  | OrganizationsOrganizationalUnitResource
  | OrganizationsPolicyResource
  | OrganizationsAccountResource
  | IoTThingsGraphFlowTemplateResource
  | AutoScalingPlansScalingPlanResource
  | M2ApplicationResource
  | M2EnvironmentResource
  | IdentityStoreGroupResource
  | IdentityStoreGroupMembershipResource
  | SSOAssignmentResource
  | SSOInstanceAccessControlAttributeConfigurationResource
  | SSOPermissionSetResource
  | GameLiftAliasResource
  | GameLiftBuildResource
  | GameLiftScriptResource
  | GameLiftLocationResource
  | GameLiftGameServerGroupResource
  | GameLiftFleetResource
  | GameLiftMatchmakingConfigurationResource
  | GameLiftMatchmakingRuleSetResource
  | GameLiftGameSessionQueueResource
  | APSWorkspaceResource
  | APSRuleGroupsNamespaceResource
  | DirectoryServiceMicrosoftADResource
  | DirectoryServiceSimpleADResource
  | ConfigDeliveryChannelResource
  | ConfigOrganizationConfigRuleResource
  | ConfigConfigRuleResource
  | ConfigStoredQueryResource
  | ConfigRemediationConfigurationResource
  | ConfigConfigurationAggregatorResource
  | ConfigAggregationAuthorizationResource
  | ConfigConfigurationRecorderResource
  | ConfigOrganizationConformancePackResource
  | ConfigConformancePackResource
  | PersonalizeSolutionResource
  | PersonalizeSchemaResource
  | PersonalizeDatasetGroupResource
  | PersonalizeDatasetResource
  | LicenseManagerLicenseResource
  | LicenseManagerGrantResource
  | InspectorResourceGroupResource
  | InspectorAssessmentTemplateResource
  | InspectorAssessmentTargetResource
  | EMRContainersVirtualClusterResource
  | RUMAppMonitorResource
  | OpsWorksCMServerResource
  | BatchJobQueueResource
  | BatchJobDefinitionResource
  | BatchSchedulingPolicyResource
  | BatchComputeEnvironmentResource
  | ControlTowerEnabledControlResource
  | KinesisVideoStreamResource
  | KinesisVideoSignalingChannelResource
  | S3OutpostsEndpointResource
  | S3OutpostsAccessPointResource
  | S3OutpostsBucketResource
  | S3OutpostsBucketPolicyResource
  | DataPipelinePipelineResource
  | MediaLiveInputSecurityGroupResource
  | MediaLiveChannelResource
  | MediaLiveInputResource
  | CodeArtifactDomainResource
  | CodeArtifactRepositoryResource
  | WisdomKnowledgeBaseResource
  | WisdomAssistantAssociationResource
  | WisdomAssistantResource
  | CodeGuruProfilerProfilingGroupResource
  | AthenaDataCatalogResource
  | AthenaWorkGroupResource
  | AthenaPreparedStatementResource
  | AthenaNamedQueryResource
  | InternetMonitorMonitorResource
  | SQSQueuePolicyResource
  | SQSQueueResource
  | IVSChannelResource
  | IVSPlaybackKeyPairResource
  | IVSRecordingConfigurationResource
  | IVSStreamKeyResource
  | CodeCommitRepositoryResource
  | MSKBatchScramSecretResource
  | MSKClusterResource
  | MSKServerlessClusterResource
  | MSKConfigurationResource
  | MediaStoreContainerResource
  | LookoutVisionProjectResource
  | EventSchemasSchemaResource
  | EventSchemasDiscovererResource
  | EventSchemasRegistryPolicyResource
  | EventSchemasRegistryResource
  | KendraRankingExecutionPlanResource
  | DocDBElasticClusterResource
  | FMSResourceSetResource
  | FMSNotificationChannelResource
  | FMSPolicyResource
  | KinesisFirehoseDeliveryStreamResource
  | ApplicationAutoScalingScalableTargetResource
  | ApplicationAutoScalingScalingPolicyResource
  | ForecastDatasetGroupResource
  | ForecastDatasetResource
  | DynamoDBTableResource
  | DynamoDBGlobalTableResource
  | CertificateManagerAccountResource
  | CertificateManagerCertificateResource
  | CodeStarGitHubRepositoryResource
  | CassandraKeyspaceResource
  | CassandraTableResource
  | GlobalAcceleratorAcceleratorResource
  | GlobalAcceleratorListenerResource
  | GlobalAcceleratorEndpointGroupResource
  | AccessAnalyzerAnalyzerResource
  | CodeStarConnectionsConnectionResource
  | BudgetsBudgetsActionResource
  | BudgetsBudgetResource
  | EFSMountTargetResource
  | EFSFileSystemResource
  | EFSAccessPointResource
  | NimbleStudioStreamingImageResource
  | NimbleStudioLaunchProfileResource
  | NimbleStudioStudioComponentResource
  | NimbleStudioStudioResource
  | ApplicationInsightsApplicationResource
  | QLDBStreamResource
  | QLDBLedgerResource
  | ElasticLoadBalancingLoadBalancerResource
  | AmazonMQConfigurationAssociationResource
  | AmazonMQConfigurationResource
  | AmazonMQBrokerResource
  | S3ObjectLambdaAccessPointResource
  | S3ObjectLambdaAccessPointPolicyResource
  | ServiceCatalogAppRegistryApplicationResource
  | ServiceCatalogAppRegistryResourceAssociationResource
  | ServiceCatalogAppRegistryAttributeGroupResource
  | ServiceCatalogAppRegistryAttributeGroupAssociationResource
  | SystemsManagerSAPApplicationResource
  | FISExperimentTemplateResource
  | AuditManagerAssessmentResource
  | PipesPipeResource
  | DLMLifecyclePolicyResource
  | SDBDomainResource
  | IoTEventsInputResource
  | IoTEventsAlarmModelResource
  | IoTEventsDetectorModelResource
  | RedshiftServerlessNamespaceResource
  | RedshiftServerlessWorkgroupResource
  | CodeStarNotificationsNotificationRuleResource
  | EMRServerlessApplicationResource
  | ASKSkillResource
  | SecurityHubHubResource
  | ComprehendFlywheelResource
  | SignerSigningProfileResource
  | SignerProfilePermissionResource
  | InspectorV2FilterResource
  | ResourceGroupsGroupResource
  | VoiceIDDomainResource
  | KafkaConnectConnectorResource
  | OpenSearchServiceDomainResource
  | LookoutEquipmentInferenceSchedulerResource
  | GroundStationConfigResource
  | GroundStationDataflowEndpointGroupResource
  | GroundStationMissionProfileResource
  | PinpointEmailConfigurationSetEventDestinationResource
  | PinpointEmailDedicatedIpPoolResource
  | PinpointEmailIdentityResource
  | PinpointEmailConfigurationSetResource
  | HealthLakeFHIRDatastoreResource
  | FraudDetectorEntityTypeResource
  | FraudDetectorOutcomeResource
  | FraudDetectorDetectorResource
  | FraudDetectorLabelResource
  | FraudDetectorVariableResource
  | FraudDetectorEventTypeResource
  | IoTTwinMakerSyncJobResource
  | IoTTwinMakerWorkspaceResource
  | IoTTwinMakerSceneResource
  | IoTTwinMakerComponentTypeResource
  | IoTTwinMakerEntityResource
  | OmicsReferenceStoreResource
  | OmicsRunGroupResource
  | OmicsSequenceStoreResource
  | OmicsVariantStoreResource
  | OmicsAnnotationStoreResource
  | OmicsWorkflowResource
  | PanoramaPackageResource
  | PanoramaPackageVersionResource
  | PanoramaApplicationInstanceResource
  | SimSpaceWeaverSimulationResource
  | ConnectCampaignsCampaignResource
  | FinSpaceEnvironmentResource
  | IoTFleetWiseModelManifestResource
  | IoTFleetWiseDecoderManifestResource
  | IoTFleetWiseCampaignResource
  | IoTFleetWiseFleetResource
  | IoTFleetWiseSignalCatalogResource
  | IoTFleetWiseVehicleResource
  | SupportAppSlackChannelConfigurationResource
  | SupportAppSlackWorkspaceConfigurationResource
  | SupportAppAccountAliasResource
  | BillingConductorPricingPlanResource
  | BillingConductorCustomLineItemResource
  | BillingConductorBillingGroupResource
  | BillingConductorPricingRuleResource
  | Route53RecoveryReadinessReadinessCheckResource
  | Route53RecoveryReadinessRecoveryGroupResource
  | Route53RecoveryReadinessCellResource
  | Route53RecoveryReadinessResourceSetResource
  | Route53RecoveryControlSafetyRuleResource
  | Route53RecoveryControlClusterResource
  | Route53RecoveryControlRoutingControlResource
  | Route53RecoveryControlControlPanelResource
  | CURReportDefinitionResource
  | DeviceFarmTestGridProjectResource
  | DeviceFarmVPCEConfigurationResource
  | DeviceFarmNetworkProfileResource
  | DeviceFarmDevicePoolResource
  | DeviceFarmProjectResource
  | DeviceFarmInstanceProfileResource;
