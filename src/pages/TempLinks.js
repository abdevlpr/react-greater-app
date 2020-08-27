import React from "react";
import {Link} from "react-router-dom"

export default function TempLinks (){
    return(
        <div className="comp">
            temporary nav
            <ul className="flex j-sb card">
                <Link to='/signin'>sign in</Link>
                <Link to='/signup'>sign up</Link>
                <Link to='/recover'>recover</Link>
            </ul>
        </div>
    )

}