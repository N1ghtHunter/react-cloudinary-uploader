# React Cloudinary Upload Widget

A simple and reusable React component for integrating Cloudinary upload widget into your application.

<p align="center">
  <img src="https://img.shields.io/npm/dt/react-cloudinary-uploader" alt="NPM Downloads">
  <img src="https://img.shields.io/npm/v/react-cloudinary-uploader" alt="NPM Version">
  <img src="https://img.shields.io/npm/l/react-cloudinary-uploader" alt="NPM License">
</p>

## Installation

```bash
npm install react-cloudinary-uploader --save

```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { CloudinaryUploadWidget } from 'react-cloudinary-uploader';

const handleUploadSuccess = (info) => {
  console.log("Upload success:", info);
};

const handleUploadFailure = (error) => {
    console.error("Upload error:", error);
};

const pictureUploaderOptions = {
  clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif'], // allowed file formats
  resourceType: 'image', // resource type, either 'image' or 'video'
  cropping: true, // cropping is enabled
  croppingAspectRatio: 1, // square aspect ratio
  croppingShowDimensions: true, // show cropping dimensions
  croppingValidateDimensions: true, // validate image dimensions after cropping
  maxFileSize: 10000000, // max file size in bytes (10 MB)
  folder: 'images', // Cloudinary folder to upload to
  sources: ['local', 'url', 'camera', 'google_drive'], // upload sources, either 'local', 'url', 'camera' or 'google_drive'
};

const App = () => (
  <div>
    <h1>Cloudinary Upload Widget Example</h1>
    <CloudinaryUploadWidget
        cloudName="your-cloud-name"
        uploadPreset="your-upload-preset"
        buttonStyle={{ border: "1px solid black", padding: "10px" }}
        buttonClass='custom-class' // className for button element
        buttonText="Choose Image"
        onUploadSuccess={handleUploadSuccess}
        onUploadFailure={handleUploadFailure}
        options={pictureUploaderOptions}
    />
    <CloudinaryUploadWidget
      cloudName="your-cloud-name"
      uploadPreset="your-upload-preset"
      options={pictureUploaderOptions}
      onUploadSuccess={handleUploadSuccess}
      onUploadFailure={handleUploadFailure}
    >
      <button
        style={{
          color: 'white',
          border: 'none',
          width: '120px',
          backgroundColor: '#bbb',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        className='custom-class'
      >Upload Picture</button>
    </CloudinaryUploadWidget>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

Replace `your-cloud-name` and `your-upload-preset` with your Cloudinary cloud name and upload preset respectively.

## Props

| Prop Name | Type | Required | Description |
| --- | --- | --- | --- |
| cloudName | string | true | Your Cloudinary cloud name |
| uploadPreset | string | true | Your Cloudinary upload preset |
| onUploadSuccess | function | No | Callback function that is called when upload is successful. The function is passed an object containing the upload information. |
| onUploadError | function | No | Callback function that is called when upload fails. The function is passed an object containing the error information. |
| options | object | No | An object containing options for the upload widget. See [Cloudinary documentation](https://cloudinary.com/documentation/upload_widget#upload_widget_options) for available options. |
| buttonText | string | No | Text to display on the upload button. Default is `Upload Image` |
| buttonClass | string | No | CSS class to apply to the upload button.|
| buttonStyle | object | No | An object containing CSS styles to apply to the upload button. |
| children | 	React element | No | A React Element to use as the upload button. If this prop is provided, the `buttonText`, `buttonStyle` and `buttonClass` props are ignored. |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

