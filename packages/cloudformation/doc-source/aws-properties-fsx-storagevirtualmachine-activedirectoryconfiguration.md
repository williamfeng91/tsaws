# AWS::FSx::StorageVirtualMachine ActiveDirectoryConfiguration<a name="aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration"></a>

Describes the self\-managed Microsoft Active Directory to which you want to join the SVM\. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS client accessing the file system\.

## Syntax<a name="aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-syntax.json"></a>

```
{
  "[NetBiosName](#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-netbiosname)" : String,
  "[SelfManagedActiveDirectoryConfiguration](#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration)" : SelfManagedActiveDirectoryConfiguration
}
```

### YAML<a name="aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-syntax.yaml"></a>

```
  [NetBiosName](#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-netbiosname): String
  [SelfManagedActiveDirectoryConfiguration](#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration):
    SelfManagedActiveDirectoryConfiguration
```

## Properties<a name="aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-properties"></a>

`NetBiosName` <a name="cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-netbiosname"></a>
The NetBIOS name of the Active Directory computer object that will be created for your SVM\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `15`  
_Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SelfManagedActiveDirectoryConfiguration` <a name="cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration"></a>
The configuration that Amazon FSx uses to join the ONTAP storage virtual machine \(SVM\) to your self\-managed \(including on\-premises\) Microsoft Active Directory \(AD\) directory\.  
_Required_: No  
_Type_: [SelfManagedActiveDirectoryConfiguration](aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
