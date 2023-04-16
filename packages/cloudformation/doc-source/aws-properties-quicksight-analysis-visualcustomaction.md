# AWS::QuickSight::Analysis VisualCustomAction<a name="aws-properties-quicksight-analysis-visualcustomaction"></a>

A custom action defined on a visual\.

## Syntax<a name="aws-properties-quicksight-analysis-visualcustomaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-visualcustomaction-syntax.json"></a>

```
{
  "[ActionOperations](#cfn-quicksight-analysis-visualcustomaction-actionoperations)" : [ VisualCustomActionOperation, ... ],
  "[CustomActionId](#cfn-quicksight-analysis-visualcustomaction-customactionid)" : String,
  "[Name](#cfn-quicksight-analysis-visualcustomaction-name)" : String,
  "[Status](#cfn-quicksight-analysis-visualcustomaction-status)" : String,
  "[Trigger](#cfn-quicksight-analysis-visualcustomaction-trigger)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-visualcustomaction-syntax.yaml"></a>

```
  [ActionOperations](#cfn-quicksight-analysis-visualcustomaction-actionoperations):
    - VisualCustomActionOperation
  [CustomActionId](#cfn-quicksight-analysis-visualcustomaction-customactionid): String
  [Name](#cfn-quicksight-analysis-visualcustomaction-name): String
  [Status](#cfn-quicksight-analysis-visualcustomaction-status): String
  [Trigger](#cfn-quicksight-analysis-visualcustomaction-trigger): String
```

## Properties<a name="aws-properties-quicksight-analysis-visualcustomaction-properties"></a>

`ActionOperations` <a name="cfn-quicksight-analysis-visualcustomaction-actionoperations"></a>
A list of `VisualCustomActionOperations`\.  
This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.  
_Required_: Yes  
_Type_: List of [VisualCustomActionOperation](aws-properties-quicksight-analysis-visualcustomactionoperation.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomActionId` <a name="cfn-quicksight-analysis-visualcustomaction-customactionid"></a>
The ID of the `VisualCustomAction`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-visualcustomaction-name"></a>
The name of the `VisualCustomAction`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-analysis-visualcustomaction-status"></a>
The status of the `VisualCustomAction`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Trigger` <a name="cfn-quicksight-analysis-visualcustomaction-trigger"></a>
The trigger of the `VisualCustomAction`\.  
Valid values are defined as follows:

- `DATA_POINT_CLICK`: Initiates a custom action by a left pointer click on a data point\.
- `DATA_POINT_MENU`: Initiates a custom action by right pointer click from the menu\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `DATA_POINT_CLICK | DATA_POINT_MENU`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
