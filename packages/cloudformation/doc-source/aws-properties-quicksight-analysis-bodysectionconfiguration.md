# AWS::QuickSight::Analysis BodySectionConfiguration<a name="aws-properties-quicksight-analysis-bodysectionconfiguration"></a>

The configuration of a body section\.

## Syntax<a name="aws-properties-quicksight-analysis-bodysectionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-bodysectionconfiguration-syntax.json"></a>

```
{
  "[Content](#cfn-quicksight-analysis-bodysectionconfiguration-content)" : BodySectionContent,
  "[PageBreakConfiguration](#cfn-quicksight-analysis-bodysectionconfiguration-pagebreakconfiguration)" : SectionPageBreakConfiguration,
  "[SectionId](#cfn-quicksight-analysis-bodysectionconfiguration-sectionid)" : String,
  "[Style](#cfn-quicksight-analysis-bodysectionconfiguration-style)" : SectionStyle
}
```

### YAML<a name="aws-properties-quicksight-analysis-bodysectionconfiguration-syntax.yaml"></a>

```
  [Content](#cfn-quicksight-analysis-bodysectionconfiguration-content):
    BodySectionContent
  [PageBreakConfiguration](#cfn-quicksight-analysis-bodysectionconfiguration-pagebreakconfiguration):
    SectionPageBreakConfiguration
  [SectionId](#cfn-quicksight-analysis-bodysectionconfiguration-sectionid): String
  [Style](#cfn-quicksight-analysis-bodysectionconfiguration-style):
    SectionStyle
```

## Properties<a name="aws-properties-quicksight-analysis-bodysectionconfiguration-properties"></a>

`Content` <a name="cfn-quicksight-analysis-bodysectionconfiguration-content"></a>
The configuration of content in a body section\.  
_Required_: Yes  
_Type_: [BodySectionContent](aws-properties-quicksight-analysis-bodysectioncontent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PageBreakConfiguration` <a name="cfn-quicksight-analysis-bodysectionconfiguration-pagebreakconfiguration"></a>
The configuration of a page break for a section\.  
_Required_: No  
_Type_: [SectionPageBreakConfiguration](aws-properties-quicksight-analysis-sectionpagebreakconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SectionId` <a name="cfn-quicksight-analysis-bodysectionconfiguration-sectionid"></a>
The unique identifier of a body section\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Style` <a name="cfn-quicksight-analysis-bodysectionconfiguration-style"></a>
The style options of a body section\.  
_Required_: No  
_Type_: [SectionStyle](aws-properties-quicksight-analysis-sectionstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
