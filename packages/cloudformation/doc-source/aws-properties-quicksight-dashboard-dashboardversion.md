# AWS::QuickSight::Dashboard DashboardVersion<a name="aws-properties-quicksight-dashboard-dashboardversion"></a>

Dashboard version\.

## Syntax<a name="aws-properties-quicksight-dashboard-dashboardversion-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-dashboardversion-syntax.json"></a>

```
{
  "[Arn](#cfn-quicksight-dashboard-dashboardversion-arn)" : String,
  "[CreatedTime](#cfn-quicksight-dashboard-dashboardversion-createdtime)" : String,
  "[DataSetArns](#cfn-quicksight-dashboard-dashboardversion-datasetarns)" : [ String, ... ],
  "[Description](#cfn-quicksight-dashboard-dashboardversion-description)" : String,
  "[Errors](#cfn-quicksight-dashboard-dashboardversion-errors)" : [ DashboardError, ... ],
  "[Sheets](#cfn-quicksight-dashboard-dashboardversion-sheets)" : [ Sheet, ... ],
  "[SourceEntityArn](#cfn-quicksight-dashboard-dashboardversion-sourceentityarn)" : String,
  "[Status](#cfn-quicksight-dashboard-dashboardversion-status)" : String,
  "[ThemeArn](#cfn-quicksight-dashboard-dashboardversion-themearn)" : String,
  "[VersionNumber](#cfn-quicksight-dashboard-dashboardversion-versionnumber)" : Double
}
```

### YAML<a name="aws-properties-quicksight-dashboard-dashboardversion-syntax.yaml"></a>

```
  [Arn](#cfn-quicksight-dashboard-dashboardversion-arn): String
  [CreatedTime](#cfn-quicksight-dashboard-dashboardversion-createdtime): String
  [DataSetArns](#cfn-quicksight-dashboard-dashboardversion-datasetarns):
    - String
  [Description](#cfn-quicksight-dashboard-dashboardversion-description): String
  [Errors](#cfn-quicksight-dashboard-dashboardversion-errors):
    - DashboardError
  [Sheets](#cfn-quicksight-dashboard-dashboardversion-sheets):
    - Sheet
  [SourceEntityArn](#cfn-quicksight-dashboard-dashboardversion-sourceentityarn): String
  [Status](#cfn-quicksight-dashboard-dashboardversion-status): String
  [ThemeArn](#cfn-quicksight-dashboard-dashboardversion-themearn): String
  [VersionNumber](#cfn-quicksight-dashboard-dashboardversion-versionnumber): Double
```

## Properties<a name="aws-properties-quicksight-dashboard-dashboardversion-properties"></a>

`Arn` <a name="cfn-quicksight-dashboard-dashboardversion-arn"></a>
The Amazon Resource Name \(ARN\) of the resource\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreatedTime` <a name="cfn-quicksight-dashboard-dashboardversion-createdtime"></a>
The time that this dashboard version was created\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetArns` <a name="cfn-quicksight-dashboard-dashboardversion-datasetarns"></a>
The Amazon Resource Numbers \(ARNs\) for the datasets that are associated with this version of the dashboard\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-quicksight-dashboard-dashboardversion-description"></a>
Description\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Errors` <a name="cfn-quicksight-dashboard-dashboardversion-errors"></a>
Errors associated with this dashboard version\.  
_Required_: No  
_Type_: List of [DashboardError](aws-properties-quicksight-dashboard-dashboarderror.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sheets` <a name="cfn-quicksight-dashboard-dashboardversion-sheets"></a>
A list of the associated sheets with the unique identifier and name of each sheet\.  
_Required_: No  
_Type_: List of [Sheet](aws-properties-quicksight-dashboard-sheet.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceEntityArn` <a name="cfn-quicksight-dashboard-dashboardversion-sourceentityarn"></a>
Source entity ARN\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-dashboard-dashboardversion-status"></a>
The HTTP status of the request\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CREATION_FAILED | CREATION_IN_PROGRESS | CREATION_SUCCESSFUL | DELETED | UPDATE_FAILED | UPDATE_IN_PROGRESS | UPDATE_SUCCESSFUL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThemeArn` <a name="cfn-quicksight-dashboard-dashboardversion-themearn"></a>
The ARN of the theme associated with a version of the dashboard\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VersionNumber` <a name="cfn-quicksight-dashboard-dashboardversion-versionnumber"></a>
Version number for this version of the dashboard\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
