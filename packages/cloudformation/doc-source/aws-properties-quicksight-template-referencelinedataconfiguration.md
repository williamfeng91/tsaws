# AWS::QuickSight::Template ReferenceLineDataConfiguration<a name="aws-properties-quicksight-template-referencelinedataconfiguration"></a>

The data configuration of the reference line\.

## Syntax<a name="aws-properties-quicksight-template-referencelinedataconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-referencelinedataconfiguration-syntax.json"></a>

```
{
  "[AxisBinding](#cfn-quicksight-template-referencelinedataconfiguration-axisbinding)" : String,
  "[DynamicConfiguration](#cfn-quicksight-template-referencelinedataconfiguration-dynamicconfiguration)" : ReferenceLineDynamicDataConfiguration,
  "[StaticConfiguration](#cfn-quicksight-template-referencelinedataconfiguration-staticconfiguration)" : ReferenceLineStaticDataConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-referencelinedataconfiguration-syntax.yaml"></a>

```
  [AxisBinding](#cfn-quicksight-template-referencelinedataconfiguration-axisbinding): String
  [DynamicConfiguration](#cfn-quicksight-template-referencelinedataconfiguration-dynamicconfiguration):
    ReferenceLineDynamicDataConfiguration
  [StaticConfiguration](#cfn-quicksight-template-referencelinedataconfiguration-staticconfiguration):
    ReferenceLineStaticDataConfiguration
```

## Properties<a name="aws-properties-quicksight-template-referencelinedataconfiguration-properties"></a>

`AxisBinding` <a name="cfn-quicksight-template-referencelinedataconfiguration-axisbinding"></a>
The axis binding type of the reference line\. Choose one of the following options:

- PrimaryY
- SecondaryY
  _Required_: No  
  _Type_: String  
  _Allowed values_: `PRIMARY_YAXIS | SECONDARY_YAXIS`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DynamicConfiguration` <a name="cfn-quicksight-template-referencelinedataconfiguration-dynamicconfiguration"></a>
The dynamic configuration of the reference line data configuration\.  
_Required_: No  
_Type_: [ReferenceLineDynamicDataConfiguration](aws-properties-quicksight-template-referencelinedynamicdataconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticConfiguration` <a name="cfn-quicksight-template-referencelinedataconfiguration-staticconfiguration"></a>
The static data configuration of the reference line data configuration\.  
_Required_: No  
_Type_: [ReferenceLineStaticDataConfiguration](aws-properties-quicksight-template-referencelinestaticdataconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
