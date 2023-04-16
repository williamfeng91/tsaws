# AWS::LookoutMetrics::AnomalyDetector JsonFormatDescriptor<a name="aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor"></a>

Contains information about how a source JSON data file should be analyzed\.

## Syntax<a name="aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor-syntax.json"></a>

```
{
  "[Charset](#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-charset)" : String,
  "[FileCompression](#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-filecompression)" : String
}
```

### YAML<a name="aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor-syntax.yaml"></a>

```
  [Charset](#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-charset): String
  [FileCompression](#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-filecompression): String
```

## Properties<a name="aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor-properties"></a>

`Charset` <a name="cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-charset"></a>
The character set in which the source JSON file is written\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FileCompression` <a name="cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-filecompression"></a>
The level of compression of the source CSV file\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
