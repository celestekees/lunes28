import React from "react";
import { Link } from "react-router-dom";
/*import "./Home.css";*/



function Home(){
    return(
        
        <div>
        <h1>Inicio</h1>
        <Link to="/producto/1"> Ver producto 1 </Link>
        <Link to="/registro"> Registro </Link>
        <Link to="/login"> Login </Link>

        </div>
        
   )
}

export default Home;