import React from "react";
import {Link} from "react-router-dom"

export default function TempLinks (){

    return(
        <ul className="flex j-sb card comp">
            <Link to='/signin'>sign in</Link>
            <Link to='/signup'>sign up</Link>
            <Link to='/recover'>recover</Link>
        </ul>
    )

}