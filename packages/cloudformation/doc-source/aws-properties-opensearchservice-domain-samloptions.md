# AWS::OpenSearchService::Domain SAMLOptions<a name="aws-properties-opensearchservice-domain-samloptions"></a>

Container for information about the SAML configuration for OpenSearch Dashboards\.

## Syntax<a name="aws-properties-opensearchservice-domain-samloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-opensearchservice-domain-samloptions-syntax.json"></a>

```
{
  "[Enabled](#cfn-opensearchservice-domain-samloptions-enabled)" : Boolean,
  "[Idp](#cfn-opensearchservice-domain-samloptions-idp)" : Idp,
  "[MasterBackendRole](#cfn-opensearchservice-domain-samloptions-masterbackendrole)" : String,
  "[MasterUserName](#cfn-opensearchservice-domain-samloptions-masterusername)" : String,
  "[RolesKey](#cfn-opensearchservice-domain-samloptions-roleskey)" : String,
  "[SessionTimeoutMinutes](#cfn-opensearchservice-domain-samloptions-sessiontimeoutminutes)" : Integer,
  "[SubjectKey](#cfn-opensearchservice-domain-samloptions-subjectkey)" : String
}
```

### YAML<a name="aws-properties-opensearchservice-domain-samloptions-syntax.yaml"></a>

```
  [Enabled](#cfn-opensearchservice-domain-samloptions-enabled): Boolean
  [Idp](#cfn-opensearchservice-domain-samloptions-idp):
    Idp
  [MasterBackendRole](#cfn-opensearchservice-domain-samloptions-masterbackendrole): String
  [MasterUserName](#cfn-opensearchservice-domain-samloptions-masterusername): String
  [RolesKey](#cfn-opensearchservice-domain-samloptions-roleskey): String
  [SessionTimeoutMinutes](#cfn-opensearchservice-domain-samloptions-sessiontimeoutminutes): Integer
  [SubjectKey](#cfn-opensearchservice-domain-samloptions-subjectkey): String
```

## Properties<a name="aws-properties-opensearchservice-domain-samloptions-properties"></a>

`Enabled` <a name="cfn-opensearchservice-domain-samloptions-enabled"></a>
True to enable SAML authentication for a domain\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Idp` <a name="cfn-opensearchservice-domain-samloptions-idp"></a>
The SAML Identity Provider's information\.  
_Required_: No  
_Type_: [Idp](aws-properties-opensearchservice-domain-idp.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MasterBackendRole` <a name="cfn-opensearchservice-domain-samloptions-masterbackendrole"></a>
The backend role that the SAML master user is mapped to\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MasterUserName` <a name="cfn-opensearchservice-domain-samloptions-masterusername"></a>
The SAML master user name, which is stored in the domain's internal user database\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RolesKey` <a name="cfn-opensearchservice-domain-samloptions-roleskey"></a>
Element of the SAML assertion to use for backend roles\. Default is `roles`\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SessionTimeoutMinutes` <a name="cfn-opensearchservice-domain-samloptions-sessiontimeoutminutes"></a>
The duration, in minutes, after which a user session becomes inactive\. Acceptable values are between 1 and 1440, and the default value is 60\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubjectKey` <a name="cfn-opensearchservice-domain-samloptions-subjectkey"></a>
Element of the SAML assertion to use for the user name\. Default is `NameID`\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
