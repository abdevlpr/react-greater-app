import React, {useState} from "react"
import {Link} from "react-router-dom"

/* components */
import {LoginMessage,LoginInput,LoginSubmitBtn} from "../components/login"

/* assets */
import signupImg from "../assets/bg/svg/signup.svg"


export default function Signup(){

    /* state object to store the email and password */
    const [userCred,setUserCred] = useState({name:"",email:"",password:""})

    /* handling change on the inputs */
    const handleChange = (event) => {
        const target = event.target
        const targetName = target.id.toString().toLowerCase()
        setUserCred({...userCred,[targetName]:target.value})
    }

    /* handling form submition */
    const handleSubmit= (event) =>{
        event.preventDefault()
        console.log("successfully submitted and the result is an object :",userCred)
        /* TODO: handle the submition to the server */
    }

    //test to see the state changing
    //console.log("the state is",userCred)

    return(
        <div className="login flex j-c">
            <div className="login-inner">
            <div className="log-wrapper">
                <LoginMessage message="Create a new account"/>
                <form action="" onSubmit={handleSubmit}>
                    <LoginInput label="Name" type="text" value={userCred.name} change={handleChange}/>
                    <LoginInput label="Email" type="email" value={userCred.email} change={handleChange}/>
                    <LoginInput label="Password" type="password" value={userCred.password} change={handleChange}/>
                    <LoginSubmitBtn btnTxt="SIGN UP"/>
                    <div className="des">
                        <span className="t-grey2">
                            Already an account?
                             <Link to='/signin' className="t-blue">
                                 Sign in
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
            <div className="login-left flex j-c">
                <img src={signupImg}/>
            </div>
        </div>
        </div>
    )
}