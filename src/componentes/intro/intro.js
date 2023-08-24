import React from "react";
import nestor from "./nestor.png";
import "./intro.css";
import CustomButton from "../buttom/customButton";
/**/

 
function Intro({titulo}){
    return(
        <div className="contenedorImagen">
         <img src={nestor} className="nestor" alt="fotoperfil"/>   
            <h2> {titulo} </h2>
            
        <CustomButton 
        color="blue" texto="boton intro"
        ></CustomButton>

        <CustomButton 
        color="red" texto="boton intro2"
        ></CustomButton>

   </div> 
   )
}

export default Intro;