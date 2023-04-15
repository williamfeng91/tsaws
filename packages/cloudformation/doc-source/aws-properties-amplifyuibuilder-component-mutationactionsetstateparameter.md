# AWS::AmplifyUIBuilder::Component MutationActionSetStateParameter<a name="aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter"></a>

The `MutationActionSetStateParameter` property specifies the state configuration when an action modifies a property of another element within the same component\.

## Syntax<a name="aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter-syntax.json"></a>

```
{
  "[ComponentName](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-componentname)" : String,
  "[Property](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-property)" : String,
  "[Set](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-set)" : ComponentProperty
}
```

### YAML<a name="aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter-syntax.yaml"></a>

```
  [ComponentName](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-componentname): String
  [Property](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-property): String
  [Set](#cfn-amplifyuibuilder-component-mutationactionsetstateparameter-set):
    ComponentProperty
```

## Properties<a name="aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter-properties"></a>

`ComponentName` <a name="cfn-amplifyuibuilder-component-mutationactionsetstateparameter-componentname"></a>
The name of the component that is being modified\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Property` <a name="cfn-amplifyuibuilder-component-mutationactionsetstateparameter-property"></a>
The name of the component property to apply the state configuration to\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Set` <a name="cfn-amplifyuibuilder-component-mutationactionsetstateparameter-set"></a>
The state configuration to assign to the property\.  
_Required_: Yes  
_Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
