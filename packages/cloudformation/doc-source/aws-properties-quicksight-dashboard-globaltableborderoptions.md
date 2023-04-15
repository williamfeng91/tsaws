# AWS::QuickSight::Dashboard GlobalTableBorderOptions<a name="aws-properties-quicksight-dashboard-globaltableborderoptions"></a>

Determines the border options for a table visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-globaltableborderoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-globaltableborderoptions-syntax.json"></a>

```
{
  "[SideSpecificBorder](#cfn-quicksight-dashboard-globaltableborderoptions-sidespecificborder)" : TableSideBorderOptions,
  "[UniformBorder](#cfn-quicksight-dashboard-globaltableborderoptions-uniformborder)" : TableBorderOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-globaltableborderoptions-syntax.yaml"></a>

```
  [SideSpecificBorder](#cfn-quicksight-dashboard-globaltableborderoptions-sidespecificborder):
    TableSideBorderOptions
  [UniformBorder](#cfn-quicksight-dashboard-globaltableborderoptions-uniformborder):
    TableBorderOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-globaltableborderoptions-properties"></a>

`SideSpecificBorder` <a name="cfn-quicksight-dashboard-globaltableborderoptions-sidespecificborder"></a>
Determines the options for side specific border\.  
_Required_: No  
_Type_: [TableSideBorderOptions](aws-properties-quicksight-dashboard-tablesideborderoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UniformBorder` <a name="cfn-quicksight-dashboard-globaltableborderoptions-uniformborder"></a>
Determines the options for uniform border\.  
_Required_: No  
_Type_: [TableBorderOptions](aws-properties-quicksight-dashboard-tableborderoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
