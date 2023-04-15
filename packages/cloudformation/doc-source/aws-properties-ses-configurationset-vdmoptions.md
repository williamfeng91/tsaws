# AWS::SES::ConfigurationSet VdmOptions<a name="aws-properties-ses-configurationset-vdmoptions"></a>

The Virtual Deliverability Manager \(VDM\) options that apply to a configuration set\.

## Syntax<a name="aws-properties-ses-configurationset-vdmoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ses-configurationset-vdmoptions-syntax.json"></a>

```
{
  "[DashboardOptions](#cfn-ses-configurationset-vdmoptions-dashboardoptions)" : DashboardOptions,
  "[GuardianOptions](#cfn-ses-configurationset-vdmoptions-guardianoptions)" : GuardianOptions
}
```

### YAML<a name="aws-properties-ses-configurationset-vdmoptions-syntax.yaml"></a>

```
  [DashboardOptions](#cfn-ses-configurationset-vdmoptions-dashboardoptions):
    DashboardOptions
  [GuardianOptions](#cfn-ses-configurationset-vdmoptions-guardianoptions):
    GuardianOptions
```

## Properties<a name="aws-properties-ses-configurationset-vdmoptions-properties"></a>

`DashboardOptions` <a name="cfn-ses-configurationset-vdmoptions-dashboardoptions"></a>
Settings for your VDM configuration as applicable to the Dashboard\.  
_Required_: No  
_Type_: [DashboardOptions](aws-properties-ses-configurationset-dashboardoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GuardianOptions` <a name="cfn-ses-configurationset-vdmoptions-guardianoptions"></a>
Settings for your VDM configuration as applicable to the Guardian\.  
_Required_: No  
_Type_: [GuardianOptions](aws-properties-ses-configurationset-guardianoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
