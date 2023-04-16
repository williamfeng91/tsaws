# AWS::IoTTwinMaker::Entity DataValue<a name="aws-properties-iottwinmaker-entity-datavalue"></a>

An object that specifies a value for a property\.

## Syntax<a name="aws-properties-iottwinmaker-entity-datavalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iottwinmaker-entity-datavalue-syntax.json"></a>

```
{
  "[BooleanValue](#cfn-iottwinmaker-entity-datavalue-booleanvalue)" : Boolean,
  "[DoubleValue](#cfn-iottwinmaker-entity-datavalue-doublevalue)" : Double,
  "[Expression](#cfn-iottwinmaker-entity-datavalue-expression)" : String,
  "[IntegerValue](#cfn-iottwinmaker-entity-datavalue-integervalue)" : Integer,
  "[ListValue](#cfn-iottwinmaker-entity-datavalue-listvalue)" : [ DataValue, ... ],
  "[LongValue](#cfn-iottwinmaker-entity-datavalue-longvalue)" : Double,
  "[MapValue](#cfn-iottwinmaker-entity-datavalue-mapvalue)" : {Key : Value, ...},
  "[RelationshipValue](#cfn-iottwinmaker-entity-datavalue-relationshipvalue)" : RelationshipValue,
  "[StringValue](#cfn-iottwinmaker-entity-datavalue-stringvalue)" : String
}
```

### YAML<a name="aws-properties-iottwinmaker-entity-datavalue-syntax.yaml"></a>

```
  [BooleanValue](#cfn-iottwinmaker-entity-datavalue-booleanvalue):
    Boolean
  [DoubleValue](#cfn-iottwinmaker-entity-datavalue-doublevalue):
    Double
  [Expression](#cfn-iottwinmaker-entity-datavalue-expression): String
  [IntegerValue](#cfn-iottwinmaker-entity-datavalue-integervalue):
    Integer
  [ListValue](#cfn-iottwinmaker-entity-datavalue-listvalue):
    - DataValue
  [LongValue](#cfn-iottwinmaker-entity-datavalue-longvalue): Double
  [MapValue](#cfn-iottwinmaker-entity-datavalue-mapvalue):
    Key : Value
  [RelationshipValue](#cfn-iottwinmaker-entity-datavalue-relationshipvalue):
    RelationshipValue
  [StringValue](#cfn-iottwinmaker-entity-datavalue-stringvalue):
    String
```

## Properties<a name="aws-properties-iottwinmaker-entity-datavalue-properties"></a>

`BooleanValue` <a name="cfn-iottwinmaker-entity-datavalue-booleanvalue"></a>
A boolean value\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DoubleValue` <a name="cfn-iottwinmaker-entity-datavalue-doublevalue"></a>
A double value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-iottwinmaker-entity-datavalue-expression"></a>
An expression that produces the value\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IntegerValue` <a name="cfn-iottwinmaker-entity-datavalue-integervalue"></a>
An integer value\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ListValue` <a name="cfn-iottwinmaker-entity-datavalue-listvalue"></a>
A list of multiple values\.  
_Required_: No  
_Type_: List of [DataValue](#aws-properties-iottwinmaker-entity-datavalue)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LongValue` <a name="cfn-iottwinmaker-entity-datavalue-longvalue"></a>
A long value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MapValue` <a name="cfn-iottwinmaker-entity-datavalue-mapvalue"></a>
An object that maps strings to multiple DataValue objects\.  
_Required_: No  
_Type_: Map of [DataValue](#aws-properties-iottwinmaker-entity-datavalue)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RelationshipValue` <a name="cfn-iottwinmaker-entity-datavalue-relationshipvalue"></a>
A value that relates a component to another component\.  
_Required_: No  
_Type_: [RelationshipValue](aws-properties-iottwinmaker-entity-relationshipvalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringValue` <a name="cfn-iottwinmaker-entity-datavalue-stringvalue"></a>
A string value\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
