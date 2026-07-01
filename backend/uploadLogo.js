require('dotenv').config({ path: '../.env' });
const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const logoPath = path.join(__dirname, '../client/src/logo/light logo .png');

cloudinary.uploader.upload(logoPath, {
  folder: 'eventum_assets',
  public_id: 'eventum_light_logo',
  overwrite: true
}).then(result => {
  console.log("UPLOAD_SUCCESS:");
  console.log(result.secure_url);
}).catch(error => {
  console.error("UPLOAD_ERROR:");
  console.error(error);
});
