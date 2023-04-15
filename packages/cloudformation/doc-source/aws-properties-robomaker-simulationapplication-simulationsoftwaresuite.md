# AWS::RoboMaker::SimulationApplication SimulationSoftwareSuite<a name="aws-properties-robomaker-simulationapplication-simulationsoftwaresuite"></a>

Information about a simulation software suite\.

## Syntax<a name="aws-properties-robomaker-simulationapplication-simulationsoftwaresuite-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-robomaker-simulationapplication-simulationsoftwaresuite-syntax.json"></a>

```
{
  "[Name](#cfn-robomaker-simulationapplication-simulationsoftwaresuite-name)" : String,
  "[Version](#cfn-robomaker-simulationapplication-simulationsoftwaresuite-version)" : String
}
```

### YAML<a name="aws-properties-robomaker-simulationapplication-simulationsoftwaresuite-syntax.yaml"></a>

```
  [Name](#cfn-robomaker-simulationapplication-simulationsoftwaresuite-name): String
  [Version](#cfn-robomaker-simulationapplication-simulationsoftwaresuite-version): String
```

## Properties<a name="aws-properties-robomaker-simulationapplication-simulationsoftwaresuite-properties"></a>

`Name` <a name="cfn-robomaker-simulationapplication-simulationsoftwaresuite-name"></a>
The name of the simulation software suite\. `SimulationRuntime` is the only supported value\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Gazebo | RosbagPlay | SimulationRuntime`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Version` <a name="cfn-robomaker-simulationapplication-simulationsoftwaresuite-version"></a>
The version of the simulation software suite\. Not applicable for `SimulationRuntime`\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1024`  
_Pattern_: `7|9|11|Kinetic|Melodic|Dashing|Foxy`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
