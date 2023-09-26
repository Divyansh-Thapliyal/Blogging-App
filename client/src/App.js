
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

import NavBar from "./components/UI/NavBar";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";


const App=() =>{

  const user=true;
  
  return  <Router>
      <NavBar></NavBar>
  <Routes>
    <Route path="/"  element={<HomePage></HomePage>} />
    <Route path="/login" element={user?<HomePage></HomePage>:<Login></Login>} />
    <Route path="/register" element={user?<HomePage/>:<Register/>} />
    
    
  </Routes>
</Router>

}

export default App;