# AWS::Glue::Database DatabaseInput<a name="aws-properties-glue-database-databaseinput"></a>

The structure used to create or update a database\.

## Syntax<a name="aws-properties-glue-database-databaseinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-database-databaseinput-syntax.json"></a>

```
{
  "[CreateTableDefaultPermissions](#cfn-glue-database-databaseinput-createtabledefaultpermissions)" : [ PrincipalPrivileges, ... ],
  "[Description](#cfn-glue-database-databaseinput-description)" : String,
  "[LocationUri](#cfn-glue-database-databaseinput-locationuri)" : String,
  "[Name](#cfn-glue-database-databaseinput-name)" : String,
  "[Parameters](#cfn-glue-database-databaseinput-parameters)" : Json,
  "[TargetDatabase](#cfn-glue-database-databaseinput-targetdatabase)" : DatabaseIdentifier
}
```

### YAML<a name="aws-properties-glue-database-databaseinput-syntax.yaml"></a>

```
  [CreateTableDefaultPermissions](#cfn-glue-database-databaseinput-createtabledefaultpermissions):
    - PrincipalPrivileges
  [Description](#cfn-glue-database-databaseinput-description): String
  [LocationUri](#cfn-glue-database-databaseinput-locationuri): String
  [Name](#cfn-glue-database-databaseinput-name): String
  [Parameters](#cfn-glue-database-databaseinput-parameters): Json
  [TargetDatabase](#cfn-glue-database-databaseinput-targetdatabase):
    DatabaseIdentifier
```

## Properties<a name="aws-properties-glue-database-databaseinput-properties"></a>

`CreateTableDefaultPermissions` <a name="cfn-glue-database-databaseinput-createtabledefaultpermissions"></a>
Creates a set of default permissions on the table for principals\. Used by AWS Lake Formation\. Not used in the normal course of AWS Glue operations\.  
_Required_: No  
_Type_: List of [PrincipalPrivileges](aws-properties-glue-database-principalprivileges.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-glue-database-databaseinput-description"></a>
A description of the database\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LocationUri` <a name="cfn-glue-database-databaseinput-locationuri"></a>
The location of the database \(for example, an HDFS path\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-glue-database-databaseinput-name"></a>
The name of the database\. For Hive compatibility, this is folded to lowercase when it is stored\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Parameters` <a name="cfn-glue-database-databaseinput-parameters"></a>
These key\-value pairs define parameters and properties of the database\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetDatabase` <a name="cfn-glue-database-databaseinput-targetdatabase"></a>
A `DatabaseIdentifier` structure that describes a target database for resource linking\.  
_Required_: No  
_Type_: [DatabaseIdentifier](aws-properties-glue-database-databaseidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
