import React from "react";
import{Routes,Route} from "react-router-dom";
import SignUp from "../components/signup";
import LoginForm from "../components/login";
import Notes from "../components/notes";
function Allroutes(){

    return <div>

<Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/notes" element={<Notes/>}/>

</Routes>

    </div>
}

export default Allroutes;