# AWS::QuickSight::DataSource RedshiftParameters<a name="aws-properties-quicksight-datasource-redshiftparameters"></a>

The parameters for Amazon Redshift\. The `ClusterId` field can be blank if `Host` and `Port` are both set\. The `Host` and `Port` fields can be blank if the `ClusterId` field is set\.

## Syntax<a name="aws-properties-quicksight-datasource-redshiftparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-redshiftparameters-syntax.json"></a>

```
{
  "[ClusterId](#cfn-quicksight-datasource-redshiftparameters-clusterid)" : String,
  "[Database](#cfn-quicksight-datasource-redshiftparameters-database)" : String,
  "[Host](#cfn-quicksight-datasource-redshiftparameters-host)" : String,
  "[Port](#cfn-quicksight-datasource-redshiftparameters-port)" : Double
}
```

### YAML<a name="aws-properties-quicksight-datasource-redshiftparameters-syntax.yaml"></a>

```
  [ClusterId](#cfn-quicksight-datasource-redshiftparameters-clusterid): String
  [Database](#cfn-quicksight-datasource-redshiftparameters-database): String
  [Host](#cfn-quicksight-datasource-redshiftparameters-host): String
  [Port](#cfn-quicksight-datasource-redshiftparameters-port): Double
```

## Properties<a name="aws-properties-quicksight-datasource-redshiftparameters-properties"></a>

`ClusterId` <a name="cfn-quicksight-datasource-redshiftparameters-clusterid"></a>
Cluster ID\. This field can be blank if the `Host` and `Port` are provided\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Database` <a name="cfn-quicksight-datasource-redshiftparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Host` <a name="cfn-quicksight-datasource-redshiftparameters-host"></a>
Host\. This field can be blank if `ClusterId` is provided\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-quicksight-datasource-redshiftparameters-port"></a>
Port\. This field can be blank if the `ClusterId` is provided\.  
_Required_: No  
_Type_: Double  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
