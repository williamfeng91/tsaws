# AWS::EMR::Cluster KerberosAttributes<a name="aws-properties-elasticmapreduce-cluster-kerberosattributes"></a>

`KerberosAttributes` is a property of the `AWS::EMR::Cluster` resource\. `KerberosAttributes` define the cluster\-specific Kerberos configuration when Kerberos authentication is enabled using a security configuration\. The cluster\-specific configuration must be compatible with the security configuration\. For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the _EMR Management Guide_\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-kerberosattributes-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-kerberosattributes-syntax.json"></a>

```
{
  "[ADDomainJoinPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinpassword)" : String,
  "[ADDomainJoinUser](#cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinuser)" : String,
  "[CrossRealmTrustPrincipalPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-crossrealmtrustprincipalpassword)" : String,
  "[KdcAdminPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-kdcadminpassword)" : String,
  "[Realm](#cfn-elasticmapreduce-cluster-kerberosattributes-realm)" : String
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-kerberosattributes-syntax.yaml"></a>

```
  [ADDomainJoinPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinpassword): String
  [ADDomainJoinUser](#cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinuser): String
  [CrossRealmTrustPrincipalPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-crossrealmtrustprincipalpassword): String
  [KdcAdminPassword](#cfn-elasticmapreduce-cluster-kerberosattributes-kdcadminpassword): String
  [Realm](#cfn-elasticmapreduce-cluster-kerberosattributes-realm): String
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-kerberosattributes-properties"></a>

`ADDomainJoinPassword` <a name="cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinpassword"></a>
The Active Directory password for `ADDomainJoinUser`\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ADDomainJoinUser` <a name="cfn-elasticmapreduce-cluster-kerberosattributes-addomainjoinuser"></a>
Required only when establishing a cross\-realm trust with an Active Directory domain\. A user with sufficient privileges to join resources to the domain\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CrossRealmTrustPrincipalPassword` <a name="cfn-elasticmapreduce-cluster-kerberosattributes-crossrealmtrustprincipalpassword"></a>
Required only when establishing a cross\-realm trust with a KDC in a different realm\. The cross\-realm principal password, which must be identical across realms\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KdcAdminPassword` <a name="cfn-elasticmapreduce-cluster-kerberosattributes-kdcadminpassword"></a>
The password used within the cluster for the kadmin service on the cluster\-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Realm` <a name="cfn-elasticmapreduce-cluster-kerberosattributes-realm"></a>
The name of the Kerberos realm to which all nodes in a cluster belong\. For example, `EC2.INTERNAL`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
