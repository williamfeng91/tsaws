# AWS::ElasticLoadBalancing::LoadBalancer AccessLoggingPolicy<a name="aws-properties-ec2-elb-accessloggingpolicy"></a>

Specifies where and how access logs are stored for your Classic Load Balancer\.

## Syntax<a name="aws-properties-ec2-elb-accessloggingpolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-elb-accessloggingpolicy-syntax.json"></a>

```
{
  "[EmitInterval](#cfn-elb-accessloggingpolicy-emitinterval)" : Integer,
  "[Enabled](#cfn-elb-accessloggingpolicy-enabled)" : Boolean,
  "[S3BucketName](#cfn-elb-accessloggingpolicy-s3bucketname)" : String,
  "[S3BucketPrefix](#cfn-elb-accessloggingpolicy-s3bucketprefix)" : String
}
```

### YAML<a name="aws-properties-ec2-elb-accessloggingpolicy-syntax.yaml"></a>

```
  [EmitInterval](#cfn-elb-accessloggingpolicy-emitinterval): Integer
  [Enabled](#cfn-elb-accessloggingpolicy-enabled): Boolean
  [S3BucketName](#cfn-elb-accessloggingpolicy-s3bucketname): String
  [S3BucketPrefix](#cfn-elb-accessloggingpolicy-s3bucketprefix): String
```

## Properties<a name="aws-properties-ec2-elb-accessloggingpolicy-properties"></a>

`EmitInterval` <a name="cfn-elb-accessloggingpolicy-emitinterval"></a>
The interval for publishing the access logs\. You can specify an interval of either 5 minutes or 60 minutes\.  
Default: 60 minutes  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enabled` <a name="cfn-elb-accessloggingpolicy-enabled"></a>
Specifies whether access logs are enabled for the load balancer\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BucketName` <a name="cfn-elb-accessloggingpolicy-s3bucketname"></a>
The name of the Amazon S3 bucket where the access logs are stored\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BucketPrefix` <a name="cfn-elb-accessloggingpolicy-s3bucketprefix"></a>
The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`\. If the prefix is not provided, the log is placed at the root level of the bucket\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-ec2-elb-accessloggingpolicy--seealso"></a>

- [ModifyLoadBalancerAttributes](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html) in the _Elastic Load Balancing API Reference \(version 2012\-06\-01\)_
- [Access Logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html) in the _User Guide for Classic Load Balancers_
