import React, { useEffect, useRef } from 'react';

// i want accept style and className props
interface CloudinaryUploadWidgetProps {
  cloudName: string;
  uploadPreset: string;
  options?: Record<string, any>;
  onUploadSuccess?: (info: any) => void;
  onUploadFailure?: (info: any) => void;
  buttonStyle?: React.CSSProperties;
  buttonClass?: string;
  buttonText?: string;
  children?: React.ReactElement;
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({
  cloudName,
  uploadPreset,
  options = {},
  onUploadSuccess,
  onUploadFailure,
  buttonText,
  buttonStyle,
  buttonClass,
  children,
}) => {
  const cloudinaryWidget = useRef<any | null>(null);
  const widgetRef = useRef<any | null>(null);
  useEffect(() => {
    // check if there is a script tag with the cloudinary url
    const loadedScript = document.querySelector(`script[src="https://upload-widget.cloudinary.com/global/all.js"]`);
    if (loadedScript) {
      cloudinaryWidget.current = (window as any).cloudinary;
      widgetRef.current = cloudinaryWidget.current.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          ...options,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            if (onUploadSuccess) {
              onUploadSuccess(result.info);
            } else {
              console.log(result.info);
            }
            if (error) {
              if (onUploadFailure) {
                onUploadFailure(error);
              } else {
                console.log(error);
              }
            }
          }
        },
      );
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.async = true;
    script.type = 'text/javascript';
    script.onload = () => {
      cloudinaryWidget.current = (window as any).cloudinary;
      widgetRef.current = cloudinaryWidget.current.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          ...options,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            if (onUploadSuccess) {
              onUploadSuccess(result.info);
            } else {
              console.log(result.info);
            }
            if (error) {
              if (onUploadFailure) {
                onUploadFailure(error);
              } else {
                console.log(error);
              }
            }
          }
        },
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [cloudName, uploadPreset, options, onUploadSuccess]);

  if (children) {
    return React.cloneElement(children, {
      onClick: () => widgetRef.current.open(),
    });
  }

  return (
    <button onClick={() => widgetRef.current.open()} style={{ border: 'none', ...buttonStyle }} className={buttonClass}>
      {buttonText || 'Upload Image'}
    </button>
  );
};

export default CloudinaryUploadWidget;
