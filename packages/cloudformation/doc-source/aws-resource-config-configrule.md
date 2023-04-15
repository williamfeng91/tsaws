# AWS::Config::ConfigRule<a name="aws-resource-config-configrule"></a>

Adds or updates an AWS Config rule to evaluate if your AWS resources comply with your desired configurations\. For information on how many AWS Config rules you can have per account, see [https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the _AWS Config Developer Guide_\.

There are two types of rules: _AWS Config Managed Rules_ and _AWS Config Custom Rules_\. You can use the `ConfigRule` resource to create both AWS Config Managed Rules and AWS Config Custom Rules\.

AWS Config Managed Rules are predefined, customizable rules created by AWS Config\. For a list of managed rules, see [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html)\. If you are adding an AWS Config managed rule, you must specify the rule's identifier for the `SourceIdentifier` key\.

AWS Config Custom Rules are rules that you create from scratch\. There are two ways to create AWS Config custom rules: with Lambda functions \([AWS Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function)\) and with Guard \([Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard)\), a policy\-as\-code language\. AWS Config custom rules created with AWS Lambda are called _AWS Config Custom Lambda Rules_ and AWS Config custom rules created with Guard are called _AWS Config Custom Policy Rules_\.

If you are adding a newAWS Config Custom Lambda rule, you first need to create an AWS Lambda function that the rule invokes to evaluate your resources\. When you use the `ConfigRule` resource to add a Custom Lambda rule to AWS Config, you must specify the Amazon Resource Name \(ARN\) that AWS Lambda assigns to the function\. You specify the ARN in the `SourceIdentifier` key\. This key is part of the `Source` object, which is part of the `ConfigRule` object\.

For any new AWS Config rule that you add, specify the `ConfigRuleName` in the `ConfigRule` object\. Do not specify the `ConfigRuleArn` or the `ConfigRuleId`\. These values are generated by AWS Config for new rules\.

If you are updating a rule that you added previously, you can specify the rule by `ConfigRuleName`, `ConfigRuleId`, or `ConfigRuleArn` in the `ConfigRule` data type that you use in this request\.

For more information about developing and using AWS Config rules, see [Evaluating Resources with AWS Config Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html) in the _AWS Config Developer Guide_\.

## Syntax<a name="aws-resource-config-configrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-config-configrule-syntax.json"></a>

```
{
  "Type" : "AWS::Config::ConfigRule",
  "Properties" : {
      "[ConfigRuleName](#cfn-config-configrule-configrulename)" : String,
      "[Description](#cfn-config-configrule-description)" : String,
      "[InputParameters](#cfn-config-configrule-inputparameters)" : Json,
      "[MaximumExecutionFrequency](#cfn-config-configrule-maximumexecutionfrequency)" : String,
      "[Scope](#cfn-config-configrule-scope)" : Scope,
      "[Source](#cfn-config-configrule-source)" : Source
    }
}
```

### YAML<a name="aws-resource-config-configrule-syntax.yaml"></a>

```
Type: AWS::Config::ConfigRule
Properties:
  [ConfigRuleName](#cfn-config-configrule-configrulename): String
  [Description](#cfn-config-configrule-description): String
  [InputParameters](#cfn-config-configrule-inputparameters): Json
  [MaximumExecutionFrequency](#cfn-config-configrule-maximumexecutionfrequency): String
  [Scope](#cfn-config-configrule-scope):
    Scope
  [Source](#cfn-config-configrule-source):
    Source
```

## Properties<a name="aws-resource-config-configrule-properties"></a>

`ConfigRuleName` <a name="cfn-config-configrule-configrulename"></a>
A name for the AWS Config rule\. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name\. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `.*\S.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Description` <a name="cfn-config-configrule-description"></a>
The description that you provide for the AWS Config rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputParameters` <a name="cfn-config-configrule-inputparameters"></a>
A string, in JSON format, that is passed to the AWS Config rule Lambda function\.  
_Required_: No  
_Type_: Json  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumExecutionFrequency` <a name="cfn-config-configrule-maximumexecutionfrequency"></a>
The maximum frequency with which AWS Config runs evaluations for a rule\. You can specify a value for `MaximumExecutionFrequency` when:

- You are using an AWS managed rule that is triggered at a periodic frequency\.
- Your custom rule is triggered when AWS Config delivers the configuration snapshot\. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html)\.
  By default, rules with a periodic trigger are evaluated every 24 hours\. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Scope` <a name="cfn-config-configrule-scope"></a>
Defines which resources can trigger an evaluation for the rule\. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value\. Specify a scope to constrain the resources that can trigger an evaluation for the rule\. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes\.  
The scope can be empty\.
_Required_: No  
_Type_: [Scope](aws-properties-config-configrule-scope.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Source` <a name="cfn-config-configrule-source"></a>
Provides the rule owner \(`AWS` for managed rules, `CUSTOM_POLICY` for Custom Policy rules, and `CUSTOM_LAMBDA` for Custom Lambda rules\), the rule identifier, and the notifications that cause the function to evaluate your AWS resources\.  
_Required_: Yes  
_Type_: [Source](aws-properties-config-configrule-source.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-config-configrule-return-values"></a>

### Ref<a name="aws-resource-config-configrule-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the rule name, such as `mystack-MyConfigRule-12ABCFPXHV4OV`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-config-configrule-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-config-configrule-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the AWS Config rule, such as `arn:aws:config:us-east-1:123456789012:config-rule/config-rule-a1bzhi`\.

`Compliance.Type` <a name="Compliance.Type-fn::getatt"></a>
The compliance status of an AWS Config rule, such as `COMPLIANT` or `NON_COMPLIANT`\.

`ConfigRuleId` <a name="ConfigRuleId-fn::getatt"></a>
The ID of the AWS Config rule, such as `config-rule-a1bzhi`\.

## Examples<a name="aws-resource-config-configrule--examples"></a>

### Config Rule<a name="aws-resource-config-configrule--examples--Config_Rule"></a>

The following example uses an AWS managed rule that checks whether EC2 volumes resource types have a CostCenter tag\.

#### JSON<a name="aws-resource-config-configrule--examples--Config_Rule--json"></a>

```
"ConfigRuleForVolumeTags": {
  "Type": "AWS::Config::ConfigRule",
  "Properties": {
    "InputParameters": {"tag1Key": "CostCenter"},
    "Scope": {
      "ComplianceResourceTypes": ["AWS::EC2::Volume"]
    },
    "Source": {
      "Owner": "AWS",
      "SourceIdentifier": "REQUIRED_TAGS"
    }
  }
}
```

#### YAML<a name="aws-resource-config-configrule--examples--Config_Rule--yaml"></a>

```
ConfigRuleForVolumeTags:
  Type: AWS::Config::ConfigRule
  Properties:
    InputParameters: |
        {"tag1Key": "CostCenter"}
    Scope:
      ComplianceResourceTypes:
        - "AWS::EC2::Volume"
    Source:
      Owner: AWS
      SourceIdentifier: "REQUIRED_TAGS"
```

### Create Rule Using Lambda Function<a name="aws-resource-config-configrule--examples--Create_Rule_Using_Lambda_Function"></a>

The following example creates a custom configuration rule that uses a Lambda function\. The function checks whether an EC2 volume has the AutoEnableIO property set to true\. Note that the configuration rule has a dependency on the Lambda policy so that the rule calls the function only after it's permitted to do so\.

After you create a rule using Lambda it is recommended you update the permissions based on the _Update Rule Using Lambda Function with SourceArn based permission_ example which restricts only a specific rule ARN to invoke the Lambda function\. This helps make sure AWS Lambda is accessing your resources on behalf of expected users and scenarios only\.

#### JSON<a name="aws-resource-config-configrule--examples--Create_Rule_Using_Lambda_Function--json"></a>

```
"ConfigPermissionToCallLambda": {
    "Type": "AWS::Lambda::Permission",
    "Properties": {
        "FunctionName": {"Fn::GetAtt": ["VolumeAutoEnableIOComplianceCheck", "Arn"]},
        "Action": "lambda:InvokeFunction",
        "Principal": "config.amazonaws.com",
        "SourceAccount": {"Ref": "AWS::AccountId" }
    }
},
"VolumeAutoEnableIOComplianceCheck": {
  "Type": "AWS::Lambda::Function",
  "Properties": {
    "Code": {
      "ZipFile":  {"Fn::Join": ["\n", [
        "var aws  = require('aws-sdk');",
        "var config = new aws.ConfigService();",
        "var ec2 = new aws.EC2();",

        "exports.handler = function(event, context) {",
        "    compliance = evaluateCompliance(event, function(compliance, event) {",
        "        var configurationItem = JSON.parse(event.invokingEvent).configurationItem;",

        "        var putEvaluationsRequest = {",
        "            Evaluations: [{",
        "                ComplianceResourceType: configurationItem.resourceType,",
        "                ComplianceResourceId: configurationItem.resourceId,",
        "                ComplianceType: compliance,",
        "                OrderingTimestamp: configurationItem.configurationItemCaptureTime",
        "            }],",
        "            ResultToken: event.resultToken",
        "        };",

        "        config.putEvaluations(putEvaluationsRequest, function(err, data) {",
        "            if (err) context.fail(err);",
        "            else context.succeed(data);",
        "        });",
        "    });",
        "};",

        "function evaluateCompliance(event, doReturn) {",
        "    var configurationItem = JSON.parse(event.invokingEvent).configurationItem;",
        "    var status = configurationItem.configurationItemStatus;",
        "    if (configurationItem.resourceType !== 'AWS::EC2::Volume' || event.eventLeftScope || (status !== 'OK' && status !== 'ResourceDiscovered'))",
        "        doReturn('NOT_APPLICABLE', event);",
        "    else ec2.describeVolumeAttribute({VolumeId: configurationItem.resourceId, Attribute: 'autoEnableIO'}, function(err, data) {",
        "        if (err) context.fail(err);",
        "        else if (data.AutoEnableIO.Value) doReturn('COMPLIANT', event);",
        "        else doReturn('NON_COMPLIANT', event);",
        "    });",
        "}"
      ]]}
    },
    "Handler": "index.handler",
    "Runtime": "nodejs12.x",
    "Timeout": "30",
    "Role": {"Fn::GetAtt": ["LambdaExecutionRole", "Arn"]}
  }
},
"ConfigRuleForVolumeAutoEnableIO": {
  "Type": "AWS::Config::ConfigRule",
  "Properties": {
    "ConfigRuleName": "ConfigRuleForVolumeAutoEnableIO",
    "Scope": {
      "ComplianceResourceId": {"Ref": "Ec2Volume"},
      "ComplianceResourceTypes": ["AWS::EC2::Volume"]
    },
    "Source": {
      "Owner": "CUSTOM_LAMBDA",
      "SourceDetails": [{
          "EventSource": "aws.config",
          "MessageType": "ConfigurationItemChangeNotification"
      }],
      "SourceIdentifier": {"Fn::GetAtt": ["VolumeAutoEnableIOComplianceCheck", "Arn"]}
    }
  },
  "DependsOn": "ConfigPermissionToCallLambda"
}
```

#### YAML<a name="aws-resource-config-configrule--examples--Create_Rule_Using_Lambda_Function--yaml"></a>

```
ConfigPermissionToCallLambda:
  Type: AWS::Lambda::Permission
  Properties:
    FunctionName:
       Fn::GetAtt:
        - VolumeAutoEnableIOComplianceCheck
        - Arn
    Action: "lambda:InvokeFunction"
    Principal: "config.amazonaws.com"
    SourceAccount: !Ref 'AWS::AccountId'
VolumeAutoEnableIOComplianceCheck:
  Type: AWS::Lambda::Function
  Properties:
    Code:
      ZipFile:
        !Sub |
          var aws  = require('aws-sdk');
          var config = new aws.ConfigService();
          var ec2 = new aws.EC2();
          exports.handler = function(event, context) {
              compliance = evaluateCompliance(event, function(compliance, event) {
                    var configurationItem = JSON.parse(event.invokingEvent).configurationItem;
                    var putEvaluationsRequest = {
                        Evaluations: [{
                            ComplianceResourceType: configurationItem.resourceType,
                            ComplianceResourceId: configurationItem.resourceId,
                            ComplianceType: compliance,
                            OrderingTimestamp: configurationItem.configurationItemCaptureTime
                        }],
                        ResultToken: event.resultToken
                    };
                    config.putEvaluations(putEvaluationsRequest, function(err, data) {
                        if (err) context.fail(err);
                        else context.succeed(data);
                    });
                });
            };
            function evaluateCompliance(event, doReturn) {
                var configurationItem = JSON.parse(event.invokingEvent).configurationItem;
                var status = configurationItem.configurationItemStatus;
                if (configurationItem.resourceType !== 'AWS::EC2::Volume' || event.eventLeftScope || (status !== 'OK' && status !== 'ResourceDiscovered'))
                    doReturn('NOT_APPLICABLE', event);
                else ec2.describeVolumeAttribute({VolumeId: configurationItem.resourceId, Attribute: 'autoEnableIO'}, function(err, data) {
                    if (err) context.fail(err);
                    else if (data.AutoEnableIO.Value) doReturn('COMPLIANT', event);
                    else doReturn('NON_COMPLIANT', event);
                });
            }
    Handler: "index.handler"
    Runtime: nodejs12.x
    Timeout: 30
    Role:
      Fn::GetAtt:
        - LambdaExecutionRole
        - Arn
ConfigRuleForVolumeAutoEnableIO:
  Type: AWS::Config::ConfigRule
  Properties:
    ConfigRuleName: ConfigRuleForVolumeAutoEnableIO
    Scope:
      ComplianceResourceId:
        Ref: Ec2Volume
      ComplianceResourceTypes:
        - "AWS::EC2::Volume"
    Source:
      Owner: "CUSTOM_LAMBDA"
      SourceDetails:
        -
          EventSource: "aws.config"
          MessageType: "ConfigurationItemChangeNotification"
      SourceIdentifier:
        Fn::GetAtt:
          - VolumeAutoEnableIOComplianceCheck
          - Arn
  DependsOn: ConfigPermissionToCallLambda
```

### Update Rule Using Lambda Function with SourceArn based permission<a name="aws-resource-config-configrule--examples--Update_Rule_Using_Lambda_Function_with_SourceArn_based_permission"></a>

After an AWS Config rule has been created, there is a `sourceARN` which is the ARN of the AWS Config rule that is invoking the Lambda function\. The following example includes `sourceARN` based permission to restrict only a specific rule ARN to invoke the Lambda function\. It is recommended after you create a rule that you update with these more restrictive permissions to help make sure AWS Lambda is accessing your resources on behalf of expected users and scenarios only\.

#### JSON<a name="aws-resource-config-configrule--examples--Update_Rule_Using_Lambda_Function_with_SourceArn_based_permission--json"></a>

```
"ConfigPermissionToCallLambda": {
    "Type": "AWS::Lambda::Permission",
    "Properties": {
        "FunctionName": {"Fn::GetAtt": ["VolumeAutoEnableIOComplianceCheck", "Arn"]},
        "Action": "lambda:InvokeFunction",
        "Principal": "config.amazonaws.com",
        "SourceAccount": {"Ref": "AWS::AccountId" },
        "SourceArn": {"Fn::GetAtt": [ "ConfigRuleForVolumeAutoEnableIO", "Arn" ] }
    }
},
"VolumeAutoEnableIOComplianceCheck": {
    "Type": "AWS::Lambda::Function",
    "Properties": {
        "Code": {
            "ZipFile":  {"Fn::Join": ["\n", [
               "var aws  = require('aws-sdk');",
               "var config = new aws.ConfigService();",
               "var ec2 = new aws.EC2();",

               "exports.handler = function(event, context) {",
               "    compliance = evaluateCompliance(event, function(compliance, event) {",
               "        var configurationItem = JSON.parse(event.invokingEvent).configurationItem;",

               "        var putEvaluationsRequest = {",
               "            Evaluations: [{",
               "                ComplianceResourceType: configurationItem.resourceType,",
               "                ComplianceResourceId: configurationItem.resourceId,",
               "                ComplianceType: compliance,",
               "                OrderingTimestamp: configurationItem.configurationItemCaptureTime",
               "            }],",
               "            ResultToken: event.resultToken",
               "        };",

               "        config.putEvaluations(putEvaluationsRequest, function(err, data) {",
               "            if (err) context.fail(err);",
               "            else context.succeed(data);",
               "        });",
               "    });",
               "};",

               "function evaluateCompliance(event, doReturn) {",
               "    var configurationItem = JSON.parse(event.invokingEvent).configurationItem;",
               "    var status = configurationItem.configurationItemStatus;",
               "    if (configurationItem.resourceType !== 'AWS::EC2::Volume' || event.eventLeftScope || (status !== 'OK' && status !== 'ResourceDiscovered'))",
               "        doReturn('NOT_APPLICABLE', event);",
               "    else ec2.describeVolumeAttribute({VolumeId: configurationItem.resourceId, Attribute: 'autoEnableIO'}, function(err, data) {",
               "        if (err) context.fail(err);",
               "        else if (data.AutoEnableIO.Value) doReturn('COMPLIANT', event);",
               "        else doReturn('NON_COMPLIANT', event);",
               "    });",
               "}"
               ]]}
               },
            "Handler": "index.handler",
            "Runtime": "nodejs12.x",
            "Timeout": "30",
            "Role": {"Fn::GetAtt": ["LambdaExecutionRole", "Arn"]}
    }
},
"ConfigRuleForVolumeAutoEnableIO": {
    "Type": "AWS::Config::ConfigRule",
    "Properties": {
        "ConfigRuleName": "ConfigRuleForVolumeAutoEnableIO",
        "Scope": {
            "ComplianceResourceId": {"Ref": "Ec2Volume"},
            "ComplianceResourceTypes": ["AWS::EC2::Volume"]
         },
         "Source": {
            "Owner": "CUSTOM_LAMBDA",
             "SourceDetails": [{
               "EventSource": "aws.config",
               "MessageType": "ConfigurationItemChangeNotification"
            }],
            "SourceIdentifier": {"Fn::GetAtt": ["VolumeAutoEnableIOComplianceCheck", "Arn"]}
          }
     },
     "DependsOn": "ConfigPermissionToCallLambda"
}
```

#### YAML<a name="aws-resource-config-configrule--examples--Update_Rule_Using_Lambda_Function_with_SourceArn_based_permission--yaml"></a>

```
ConfigPermissionToCallLambda:
    Type: AWS::Lambda::Permission
    Properties:
      FunctionName:
        Fn::GetAtt:
           - VolumeAutoEnableIOComplianceCheck
           - Arn
      Action: "lambda:InvokeFunction"
      Principal: "config.amazonaws.com"
      SourceAccount: !Ref 'AWS::AccountId'
      SourceArn:
        Fn::GetAtt:
           - VolumeAutoEnableIOComplianceCheck
           - Arn
VolumeAutoEnableIOComplianceCheck:
    Type: AWS::Lambda::Function
    Properties:
      Code:
        ZipFile:
           !Sub |
             var aws  = require('aws-sdk');
             var config = new aws.ConfigService();
             var ec2 = new aws.EC2();
             exports.handler = function(event, context) {
                compliance = evaluateCompliance(event, function(compliance, event) {
                    var configurationItem = JSON.parse(event.invokingEvent).configurationItem;
                    var putEvaluationsRequest = {
                        Evaluations: [{
                            ComplianceResourceType: configurationItem.resourceType,
                            ComplianceResourceId: configurationItem.resourceId,
                            ComplianceType: compliance,
                            OrderingTimestamp: configurationItem.configurationItemCaptureTime
                         }],
                         ResultToken: event.resultToken
                    };
                    config.putEvaluations(putEvaluationsRequest, function(err, data) {
                        if (err) context.fail(err);
                        else context.succeed(data);
                    });
                 });
               };
               function evaluateCompliance(event, doReturn) {
                  var configurationItem = JSON.parse(event.invokingEvent).configurationItem;
                  var status = configurationItem.configurationItemStatus;
               if (configurationItem.resourceType !== 'AWS::EC2::Volume' || event.eventLeftScope || (status !== 'OK' && status !== 'ResourceDiscovered'))
                    doReturn('NOT_APPLICABLE', event);
               else ec2.describeVolumeAttribute({VolumeId: configurationItem.resourceId, Attribute: 'autoEnableIO'}, function(err, data) {
                    if (err) context.fail(err);
                    else if (data.AutoEnableIO.Value) doReturn('COMPLIANT', event);
                    else doReturn('NON_COMPLIANT', event);
                  });
               }
      Handler: "index.handler"
      Runtime: nodejs12.x
      Timeout: 30
      Role:
        Fn::GetAtt:
           - LambdaExecutionRole
           - Arn
ConfigRuleForVolumeAutoEnableIO:
    Type: AWS::Config::ConfigRule
    Properties:
      ConfigRuleName: ConfigRuleForVolumeAutoEnableIO
      Scope:
         ComplianceResourceId:
           Ref: Ec2Volume
          ComplianceResourceTypes:
           - "AWS::EC2::Volume"
      Source:
         Owner: "CUSTOM_LAMBDA"
         SourceDetails:
           -
              EventSource: "aws.config"
              MessageType: "ConfigurationItemChangeNotification"
         SourceIdentifier:
           Fn::GetAtt:
               - VolumeAutoEnableIOComplianceCheck
               - Arn
     DependsOn: ConfigPermissionToCallLambda
```