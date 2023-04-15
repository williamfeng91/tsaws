# AWS::QuickSight::Dashboard SectionBasedLayoutConfiguration<a name="aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration"></a>

The configuration for a section\-based layout\.

## Syntax<a name="aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration-syntax.json"></a>

```
{
  "[BodySections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-bodysections)" : [ BodySectionConfiguration, ... ],
  "[CanvasSizeOptions](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-canvassizeoptions)" : SectionBasedLayoutCanvasSizeOptions,
  "[FooterSections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-footersections)" : [ HeaderFooterSectionConfiguration, ... ],
  "[HeaderSections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-headersections)" : [ HeaderFooterSectionConfiguration, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration-syntax.yaml"></a>

```
  [BodySections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-bodysections):
    - BodySectionConfiguration
  [CanvasSizeOptions](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-canvassizeoptions):
    SectionBasedLayoutCanvasSizeOptions
  [FooterSections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-footersections):
    - HeaderFooterSectionConfiguration
  [HeaderSections](#cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-headersections):
    - HeaderFooterSectionConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-sectionbasedlayoutconfiguration-properties"></a>

`BodySections` <a name="cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-bodysections"></a>
A list of body section configurations\.  
_Required_: Yes  
_Type_: List of [BodySectionConfiguration](aws-properties-quicksight-dashboard-bodysectionconfiguration.md)  
_Maximum_: `28`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CanvasSizeOptions` <a name="cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-canvassizeoptions"></a>
The options for the canvas of a section\-based layout\.  
_Required_: Yes  
_Type_: [SectionBasedLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-sectionbasedlayoutcanvassizeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FooterSections` <a name="cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-footersections"></a>
A list of footer section configurations\.  
_Required_: Yes  
_Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-dashboard-headerfootersectionconfiguration.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HeaderSections` <a name="cfn-quicksight-dashboard-sectionbasedlayoutconfiguration-headersections"></a>
A list of header section configurations\.  
_Required_: Yes  
_Type_: List of [HeaderFooterSectionConfiguration](aws-properties-quicksight-dashboard-headerfootersectionconfiguration.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
