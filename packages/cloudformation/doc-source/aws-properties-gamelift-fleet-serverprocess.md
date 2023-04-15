# AWS::GameLift::Fleet ServerProcess<a name="aws-properties-gamelift-fleet-serverprocess"></a>

A set of instructions for launching server processes on each instance in a fleet\. Server processes run either an executable in a custom game build or a Realtime Servers script\.

## Syntax<a name="aws-properties-gamelift-fleet-serverprocess-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-gamelift-fleet-serverprocess-syntax.json"></a>

```
{
  "[ConcurrentExecutions](#cfn-gamelift-fleet-serverprocess-concurrentexecutions)" : Integer,
  "[LaunchPath](#cfn-gamelift-fleet-serverprocess-launchpath)" : String,
  "[Parameters](#cfn-gamelift-fleet-serverprocess-parameters)" : String
}
```

### YAML<a name="aws-properties-gamelift-fleet-serverprocess-syntax.yaml"></a>

```
  [ConcurrentExecutions](#cfn-gamelift-fleet-serverprocess-concurrentexecutions): Integer
  [LaunchPath](#cfn-gamelift-fleet-serverprocess-launchpath): String
  [Parameters](#cfn-gamelift-fleet-serverprocess-parameters): String
```

## Properties<a name="aws-properties-gamelift-fleet-serverprocess-properties"></a>

`ConcurrentExecutions` <a name="cfn-gamelift-fleet-serverprocess-concurrentexecutions"></a>
The number of server processes using this configuration that run concurrently on each instance\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchPath` <a name="cfn-gamelift-fleet-serverprocess-launchpath"></a>
The location of a game build executable or the Realtime script file that contains the `Init()` function\. Game builds and Realtime scripts are installed on instances at the root:

- Windows \(custom game builds only\): `C:\game`\. Example: "`C:\game\MyGame\server.exe`"
- Linux: `/local/game`\. Examples: "`/local/game/MyGame/server.exe`" or "`/local/game/MyRealtimeScript.js`"
  _Required_: Yes  
  _Type_: String  
  _Minimum_: `1`  
  _Maximum_: `1024`  
  _Pattern_: `[A-Za-z0-9_:.+\/\\\- ]+`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-gamelift-fleet-serverprocess-parameters"></a>
An optional list of parameters to pass to the server executable or Realtime script on launch\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Pattern_: `[A-Za-z0-9_:.+\/\\\- =@;{},?'\[\]"]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-gamelift-fleet-serverprocess--seealso"></a>

- [ Create GameLift resources using Amazon CloudFront](https://docs.aws.amazon.com/gamelift/latest/developerguide/resources-cloudformation.html) in the _Amazon GameLift Developer Guide_
- [Deploy a GameLift fleet for a custom game build](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating.html) in the _Amazon GameLift Developer Guide_
- [Deploy a Realtime Servers fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-fleets-creating.html) in the _Amazon GameLift Developer Guide_
- [Run multiple processes on a fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html) in the _Amazon GameLift Developer Guide_
- [ServerProcess](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ServerProcess.html) in the _Amazon GameLift API Reference_
