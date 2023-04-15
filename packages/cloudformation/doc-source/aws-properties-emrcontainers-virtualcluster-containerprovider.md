# AWS::EMRContainers::VirtualCluster ContainerProvider<a name="aws-properties-emrcontainers-virtualcluster-containerprovider"></a>

The information about the container provider\.

## Syntax<a name="aws-properties-emrcontainers-virtualcluster-containerprovider-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-emrcontainers-virtualcluster-containerprovider-syntax.json"></a>

```
{
  "[Id](#cfn-emrcontainers-virtualcluster-containerprovider-id)" : String,
  "[Info](#cfn-emrcontainers-virtualcluster-containerprovider-info)" : ContainerInfo,
  "[Type](#cfn-emrcontainers-virtualcluster-containerprovider-type)" : String
}
```

### YAML<a name="aws-properties-emrcontainers-virtualcluster-containerprovider-syntax.yaml"></a>

```
  [Id](#cfn-emrcontainers-virtualcluster-containerprovider-id): String
  [Info](#cfn-emrcontainers-virtualcluster-containerprovider-info):
    ContainerInfo
  [Type](#cfn-emrcontainers-virtualcluster-containerprovider-type): String
```

## Properties<a name="aws-properties-emrcontainers-virtualcluster-containerprovider-properties"></a>

`Id` <a name="cfn-emrcontainers-virtualcluster-containerprovider-id"></a>
The ID of the container cluster\.  
_Minimum_: 1  
_Maximum_: 100  
_Pattern_: `^[0-9A-Za-z][A-Za-z0-9\-_]*`  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Info` <a name="cfn-emrcontainers-virtualcluster-containerprovider-info"></a>
The information about the container cluster\.  
_Required_: Yes  
_Type_: [ContainerInfo](aws-properties-emrcontainers-virtualcluster-containerinfo.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-emrcontainers-virtualcluster-containerprovider-type"></a>
The type of the container provider\. Amazon EKS is the only supported type as of now\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `EKS`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
