# AWS::ManagedBlockchain::Member MemberConfiguration<a name="aws-properties-managedblockchain-member-memberconfiguration"></a>

Configuration properties of the member\.

Applies only to Hyperledger Fabric\.

## Syntax<a name="aws-properties-managedblockchain-member-memberconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-managedblockchain-member-memberconfiguration-syntax.json"></a>

```
{
  "[Description](#cfn-managedblockchain-member-memberconfiguration-description)" : String,
  "[MemberFrameworkConfiguration](#cfn-managedblockchain-member-memberconfiguration-memberframeworkconfiguration)" : MemberFrameworkConfiguration,
  "[Name](#cfn-managedblockchain-member-memberconfiguration-name)" : String
}
```

### YAML<a name="aws-properties-managedblockchain-member-memberconfiguration-syntax.yaml"></a>

```
  [Description](#cfn-managedblockchain-member-memberconfiguration-description): String
  [MemberFrameworkConfiguration](#cfn-managedblockchain-member-memberconfiguration-memberframeworkconfiguration):
    MemberFrameworkConfiguration
  [Name](#cfn-managedblockchain-member-memberconfiguration-name): String
```

## Properties<a name="aws-properties-managedblockchain-member-memberconfiguration-properties"></a>

`Description` <a name="cfn-managedblockchain-member-memberconfiguration-description"></a>
An optional description of the member\.  
_Required_: No  
_Type_: String  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MemberFrameworkConfiguration` <a name="cfn-managedblockchain-member-memberconfiguration-memberframeworkconfiguration"></a>
Configuration properties of the blockchain framework relevant to the member\.  
_Required_: No  
_Type_: [MemberFrameworkConfiguration](aws-properties-managedblockchain-member-memberframeworkconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-managedblockchain-member-memberconfiguration-name"></a>
The name of the member\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `^(?!-|[0-9])(?!.*-$)(?!.*?--)[a-zA-Z0-9-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
