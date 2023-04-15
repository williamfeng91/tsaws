# AWS::QuickSight::Analysis FreeFormLayoutElementBorderStyle<a name="aws-properties-quicksight-analysis-freeformlayoutelementborderstyle"></a>

The background style configuration of a free\-form layout element\.

## Syntax<a name="aws-properties-quicksight-analysis-freeformlayoutelementborderstyle-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-freeformlayoutelementborderstyle-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-analysis-freeformlayoutelementborderstyle-color)" : String,
  "[Visibility](#cfn-quicksight-analysis-freeformlayoutelementborderstyle-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-freeformlayoutelementborderstyle-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-analysis-freeformlayoutelementborderstyle-color): String
  [Visibility](#cfn-quicksight-analysis-freeformlayoutelementborderstyle-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-freeformlayoutelementborderstyle-properties"></a>

`Color` <a name="cfn-quicksight-analysis-freeformlayoutelementborderstyle-color"></a>
The border color of a free\-form layout element\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-freeformlayoutelementborderstyle-visibility"></a>
The border visibility of a free\-form layout element\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
