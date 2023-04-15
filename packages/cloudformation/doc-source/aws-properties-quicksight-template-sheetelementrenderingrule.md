# AWS::QuickSight::Template SheetElementRenderingRule<a name="aws-properties-quicksight-template-sheetelementrenderingrule"></a>

The rendering rules of a sheet that uses a free\-form layout\.

## Syntax<a name="aws-properties-quicksight-template-sheetelementrenderingrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-sheetelementrenderingrule-syntax.json"></a>

```
{
  "[ConfigurationOverrides](#cfn-quicksight-template-sheetelementrenderingrule-configurationoverrides)" : SheetElementConfigurationOverrides,
  "[Expression](#cfn-quicksight-template-sheetelementrenderingrule-expression)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-sheetelementrenderingrule-syntax.yaml"></a>

```
  [ConfigurationOverrides](#cfn-quicksight-template-sheetelementrenderingrule-configurationoverrides):
    SheetElementConfigurationOverrides
  [Expression](#cfn-quicksight-template-sheetelementrenderingrule-expression): String
```

## Properties<a name="aws-properties-quicksight-template-sheetelementrenderingrule-properties"></a>

`ConfigurationOverrides` <a name="cfn-quicksight-template-sheetelementrenderingrule-configurationoverrides"></a>
The override configuration of the rendering rules of a sheet\.  
_Required_: Yes  
_Type_: [SheetElementConfigurationOverrides](aws-properties-quicksight-template-sheetelementconfigurationoverrides.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-template-sheetelementrenderingrule-expression"></a>
The expression of the rendering rules of a sheet\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
