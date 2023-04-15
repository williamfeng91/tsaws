# AWS::QuickSight::Template FreeFormLayoutElementBorderStyle<a name="aws-properties-quicksight-template-freeformlayoutelementborderstyle"></a>

The background style configuration of a free\-form layout element\.

## Syntax<a name="aws-properties-quicksight-template-freeformlayoutelementborderstyle-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-freeformlayoutelementborderstyle-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-template-freeformlayoutelementborderstyle-color)" : String,
  "[Visibility](#cfn-quicksight-template-freeformlayoutelementborderstyle-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-freeformlayoutelementborderstyle-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-template-freeformlayoutelementborderstyle-color): String
  [Visibility](#cfn-quicksight-template-freeformlayoutelementborderstyle-visibility): String
```

## Properties<a name="aws-properties-quicksight-template-freeformlayoutelementborderstyle-properties"></a>

`Color` <a name="cfn-quicksight-template-freeformlayoutelementborderstyle-color"></a>
The border color of a free\-form layout element\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}(?:[A-F0-9]{2})?$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-template-freeformlayoutelementborderstyle-visibility"></a>
The border visibility of a free\-form layout element\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
