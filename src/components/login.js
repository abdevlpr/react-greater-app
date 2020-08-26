import React, {useState} from "react";
import  "../css/comp-mobile.css"
import  "../css/comp-desktop.css"


const Loggin = (props) => {

    return(
    <div>
        this is a component test
    </div>
    )
    
    }


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


    return(
        <div className="login flex j-c">
            <div className="login-inner">
            <div className="log-wrapper">
                <h1 className="log-heading t-align-c t-grey2">Welcome
                    Back</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="log-input card">
                        <label for="login-email">
                            Email
                        </label>
                        <input type="email" id="login-email" value={userCred.email} onChange={handleChange} required/>
                    </div>
                    <div className="log-input card">
                        <label for="login-password">
                            Password
                        </label>
                        <input type="password" id="login-password" value={userCred.password} onChange={handleChange} required />
                    </div>
                    <div className="des">
                        <a href="#" className="t-grey1">
                            Forgot Password?
                        </a>
                    </div>
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
                    <div className="des">
                        <span className="t-grey2">Don’t have an account? <a href="#" className="t-blue">Sign Up</a></span>
                    </div>
                </form>
                <Loggin />
            </div>
            <div className="login-left flex j-c">
                <img src="https://p1.pxfuel.com/preview/547/119/749/profile-man-portrait-young-take-it-easy-youth-royalty-free-thumbnail.jpg" alt="" />
            </div>
        </div>
        </div>
    )
}