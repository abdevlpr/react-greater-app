import React from "react"
import rightArrow from "../assets/icons/arrow-right.svg"

/* custom component for the title */
export const LoginMessage = (props)=>{
        return (
            <h1 className="log-heading t-align-c t-grey2">
                {props.message}
            </h1>
        )
}
/* custom component for input */
export const LoginInput = (props) =>{
        const label= props.label
        const type = props.type;
        const value= props.value;
        const change= props.change;
        return(
            <div className="log-input card">
                <label htmlFor={label}>
                    {label}
                </label>
                <input type={type} id={label} value={value} onChange={change} required/>
            </div>
        )
}
/* custom component for submit btn */
export const LoginSubmitBtn = (props) => {
      const btnTxt = props.btnTxt
        return(
            <div>
            <label htmlFor="log-submit" className="btn-next btn-interact" href="#">
                        <span>{btnTxt}</span>
                        <div className="icon flex j-c">
                            <img src={rightArrow}/>
                        </div>
                    </label>
                    <input type="submit" id="log-submit" />
            </div>
        )
}