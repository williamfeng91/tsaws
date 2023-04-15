# AWS::QuickSight::Template DonutCenterOptions<a name="aws-properties-quicksight-template-donutcenteroptions"></a>

The label options of the label that is displayed in the center of a donut chart\. This option isn't available for pie charts\.

## Syntax<a name="aws-properties-quicksight-template-donutcenteroptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-donutcenteroptions-syntax.json"></a>

```
{
  "[LabelVisibility](#cfn-quicksight-template-donutcenteroptions-labelvisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-donutcenteroptions-syntax.yaml"></a>

```
  [LabelVisibility](#cfn-quicksight-template-donutcenteroptions-labelvisibility): String
```

## Properties<a name="aws-properties-quicksight-template-donutcenteroptions-properties"></a>

`LabelVisibility` <a name="cfn-quicksight-template-donutcenteroptions-labelvisibility"></a>
Determines the visibility of the label in a donut chart\. In the Amazon QuickSight console, this option is called `'Show total'`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)