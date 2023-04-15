# AWS::AmplifyUIBuilder::Component ComponentProperty<a name="aws-properties-amplifyuibuilder-component-componentproperty"></a>

The `ComponentProperty` property specifies the configuration for all of a component's properties\. Use `ComponentProperty` to specify the values to render or bind by default\.

## Syntax<a name="aws-properties-amplifyuibuilder-component-componentproperty-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-amplifyuibuilder-component-componentproperty-syntax.json"></a>

```
{
  "[BindingProperties](#cfn-amplifyuibuilder-component-componentproperty-bindingproperties)" : ComponentPropertyBindingProperties,
  "[Bindings](#cfn-amplifyuibuilder-component-componentproperty-bindings)" : {Key : Value, ...},
  "[CollectionBindingProperties](#cfn-amplifyuibuilder-component-componentproperty-collectionbindingproperties)" : ComponentPropertyBindingProperties,
  "[ComponentName](#cfn-amplifyuibuilder-component-componentproperty-componentname)" : String,
  "[Concat](#cfn-amplifyuibuilder-component-componentproperty-concat)" : [ ComponentProperty, ... ],
  "[Condition](#cfn-amplifyuibuilder-component-componentproperty-condition)" : ComponentConditionProperty,
  "[Configured](#cfn-amplifyuibuilder-component-componentproperty-configured)" : Boolean,
  "[DefaultValue](#cfn-amplifyuibuilder-component-componentproperty-defaultvalue)" : String,
  "[Event](#cfn-amplifyuibuilder-component-componentproperty-event)" : String,
  "[ImportedValue](#cfn-amplifyuibuilder-component-componentproperty-importedvalue)" : String,
  "[Model](#cfn-amplifyuibuilder-component-componentproperty-model)" : String,
  "[Property](#cfn-amplifyuibuilder-component-componentproperty-property)" : String,
  "[Type](#cfn-amplifyuibuilder-component-componentproperty-type)" : String,
  "[UserAttribute](#cfn-amplifyuibuilder-component-componentproperty-userattribute)" : String,
  "[Value](#cfn-amplifyuibuilder-component-componentproperty-value)" : String
}
```

### YAML<a name="aws-properties-amplifyuibuilder-component-componentproperty-syntax.yaml"></a>

```
  [BindingProperties](#cfn-amplifyuibuilder-component-componentproperty-bindingproperties):
    ComponentPropertyBindingProperties
  [Bindings](#cfn-amplifyuibuilder-component-componentproperty-bindings):
    Key : Value
  [CollectionBindingProperties](#cfn-amplifyuibuilder-component-componentproperty-collectionbindingproperties):
    ComponentPropertyBindingProperties
  [ComponentName](#cfn-amplifyuibuilder-component-componentproperty-componentname): String
  [Concat](#cfn-amplifyuibuilder-component-componentproperty-concat):
    - ComponentProperty
  [Condition](#cfn-amplifyuibuilder-component-componentproperty-condition):
    ComponentConditionProperty
  [Configured](#cfn-amplifyuibuilder-component-componentproperty-configured): Boolean
  [DefaultValue](#cfn-amplifyuibuilder-component-componentproperty-defaultvalue): String
  [Event](#cfn-amplifyuibuilder-component-componentproperty-event): String
  [ImportedValue](#cfn-amplifyuibuilder-component-componentproperty-importedvalue): String
  [Model](#cfn-amplifyuibuilder-component-componentproperty-model): String
  [Property](#cfn-amplifyuibuilder-component-componentproperty-property): String
  [Type](#cfn-amplifyuibuilder-component-componentproperty-type): String
  [UserAttribute](#cfn-amplifyuibuilder-component-componentproperty-userattribute): String
  [Value](#cfn-amplifyuibuilder-component-componentproperty-value): String
```

## Properties<a name="aws-properties-amplifyuibuilder-component-componentproperty-properties"></a>

`BindingProperties` <a name="cfn-amplifyuibuilder-component-componentproperty-bindingproperties"></a>
The information to bind the component property to data at runtime\.  
_Required_: No  
_Type_: [ComponentPropertyBindingProperties](aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Bindings` <a name="cfn-amplifyuibuilder-component-componentproperty-bindings"></a>
The information to bind the component property to form data\.  
_Required_: No  
_Type_: Map of [FormBindingElement](aws-properties-amplifyuibuilder-component-formbindingelement.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CollectionBindingProperties` <a name="cfn-amplifyuibuilder-component-componentproperty-collectionbindingproperties"></a>
The information to bind the component property to data at runtime\. Use this for collection components\.  
_Required_: No  
_Type_: [ComponentPropertyBindingProperties](aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComponentName` <a name="cfn-amplifyuibuilder-component-componentproperty-componentname"></a>
The name of the component that is affected by an event\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Concat` <a name="cfn-amplifyuibuilder-component-componentproperty-concat"></a>
A list of component properties to concatenate to create the value to assign to this component property\.  
_Required_: No  
_Type_: List of [ComponentProperty](#aws-properties-amplifyuibuilder-component-componentproperty)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Condition` <a name="cfn-amplifyuibuilder-component-componentproperty-condition"></a>
The conditional expression to use to assign a value to the component property\.  
_Required_: No  
_Type_: [ComponentConditionProperty](aws-properties-amplifyuibuilder-component-componentconditionproperty.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Configured` <a name="cfn-amplifyuibuilder-component-componentproperty-configured"></a>
Specifies whether the user configured the property in Amplify Studio after importing it\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultValue` <a name="cfn-amplifyuibuilder-component-componentproperty-defaultvalue"></a>
The default value to assign to the component property\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Event` <a name="cfn-amplifyuibuilder-component-componentproperty-event"></a>
An event that occurs in your app\. Use this for workflow data binding\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImportedValue` <a name="cfn-amplifyuibuilder-component-componentproperty-importedvalue"></a>
The default value assigned to the property when the component is imported into an app\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Model` <a name="cfn-amplifyuibuilder-component-componentproperty-model"></a>
The data model to use to assign a value to the component property\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Property` <a name="cfn-amplifyuibuilder-component-componentproperty-property"></a>
The name of the component's property that is affected by an event\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-amplifyuibuilder-component-componentproperty-type"></a>
The component type\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserAttribute` <a name="cfn-amplifyuibuilder-component-componentproperty-userattribute"></a>
An authenticated user attribute to use to assign a value to the component property\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-amplifyuibuilder-component-componentproperty-value"></a>
The value to assign to the component property\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
