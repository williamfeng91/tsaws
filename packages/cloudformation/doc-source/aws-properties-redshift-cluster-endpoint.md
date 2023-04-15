# AWS::Redshift::Cluster Endpoint<a name="aws-properties-redshift-cluster-endpoint"></a>

Describes a connection endpoint\.

## Syntax<a name="aws-properties-redshift-cluster-endpoint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-redshift-cluster-endpoint-syntax.json"></a>

```
{
  "[Address](#cfn-redshift-cluster-endpoint-address)" : String,
  "[Port](#cfn-redshift-cluster-endpoint-port)" : String
}
```

### YAML<a name="aws-properties-redshift-cluster-endpoint-syntax.yaml"></a>

```
  [Address](#cfn-redshift-cluster-endpoint-address): String
  [Port](#cfn-redshift-cluster-endpoint-port): String
```

## Properties<a name="aws-properties-redshift-cluster-endpoint-properties"></a>

`Address` <a name="cfn-redshift-cluster-endpoint-address"></a>
The DNS address of the Cluster\.  
_Required_: No  
_Type_: String  
_Maximum_: `2147483647`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-redshift-cluster-endpoint-port"></a>
The port that the database engine is listening on\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
