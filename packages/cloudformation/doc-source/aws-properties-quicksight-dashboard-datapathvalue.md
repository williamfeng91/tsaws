# AWS::QuickSight::Dashboard DataPathValue<a name="aws-properties-quicksight-dashboard-datapathvalue"></a>

The data path that needs to be sorted\.

## Syntax<a name="aws-properties-quicksight-dashboard-datapathvalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datapathvalue-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-dashboard-datapathvalue-fieldid)" : String,
  "[FieldValue](#cfn-quicksight-dashboard-datapathvalue-fieldvalue)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datapathvalue-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-dashboard-datapathvalue-fieldid): String
  [FieldValue](#cfn-quicksight-dashboard-datapathvalue-fieldvalue): String
```

## Properties<a name="aws-properties-quicksight-dashboard-datapathvalue-properties"></a>

`FieldId` <a name="cfn-quicksight-dashboard-datapathvalue-fieldid"></a>
The field ID of the field that needs to be sorted\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldValue` <a name="cfn-quicksight-dashboard-datapathvalue-fieldvalue"></a>
The actual value of the field that needs to be sorted\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
