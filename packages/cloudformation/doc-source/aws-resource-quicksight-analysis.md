# AWS::QuickSight::Analysis<a name="aws-resource-quicksight-analysis"></a>

Creates an analysis in Amazon QuickSight\.

## Syntax<a name="aws-resource-quicksight-analysis-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-quicksight-analysis-syntax.json"></a>

```
{
  "Type" : "AWS::QuickSight::Analysis",
  "Properties" : {
      "[AnalysisId](#cfn-quicksight-analysis-analysisid)" : String,
      "[AwsAccountId](#cfn-quicksight-analysis-awsaccountid)" : String,
      "[Definition](#cfn-quicksight-analysis-definition)" : AnalysisDefinition,
      "[Name](#cfn-quicksight-analysis-name)" : String,
      "[Parameters](#cfn-quicksight-analysis-parameters)" : Parameters,
      "[Permissions](#cfn-quicksight-analysis-permissions)" : [ ResourcePermission, ... ],
      "[SourceEntity](#cfn-quicksight-analysis-sourceentity)" : AnalysisSourceEntity,
      "[Status](#cfn-quicksight-analysis-status)" : String,
      "[Tags](#cfn-quicksight-analysis-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[ThemeArn](#cfn-quicksight-analysis-themearn)" : String
    }
}
```

### YAML<a name="aws-resource-quicksight-analysis-syntax.yaml"></a>

```
Type: AWS::QuickSight::Analysis
Properties:
  [AnalysisId](#cfn-quicksight-analysis-analysisid): String
  [AwsAccountId](#cfn-quicksight-analysis-awsaccountid): String
  [Definition](#cfn-quicksight-analysis-definition):
    AnalysisDefinition
  [Name](#cfn-quicksight-analysis-name): String
  [Parameters](#cfn-quicksight-analysis-parameters):
    Parameters
  [Permissions](#cfn-quicksight-analysis-permissions):
    - ResourcePermission
  [SourceEntity](#cfn-quicksight-analysis-sourceentity):
    AnalysisSourceEntity
  [Status](#cfn-quicksight-analysis-status): String
  [Tags](#cfn-quicksight-analysis-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [ThemeArn](#cfn-quicksight-analysis-themearn): String
```

## Properties<a name="aws-resource-quicksight-analysis-properties"></a>

`AnalysisId` <a name="cfn-quicksight-analysis-analysisid"></a>
The ID for the analysis that you're creating\. This ID displays in the URL of the analysis\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`AwsAccountId` <a name="cfn-quicksight-analysis-awsaccountid"></a>
The ID of the AWS account where you are creating an analysis\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `12`  
_Maximum_: `12`  
_Pattern_: `^[0-9]{12}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Definition` <a name="cfn-quicksight-analysis-definition"></a>
Property description not available\.  
_Required_: No  
_Type_: [AnalysisDefinition](aws-properties-quicksight-analysis-analysisdefinition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-name"></a>
A descriptive name for the analysis that you're creating\. This name displays for the analysis in the Amazon QuickSight console\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-quicksight-analysis-parameters"></a>
The parameter names and override values that you want to use\. An analysis can have any parameter type, and some parameters might accept multiple values\.  
_Required_: No  
_Type_: [Parameters](aws-properties-quicksight-analysis-parameters.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Permissions` <a name="cfn-quicksight-analysis-permissions"></a>
A structure that describes the principals and the resource\-level permissions on an analysis\. You can use the `Permissions` structure to grant permissions by providing a list of AWS Identity and Access Management \(IAM\) action information for each principal listed by Amazon Resource Name \(ARN\)\.  
To specify no permissions, omit `Permissions`\.  
_Required_: No  
_Type_: List of [ResourcePermission](aws-properties-quicksight-analysis-resourcepermission.md)  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceEntity` <a name="cfn-quicksight-analysis-sourceentity"></a>
A source entity to use for the analysis that you're creating\. This metadata structure contains details that describe a source template and one or more datasets\.  
Either a `SourceEntity` or a `Definition` must be provided in order for the request to be valid\.  
_Required_: No  
_Type_: [AnalysisSourceEntity](aws-properties-quicksight-analysis-analysissourceentity.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-analysis-status"></a>
Status associated with the analysis\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CREATION_FAILED | CREATION_IN_PROGRESS | CREATION_SUCCESSFUL | DELETED | UPDATE_FAILED | UPDATE_IN_PROGRESS | UPDATE_SUCCESSFUL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-quicksight-analysis-tags"></a>
Contains a map of the key\-value pairs for the resource tag or tags assigned to the analysis\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThemeArn` <a name="cfn-quicksight-analysis-themearn"></a>
The ARN for the theme to apply to the analysis that you're creating\. To see the theme in the Amazon QuickSight console, make sure that you have access to it\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-quicksight-analysis-return-values"></a>

### Fn::GetAtt<a name="aws-resource-quicksight-analysis-return-values-fn--getatt"></a>

#### <a name="aws-resource-quicksight-analysis-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the analysis\.

`CreatedTime` <a name="CreatedTime-fn::getatt"></a>
The time that the analysis was created\.

`DataSetArns` <a name="DataSetArns-fn::getatt"></a>
The ARNs of the datasets of the analysis\.

`Errors` <a name="Errors-fn::getatt"></a>
Property description not available\.

`LastUpdatedTime` <a name="LastUpdatedTime-fn::getatt"></a>
The time that the analysis was last updated\.
