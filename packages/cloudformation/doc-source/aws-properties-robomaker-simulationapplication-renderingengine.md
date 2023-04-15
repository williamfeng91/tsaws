# AWS::RoboMaker::SimulationApplication RenderingEngine<a name="aws-properties-robomaker-simulationapplication-renderingengine"></a>

Information about a rendering engine\.

## Syntax<a name="aws-properties-robomaker-simulationapplication-renderingengine-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-robomaker-simulationapplication-renderingengine-syntax.json"></a>

```
{
  "[Name](#cfn-robomaker-simulationapplication-renderingengine-name)" : String,
  "[Version](#cfn-robomaker-simulationapplication-renderingengine-version)" : String
}
```

### YAML<a name="aws-properties-robomaker-simulationapplication-renderingengine-syntax.yaml"></a>

```
  [Name](#cfn-robomaker-simulationapplication-renderingengine-name): String
  [Version](#cfn-robomaker-simulationapplication-renderingengine-version): String
```

## Properties<a name="aws-properties-robomaker-simulationapplication-renderingengine-properties"></a>

`Name` <a name="cfn-robomaker-simulationapplication-renderingengine-name"></a>
The name of the rendering engine\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `OGRE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Version` <a name="cfn-robomaker-simulationapplication-renderingengine-version"></a>
The version of the rendering engine\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4`  
_Pattern_: `1.x`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
