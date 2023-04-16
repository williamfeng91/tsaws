# AWS::QuickSight::DataSource AmazonOpenSearchParameters<a name="aws-properties-quicksight-datasource-amazonopensearchparameters"></a>

The parameters for OpenSearch\.

## Syntax<a name="aws-properties-quicksight-datasource-amazonopensearchparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-datasource-amazonopensearchparameters-syntax.json"></a>

```
{
  "[Domain](#cfn-quicksight-datasource-amazonopensearchparameters-domain)" : String
}
```

### YAML<a name="aws-properties-quicksight-datasource-amazonopensearchparameters-syntax.yaml"></a>

```
  [Domain](#cfn-quicksight-datasource-amazonopensearchparameters-domain): String
```

## Properties<a name="aws-properties-quicksight-datasource-amazonopensearchparameters-properties"></a>

`Domain` <a name="cfn-quicksight-datasource-amazonopensearchparameters-domain"></a>
The OpenSearch domain\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
