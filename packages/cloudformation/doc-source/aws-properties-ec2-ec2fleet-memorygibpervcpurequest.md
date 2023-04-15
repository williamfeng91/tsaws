# AWS::EC2::EC2Fleet MemoryGiBPerVCpuRequest<a name="aws-properties-ec2-ec2fleet-memorygibpervcpurequest"></a>

The minimum and maximum amount of memory per vCPU, in GiB\.

## Syntax<a name="aws-properties-ec2-ec2fleet-memorygibpervcpurequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-ec2fleet-memorygibpervcpurequest-syntax.json"></a>

```
{
  "[Max](#cfn-ec2-ec2fleet-memorygibpervcpurequest-max)" : Double,
  "[Min](#cfn-ec2-ec2fleet-memorygibpervcpurequest-min)" : Double
}
```

### YAML<a name="aws-properties-ec2-ec2fleet-memorygibpervcpurequest-syntax.yaml"></a>

```
  [Max](#cfn-ec2-ec2fleet-memorygibpervcpurequest-max): Double
  [Min](#cfn-ec2-ec2fleet-memorygibpervcpurequest-min): Double
```

## Properties<a name="aws-properties-ec2-ec2fleet-memorygibpervcpurequest-properties"></a>

`Max` <a name="cfn-ec2-ec2fleet-memorygibpervcpurequest-max"></a>
The maximum amount of memory per vCPU, in GiB\. To specify no maximum limit, omit this parameter\.  
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Min` <a name="cfn-ec2-ec2fleet-memorygibpervcpurequest-min"></a>
The minimum amount of memory per vCPU, in GiB\. To specify no minimum limit, omit this parameter\.  
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
