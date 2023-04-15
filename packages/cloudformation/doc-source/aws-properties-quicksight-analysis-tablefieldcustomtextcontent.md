# AWS::QuickSight::Analysis TableFieldCustomTextContent<a name="aws-properties-quicksight-analysis-tablefieldcustomtextcontent"></a>

The custom text content \(value, font configuration\) for the table link content configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-tablefieldcustomtextcontent-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-tablefieldcustomtextcontent-syntax.json"></a>

```
{
  "[FontConfiguration](#cfn-quicksight-analysis-tablefieldcustomtextcontent-fontconfiguration)" : FontConfiguration,
  "[Value](#cfn-quicksight-analysis-tablefieldcustomtextcontent-value)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-tablefieldcustomtextcontent-syntax.yaml"></a>

```
  [FontConfiguration](#cfn-quicksight-analysis-tablefieldcustomtextcontent-fontconfiguration):
    FontConfiguration
  [Value](#cfn-quicksight-analysis-tablefieldcustomtextcontent-value): String
```

## Properties<a name="aws-properties-quicksight-analysis-tablefieldcustomtextcontent-properties"></a>

`FontConfiguration` <a name="cfn-quicksight-analysis-tablefieldcustomtextcontent-fontconfiguration"></a>
The font configuration of the custom text content for the table URL link content\.  
_Required_: Yes  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-tablefieldcustomtextcontent-value"></a>
The string value of the custom text content for the table URL link content\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
