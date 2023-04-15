# AWS::QuickSight::Theme TileLayoutStyle<a name="aws-properties-quicksight-theme-tilelayoutstyle"></a>

The display options for the layout of tiles on a sheet\.

## Syntax<a name="aws-properties-quicksight-theme-tilelayoutstyle-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-theme-tilelayoutstyle-syntax.json"></a>

```
{
  "[Gutter](#cfn-quicksight-theme-tilelayoutstyle-gutter)" : GutterStyle,
  "[Margin](#cfn-quicksight-theme-tilelayoutstyle-margin)" : MarginStyle
}
```

### YAML<a name="aws-properties-quicksight-theme-tilelayoutstyle-syntax.yaml"></a>

```
  [Gutter](#cfn-quicksight-theme-tilelayoutstyle-gutter):
    GutterStyle
  [Margin](#cfn-quicksight-theme-tilelayoutstyle-margin):
    MarginStyle
```

## Properties<a name="aws-properties-quicksight-theme-tilelayoutstyle-properties"></a>

`Gutter` <a name="cfn-quicksight-theme-tilelayoutstyle-gutter"></a>
The gutter settings that apply between tiles\.  
_Required_: No  
_Type_: [GutterStyle](aws-properties-quicksight-theme-gutterstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Margin` <a name="cfn-quicksight-theme-tilelayoutstyle-margin"></a>
The margin settings that apply around the outside edge of sheets\.  
_Required_: No  
_Type_: [MarginStyle](aws-properties-quicksight-theme-marginstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
