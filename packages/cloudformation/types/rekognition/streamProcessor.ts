/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Amazon Rekognition Video Stream Processor take as input a Kinesis video stream (Input) and a Kinesis data stream (Output). This is the Amazon Kinesis Data Streams instance to which the Amazon Rekognition stream processor streams the analysis results. This must be created within the constraints specified at [KinesisDataStream](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_KinesisDataStream).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisdatastream.html}
 **/
export interface RekognitionStreamProcessorKinesisDataStream {
  /**
   * ARN of the output Amazon Kinesis Data Streams stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `(^arn:([a-zd-]+):kinesis:([a-zd-]+):d{12}:.+$)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn: Value<string>;
}

/**
 * The input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor. `FaceSearchSettings` is a request parameter for [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor). For more information, see [FaceSearchSettings](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_FaceSearchSettings).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-facesearchsettings.html}
 **/
export interface RekognitionStreamProcessorFaceSearchSettings {
  /**
   * The ID of a collection that contains faces that you want to search for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CollectionId: Value<string>;
  /**
   * Minimum face match confidence score that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted, and values lower than 80 are set to 80.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FaceMatchThreshold?: Value<number>;
}

/**
 * Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level, this setting is ignored on individual streams. For more information, see [StreamProcessorDataSharingPreference](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorDataSharingPreference).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-datasharingpreference.html}
 **/
export interface RekognitionStreamProcessorDataSharingPreference {
  /**
   * Describes the opt-in status applied to a stream processor's data sharing policy.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OptIn: Value<boolean>;
}

/**
 * Identifies the bounding box around the label, face, text, or personal protective equipment. The `left` (x-coordinate) and `top` (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
 *
 * The `top` and `left` values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a `left` value of 0.5 (350/700) and a `top` value of 0.25 (50/200).
 *
 * The `width` and `height` values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. For more information, see [BoundingBox](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_BoundingBox).
 *
 * **Note**
 *
 * The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the `left` or `top` values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-boundingbox.html}
 **/
export interface RekognitionStreamProcessorBoundingBox {
  /**
   * Left coordinate of the bounding box as a ratio of overall image width.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Left: Value<number>;
  /**
   * Top coordinate of the bounding box as a ratio of overall image height.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Top: Value<number>;
  /**
   * Height of the bounding box as a ratio of the overall image height.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Height: Value<number>;
  /**
   * Width of the bounding box as a ratio of the overall image width.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Width: Value<number>;
}

/**
 * Connected home settings to use on a streaming video. Defining the settings is required in the request parameter for `CreateStreamProcessor`. Including this setting in the CreateStreamProcessor request lets you use the stream processor for connected home features. You can then select what you want the stream processor to detect, such as people or pets.
 *
 * When the stream processor has started, one notification is sent for each object class specified. For example, if packages and pets are selected, one SNS notification is published the first time a package is detected and one SNS notification is published the first time a pet is detected. An end-of-session summary is also published. For more information, see the ConnectedHome section of [StreamProcessorSettings](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorSettings).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-connectedhomesettings.html}
 **/
export interface RekognitionStreamProcessorConnectedHomeSettings {
  /**
   * The minimum confidence required to label an object in the video.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinConfidence?: Value<number>;
  /**
   * Specifies what you want to detect in the video, such as people, packages, or pets. The current valid labels you can include in this list are: "PERSON", "PET", "PACKAGE", and "ALL".
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Labels: List<Value<string>>;
}

/**
 * The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. These results include the name of the stream processor resource, the session ID of the stream processing session, and labeled timestamps and bounding boxes for detected labels. For more information, see [S3Destination](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_S3Destination).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-s3destination.html}
 **/
export interface RekognitionStreamProcessorS3Destination {
  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name of a stream processor's exports.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) object keys of a stream processor's exports.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ObjectKeyPrefix?: Value<string>;
}

/**
 * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation. Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete. For more information, see [StreamProcessorNotificationChannel](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorNotificationChannel).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-notificationchannel.html}
 **/
export interface RekognitionStreamProcessorNotificationChannel {
  /**
   * The ARN of the SNS topic that receives notifications.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn: Value<string>;
}

/**
 * The Kinesis video stream that provides the source of the streaming video for an Amazon Rekognition Video stream processor. For more information, see [KinesisVideoStream](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_KinesisVideoStream).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rekognition-streamprocessor-kinesisvideostream.html}
 **/
export interface RekognitionStreamProcessorKinesisVideoStream {
  /**
   * ARN of the Kinesis video stream stream that streams the source video.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `(^arn:([a-zd-]+):kinesisvideo:([a-zd-]+):d{12}:.+$)`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Arn: Value<string>;
}
export interface RekognitionStreamProcessorProperties {
  /**
   * The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. For more information, see the S3Destination section of [StreamProcessorOutput](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorOutput).
   *
   * _Required_: No
   *
   * _Type_: [S3Destination](aws-properties-rekognition-streamprocessor-s3destination.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Destination?: RekognitionStreamProcessorS3Destination;
  /**
   * Allows you to opt in or opt out to share data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams. For more information, see [StreamProcessorDataSharingPreference](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorDataSharingPreference).
   *
   * _Required_: No
   *
   * _Type_: [DataSharingPreference](aws-properties-rekognition-streamprocessor-datasharingpreference.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataSharingPreference?: RekognitionStreamProcessorDataSharingPreference;
  /**
   * The identifier for your Amazon Key Management Service key (Amazon KMS key). Optional parameter for connected home stream processors used to encrypt results and data published to your Amazon S3 bucket. For more information, see the KMSKeyId section of [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The input parameters used to recognize faces in a streaming video analyzed by an Amazon Rekognition stream processor. For more information regarding the contents of the parameters, see [FaceSearchSettings](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_FaceSearchSettings).
   *
   * _Required_: No
   *
   * _Type_: [FaceSearchSettings](aws-properties-rekognition-streamprocessor-facesearchsettings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FaceSearchSettings?: RekognitionStreamProcessorFaceSearchSettings;
  /**
   * A set of ordered lists of [Point](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_Point) objects. Each entry of the set contains a polygon denoting a region of interest on the screen. Each polygon is an ordered list of [Point](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_Point) objects. For more information, see the Polygon field of [RegionOfInterest](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RegionOfInterest).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PolygonRegionsOfInterest?: { [key: string]: any };
  /**
   * The ARN of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions to the Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a connected home stream processor. This is required for both face search and connected home stream processors. For information about constraints, see the RoleArn section of [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * The Name attribute specifies the name of the stream processor and it must be within the constraints described in the Name section of [StreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessor). If you don't specify a name, Amazon CloudFormation generates a unique ID and uses that ID for the stream processor name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * Connected home settings to use on a streaming video. You can use a stream processor for connected home features and select what you want the stream processor to detect, such as people or pets. When the stream processor has started, one notification is sent for each object class specified. For more information, see the ConnectedHome section of [StreamProcessorSettings](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorSettings).
   *
   * _Required_: No
   *
   * _Type_: [ConnectedHomeSettings](aws-properties-rekognition-streamprocessor-connectedhomesettings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectedHomeSettings?: RekognitionStreamProcessorConnectedHomeSettings;
  /**
   * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation. Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. Amazon Rekognition also publishes an end-of-session notification with a summary when the stream processing session is complete. For more information, see [StreamProcessorNotificationChannel](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_StreamProcessorNotificationChannel).
   *
   * _Required_: No
   *
   * _Type_: [NotificationChannel](aws-properties-rekognition-streamprocessor-notificationchannel.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotificationChannel?: RekognitionStreamProcessorNotificationChannel;
  /**
   * The Kinesis video stream that provides the source of the streaming video for an Amazon Rekognition Video stream processor. For more information, see [KinesisVideoStream](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_KinesisVideoStream).
   *
   * _Required_: Yes
   *
   * _Type_: [KinesisVideoStream](aws-properties-rekognition-streamprocessor-kinesisvideostream.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KinesisVideoStream: RekognitionStreamProcessorKinesisVideoStream;
  /**
   * List of BoundingBox objects, each of which denotes a region of interest on screen. For more information, see the BoundingBox field of [RegionOfInterest](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_RegionOfInterest).
   *
   * _Required_: No
   *
   * _Type_: List of [BoundingBox](aws-properties-rekognition-streamprocessor-boundingbox.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BoundingBoxRegionsOfInterest?: List<RekognitionStreamProcessorBoundingBox>;
  /**
   * Amazon Rekognition's Video Stream Processor takes a Kinesis video stream as input. This is the Amazon Kinesis Data Streams instance to which the Amazon Rekognition stream processor streams the analysis results. This must be created within the constraints specified at [KinesisDataStream](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_KinesisDataStream).
   *
   * _Required_: No
   *
   * _Type_: [KinesisDataStream](aws-properties-rekognition-streamprocessor-kinesisdatastream.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KinesisDataStream?: RekognitionStreamProcessorKinesisDataStream;
  /**
   * A set of tags (key-value pairs) that you want to attach to the stream processor. For more information, see the Tags section of [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor).
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
 * The `AWS::Rekognition::StreamProcessor` type creates a stream processor used to detect and recognize faces or to detect connected home labels in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition, one for detecting faces and one for connected home features.
 *
 * If you are creating a stream processor for detecting faces, you provide a Kinesis video stream (input) and a Kinesis data stream (output). You also specify the face recognition criteria in FaceSearchSettings. For example, the collection containing faces that you want to recognize.
 *
 * If you are creating a stream processor for detection of connected home labels, you provide a Kinesis video stream for input, and for output an Amazon S3 bucket and an Amazon SNS topic. You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect in ConnectedHomeSettings, such as people, packages, and pets.
 *
 * You can also specify where in the frame you want Amazon Rekognition to monitor with BoundingBoxRegionsOfInterest and PolygonRegionsOfInterest. The Name is used to manage the stream processor and it is the identifier for the stream processor. The `AWS::Rekognition::StreamProcessor` resource creates a stream processor in the same Region where you create the Amazon CloudFormation stack.
 *
 * For more information, see [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/APIReference/API_CreateStreamProcessor).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-streamprocessor.html}
 */
export interface RekognitionStreamProcessorResource {
  Type: 'AWS::Rekognition::StreamProcessor';
  Properties: RekognitionStreamProcessorProperties;
}
