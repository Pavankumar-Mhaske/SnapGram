import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer "
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <div>Test 1...</div>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            alt="file-upload"
            width={96}
            height={77}
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photos here...
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
          <Button className="shad-button_dark_4 ">Select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
