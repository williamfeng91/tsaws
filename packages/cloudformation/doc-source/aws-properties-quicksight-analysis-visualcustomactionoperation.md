# AWS::QuickSight::Analysis VisualCustomActionOperation<a name="aws-properties-quicksight-analysis-visualcustomactionoperation"></a>

The operation that is defined by the custom action\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-analysis-visualcustomactionoperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-visualcustomactionoperation-syntax.json"></a>

```
{
  "[FilterOperation](#cfn-quicksight-analysis-visualcustomactionoperation-filteroperation)" : CustomActionFilterOperation,
  "[NavigationOperation](#cfn-quicksight-analysis-visualcustomactionoperation-navigationoperation)" : CustomActionNavigationOperation,
  "[SetParametersOperation](#cfn-quicksight-analysis-visualcustomactionoperation-setparametersoperation)" : CustomActionSetParametersOperation,
  "[URLOperation](#cfn-quicksight-analysis-visualcustomactionoperation-urloperation)" : CustomActionURLOperation
}
```

### YAML<a name="aws-properties-quicksight-analysis-visualcustomactionoperation-syntax.yaml"></a>

```
  [FilterOperation](#cfn-quicksight-analysis-visualcustomactionoperation-filteroperation):
    CustomActionFilterOperation
  [NavigationOperation](#cfn-quicksight-analysis-visualcustomactionoperation-navigationoperation):
    CustomActionNavigationOperation
  [SetParametersOperation](#cfn-quicksight-analysis-visualcustomactionoperation-setparametersoperation):
    CustomActionSetParametersOperation
  [URLOperation](#cfn-quicksight-analysis-visualcustomactionoperation-urloperation):
    CustomActionURLOperation
```

## Properties<a name="aws-properties-quicksight-analysis-visualcustomactionoperation-properties"></a>

`FilterOperation` <a name="cfn-quicksight-analysis-visualcustomactionoperation-filteroperation"></a>
The filter operation that filters data included in a visual or in an entire sheet\.  
_Required_: No  
_Type_: [CustomActionFilterOperation](aws-properties-quicksight-analysis-customactionfilteroperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NavigationOperation` <a name="cfn-quicksight-analysis-visualcustomactionoperation-navigationoperation"></a>
The navigation operation that navigates between different sheets in the same analysis\.  
_Required_: No  
_Type_: [CustomActionNavigationOperation](aws-properties-quicksight-analysis-customactionnavigationoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SetParametersOperation` <a name="cfn-quicksight-analysis-visualcustomactionoperation-setparametersoperation"></a>
The set parameter operation that sets parameters in custom action\.  
_Required_: No  
_Type_: [CustomActionSetParametersOperation](aws-properties-quicksight-analysis-customactionsetparametersoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`URLOperation` <a name="cfn-quicksight-analysis-visualcustomactionoperation-urloperation"></a>
The URL operation that opens a link to another webpage\.  
_Required_: No  
_Type_: [CustomActionURLOperation](aws-properties-quicksight-analysis-customactionurloperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
