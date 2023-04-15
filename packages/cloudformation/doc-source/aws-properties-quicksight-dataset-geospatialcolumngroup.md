# AWS::QuickSight::DataSet GeoSpatialColumnGroup<a name="aws-properties-quicksight-dataset-geospatialcolumngroup"></a>

Geospatial column group that denotes a hierarchy\.

## Syntax<a name="aws-properties-quicksight-dataset-geospatialcolumngroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-geospatialcolumngroup-syntax.json"></a>

```
{
  "[Columns](#cfn-quicksight-dataset-geospatialcolumngroup-columns)" : [ String, ... ],
  "[CountryCode](#cfn-quicksight-dataset-geospatialcolumngroup-countrycode)" : String,
  "[Name](#cfn-quicksight-dataset-geospatialcolumngroup-name)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-geospatialcolumngroup-syntax.yaml"></a>

```
  [Columns](#cfn-quicksight-dataset-geospatialcolumngroup-columns):
    - String
  [CountryCode](#cfn-quicksight-dataset-geospatialcolumngroup-countrycode): String
  [Name](#cfn-quicksight-dataset-geospatialcolumngroup-name): String
```

## Properties<a name="aws-properties-quicksight-dataset-geospatialcolumngroup-properties"></a>

`Columns` <a name="cfn-quicksight-dataset-geospatialcolumngroup-columns"></a>
Columns in this hierarchy\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `16`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CountryCode` <a name="cfn-quicksight-dataset-geospatialcolumngroup-countrycode"></a>
Country code\.  
_Required_: No  
_Type_: String  
_Allowed values_: `US`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dataset-geospatialcolumngroup-name"></a>
A display name for the hierarchy\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
