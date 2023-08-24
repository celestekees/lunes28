import React, { useState } from "react";
/*creamos un cambio de estado*/
const Ejemplo=() =>{
   /* let texto="texto información .........."*/
    const [nombre,SetNombre]=useState('Cristina');
    //esta fc cambia el valor del nombre a Nestor
    const CambiarNombre=() =>{
        SetNombre('Nestor');
    }
    return(
        <div>
            <h3>ejemplos</h3>
                <h4>{nombre}</h4>

       
        <button onClick={CambiarNombre}>
            Cambiar Nombre</button>
     </div>
     )
}

export default Ejemplo;
