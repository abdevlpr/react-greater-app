import React, {useState} from "react";

import loginImg from "../assets/bg/svg/login.svg"
import signupImg from "../assets/bg/svg/signup.svg"
import forgotImg from "../assets/bg/svg/forgot-pass.svg"

export default function Login(){

    const [userCred,setUserCred] = useState({email:"",password:""})

    const handleChange = (t) => {
        const targ = t.target
        setUserCred({...userCred,[targ.type]:targ.value})
        console.log(`the target is ${targ} and the type is ${targ.type}`)
    }


    const handleSubmit= (t) =>{
        t.preventDefault()
        console.log("success and the object is",userCred)
        /* TODO: handle the submition to the server */
    }

    console.log("the state is",userCred)


    const LoginMessage = (props)=>{
        return (
            <h1 className="log-heading t-align-c t-grey2">
            {props.message}
            {/* Welcome Back */}
            </h1>
        )
    }
    
    const LoginInput = (props) =>{
        const type = props.type;
        return(
            <div className="log-input card">
                <label for={type}>
                    {type}
                </label>
                <input type={type} id={type} value={userCred.[type]} onChange={handleChange} required/>
            </div>
        )
    }

    const LoginSubmitBtn = (Props) => {
        return(
            <div>
            <label for="log-submit" className="btn-next btn-interact" href="#">
                        <span>SIGN IN</span>
                        <div className="icon flex j-c">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="white" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </label>
                    <input type="submit" id="log-submit" />
            </div>
        )
    }

    return(
        <div className="login flex j-c">
            <div className="login-inner">
            <div className="log-wrapper">
                <LoginMessage message="welcome back"/>
                <form action="" onSubmit={handleSubmit}>
                    <LoginInput type="email"/>
                    <LoginInput type="password"/>
                    <div className="des">
                        <a href="#" className="t-grey1">
                            Forgot Password?
                        </a>
                    </div>
                    <LoginSubmitBtn />
                    <div className="des">
                        <span className="t-grey2">Don’t have an account? <a href="#" className="t-blue">Sign Up</a></span>
                    </div>
                </form>
            </div>
            <div className="login-left flex j-c">
                <img src={loginImg}/>
            </div>
        </div>
        </div>
    )
}