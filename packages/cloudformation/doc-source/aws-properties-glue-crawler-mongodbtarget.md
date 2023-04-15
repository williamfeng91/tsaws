# AWS::Glue::Crawler MongoDBTarget<a name="aws-properties-glue-crawler-mongodbtarget"></a>

Specifies an Amazon DocumentDB or MongoDB data store to crawl\.

## Syntax<a name="aws-properties-glue-crawler-mongodbtarget-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-crawler-mongodbtarget-syntax.json"></a>

```
{
  "[ConnectionName](#cfn-glue-crawler-mongodbtarget-connectionname)" : String,
  "[Path](#cfn-glue-crawler-mongodbtarget-path)" : String
}
```

### YAML<a name="aws-properties-glue-crawler-mongodbtarget-syntax.yaml"></a>

```
  [ConnectionName](#cfn-glue-crawler-mongodbtarget-connectionname): String
  [Path](#cfn-glue-crawler-mongodbtarget-path): String
```

## Properties<a name="aws-properties-glue-crawler-mongodbtarget-properties"></a>

`ConnectionName` <a name="cfn-glue-crawler-mongodbtarget-connectionname"></a>
The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Path` <a name="cfn-glue-crawler-mongodbtarget-path"></a>
The path of the Amazon DocumentDB or MongoDB target \(database/collection\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
