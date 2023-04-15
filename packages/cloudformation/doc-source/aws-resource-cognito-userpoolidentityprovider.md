# AWS::Cognito::UserPoolIdentityProvider<a name="aws-resource-cognito-userpoolidentityprovider"></a>

The `AWS::Cognito::UserPoolIdentityProvider` resource creates an identity provider for a user pool\.

## Syntax<a name="aws-resource-cognito-userpoolidentityprovider-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-cognito-userpoolidentityprovider-syntax.json"></a>

```
{
  "Type" : "AWS::Cognito::UserPoolIdentityProvider",
  "Properties" : {
      "[AttributeMapping](#cfn-cognito-userpoolidentityprovider-attributemapping)" : Json,
      "[IdpIdentifiers](#cfn-cognito-userpoolidentityprovider-idpidentifiers)" : [ String, ... ],
      "[ProviderDetails](#cfn-cognito-userpoolidentityprovider-providerdetails)" : Json,
      "[ProviderName](#cfn-cognito-userpoolidentityprovider-providername)" : String,
      "[ProviderType](#cfn-cognito-userpoolidentityprovider-providertype)" : String,
      "[UserPoolId](#cfn-cognito-userpoolidentityprovider-userpoolid)" : String
    }
}
```

### YAML<a name="aws-resource-cognito-userpoolidentityprovider-syntax.yaml"></a>

```
Type: AWS::Cognito::UserPoolIdentityProvider
Properties:
  [AttributeMapping](#cfn-cognito-userpoolidentityprovider-attributemapping): Json
  [IdpIdentifiers](#cfn-cognito-userpoolidentityprovider-idpidentifiers):
    - String
  [ProviderDetails](#cfn-cognito-userpoolidentityprovider-providerdetails): Json
  [ProviderName](#cfn-cognito-userpoolidentityprovider-providername): String
  [ProviderType](#cfn-cognito-userpoolidentityprovider-providertype): String
  [UserPoolId](#cfn-cognito-userpoolidentityprovider-userpoolid): String
```

## Properties<a name="aws-resource-cognito-userpoolidentityprovider-properties"></a>

`AttributeMapping` <a name="cfn-cognito-userpoolidentityprovider-attributemapping"></a>
A mapping of IdP attributes to standard and custom user pool attributes\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IdpIdentifiers` <a name="cfn-cognito-userpoolidentityprovider-idpidentifiers"></a>
A list of IdP identifiers\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProviderDetails` <a name="cfn-cognito-userpoolidentityprovider-providerdetails"></a>
The IdP details\. The following list describes the provider detail keys for each IdP type\.

- For Google and Login with Amazon:
  - client_id
  - client_secret
  - authorize_scopes
- For Facebook:
  - client_id
  - client_secret
  - authorize_scopes
  - api_version
- For Sign in with Apple:
  - client_id
  - team_id
  - key_id
  - private_key
  - authorize_scopes
- For OpenID Connect \(OIDC\) providers:
  - client_id
  - client_secret
  - attributes_request_method
  - oidc_issuer
  - authorize_scopes
  - The following keys are only present if Amazon Cognito didn't discover them at the `oidc_issuer` URL\.
    - authorize_url
    - token_url
    - attributes_url
    - jwks_uri
  - Amazon Cognito sets the value of the following keys automatically\. They are read\-only\.
    - attributes_url_add_attributes
