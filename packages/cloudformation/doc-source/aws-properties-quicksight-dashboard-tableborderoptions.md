# AWS::QuickSight::Dashboard TableBorderOptions<a name="aws-properties-quicksight-dashboard-tableborderoptions"></a>

The border options for a table border\.

## Syntax<a name="aws-properties-quicksight-dashboard-tableborderoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tableborderoptions-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-dashboard-tableborderoptions-color)" : String,
  "[Style](#cfn-quicksight-dashboard-tableborderoptions-style)" : String,
  "[Thickness](#cfn-quicksight-dashboard-tableborderoptions-thickness)" : Double
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tableborderoptions-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-dashboard-tableborderoptions-color): String
  [Style](#cfn-quicksight-dashboard-tableborderoptions-style): String
  [Thickness](#cfn-quicksight-dashboard-tableborderoptions-thickness): Double
```

## Properties<a name="aws-properties-quicksight-dashboard-tableborderoptions-properties"></a>

`Color` <a name="cfn-quicksight-dashboard-tableborderoptions-color"></a>
The color of a table border\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Style` <a name="cfn-quicksight-dashboard-tableborderoptions-style"></a>
The style \(none, solid\) of a table border\.  
_Required_: No  
_Type_: String  
_Allowed values_: `NONE | SOLID`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Thickness` <a name="cfn-quicksight-dashboard-tableborderoptions-thickness"></a>
The thickness of a table border\.  
_Required_: No  
_Type_: Double  
_Minimum_: `1`  
_Maximum_: `4`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)