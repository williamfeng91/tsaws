# AWS::IoTSiteWise::AssetModel VariableValue<a name="aws-properties-iotsitewise-assetmodel-variablevalue"></a>

Identifies a property value used in an expression\.

## Syntax<a name="aws-properties-iotsitewise-assetmodel-variablevalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotsitewise-assetmodel-variablevalue-syntax.json"></a>

```
{
  "[HierarchyLogicalId](#cfn-iotsitewise-assetmodel-variablevalue-hierarchylogicalid)" : String,
  "[PropertyLogicalId](#cfn-iotsitewise-assetmodel-variablevalue-propertylogicalid)" : String
}
```

### YAML<a name="aws-properties-iotsitewise-assetmodel-variablevalue-syntax.yaml"></a>

```
  [HierarchyLogicalId](#cfn-iotsitewise-assetmodel-variablevalue-hierarchylogicalid): String
  [PropertyLogicalId](#cfn-iotsitewise-assetmodel-variablevalue-propertylogicalid): String
```

## Properties<a name="aws-properties-iotsitewise-assetmodel-variablevalue-properties"></a>

`HierarchyLogicalId` <a name="cfn-iotsitewise-assetmodel-variablevalue-hierarchylogicalid"></a>
The `LogicalID` of the hierarchy to query for the `PropertyLogicalID`\.  
You use a `hierarchyLogicalID` instead of a model ID because you can have several hierarchies using the same model and therefore the same property\. For example, you might have separately grouped assets that come from the same asset model\. For more information, see [Defining relationships between assets](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWise User Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PropertyLogicalId` <a name="cfn-iotsitewise-assetmodel-variablevalue-propertylogicalid"></a>
The `LogicalID` of the property to use as the variable\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
