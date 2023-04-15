# AWS::Lambda::EventInvokeConfig OnSuccess<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess"></a>

A destination for events that were processed successfully\.

## Syntax<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess-syntax.json"></a>

```
{
  "[Destination](#cfn-lambda-eventinvokeconfig-destinationconfig-onsuccess-destination)" : String
}
```

### YAML<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess-syntax.yaml"></a>

```
  [Destination](#cfn-lambda-eventinvokeconfig-destinationconfig-onsuccess-destination): String
```

## Properties<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess-properties"></a>

`Destination` <a name="cfn-lambda-eventinvokeconfig-destinationconfig-onsuccess-destination"></a>
The Amazon Resource Name \(ARN\) of the destination resource\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `350`  
_Pattern_: `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess--examples"></a>

### On\-Success Destination Configuration<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess--examples--On-Success_Destination_Configuration"></a>

Configure a function to send a record of successful asynchronous invocations to an SQS queue\.

#### YAML<a name="aws-properties-lambda-eventinvokeconfig-destinationconfig-onsuccess--examples--On-Success_Destination_Configuration--yaml"></a>

```
          OnSuccess:
            Destination: arn:aws:sqs:us-east-2:123456789012:destination
```
