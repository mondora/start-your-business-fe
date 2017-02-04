import s3Website from 's3-website';
// import S3 require('aws-sdk/clients/s3');

s3Website.deploy(S3, {uploadDir: './build', })