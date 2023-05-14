import React, { useState } from "react";
import './LoginPage.css';
import brandLogo from '../../images/company_logo.svg'
import loginImage from '../../images/login_img.png'
import walkingTree from '../../images/walking_tree_logo.svg'


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitForm=(e)=>{ 
        e.preventDefault();
        const newEntry=[email,password];
    }
   
    return(
        
        <>

            <div className="flex">
                <div className="leftContainer">
                    <div className="brand">
                        <img src={brandLogo} id="brandLogo"></img>
                    </div>
                    <div className="login">
                        <img src={loginImage} id="LoginImg"></img>
                    </div>
                    

                </div>
                <div className="rightContainer">
                    <div className="containerContents">

                        <div className="containerTexts">
                            <div className="heading">
                                Login & Let us help in your
                            </div>
                            <div className="subHeading">
                                AUTOMATION TESTING
                            </div>
                        </div>
                        <div className="containerForm">
                            <form action="" onSubmit={submitForm}>
                                <div className="emailContainer">
                                    <input type="text" placeholder="Email ID"name="email" id="email" autoComplete="off"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}></input>
                                </div>
                                <div>
                                   
                                    <input type="password" placeholder="Password" name="password" id="password" autoComplete="off"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}></input>
                                </div>
                                <div className="Login">
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="walkingTree">
                            <img src={walkingTree} id="walkingTreeLogo"></img>
                        </div>
                        
                    </div>
                    
                    
                </div>

            </div>
                   
        </>
        
    )   
}

export default LoginPage;