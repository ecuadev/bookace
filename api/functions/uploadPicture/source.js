exports = function(base64EncodedImage, fileName, fileType) {
  // Convert the base64 encoded image string to a BSON Binary object
  const binaryImageData = BSON.Binary.fromBase64(base64EncodedImage, 0);
  // Instantiate an S3 service client
  const s3Service = context.services.get('aws').s3('us-east-2');
  // Put the object to S3
  return s3Service.PutObject({
    'Bucket': 'bookace-test',
    'Key': fileName,
    'ContentType': fileType,
    'Body': binaryImageData
  })
  .then(putObjectOutput => {
    console.log(putObjectOutput);
    // putObjectOutput: {
    //   ETag: <string>, // The object's S3 entity tag
    // }
    return putObjectOutput
  });
};