# AWS::QuickSight::DataSource AthenaParameters<a name="aws-properties-quicksight-datasource-athenaparameters"></a>

Parameters for Amazon Athena\.

## Syntax<a name="aws-properties-quicksight-datasource-athenaparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-athenaparameters-syntax.json"></a>

```
{
  "[WorkGroup](#cfn-quicksight-datasource-athenaparameters-workgroup)" : String
}
```

### YAML<a name="aws-properties-quicksight-datasource-athenaparameters-syntax.yaml"></a>

```
  [WorkGroup](#cfn-quicksight-datasource-athenaparameters-workgroup): String
```

## Properties<a name="aws-properties-quicksight-datasource-athenaparameters-properties"></a>

`WorkGroup` <a name="cfn-quicksight-datasource-athenaparameters-workgroup"></a>
The workgroup that Amazon Athena uses\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
