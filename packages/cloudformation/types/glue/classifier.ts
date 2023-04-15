/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * A classifier for custom `CSV` content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-csvclassifier.html}
 **/
export interface GlueClassifierCsvClassifier {
  /**
   * A custom symbol to denote what combines content into a single column value. It must be different from the column delimiter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuoteSymbol?: Value<string>;
  /**
   * Indicates whether the CSV file contains a header.
   *
   * A value of `UNKNOWN` specifies that the classifier will detect whether the CSV file contains headings.
   *
   * A value of `PRESENT` specifies that the CSV file contains headings.
   *
   * A value of `ABSENT` specifies that the CSV file does not contain headings.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainsHeader?: Value<string>;
  /**
   * A custom symbol to denote what separates each column entry in the row.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Delimiter?: Value<string>;
  /**
   * A list of strings representing column names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header?: List<Value<string>>;
  /**
   * Enables the processing of files that contain only one column.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowSingleColumn?: Value<boolean>;
  /**
   * Specifies not to trim values before identifying the type of column values. The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableValueTrimming?: Value<boolean>;
  /**
   * The name of the classifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A classifier that uses `grok` patterns.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-grokclassifier.html}
 **/
export interface GlueClassifierGrokClassifier {
  /**
   * Optional custom grok patterns defined by this classifier. For more information, see custom patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomPatterns?: Value<string>;
  /**
   * The grok pattern applied to a data store by this classifier. For more information, see built-in patterns in [Writing Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrokPattern: Value<string>;
  /**
   * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Classification: Value<string>;
  /**
   * The name of the classifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A classifier for `JSON` content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-jsonclassifier.html}
 **/
export interface GlueClassifierJsonClassifier {
  /**
   * A `JsonPath` string defining the JSON data for the classifier to classify. AWS Glue supports a subset of `JsonPath`, as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonPath: Value<string>;
  /**
   * The name of the classifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A classifier for `XML` content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-classifier-xmlclassifier.html}
 **/
export interface GlueClassifierXMLClassifier {
  /**
   * The XML tag designating the element that contains each record in an XML document being parsed. This can't identify a self-closing element (closed by `/>`). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, `<row item_a="A" item_b="B"></row>` is okay, but `<row item_a="A" item_b="B" />` is not).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowTag: Value<string>;
  /**
   * An identifier of the data format that the classifier matches.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Classification: Value<string>;
  /**
   * The name of the classifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}
export interface GlueClassifierProperties {
  /**
   * A classifier for XML content.
   *
   * _Required_: Conditional
   *
   * _Type_: [XMLClassifier](aws-properties-glue-classifier-xmlclassifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XMLClassifier?: GlueClassifierXMLClassifier;
  /**
   * A classifier for JSON content.
   *
   * _Required_: Conditional
   *
   * _Type_: [JsonClassifier](aws-properties-glue-classifier-jsonclassifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonClassifier?: GlueClassifierJsonClassifier;
  /**
   * A classifier for comma-separated values (CSV).
   *
   * _Required_: Conditional
   *
   * _Type_: [CsvClassifier](aws-properties-glue-classifier-csvclassifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvClassifier?: GlueClassifierCsvClassifier;
  /**
   * A classifier that uses `grok`.
   *
   * _Required_: Conditional
   *
   * _Type_: [GrokClassifier](aws-properties-glue-classifier-grokclassifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GrokClassifier?: GlueClassifierGrokClassifier;
}

/**
 * The `AWS::Glue::Classifier` resource creates an AWS Glue classifier that categorizes data sources and specifies schemas. For more information, see [Adding Classifiers to a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-classifier.html) and [Classifier Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-Classifier) in the _AWS Glue Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-classifier.html}
 */
export interface GlueClassifierResource {
  Type: 'AWS::Glue::Classifier';
  Properties: GlueClassifierProperties;
}
