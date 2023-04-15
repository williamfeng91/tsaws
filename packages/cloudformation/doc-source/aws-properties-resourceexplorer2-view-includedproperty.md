# AWS::ResourceExplorer2::View IncludedProperty<a name="aws-properties-resourceexplorer2-view-includedproperty"></a>

Information about an additional property that describes a resource, that you can optionally include in a view\.

## Syntax<a name="aws-properties-resourceexplorer2-view-includedproperty-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-resourceexplorer2-view-includedproperty-syntax.json"></a>

```
{
  "[Name](#cfn-resourceexplorer2-view-includedproperty-name)" : String
}
```

### YAML<a name="aws-properties-resourceexplorer2-view-includedproperty-syntax.yaml"></a>

```
  [Name](#cfn-resourceexplorer2-view-includedproperty-name): String
```

## Properties<a name="aws-properties-resourceexplorer2-view-includedproperty-properties"></a>

`Name` <a name="cfn-resourceexplorer2-view-includedproperty-name"></a>
The name of the property that is included in this view\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1011`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
