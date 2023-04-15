import type { Resource } from './index';

type BaseResourceAttributeMap = {
  [K in Resource['Type']]: string;
};

export interface ResourceAttributeMap extends BaseResourceAttributeMap {
  'AWS::XRay::Group': 'GroupARN';
  'AWS::ACMPCA::CertificateAuthority': 'CertificateSigningRequest' | 'Arn';
  'AWS::IAM::Group': 'Arn';
  'AWS::Backup::BackupPlan': 'VersionId' | 'BackupPlanId' | 'BackupPlanArn';
  'AWS::AppIntegrations::EventIntegration': 'EventIntegrationArn';
  'AWS::Rekognition::Collection': 'Arn';
  'AWS::S3::MultiRegionAccessPoint': 'Alias' | 'CreatedAt';
  'AWS::Route53Resolver::ResolverQueryLoggingConfig':
    | 'Status'
    | 'OwnerId'
    | 'AssociationCount'
    | 'CreationTime'
    | 'ShareStatus'
    | 'Id'
    | 'Arn'
    | 'CreatorRequestId';
  'AWS::EC2::VPCPeeringConnection': 'Id';
  'AWS::Elasticsearch::Domain': 'Arn' | 'DomainArn' | 'DomainEndpoint';
  'AWS::IoTSiteWise::AssetModel': 'AssetModelId' | 'AssetModelArn';
  'AWS::DevOpsGuru::LogAnomalyDetectionIntegration': 'AccountId';
  'AWS::LookoutMetrics::Alert': 'Arn';
  'AWS::Kinesis::Stream': 'Arn';
  'AWS::AmplifyUIBuilder::Form': 'Id';
  'AWS::RAM::ResourceShare': 'Arn';
  'AWS::Redshift::EndpointAccess':
    | 'EndpointStatus'
    | 'VpcEndpoint'
    | 'Address'
    | 'Port'
    | 'EndpointCreateTime'
    | 'VpcEndpoint.VpcId'
    | 'VpcEndpoint.NetworkInterfaces'
    | 'VpcSecurityGroups'
    | 'VpcEndpoint.VpcEndpointId';
  'AWS::SageMaker::ImageVersion': 'ImageVersionArn' | 'Version' | 'ContainerImage' | 'ImageArn';
  'AWS::AppRunner::VpcConnector': 'VpcConnectorArn' | 'VpcConnectorRevision';
  'AWS::EC2::CapacityReservation':
    | 'Tenancy'
    | 'AvailableInstanceCount'
    | 'AvailabilityZone'
    | 'TotalInstanceCount'
    | 'Id'
    | 'InstanceType';
  'AWS::AppSync::Resolver': 'TypeName' | 'ResolverArn' | 'FieldName';
  'AWS::RefactorSpaces::Environment': 'TransitGatewayId' | 'EnvironmentIdentifier' | 'Arn';
  'AWS::DataSync::LocationNFS': 'LocationUri' | 'LocationArn';
  'AWS::ManagedBlockchain::Member': 'MemberId' | 'NetworkId';
  'AWS::Timestream::ScheduledQuery':
    | 'SQScheduleConfiguration'
    | 'SQNotificationConfiguration'
    | 'SQErrorReportConfiguration'
    | 'SQKmsKeyId'
    | 'SQQueryString'
    | 'SQTargetConfiguration'
    | 'SQName'
    | 'Arn'
    | 'SQScheduledQueryExecutionRoleArn';
  'AWS::ECS::Cluster': 'Arn';
  'AWS::Events::Endpoint': 'State' | 'StateReason' | 'EndpointId' | 'Arn' | 'EndpointUrl';
  'AWS::NetworkManager::Link': 'LinkArn' | 'LinkId';
  'AWS::CloudFormation::StackSet': 'StackSetId';
  'AWS::CloudFront::StreamingDistribution': 'DomainName';
  'AWS::AppSync::GraphQLApi': 'GraphQLUrl' | 'Arn' | 'ApiId';
  'AWS::SageMaker::DataQualityJobDefinition': 'JobDefinitionArn' | 'CreationTime';
  'AWS::ACMPCA::CertificateAuthorityActivation': 'CompleteCertificateChain';
  'AWS::WAFv2::LoggingConfiguration': 'ManagedByFirewallManager';
  'AWS::SNS::Topic': 'TopicArn' | 'TopicName';
  'AWS::SageMaker::Space': 'SpaceArn';
  'AWS::QuickSight::Dashboard':
    | 'Version.Status'
    | 'CreatedTime'
    | 'LastUpdatedTime'
    | 'Version.VersionNumber'
    | 'Version.Sheets'
    | 'Version.Arn'
    | 'Version.ThemeArn'
    | 'Version.Errors'
    | 'Version.CreatedTime'
    | 'Version.Description'
    | 'LastPublishedTime'
    | 'Version'
    | 'Version.DataSetArns'
    | 'Arn'
    | 'Version.SourceEntityArn';
  'AWS::Redshift::Cluster':
    | 'Endpoint.Address'
    | 'Endpoint.Port'
    | 'Id'
    | 'DeferMaintenanceIdentifier';
  'AWS::Redshift::ScheduledAction': 'State' | 'NextInvocations';
  'AWS::SageMaker::MonitoringSchedule':
    | 'MonitoringScheduleArn'
    | 'CreationTime'
    | 'LastModifiedTime';
  'AWS::EC2::IPAM':
    | 'IpamId'
    | 'ScopeCount'
    | 'Arn'
    | 'PrivateDefaultScopeId'
    | 'PublicDefaultScopeId';
  'AWS::AppMesh::Route':
    | 'Uid'
    | 'MeshName'
    | 'VirtualRouterName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'RouteName'
    | 'Arn';
  'AWS::EKS::Nodegroup': 'NodegroupName' | 'ClusterName' | 'Id' | 'Arn';
  'AWS::EC2::IPAMResourceDiscovery':
    | 'IsDefault'
    | 'OwnerId'
    | 'State'
    | 'IpamResourceDiscoveryRegion'
    | 'IpamResourceDiscoveryArn'
    | 'IpamResourceDiscoveryId';
  'AWS::CE::CostCategory': 'EffectiveStart' | 'Arn';
  'AWS::Transfer::Profile': 'ProfileId' | 'Arn';
  'AWS::Connect::Instance': 'CreatedTime' | 'ServiceRole' | 'InstanceStatus' | 'Id' | 'Arn';
  'AWS::IoT1Click::Project': 'ProjectName' | 'Arn';
  'AWS::EC2::EIP': 'PublicIp' | 'AllocationId';
  'AWS::IoT::CustomMetric': 'MetricArn';
  'AWS::MediaConvert::Queue': 'Arn' | 'Name';
  'AWS::ApiGateway::DomainName':
    | 'RegionalHostedZoneId'
    | 'RegionalDomainName'
    | 'DistributionHostedZoneId'
    | 'DistributionDomainName';
  'AWS::WAFv2::RegexPatternSet': 'Id' | 'Arn';
  'AWS::Backup::Framework':
    | 'CreationTime'
    | 'FrameworkStatus'
    | 'DeploymentStatus'
    | 'FrameworkArn';
  'AWS::ApiGateway::DocumentationPart': 'DocumentationPartId';
  'AWS::CloudFront::CachePolicy': 'LastModifiedTime' | 'Id';
  'AWS::VpcLattice::ServiceNetwork': 'LastUpdatedAt' | 'CreatedAt' | 'Id' | 'Arn';
  'AWS::MemoryDB::ParameterGroup': 'ARN';
  'AWS::GreengrassV2::Deployment': 'DeploymentId';
  'AWS::IoTFleetHub::Application':
    | 'ApplicationUrl'
    | 'ApplicationArn'
    | 'ApplicationState'
    | 'SsoClientId'
    | 'ApplicationId'
    | 'ApplicationLastUpdateDate'
    | 'ErrorMessage'
    | 'ApplicationCreationDate';
  'AWS::AppConfig::ExtensionAssociation': 'ResourceArn' | 'ExtensionArn' | 'Id' | 'Arn';
  'AWS::MWAA::Environment':
    | 'LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn'
    | 'LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn'
    | 'LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn'
    | 'WebserverUrl'
    | 'LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn'
    | 'Arn'
    | 'LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn';
  'AWS::VpcLattice::ServiceNetworkVpcAssociation':
    | 'Status'
    | 'VpcId'
    | 'ServiceNetworkId'
    | 'CreatedAt'
    | 'ServiceNetworkName'
    | 'Id'
    | 'Arn'
    | 'ServiceNetworkArn';
  'AWS::Oam::Sink': 'Arn';
  'AWS::Lightsail::Database': 'DatabaseArn';
  'AWS::VpcLattice::AccessLogSubscription': 'ResourceArn' | 'ResourceId' | 'Id' | 'Arn';
  'AWS::Lightsail::Certificate': 'Status' | 'CertificateArn';
  'AWS::Macie::Session': 'ServiceRole' | 'AwsAccountId';
  'AWS::Chatbot::MicrosoftTeamsChannelConfiguration': 'Arn';
  'AWS::Scheduler::ScheduleGroup': 'CreationDate' | 'State' | 'LastModificationDate' | 'Arn';
  'AWS::Cognito::IdentityPool': 'Name';
  'AWS::ElasticLoadBalancingV2::LoadBalancer':
    | 'CanonicalHostedZoneID'
    | 'DNSName'
    | 'LoadBalancerFullName'
    | 'LoadBalancerName'
    | 'SecurityGroups';
  'AWS::SES::ConfigurationSetEventDestination': 'Id';
  'AWS::Grafana::Workspace':
    | 'Status'
    | 'GrafanaVersion'
    | 'CreationTimestamp'
    | 'Endpoint'
    | 'SsoClientId'
    | 'Id'
    | 'SamlConfigurationStatus'
    | 'ModificationTimestamp';
  'AWS::SageMaker::ModelPackageGroup':
    | 'ModelPackageGroupArn'
    | 'CreationTime'
    | 'ModelPackageGroupStatus';
  'AWS::WAFv2::IPSet': 'Id' | 'Arn';
  'AWS::Route53Resolver::FirewallRuleGroupAssociation':
    | 'Status'
    | 'CreationTime'
    | 'ManagedOwnerName'
    | 'ModificationTime'
    | 'Id'
    | 'Arn'
    | 'CreatorRequestId'
    | 'StatusMessage';
  'AWS::OpenSearchServerless::VpcEndpoint': 'Id';
  'AWS::Connect::QuickConnect': 'QuickConnectArn';
  'AWS::StepFunctions::StateMachine': 'StateMachineRevisionId' | 'Arn' | 'Name';
  'AWS::Macie::AllowList': 'Status' | 'Id' | 'Arn';
  'AWS::IoT::MitigationAction': 'MitigationActionArn' | 'MitigationActionId';
  'AWS::CustomerProfiles::Integration': 'LastUpdatedAt' | 'CreatedAt';
  'AWS::EC2::TransitGatewayAttachment': 'Id';
  'AWS::Location::Tracker': 'CreateTime' | 'UpdateTime' | 'Arn' | 'TrackerArn';
  'AWS::IoT::SecurityProfile': 'SecurityProfileArn';
  'AWS::S3::StorageLens': 'StorageLensConfiguration.StorageLensArn';
  'AWS::SES::Template': 'Id';
  'AWS::CloudFront::Distribution': 'DomainName' | 'Id';
  'AWS::Redshift::ClusterParameterGroup': 'ParameterGroupName';
  'AWS::ElastiCache::UserGroup': 'Status' | 'Arn';
  'AWS::ElasticLoadBalancingV2::ListenerRule': 'IsDefault' | 'RuleArn';
  'AWS::CodePipeline::Pipeline': 'Version';
  'AWS::Lightsail::LoadBalancer': 'LoadBalancerArn';
  'AWS::MediaConnect::FlowEntitlement': 'EntitlementArn';
  'AWS::IoT::TopicRule': 'Arn';
  'AWS::SSMContacts::Contact': 'Arn';
  'AWS::ServiceCatalog::CloudFormationProduct':
    | 'ProductName'
    | 'ProvisioningArtifactIds'
    | 'ProvisioningArtifactNames';
  'AWS::GreengrassV2::ComponentVersion': 'ComponentName' | 'Arn' | 'ComponentVersion';
  'AWS::IoTAnalytics::Channel': 'Id';
  'AWS::Amplify::App': 'AppId' | 'Arn' | 'DefaultDomain' | 'AppName';
  'AWS::NetworkManager::ConnectAttachment':
    | 'ProposedSegmentChange'
    | 'ProposedSegmentChange.Tags'
    | 'AttachmentType'
    | 'SegmentName'
    | 'CreatedAt'
    | 'UpdatedAt'
    | 'AttachmentId'
    | 'CoreNetworkArn'
    | 'ResourceArn'
    | 'ProposedSegmentChange.SegmentName'
    | 'State'
    | 'ProposedSegmentChange.AttachmentPolicyRuleNumber'
    | 'OwnerAccountId'
    | 'AttachmentPolicyRuleNumber';
  'AWS::Cloud9::EnvironmentEC2': 'Arn' | 'Name';
  'AWS::IoT::CACertificate': 'Id' | 'Arn';
  'AWS::CloudFormation::HookTypeConfig': 'ConfigurationArn';
  'AWS::Location::GeofenceCollection': 'CollectionArn' | 'CreateTime' | 'UpdateTime' | 'Arn';
  'AWS::SageMaker::ModelBiasJobDefinition': 'JobDefinitionArn' | 'CreationTime';
  'AWS::AppSync::ApiKey': 'ApiKey' | 'Arn';
  'AWS::Lex::Bot': 'Id' | 'Arn';
  'AWS::Route53::HostedZone': 'Id' | 'NameServers';
  'AWS::Pinpoint::EmailTemplate': 'Arn';
  'AWS::IVSChat::Room': 'Id' | 'Arn';
  'AWS::EC2::TransitGatewayMulticastDomainAssociation': 'ResourceId' | 'State' | 'ResourceType';
  'AWS::IoTWireless::ServiceProfile':
    | 'LoRaWAN.DrMin'
    | 'LoRaWAN.ReportDevStatusMargin'
    | 'LoRaWAN.UlRatePolicy'
    | 'LoRaWAN.MinGwDiversity'
    | 'LoRaWAN.TargetPer'
    | 'LoRaWAN.ChannelMask'
    | 'LoRaWAN.ReportDevStatusBattery'
    | 'LoRaWAN.DlRate'
    | 'LoRaWAN.DlRatePolicy'
    | 'LoRaWAN.HrAllowed'
    | 'LoRaWAN.DlBucketSize'
    | 'LoRaWAN.DrMax'
    | 'LoRaWAN.UlBucketSize'
    | 'LoRaWAN.RaAllowed'
    | 'LoRaWAN.UlRate'
    | 'LoRaWAN.NwkGeoLoc'
    | 'LoRaWAN.DevStatusReqFreq'
    | 'LoRaWAN.PrAllowed'
    | 'Id'
    | 'Arn';
  'AWS::MediaConvert::JobTemplate': 'Arn' | 'Name';
  'AWS::EKS::Cluster':
    | 'Endpoint'
    | 'ClusterSecurityGroupId'
    | 'EncryptionConfigKeyArn'
    | 'Id'
    | 'CertificateAuthorityData'
    | 'Arn'
    | 'KubernetesNetworkConfig.ServiceIpv6Cidr'
    | 'OpenIdConnectIssuerUrl';
  'AWS::Connect::InstanceStorageConfig': 'AssociationId';
  'AWS::Connect::HoursOfOperation': 'HoursOfOperationArn';
  'AWS::DocDB::DBCluster': 'ClusterResourceId' | 'Endpoint' | 'Port' | 'ReadEndpoint';
  'AWS::CloudWatch::CompositeAlarm': 'Arn';
  'AWS::DAX::Cluster': 'ClusterDiscoveryEndpointURL' | 'ClusterDiscoveryEndpoint' | 'Arn';
  'AWS::DataSync::LocationHDFS': 'LocationUri' | 'LocationArn';
  'AWS::IoT::DomainConfiguration': 'DomainType' | 'ServerCertificates' | 'Arn';
  'AWS::RefactorSpaces::Service': 'ServiceIdentifier' | 'Arn';
  'AWS::ServiceDiscovery::Service': 'Id' | 'Arn' | 'Name';
  'AWS::Oam::Link': 'Label' | 'Arn';
  'AWS::IoTWireless::WirelessDevice': 'Id' | 'ThingName' | 'Arn';
  'AWS::RoboMaker::SimulationApplicationVersion': 'ApplicationVersion' | 'Arn';
  'AWS::AutoScaling::ScalingPolicy': 'PolicyName' | 'Arn';
  'AWS::Backup::BackupVault': 'BackupVaultName' | 'BackupVaultArn';
  'AWS::AppFlow::Connector': 'ConnectorArn';
  'AWS::IoT1Click::Placement': 'PlacementName' | 'ProjectName';
  'AWS::EC2::DHCPOptions': 'DhcpOptionsId';
  'AWS::ApiGateway::UsagePlan': 'Id';
  'AWS::SSMIncidents::ReplicationSet': 'Arn';
  'AWS::IAM::User': 'Arn';
  'AWS::FSx::DataRepositoryAssociation': 'ResourceARN' | 'AssociationId';
  'AWS::KMS::ReplicaKey': 'KeyId' | 'Arn';
  'AWS::CloudWatch::InsightRule': 'Arn' | 'RuleName';
  'AWS::IoTAnalytics::Datastore': 'Id';
  'AWS::S3::Bucket':
    | 'Arn'
    | 'DomainName'
    | 'DualStackDomainName'
    | 'RegionalDomainName'
    | 'WebsiteURL';
  'AWS::SageMaker::ModelQualityJobDefinition': 'JobDefinitionArn' | 'CreationTime';
  'AWS::Synthetics::Canary': 'State' | 'Id';
  'AWS::SageMaker::NotebookInstance': 'NotebookInstanceName';
  'AWS::Cognito::UserPool': 'ProviderName' | 'ProviderURL' | 'Arn';
  'AWS::EC2::EgressOnlyInternetGateway': 'Id';
  'AWS::Events::ApiDestination': 'Arn';
  'AWS::ApiGatewayV2::Api': 'ApiEndpoint' | 'ApiId';
  'AWS::RoboMaker::RobotApplication': 'CurrentRevisionId' | 'Arn';
  'AWS::EC2::CustomerGateway': 'CustomerGatewayId';
  'AWS::IoTSiteWise::Asset': 'AssetArn' | 'AssetId';
  'AWS::CloudFormation::ResourceDefaultVersion': 'Arn';
  'AWS::ECR::Repository': 'RepositoryUri' | 'Arn';
  'AWS::ApiGateway::GatewayResponse': 'Id';
  'AWS::Evidently::Segment': 'Arn';
  'AWS::Redshift::ClusterSubnetGroup': 'ClusterSubnetGroupName';
  'AWS::DataSync::LocationFSxONTAP': 'LocationUri' | 'FsxFilesystemArn' | 'LocationArn';
  'AWS::IoT::Authorizer': 'Arn';
  'AWS::IAM::VirtualMFADevice': 'SerialNumber';
  'AWS::CodeBuild::ReportGroup': 'Arn';
  'AWS::OpsWorks::UserProfile': 'SshUsername';
  'AWS::MediaTailor::PlaybackConfiguration':
    | 'HlsConfiguration.ManifestEndpointPrefix'
    | 'SessionInitializationEndpointPrefix'
    | 'DashConfiguration.ManifestEndpointPrefix'
    | 'PlaybackConfigurationArn'
    | 'PlaybackEndpointPrefix';
  'AWS::ResourceExplorer2::View': 'ViewArn';
  'AWS::RolesAnywhere::Profile': 'ProfileId' | 'ProfileArn';
  'AWS::Logs::Destination': 'Arn';
  'AWS::Lambda::Url': 'FunctionArn' | 'FunctionUrl';
  'AWS::ResilienceHub::App': 'AppArn';
  'AWS::CloudTrail::Channel': 'ChannelArn';
  'AWS::Transfer::Workflow': 'WorkflowId' | 'Arn';
  'AWS::MediaPackage::Channel': 'Arn';
  'AWS::OpenSearchServerless::SecurityConfig': 'Id';
  'AWS::Neptune::DBInstance': 'Endpoint' | 'Port';
  'AWS::Kinesis::StreamConsumer':
    | 'ConsumerCreationTimestamp'
    | 'ConsumerName'
    | 'ConsumerARN'
    | 'ConsumerStatus'
    | 'StreamARN';
  'AWS::NetworkFirewall::FirewallPolicy': 'FirewallPolicyArn' | 'FirewallPolicyId';
  'AWS::SSMContacts::Plan': 'Arn';
  'AWS::EC2::IPAMScope':
    | 'IpamScopeId'
    | 'IsDefault'
    | 'IpamArn'
    | 'IpamScopeType'
    | 'PoolCount'
    | 'Arn';
  'AWS::ServiceCatalog::ServiceAction': 'Id';
  'AWS::Kendra::DataSource': 'Id' | 'Arn';
  'AWS::ApiGateway::UsagePlanKey': 'Id';
  'AWS::CodeGuruReviewer::RepositoryAssociation': 'AssociationArn';
  'AWS::Transfer::Connector': 'Arn' | 'ConnectorId';
  'AWS::SSM::ResourcePolicy': 'PolicyHash' | 'PolicyId';
  'AWS::IoTSiteWise::Dashboard': 'DashboardId' | 'DashboardArn';
  'AWS::RoboMaker::Fleet': 'Arn';
  'AWS::ElasticBeanstalk::ConfigurationTemplate': 'TemplateName';
  'AWS::WorkSpaces::ConnectionAlias': 'ConnectionAliasState' | 'Associations' | 'AliasId';
  'AWS::Events::Rule': 'Arn';
  'AWS::IoTCoreDeviceAdvisor::SuiteDefinition':
    | 'SuiteDefinitionArn'
    | 'SuiteDefinitionVersion'
    | 'SuiteDefinitionId';
  'AWS::SSMContacts::ContactChannel': 'Arn';
  'AWS::ImageBuilder::Component': 'Type' | 'Encrypted' | 'Arn' | 'Name';
  'AWS::CodePipeline::CustomActionType': 'Id';
  'AWS::AppMesh::VirtualNode':
    | 'Uid'
    | 'MeshName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'Arn'
    | 'VirtualNodeName';
  'AWS::AppMesh::VirtualRouter':
    | 'Uid'
    | 'MeshName'
    | 'VirtualRouterName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'Arn';
  'AWS::Greengrass::ConnectorDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::Organizations::ResourcePolicy': 'Id' | 'Arn';
  'AWS::DataSync::Agent': 'AgentArn' | 'EndpointType';
  'AWS::EC2::PlacementGroup': 'GroupName';
  'AWS::ApiGateway::RequestValidator': 'RequestValidatorId';
  'AWS::Connect::PhoneNumber': 'Address' | 'PhoneNumberArn';
  'AWS::Timestream::Database': 'Arn';
  'AWS::NetworkManager::TransitGatewayRouteTableAttachment':
    | 'ResourceArn'
    | 'CoreNetworkId'
    | 'AttachmentType'
    | 'SegmentName'
    | 'State'
    | 'CreatedAt'
    | 'OwnerAccountId'
    | 'UpdatedAt'
    | 'AttachmentId'
    | 'CoreNetworkArn'
    | 'EdgeLocation'
    | 'AttachmentPolicyRuleNumber';
  'AWS::Logs::LogGroup': 'Arn';
  'AWS::CodePipeline::Webhook': 'Url';
  'AWS::SSMIncidents::ResponsePlan': 'Arn';
  'AWS::DataSync::LocationEFS': 'LocationUri' | 'LocationArn';
  'AWS::AutoScalingPlans::ScalingPlan': 'ScalingPlanName' | 'ScalingPlanVersion';
  'AWS::EC2::InternetGateway': 'InternetGatewayId';
  'AWS::IAM::Role': 'Arn' | 'RoleId';
  'AWS::M2::Application': 'ApplicationArn' | 'ApplicationId';
  'AWS::Macie::FindingsFilter': 'Id' | 'Arn';
  'AWS::Pinpoint::InAppTemplate': 'Arn';
  'AWS::EC2::LaunchTemplate': 'LatestVersionNumber' | 'DefaultVersionNumber';
  'AWS::Events::Archive': 'Arn';
  'AWS::IoT::Dimension': 'Arn';
  'AWS::ACMPCA::Certificate': 'Arn' | 'Certificate';
  'AWS::SageMaker::AppImageConfig': 'AppImageConfigArn';
  'AWS::EMR::Cluster': 'MasterPublicDNS';
  'AWS::IdentityStore::Group': 'GroupId';
  'AWS::GameLift::Alias': 'AliasId';
  'AWS::APS::Workspace': 'PrometheusEndpoint' | 'WorkspaceId' | 'Arn';
  'AWS::DirectoryService::MicrosoftAD': 'Alias' | 'DnsIpAddresses';
  'AWS::NetworkManager::TransitGatewayPeering':
    | 'ResourceArn'
    | 'PeeringType'
    | 'State'
    | 'CreatedAt'
    | 'PeeringId'
    | 'TransitGatewayPeeringAttachmentId'
    | 'OwnerAccountId'
    | 'CoreNetworkArn'
    | 'EdgeLocation';
  'AWS::ApiGatewayV2::DomainName': 'RegionalHostedZoneId' | 'RegionalDomainName';
  'AWS::Greengrass::FunctionDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::Personalize::Solution': 'SolutionArn';
  'AWS::GameLift::Build': 'BuildId';
  'AWS::ECR::ReplicationConfiguration': 'RegistryId';
  'AWS::LicenseManager::License': 'Version' | 'LicenseArn';
  'AWS::Location::RouteCalculator': 'CreateTime' | 'UpdateTime' | 'CalculatorArn' | 'Arn';
  'AWS::Lex::BotAlias': 'BotAliasStatus' | 'Arn' | 'BotAliasId';
  'AWS::IoTSiteWise::Portal': 'PortalArn' | 'PortalStartUrl' | 'PortalId' | 'PortalClientId';
  'AWS::EC2::IPAMPoolCidr': 'IpamPoolCidrId' | 'State';
  'AWS::RolesAnywhere::TrustAnchor': 'TrustAnchorArn' | 'TrustAnchorId';
  'AWS::Kendra::Index': 'Id' | 'Arn';
  'AWS::IAM::SAMLProvider': 'Arn';
  'AWS::Inspector::ResourceGroup': 'Arn';
  'AWS::EMRContainers::VirtualCluster': 'Id' | 'Arn';
  'AWS::NetworkFirewall::Firewall': 'FirewallArn' | 'EndpointIds' | 'FirewallId';
  'AWS::RUM::AppMonitor': 'Id';
  'AWS::ImageBuilder::ImagePipeline': 'Arn' | 'Name';
  'AWS::EC2::TransitGatewayMulticastGroupMember':
    | 'GroupMember'
    | 'ResourceId'
    | 'MemberType'
    | 'SourceType'
    | 'ResourceType'
    | 'SubnetId'
    | 'GroupSource'
    | 'TransitGatewayAttachmentId';
  'AWS::RDS::DBCluster':
    | 'Endpoint.Address'
    | 'Endpoint'
    | 'DBClusterArn'
    | 'Endpoint.Port'
    | 'ReadEndpoint.Address'
    | 'DBClusterResourceId'
    | 'MasterUserSecret.SecretArn';
  'AWS::ECS::Service': 'ServiceArn' | 'Name';
  'AWS::OpsWorksCM::Server': 'Endpoint' | 'ServerName' | 'Arn';
  'AWS::AppSync::DomainNameApiAssociation': 'ApiAssociationIdentifier';
  'AWS::IoT::Thing': 'Id' | 'Arn';
  'AWS::Batch::JobQueue': 'JobQueueArn';
  'AWS::ApiGateway::ApiKey': 'APIKeyId';
  'AWS::Timestream::Table': 'Arn' | 'Name';
  'AWS::EC2::LocalGatewayRouteTableVPCAssociation':
    | 'LocalGatewayId'
    | 'State'
    | 'LocalGatewayRouteTableVpcAssociationId';
  'AWS::IoTWireless::DeviceProfile': 'Id' | 'Arn';
  'AWS::ApiGateway::Resource': 'ResourceId';
  'AWS::CloudFormation::TypeActivation': 'Arn';
  'AWS::KinesisVideo::Stream': 'Arn';
  'AWS::S3Outposts::Endpoint':
    | 'Status'
    | 'NetworkInterfaces'
    | 'CreationTime'
    | 'CidrBlock'
    | 'Id'
    | 'Arn';
  'AWS::CustomerProfiles::ObjectType': 'LastUpdatedAt' | 'CreatedAt';
  'AWS::WAFv2::WebACL': 'Capacity' | 'Id' | 'Arn' | 'LabelNamespace';
  'AWS::Connect::IntegrationAssociation': 'IntegrationAssociationId';
  'AWS::Detective::Graph': 'Arn';
  'AWS::EC2::NetworkInterface': 'SecondaryPrivateIpAddresses' | 'PrimaryPrivateIpAddress' | 'Id';
  'AWS::ApiGatewayV2::Deployment': 'DeploymentId';
  'AWS::FSx::FileSystem': 'ResourceARN' | 'RootVolumeId' | 'DNSName' | 'LustreMountName';
  'AWS::IoTSiteWise::AccessPolicy': 'AccessPolicyArn' | 'AccessPolicyId';
  'AWS::ResourceExplorer2::Index': 'Arn' | 'IndexState';
  'AWS::DataPipeline::Pipeline': 'PipelineId';
  'AWS::EC2::TransitGatewayMulticastGroupSource':
    | 'GroupMember'
    | 'ResourceId'
    | 'MemberType'
    | 'SourceType'
    | 'ResourceType'
    | 'SubnetId'
    | 'GroupSource'
    | 'TransitGatewayAttachmentId';
  'AWS::Pinpoint::Campaign': 'CampaignId' | 'Arn';
  'AWS::Transfer::Certificate':
    | 'Status'
    | 'Type'
    | 'Serial'
    | 'CertificateId'
    | 'NotBeforeDate'
    | 'NotAfterDate'
    | 'Arn';
  'AWS::FSx::Volume': 'ResourceARN' | 'VolumeId' | 'UUID';
  'AWS::MemoryDB::ACL': 'Status' | 'Arn';
  'AWS::Personalize::Schema': 'SchemaArn';
  'AWS::APS::RuleGroupsNamespace': 'Arn';
  'AWS::GameLift::Script': 'Id' | 'Arn';
  'AWS::ApiGateway::Account': 'Id';
  'AWS::Greengrass::LoggerDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::LakeFormation::PrincipalPermissions': 'ResourceIdentifier' | 'PrincipalIdentifier';
  'AWS::ServiceCatalog::CloudFormationProvisionedProduct':
    | 'CloudformationStackArn'
    | 'Outputs'
    | 'ProvisionedProductId'
    | 'RecordId';
  'AWS::CloudFormation::PublicTypeVersion': 'PublicTypeArn' | 'PublisherId' | 'TypeVersionArn';
  'AWS::MediaLive::InputSecurityGroup': 'Arn';
  'AWS::EC2::NatGateway': 'NatGatewayId';
  'AWS::CodeArtifact::Domain': 'Owner' | 'EncryptionKey' | 'Arn' | 'Name';
  'AWS::IoT::FleetMetric': 'MetricArn' | 'CreationDate' | 'LastModifiedDate' | 'Version';
  'AWS::ElastiCache::ReplicationGroup':
    | 'ConfigurationEndPoint.Address'
    | 'ConfigurationEndPoint.Port'
    | 'PrimaryEndPoint.Address'
    | 'PrimaryEndPoint.Port'
    | 'ReadEndPoint.Addresses'
    | 'ReadEndPoint.Addresses.List'
    | 'ReadEndPoint.Ports'
    | 'ReadEndPoint.Ports.List'
    | 'ReaderEndPoint.Address'
    | 'ReaderEndPoint.Port';
  'AWS::ApiGatewayV2::Model': 'ModelId';
  'AWS::AppSync::FunctionConfiguration': 'FunctionId' | 'FunctionArn' | 'DataSourceName' | 'Name';
  'AWS::CloudFormation::HookVersion':
    | 'VersionId'
    | 'IsDefaultVersion'
    | 'Visibility'
    | 'Arn'
    | 'TypeArn';
  'AWS::EKS::FargateProfile': 'Arn';
  'AWS::LookoutMetrics::AnomalyDetector': 'Arn';
  'AWS::CloudFormation::ResourceVersion':
    | 'VersionId'
    | 'ProvisioningType'
    | 'IsDefaultVersion'
    | 'Visibility'
    | 'Arn'
    | 'TypeArn';
  'AWS::Personalize::DatasetGroup': 'DatasetGroupArn';
  'AWS::Lightsail::Bucket': 'BucketArn' | 'AbleToUpdateBundle' | 'Url';
  'AWS::Wisdom::KnowledgeBase': 'KnowledgeBaseArn' | 'KnowledgeBaseId';
  'AWS::EC2::PrefixList': 'OwnerId' | 'PrefixListId' | 'Version' | 'Arn';
  'AWS::CodeGuruProfiler::ProfilingGroup': 'Arn';
  'AWS::GameLift::Location': 'LocationArn';
  'AWS::InternetMonitor::Monitor':
    | 'ModifiedAt'
    | 'MonitorArn'
    | 'CreatedAt'
    | 'ProcessingStatusInfo'
    | 'ProcessingStatus';
  'AWS::IVS::Channel': 'PlaybackUrl' | 'IngestEndpoint' | 'Arn';
  'AWS::CodeCommit::Repository': 'CloneUrlHttp' | 'CloneUrlSsh' | 'Arn' | 'Name';
  'AWS::ServiceCatalog::Portfolio': 'PortfolioName';
  'AWS::Greengrass::CoreDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::Connect::SecurityKey': 'AssociationId';
  'AWS::MediaStore::Container': 'Endpoint';
  'AWS::Logs::LogStream': 'Id';
  'AWS::Athena::WorkGroup':
    | 'CreationTime'
    | 'WorkGroupConfiguration.EngineVersion.EffectiveEngineVersion';
  'AWS::RoboMaker::RobotApplicationVersion': 'ApplicationVersion' | 'Arn';
  'AWS::IoTWireless::MulticastGroup':
    | 'Status'
    | 'LoRaWAN.NumberOfDevicesRequested'
    | 'Id'
    | 'LoRaWAN.NumberOfDevicesInGroup'
    | 'Arn';
  'AWS::ElasticBeanstalk::Environment': 'EndpointURL';
  'AWS::Lambda::Function':
    | 'SnapStartResponse.OptimizationStatus'
    | 'SnapStartResponse.ApplyOn'
    | 'SnapStartResponse'
    | 'Arn';
  'AWS::LookoutVision::Project': 'Arn';
  'AWS::QuickSight::RefreshSchedule': 'Arn';
  'AWS::EventSchemas::Schema': 'SchemaVersion' | 'SchemaArn' | 'SchemaName';
  'AWS::IoTSiteWise::Project': 'ProjectArn' | 'ProjectId';
  'AWS::Config::ConfigRule': 'Arn' | 'Compliance.Type' | 'ConfigRuleId';
  'AWS::KendraRanking::ExecutionPlan': 'Id' | 'Arn';
  'AWS::DocDBElastic::Cluster': 'ClusterArn' | 'ClusterEndpoint';
  'AWS::FMS::ResourceSet': 'Id';
  'AWS::Neptune::DBCluster': 'ClusterResourceId' | 'Endpoint' | 'Port' | 'ReadEndpoint';
  'AWS::GameLift::GameServerGroup': 'AutoScalingGroupArn' | 'GameServerGroupArn';
  'AWS::ElastiCache::GlobalReplicationGroup': 'Status' | 'GlobalReplicationGroupId';
  'AWS::EC2::TransitGatewayMulticastDomain':
    | 'TransitGatewayMulticastDomainArn'
    | 'State'
    | 'CreationTime'
    | 'TransitGatewayMulticastDomainId';
  'AWS::CloudFront::Function': 'FunctionARN' | 'FunctionMetadata.FunctionARN' | 'Stage';
  'AWS::KinesisFirehose::DeliveryStream': 'Arn';
  'AWS::IVS::PlaybackKeyPair': 'Fingerprint' | 'Arn';
  'AWS::LakeFormation::TagAssociation': 'ResourceIdentifier' | 'TagsIdentifier';
  'AWS::Amplify::Domain':
    | 'AutoSubDomainIAMRole'
    | 'DomainName'
    | 'EnableAutoSubDomain'
    | 'StatusReason'
    | 'Arn'
    | 'AutoSubDomainCreationPatterns'
    | 'DomainStatus'
    | 'CertificateRecord';
  'AWS::VpcLattice::AuthPolicy': 'State';
  'AWS::Connect::ContactFlow': 'ContactFlowArn';
  'AWS::ECR::RegistryPolicy': 'RegistryId';
  'AWS::DMS::Endpoint': 'ExternalId';
  'AWS::NetworkManager::ConnectPeer':
    | 'Configuration.BgpConfigurations'
    | 'CoreNetworkId'
    | 'Configuration.InsideCidrBlocks'
    | 'Configuration'
    | 'State'
    | 'CreatedAt'
    | 'ConnectPeerId'
    | 'Configuration.CoreNetworkAddress'
    | 'Configuration.Protocol'
    | 'Configuration.PeerAddress'
    | 'EdgeLocation';
  'AWS::EC2::NetworkInsightsAnalysis':
    | 'Status'
    | 'ReturnPathComponents'
    | 'StartDate'
    | 'NetworkInsightsAnalysisId'
    | 'AlternatePathHints'
    | 'Explanations'
    | 'NetworkPathFound'
    | 'SuggestedAccounts'
    | 'ForwardPathComponents'
    | 'NetworkInsightsAnalysisArn'
    | 'StatusMessage';
  'AWS::ECS::TaskDefinition': 'TaskDefinitionArn';
  'AWS::Forecast::DatasetGroup': 'DatasetGroupArn';
  'AWS::IAM::ServerCertificate': 'Arn';
  'AWS::EC2::NetworkInsightsAccessScope':
    | 'UpdatedDate'
    | 'CreatedDate'
    | 'NetworkInsightsAccessScopeArn'
    | 'NetworkInsightsAccessScopeId';
  'AWS::ElastiCache::CacheCluster':
    | 'ConfigurationEndpoint.Address'
    | 'ConfigurationEndpoint.Port'
    | 'RedisEndpoint.Address'
    | 'RedisEndpoint.Port';
  'AWS::MSK::Cluster': 'Arn';
  'AWS::ElasticLoadBalancingV2::TargetGroup':
    | 'TargetGroupArn'
    | 'LoadBalancerArns'
    | 'TargetGroupFullName'
    | 'TargetGroupName';
  'AWS::ImageBuilder::ContainerRecipe': 'Arn' | 'Name';
  'AWS::RoboMaker::Robot': 'Arn';
  'AWS::SSM::Parameter': 'Type' | 'Value';
  'AWS::Inspector::AssessmentTemplate': 'Arn';
  'AWS::AppMesh::Mesh': 'Uid' | 'MeshName' | 'MeshOwner' | 'ResourceOwner' | 'Arn';
  'AWS::SSM::ResourceDataSync': 'SyncName';
  'AWS::DynamoDB::Table': 'Arn' | 'StreamArn';
  'AWS::EC2::EC2Fleet': 'FleetId';
  'AWS::CertificateManager::Account': 'AccountId';
  'AWS::ImageBuilder::ImageRecipe': 'Arn' | 'Name';
  'AWS::Chatbot::SlackChannelConfiguration': 'Arn';
  'AWS::AppStream::AppBlock': 'CreatedTime' | 'Arn';
  'AWS::IVS::RecordingConfiguration': 'State' | 'Arn';
  'AWS::AutoScaling::AutoScalingGroup':
    | 'LaunchConfigurationName'
    | 'LaunchTemplateSpecification'
    | 'MixedInstancesPolicy'
    | 'PlacementGroup'
    | 'VPCZoneIdentifier';
  'AWS::QuickSight::Theme':
    | 'Version.Configuration.Typography'
    | 'Version.Status'
    | 'Version.BaseThemeId'
    | 'CreatedTime'
    | 'Version.Configuration'
    | 'Version.Configuration.DataColorPalette'
    | 'LastUpdatedTime'
    | 'Version.Configuration.UIColorPalette'
    | 'Version.VersionNumber'
    | 'Version.Arn'
    | 'Version.Errors'
    | 'Version.Description'
    | 'Version.CreatedTime'
    | 'Type'
    | 'Version'
    | 'Arn'
    | 'Version.Configuration.Sheet';
  'AWS::IVSChat::LoggingConfiguration': 'State' | 'Id' | 'Arn';
  'AWS::EC2::EnclaveCertificateIamRoleAssociation':
    | 'EncryptionKmsKeyId'
    | 'CertificateS3BucketName'
    | 'CertificateS3ObjectKey';
  'AWS::ServiceDiscovery::PublicDnsNamespace': 'HostedZoneId' | 'Id' | 'Arn';
  'AWS::EC2::TransitGatewayConnect':
    | 'TransitGatewayId'
    | 'State'
    | 'CreationTime'
    | 'TransitGatewayAttachmentId';
  'AWS::Config::StoredQuery': 'QueryArn' | 'QueryId';
  'AWS::MediaPackage::PackagingConfiguration': 'Arn';
  'AWS::DMS::ReplicationInstance':
    | 'ReplicationInstancePublicIpAddresses'
    | 'ReplicationInstancePrivateIpAddresses';
  'AWS::AutoScaling::ScheduledAction': 'ScheduledActionName';
  'AWS::EC2::RouteTable': 'RouteTableId';
  'AWS::GlobalAccelerator::Accelerator':
    | 'Ipv4Addresses'
    | 'DnsName'
    | 'DualStackDnsName'
    | 'AcceleratorArn'
    | 'Ipv6Addresses';
  'AWS::AccessAnalyzer::Analyzer': 'Arn';
  'AWS::Lightsail::Instance':
    | 'SshKeyName'
    | 'Networking.MonthlyTransfer.GbPerMonthAllocated'
    | 'Hardware.CpuCount'
    | 'IsStaticIp'
    | 'PrivateIpAddress'
    | 'UserName'
    | 'ResourceType'
    | 'Location.RegionName'
    | 'PublicIpAddress'
    | 'Location.AvailabilityZone'
    | 'State.Code'
    | 'SupportCode'
    | 'State.Name'
    | 'InstanceArn'
    | 'Hardware.RamSizeInGb';
  'AWS::VpcLattice::Service':
    | 'Status'
    | 'LastUpdatedAt'
    | 'CreatedAt'
    | 'DnsEntry.HostedZoneId'
    | 'Id'
    | 'Arn'
    | 'DnsEntry.DomainName';
  'AWS::Route53::CidrCollection': 'Id' | 'Arn';
  'AWS::MemoryDB::User': 'Status' | 'Arn';
  'AWS::MediaPackage::Asset': 'CreatedAt' | 'Arn';
  'AWS::ApiGatewayV2::Route': 'RouteId';
  'AWS::SageMaker::Workteam': 'WorkteamName';
  'AWS::EC2::TransitGateway': 'Id' | 'TransitGatewayArn';
  'AWS::SQS::Queue': 'Arn' | 'QueueName' | 'QueueUrl';
  'AWS::EC2::CapacityReservationFleet': 'CapacityReservationFleetId';
  'AWS::StepFunctions::Activity': 'Arn' | 'Name';
  'AWS::CloudFront::KeyGroup': 'LastModifiedTime' | 'Id';
  'AWS::CodeStarConnections::Connection': 'ConnectionArn' | 'ConnectionStatus' | 'OwnerAccountId';
  'AWS::Connect::UserHierarchyGroup': 'UserHierarchyGroupArn';
  'AWS::Glue::SchemaVersion': 'VersionId';
  'AWS::EC2::Volume': 'VolumeId';
  'AWS::Budgets::BudgetsAction': 'ActionId';
  'AWS::S3::AccessPoint': 'Alias' | 'Arn' | 'NetworkOrigin' | 'Name';
  'AWS::EFS::MountTarget': 'IpAddress' | 'Id';
  'AWS::SageMaker::NotebookInstanceLifecycleConfig': 'NotebookInstanceLifecycleConfigName';
  'AWS::MediaConnect::FlowSource': 'IngestIp' | 'SourceArn' | 'SourceIngestPort';
  'AWS::ApiGateway::Deployment': 'DeploymentId';
  'AWS::KMS::Key': 'KeyId' | 'Arn';
  'AWS::NimbleStudio::StreamingImage':
    | 'Owner'
    | 'Platform'
    | 'EncryptionConfiguration'
    | 'EulaIds'
    | 'EncryptionConfiguration.KeyArn'
    | 'EncryptionConfiguration.KeyType'
    | 'StreamingImageId';
  'AWS::CustomerProfiles::Domain': 'LastUpdatedAt' | 'CreatedAt';
  'AWS::ApplicationInsights::Application': 'ApplicationARN';
  'AWS::Lambda::EventSourceMapping': 'Id';
  'AWS::ApiGateway::Authorizer': 'AuthorizerId';
  'AWS::EC2::LocalGatewayRoute': 'Type' | 'State';
  'AWS::QLDB::Stream': 'Id' | 'Arn';
  'AWS::Evidently::Launch': 'Arn';
  'AWS::EC2::TransitGatewayVpcAttachment': 'Id';
  'AWS::GameLift::Fleet': 'FleetId';
  'AWS::AppMesh::GatewayRoute':
    | 'Uid'
    | 'MeshName'
    | 'VirtualGatewayName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'GatewayRouteName'
    | 'Arn';
  'AWS::ElastiCache::User': 'Status' | 'Arn';
  'AWS::SageMaker::UserProfile': 'UserProfileArn';
  'AWS::EC2::IPAMAllocation': 'IpamPoolAllocationId';
  'AWS::NetworkManager::SiteToSiteVpnAttachment':
    | 'ProposedSegmentChange'
    | 'ProposedSegmentChange.Tags'
    | 'AttachmentType'
    | 'SegmentName'
    | 'CreatedAt'
    | 'UpdatedAt'
    | 'AttachmentId'
    | 'CoreNetworkArn'
    | 'ResourceArn'
    | 'ProposedSegmentChange.SegmentName'
    | 'State'
    | 'ProposedSegmentChange.AttachmentPolicyRuleNumber'
    | 'OwnerAccountId'
    | 'EdgeLocation'
    | 'AttachmentPolicyRuleNumber';
  'AWS::IoTWireless::NetworkAnalyzerConfiguration': 'Arn';
  'AWS::M2::Environment': 'EnvironmentId' | 'EnvironmentArn';
  'AWS::ElasticLoadBalancing::LoadBalancer':
    | 'CanonicalHostedZoneName'
    | 'CanonicalHostedZoneNameID'
    | 'DNSName'
    | 'SourceSecurityGroup.GroupName'
    | 'SourceSecurityGroup.OwnerAlias';
  'AWS::IoT::JobTemplate': 'Arn';
  'AWS::Evidently::Experiment': 'Arn';
  'AWS::CodeArtifact::Repository': 'DomainName' | 'Arn' | 'DomainOwner' | 'Name';
  'AWS::Forecast::Dataset': 'Arn';
  'AWS::DataSync::LocationFSxLustre': 'LocationUri' | 'LocationArn';
  'AWS::SageMaker::ModelExplainabilityJobDefinition': 'JobDefinitionArn' | 'CreationTime';
  'AWS::MediaPackage::PackagingGroup': 'DomainName' | 'Arn';
  'AWS::EC2::FlowLog': 'Id';
  'AWS::Greengrass::ResourceDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::Lex::ResourcePolicy': 'Id' | 'RevisionId';
  'AWS::IAM::AccessKey': 'SecretAccessKey';
  'AWS::GameLift::MatchmakingConfiguration': 'Arn' | 'Name';
  'AWS::AppIntegrations::DataIntegration': 'DataIntegrationArn' | 'Id';
  'AWS::AppStream::Application': 'CreatedTime' | 'Arn';
  'AWS::CodeBuild::Project': 'Arn';
  'AWS::S3ObjectLambda::AccessPoint':
    | 'CreationDate'
    | 'PublicAccessBlockConfiguration'
    | 'PublicAccessBlockConfiguration.BlockPublicAcls'
    | 'PolicyStatus.IsPublic'
    | 'Alias'
    | 'Alias.Value'
    | 'PolicyStatus'
    | 'PublicAccessBlockConfiguration.IgnorePublicAcls'
    | 'PublicAccessBlockConfiguration.RestrictPublicBuckets'
    | 'PublicAccessBlockConfiguration.BlockPublicPolicy'
    | 'Arn'
    | 'Alias.Status';
  'AWS::NetworkFirewall::RuleGroup': 'RuleGroupId' | 'RuleGroupArn';
  'AWS::ElasticLoadBalancingV2::Listener': 'ListenerArn';
  'AWS::CloudFront::OriginAccessControl': 'Id';
  'AWS::SageMaker::EndpointConfig': 'EndpointConfigName';
  'AWS::Events::Connection': 'SecretArn' | 'Arn';
  'AWS::Greengrass::DeviceDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::MemoryDB::SubnetGroup': 'ARN';
  'AWS::DataSync::LocationFSxWindows': 'LocationUri' | 'LocationArn';
  'AWS::MediaConnect::FlowVpcInterface': 'NetworkInterfaceIds';
  'AWS::Config::ConfigurationAggregator': 'ConfigurationAggregatorArn';
  'AWS::DataSync::LocationS3': 'LocationUri' | 'LocationArn';
  'AWS::Location::Map': 'CreateTime' | 'UpdateTime' | 'Arn' | 'MapArn' | 'DataSource';
  'AWS::Rekognition::Project': 'Arn';
  'AWS::CloudTrail::Trail': 'SnsTopicArn' | 'Arn';
  'AWS::DocDB::DBInstance': 'Endpoint' | 'Port';
  'AWS::ServiceCatalogAppRegistry::Application': 'Id' | 'Arn';
  'AWS::IoT::RoleAlias': 'RoleAliasArn';
  'AWS::Backup::ReportPlan': 'ReportPlanArn';
  'AWS::AmplifyUIBuilder::Component': 'Id';
  'AWS::RoboMaker::SimulationApplication': 'CurrentRevisionId' | 'Arn';
  'AWS::Batch::SchedulingPolicy': 'Arn';
  'AWS::EventSchemas::Discoverer': 'DiscovererArn' | 'DiscovererId' | 'CrossAccount';
  'AWS::Synthetics::Group': 'Id';
  'AWS::CloudFront::CloudFrontOriginAccessIdentity': 'S3CanonicalUserId' | 'Id';
  'AWS::SageMaker::Endpoint': 'EndpointName';
  'AWS::AppSync::DomainName': 'AppSyncDomainName' | 'DomainName' | 'HostedZoneId';
  'AWS::Connect::Rule': 'RuleArn';
  'AWS::EC2::Subnet':
    | 'VpcId'
    | 'NetworkAclAssociationId'
    | 'OutpostArn'
    | 'AvailabilityZone'
    | 'SubnetId'
    | 'Ipv6CidrBlocks';
  'AWS::SystemsManagerSAP::Application': 'Arn';
  'AWS::EC2::CarrierGateway': 'OwnerId' | 'State' | 'CarrierGatewayId';
  'AWS::EC2::Instance':
    | 'AvailabilityZone'
    | 'PrivateDnsName'
    | 'PrivateIp'
    | 'PublicDnsName'
    | 'PublicIp';
  'AWS::Config::AggregationAuthorization': 'AggregationAuthorizationArn';
  'AWS::FIS::ExperimentTemplate': 'Id';
  'AWS::AppMesh::VirtualGateway':
    | 'Uid'
    | 'VirtualGatewayName'
    | 'MeshName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'Arn';
  'AWS::DevOpsGuru::NotificationChannel': 'Id';
  'AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation':
    | 'OwnerId'
    | 'LocalGatewayId'
    | 'State'
    | 'LocalGatewayRouteTableVirtualInterfaceGroupAssociationId'
    | 'LocalGatewayRouteTableArn';
  'AWS::AuditManager::Assessment': 'AssessmentId' | 'CreationTime' | 'Arn';
  'AWS::SageMaker::ModelPackage': 'ModelPackageStatus' | 'CreationTime' | 'ModelPackageArn';
  'AWS::Pipes::Pipe': 'StateReason' | 'CurrentState' | 'CreationTime' | 'LastModifiedTime' | 'Arn';
  'AWS::KinesisVideo::SignalingChannel': 'Arn';
  'AWS::Organizations::OrganizationalUnit': 'Id' | 'Arn';
  'AWS::EC2::IPAMPool':
    | 'IpamPoolId'
    | 'IpamArn'
    | 'PoolDepth'
    | 'State'
    | 'IpamScopeArn'
    | 'IpamScopeType'
    | 'Arn'
    | 'StateMessage';
  'AWS::OpsWorks::Instance':
    | 'AvailabilityZone'
    | 'PrivateDnsName'
    | 'PrivateIp'
    | 'PublicDnsName'
    | 'PublicIp';
  'AWS::Redshift::EventSubscription':
    | 'Status'
    | 'CustSubscriptionId'
    | 'EventCategoriesList'
    | 'SourceIdsList'
    | 'SubscriptionCreationTime'
    | 'CustomerAwsId';
  'AWS::ManagedBlockchain::Node': 'MemberId' | 'NodeId' | 'Arn' | 'NetworkId';
  'AWS::VpcLattice::TargetGroup': 'Status' | 'LastUpdatedAt' | 'CreatedAt' | 'Id' | 'Arn';
  'AWS::Personalize::Dataset': 'DatasetArn';
  'AWS::Lambda::Version': 'Version';
  'AWS::DataSync::Task':
    | 'Status'
    | 'SourceNetworkInterfaceArns'
    | 'DestinationNetworkInterfaceArns'
    | 'TaskArn';
  'AWS::EMR::Studio': 'Arn' | 'StudioId' | 'Url';
  'AWS::DataSync::LocationObjectStorage': 'LocationUri' | 'LocationArn';
  'AWS::IVS::StreamKey': 'Value' | 'Arn';
  'AWS::DLM::LifecyclePolicy': 'Arn';
  'AWS::Lightsail::Alarm': 'AlarmArn' | 'State';
  'AWS::RDS::DBInstance':
    | 'DBSystemId'
    | 'Endpoint.Address'
    | 'DBInstanceArn'
    | 'CertificateDetails.ValidTill'
    | 'CertificateDetails.CAIdentifier'
    | 'Endpoint.Port'
    | 'Endpoint.HostedZoneId'
    | 'DbiResourceId'
    | 'MasterUserSecret.SecretArn';
  'AWS::VpcLattice::Listener': 'Id' | 'ServiceArn' | 'Arn' | 'ServiceId';
  'AWS::ServiceDiscovery::HttpNamespace': 'Id' | 'Arn';
  'AWS::SageMaker::CodeRepository': 'CodeRepositoryName';
  'AWS::Cognito::UserPoolClient': 'ClientSecret' | 'Name';
  'AWS::EC2::LocalGatewayRouteTable':
    | 'OwnerId'
    | 'State'
    | 'OutpostArn'
    | 'LocalGatewayRouteTableId'
    | 'LocalGatewayRouteTableArn';
  'AWS::AppConfig::Extension': 'Id' | 'Arn' | 'VersionNumber';
  'AWS::EC2::NetworkInsightsPath':
    | 'SourceArn'
    | 'NetworkInsightsPathId'
    | 'CreatedDate'
    | 'NetworkInsightsPathArn'
    | 'DestinationArn';
  'AWS::ApiGateway::ClientCertificate': 'ClientCertificateId';
  'AWS::RefactorSpaces::Route': 'RouteIdentifier' | 'Arn' | 'PathResourceToId';
  'AWS::IAM::OIDCProvider': 'Arn';
  'AWS::Evidently::Project': 'Arn';
  'AWS::Wisdom::AssistantAssociation':
    | 'AssistantAssociationArn'
    | 'AssistantArn'
    | 'AssistantAssociationId';
  'AWS::Lambda::CodeSigningConfig': 'CodeSigningConfigId' | 'CodeSigningConfigArn';
  'AWS::RedshiftServerless::Namespace':
    | 'Namespace.LogExports'
    | 'Namespace.NamespaceName'
    | 'Namespace.CreationDate'
    | 'Namespace.Status'
    | 'Namespace.AdminUsername'
    | 'Namespace.KmsKeyId'
    | 'Namespace.DbName'
    | 'Namespace.IamRoles'
    | 'Namespace.NamespaceArn'
    | 'Namespace.NamespaceId'
    | 'Namespace.DefaultIamRoleArn'
    | 'Namespace';
  'AWS::QuickSight::Analysis':
    | 'Errors'
    | 'CreatedTime'
    | 'DataSetArns'
    | 'LastUpdatedTime'
    | 'Arn'
    | 'Sheets';
  'AWS::Lightsail::LoadBalancerTlsCertificate': 'Status' | 'LoadBalancerTlsCertificateArn';
  'AWS::FSx::StorageVirtualMachine': 'ResourceARN' | 'StorageVirtualMachineId' | 'UUID';
  'AWS::EC2::VPNGateway': 'VPNGatewayId';
  'AWS::IoTWireless::WirelessGateway': 'Id' | 'Arn';
  'AWS::Wisdom::Assistant': 'AssistantArn' | 'AssistantId';
  'AWS::ServiceDiscovery::PrivateDnsNamespace': 'HostedZoneId' | 'Id' | 'Arn';
  'AWS::S3Outposts::AccessPoint': 'Arn';
  'AWS::MediaPackage::OriginEndpoint': 'Arn' | 'Url';
  'AWS::EC2::VPNConnection': 'VpnConnectionId';
  'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation':
    | 'Status'
    | 'CreationTime'
    | 'Error'
    | 'Id'
    | 'ErrorMessage';
  'AWS::ManagedBlockchain::Accessor': 'Status' | 'CreationDate' | 'BillingToken' | 'Id' | 'Arn';
  'AWS::GlobalAccelerator::Listener': 'ListenerArn';
  'AWS::ServiceCatalogAppRegistry::ResourceAssociation': 'ResourceArn' | 'ApplicationArn' | 'Id';
  'AWS::AmazonMQ::Configuration': 'Revision' | 'Id' | 'Arn';
  'AWS::EventSchemas::RegistryPolicy': 'Id';
  'AWS::CloudFront::RealtimeLogConfig': 'Arn';
  'AWS::Evidently::Feature': 'Arn';
  'AWS::Route53::HealthCheck': 'HealthCheckId';
  'AWS::MediaLive::Channel': 'Arn' | 'Inputs';
  'AWS::S3Outposts::Bucket': 'Arn';
  'AWS::NetworkManager::Device': 'DeviceArn' | 'DeviceId';
  'AWS::EC2::VPCEndpointService': 'ServiceId';
  'AWS::MemoryDB::Cluster':
    | 'Status'
    | 'ClusterEndpoint.Address'
    | 'ClusterEndpoint.Port'
    | 'ParameterGroupStatus'
    | 'ARN';
  'AWS::SageMaker::ModelCard':
    | 'LastModifiedBy.UserProfileArn'
    | 'CreatedBy.DomainId'
    | 'ModelCardArn'
    | 'CreatedBy.UserProfileName'
    | 'CreationTime'
    | 'LastModifiedTime'
    | 'LastModifiedBy.DomainId'
    | 'ModelCardVersion'
    | 'ModelCardProcessingStatus'
    | 'LastModifiedBy.UserProfileName'
    | 'CreatedBy.UserProfileArn';
  'AWS::SSMContacts::Rotation': 'Arn';
  'AWS::MediaConnect::FlowOutput': 'OutputArn';
  'AWS::EC2::NetworkInsightsAccessScopeAnalysis':
    | 'Status'
    | 'StartDate'
    | 'NetworkInsightsAccessScopeAnalysisId'
    | 'NetworkInsightsAccessScopeAnalysisArn'
    | 'EndDate'
    | 'AnalyzedEniCount'
    | 'FindingsFound'
    | 'StatusMessage';
  'AWS::Transfer::Server': 'ServerId' | 'Arn';
  'AWS::Route53Resolver::ResolverConfig': 'OwnerId' | 'AutodefinedReverse' | 'Id';
  'AWS::NimbleStudio::LaunchProfile': 'LaunchProfileId';
  'AWS::AmazonMQ::Broker':
    | 'IpAddresses'
    | 'OpenWireEndpoints'
    | 'ConfigurationRevision'
    | 'StompEndpoints'
    | 'MqttEndpoints'
    | 'AmqpEndpoints'
    | 'Arn'
    | 'ConfigurationId'
    | 'WssEndpoints';
  'AWS::Lightsail::Disk':
    | 'Path'
    | 'AttachmentState'
    | 'Location.AvailabilityZone'
    | 'SupportCode'
    | 'State'
    | 'IsAttached'
    | 'ResourceType'
    | 'DiskArn'
    | 'AttachedTo'
    | 'Iops'
    | 'Location'
    | 'Location.RegionName';
  'AWS::ServiceCatalogAppRegistry::AttributeGroup': 'Id' | 'Arn';
  'AWS::AppSync::DataSource': 'DataSourceArn' | 'Name';
  'AWS::Scheduler::Schedule': 'Arn';
  'AWS::Greengrass::Group':
    | 'RoleAttachedAt'
    | 'LatestVersionArn'
    | 'Id'
    | 'Arn'
    | 'RoleArn'
    | 'Name';
  'AWS::MediaLive::Input': 'Destinations' | 'Arn' | 'Sources';
  'AWS::DataSync::LocationFSxOpenZFS': 'LocationUri' | 'LocationArn';
  'AWS::Lightsail::Container': 'ContainerArn' | 'Url';
  'AWS::AppMesh::VirtualService':
    | 'Uid'
    | 'MeshName'
    | 'MeshOwner'
    | 'ResourceOwner'
    | 'VirtualServiceName'
    | 'Arn';
  'AWS::Route53Resolver::ResolverDNSSECConfig': 'ValidationStatus' | 'OwnerId' | 'Id';
  'AWS::SES::VdmAttributes': 'VdmAttributesResourceId';
  'AWS::EC2::GatewayRouteTableAssociation': 'AssociationId';
  'AWS::Kendra::Faq': 'Id' | 'Arn';
  'AWS::AppStream::ImageBuilder': 'StreamingUrl';
  'AWS::CloudWatch::MetricStream': 'CreationDate' | 'State' | 'Arn' | 'LastUpdateDate';
  'AWS::ImageBuilder::InfrastructureConfiguration': 'Arn' | 'Name';
  'AWS::Connect::TaskTemplate': 'Arn';
  'AWS::EC2::NetworkAclEntry': 'Id';
  'AWS::Lightsail::StaticIp': 'StaticIpArn' | 'IsAttached' | 'IpAddress';
  'AWS::EKS::Addon': 'Arn';
  'AWS::AppRunner::ObservabilityConfiguration':
    | 'ObservabilityConfigurationRevision'
    | 'ObservabilityConfigurationArn'
    | 'Latest';
  'AWS::Pinpoint::SmsTemplate': 'Arn';
  'AWS::QuickSight::Template':
    | 'Version.Status'
    | 'CreatedTime'
    | 'Version.DataSetConfigurations'
    | 'LastUpdatedTime'
    | 'Version.VersionNumber'
    | 'Version.Sheets'
    | 'Version.ThemeArn'
    | 'Version.Errors'
    | 'Version.CreatedTime'
    | 'Version.Description'
    | 'Version'
    | 'Arn'
    | 'Version.SourceEntityArn';
  'AWS::ApiGatewayV2::VpcLink': 'VpcLinkId';
  'AWS::Glue::Schema': 'InitialSchemaVersionId' | 'Arn';
  'AWS::QuickSight::DataSource': 'Status' | 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::EC2::SpotFleet': 'Id';
  'AWS::RolesAnywhere::CRL': 'CrlId';
  'AWS::MSK::ServerlessCluster': 'Arn';
  'AWS::SageMaker::Model': 'ModelName';
  'AWS::Connect::User': 'UserArn';
  'AWS::CloudWatch::Alarm': 'Arn';
  'AWS::Backup::BackupSelection': 'BackupPlanId' | 'Id' | 'SelectionId';
  'AWS::Pinpoint::Segment': 'SegmentId' | 'Arn';
  'AWS::Route53Resolver::FirewallDomainList':
    | 'Status'
    | 'CreationTime'
    | 'ManagedOwnerName'
    | 'ModificationTime'
    | 'Id'
    | 'Arn'
    | 'CreatorRequestId'
    | 'StatusMessage'
    | 'DomainCount';
  'AWS::MediaConvert::Preset': 'Arn' | 'Name';
  'AWS::LicenseManager::Grant': 'GrantArn' | 'Version';
  'AWS::CodeStarNotifications::NotificationRule': 'Arn';
  'AWS::IoTAnalytics::Dataset': 'Id';
  'AWS::XRay::SamplingRule': 'RuleARN';
  'AWS::IoT::ProvisioningTemplate': 'TemplateArn';
  'AWS::NetworkManager::VpcAttachment':
    | 'ProposedSegmentChange'
    | 'ProposedSegmentChange.Tags'
    | 'AttachmentType'
    | 'SegmentName'
    | 'CreatedAt'
    | 'UpdatedAt'
    | 'AttachmentId'
    | 'CoreNetworkArn'
    | 'ResourceArn'
    | 'ProposedSegmentChange.SegmentName'
    | 'State'
    | 'ProposedSegmentChange.AttachmentPolicyRuleNumber'
    | 'OwnerAccountId'
    | 'EdgeLocation'
    | 'AttachmentPolicyRuleNumber';
  'AWS::GameLift::MatchmakingRuleSet': 'Arn' | 'Name';
  'AWS::EMRServerless::Application': 'Arn' | 'ApplicationId';
  'AWS::IoTWireless::FuotaTask': 'FuotaTaskStatus' | 'LoRaWAN.StartTime' | 'Id' | 'Arn';
  'AWS::RedshiftServerless::Workgroup':
    | 'Workgroup.Endpoint'
    | 'Workgroup.Endpoint.Port'
    | 'Workgroup.SecurityGroupIds'
    | 'Workgroup.CreationDate'
    | 'Workgroup.PubliclyAccessible'
    | 'Workgroup'
    | 'Workgroup.WorkgroupArn'
    | 'Workgroup.WorkgroupName'
    | 'Workgroup.ConfigParameters'
    | 'Workgroup.Status'
    | 'Workgroup.BaseCapacity'
    | 'Workgroup.EnhancedVpcRouting'
    | 'Workgroup.WorkgroupId'
    | 'Workgroup.NamespaceName'
    | 'Workgroup.Endpoint.VpcEndpoints'
    | 'Workgroup.Endpoint.Address'
    | 'Workgroup.SubnetIds';
  'AWS::IoTWireless::Destination': 'Arn';
  'AWS::EC2::SubnetRouteTableAssociation': 'Id';
  'AWS::IAM::InstanceProfile': 'Arn';
  'AWS::IoT::Policy': 'Id' | 'Arn';
  'AWS::Batch::ComputeEnvironment': 'ComputeEnvironmentArn';
  'AWS::MediaConnect::Flow':
    | 'FlowAvailabilityZone'
    | 'Source.SourceIngestPort'
    | 'Source.IngestIp'
    | 'Source.SourceArn'
    | 'FlowArn';
  'AWS::AppFlow::Flow': 'FlowArn';
  'AWS::NimbleStudio::StudioComponent': 'StudioComponentId';
  'AWS::GameLift::GameSessionQueue': 'Arn' | 'Name';
  'AWS::GlobalAccelerator::EndpointGroup': 'EndpointGroupArn';
  'AWS::IoT1Click::Device': 'DeviceId' | 'Enabled' | 'Arn';
  'AWS::Macie::CustomDataIdentifier': 'Id' | 'Arn';
  'AWS::ECS::TaskSet': 'Id';
  'AWS::WAFv2::RuleGroup': 'Id' | 'Arn' | 'LabelNamespace';
  'AWS::CloudFormation::Publisher':
    | 'PublisherId'
    | 'IdentityProvider'
    | 'PublisherProfile'
    | 'PublisherStatus';
  'AWS::RefactorSpaces::Application':
    | 'NlbArn'
    | 'ProxyUrl'
    | 'NlbName'
    | 'StageName'
    | 'ApiGatewayId'
    | 'VpcLinkId'
    | 'ApplicationIdentifier'
    | 'Arn';
  'AWS::Lex::BotVersion': 'BotVersion';
  'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation':
    | 'ApplicationArn'
    | 'AttributeGroupArn'
    | 'Id';
  'AWS::NimbleStudio::Studio': 'HomeRegion' | 'StudioUrl' | 'SsoClientId' | 'StudioId';
  'AWS::AppFlow::ConnectorProfile': 'CredentialsArn' | 'ConnectorProfileArn';
  'AWS::SageMaker::App': 'AppArn';
  'AWS::SageMaker::Domain':
    | 'HomeEfsFileSystemId'
    | 'DomainId'
    | 'SecurityGroupIdForDomainBoundary'
    | 'SingleSignOnManagedApplicationInstanceId'
    | 'DomainArn'
    | 'Url';
  'AWS::Route53Resolver::ResolverRule':
    | 'ResolverEndpointId'
    | 'DomainName'
    | 'ResolverRuleId'
    | 'Arn'
    | 'TargetIps'
    | 'Name';
  'AWS::Comprehend::Flywheel': 'Arn';
  'AWS::EC2::SubnetNetworkAclAssociation': 'AssociationId';
  'AWS::SageMaker::Project':
    | 'ProjectArn'
    | 'ProjectStatus'
    | 'ServiceCatalogProvisionedProductDetails.ProvisionedProductStatusMessage'
    | 'ServiceCatalogProvisionedProductDetails.ProvisionedProductId'
    | 'ProjectId'
    | 'CreationTime'
    | 'ServiceCatalogProvisionedProductDetails';
  'AWS::Amplify::Branch': 'BranchName' | 'Arn';
  'AWS::NetworkManager::CoreNetwork':
    | 'CoreNetworkId'
    | 'State'
    | 'CreatedAt'
    | 'Segments'
    | 'OwnerAccount'
    | 'Edges'
    | 'CoreNetworkArn';
  'AWS::VpcLattice::ServiceNetworkServiceAssociation':
    | 'Status'
    | 'ServiceNetworkId'
    | 'ServiceName'
    | 'CreatedAt'
    | 'DnsEntry.HostedZoneId'
    | 'ServiceNetworkName'
    | 'ServiceArn'
    | 'Id'
    | 'Arn'
    | 'DnsEntry.DomainName'
    | 'ServiceNetworkArn'
    | 'ServiceId';
  'AWS::ResourceExplorer2::DefaultViewAssociation': 'AssociatedAwsPrincipal';
  'AWS::SageMaker::InferenceExperiment':
    | 'Status'
    | 'EndpointMetadata.EndpointConfigName'
    | 'CreationTime'
    | 'LastModifiedTime'
    | 'EndpointMetadata.EndpointName'
    | 'Arn'
    | 'EndpointMetadata.EndpointStatus'
    | 'EndpointMetadata';
  'AWS::AppStream::Entitlement': 'CreatedTime' | 'LastModifiedTime';
  'AWS::CloudFront::ResponseHeadersPolicy': 'LastModifiedTime' | 'Id';
  'AWS::IoT::ResourceSpecificLogging': 'TargetId';
  'AWS::CloudFormation::WaitCondition': 'Data';
  'AWS::Signer::SigningProfile': 'ProfileVersionArn' | 'ProfileName' | 'Arn' | 'ProfileVersion';
  'AWS::IoTSiteWise::Gateway': 'GatewayId';
  'AWS::EC2::KeyPair': 'KeyPairId' | 'KeyFingerprint';
  'AWS::ResilienceHub::ResiliencyPolicy': 'PolicyArn';
  'AWS::EC2::SecurityGroup': 'GroupId' | 'VpcId';
  'AWS::CloudFront::OriginRequestPolicy': 'LastModifiedTime' | 'Id';
  'AWS::SSO::PermissionSet': 'PermissionSetArn';
  'AWS::InspectorV2::Filter': 'Arn';
  'AWS::Pinpoint::PushTemplate': 'Arn';
  'AWS::ApiGateway::RestApi': 'RootResourceId' | 'RestApiId';
  'AWS::CloudFront::PublicKey': 'CreatedTime' | 'Id';
  'AWS::Events::EventBus': 'Policy' | 'Arn' | 'Name';
  'AWS::EC2::VPC':
    | 'VpcId'
    | 'CidrBlockAssociations'
    | 'CidrBlock'
    | 'DefaultNetworkAcl'
    | 'Ipv6CidrBlocks'
    | 'DefaultSecurityGroup';
  'AWS::CloudFront::ContinuousDeploymentPolicy': 'LastModifiedTime' | 'Id';
  'AWS::NetworkManager::GlobalNetwork': 'Id' | 'Arn';
  'AWS::EFS::FileSystem': 'FileSystemId' | 'Arn';
  'AWS::IdentityStore::GroupMembership': 'MembershipId';
  'AWS::IoT::ScheduledAudit': 'ScheduledAuditArn';
  'AWS::RDS::DBParameterGroup': 'DBParameterGroupName';
  'AWS::Route53Resolver::FirewallRuleGroup':
    | 'RuleCount'
    | 'Status'
    | 'OwnerId'
    | 'CreationTime'
    | 'ShareStatus'
    | 'ModificationTime'
    | 'Id'
    | 'Arn'
    | 'CreatorRequestId'
    | 'StatusMessage';
  'AWS::IoTAnalytics::Pipeline': 'Id';
  'AWS::ResourceGroups::Group': 'Arn';
  'AWS::FMS::Policy': 'Id' | 'Arn';
  'AWS::Transfer::User': 'ServerId' | 'UserName' | 'Arn';
  'AWS::EC2::NetworkAcl': 'Id';
  'AWS::ImageBuilder::DistributionConfiguration': 'Arn' | 'Name';
  'AWS::RDS::DBProxy': 'Endpoint' | 'VpcId' | 'DBProxyArn';
  'AWS::QuickSight::DataSet':
    | 'CreatedTime'
    | 'LastUpdatedTime'
    | 'OutputColumns'
    | 'ConsumedSpiceCapacityInBytes'
    | 'Arn';
  'AWS::EC2::VPNGatewayRoutePropagation': 'Id';
  'AWS::VoiceID::Domain': 'DomainId';
  'AWS::ApiGatewayV2::Authorizer': 'AuthorizerId';
  'AWS::Transfer::Agreement': 'AgreementId' | 'Arn';
  'AWS::SageMaker::Image': 'ImageArn';
  'AWS::Rekognition::StreamProcessor': 'Status' | 'Arn' | 'StatusMessage';
  'AWS::FSx::Snapshot': 'ResourceARN';
  'AWS::CloudFormation::HookDefaultVersion': 'Arn';
  'AWS::MSK::Configuration': 'Arn';
  'AWS::Connect::ContactFlowModule': 'ContactFlowModuleArn' | 'Status';
  'AWS::Glue::Registry': 'Arn';
  'AWS::DevOpsGuru::ResourceCollection': 'ResourceCollectionType';
  'AWS::KafkaConnect::Connector': 'ConnectorArn';
  'AWS::Route53Resolver::ResolverRuleAssociation':
    | 'VPCId'
    | 'ResolverRuleId'
    | 'ResolverRuleAssociationId'
    | 'Name';
  'AWS::Greengrass::SubscriptionDefinition': 'LatestVersionArn' | 'Id' | 'Arn' | 'Name';
  'AWS::ApiGateway::VpcLink': 'VpcLinkId';
  'AWS::EC2::TransitGatewayPeeringAttachment':
    | 'Status'
    | 'State'
    | 'CreationTime'
    | 'Status.Message'
    | 'Status.Code'
    | 'TransitGatewayAttachmentId';
  'AWS::S3::MultiRegionAccessPointPolicy': 'PolicyStatus.IsPublic' | 'PolicyStatus';
  'AWS::CloudTrail::EventDataStore':
    | 'Status'
    | 'UpdatedTimestamp'
    | 'EventDataStoreArn'
    | 'CreatedTimestamp';
  'AWS::Organizations::Policy': 'Id' | 'Arn' | 'AwsManaged';
  'AWS::DirectoryService::SimpleAD': 'DirectoryId' | 'Alias' | 'DnsIpAddresses';
  'AWS::EC2::Host': 'HostId';
  'AWS::NetworkManager::Site': 'SiteId' | 'SiteArn';
  'AWS::Cognito::UserPoolDomain': 'CloudFrontDistribution';
  'AWS::OpenSearchServerless::Collection':
    | 'CollectionEndpoint'
    | 'Id'
    | 'Arn'
    | 'DashboardEndpoint';
  'AWS::ElasticBeanstalk::ApplicationVersion': 'Id';
  'AWS::EC2::VPCEndpoint': 'CreationTimestamp' | 'NetworkInterfaceIds' | 'Id' | 'DnsEntries';
  'AWS::Redshift::EndpointAuthorization':
    | 'Status'
    | 'Grantee'
    | 'Grantor'
    | 'EndpointCount'
    | 'AuthorizeTime'
    | 'AllowedVPCs'
    | 'AllowedAllVPCs'
    | 'ClusterStatus';
  'AWS::IoT::TopicRuleDestination': 'StatusReason' | 'Arn';
  'AWS::IoTWireless::TaskDefinition': 'Id' | 'Arn';
  'AWS::Organizations::Account':
    | 'JoinedMethod'
    | 'Status'
    | 'JoinedTimestamp'
    | 'AccountId'
    | 'Arn';
  'AWS::DataSync::LocationSMB': 'LocationUri' | 'LocationArn';
  'AWS::EFS::AccessPoint': 'AccessPointId' | 'Arn';
  'AWS::AppRunner::VpcIngressConnection': 'Status' | 'DomainName' | 'VpcIngressConnectionArn';
  'AWS::RDS::DBProxyTargetGroup': 'TargetGroupArn';
  'AWS::Pinpoint::App': 'Arn';
  'AWS::AppRunner::Service': 'Status' | 'ServiceUrl' | 'ServiceArn' | 'ServiceId';
  'AWS::EKS::IdentityProviderConfig': 'IdentityProviderConfigArn';
  'AWS::Logs::QueryDefinition': 'QueryDefinitionId';
  'AWS::SES::EmailIdentity':
    | 'DkimDNSTokenValue1'
    | 'DkimDNSTokenName2'
    | 'DkimDNSTokenName3'
    | 'DkimDNSTokenName1'
    | 'DkimDNSTokenValue2'
    | 'DkimDNSTokenValue3';
  'AWS::IoT::Certificate': 'Id' | 'Arn';
  'AWS::DynamoDB::GlobalTable': 'TableId' | 'Arn' | 'StreamArn';
  'AWS::SSM::Association': 'AssociationId';
  'AWS::EC2::IPAMResourceDiscoveryAssociation':
    | 'IsDefault'
    | 'ResourceDiscoveryStatus'
    | 'OwnerId'
    | 'IpamArn'
    | 'IpamResourceDiscoveryAssociationId'
    | 'IpamResourceDiscoveryAssociationArn'
    | 'State'
    | 'IpamRegion';
  'AWS::Athena::NamedQuery': 'NamedQueryId';
  'AWS::CloudFormation::ModuleVersion':
    | 'TimeCreated'
    | 'VersionId'
    | 'Description'
    | 'Schema'
    | 'IsDefaultVersion'
    | 'Visibility'
    | 'Arn'
    | 'DocumentationUrl';
  'AWS::AmplifyUIBuilder::Theme': 'Id';
  'AWS::Inspector::AssessmentTarget': 'Arn';
  'AWS::EventSchemas::Registry': 'RegistryName' | 'RegistryArn';
  'AWS::Route53Resolver::ResolverEndpoint':
    | 'ResolverEndpointId'
    | 'IpAddressCount'
    | 'OutpostArn'
    | 'PreferredInstanceType'
    | 'ResolverEndpointType'
    | 'Arn'
    | 'Direction'
    | 'HostVPCId'
    | 'Name';
  'AWS::ImageBuilder::Image': 'ImageId' | 'ImageUri' | 'Arn' | 'Name';
  'AWS::VpcLattice::Rule': 'Id' | 'Arn';
  'AWS::RDS::DBProxyEndpoint': 'DBProxyEndpointArn' | 'IsDefault' | 'VpcId' | 'Endpoint';
  'AWS::OpenSearchService::Domain':
    | 'ServiceSoftwareOptions.OptionalDeployment'
    | 'ServiceSoftwareOptions.Description'
    | 'ServiceSoftwareOptions.UpdateStatus'
    | 'ServiceSoftwareOptions.AutomatedUpdateDate'
    | 'ServiceSoftwareOptions.CurrentVersion'
    | 'DomainEndpoints'
    | 'DomainArn'
    | 'ServiceSoftwareOptions.UpdateAvailable'
    | 'DomainEndpoint'
    | 'ServiceSoftwareOptions'
    | 'AdvancedSecurityOptions.AnonymousAuthDisableDate'
    | 'ServiceSoftwareOptions.NewVersion'
    | 'Id'
    | 'Arn'
    | 'ServiceSoftwareOptions.Cancellable';
  'AWS::Location::PlaceIndex': 'IndexArn' | 'CreateTime' | 'UpdateTime' | 'Arn';
  'AWS::LookoutEquipment::InferenceScheduler': 'InferenceSchedulerArn';
  'AWS::GroundStation::Config': 'Type' | 'Id' | 'Arn';
  'AWS::GroundStation::DataflowEndpointGroup': 'Id' | 'Arn';
  'AWS::GroundStation::MissionProfile': 'Region' | 'Id' | 'Arn';
  'AWS::HealthLake::FHIRDatastore':
    | 'DatastoreArn'
    | 'CreatedAt.Nanos'
    | 'DatastoreId'
    | 'CreatedAt'
    | 'DatastoreStatus'
    | 'DatastoreEndpoint'
    | 'CreatedAt.Seconds';
  'AWS::PinpointEmail::Identity':
    | 'IdentityDNSRecordName3'
    | 'IdentityDNSRecordName1'
    | 'IdentityDNSRecordName2'
    | 'IdentityDNSRecordValue3'
    | 'IdentityDNSRecordValue2'
    | 'IdentityDNSRecordValue1';
  'AWS::FraudDetector::EntityType': 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::IoTTwinMaker::SyncJob': 'CreationDateTime' | 'State' | 'UpdateDateTime' | 'Arn';
  'AWS::Omics::ReferenceStore': 'ReferenceStoreId' | 'CreationTime' | 'Arn';
  'AWS::Omics::RunGroup': 'CreationTime' | 'Id' | 'Arn';
  'AWS::FraudDetector::Outcome': 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::Omics::SequenceStore': 'SequenceStoreId' | 'CreationTime' | 'Arn';
  'AWS::FraudDetector::Detector':
    | 'CreatedTime'
    | 'EventType.Arn'
    | 'EventType.LastUpdatedTime'
    | 'LastUpdatedTime'
    | 'EventType.CreatedTime'
    | 'Arn'
    | 'DetectorVersionId';
  'AWS::Panorama::Package':
    | 'CreatedTime'
    | 'StorageLocation.ManifestPrefixLocation'
    | 'StorageLocation.GeneratedPrefixLocation'
    | 'StorageLocation.BinaryPrefixLocation'
    | 'PackageId'
    | 'Arn'
    | 'StorageLocation.Bucket'
    | 'StorageLocation.RepoPrefixLocation';
  'AWS::Omics::VariantStore':
    | 'Status'
    | 'CreationTime'
    | 'UpdateTime'
    | 'Id'
    | 'StoreSizeBytes'
    | 'StatusMessage'
    | 'StoreArn';
  'AWS::FraudDetector::Label': 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::IoTTwinMaker::Workspace': 'CreationDateTime' | 'UpdateDateTime' | 'Arn';
  'AWS::FraudDetector::Variable': 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::IoTTwinMaker::Scene': 'CreationDateTime' | 'UpdateDateTime' | 'Arn';
  'AWS::IoTTwinMaker::ComponentType':
    | 'Status'
    | 'CreationDateTime'
    | 'Status.Error.Message'
    | 'IsSchemaInitialized'
    | 'Status.State'
    | 'Status.Error'
    | 'UpdateDateTime'
    | 'Status.Error.Code'
    | 'Arn'
    | 'IsAbstract';
  'AWS::IoTTwinMaker::Entity':
    | 'Status'
    | 'CreationDateTime'
    | 'Status.Error.Message'
    | 'HasChildEntities'
    | 'Status.State'
    | 'Status.Error'
    | 'UpdateDateTime'
    | 'Status.Error.Code'
    | 'Arn';
  'AWS::FraudDetector::EventType': 'CreatedTime' | 'LastUpdatedTime' | 'Arn';
  'AWS::Omics::AnnotationStore':
    | 'Status'
    | 'CreationTime'
    | 'UpdateTime'
    | 'Id'
    | 'StoreSizeBytes'
    | 'StatusMessage'
    | 'StoreArn';
  'AWS::Panorama::PackageVersion':
    | 'Status'
    | 'PackageName'
    | 'StatusDescription'
    | 'PackageArn'
    | 'IsLatestPatch'
    | 'RegisteredTime';
  'AWS::Omics::Workflow': 'Status' | 'Type' | 'CreationTime' | 'Id' | 'Arn';
  'AWS::SimSpaceWeaver::Simulation': 'DescribePayload';
  'AWS::Panorama::ApplicationInstance':
    | 'DefaultRuntimeContextDeviceName'
    | 'Status'
    | 'ApplicationInstanceId'
    | 'CreatedTime'
    | 'StatusDescription'
    | 'HealthStatus'
    | 'LastUpdatedTime'
    | 'Arn';
  'AWS::ConnectCampaigns::Campaign': 'Arn';
  'AWS::FinSpace::Environment':
    | 'Status'
    | 'EnvironmentId'
    | 'EnvironmentArn'
    | 'SageMakerStudioDomainUrl'
    | 'EnvironmentUrl'
    | 'AwsAccountId'
    | 'DedicatedServiceAccountId';
  'AWS::IoTFleetWise::ModelManifest': 'LastModificationTime' | 'CreationTime' | 'Arn';
  'AWS::IoTFleetWise::DecoderManifest': 'LastModificationTime' | 'CreationTime' | 'Arn';
  'AWS::IoTFleetWise::Campaign': 'Status' | 'LastModificationTime' | 'CreationTime' | 'Arn';
  'AWS::IoTFleetWise::Fleet': 'LastModificationTime' | 'CreationTime' | 'Arn';
  'AWS::IoTFleetWise::SignalCatalog':
    | 'LastModificationTime'
    | 'NodeCounts.TotalNodes'
    | 'NodeCounts.TotalSensors'
    | 'NodeCounts.TotalAttributes'
    | 'NodeCounts.TotalBranches'
    | 'NodeCounts.TotalActuators'
    | 'CreationTime'
    | 'Arn';
  'AWS::IoTFleetWise::Vehicle': 'LastModificationTime' | 'CreationTime' | 'Arn';
  'AWS::SupportApp::AccountAlias': 'AccountAliasResourceId';
  'AWS::BillingConductor::PricingPlan': 'Size' | 'CreationTime' | 'LastModifiedTime' | 'Arn';
  'AWS::BillingConductor::CustomLineItem':
    | 'CurrencyCode'
    | 'ProductCode'
    | 'CreationTime'
    | 'LastModifiedTime'
    | 'Arn'
    | 'AssociationSize';
  'AWS::Lightsail::Distribution': 'Status' | 'DistributionArn' | 'AbleToUpdateBundle';
  'AWS::Route53RecoveryReadiness::ReadinessCheck': 'ReadinessCheckArn';
  'AWS::Route53RecoveryControl::SafetyRule': 'Status' | 'SafetyRuleArn';
  'AWS::Route53RecoveryReadiness::RecoveryGroup': 'RecoveryGroupArn';
  'AWS::Route53RecoveryReadiness::Cell': 'ParentReadinessScopes' | 'CellArn';
  'AWS::Route53RecoveryControl::Cluster': 'ClusterArn' | 'Status' | 'ClusterEndpoints';
  'AWS::Route53RecoveryControl::RoutingControl': 'Status' | 'RoutingControlArn';
  'AWS::CE::AnomalyMonitor':
    | 'LastUpdatedDate'
    | 'CreationDate'
    | 'LastEvaluatedDate'
    | 'MonitorArn'
    | 'DimensionalValueCount';
  'AWS::BillingConductor::BillingGroup':
    | 'Status'
    | 'Size'
    | 'StatusReason'
    | 'CreationTime'
    | 'LastModifiedTime'
    | 'Arn';
  'AWS::BillingConductor::PricingRule':
    | 'CreationTime'
    | 'LastModifiedTime'
    | 'AssociatedPricingPlanCount'
    | 'Arn';
  'AWS::Route53RecoveryControl::ControlPanel':
    | 'Status'
    | 'ControlPanelArn'
    | 'DefaultControlPanel'
    | 'RoutingControlCount';
  'AWS::ECR::PublicRepository': 'Arn';
  'AWS::IoTWireless::WirelessDeviceImportTask':
    | 'Status'
    | 'CreationDate'
    | 'Sidewalk.DeviceCreationFileList'
    | 'InitializedImportedDevicesCount'
    | 'StatusReason'
    | 'OnboardedImportedDevicesCount'
    | 'FailedImportedDevicesCount'
    | 'Id'
    | 'PendingImportedDevicesCount'
    | 'Arn';
  'AWS::Route53RecoveryReadiness::ResourceSet': 'ResourceSetArn';
  'AWS::IoTWireless::PartnerAccount': 'Fingerprint' | 'Arn';
  'AWS::CE::AnomalySubscription': 'AccountId' | 'SubscriptionArn';
  'AWS::DeviceFarm::TestGridProject': 'Arn';
  'AWS::DeviceFarm::VPCEConfiguration': 'Arn';
  'AWS::DeviceFarm::NetworkProfile': 'Arn';
  'AWS::DeviceFarm::DevicePool': 'Arn';
  'AWS::DeviceFarm::Project': 'Arn';
  'AWS::DeviceFarm::InstanceProfile': 'Arn';
}
