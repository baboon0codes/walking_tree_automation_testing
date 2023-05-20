import React,{useState} from "react";
import './Portal.css'
import UploadCard from '../UploadCard/UploadCard'
import logo from '../../images/company_LOGO_2.svg'
import user from '../../images/user.svg'
import imgfileUpload from '../../images/file.svg'
import imgfileDownload from'../../images/file_download.svg'
import deleteLogo from '../../images/deleteLogo.svg'

const Portal = () => {

  const[modal,setModal]=useState(false);
  const [fileDetails, setFileDetails] = useState([]);
  const [arr,setArr]=useState([]);
  const [showResults, setShowResults] = useState(false); 
  const [buttonColor, setbuttonColor] = useState('#989898'); 
  const [generate,setGenrate]=useState('Generate')
  let value =0;

  const toggleModal=()=>{
    setModal(!modal)
  }

  const handleClick=()=>{
    if(fileDetails){
      setArr(fileDetails)
      setShowResults(true);
      setbuttonColor('#2F2CAB')
      setGenrate('Finish')
      ++value
      if(value==2){
        window.location.reload();
      }
    }
  }

  return (
    
    <>  

        {!modal&&(
            <div className="outercontainer"> 
            <div className="navbar">
                <img src={logo} id="logo"></img>
                <img src={user} id="user"></img> 
            </div>
  
            <div className="userDetails">
              <div className="Hello">
                HELLO!
              </div>
              <div className="User">
                USER USER
              </div>
            </div>
  
            <div className="BottomContainer">


                <div className={`documents ${fileDetails? 'classA': 'classB'}`}>
                    <div className="docHeading">
                      Generate Test Cases 
                    </div>
                    <div className="upload">
                        
                        <div className="beforeModal" onClick={toggleModal}>
                          {<img src={imgfileUpload} id="uploadFile"/>}
                          <div className="uploadText">
                            Upload User Story Documents
                          </div>
                        </div>
                        
                        {fileDetails && fileDetails.map((file)=>{
                          
                          return <div className="fileUploadCard">
                          <div className="wrapperDiv">
                            <img src={imgfileUpload} id="file"></img>
                            <div className="fileDetails">
                                <div className="fileName">
                                  {file.name}
                                </div>
                                <div className="fileSize">
                                  {file.size} kb
                                </div>
                            </div>
                          </div>
                          
                          <img src={deleteLogo}></img>   
                        </div>
                        })}
                        
                      </div>
                    </div>

                  
            <div className="results">
                    {showResults&&(<div className="resultsText">
                      Results
                      </div>) }

            {arr && arr.map((file) =><div className="fileResultCard">
                      <div className="wrapperDiv">
                        <img src={imgfileUpload} id="file"></img>
                            <div className="fileDetails">
                                <div className="fileName">
                                  TestCases.pdf
                                </div>
                                <div className="fileSize">
                                  {file.size} kB
                                </div>
                            </div>
                      </div>    
                      <img src={imgfileDownload} id="downloadFile"></img>   
                  </div>)}
                </div>


                <div className="finish">
                  
                  <button onClick={handleClick} style={{ backgroundColor: buttonColor} }id="generate">
                    {generate}
                  </button>
                </div>

                </div>   
                 
                

            </div>
          
        )}
        
        
        {modal&&(
          <UploadCard setFileDetails={setFileDetails} modal={modal} setModal={setModal} onClickFunction={toggleModal} status={modal} />
        )} 
                
        
        {/* </div>   */}
  </>
  )
}

export default Portal