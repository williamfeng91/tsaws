# AWS::Kendra::Index DocumentMetadataConfiguration<a name="aws-properties-kendra-index-documentmetadataconfiguration"></a>

Specifies the properties, such as relevance tuning and searchability, of an index field\.

## Syntax<a name="aws-properties-kendra-index-documentmetadataconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-index-documentmetadataconfiguration-syntax.json"></a>

```
{
  "[Name](#cfn-kendra-index-documentmetadataconfiguration-name)" : String,
  "[Relevance](#cfn-kendra-index-documentmetadataconfiguration-relevance)" : Relevance,
  "[Search](#cfn-kendra-index-documentmetadataconfiguration-search)" : Search,
  "[Type](#cfn-kendra-index-documentmetadataconfiguration-type)" : String
}
```

### YAML<a name="aws-properties-kendra-index-documentmetadataconfiguration-syntax.yaml"></a>

```
  [Name](#cfn-kendra-index-documentmetadataconfiguration-name): String
  [Relevance](#cfn-kendra-index-documentmetadataconfiguration-relevance):
    Relevance
  [Search](#cfn-kendra-index-documentmetadataconfiguration-search):
    Search
  [Type](#cfn-kendra-index-documentmetadataconfiguration-type): String
```

## Properties<a name="aws-properties-kendra-index-documentmetadataconfiguration-properties"></a>

`Name` <a name="cfn-kendra-index-documentmetadataconfiguration-name"></a>
The name of the index field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `30`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Relevance` <a name="cfn-kendra-index-documentmetadataconfiguration-relevance"></a>
Provides tuning parameters to determine how the field affects the search results\.  
_Required_: No  
_Type_: [Relevance](aws-properties-kendra-index-relevance.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Search` <a name="cfn-kendra-index-documentmetadataconfiguration-search"></a>
Provides information about how the field is used during a search\.  
_Required_: No  
_Type_: [Search](aws-properties-kendra-index-search.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-kendra-index-documentmetadataconfiguration-type"></a>
The data type of the index field\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DATE_VALUE | LONG_VALUE | STRING_LIST_VALUE | STRING_VALUE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
