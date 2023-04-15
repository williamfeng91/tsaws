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
import { ResourceTag } from '../../shared-types/resource';

export interface EC2VolumeProperties {
  /**
   * Indicates whether Amazon EBS Multi-Attach is enabled.
   *
   * AWS CloudFormation does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiAttachEnabled?: Value<boolean>;
  /**
   * The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  SnapshotId?: Value<string>;
  /**
   * The volume type. This parameter can be one of the following values:
   */
  VolumeType?: Value<string>;
  /**
   * The identifier of the AWS KMS key to use for Amazon EBS encryption. If `KmsKeyId` is specified, the encrypted state must be `true`.
   *
   * If you omit this property and your account is enabled for encryption by default, or **Encrypted** is set to `true`, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the AWS managed key.
   *
   * Alternatively, if you want to specify a different key, you can specify one of the following:
   */
  KmsKeyId?: Value<string>;
  /**
   * Indicates whether the volume should be encrypted. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default) in the _Amazon Elastic Compute Cloud User Guide_.
   *
   * Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  Encrypted?: Value<boolean>;
  /**
   * The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   *
   * The following are the supported volumes sizes for each volume type:
   */
  Size?: Value<number>;
  /**
   * Indicates whether the volume is auto-enabled for I/O operations. By default, Amazon EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoEnableIO?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the Outpost.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutpostArn?: Value<string>;
  /**
   * The Availability Zone in which to create the volume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AvailabilityZone: Value<string>;
  /**
   * The throughput to provision for a volume, with a maximum of 1,000 MiB/s.
   *
   * This parameter is valid only for `gp3` volumes. The default value is 125.
   *
   * Valid Range: Minimum value of 125. Maximum value of 1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Throughput?: Value<number>;
  /**
   * The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   */
  Iops?: Value<number>;
  /**
   * The tags to apply to the volume during creation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Specifies an Amazon Elastic Block Store (Amazon EBS) volume. You can attach the volume to an instance in the same Availability Zone using [AWS::EC2::VolumeAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html).
 *
 * When you use AWS CloudFormation to update an Amazon EBS volume that modifies `Iops`, `Size`, or `VolumeType`, there is a cooldown period before another operation can occur. This can cause your stack to report being in `UPDATE_IN_PROGRESS` or `UPDATE_ROLLBACK_IN_PROGRESS` for long periods of time.
 *
 * Amazon EBS does not support sizing down an Amazon EBS volume. AWS CloudFormation does not attempt to modify an Amazon EBS volume to a smaller size on rollback.
 *
 * Some common scenarios when you might encounter a cooldown period for Amazon EBS include:
 *
 * For more information on the cooldown period, see [Requirements when modifying volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-volume-requirements.html).
 *
 * **DeletionPolicy attribute**
 *
 * To control how AWS CloudFormation handles the volume when the stack is deleted, set a deletion policy for your volume. You can choose to retain the volume, to delete the volume, or to create a snapshot of the volume. For more information, see [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 *
 * **Note**
 *
 * If you set a deletion policy that creates a snapshot, all tags on the volume are included in the snapshot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-volume.html}
 */
export interface EC2VolumeResource {
  Type: 'AWS::EC2::Volume';
  Properties: EC2VolumeProperties;
}
