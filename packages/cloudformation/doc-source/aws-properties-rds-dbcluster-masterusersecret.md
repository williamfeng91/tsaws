# AWS::RDS::DBCluster MasterUserSecret<a name="aws-properties-rds-dbcluster-masterusersecret"></a>

The `MasterUserSecret` return value specifies the secret managed by RDS in AWS Secrets Manager for the master user password\.

For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide_ and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the _Amazon Aurora User Guide\._

## Syntax<a name="aws-properties-rds-dbcluster-masterusersecret-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-rds-dbcluster-masterusersecret-syntax.json"></a>

```
{
  "[KmsKeyId](#cfn-rds-dbcluster-masterusersecret-kmskeyid)" : String,
  "[SecretArn](#cfn-rds-dbcluster-masterusersecret-secretarn)" : String
}
```

### YAML<a name="aws-properties-rds-dbcluster-masterusersecret-syntax.yaml"></a>

```
  [KmsKeyId](#cfn-rds-dbcluster-masterusersecret-kmskeyid): String
  [SecretArn](#cfn-rds-dbcluster-masterusersecret-secretarn): String
```

## Properties<a name="aws-properties-rds-dbcluster-masterusersecret-properties"></a>

`KmsKeyId` <a name="cfn-rds-dbcluster-masterusersecret-kmskeyid"></a>
The AWS KMS key identifier that is used to encrypt the secret\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecretArn` <a name="cfn-rds-dbcluster-masterusersecret-secretarn"></a>
The Amazon Resource Name \(ARN\) of the secret\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
