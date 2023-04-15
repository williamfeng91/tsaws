# AWS::OpenSearchService::Domain OffPeakWindowOptions<a name="aws-properties-opensearchservice-domain-offpeakwindowoptions"></a>

Off\-peak window settings for the domain\.

## Syntax<a name="aws-properties-opensearchservice-domain-offpeakwindowoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-opensearchservice-domain-offpeakwindowoptions-syntax.json"></a>

```
{
  "[Enabled](#cfn-opensearchservice-domain-offpeakwindowoptions-enabled)" : Boolean,
  "[OffPeakWindow](#cfn-opensearchservice-domain-offpeakwindowoptions-offpeakwindow)" : OffPeakWindow
}
```

### YAML<a name="aws-properties-opensearchservice-domain-offpeakwindowoptions-syntax.yaml"></a>

```
  [Enabled](#cfn-opensearchservice-domain-offpeakwindowoptions-enabled): Boolean
  [OffPeakWindow](#cfn-opensearchservice-domain-offpeakwindowoptions-offpeakwindow):
    OffPeakWindow
```

## Properties<a name="aws-properties-opensearchservice-domain-offpeakwindowoptions-properties"></a>

`Enabled` <a name="cfn-opensearchservice-domain-offpeakwindowoptions-enabled"></a>
Specifies whether off\-peak window settings are enabled for the domain\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OffPeakWindow` <a name="cfn-opensearchservice-domain-offpeakwindowoptions-offpeakwindow"></a>
Off\-peak window settings for the domain\.  
_Required_: No  
_Type_: [OffPeakWindow](aws-properties-opensearchservice-domain-offpeakwindow.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
