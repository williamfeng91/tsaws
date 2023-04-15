/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt data indexed by Amazon Kendra. We suggest that you use a CMK from your account to help secure your index. Amazon Kendra doesn't support asymmetric CMKs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-serversideencryptionconfiguration.html}
 **/
export interface KendraKendraIndexServerSideEncryptionConfiguration {
  /**
   * The identifier of the AWS KMS key. Amazon Kendra doesn't support asymmetric keys.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
}

/**
 * Provides the configuration information for the JSON token type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jsontokentypeconfiguration.html}
 **/
export interface KendraKendraIndexJsonTokenTypeConfiguration {
  /**
   * The group attribute field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupAttributeField: Value<string>;
  /**
   * The user name attribute field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserNameAttributeField: Value<string>;
}

/**
 * Provides the configuration information for a token.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-usertokenconfiguration.html}
 **/
export interface KendraKendraIndexUserTokenConfiguration {
  /**
   * Information about the JWT token type configuration.
   *
   * _Required_: No
   *
   * _Type_: [JwtTokenTypeConfiguration](aws-properties-kendra-index-jwttokentypeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JwtTokenTypeConfiguration?: KendraKendraIndexJwtTokenTypeConfiguration;
  /**
   * Information about the JSON token type configuration.
   *
   * _Required_: No
   *
   * _Type_: [JsonTokenTypeConfiguration](aws-properties-kendra-index-jsontokentypeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonTokenTypeConfiguration?: KendraKendraIndexJsonTokenTypeConfiguration;
}

/**
 * Specifies additional capacity units configured for your Enterprise Edition index. You can add and remove capacity units to fit your usage requirements.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-capacityunitsconfiguration.html}
 **/
export interface KendraKendraIndexCapacityUnitsConfiguration {
  /**
   * The amount of extra query capacity for an index and [GetQuerySuggestions](https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html) capacity.
   *
   * A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day. You can add up to 100 extra capacity units.
   *
   * `GetQuerySuggestions` capacity is five times the provisioned query capacity for an index, or the base capacity of 2.5 calls per second, whichever is higher. For example, the base capacity for an index is 0.1 queries per second, and `GetQuerySuggestions` capacity has a base of 2.5 calls per second. If you add another 0.1 queries per second to total 0.2 queries per second for an index, the `GetQuerySuggestions` capacity is 2.5 calls per second (higher than five times 0.2 queries per second).
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryCapacityUnits: Value<number>;
  /**
   * The amount of extra storage capacity for an index. A single capacity unit provides 30 GB of storage space or 100,000 documents, whichever is reached first. You can add up to 100 extra capacity units.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageCapacityUnits: Value<number>;
}

/**
 * Specifies a key-value pair of the search boost value for a document when the key is part of the metadata of a document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-valueimportanceitem.html}
 **/
export interface KendraKendraIndexValueImportanceItem {
  /**
   * The boost value for a document when the key is part of the metadata of a document.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<number>;
  /**
   * The document metadata value used for the search boost.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * Specifies the properties, such as relevance tuning and searchability, of an index field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-documentmetadataconfiguration.html}
 **/
export interface KendraKendraIndexDocumentMetadataConfiguration {
  /**
   * Provides tuning parameters to determine how the field affects the search results.
   *
   * _Required_: No
   *
   * _Type_: [Relevance](aws-properties-kendra-index-relevance.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Relevance?: KendraKendraIndexRelevance;
  /**
   * The data type of the index field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DATE_VALUE | LONG_VALUE | STRING_LIST_VALUE | STRING_VALUE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Provides information about how the field is used during a search.
   *
   * _Required_: No
   *
   * _Type_: [Search](aws-properties-kendra-index-search.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Search?: KendraKendraIndexSearch;
  /**
   * The name of the index field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Provides information about how a custom index field is used during a search.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-search.html}
 **/
export interface KendraKendraIndexSearch {
  /**
   * Determines whether the field is returned in the query response. The default is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Displayable?: Value<boolean>;
  /**
   * Determines whether the field can be used to sort the results of a query. The default is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sortable?: Value<boolean>;
  /**
   * Indicates that the field can be used to create search facets, a count of results for each value in the field. The default is `false` .
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Facetable?: Value<boolean>;
  /**
   * Determines whether the field is used in the search. If the `Searchable` field is `true`, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is `true` for string fields and `false` for number and date fields.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Searchable?: Value<boolean>;
}

/**
 * Provides information for tuning the relevance of a field in a search. When a query includes terms that match the field, the results are given a boost in the response based on these tuning parameters.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-relevance.html}
 **/
export interface KendraKendraIndexRelevance {
  /**
   * The relative importance of the field in the search. Larger numbers provide more of a boost than smaller numbers.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Importance?: Value<number>;
  /**
   * Determines how values should be interpreted.
   *
   * When the `RankOrder` field is `ASCENDING`, higher numbers are better. For example, a document with a rating score of 10 is higher ranking than a document with a rating score of 1.
   *
   * When the `RankOrder` field is `DESCENDING`, lower numbers are better. For example, in a task tracking application, a priority 1 task is more important than a priority 5 task.
   *
   * Only applies to `LONG` and `DOUBLE` fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ASCENDING | DESCENDING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RankOrder?: Value<string>;
  /**
   * An array of key-value pairs for different boosts when they appear in the search result list. For example, if you want to boost query terms that match the "department" field in the result, query terms that match this field are boosted in the result. You can add entries from the department field to boost documents with those values higher.
   *
   * For example, you can add entries to the map with names of departments. If you add "HR", 5 and "Legal",3 those departments are given special attention when they appear in the metadata of a document.
   *
   * _Required_: No
   *
   * _Type_: List of [ValueImportanceItem](aws-properties-kendra-index-valueimportanceitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueImportanceItems?: List<KendraKendraIndexValueImportanceItem>;
  /**
   * Indicates that this field determines how "fresh" a document is. For example, if document 1 was created on November 5, and document 2 was created on October 31, document 1 is "fresher" than document 2. You can only set the `Freshness` field on one `DATE` type field. Only applies to `DATE` fields.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Freshness?: Value<boolean>;
  /**
   * Specifies the time period that the boost applies to. For example, to make the boost apply to documents with the field value within the last month, you would use "2628000s". Once the field value is beyond the specified range, the effect of the boost drops off. The higher the importance, the faster the effect drops off. If you don't specify a value, the default is 3 months. The value of the field is a numeric string followed by the character "s", for example "86400s" for one day, or "604800s" for one week.
   *
   * Only applies to `DATE` fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10`
   *
   * _Pattern_: `[0-9]+[s]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Duration?: Value<string>;
}

/**
 * Provides the configuration information for the JWT token type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-index-jwttokentypeconfiguration.html}
 **/
export interface KendraKendraIndexJwtTokenTypeConfiguration {
  /**
   * The regular expression that identifies the claim.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClaimRegex?: Value<string>;
  /**
   * The issuer of the token.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Issuer?: Value<string>;
  /**
   * The location of the key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SECRET_MANAGER | URL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyLocation: Value<string>;
  /**
   * The Amazon Resource Name (arn) of the secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretManagerArn?: Value<string>;
  /**
   * The group attribute field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupAttributeField?: Value<string>;
  /**
   * The signing key URL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^(https?|ftp|file)://([^s]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URL?: Value<string>;
  /**
   * The user name attribute field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserNameAttributeField?: Value<string>;
}
export interface KendraKendraIndexProperties {
  /**
   * A description for the index.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The user context policy.
   *
   * ATTRIBUTE_FILTER
   */
  UserContextPolicy?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [CapacityUnitsConfiguration](aws-properties-kendra-index-capacityunitsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityUnits?: KendraKendraIndexCapacityUnitsConfiguration;
  /**
   * The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
   *
   * _Required_: No
   *
   * _Type_: [ServerSideEncryptionConfiguration](aws-properties-kendra-index-serversideencryptionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerSideEncryptionConfiguration?: KendraKendraIndexServerSideEncryptionConfiguration;
  /**
   * Specifies the properties of an index field. You can add either a custom or a built-in field. You can add and remove built-in fields at any time. When a built-in field is removed it's configuration reverts to the default for the field. Custom fields can't be removed from an index after they are added.
   *
   * _Required_: No
   *
   * _Type_: List of [DocumentMetadataConfiguration](aws-properties-kendra-index-documentmetadataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentMetadataConfigurations?: List<KendraKendraIndexDocumentMetadataConfiguration>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role used when you use the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation to index documents from an Amazon S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Indicates whether the index is a Enterprise Edition index or a Developer Edition index. Valid values are `DEVELOPER_EDITION` and `ENTERPRISE_EDITION`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DEVELOPER_EDITION | ENTERPRISE_EDITION`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Edition: Value<string>;
  /**
   * The name of the index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Defines the type of user token used for the index.
   *
   * _Required_: No
   *
   * _Type_: List of [UserTokenConfiguration](aws-properties-kendra-index-usertokenconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserTokenConfigurations?: List<KendraKendraIndexUserTokenConfiguration>;
}

/**
 * Creates an Amazon Kendra index
 *
 * Once the index is active you can add documents to your index using the [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/dg/BatchPutDocument.html) operation or using one of the supported data sources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-index.html}
 */
export interface KendraKendraIndexResource {
  Type: 'AWS::Kendra::KendraIndex';
  Properties: KendraKendraIndexProperties;
}
