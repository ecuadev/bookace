exports = function(fileName) {
  // Instantiate an S3 service client
  const s3Service = context.services.get('aws').s3('us-east-2');
  // Get the object from S3
  return s3Service.GetObject({
    'Bucket': 'bookace-test',
    'Key': fileName,
  })
  .then(getObjectOutput => {
    console.log(getObjectOutput);
    // {
    //   ETag: <string>, // The object's S3 entity tag
    //   Body: <binary>, // The object data
    //   ContentType: <string>, // The object's MIME type
    // }
    const base64EncodedImage = getObjectOutput.Body
    return base64EncodedImage
  })
};