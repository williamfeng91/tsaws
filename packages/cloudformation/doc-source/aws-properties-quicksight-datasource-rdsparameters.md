# AWS::QuickSight::DataSource RdsParameters<a name="aws-properties-quicksight-datasource-rdsparameters"></a>

The parameters for Amazon RDS\.

## Syntax<a name="aws-properties-quicksight-datasource-rdsparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-rdsparameters-syntax.json"></a>

```
{
  "[Database](#cfn-quicksight-datasource-rdsparameters-database)" : String,
  "[InstanceId](#cfn-quicksight-datasource-rdsparameters-instanceid)" : String
}
```

### YAML<a name="aws-properties-quicksight-datasource-rdsparameters-syntax.yaml"></a>

```
  [Database](#cfn-quicksight-datasource-rdsparameters-database): String
  [InstanceId](#cfn-quicksight-datasource-rdsparameters-instanceid): String
```

## Properties<a name="aws-properties-quicksight-datasource-rdsparameters-properties"></a>

`Database` <a name="cfn-quicksight-datasource-rdsparameters-database"></a>
Database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InstanceId` <a name="cfn-quicksight-datasource-rdsparameters-instanceid"></a>
Instance ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
