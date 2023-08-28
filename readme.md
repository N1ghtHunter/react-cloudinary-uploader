# React Cloudinary Upload Widget

A simple and reusable React component for integrating Cloudinary upload widget into your application.

## Installation

```bash
npm install react-cloudinary-upload-widget --save

```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import CloudinaryUploadWidget from 'react-cloudinary-upload-widget';

const handleUploadSuccess = (info) => {
  console.log("Upload success:", info);
};

const handleUploadError = (error) => {
    console.error("Upload error:", error);
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
    />
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


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

