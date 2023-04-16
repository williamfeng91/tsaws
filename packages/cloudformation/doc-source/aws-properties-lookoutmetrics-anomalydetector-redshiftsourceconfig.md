# AWS::LookoutMetrics::AnomalyDetector RedshiftSourceConfig<a name="aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig"></a>

Provides information about the Amazon Redshift database configuration\.

## Syntax<a name="aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig-syntax.json"></a>

```
{
  "[ClusterIdentifier](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-clusteridentifier)" : String,
  "[DatabaseHost](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasehost)" : String,
  "[DatabaseName](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasename)" : String,
  "[DatabasePort](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databaseport)" : Integer,
  "[RoleArn](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-rolearn)" : String,
  "[SecretManagerArn](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-secretmanagerarn)" : String,
  "[TableName](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-tablename)" : String,
  "[VpcConfiguration](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-vpcconfiguration)" : VpcConfiguration
}
```

### YAML<a name="aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig-syntax.yaml"></a>

```
  [ClusterIdentifier](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-clusteridentifier): String
  [DatabaseHost](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasehost): String
  [DatabaseName](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasename): String
  [DatabasePort](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databaseport): Integer
  [RoleArn](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-rolearn): String
  [SecretManagerArn](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-secretmanagerarn): String
  [TableName](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-tablename): String
  [VpcConfiguration](#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-vpcconfiguration):
    VpcConfiguration
```

## Properties<a name="aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig-properties"></a>

`ClusterIdentifier` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-clusteridentifier"></a>
A string identifying the Redshift cluster\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseHost` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasehost"></a>
The name of the database host\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseName` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasename"></a>
The Redshift database name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabasePort` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databaseport"></a>
The port number where the database can be accessed\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-rolearn"></a>
The Amazon Resource Name \(ARN\) of the role providing access to the database\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecretManagerArn` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-secretmanagerarn"></a>
The Amazon Resource Name \(ARN\) of the AWS Secrets Manager role\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TableName` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-tablename"></a>
The table name of the Redshift database\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcConfiguration` <a name="cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-vpcconfiguration"></a>
Contains information about the Amazon Virtual Private Cloud \(VPC\) configuration\.  
_Required_: Yes  
_Type_: [VpcConfiguration](aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
