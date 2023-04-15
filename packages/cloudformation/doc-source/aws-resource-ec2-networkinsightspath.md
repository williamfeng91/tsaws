# AWS::EC2::NetworkInsightsPath<a name="aws-resource-ec2-networkinsightspath"></a>

Specifies a path to analyze for reachability\.

VPC Reachability Analyzer enables you to analyze and debug network reachability between two resources in your virtual private cloud \(VPC\)\. For more information, see the [Reachability Analyzer User Guide](https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html)\.

## Syntax<a name="aws-resource-ec2-networkinsightspath-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ec2-networkinsightspath-syntax.json"></a>

```
{
  "Type" : "AWS::EC2::NetworkInsightsPath",
  "Properties" : {
      "[Destination](#cfn-ec2-networkinsightspath-destination)" : String,
      "[DestinationIp](#cfn-ec2-networkinsightspath-destinationip)" : String,
      "[DestinationPort](#cfn-ec2-networkinsightspath-destinationport)" : Integer,
      "[Protocol](#cfn-ec2-networkinsightspath-protocol)" : String,
      "[Source](#cfn-ec2-networkinsightspath-source)" : String,
      "[SourceIp](#cfn-ec2-networkinsightspath-sourceip)" : String,
      "[Tags](#cfn-ec2-networkinsightspath-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-ec2-networkinsightspath-syntax.yaml"></a>

```
Type: AWS::EC2::NetworkInsightsPath
Properties:
  [Destination](#cfn-ec2-networkinsightspath-destination): String
  [DestinationIp](#cfn-ec2-networkinsightspath-destinationip): String
  [DestinationPort](#cfn-ec2-networkinsightspath-destinationport): Integer
  [Protocol](#cfn-ec2-networkinsightspath-protocol): String
  [Source](#cfn-ec2-networkinsightspath-source): String
  [SourceIp](#cfn-ec2-networkinsightspath-sourceip): String
  [Tags](#cfn-ec2-networkinsightspath-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-ec2-networkinsightspath-properties"></a>

`Destination` <a name="cfn-ec2-networkinsightspath-destination"></a>
The ID or ARN of the destination\. If the resource is in another account, you must specify an ARN\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DestinationIp` <a name="cfn-ec2-networkinsightspath-destinationip"></a>
The IP address of the destination\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `15`  
_Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DestinationPort` <a name="cfn-ec2-networkinsightspath-destinationport"></a>
The destination port\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Protocol` <a name="cfn-ec2-networkinsightspath-protocol"></a>
The protocol\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `tcp | udp`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Source` <a name="cfn-ec2-networkinsightspath-source"></a>
The ID or ARN of the source\. If the resource is in another account, you must specify an ARN\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SourceIp` <a name="cfn-ec2-networkinsightspath-sourceip"></a>
The IP address of the source\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `15`  
_Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Tags` <a name="cfn-ec2-networkinsightspath-tags"></a>
The tags to add to the path\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-ec2-networkinsightspath-return-values"></a>

### Ref<a name="aws-resource-ec2-networkinsightspath-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ID of the path\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-ec2-networkinsightspath-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-ec2-networkinsightspath-return-values-fn--getatt-fn--getatt"></a>

`CreatedDate` <a name="CreatedDate-fn::getatt"></a>
The time stamp when the path was created\.

`DestinationArn` <a name="DestinationArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the destination\.

`NetworkInsightsPathArn` <a name="NetworkInsightsPathArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the path\.

`NetworkInsightsPathId` <a name="NetworkInsightsPathId-fn::getatt"></a>
The ID of the path\.

`SourceArn` <a name="SourceArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the source\.
