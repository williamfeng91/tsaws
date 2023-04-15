# AWS::Route53::RecordSetGroup GeoLocation<a name="aws-properties-route53-recordset-geolocation"></a>

A complex type that contains information about a geographic location\.

## Syntax<a name="aws-properties-route53-recordset-geolocation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-route53-recordset-geolocation-syntax.json"></a>

```
{
  "[ContinentCode](#cfn-route53-recordsetgroup-geolocation-continentcode)" : String,
  "[CountryCode](#cfn-route53-recordset-geolocation-countrycode)" : String,
  "[SubdivisionCode](#cfn-route53-recordset-geolocation-subdivisioncode)" : String
}
```

### YAML<a name="aws-properties-route53-recordset-geolocation-syntax.yaml"></a>

```
  [ContinentCode](#cfn-route53-recordsetgroup-geolocation-continentcode): String
  [CountryCode](#cfn-route53-recordset-geolocation-countrycode): String
  [SubdivisionCode](#cfn-route53-recordset-geolocation-subdivisioncode): String
```

## Properties<a name="aws-properties-route53-recordset-geolocation-properties"></a>

`ContinentCode` <a name="cfn-route53-recordsetgroup-geolocation-continentcode"></a>
For geolocation resource record sets, a two\-letter abbreviation that identifies a continent\. Route 53 supports the following continent codes:

- **AF**: Africa
- **AN**: Antarctica
- **AS**: Asia
- **EU**: Europe
- **OC**: Oceania
- **NA**: North America
- **SA**: South America
  Constraint: Specifying `ContinentCode` with either `CountryCode` or `SubdivisionCode` returns an `InvalidInput` error\.  
  _Required_: No  
  _Type_: String  
  _Minimum_: `2`  
  _Maximum_: `2`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CountryCode` <a name="cfn-route53-recordset-geolocation-countrycode"></a>
For geolocation resource record sets, the two\-letter code for a country\.  
Route 53 uses the two\-letter country codes that are specified in [ISO standard 3166\-1 alpha\-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubdivisionCode` <a name="cfn-route53-recordset-geolocation-subdivisioncode"></a>
For geolocation resource record sets, the two\-letter code for a state of the United States\. Route 53 doesn't support any other values for `SubdivisionCode`\. For a list of state abbreviations, see [Appendix B: Two–Letter State and Possession Abbreviations](https://pe.usps.com/text/pub28/28apb.htm) on the United States Postal Service website\.  
If you specify `subdivisioncode`, you must also specify `US` for `CountryCode`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-route53-recordset-geolocation--seealso"></a>

- [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#aws-resource-route53-recordsetgroup-return-values) in the topic [AWS::Route53::RecordSetGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html)
- [GeoLocation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html) in the _Amazon Route 53 API Reference_