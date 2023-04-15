export type IntrinsicFunctionBase64 = {
  /**
   * valueToEncode
   */
  'Fn::Base64': string | IntrinsicFunction;
};
export type IntrinsicFunctionCidr = {
  'Fn::Cidr': [
    /**
     * ipBlock
     */
    string | IntrinsicFunctionSelect | IntrinsicFunctionRef,
    /**
     * count
     */
    number | IntrinsicFunctionSelect | IntrinsicFunctionRef,
    /**
     * cidrBits
     */
    number | IntrinsicFunctionSelect | IntrinsicFunctionRef,
  ];
};
export type IntrinsicFunctionFindInMap = {
  'Fn::FindInMap': [
    /**
     * MapName
     */
    string | IntrinsicFunctionFindInMap | IntrinsicFunctionRef,
    /**
     * TopLevelKey
     */
    string | IntrinsicFunctionFindInMap | IntrinsicFunctionRef,
    /**
     * SecondLevelKey
     */
    string | IntrinsicFunctionFindInMap | IntrinsicFunctionRef,
  ];
};
export type IntrinsicFunctionGetAtt = {
  'Fn::GetAtt': [
    /**
     * logicalNameOfResource
     */
    string,
    /**
     * attributeName
     */
    string | IntrinsicFunctionRef,
  ];
};
export type IntrinsicFunctionGetAZs = {
  /**
   * region
   */
  'Fn::GetAZs': string | IntrinsicFunctionRef;
};
export type IntrinsicFunctionImportValue = {
  /**
   * sharedValueToImport
   */
  'Fn::ImportValue':
    | string
    | IntrinsicFunctionBase64
    | IntrinsicFunctionFindInMap
    | IntrinsicFunctionIf
    | IntrinsicFunctionJoin
    | IntrinsicFunctionSelect
    | IntrinsicFunctionSplit
    | IntrinsicFunctionSub
    | IntrinsicFunctionRef;
};
export type IntrinsicFunctionJoin = {
  'Fn::Join': [
    /**
     * delimiter
     */
    string,
    /**
     * values
     */
    (
      | string
      | IntrinsicFunctionBase64
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionImportValue
      | IntrinsicFunctionJoin
      | IntrinsicFunctionSplit
      | IntrinsicFunctionSelect
      | IntrinsicFunctionSub
      | IntrinsicFunctionRef
    ),
  ];
};
export type IntrinsicFunctionSelect<T = any> = {
  'Fn::Select': [
    /**
     * index
     */
    number | IntrinsicFunctionRef | IntrinsicFunctionFindInMap,
    /**
     * listOfObjects
     */
    (
      | T[]
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionSplit
      | IntrinsicFunctionRef
    ),
  ];
};
export type IntrinsicFunctionSplit = {
  'Fn::Split': [
    /**
     * delimiter
     */
    string,
    /**
     * sourceString
     */
    (
      | string
      | IntrinsicFunctionBase64
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionImportValue
      | IntrinsicFunctionJoin
      | IntrinsicFunctionSelect
      | IntrinsicFunctionSub
      | IntrinsicFunctionRef
    ),
  ];
};
export type IntrinsicFunctionSub = {
  'Fn::Sub':
    | string
    | [
        /**
         * string
         */
        string,
        /**
         * vars
         */
        {
          [key: string]:
            | string
            | IntrinsicFunctionBase64
            | IntrinsicFunctionFindInMap
            | IntrinsicFunctionGetAtt
            | IntrinsicFunctionGetAZs
            | IntrinsicFunctionIf
            | IntrinsicFunctionImportValue
            | IntrinsicFunctionJoin
            | IntrinsicFunctionSelect
            | IntrinsicFunctionRef;
        },
      ];
};
export type IntrinsicFunctionRef = {
  /**
   * logicalName
   */
  Ref: string;
};

export type IntrinsicFunctionAnd = {
  'Fn::And': (IntrinsicFunctionFindInMap | IntrinsicFunctionRef | ConditionIntrinsicFunction)[];
};
export type IntrinsicFunctionEquals = {
  'Fn::Equals': [
    /**
     * left
     */
    IntrinsicFunctionFindInMap | IntrinsicFunctionRef | ConditionIntrinsicFunction,
    /**
     * right
     */
    IntrinsicFunctionFindInMap | IntrinsicFunctionRef | ConditionIntrinsicFunction,
  ];
};
export type IntrinsicFunctionIf = {
  'Fn::If': [
    /**
     * condition_name
     */
    (
      | string
      | IntrinsicFunctionBase64
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionJoin
      | IntrinsicFunctionSelect
      | IntrinsicFunctionSub
      | IntrinsicFunctionRef
    ),
    /**
     * value_if_true
     */
    (
      | any
      | IntrinsicFunctionBase64
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionJoin
      | IntrinsicFunctionSelect
      | IntrinsicFunctionSub
      | IntrinsicFunctionRef
    ),
    /**
     * value_if_false
     */
    (
      | any
      | IntrinsicFunctionBase64
      | IntrinsicFunctionFindInMap
      | IntrinsicFunctionGetAtt
      | IntrinsicFunctionGetAZs
      | IntrinsicFunctionIf
      | IntrinsicFunctionJoin
      | IntrinsicFunctionSelect
      | IntrinsicFunctionSub
      | IntrinsicFunctionRef
    ),
  ];
};
export type IntrinsicFunctionNot = {
  /**
   * condition
   */
  'Fn::Not': IntrinsicFunctionFindInMap | IntrinsicFunctionRef | ConditionIntrinsicFunction;
};
export type IntrinsicFunctionOr = {
  'Fn::Or': (IntrinsicFunctionFindInMap | IntrinsicFunctionRef | ConditionIntrinsicFunction)[];
};
type ConditionIntrinsicFunction =
  | IntrinsicFunctionAnd
  | IntrinsicFunctionEquals
  | IntrinsicFunctionIf
  | IntrinsicFunctionNot
  | IntrinsicFunctionOr;

export type IntrinsicFunction =
  | IntrinsicFunctionBase64
  | IntrinsicFunctionFindInMap
  | IntrinsicFunctionGetAtt
  | IntrinsicFunctionGetAZs
  | IntrinsicFunctionIf
  | IntrinsicFunctionImportValue
  | IntrinsicFunctionJoin
  | IntrinsicFunctionRef
  | IntrinsicFunctionSelect
  | IntrinsicFunctionSplit
  | IntrinsicFunctionSub;
