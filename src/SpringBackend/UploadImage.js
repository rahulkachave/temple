import React, { useState } from 'react';
import axios from 'axios';
import './Backendcss/upload.css'
function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
const[error ,setError]=useState('');
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if(!selectedFile){
        setError('please select a file')
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('http://localhost:8080/name/upimages', formData)
      .then((response) => {
        console.log(response.data);
        alert("done ")
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className='mainupload'>
    <div className='uploadimg'>
      <input type="file" onChange={handleFileChange} />
      
      <button className='btnupload' onClick={handleUpload}>Upload</button>
      <div style={{color:'red'}}>{error && <p>{error}</p>}</div>
    </div>
    </div>
  );
}

export default UploadImage;
