import React, { useRef } from "react";
import { useState } from "react";
import './UploadCard.css';
import fileImage from '../../images/file.svg'

const UploadCard = ({ setModal, setFileDetails}) => {
  
  const [files,setFiles]=useState(null);
//   var obj={};
  const inputRef=useRef();
  const handleDragOver=(e)=>{
    e.preventDefault();
  }
  const handleDrop=(e)=>{
    e.preventDefault();
    console.log(e.dataTransfer.files[0].name);
    setFiles(e.dataTransfer.files);
  }



  const handleSubmit= ()=>{
    if(files){
        Array.from(files).map((file)=>{
            let obj = {
                name: file.name,
                size: file.size
            };
            setFileDetails((prevValues)=> [...prevValues, obj])
        })
    }
    setModal(false);
  }


  return (
    <>
    
     <div className="parentContainer">
        <div className="childContainer">
            <div className="heading">
                Upload user story documents
            </div>
            <div className="rest">

            
            {!files&&(

                <label for="addFile">
                <div className="uploadArea"
                onDragOver={handleDragOver}
                onDrop={handleDrop} 
                >
                    <div className="uploadIcon">
                        <img src={fileImage} id="fileImage"></img>
                    </div>
                    <div className="uploadMessage">
                        
                            <div>Tap to choose files</div>
                            <div>from your device</div>
                        
                        <input type="file" 
                        multiple name=" " id="addFile"
                        onChange={(e)=>setFiles(e.target.files)}
                        ref={inputRef}
                        />
                        
                    </div>

                </div>
                </label>  
            )}
            {files&&(
                <ul >
                    {Array.from(files).map((file,index)=> <li key={index}>{file.name}</li>)}
                    {/* {
                        filesDetails=Array.from(files).map((file,index)=>{
                            //  obj={
                            //     fileName: file.name,
                            //     fileSize:file.size,
                            // };return obj;
                            filesDetails.push(files.name);
                        })} */}
                    {console.log(files)}
                </ul>       
            )}

            </div>
            
            <div className="buttons">
                <button onClick={()=> setModal(false)} id="cancel" >Cancel</button>
                <button onClick={handleSubmit} id="upload">Upload</button>
            </div>
            
        </div>
     </div>
    </>
  )
}

export default UploadCard