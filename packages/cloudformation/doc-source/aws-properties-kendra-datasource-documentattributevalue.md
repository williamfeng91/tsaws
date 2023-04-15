# AWS::Kendra::DataSource DocumentAttributeValue<a name="aws-properties-kendra-datasource-documentattributevalue"></a>

The value of a document attribute\. You can only provide one value for a document attribute\.

## Syntax<a name="aws-properties-kendra-datasource-documentattributevalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-documentattributevalue-syntax.json"></a>

```
{
  "[DateValue](#cfn-kendra-datasource-documentattributevalue-datevalue)" : String,
  "[LongValue](#cfn-kendra-datasource-documentattributevalue-longvalue)" : Integer,
  "[StringListValue](#cfn-kendra-datasource-documentattributevalue-stringlistvalue)" : [ String, ... ],
  "[StringValue](#cfn-kendra-datasource-documentattributevalue-stringvalue)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-documentattributevalue-syntax.yaml"></a>

```
  [DateValue](#cfn-kendra-datasource-documentattributevalue-datevalue): String
  [LongValue](#cfn-kendra-datasource-documentattributevalue-longvalue): Integer
  [StringListValue](#cfn-kendra-datasource-documentattributevalue-stringlistvalue):
    - String
  [StringValue](#cfn-kendra-datasource-documentattributevalue-stringvalue):
    String
```

## Properties<a name="aws-properties-kendra-datasource-documentattributevalue-properties"></a>

`DateValue` <a name="cfn-kendra-datasource-documentattributevalue-datevalue"></a>
A date expressed as an ISO 8601 string\.  
It is important for the time zone to be included in the ISO 8601 date\-time format\. For example, 2012\-03\-25T12:30:10\+01:00 is the ISO 8601 date\-time format for March 25th 2012 at 12:30PM \(plus 10 seconds\) in Central European Time\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LongValue` <a name="cfn-kendra-datasource-documentattributevalue-longvalue"></a>
A long integer value\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringListValue` <a name="cfn-kendra-datasource-documentattributevalue-stringlistvalue"></a>
A list of strings\. The default maximum length or number of strings is 10\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringValue` <a name="cfn-kendra-datasource-documentattributevalue-stringvalue"></a>
A string, such as "department"\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
