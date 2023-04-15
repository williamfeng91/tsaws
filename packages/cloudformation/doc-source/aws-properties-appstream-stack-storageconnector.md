# AWS::AppStream::Stack StorageConnector<a name="aws-properties-appstream-stack-storageconnector"></a>

A connector that enables persistent storage for users\.

## Syntax<a name="aws-properties-appstream-stack-storageconnector-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appstream-stack-storageconnector-syntax.json"></a>

```
{
  "[ConnectorType](#cfn-appstream-stack-storageconnector-connectortype)" : String,
  "[Domains](#cfn-appstream-stack-storageconnector-domains)" : [ String, ... ],
  "[ResourceIdentifier](#cfn-appstream-stack-storageconnector-resourceidentifier)" : String
}
```

### YAML<a name="aws-properties-appstream-stack-storageconnector-syntax.yaml"></a>

```
  [ConnectorType](#cfn-appstream-stack-storageconnector-connectortype): String
  [Domains](#cfn-appstream-stack-storageconnector-domains):
    - String
  [ResourceIdentifier](#cfn-appstream-stack-storageconnector-resourceidentifier): String
```

## Properties<a name="aws-properties-appstream-stack-storageconnector-properties"></a>

`ConnectorType` <a name="cfn-appstream-stack-storageconnector-connectortype"></a>
The type of storage connector\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `GOOGLE_DRIVE | HOMEFOLDERS | ONE_DRIVE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Domains` <a name="cfn-appstream-stack-storageconnector-domains"></a>
The names of the domains for the account\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceIdentifier` <a name="cfn-appstream-stack-storageconnector-resourceidentifier"></a>
The ARN of the storage connector\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
