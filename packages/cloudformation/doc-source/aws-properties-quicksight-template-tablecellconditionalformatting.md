# AWS::QuickSight::Template TableCellConditionalFormatting<a name="aws-properties-quicksight-template-tablecellconditionalformatting"></a>

The cell conditional formatting option for a table\.

## Syntax<a name="aws-properties-quicksight-template-tablecellconditionalformatting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-tablecellconditionalformatting-syntax.json"></a>

```
{
  "[FieldId](#cfn-quicksight-template-tablecellconditionalformatting-fieldid)" : String,
  "[TextFormat](#cfn-quicksight-template-tablecellconditionalformatting-textformat)" : TextConditionalFormat
}
```

### YAML<a name="aws-properties-quicksight-template-tablecellconditionalformatting-syntax.yaml"></a>

```
  [FieldId](#cfn-quicksight-template-tablecellconditionalformatting-fieldid): String
  [TextFormat](#cfn-quicksight-template-tablecellconditionalformatting-textformat):
    TextConditionalFormat
```

## Properties<a name="aws-properties-quicksight-template-tablecellconditionalformatting-properties"></a>

`FieldId` <a name="cfn-quicksight-template-tablecellconditionalformatting-fieldid"></a>
The field ID of the cell for conditional formatting\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextFormat` <a name="cfn-quicksight-template-tablecellconditionalformatting-textformat"></a>
The text format of the cell for conditional formatting\.  
_Required_: No  
_Type_: [TextConditionalFormat](aws-properties-quicksight-template-textconditionalformat.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
