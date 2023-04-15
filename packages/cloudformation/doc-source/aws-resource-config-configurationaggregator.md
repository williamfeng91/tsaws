# AWS::Config::ConfigurationAggregator<a name="aws-resource-config-configurationaggregator"></a>

The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator\.

## Syntax<a name="aws-resource-config-configurationaggregator-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-config-configurationaggregator-syntax.json"></a>

```
{
  "Type" : "AWS::Config::ConfigurationAggregator",
  "Properties" : {
      "[AccountAggregationSources](#cfn-config-configurationaggregator-accountaggregationsources)" : [ AccountAggregationSource, ... ],
      "[ConfigurationAggregatorName](#cfn-config-configurationaggregator-configurationaggregatorname)" : String,
      "[OrganizationAggregationSource](#cfn-config-configurationaggregator-organizationaggregationsource)" : OrganizationAggregationSource,
      "[Tags](#cfn-config-configurationaggregator-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-config-configurationaggregator-syntax.yaml"></a>

```
Type: AWS::Config::ConfigurationAggregator
Properties:
  [AccountAggregationSources](#cfn-config-configurationaggregator-accountaggregationsources):
    - AccountAggregationSource
  [ConfigurationAggregatorName](#cfn-config-configurationaggregator-configurationaggregatorname): String
  [OrganizationAggregationSource](#cfn-config-configurationaggregator-organizationaggregationsource):
    OrganizationAggregationSource
  [Tags](#cfn-config-configurationaggregator-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-config-configurationaggregator-properties"></a>

`AccountAggregationSources` <a name="cfn-config-configurationaggregator-accountaggregationsources"></a>
Provides a list of source accounts and regions to be aggregated\.  
_Required_: No  
_Type_: List of [AccountAggregationSource](aws-properties-config-configurationaggregator-accountaggregationsource.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConfigurationAggregatorName` <a name="cfn-config-configurationaggregator-configurationaggregatorname"></a>
The name of the aggregator\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[\w\-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`OrganizationAggregationSource` <a name="cfn-config-configurationaggregator-organizationaggregationsource"></a>
Provides an organization and list of regions to be aggregated\.  
_Required_: No  
_Type_: [OrganizationAggregationSource](aws-properties-config-configurationaggregator-organizationaggregationsource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-config-configurationaggregator-tags"></a>
An array of tag object\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-config-configurationaggregator-return-values"></a>

### Ref<a name="aws-resource-config-configurationaggregator-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ConfigurationAggregatorName, such as `myConfigurationAggregator`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-config-configurationaggregator-return-values-fn--getatt"></a>

#### <a name="aws-resource-config-configurationaggregator-return-values-fn--getatt-fn--getatt"></a>

`ConfigurationAggregatorArn` <a name="ConfigurationAggregatorArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the aggregator\.

## Examples<a name="aws-resource-config-configurationaggregator--examples"></a>

### Configuration Aggregator With Multiple Accounts Multiple Regions<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_With_Multiple_Accounts_Multiple_Regions"></a>

The following example creates a `ConfigurationAggregator`\.

#### JSON<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_With_Multiple_Accounts_Multiple_Regions--json"></a>

```
"ConfigurationAggregator": {
    "Type": "AWS::Config::ConfigurationAggregator",
    "Properties": {
      "AccountAggregationSources": [
        {
          "AccountIds": [
            "123456789012",
            "987654321012"
          ],
          "AwsRegions": [
            "us-west-2",
            "us-east-1"
          ],
          "AllAwsRegions": false
        }
      ],
      "ConfigurationAggregatorName": "MyConfigurationAggregator"
    }
  }
```

#### YAML<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_With_Multiple_Accounts_Multiple_Regions--yaml"></a>

```
ConfigurationAggregator:
  Type: 'AWS::Config::ConfigurationAggregator'
  Properties:
    AccountAggregationSources:
      - AccountIds:
          - '123456789012'
          - '987654321012'
        AwsRegions:
          - us-west-2
          - us-east-1
        AllAwsRegions: false
    ConfigurationAggregatorName: MyConfigurationAggregator
```

### Configuration Aggregator for an Organization<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_for_an_Organization"></a>

The following example creates a `ConfigurationAggregator` for an organization\.

#### JSON<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_for_an_Organization--json"></a>

```
"ConfigurationAggregator": {
    "Type": "AWS::Config::ConfigurationAggregator",
    "Properties": {
        "OrganizationAggregationSource": {
            "RoleArn": { "Fn::GetAtt" : [ "MyRole", "Arn" ] },
            "AwsRegions": [
                "us-west-2",
                "us-east-1"
            ],
            "AllAwsRegions": false
        },
        "ConfigurationAggregatorName": "MyConfigurationAggregator"
    }
}

"MyRole": {
    "Type": "AWS::IAM::Role",
    "Properties": {
        "ManagedPolicyArns": "arn:aws:iam::aws:policy/service-role/AWSConfigRoleForOrganizations",
        "Path": "/service-role/",
        "AssumeRolePolicyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "config.amazonaws.com"
                     },
                     "Action": "sts:AssumeRole"
                }
            ]
        }
    }
}
```

#### YAML<a name="aws-resource-config-configurationaggregator--examples--Configuration_Aggregator_for_an_Organization--yaml"></a>

```
ConfigurationAggregator:
    Type: 'AWS::Config::ConfigurationAggregator'
    Properties:
        OrganizationAggregationSource:
            RoleArn: !GetAtt MyRole.Arn
            AwsRegions:
                - us-west-2
                - us-east-1
            AllAwsRegions: false
        ConfigurationAggregatorName: MyConfigurationAggregator

MyRole:
    Type: AWS::IAM::Role
    Properties:
        ManagedPolicyArns:
            - arn:aws:iam::aws:policy/service-role/AWSConfigRoleForOrganizations
        Path: "/service-role/"
        AssumeRolePolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Effect: Allow
                Principal:
                    Service:
                        - config.amazonaws.com
                Action:
                    - 'sts:AssumeRole'
```
