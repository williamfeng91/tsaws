# AWS::OpsWorks::App<a name="aws-resource-opsworks-app"></a>

Creates an app for a specified stack\. For more information, see [Creating Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html)\.

**Required Permissions**: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions\. For more information on user permissions, see [Managing User Permissions](https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html)\.

## Syntax<a name="aws-resource-opsworks-app-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-opsworks-app-syntax.json"></a>

```
{
  "Type" : "AWS::OpsWorks::App",
  "Properties" : {
      "[AppSource](#cfn-opsworks-app-appsource)" : Source,
      "[Attributes](#cfn-opsworks-app-attributes)" : {Key : Value, ...},
      "[DataSources](#cfn-opsworks-app-datasources)" : [ DataSource, ... ],
      "[Description](#cfn-opsworks-app-description)" : String,
      "[Domains](#cfn-opsworks-app-domains)" : [ String, ... ],
      "[EnableSsl](#cfn-opsworks-app-enablessl)" : Boolean,
      "[Environment](#cfn-opsworks-app-environment)" : [ EnvironmentVariable, ... ],
      "[Name](#cfn-opsworks-app-name)" : String,
      "[Shortname](#cfn-opsworks-app-shortname)" : String,
      "[SslConfiguration](#cfn-opsworks-app-sslconfiguration)" : SslConfiguration,
      "[StackId](#cfn-opsworks-app-stackid)" : String,
      "[Type](#cfn-opsworks-app-type)" : String
    }
}
```

### YAML<a name="aws-resource-opsworks-app-syntax.yaml"></a>

```
Type: AWS::OpsWorks::App
Properties:
  [AppSource](#cfn-opsworks-app-appsource):
    Source
  [Attributes](#cfn-opsworks-app-attributes):
    Key : Value
  [DataSources](#cfn-opsworks-app-datasources):
    - DataSource
  [Description](#cfn-opsworks-app-description): String
  [Domains](#cfn-opsworks-app-domains):
    - String
  [EnableSsl](#cfn-opsworks-app-enablessl): Boolean
  [Environment](#cfn-opsworks-app-environment):
    - EnvironmentVariable
  [Name](#cfn-opsworks-app-name): String
  [Shortname](#cfn-opsworks-app-shortname): String
  [SslConfiguration](#cfn-opsworks-app-sslconfiguration):
    SslConfiguration
  [StackId](#cfn-opsworks-app-stackid): String
  [Type](#cfn-opsworks-app-type): String
```

## Properties<a name="aws-resource-opsworks-app-properties"></a>

`AppSource` <a name="cfn-opsworks-app-appsource"></a>
A `Source` object that specifies the app repository\.  
_Required_: No  
_Type_: [Source](aws-properties-opsworks-stack-source-1.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Attributes` <a name="cfn-opsworks-app-attributes"></a>
One or more user\-defined key/value pairs to be added to the stack attributes\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSources` <a name="cfn-opsworks-app-datasources"></a>
The app's data source\.  
_Required_: No  
_Type_: List of [DataSource](aws-properties-opsworks-app-datasource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-opsworks-app-description"></a>
A description of the app\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Domains` <a name="cfn-opsworks-app-domains"></a>
The app virtual host settings, with multiple domains separated by commas\. For example: `'www.example.com, example.com'`  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableSsl` <a name="cfn-opsworks-app-enablessl"></a>
Whether to enable SSL for the app\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Environment` <a name="cfn-opsworks-app-environment"></a>
An array of `EnvironmentVariable` objects that specify environment variables to be associated with the app\. After you deploy the app, these variables are defined on the associated app server instance\. For more information, see [ Environment Variables](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html#workingapps-creating-environment)\.  
There is no specific limit on the number of environment variables\. However, the size of the associated data structure \- which includes the variables' names, values, and protected flag values \- cannot exceed 20 KB\. This limit should accommodate most if not all use cases\. Exceeding it will cause an exception with the message, "Environment: is too large \(maximum is 20KB\)\."  
If you have specified one or more environment variables, you cannot modify the stack's Chef version\.
_Required_: No  
_Type_: List of [EnvironmentVariable](aws-properties-opsworks-app-environment.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-opsworks-app-name"></a>
The app name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Shortname` <a name="cfn-opsworks-app-shortname"></a>
The app's short name\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SslConfiguration` <a name="cfn-opsworks-app-sslconfiguration"></a>
An `SslConfiguration` object with the SSL configuration\.  
_Required_: No  
_Type_: [SslConfiguration](aws-properties-opsworks-app-sslconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StackId` <a name="cfn-opsworks-app-stackid"></a>
The stack ID\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-opsworks-app-type"></a>
The app type\. Each supported type is associated with a particular layer\. For example, PHP applications are associated with a PHP layer\. AWS OpsWorks Stacks deploys an application to those instances that are members of the corresponding layer\. If your app isn't one of the standard types, or you prefer to implement your own Deploy recipes, specify `other`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `aws-flow-ruby | java | nodejs | other | php | rails | static`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-opsworks-app-return-values"></a>

### Ref<a name="aws-resource-opsworks-app-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the resource name\. For example:

`{ "Ref": "myApp" }`

For the AWS OpsWorks stack `myApp`, `Ref` returns the ID of the AWS OpsWorks app\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-opsworks-app--examples"></a>

### Template Snippet<a name="aws-resource-opsworks-app--examples--Template_Snippet"></a>

The following snippet creates an AWS OpsWorks app that uses a PHP application in a Git repository:

#### JSON<a name="aws-resource-opsworks-app--examples--Template_Snippet--json"></a>

```
"myApp" : {
  "Type" : "AWS::OpsWorks::App",
  "Properties" : {
    "StackId" : {"Ref":"myStack"},
    "Type" : "php",
    "Name" : "myPHPapp",
    "AppSource" : {
      "Type" : "git",
      "Url" : "git://github.com/amazonwebservices/opsworks-demo-php-simple-app.git",
      "Revision" : "version1"
    }
  }
}
```

#### YAML<a name="aws-resource-opsworks-app--examples--Template_Snippet--yaml"></a>

```
myApp:
  Type: "AWS::OpsWorks::App"
  Properties:
    StackId:
      Ref: "myStack"
    Type: "php"
    Name: "myPHPapp"
    AppSource:
      Type: "git"
      Url: "git://github.com/amazonwebservices/opsworks-demo-php-simple-app.git"
      Revision: "version1"
```

## See also<a name="aws-resource-opsworks-app--seealso"></a>

- [CreateApp](https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html) in the _AWS OpsWorks API Reference_\.
- [Adding Apps](https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html) in the _AWS OpsWorks User Guide_\.
