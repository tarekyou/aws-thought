const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    // Replace the <My_Bucket_Name> with the name of your own S3 bucket
    Bucket: "user-images-d983457a-9324-4b36-b6aa-db6a6bd02aab",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
  };

  return imageParams;
};

module.exports = params;
