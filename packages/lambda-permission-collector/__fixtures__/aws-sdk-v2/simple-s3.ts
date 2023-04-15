import AWS from 'aws-sdk';
import assert from 'assert';

const s3 = new AWS.S3();
// const { S3: S3Client } = AWS;
const ss = AWS['S3'];
const ss2 = ss,
  asdf = { aaa: ss2 };
const { aaa: bbb } = asdf;
const ss3 = new bbb();

const { BUCKET } = process.env;

export async function handler() {
  assert(BUCKET, 'Missing env variable BUCKET');

  const result = await s3
    .listObjectsV2({
      Bucket: BUCKET,
    })
    .promise();
  return result.Contents;
}
