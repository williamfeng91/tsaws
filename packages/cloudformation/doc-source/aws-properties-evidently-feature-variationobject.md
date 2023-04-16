# AWS::Evidently::Feature VariationObject<a name="aws-properties-evidently-feature-variationobject"></a>

This structure contains the name and variation value of one variation of a feature\. It can contain only one of the following parameters: `BooleanValue`, `DoubleValue`, `LongValue` or `StringValue`\.

## Syntax<a name="aws-properties-evidently-feature-variationobject-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-evidently-feature-variationobject-syntax.json"></a>

```
{
  "[BooleanValue](#cfn-evidently-feature-variationobject-booleanvalue)" : Boolean,
  "[DoubleValue](#cfn-evidently-feature-variationobject-doublevalue)" : Double,
  "[LongValue](#cfn-evidently-feature-variationobject-longvalue)" : Double,
  "[StringValue](#cfn-evidently-feature-variationobject-stringvalue)" : String,
  "[VariationName](#cfn-evidently-feature-variationobject-variationname)" : String
}
```

### YAML<a name="aws-properties-evidently-feature-variationobject-syntax.yaml"></a>

```
  [BooleanValue](#cfn-evidently-feature-variationobject-booleanvalue):
    Boolean
  [DoubleValue](#cfn-evidently-feature-variationobject-doublevalue):
    Double
  [LongValue](#cfn-evidently-feature-variationobject-longvalue): Double
  [StringValue](#cfn-evidently-feature-variationobject-stringvalue):
    String
  [VariationName](#cfn-evidently-feature-variationobject-variationname): String
```

## Properties<a name="aws-properties-evidently-feature-variationobject-properties"></a>

`BooleanValue` <a name="cfn-evidently-feature-variationobject-booleanvalue"></a>
The value assigned to this variation, if the variation type is boolean\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DoubleValue` <a name="cfn-evidently-feature-variationobject-doublevalue"></a>
The value assigned to this variation, if the variation type is a double\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LongValue` <a name="cfn-evidently-feature-variationobject-longvalue"></a>
The value assigned to this variation, if the variation type is a long\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringValue` <a name="cfn-evidently-feature-variationobject-stringvalue"></a>
The value assigned to this variation, if the variation type is a string\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VariationName` <a name="cfn-evidently-feature-variationobject-variationname"></a>
A name for the variation\. It can include up to 127 characters\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
