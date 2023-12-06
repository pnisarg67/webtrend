import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Pages/Main";
import About from "../Pages/About";
import Contact from "../Pages/Contact";



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
            <Main/>} >
            </Route>
            <Route path="/about" element={
              <About/>}>
            </Route>
            <Route path="/contact" element={
              <Contact/>}>
            </Route>
            
        
        </Routes>
    );
}

export default AppRoutes;
