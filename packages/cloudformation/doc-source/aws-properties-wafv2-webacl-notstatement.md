# AWS::WAFv2::WebACL NotStatement<a name="aws-properties-wafv2-webacl-notstatement"></a>

A logical rule statement used to negate the results of another rule statement\. You provide one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `NotStatement`\.

## Syntax<a name="aws-properties-wafv2-webacl-notstatement-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-webacl-notstatement-syntax.json"></a>

```
{
  "[Statement](#cfn-wafv2-webacl-notstatement-statement)" : Statement
}
```

### YAML<a name="aws-properties-wafv2-webacl-notstatement-syntax.yaml"></a>

```
  [Statement](#cfn-wafv2-webacl-notstatement-statement):
    Statement
```

## Properties<a name="aws-properties-wafv2-webacl-notstatement-properties"></a>

`Statement` <a name="cfn-wafv2-webacl-notstatement-statement"></a>
The statement to negate\. You can use any statement that can be nested\.  
_Required_: Yes  
_Type_: [Statement](aws-properties-wafv2-webacl-statement.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
