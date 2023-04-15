# AWS::RDS::DBProxyTargetGroup ConnectionPoolConfigurationInfoFormat<a name="aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat"></a>

Specifies the settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup`\.

## Syntax<a name="aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-syntax.json"></a>

```
{
  "[ConnectionBorrowTimeout](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-connectionborrowtimeout)" : Integer,
  "[InitQuery](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-initquery)" : String,
  "[MaxConnectionsPercent](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxconnectionspercent)" : Integer,
  "[MaxIdleConnectionsPercent](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxidleconnectionspercent)" : Integer,
  "[SessionPinningFilters](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-sessionpinningfilters)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-syntax.yaml"></a>

```
  [ConnectionBorrowTimeout](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-connectionborrowtimeout): Integer
  [InitQuery](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-initquery): String
  [MaxConnectionsPercent](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxconnectionspercent): Integer
  [MaxIdleConnectionsPercent](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxidleconnectionspercent): Integer
  [SessionPinningFilters](#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-sessionpinningfilters):
    - String
```

## Properties<a name="aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-properties"></a>

`ConnectionBorrowTimeout` <a name="cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-connectionborrowtimeout"></a>
The number of seconds for a proxy to wait for a connection to become available in the connection pool\. Only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions\.  
Default: 120  
Constraints: between 1 and 3600, or 0 representing unlimited  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InitQuery` <a name="cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-initquery"></a>
One or more SQL statements for the proxy to run when opening each new database connection\. Typically used with `SET` statements to make sure that each connection has identical settings such as time zone and character set\. For multiple statements, use semicolons as the separator\. You can also include multiple variables in a single `SET` statement, such as `SET x=1, y=2`\.  
Default: no initialization query  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaxConnectionsPercent` <a name="cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxconnectionspercent"></a>
The maximum size of the connection pool for each target in a target group\. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group\.  
If you specify `MaxIdleConnectionsPercent`, then you must also include a value for this parameter\.  
Default: 10 for RDS for Microsoft SQL Server, and 100 for all other engines  
Constraints: Must be between 1 and 100\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaxIdleConnectionsPercent` <a name="cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxidleconnectionspercent"></a>
Controls how actively the proxy closes idle database connections in the connection pool\. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group\. With a high value, the proxy leaves a high percentage of idle database connections open\. A low value causes the proxy to close more idle connections and return them to the database\.  
If you specify this parameter, then you must also include a value for `MaxConnectionsPercent`\.  
Default: The default value is half of the value of `MaxConnectionsPercent`\. For example, if `MaxConnectionsPercent` is 80, then the default value of `MaxIdleConnectionsPercent` is 40\. If the value of `MaxConnectionsPercent` isn't specified, then for SQL Server, `MaxIdleConnectionsPercent` is 5, and for all other engines, the default is 50\.  
Constraints: Must be between 0 and the value of `MaxConnectionsPercent`\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SessionPinningFilters` <a name="cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-sessionpinningfilters"></a>
Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection\. Including an item in the list exempts that class of SQL operations from the pinning behavior\.  
Default: no session pinning filters  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)