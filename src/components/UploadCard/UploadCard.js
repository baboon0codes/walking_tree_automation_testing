import React from "react";
import './UploadCard.css';
import fileImage from '../../images/file.svg'

const UploadCard = () => {
  return (
    <>
     <div className="parentContainer">
        <div className="childContainer">
            <div className="heading">
                Upload user story documents
            </div>
            <div className="uploadArea">
                <div className="uploadIcon">
                    <img src={fileImage} id="fileImage"></img>
                </div>
                <div className="uploadMessage">
                    <div>Tap to choose files</div>
                     <div>from your device</div>
                </div>

            </div>
            <div className="buttons">
                <button id="cancel">Cancel</button>
                <button id="upload">Upload</button>
            </div>
            
        </div>
     </div>
    </>
  )
}

export default UploadCard