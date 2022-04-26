import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragdrop.css"
import { storage , ref , uploadBytes } from './firebase'; 
const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}
export default DragDrop;