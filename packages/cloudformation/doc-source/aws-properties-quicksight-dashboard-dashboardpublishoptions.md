# AWS::QuickSight::Dashboard DashboardPublishOptions<a name="aws-properties-quicksight-dashboard-dashboardpublishoptions"></a>

Dashboard publish options\.

## Syntax<a name="aws-properties-quicksight-dashboard-dashboardpublishoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-dashboardpublishoptions-syntax.json"></a>

```
{
  "[AdHocFilteringOption](#cfn-quicksight-dashboard-dashboardpublishoptions-adhocfilteringoption)" : AdHocFilteringOption,
  "[DataPointDrillUpDownOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointdrillupdownoption)" : DataPointDrillUpDownOption,
  "[DataPointMenuLabelOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointmenulabeloption)" : DataPointMenuLabelOption,
  "[DataPointTooltipOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointtooltipoption)" : DataPointTooltipOption,
  "[ExportToCSVOption](#cfn-quicksight-dashboard-dashboardpublishoptions-exporttocsvoption)" : ExportToCSVOption,
  "[ExportWithHiddenFieldsOption](#cfn-quicksight-dashboard-dashboardpublishoptions-exportwithhiddenfieldsoption)" : ExportWithHiddenFieldsOption,
  "[SheetControlsOption](#cfn-quicksight-dashboard-dashboardpublishoptions-sheetcontrolsoption)" : SheetControlsOption,
  "[SheetLayoutElementMaximizationOption](#cfn-quicksight-dashboard-dashboardpublishoptions-sheetlayoutelementmaximizationoption)" : SheetLayoutElementMaximizationOption,
  "[VisualAxisSortOption](#cfn-quicksight-dashboard-dashboardpublishoptions-visualaxissortoption)" : VisualAxisSortOption,
  "[VisualMenuOption](#cfn-quicksight-dashboard-dashboardpublishoptions-visualmenuoption)" : VisualMenuOption,
  "[VisualPublishOptions](#cfn-quicksight-dashboard-dashboardpublishoptions-visualpublishoptions)" : DashboardVisualPublishOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-dashboardpublishoptions-syntax.yaml"></a>

```
  [AdHocFilteringOption](#cfn-quicksight-dashboard-dashboardpublishoptions-adhocfilteringoption):
    AdHocFilteringOption
  [DataPointDrillUpDownOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointdrillupdownoption):
    DataPointDrillUpDownOption
  [DataPointMenuLabelOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointmenulabeloption):
    DataPointMenuLabelOption
  [DataPointTooltipOption](#cfn-quicksight-dashboard-dashboardpublishoptions-datapointtooltipoption):
    DataPointTooltipOption
  [ExportToCSVOption](#cfn-quicksight-dashboard-dashboardpublishoptions-exporttocsvoption):
    ExportToCSVOption
  [ExportWithHiddenFieldsOption](#cfn-quicksight-dashboard-dashboardpublishoptions-exportwithhiddenfieldsoption):
    ExportWithHiddenFieldsOption
  [SheetControlsOption](#cfn-quicksight-dashboard-dashboardpublishoptions-sheetcontrolsoption):
    SheetControlsOption
  [SheetLayoutElementMaximizationOption](#cfn-quicksight-dashboard-dashboardpublishoptions-sheetlayoutelementmaximizationoption):
    SheetLayoutElementMaximizationOption
  [VisualAxisSortOption](#cfn-quicksight-dashboard-dashboardpublishoptions-visualaxissortoption):
    VisualAxisSortOption
  [VisualMenuOption](#cfn-quicksight-dashboard-dashboardpublishoptions-visualmenuoption):
    VisualMenuOption
  [VisualPublishOptions](#cfn-quicksight-dashboard-dashboardpublishoptions-visualpublishoptions):
    DashboardVisualPublishOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-dashboardpublishoptions-properties"></a>

`AdHocFilteringOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-adhocfilteringoption"></a>
Ad hoc \(one\-time\) filtering option\.  
_Required_: No  
_Type_: [AdHocFilteringOption](aws-properties-quicksight-dashboard-adhocfilteringoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataPointDrillUpDownOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-datapointdrillupdownoption"></a>
The drill\-down options of data points in a dashboard\.  
_Required_: No  
_Type_: [DataPointDrillUpDownOption](aws-properties-quicksight-dashboard-datapointdrillupdownoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataPointMenuLabelOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-datapointmenulabeloption"></a>
The data point menu label options of a dashboard\.  
_Required_: No  
_Type_: [DataPointMenuLabelOption](aws-properties-quicksight-dashboard-datapointmenulabeloption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataPointTooltipOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-datapointtooltipoption"></a>
The data point tool tip options of a dashboard\.  
_Required_: No  
_Type_: [DataPointTooltipOption](aws-properties-quicksight-dashboard-datapointtooltipoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExportToCSVOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-exporttocsvoption"></a>
Export to \.csv option\.  
_Required_: No  
_Type_: [ExportToCSVOption](aws-properties-quicksight-dashboard-exporttocsvoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExportWithHiddenFieldsOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-exportwithhiddenfieldsoption"></a>
Determines if hidden fields are exported with a dashboard\.  
_Required_: No  
_Type_: [ExportWithHiddenFieldsOption](aws-properties-quicksight-dashboard-exportwithhiddenfieldsoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetControlsOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-sheetcontrolsoption"></a>
Sheet controls option\.  
_Required_: No  
_Type_: [SheetControlsOption](aws-properties-quicksight-dashboard-sheetcontrolsoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SheetLayoutElementMaximizationOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-sheetlayoutelementmaximizationoption"></a>
The sheet layout maximization options of a dashbaord\.  
_Required_: No  
_Type_: [SheetLayoutElementMaximizationOption](aws-properties-quicksight-dashboard-sheetlayoutelementmaximizationoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualAxisSortOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-visualaxissortoption"></a>
The axis sort options of a dashboard\.  
_Required_: No  
_Type_: [VisualAxisSortOption](aws-properties-quicksight-dashboard-visualaxissortoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualMenuOption` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-visualmenuoption"></a>
The menu options of a visual in a dashboard\.  
_Required_: No  
_Type_: [VisualMenuOption](aws-properties-quicksight-dashboard-visualmenuoption.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualPublishOptions` <a name="cfn-quicksight-dashboard-dashboardpublishoptions-visualpublishoptions"></a>
The visual publish options of a visual in a dashboard\.  
_Required_: No  
_Type_: [DashboardVisualPublishOptions](aws-properties-quicksight-dashboard-dashboardvisualpublishoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
