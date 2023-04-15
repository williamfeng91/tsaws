# AWS::QuickSight::Template VisualCustomActionOperation<a name="aws-properties-quicksight-template-visualcustomactionoperation"></a>

The operation that is defined by the custom action\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-visualcustomactionoperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-visualcustomactionoperation-syntax.json"></a>

```
{
  "[FilterOperation](#cfn-quicksight-template-visualcustomactionoperation-filteroperation)" : CustomActionFilterOperation,
  "[NavigationOperation](#cfn-quicksight-template-visualcustomactionoperation-navigationoperation)" : CustomActionNavigationOperation,
  "[SetParametersOperation](#cfn-quicksight-template-visualcustomactionoperation-setparametersoperation)" : CustomActionSetParametersOperation,
  "[URLOperation](#cfn-quicksight-template-visualcustomactionoperation-urloperation)" : CustomActionURLOperation
}
```

### YAML<a name="aws-properties-quicksight-template-visualcustomactionoperation-syntax.yaml"></a>

```
  [FilterOperation](#cfn-quicksight-template-visualcustomactionoperation-filteroperation):
    CustomActionFilterOperation
  [NavigationOperation](#cfn-quicksight-template-visualcustomactionoperation-navigationoperation):
    CustomActionNavigationOperation
  [SetParametersOperation](#cfn-quicksight-template-visualcustomactionoperation-setparametersoperation):
    CustomActionSetParametersOperation
  [URLOperation](#cfn-quicksight-template-visualcustomactionoperation-urloperation):
    CustomActionURLOperation
```

## Properties<a name="aws-properties-quicksight-template-visualcustomactionoperation-properties"></a>

`FilterOperation` <a name="cfn-quicksight-template-visualcustomactionoperation-filteroperation"></a>
The filter operation that filters data included in a visual or in an entire sheet\.  
_Required_: No  
_Type_: [CustomActionFilterOperation](aws-properties-quicksight-template-customactionfilteroperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NavigationOperation` <a name="cfn-quicksight-template-visualcustomactionoperation-navigationoperation"></a>
The navigation operation that navigates between different sheets in the same analysis\.  
_Required_: No  
_Type_: [CustomActionNavigationOperation](aws-properties-quicksight-template-customactionnavigationoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SetParametersOperation` <a name="cfn-quicksight-template-visualcustomactionoperation-setparametersoperation"></a>
The set parameter operation that sets parameters in custom action\.  
_Required_: No  
_Type_: [CustomActionSetParametersOperation](aws-properties-quicksight-template-customactionsetparametersoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`URLOperation` <a name="cfn-quicksight-template-visualcustomactionoperation-urloperation"></a>
The URL operation that opens a link to another webpage\.  
_Required_: No  
_Type_: [CustomActionURLOperation](aws-properties-quicksight-template-customactionurloperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
