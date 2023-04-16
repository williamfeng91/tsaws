# AWS::QuickSight::Template HeaderFooterSectionConfiguration<a name="aws-properties-quicksight-template-headerfootersectionconfiguration"></a>

The configuration of a header or footer section\.

## Syntax<a name="aws-properties-quicksight-template-headerfootersectionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-headerfootersectionconfiguration-syntax.json"></a>

```
{
  "[Layout](#cfn-quicksight-template-headerfootersectionconfiguration-layout)" : SectionLayoutConfiguration,
  "[SectionId](#cfn-quicksight-template-headerfootersectionconfiguration-sectionid)" : String,
  "[Style](#cfn-quicksight-template-headerfootersectionconfiguration-style)" : SectionStyle
}
```

### YAML<a name="aws-properties-quicksight-template-headerfootersectionconfiguration-syntax.yaml"></a>

```
  [Layout](#cfn-quicksight-template-headerfootersectionconfiguration-layout):
    SectionLayoutConfiguration
  [SectionId](#cfn-quicksight-template-headerfootersectionconfiguration-sectionid): String
  [Style](#cfn-quicksight-template-headerfootersectionconfiguration-style):
    SectionStyle
```

## Properties<a name="aws-properties-quicksight-template-headerfootersectionconfiguration-properties"></a>

`Layout` <a name="cfn-quicksight-template-headerfootersectionconfiguration-layout"></a>
The layout configuration of the header or footer section\.  
_Required_: Yes  
_Type_: [SectionLayoutConfiguration](aws-properties-quicksight-template-sectionlayoutconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SectionId` <a name="cfn-quicksight-template-headerfootersectionconfiguration-sectionid"></a>
The unique identifier of the header or footer section\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Style` <a name="cfn-quicksight-template-headerfootersectionconfiguration-style"></a>
The style options of a header or footer section\.  
_Required_: No  
_Type_: [SectionStyle](aws-properties-quicksight-template-sectionstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
