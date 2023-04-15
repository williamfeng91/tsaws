# AWS::AmplifyUIBuilder::Component ComponentChild<a name="aws-properties-amplifyuibuilder-component-componentchild"></a>

The `ComponentChild` property specifies a nested UI configuration within a parent `Component`\.

## Syntax<a name="aws-properties-amplifyuibuilder-component-componentchild-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-amplifyuibuilder-component-componentchild-syntax.json"></a>

```
{
  "[Children](#cfn-amplifyuibuilder-component-componentchild-children)" : [ ComponentChild, ... ],
  "[ComponentType](#cfn-amplifyuibuilder-component-componentchild-componenttype)" : String,
  "[Events](#cfn-amplifyuibuilder-component-componentchild-events)" : {Key : Value, ...},
  "[Name](#cfn-amplifyuibuilder-component-componentchild-name)" : String,
  "[Properties](#cfn-amplifyuibuilder-component-componentchild-properties)" : {Key : Value, ...}
}
```

### YAML<a name="aws-properties-amplifyuibuilder-component-componentchild-syntax.yaml"></a>

```
  [Children](#cfn-amplifyuibuilder-component-componentchild-children):
    - ComponentChild
  [ComponentType](#cfn-amplifyuibuilder-component-componentchild-componenttype): String
  [Events](#cfn-amplifyuibuilder-component-componentchild-events):
    Key : Value
  [Name](#cfn-amplifyuibuilder-component-componentchild-name): String
  [Properties](#cfn-amplifyuibuilder-component-componentchild-properties):
    Key : Value
```

## Properties<a name="aws-properties-amplifyuibuilder-component-componentchild-properties"></a>

`Children` <a name="cfn-amplifyuibuilder-component-componentchild-children"></a>
The list of `ComponentChild` instances for this component\.  
_Required_: No  
_Type_: List of [ComponentChild](#aws-properties-amplifyuibuilder-component-componentchild)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComponentType` <a name="cfn-amplifyuibuilder-component-componentchild-componenttype"></a>
The type of the child component\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Events` <a name="cfn-amplifyuibuilder-component-componentchild-events"></a>
Describes the events that can be raised on the child component\. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components\.  
_Required_: No  
_Type_: Map of [ComponentEvent](aws-properties-amplifyuibuilder-component-componentevent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-amplifyuibuilder-component-componentchild-name"></a>
The name of the child component\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Properties` <a name="cfn-amplifyuibuilder-component-componentchild-properties"></a>
Describes the properties of the child component\. You can't specify `tags` as a valid property for `properties`\.  
_Required_: Yes  
_Type_: Map of [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
