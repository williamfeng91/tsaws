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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-step-hadoopjarstepconfig.html}
 **/
export interface EMRStepHadoopJarStepConfig {
  Args?: List<Value<string>>;
  Jar: Value<string>;
  MainClass?: Value<string>;
  StepProperties?: List<EMRStepKeyValue>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-step-keyvalue.html}
 **/
export interface EMRStepKeyValue {
  Key?: Value<string>;
  Value?: Value<string>;
}
export interface EMRStepProperties {
  /**
   * This specifies what action to take when the cluster step fails. Possible values are `CANCEL_AND_WAIT` and `CONTINUE`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ActionOnFailure: Value<string>;
  /**
   * The `HadoopJarStepConfig` property type specifies a job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.
   *
   * _Required_: Yes
   *
   * _Type_: [HadoopJarStepConfig](aws-properties-elasticmapreduce-step-hadoopjarstepconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HadoopJarStep: EMRStepHadoopJarStepConfig;
  /**
   * A string that uniquely identifies the cluster (job flow).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobFlowId: Value<string>;
  /**
   * The name of the cluster step.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Use `Step` to specify a cluster (job flow) step, which runs only on the master node. Steps are used to submit data processing jobs to a cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html}
 */
export interface EMRStepResource {
  Type: 'AWS::EMR::Step';
  Properties: EMRStepProperties;
}
