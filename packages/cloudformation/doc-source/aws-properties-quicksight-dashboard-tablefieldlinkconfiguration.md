# AWS::QuickSight::Dashboard TableFieldLinkConfiguration<a name="aws-properties-quicksight-dashboard-tablefieldlinkconfiguration"></a>

The link configuration of a table field URL\.

## Syntax<a name="aws-properties-quicksight-dashboard-tablefieldlinkconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tablefieldlinkconfiguration-syntax.json"></a>

```
{
  "[Content](#cfn-quicksight-dashboard-tablefieldlinkconfiguration-content)" : TableFieldLinkContentConfiguration,
  "[Target](#cfn-quicksight-dashboard-tablefieldlinkconfiguration-target)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tablefieldlinkconfiguration-syntax.yaml"></a>

```
  [Content](#cfn-quicksight-dashboard-tablefieldlinkconfiguration-content):
    TableFieldLinkContentConfiguration
  [Target](#cfn-quicksight-dashboard-tablefieldlinkconfiguration-target): String
```

## Properties<a name="aws-properties-quicksight-dashboard-tablefieldlinkconfiguration-properties"></a>

`Content` <a name="cfn-quicksight-dashboard-tablefieldlinkconfiguration-content"></a>
The URL content \(text, icon\) for the table link configuration\.  
_Required_: Yes  
_Type_: [TableFieldLinkContentConfiguration](aws-properties-quicksight-dashboard-tablefieldlinkcontentconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Target` <a name="cfn-quicksight-dashboard-tablefieldlinkconfiguration-target"></a>
The URL target \(new tab, new window, same tab\) for the table link configuration\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `NEW_TAB | NEW_WINDOW | SAME_TAB`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)