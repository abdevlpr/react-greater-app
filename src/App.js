import React from "react";
import {BrowserRouter , Route} from 'react-router-dom'

import  "./css/comp-mobile.css"
import  "./css/comp-desktop.css"


import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PassRecover from "./pages/PassRecover"
import TempLinks from "./pages/TempLinks"


export default function App() {
  
  return (
    <BrowserRouter>
      <div>
        <TempLinks />
        {/* setting up the routes */}
        <Route exact path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/recover" component={PassRecover} />
      </div>
    </BrowserRouter>
  );
}
