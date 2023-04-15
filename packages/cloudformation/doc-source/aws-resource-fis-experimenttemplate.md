# AWS::FIS::ExperimentTemplate<a name="aws-resource-fis-experimenttemplate"></a>

Specifies an experiment template\.

An experiment template includes the following components:

- **Targets**: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags\.
- **Actions**: The actions to carry out on the target\. You can specify multiple actions, the duration of each action, and when to start each action during an experiment\.
- **Stop conditions**: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped\. You can define a stop condition as a CloudWatch alarm\.

For more information, see [Experiment templates](https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html) in the _AWS Fault Injection Simulator User Guide_\.

## Syntax<a name="aws-resource-fis-experimenttemplate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-fis-experimenttemplate-syntax.json"></a>

```
{
  "Type" : "AWS::FIS::ExperimentTemplate",
  "Properties" : {
      "[Actions](#cfn-fis-experimenttemplate-actions)" : {Key : Value, ...},
      "[Description](#cfn-fis-experimenttemplate-description)" : String,
      "[LogConfiguration](#cfn-fis-experimenttemplate-logconfiguration)" : ExperimentTemplateLogConfiguration,
      "[RoleArn](#cfn-fis-experimenttemplate-rolearn)" : String,
      "[StopConditions](#cfn-fis-experimenttemplate-stopconditions)" : [ ExperimentTemplateStopCondition, ... ],
      "[Tags](#cfn-fis-experimenttemplate-tags)" : {Key : Value, ...},
      "[Targets](#cfn-fis-experimenttemplate-targets)" : {Key : Value, ...}
    }
}
```

### YAML<a name="aws-resource-fis-experimenttemplate-syntax.yaml"></a>

```
Type: AWS::FIS::ExperimentTemplate
Properties:
  [Actions](#cfn-fis-experimenttemplate-actions):
    Key : Value
  [Description](#cfn-fis-experimenttemplate-description): String
  [LogConfiguration](#cfn-fis-experimenttemplate-logconfiguration):
    ExperimentTemplateLogConfiguration
  [RoleArn](#cfn-fis-experimenttemplate-rolearn): String
  [StopConditions](#cfn-fis-experimenttemplate-stopconditions):
    - ExperimentTemplateStopCondition
  [Tags](#cfn-fis-experimenttemplate-tags):
    Key : Value
  [Targets](#cfn-fis-experimenttemplate-targets):
    Key : Value
```

## Properties<a name="aws-resource-fis-experimenttemplate-properties"></a>

`Actions` <a name="cfn-fis-experimenttemplate-actions"></a>
The actions for the experiment\.  
_Required_: No  
_Type_: Map of [ExperimentTemplateAction](aws-properties-fis-experimenttemplate-experimenttemplateaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-fis-experimenttemplate-description"></a>
A description for the experiment template\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `[\s\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LogConfiguration` <a name="cfn-fis-experimenttemplate-logconfiguration"></a>
The configuration for experiment logging\.  
_Required_: No  
_Type_: [ExperimentTemplateLogConfiguration](aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-fis-experimenttemplate-rolearn"></a>
The Amazon Resource Name \(ARN\) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `[\S]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StopConditions` <a name="cfn-fis-experimenttemplate-stopconditions"></a>
The stop conditions\.  
_Required_: Yes  
_Type_: List of [ExperimentTemplateStopCondition](aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-fis-experimenttemplate-tags"></a>
The tags to apply to the experiment template\.  
_Required_: Yes  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Targets` <a name="cfn-fis-experimenttemplate-targets"></a>
The targets for the experiment\.  
_Required_: Yes  
_Type_: Map of [ExperimentTemplateTarget](aws-properties-fis-experimenttemplate-experimenttemplatetarget.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-fis-experimenttemplate-return-values"></a>

### Ref<a name="aws-resource-fis-experimenttemplate-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the experiment template ID\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-fis-experimenttemplate-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-fis-experimenttemplate-return-values-fn--getatt-fn--getatt"></a>

`Id` <a name="Id-fn::getatt"></a>
The ID of the experiment template\.

## Examples<a name="aws-resource-fis-experimenttemplate--examples"></a>

### <a name="aws-resource-fis-experimenttemplate--examples--"></a>

The following example creates an experiment template that stops and starts one instance with the tag env=prod, chosen at random\.

#### YAML<a name="aws-resource-fis-experimenttemplate--examples----yaml"></a>

```
Resources:
  ExperimentTemplate:
    Type: 'AWS::FIS::ExperimentTemplate'
    Properties:
      Description: 'stop an instance based on a tag'
      Actions:
        stopInstances:
          ActionId: 'aws:ec2:stop-instances'
          Parameters:
            startInstancesAfterDuration: 'PT2M'
          Targets:
            Instances: oneRandomInstance
      Targets:
        oneRandomInstance:
          ResourceTags:
            'env': 'prod'
          ResourceType: 'aws:ec2:instance'
          SelectionMode: 'COUNT(1)'
      StopConditions:
        - Source: 'none'
      Tags:
        Name: 'fisStopInstances'
      RoleArn: !GetAtt FISRole.Arn
  FISRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: 'fis.amazonaws.com'
            Action: 'sts:AssumeRole'
      Policies:
        - PolicyName: 'FISRoleEC2Actions'
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - 'ec2:RebootInstances'
                  - 'ec2:StopInstances'
                  - 'ec2:StartInstances'
                  - 'ec2:TerminateInstances'
                Resource: 'arn:aws:ec2:*:*:instance/*'
```

### <a name="aws-resource-fis-experimenttemplate--examples--"></a>

#### JSON<a name="aws-resource-fis-experimenttemplate--examples----json"></a>

```
{
  "Resources": {
    "ExperimentTemplate": {
      "Type": "AWS::FIS::ExperimentTemplate",
      "DeletionPolicy": "Retain",
      "Properties": {
        "Description": "stop an instance based on a tag",
        "Actions": {
          "stopInstances": {
            "ActionId": "aws:ec2:stop-instances",
            "Parameters": {
              "startInstancesAfterDuration": "PT2M"
            },
            "Targets": {
              "Instances": "oneRandomInstance"
            }
          }
        },
        "Targets": {
          "oneRandomInstance": {
            "ResourceTags": {
              "env": "prod"
            },
            "ResourceType": "aws:ec2:instance",
            "SelectionMode": "COUNT(1)"
          }
        },
        "StopConditions": [
          {
            "Source": "none"
          }
        ],
        "Tags": {
          "Name": "fisStopInstancesJson"
        },
        "RoleArn": {
          "Fn::GetAtt": ["FISRole", "Arn"]
        }
      }
    },
    "FISRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                  "Service": "fis.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
          ]
        },
        "Policies": [
          {
            "PolicyName": "FISRoleEC2Actions",
            "PolicyDocument": {
              "Version": "2012-10-17",
              "Statement": [
                {
                  "Effect": "Allow",
                  "Action": [
                    "ec2:RebootInstances",
                    "ec2:StopInstances",
                    "ec2:StartInstances",
                    "ec2:TerminateInstances"
                  ],
                  "Resource": "arn:aws:ec2:*:*:instance/*"
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```
