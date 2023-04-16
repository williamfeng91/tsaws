# AWS::Scheduler::Schedule PlacementConstraint<a name="aws-properties-scheduler-schedule-placementconstraint"></a>

An object representing a constraint on task placement\.

## Syntax<a name="aws-properties-scheduler-schedule-placementconstraint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-scheduler-schedule-placementconstraint-syntax.json"></a>

```
{
  "[Expression](#cfn-scheduler-schedule-placementconstraint-expression)" : String,
  "[Type](#cfn-scheduler-schedule-placementconstraint-type)" : String
}
```

### YAML<a name="aws-properties-scheduler-schedule-placementconstraint-syntax.yaml"></a>

```
  [Expression](#cfn-scheduler-schedule-placementconstraint-expression): String
  [Type](#cfn-scheduler-schedule-placementconstraint-type): String
```

## Properties<a name="aws-properties-scheduler-schedule-placementconstraint-properties"></a>

`Expression` <a name="cfn-scheduler-schedule-placementconstraint-expression"></a>
A cluster query language expression to apply to the constraint\. You cannot specify an expression if the constraint type is `distinctInstance`\. For more information, see [Cluster query language](https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html) in the _Amazon ECS Developer Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-scheduler-schedule-placementconstraint-type"></a>
The type of constraint\. Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance\. Use `memberOf` to restrict the selection to a group of valid candidates\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
