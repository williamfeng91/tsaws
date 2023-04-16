# AWS::LookoutMetrics::AnomalyDetector CsvFormatDescriptor<a name="aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor"></a>

Contains information about how a source CSV data file should be analyzed\.

## Syntax<a name="aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor-syntax.json"></a>

```
{
  "[Charset](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-charset)" : String,
  "[ContainsHeader](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-containsheader)" : Boolean,
  "[Delimiter](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-delimiter)" : String,
  "[FileCompression](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-filecompression)" : String,
  "[HeaderList](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-headerlist)" : [ String, ... ],
  "[QuoteSymbol](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-quotesymbol)" : String
}
```

### YAML<a name="aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor-syntax.yaml"></a>

```
  [Charset](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-charset): String
  [ContainsHeader](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-containsheader): Boolean
  [Delimiter](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-delimiter): String
  [FileCompression](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-filecompression): String
  [HeaderList](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-headerlist):
    - String
  [QuoteSymbol](#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-quotesymbol): String
```

## Properties<a name="aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor-properties"></a>

`Charset` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-charset"></a>
The character set in which the source CSV file is written\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContainsHeader` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-containsheader"></a>
Whether or not the source CSV file contains a header\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Delimiter` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-delimiter"></a>
The character used to delimit the source CSV file\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FileCompression` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-filecompression"></a>
The level of compression of the source CSV file\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HeaderList` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-headerlist"></a>
A list of the source CSV file's headers, if any\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QuoteSymbol` <a name="cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-quotesymbol"></a>
The character used as a quote character\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
