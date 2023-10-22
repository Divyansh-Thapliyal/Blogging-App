
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import NavBar from "./components/UI/NavBar";
import HomePage from "./components/pages/HomePage";
import Settings from "./components/pages/Settings";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useContext } from "react";
import { Context } from "./context/Context";


const App=() =>{

  const {user}=useContext(Context);
  
  return  <Router>
      <NavBar></NavBar>
  <Routes>
    <Route path="/"  element={<HomePage></HomePage>} />
    <Route path="/write" element={user?<Write></Write>:<Register></Register>} />
    <Route path="/settings" element={user?<Settings></Settings>:<Register></Register>} />
    <Route path="/login" element={user?<HomePage></HomePage>:<Login></Login>} />
    <Route path="/register" element={user?<HomePage/>:<Register/>} />
    <Route path="/post/:postId" element={<Single></Single>} />
    
  </Routes>
</Router>

}

export default App;