- For SAML providers:
  - MetadataFile or MetadataURL
  - IDPSignout _optional_
    _Required_: No  
    _Type_: Json  
    _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProviderName` <a name="cfn-cognito-userpoolidentityprovider-providername"></a>
The IdP name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `32`  
_Pattern_: `[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProviderType` <a name="cfn-cognito-userpoolidentityprovider-providertype"></a>
The IdP type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Facebook | Google | LoginWithAmazon | OIDC | SAML | SignInWithApple`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`UserPoolId` <a name="cfn-cognito-userpoolidentityprovider-userpoolid"></a>
The user pool ID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `55`  
_Pattern_: `[\w-]+_[0-9a-zA-Z]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-cognito-userpoolidentityprovider-return-values"></a>

### Ref<a name="aws-resource-cognito-userpoolidentityprovider-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns physicalResourceId, which is “ProviderName"\. For example:

`{ "Ref": "testProvider" }`

For the Amazon Cognito identity provider `testProvider`, Ref returns the name of the identity provider\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-cognito-userpoolidentityprovider--examples"></a>

### Creating a new Login with Amazon identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Login_with_Amazon_identity_provider"></a>

The following example creates a Login with Amazon identity provider in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Login_with_Amazon_identity_provider--json"></a>

```
{
  "UserPoolIdentityProvider": {
    "Type": "AWS::Cognito::UserPoolIdentityProvider",
    "Properties": {
      "UserPoolId": {
        "Ref": "UserPool"
      },
      "ProviderName": "LoginWithAmazon",
      "ProviderDetails": {
        "client_id": "YourLoginWithAmazonAppId",
        "client_secret": "YourLoginWithAmazonAppSecret",
        "authorize_scopes": "profile postal_code"
      },
      "ProviderType": "LoginWithAmazon",
      "AttributeMapping": {
        "email": "email"
      }
    }
  }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Login_with_Amazon_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "LoginWithAmazon"
    ProviderDetails:
      client_id: "YourLoginWithAmazonAppId"
      client_secret: "YourLoginWithAmazonAppSecret"
      authorize_scopes: "profile postal_code"
    ProviderType: "LoginWithAmazon"
    AttributeMapping:
      email: "email"
```

### Creating a new Google identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Google_identity_provider"></a>

The following example creates a Google identity provider in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Google_identity_provider--json"></a>

```
{
  "UserPoolIdentityProvider": {
    "Type": "AWS::Cognito::UserPoolIdentityProvider",
    "Properties": {
      "UserPoolId": {
        "Ref": "UserPool"
      },
      "ProviderName": "Google",
      "ProviderDetails": {
        "client_id": "YourGoogleAppId",
        "client_secret": "YourGoogleAppSecret",
        "authorize_scopes": "profile email openid"
      },
      "ProviderType": "Google",
      "AttributeMapping": {
        "email": "email"
      }
    }
  }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Google_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "Google"
    ProviderDetails:
      client_id: "YourGoogleAppId"
      client_secret: "YourGoogleAppSecret"
      authorize_scopes: "profile email openid"
    ProviderType: "Google"
    AttributeMapping:
      email: "email"
```

### Creating a new Facebook identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Facebook_identity_provider"></a>

The following example creates a Facebook identity provider in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Facebook_identity_provider--json"></a>

```
{
  "UserPoolIdentityProvider": {
    "Type": "AWS::Cognito::UserPoolIdentityProvider",
    "Properties": {
      "UserPoolId": {
        "Ref": "UserPool"
      },
      "ProviderName": "Facebook",
      "ProviderDetails": {
        "client_id": "YourFacebookAppId",
        "client_secret": "YourFacebookAppSecret",
        "authorize_scopes": "public_profile,email"
      },
      "ProviderType": "Facebook",
      "AttributeMapping": {
        "email": "email"
      }
    }
  }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Facebook_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "Facebook"
    ProviderDetails:
      client_id: "YourFacebookAppId"
      client_secret: "YourFacebookAppSecret"
      authorize_scopes: "public_profile,email"
    ProviderType: "Facebook"
    AttributeMapping:
      email: "email"
```

### Creating a new Sign in with Apple identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Sign_in_with_Apple_identity_provider"></a>

The following example creates a Sign in with Apple identity provider in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Sign_in_with_Apple_identity_provider--json"></a>

```
{
  "UserPoolIdentityProvider": {
    "Type": "AWS::Cognito::UserPoolIdentityProvider",
    "Properties": {
      "UserPoolId": {
        "Ref": "UserPool"
      },
      "ProviderName": "SignInWithApple",
      "ProviderDetails": {
        "client_id": "YourAppleServicesId",
        "team_id": "YourAppleTeamId",
        "key_id": "YourApplePrivateKeyID",
        "private_key": "YourApplePrivateKey",
        "authorize_scopes": "public_profile,email"
      },
      "ProviderType": "SignInWithApple",
      "AttributeMapping": {
        "email": "email"
      }
    }
  }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_Sign_in_with_Apple_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "SignInWithApple"
    ProviderDetails:
      client_id: "YourSign"
      team_id: "YourAppleTeamId"
      key_id: "YourApplePrivateKeyID"
      private_key: "YourApplePrivateKey"
      authorize_scopes: "public_profile,email"
    ProviderType: "SignInWithApple"
    AttributeMapping:
      email: "email"
```

### Creating a new OIDC identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_OIDC_identity_provider"></a>

The following example creates the OIDC identity provider "YourOIDCProviderName" in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_OIDC_identity_provider--json"></a>

```
{
  "UserPoolIdentityProvider": {
    "Type": "AWS::Cognito::UserPoolIdentityProvider",
    "Properties": {
      "UserPoolId": {
        "Ref": "UserPool"
      },
      "ProviderName": "YourOIDCProviderName",
      "ProviderDetails": {
        "client_id": "YourOIDCClientId",
        "client_secret": "YourOIDCClientSecret",
        "attributes_request_method": "GET",
        "oidc_issuer": "YourOIDCIssuerURL",
        "authorize_scopes": "email profile openid"
      },
      "ProviderType": "OIDC",
      "AttributeMapping": {
        "email": "email"
      },
      "IdpIdentifiers": [
        "IdpIdentifier"
      ]
    }
  }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_OIDC_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "YourOIDCProviderName"
    ProviderDetails:
      client_id: "YourOIDCClientId"
      client_secret: "YourOIDCClientSecret"
      attributes_request_method: "GET"
      oidc_issuer: "YourOIDCIssuerURL"
      authorize_scopes: "email profile openid"
    ProviderType: "OIDC"
    AttributeMapping:
      email: "email"
    IdpIdentifiers:
      - "IdpIdentifier"
```

### Creating a new SAML identity provider<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_SAML_identity_provider"></a>

The following example creates a SAML identity provider "YourProviderName" in the referenced user pool\.

#### JSON<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_SAML_identity_provider--json"></a>

```
{
   "UserPoolIdentityProvider": {
      "Type": "AWS::Cognito::UserPoolIdentityProvider",
      "Properties": {
         "UserPoolId": {"Ref": "UserPool"},
         "ProviderName": "YourProviderName",
         "ProviderDetails": {
            "MetadataURL": "YourMetadataURL"
         },
         "ProviderType": "SAML",
         "AttributeMapping": {
            "email": "Attribute"
         },
         "IdpIdentifiers": [
            "IdpIdentifier"
         ]
      }
   }
}
```

#### YAML<a name="aws-resource-cognito-userpoolidentityprovider--examples--Creating_a_new_SAML_identity_provider--yaml"></a>

```
UserPoolIdentityProvider:
  Type: AWS::Cognito::UserPoolIdentityProvider
  Properties:
    UserPoolId: !Ref UserPool
    ProviderName: "YourProviderName"
    ProviderDetails:
      MetadataURL: "YourMetadataURL"
    ProviderType: "SAML"
    AttributeMapping:
      email: "Attribute"
    IdpIdentifiers:
      - "IdpIdentifier"
```
