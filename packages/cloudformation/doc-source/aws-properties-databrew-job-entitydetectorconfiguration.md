# AWS::DataBrew::Job EntityDetectorConfiguration<a name="aws-properties-databrew-job-entitydetectorconfiguration"></a>

Configuration of entity detection for a profile job\. When undefined, entity detection is disabled\.

## Syntax<a name="aws-properties-databrew-job-entitydetectorconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-job-entitydetectorconfiguration-syntax.json"></a>

```
{
  "[AllowedStatistics](#cfn-databrew-job-entitydetectorconfiguration-allowedstatistics)" : AllowedStatistics,
  "[EntityTypes](#cfn-databrew-job-entitydetectorconfiguration-entitytypes)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-databrew-job-entitydetectorconfiguration-syntax.yaml"></a>

```
  [AllowedStatistics](#cfn-databrew-job-entitydetectorconfiguration-allowedstatistics):
    AllowedStatistics
  [EntityTypes](#cfn-databrew-job-entitydetectorconfiguration-entitytypes):
    - String
```

## Properties<a name="aws-properties-databrew-job-entitydetectorconfiguration-properties"></a>

`AllowedStatistics` <a name="cfn-databrew-job-entitydetectorconfiguration-allowedstatistics"></a>
Configuration of statistics that are allowed to be run on columns that contain detected entities\. When undefined, no statistics will be computed on columns that contain detected entities\.  
_Required_: No  
_Type_: [AllowedStatistics](aws-properties-databrew-job-allowedstatistics.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EntityTypes` <a name="cfn-databrew-job-entitydetectorconfiguration-entitytypes"></a>
Entity types to detect\. Can be any of the following:

- USA_SSN
- EMAIL
- USA_ITIN
- USA_PASSPORT_NUMBER
- PHONE_NUMBER
- USA_DRIVING_LICENSE
- BANK_ACCOUNT
- CREDIT_CARD
- IP_ADDRESS
- MAC_ADDRESS
- USA_DEA_NUMBER
- USA_HCPCS_CODE
- USA_NATIONAL_PROVIDER_IDENTIFIER
- USA_NATIONAL_DRUG_CODE
- USA_HEALTH_INSURANCE_CLAIM_NUMBER
- USA_MEDICARE_BENEFICIARY_IDENTIFIER
- USA_CPT_CODE
- PERSON_NAME
- DATE
  The Entity type group USA_ALL is also supported, and includes all of the above entity types except PERSON_NAME and DATE\.  
  _Required_: Yes  
  _Type_: List of String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
