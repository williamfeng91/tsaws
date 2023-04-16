# AWS::AppFlow::Flow PrefixConfig<a name="aws-properties-appflow-flow-prefixconfig"></a>

Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination\.

## Syntax<a name="aws-properties-appflow-flow-prefixconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-prefixconfig-syntax.json"></a>

```
{
  "[PathPrefixHierarchy](#cfn-appflow-flow-prefixconfig-pathprefixhierarchy)" : [ String, ... ],
  "[PrefixFormat](#cfn-appflow-flow-prefixconfig-prefixformat)" : String,
  "[PrefixType](#cfn-appflow-flow-prefixconfig-prefixtype)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-prefixconfig-syntax.yaml"></a>

```
  [PathPrefixHierarchy](#cfn-appflow-flow-prefixconfig-pathprefixhierarchy):
    - String
  [PrefixFormat](#cfn-appflow-flow-prefixconfig-prefixformat): String
  [PrefixType](#cfn-appflow-flow-prefixconfig-prefixtype): String
```

## Properties<a name="aws-properties-appflow-flow-prefixconfig-properties"></a>

`PathPrefixHierarchy` <a name="cfn-appflow-flow-prefixconfig-pathprefixhierarchy"></a>
Property description not available\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrefixFormat` <a name="cfn-appflow-flow-prefixconfig-prefixformat"></a>
Determines the level of granularity for the date and time that's included in the prefix\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DAY | HOUR | MINUTE | MONTH | YEAR`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrefixType` <a name="cfn-appflow-flow-prefixconfig-prefixtype"></a>
Determines the format of the prefix, and whether it applies to the file name, file path, or both\.  
_Required_: No  
_Type_: String  
_Allowed values_: `FILENAME | PATH | PATH_AND_FILENAME`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-appflow-flow-prefixconfig--seealso"></a>

- [PrefixConfig](https://docs.aws.amazon.com/appflow/1.0/APIReference/API_PrefixConfig.html) in the _Amazon AppFlow API Reference_\.
